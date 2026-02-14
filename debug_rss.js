// Native fetch is available in Node 18+

// Constants
const RSS2JSON_API_URL = 'https://api.rss2json.com/v1/api.json';

// Logic from newsConfig.js
const getNewsFeedUrl = (language, date) => {
     let queryTime = '';
     const today = new Date().toISOString().split('T')[0];

     if (date === today) {
          queryTime = 'when:1d';
     } else {
          // Construct query for specific date: after:DATE before:NEXT_DAY
          const targetDate = new Date(date);
          const nextDay = new Date(targetDate);
          nextDay.setDate(targetDate.getDate() + 1);
          const nextDayStr = nextDay.toISOString().split('T')[0];
          queryTime = `after:${date}+before:${nextDayStr}`;
     }

     let rssUrl = '';
     switch (language) {
          case 'ko':
               rssUrl = `https://news.google.com/rss/search?q=인공지능+AI+${queryTime}&hl=ko&gl=KR&ceid=KR:ko`;
               break;
          default: // 'en'
               rssUrl = `https://news.google.com/rss/search?q=Artificial+Intelligence+AI+${queryTime}&hl=en-US&gl=US&ceid=US:en`;
               break;
     }
     return rssUrl;
};

// Main execution
(async () => {
     try {
          const selectedDate = new Date().toISOString().split('T')[0];
          const rssUrl = getNewsFeedUrl('ko', selectedDate);
          console.log("RSS URL:", rssUrl);

          const API_URL = `${RSS2JSON_API_URL}?rss_url=${encodeURIComponent(rssUrl)}&_t=${new Date().getTime()}`;
          console.log("Fetch URL:", API_URL);

          const response = await fetch(API_URL);
          const data = await response.json();

          if (data.status === 'ok') {
               console.log(`Fetched ${data.items.length} items.`);
               data.items.slice(0, 5).forEach((item, index) => {
                    console.log(`[${index}] Title: ${item.title}`);
                    console.log(`    Link: '${item.link}'`);
                    console.log(`    GUID: '${item.guid}'`);
               });
          } else {
               console.log("Status not OK:", data);
          }

     } catch (error) {
          console.error("Error:", error);
     }
})();
