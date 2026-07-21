var NovelUpdates = {};

NovelUpdates.id = 'novelupdates-webnovel';
NovelUpdates.name = 'NovelUpdates Webnovels';
NovelUpdates.version = '1.1.1';
NovelUpdates.icon = 'https://www.novelupdates.com/favicon.ico';
NovelUpdates.baseUrl = 'https://www.novelupdates.com';

NovelUpdates.search = async function(query) {
    return {
        results: [
            {
                name: 'Result for ' + query,
                url: 'https://www.novelupdates.com',
                coverUrl: 'https://www.novelupdates.com/favicon.ico',
                summary: 'Webnovel source mock mapping.'
            }
        ]
    };
};

__cinderExport = NovelUpdates;
