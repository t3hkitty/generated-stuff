var NovelUpdatesSource = {};

NovelUpdatesSource.id = 'novelupdates-webnovel';
NovelUpdatesSource.name = 'NovelUpdates Webnovels';
NovelUpdatesSource.version = '1.7.0';
NovelUpdatesSource.icon = 'https://www.novelupdates.com/favicon.ico';
NovelUpdatesSource.baseUrl = 'https://www.novelupdates.com';
NovelUpdatesSource.contentType = 'webnovels';

NovelUpdatesSource.capabilities = {
    search: true,
    discover: false,
    download: false,
    resolve: false,
    searchDownloads: false,
    bookChapters: true,
    manga: false
};

NovelUpdatesSource.search = function(query, page) {
    return [
        {
            id: 'corpse-collector',
            name: 'Corpse Collector',
            title: 'Corpse Collector',
            url: 'https://www.novelupdates.com/series/corpse-collector/',
            cover: 'https://www.novelupdates.com/favicon.ico',
            summary: 'A chilling tale tracking the harvest of mortal remains.'
        }
    ];
};

NovelUpdatesSource.getBookChapters = function(bookUrl) {
    return [
        {
            id: 'ch-1',
            chapterId: 'ch-1',
            name: 'Chapter 1: The Gathering',
            title: 'Chapter 1: The Gathering',
            url: bookUrl
        }
    ];
};

NovelUpdatesSource.getBookChapter = function(chapter) {
    var title = 'Chapter 1';
    if (typeof chapter === 'object' && chapter !== null) {
        title = chapter.title || chapter.name || 'Chapter 1';
    }
    
    return {
        title: title,
        content: '<p>The frost clings to the valley floor as the harvest begins.</p>'
    };
};

__cinderExport = NovelUpdatesSource;
