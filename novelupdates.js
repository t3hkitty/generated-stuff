var NovelUpdates = {};

NovelUpdates.id = 'novelupdates';
NovelUpdates.name = 'NovelUpdates';
NovelUpdates.version = '1.0.4';
NovelUpdates.icon = 'https://www.novelupdates.com/favicon.ico';
NovelUpdates.baseUrl = 'https://www.novelupdates.com';

NovelUpdates.search = async function(query) {
    const res = await fetch(`https://www.novelupdates.com/?s=${encodeURIComponent(query)}`, {
        method: 'GET',
        headers: {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'
        }
    });
    
    if (res.status === 403) {
        throw new Error('Cloudflare block detected.');
    }

    const html = await res.text();
    const document = new DOMParser().parseFromString(html, 'text/html');
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
