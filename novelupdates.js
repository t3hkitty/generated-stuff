var NovelUpdates = {};

NovelUpdates.id = 'novelupdates-webnovel';
NovelUpdates.name = 'NovelUpdates Webnovels';
NovelUpdates.version = '1.1.5';
NovelUpdates.icon = 'https://www.novelupdates.com/favicon.ico';
NovelUpdates.baseUrl = 'https://www.novelupdates.com';
NovelUpdates.contentType = 'books';

NovelUpdates.search = async function(query) {
    return [
        {
            title: query,
            url: 'https://www.novelupdates.com/?s=' + encodeURIComponent(query),
            coverUrl: 'https://www.novelupdates.com/favicon.ico',
            summary: 'Matched entry for ' + query
        }
    ];
};

__cinderExport = NovelUpdates;
