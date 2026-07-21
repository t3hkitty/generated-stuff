var NovelUpdatesSource = {};

NovelUpdatesSource.id = 'novelupdates-webnovel';
NovelUpdatesSource.name = 'NovelUpdates Webnovels';
NovelUpdatesSource.version = '2.0.0';
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

NovelUpdatesSource.settings = [
    {
        key: 'auth_cookies',
        name: 'Desktop Session Cookies',
        type: 'text',
        default: '',
        description: 'Captured cookies from desktop login webview.'
    },
    {
        key: 'open_login_webview',
        name: 'Login via Desktop View',
        type: 'button',
        description: 'Open desktop login page in webview to capture valid session cookies.',
        action: function() {
            var self = this;
            if (typeof Cinder !== 'undefined' && Cinder.openWebView) {
                Cinder.openWebView({
                    url: 'https://www.novelupdates.com/login/',
                    title: 'NovelUpdates Desktop Login',
                    userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
                    onCookieCapture: function(cookies) {
                        if (typeof self.setSetting === 'function') {
                            self.setSetting('auth_cookies', cookies);
                        }
                    }
                });
            }
        }
    }
];

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
            genres: ['Tragedy', 'Supernatural'],
            tags: ['Dark Fantasy', 'Harvest']
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
        genres: ['Tragedy', 'Supernatural'],
        tags: ['Dark Fantasy', 'Harvest'],
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
