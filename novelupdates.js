var NovelUpdates = {};

NovelUpdates.id = 'novelupdates';
NovelUpdates.name = 'NovelUpdates';
NovelUpdates.version = '1.0.5';
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
    const results = [];
    
    const blockRegex = /<div class="search_block_content">([\s\S]*?)<\/div>\s*<\/div>/g;
    let match;
    
    while ((match = blockRegex.exec(html)) !== null) {
        const block = match[1];
        const titleMatch = block.match(/<div class="search_title">\s*<a href="([^"]+)">([^<]+)<\/a>/);
        const imgMatch = block.match(/<div class="search_img_nick">\s*<img src="([^"]+)"/);
        const excerptMatch = block.match(/<div class="search_excerpt">([\s\S]*?)<\/div>/);

        if (titleMatch) {
            results.push({
                name: titleMatch[2].trim(),
                url: titleMatch[1],
                coverUrl: imgMatch ? imgMatch[1] : '',
                summary: excerptMatch ? excerptMatch[1].replace(/<[^>]*>/g, '').trim() : ''
            });
        }
    }

    return { results };
};

__cinderExport = NovelUpdates;
