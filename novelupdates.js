(function() {
    var NovelUpdates = {
        id: 'novelupdates-webnovel',
        name: 'NovelUpdates Webnovels',
        version: '1.2.2',
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
        },

        search: async function(query) {
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
        },

        getBookChapters: async function(bookId) {
            return [
                {
                    id: 'ch-1',
                    name: 'Chapter 1: The Gathering',
                    url: 'https://www.novelupdates.com/'
                }
            ];
        },

        getBookChapter: async function(chapterId) {
            return {
                title: 'Chapter 1: The Gathering',
                content: '<p>The frost clings to the valley floor as the harvest begins.</p>'
            };
        }
    };

    if (typeof __cinderExport !== 'undefined') {
        __cinderExport = NovelUpdates;
    }
    return NovelUpdates;
})();
