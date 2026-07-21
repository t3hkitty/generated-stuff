var NovelUpdates = {};

NovelUpdates.id = 'novelupdates-v2';
NovelUpdates.name = 'NovelUpdates V2';
NovelUpdates.version = '1.0.6';
NovelUpdates.icon = 'https://www.novelupdates.com/favicon.ico';
NovelUpdates.baseUrl = 'https://www.novelupdates.com';
NovelUpdates.contentType = 'books';

NovelUpdates.search = async function(query) {
    const res = await fetch(`https://www.novelupdates.com/?s=${encodeURIComponent(query)}`);
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
