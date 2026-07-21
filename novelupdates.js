import { Client } from '@cinder/types';

export default class NovelUpdates extends Client {
    id = 'novelupdates';
    name = 'NovelUpdates';
    baseUrl = 'https://www.novelupdates.com';
    icon = 'https://www.novelupdates.com/favicon.ico';

    async login() {
        return await this.client.webViewLogin({
            url: `${this.baseUrl}/login.php`,
            title: 'Login to NovelUpdates',
            checkUrl: `${this.baseUrl}/mypage.php`
        });
    }

    async search(query) {
        const res = await this.client.get(`${this.baseUrl}/?s=${encodeURIComponent(query)}`);
        
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
}
