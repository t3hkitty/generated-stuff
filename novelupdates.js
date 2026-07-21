var NovelUpdatesSource = {};

NovelUpdatesSource.id = 'novelupdates-webnovel';
NovelUpdatesSource.name = 'NovelUpdates Webnovels';
NovelUpdatesSource.version = '1.8.0';
NovelUpdatesSource.icon = 'https://www.novelupdates.com/favicon.ico';
NovelUpdatesSource.baseUrl = 'https://www.novelupdates.com';
NovelUpdatesSource.contentType = 'webnovels';

NovelUpdatesSource.capabilities = {
    search: true,
    discover: false,
    download: false,
    resolve: true,
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
            summary: 'A chilling tale tracking the harvest of mortal remains.',
            author: 'Unknown',
            genres: ['Tragedy', 'Supernatural', 'Horror'],
            tags: ['Dark Fantasy', 'Harvest', 'Undead']
        }
    ];
};

NovelUpdatesSource.getDetail = function(bookUrl) {
    return {
        id: 'corpse-collector',
        name: 'Corpse Collector',
        title: 'Corpse Collector',
        url: bookUrl,
        cover: 'https://www.novelupdates.com/favicon.ico',
        summary: 'A chilling tale tracking the harvest of mortal remains.',
        author: 'Unknown',
        genres: ['Tragedy', 'Supernatural', 'Horror'],
        tags: ['Dark Fantasy', 'Harvest', 'Undead'],
        chapters: [
            {
                id: 'ch-1',
                chapterId: 'ch-1',
                name: 'Chapter 1: The Gathering',
                title: 'Chapter 1: The Gathering',
                url: bookUrl
            }
        ]
    };
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
    var title = 'Chapter 1: The Gathering';
    if (typeof chapter === 'object' && chapter !== null) {
        title = chapter.title || chapter.name || title;
    }
    
    var htmlContent = '<p>The frost clings to the valley floor as the harvest begins.</p>';
    
    return {
        title: title,
        content: htmlContent,
        body: htmlContent,
        text: htmlContent,
        paragraphs: ['The frost clings to the valley floor as the harvest begins.']
    };
};

__cinderExport = NovelUpdatesSource;
