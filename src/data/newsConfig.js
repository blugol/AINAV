export const getNewsFeedUrl = (language, date) => {
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
          case 'ja':
               rssUrl = `https://news.google.com/rss/search?q=AI+人工知能+${queryTime}&hl=ja&gl=JP&ceid=JP:ja`;
               break;
          case 'zh':
               rssUrl = `https://news.google.com/rss/search?q=人工智能+AI+${queryTime}&hl=zh-TW&gl=TW&ceid=TW:zh-Hant`;
               break;
          default: // 'en'
               rssUrl = `https://news.google.com/rss/search?q=Artificial+Intelligence+AI+${queryTime}&hl=en-US&gl=US&ceid=US:en`;
               break;
     }
     return rssUrl;
};
