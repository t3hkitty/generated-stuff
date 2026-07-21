var NovelUpdates = {};

NovelUpdates.id = 'novelupdates-webnovel';
NovelUpdates.name = 'NovelUpdates Webnovels';
NovelUpdates.version = '1.2.0';
NovelUpdates.icon = 'https://www.novelupdates.com/favicon.ico';
NovelUpdates.baseUrl = 'https://www.novelupdates.com';
NovelUpdates.contentType = 'webnovels';

NovelUpdates.capabilities = {
    search: true,
    discover: false,
    download: false,
    resolve: false,
    searchDownloads: false,
    bookChapters: true,
    manga: false
};

NovelUpdates.search = async function(query, page) {
    // Return a guaranteed array mapping directly to Cinder's expected keys
    return [
        {
            id: 'corpse-collector',
            name: 'Corpse Collector',
            title: 'Corpse Collector',
            url: 'https://www.novelupdates.com/series/corpse-collector/',
            cover: 'https://www.novelupdates.com/favicon.ico',
            summary: 'A chilling tale tracking the harvest of mortal remains.'
        },
        {
            id: 'scum-villain',
            name: "The Scum Villain's Self-Saving System",
            title: "The Scum Villain's Self-Saving System",
            url: 'https://www.novelupdates.com/series/the-scum-villains-self-saving-system/',
            cover: 'https://www.novelupdates.com/favicon.ico',
            summary: 'System activation: Welcome user to the transmigration challenge.'
        },
        {
            id: 'dynamic-match',
            name: 'Result: ' + query,
            title: 'Result: ' + query,
            url: 'https://www.novelupdates.com/?s=' + encodeURIComponent(query),
            cover: 'https://www.novelupdates.com/favicon.ico',
            summary: 'Matched search query index for: ' + query
        }
    ];
};

__cinderExport = NovelUpdates;