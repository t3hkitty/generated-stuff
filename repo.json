var NovelUpdates = {};

NovelUpdates.id = 'novelupdates-webnovel';
NovelUpdates.name = 'NovelUpdates Webnovels';
NovelUpdates.version = '1.1.2';
NovelUpdates.icon = 'https://www.novelupdates.com/favicon.ico';
NovelUpdates.baseUrl = 'https://www.novelupdates.com';
NovelUpdates.contentType = 'books';
NovelUpdates.isWebnovel = true;

NovelUpdates.capabilities = {
    search: true,
    discover: false,
    download: false,
    resolve: false,
    searchDownloads: false,
    bookChapters: true,
    manga: false
};

NovelUpdates.search = async function(query) {
    return {
        results: [
            {
                name: 'Webnovel Result: ' + query,
                url: 'https://www.novelupdates.com/?s=' + encodeURIComponent(query),
                coverUrl: 'https://www.novelupdates.com/favicon.ico',
                summary: 'Webnovel source entry.'
            }
        ]
    };
};

__cinderExport = NovelUpdates;
