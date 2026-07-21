var FuckNovelpia = {};

FuckNovelpia.id = 'fucknovelpia-webnovel';
FuckNovelpia.name = 'Novelpia Alt Source';
FuckNovelpia.version = '1.0.0';
FuckNovelpia.icon = 'https://novelpia.com/favicon.ico';
FuckNovelpia.baseUrl = 'https://novelpia.com';
FuckNovelpia.contentType = 'webnovels';

FuckNovelpia.capabilities = {
    search: true,
    discover: false,
    download: false,
    resolve: false,
    searchDownloads: false,
    bookChapters: true,
    manga: false
};

FuckNovelpia.search = async function(query) {
    return [
        {
            id: 'sample-novelpia-1',
            name: 'Target Result: ' + query,
            title: 'Target Result: ' + query,
            url: 'https://novelpia.com/search?q=' + encodeURIComponent(query),
            cover: 'https://novelpia.com/favicon.ico',
            summary: 'Protected archive payload mapping for ' + query
        }
    ];
};

__cinderExport = FuckNovelpia;
