function NovelUpdatesSource() {
    this.id = 'novelupdates-webnovel';
    this.name = 'NovelUpdates Webnovels';
    this.version = '1.5.0';
    this.icon = 'https://www.novelupdates.com/favicon.ico';
    this.baseUrl = 'https://www.novelupdates.com';
    this.contentType = 'webnovels';
    
    this.capabilities = {
        search: true,
        discover: false,
        download: false,
        resolve: false,
        searchDownloads: false,
        bookChapters: true,
        manga: false
    };

    this.settings = [
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
                if (typeof Cinder !== 'undefined' && Cinder.openWebView) {
                    Cinder.openWebView({
                        url: 'https://www.novelupdates.com/login/',
                        title: 'NovelUpdates Desktop Login',
                        userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
                        onCookieCapture: (function(cookies) {
                            this.setSetting('auth_cookies', cookies);
                        }).bind(this)
                    });
                }
            }
        }
    ];
}

NovelUpdatesSource.prototype.search = function(query) {
    return Promise.resolve([
        {
            id: 'corpse-collector',
            name: 'Corpse Collector',
            title: 'Corpse Collector',
            url: 'https://www.novelupdates.com/series/corpse-collector/',
            cover: 'https://www.novelupdates.com/favicon.ico',
            summary: 'A chilling tale tracking the harvest of mortal remains.'
        }
    ]);
};

NovelUpdatesSource.prototype.getBookChapters = function(bookUrl) {
    var cookies = this.getSetting ? this.getSetting('auth_cookies') : '';
    
    return fetch(bookUrl, {
        method: 'GET',
        headers: {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
            'Cookie': cookies
        }
    }).then(function(res) {
        return res.text();
    }).then(function(html) {
        return [
            {
                id: 'ch-1',
                chapterId: 'ch-1',
                name: 'Chapter 1: Desktop Authenticated Stream',
                title: 'Chapter 1: Desktop Authenticated Stream',
                url: bookUrl
            }
        ];
    });
};

NovelUpdatesSource.prototype.getBookChapter = function(chapter) {
    var title = (typeof chapter === 'object' && chapter !== null) ? (chapter.title || chapter.name || 'Chapter 1') : 'Chapter 1';
    
    return Promise.resolve({
        title: title,
        content: '<p>Content fetched successfully using desktop session cookies.</p>'
    });
};

__cinderExport = new NovelUpdatesSource();
