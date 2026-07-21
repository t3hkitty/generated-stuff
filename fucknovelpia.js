var FuckNovelpiaSource = {};

FuckNovelpiaSource.id = 'fucknovelpia-webnovel';
FuckNovelpiaSource.name = 'Novelpia Alt Source';
FuckNovelpiaSource.version = '1.7.0';
FuckNovelpiaSource.icon = 'https://novelpia.com/favicon.ico';
FuckNovelpiaSource.baseUrl = 'https://novelpia.com';
FuckNovelpiaSource.contentType = 'webnovels';

FuckNovelpiaSource.capabilities = {
    search: true,
    discover: false,
    download: true,
    resolve: true,
    bookChapters: true,
    manga: false
};

FuckNovelpiaSource.search = function(query, page) {
    return [
        {
            id: 'np-' + encodeURIComponent(query),
            name: 'Novelpia Result: ' + query,
            title: 'Novelpia Result: ' + query,
            url: 'https://novelpia.com/search?q=' + encodeURIComponent(query),
            coverUrl: 'https://novelpia.com/favicon.ico',
            summary: 'Object mapping for query: ' + query
        }
    ];
};

FuckNovelpiaSource.getBookChapters = function(bookId) {
    return [
        {
            id: 'ch-1',
            name: 'Chapter 1: Protected Archive',
            url: 'https://novelpia.com/'
        }
    ];
};

FuckNovelpiaSource.getBookChapter = function(chapterId) {
    return {
        title: 'Chapter 1: Protected Archive',
        content: '<p>Decrypted text payload container ready for extraction.</p>'
    };
};

__cinderExport = FuckNovelpiaSource;
