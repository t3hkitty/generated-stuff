var NovelUpdates = {};

NovelUpdates.id = 'novelupdates';
NovelUpdates.name = 'NovelUpdates';
NovelUpdates.version = '1.0.4';
NovelUpdates.icon = 'https://www.novelupdates.com/favicon.ico';
NovelUpdates.baseUrl = 'https://www.novelupdates.com';
NovelUpdates.contentType = 'books';
NovelUpdates.capabilities = {
    search: true,
    discover: false,
    download: false,
    resolve: false,
    searchDownloads: false,
    bookChapters: false,
    manga: false
};

NovelUpdates.search = async function(query, page) {
    // Use Cinder's built-in global request/network handler instead of window fetch
    const response = await request(`https://www.novelupdates.com/?s=${encodeURIComponent(query)}`, {
        method: 'GET',
        headers: {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'
        }
    });

    const html = response.body || response.data || response;
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
                id: titleMatch[1],
                title: titleMatch[2].trim(),
                cover: imgMatch ? imgMatch[1] : '',
                url: titleMatch[1],
                source: 'NovelUpdates',
                format: 'epub'
            });
        }
    }

    return results;
};

__cinderExport = NovelUpdates;
