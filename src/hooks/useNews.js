import { useState, useEffect } from 'react';

export const useNews = (language, newsTimeFilter, tools) => {
    const [newsData, setNewsData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchNews = async () => {
            setLoading(true);
            try {
                let rssUrl = '';

                switch (language) {
                    case 'ko':
                        rssUrl = `https://news.google.com/rss/search?q=인공지능+AI+when:${newsTimeFilter}&hl=ko&gl=KR&ceid=KR:ko`;
                        break;
                    case 'ja':
                        rssUrl = `https://news.google.com/rss/search?q=AI+人工知能+when:${newsTimeFilter}&hl=ja&gl=JP&ceid=JP:ja`;
                        break;
                    case 'zh':
                        rssUrl = `https://news.google.com/rss/search?q=人工智能+AI+when:${newsTimeFilter}&hl=zh-TW&gl=TW&ceid=TW:zh-Hant`;
                        break;
                    default: // 'en'
                        rssUrl = `https://news.google.com/rss/search?q=Artificial+Intelligence+AI+when:${newsTimeFilter}&hl=en-US&gl=US&ceid=US:en`;
                        break;
                }

                const API_URL = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(rssUrl)}`;

                const response = await fetch(API_URL);
                const data = await response.json();

                if (data.status === 'ok') {
                    // Dynamic Tool Keywords from tools + Extras
                    const TOOL_KEYWORDS = tools.map(t => ({
                        keyword: t.name, name: t.name, url: t.websiteUrl
                    })).concat([
                        { keyword: 'GPT', name: 'OpenAI GPT', url: 'https://chat.openai.com/' },
                        { keyword: 'Google', name: 'Google AI', url: 'https://ai.google/' },
                        { keyword: 'Apple', name: 'Apple AI', url: 'https://www.apple.com/siri/' },
                        { keyword: 'Meta', name: 'Meta AI', url: 'https://ai.meta.com/' },
                        { keyword: 'Microsoft', name: 'Microsoft AI', url: 'https://www.microsoft.com/en-us/ai' },
                    ]);

                    const formattedNews = data.items.slice(0, 15).map((item, index) => {
                        // Smart Linking
                        const matchedTool = TOOL_KEYWORDS.find(k =>
                            item.title.toLowerCase().includes(k.keyword.toLowerCase())
                        );

                        // Image Extraction
                        const image = item.enclosure?.link || item.thumbnail || null;

                        // HTML Cleanup
                        let cleanSummary = item.description
                            ? item.description.replace(/<[^>]*>?/gm, '').replace(/&nbsp;/g, ' ').substring(0, 200) + '...'
                            : 'No summary available.';

                        return {
                            id: `live-${language}-${index}`,
                            title: item.title,
                            summary: cleanSummary,
                            image: image,
                            date: item.pubDate ? item.pubDate.split(' ')[0] : '',
                            relatedToolName: matchedTool ? matchedTool.name : 'AI News',
                            relatedToolUrl: matchedTool ? matchedTool.url : item.link,
                            newsUrl: item.link,
                        };
                    });
                    setNewsData(formattedNews);
                    setError(null);
                } else {
                    // Fallback or error handling
                    setError("Failed to parse RSS feed status.");
                }
            } catch (err) {
                console.error("Failed to fetch news:", err);
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchNews();
    }, [language, newsTimeFilter, tools]);

    return { newsData, loading, error };
};
