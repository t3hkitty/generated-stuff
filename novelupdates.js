var NovelUpdates = {};

NovelUpdates.id = 'novelupdates-webnovel';
NovelUpdates.name = 'NovelUpdates Webnovels';
NovelUpdates.version = '1.1.7';
NovelUpdates.icon = 'https://www.novelupdates.com/favicon.ico';
NovelUpdates.baseUrl = 'https://www.novelupdates.com';
NovelUpdates.contentType = 'webnovels';

NovelUpdates.search = async function(query) {
    const res = await fetch(`https://www.novelupdates.com/?s=${encodeURIComponent(query)}`, {
        method: 'GET',
        headers: {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'
        }
    });
    
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
                title: titleMatch[2].trim(),
                url: titleMatch[1],
                coverUrl: imgMatch ? imgMatch[1] : '',
                summary: excerptMatch ? excerptMatch[1].replace(/<[^>]*>/g, '').trim() : ''
            });
        }
    }

    return results;
};

__cinderExport = NovelUpdates;