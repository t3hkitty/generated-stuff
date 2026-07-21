export default {
    id: 'novelupdates',
    name: 'NovelUpdates',
    version: '1.0.2',
    icon: 'https://www.novelupdates.com/favicon.ico',
    baseUrl: 'https://www.novelupdates.com',

    async login(client) {
        return await client.webViewLogin({
            url: 'https://www.novelupdates.com/login.php',
            title: 'Login to NovelUpdates',
            checkUrl: 'https://www.novelupdates.com/mypage.php'
        });
    },

    async search(client, query) {
        const res = await client.get(`https://www.novelupdates.com/?s=${encodeURIComponent(query)}`);
        
        if (res.status === 403) {
            throw new Error('Cloudflare block detected. Please log in via extension settings.');
        }

        const document = new DOMParser().parseFromString(res.data, 'text/html');
        const elements = document.querySelectorAll('div.search_block_content');
        
        const results = [];
        for (const el of elements) {
            const titleEl = el.querySelector('div.search_title > a');
            const imgEl = el.querySelector('div.search_img_nick > img');
            const excerptEl = el.querySelector('div.search_excerpt');

            if (titleEl) {
                results.push({
                    name: titleEl.textContent?.trim() || '',
                    url: titleEl.getAttribute('href') || '',
                    coverUrl: imgEl?.getAttribute('src') || '',
                    summary: excerptEl?.textContent?.trim() || ''
                });
            }
        }
        return { results };
    }
};
