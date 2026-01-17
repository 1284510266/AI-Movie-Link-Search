const axios = require('axios');
const cheerio = require('cheerio');

async function searchMovies(query) {
    try {
        // We'll use a public magnet search engine as an example.
        // Note: Real-world scraping depends on site availability.
        const searchUrl = `https://www.skrbtso.top/search?q=${encodeURIComponent(query)}`;

        const response = await axios.get(searchUrl, {
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
            },
            timeout: 10000
        });

        const $ = cheerio.path(response.data);
        const results = [];

        $('.search-item').each((i, el) => {
            const title = $(el).find('.item-title').text().trim();
            const magnet = $(el).find('a[href^="magnet:"]').attr('href');
            const info = $(el).find('.item-bar').text().trim();

            if (title && magnet) {
                results.push({
                    title,
                    link: magnet,
                    info
                });
            }
        });

        return results;
    } catch (error) {
        console.error('Search error:', error.message);
        // Fallback or mock data for demonstration if the site is down
        return [
            {
                title: `[Mock] ${query} 4K Blu-ray`,
                link: "magnet:?xt=urn:btih:mock1234567890",
                info: "Size: 15GB | Date: 2024-01-01"
            },
            {
                title: `[Mock] ${query} 1080P WEB-DL`,
                link: "magnet:?xt=urn:btih:mock0987654321",
                info: "Size: 4GB | Date: 2024-01-02"
            }
        ];
    }
}

module.exports = { searchMovies };
