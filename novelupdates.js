(function() {
    var extension = {
        id: 'novelupdates-webnovel',
        name: 'NovelUpdates Webnovels',
        version: '1.3.0',
        icon: 'https://www.novelupdates.com/favicon.ico',
        baseUrl: 'https://www.novelupdates.com',
        contentType: 'webnovels',
        
        capabilities: {
            search: true,
            discover: false,
            download: false,
            resolve: false,
            searchDownloads: false,
            bookChapters: true,
            manga: false
        }
    };

    extension.search = async function(query) {
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

    extension.getBookChapters = async function(bookUrl) {
        return [
            {
                id: 'ch-1',
                name: 'Chapter 1: The Gathering',
                url: 'https://www.novelupdates.com/series/corpse-collector/'
            }
        ];
    };

    extension.getBookChapter = async function(chapterUrl) {
        return {
            title: 'Chapter 1: The Gathering',
            content: '<p>The frost clings to the valley floor as the harvest begins.</p>'
        };
    };

    if (typeof __cinderExport !== 'undefined') {
        __cinderExport = extension;
    }
})();
