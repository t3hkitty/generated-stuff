function NovelUpdatesSource() {
    this.id = 'novelupdates-webnovel';
    this.name = 'NovelUpdates Webnovels';
    this.version = '1.3.2';
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
}

NovelUpdatesSource.prototype.search = async function(query) {
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

NovelUpdatesSource.prototype.getBookChapters = async function(bookUrl) {
    return [
        {
            id: 'ch-1',
            name: 'Chapter 1: The Gathering',
            url: 'https://www.novelupdates.com/series/corpse-collector/'
        }
    ];
};

NovelUpdatesSource.prototype.getBookChapter = async function(chapterUrl) {
    return {
        title: 'Chapter 1: The Gathering',
        content: '<p>The frost clings to the valley floor as the harvest begins.</p>'
    };
};

__cinderExport = new NovelUpdatesSource();
