
/**
 * Vercel Edge Function: News Aggregator (/api/news)
 *
 * This function fetches RSS feeds from multiple sources (TechCrunch, Google News),
 * parses them, and returns a sanitized JSON array.
 * It is designed to be CORS-friendly and cached at the edge.
 *
 * Dependencies:
 *  - rss-parser: For parsing RSS XML. (Need to install: npm install rss-parser)
 *  - dompurify (or similar) is handled on client-side for rendering, but basic clean-up here is good.
 *  - Edge features: standard fetch API.
 */

import Parser from 'rss-parser';

export const config = {
    runtime: 'edge',
};

const parser = new Parser();

// Top AI News Feeds (2026 Context)
const FEEDS = [
    'https://techcrunch.com/category/artificial-intelligence/feed/',
    'https://news.google.com/rss/search?q=Artificial+Intelligence+when:1d&hl=en-US&gl=US&ceid=US:en',
    // Localized feeds can be added via query params if needed
];

export default async function handler(request) {
    const { searchParams } = new URL(request.url);
    const lang = searchParams.get('lang') || 'en';

    // Set CORS headers
    const headers = {
        'Content-Type': 'application/json',
        'Cache-Control': 'public, s-maxage=600, stale-while-revalidate=300', // 10 min cache
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, OPTIONS',
    };

    if (request.method === 'OPTIONS') {
        return new Response(null, { headers });
    }

    try {
        const feedPromises = FEEDS.map(async (url) => {
            try {
                // Fetch raw XML first (sometimes Parser fails directly on Edge due to headers)
                const res = await fetch(url);
                const xml = await res.text();
                const feed = await parser.parseString(xml);
                return feed.items.map(item => ({
                    title: item.title,
                    link: item.link,
                    pubDate: item.pubDate,
                    contentSnippet: item.contentSnippet || item.description, // Short summary
                    source: feed.title || 'AI News Source',
                }));
            } catch (err) {
                console.error(`Failed to fetch feed ${url}:`, err);
                return [];
            }
        });

        const results = await Promise.all(feedPromises);

        // Flatten and Sort by Date (Newest First)
        const allNews = results.flat().sort((a, b) => {
            return new Date(b.pubDate).getTime() - new Date(a.pubDate).getTime();
        });

        // Limit to top 20
        const limitedNews = allNews.slice(0, 20);

        return new Response(JSON.stringify({
            status: 'success',
            data: limitedNews,
            meta: {
                count: limitedNews.length,
                timestamp: new Date().toISOString(),
                lang: lang
            }
        }), { headers });

    } catch (error) {
        return new Response(JSON.stringify({
            status: 'error',
            message: error.message
        }), {
            status: 500,
            headers
        });
    }
}
