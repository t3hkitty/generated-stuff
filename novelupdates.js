var NovelUpdates = {};

NovelUpdates.id = 'novelupdates';
NovelUpdates.name = 'NovelUpdates';
NovelUpdates.version = '1.0.3';
NovelUpdates.icon = 'https://www.novelupdates.com/favicon.ico';
NovelUpdates.baseUrl = 'https://www.novelupdates.com';

NovelUpdates.login = async function() {
    return await this.webViewLogin({
        url: 'https://www.novelupdates.com/login.php',
        title: 'Login to NovelUpdates',
        checkUrl: 'https://www.novelupdates.com/mypage.php'
    });
};

NovelUpdates.search = async function(query) {
    const res = await this.request(`https://www.novelupdates.com/?s=${encodeURIComponent(query)}`);
    
    if (res.status === 403) {
        throw new Error('Cloudflare block detected. Please log in via extension settings.');
    }

    const document = new DOMParser().parseFromString(res.body, 'text/html');
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
};

__cinderExport = NovelUpdates;
