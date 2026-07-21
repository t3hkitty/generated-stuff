var FuckNovelpia = {};

FuckNovelpia.id = 'fucknovelpia-hybrid';
FuckNovelpia.name = 'Novelpia Hybrid Source';
FuckNovelpia.version = '1.1.0';
FuckNovelpia.icon = 'https://novelpia.com/favicon.ico';
FuckNovelpia.baseUrl = 'https://novelpia.com';
FuckNovelpia.contentType = 'books'; // Broad category to satisfy both ePub and text views

FuckNovelpia.capabilities = {
    search: true,
    discover: false,
    download: true,       // Enables direct file/ePub downloading
    resolve: true,        // Allows handling password-protected links or zips
    searchDownloads: true,
    bookChapters: true,   // Enables webnovel chapter parsing mode
    manga: false
};

FuckNovelpia.search = async function(query, page) {
    return [
        {
            id: 'hybrid-sample-1',
            title: 'Hybrid Result: ' + query,
            url: 'https://novelpia.com/search?q=' + encodeURIComponent(query),
            coverUrl: 'https://novelpia.com/favicon.ico',
            summary: 'Dual-mode payload supporting ePub download and webnovel chapters.'
        }
    ];
};

FuckNovelpia.resolve = async function(item) {
    // Intercepts direct downloads to handle custom archive/password logic when the unzip update drops
    return {
        url: item.url,
        filename: 'novelpia_download.epub',
        headers: {
            'User-Agent': 'CinderReader/1.0'
        }
    };
};

FuckNovelpia.getBookChapters = async function(bookId) {
    return [
        {
            id: 'ch-1',
            name: 'Chapter 1: Serialized Stream',
            url: 'https://novelpia.com/'
        }
    ];
};

FuckNovelpia.getBookChapter = async function(chapterId) {
    return {
        title: 'Chapter 1: Serialized Stream',
        content: '<p>Hybrid text rendering pipeline active.</p>'
    };
};

__cinderExport = FuckNovelpia;
