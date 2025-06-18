const fetch = require('node-fetch');
const fs = require('fs');
const path = require('path');

// Constants
const ext = '.json';
const dir = path.join(__dirname, 'includes', 'data');

// Elementor URLs
const elementor_sites_per_batch_pages_url = 'https://ccreadysites.cyberchimps.com/wp-json/wp/v2/get-ready-sites-requests-count/?per_page=15/';
const elementor_pages_sites_fetch_base_url = 'https://ccreadysites.cyberchimps.com/wp-json/wp/v2/cyberchimps-sites?per_page=15&page=';

// Utility: clear directory
async function clearDirectory() {
    if (fs.existsSync(dir)) {
        fs.readdirSync(dir).forEach(file => fs.unlinkSync(path.join(dir, file)));
        console.log('✅ Cleared old files.');
    } else {
        fs.mkdirSync(dir, { recursive: true });
        console.log('✅ Created directory.');
    }
}

// Utility: write properly formatted JSON
function writeJsonToFile(filename, data) {
    const formattedJson = JSON.stringify(data, null, 4); // 2 spaces for indentation
    fs.writeFileSync(filename, formattedJson);
}

// Main Fetch function with Gutenberg filter
async function fetchAndSaveGutenbergSites() {
    try {
        // First get total pages count
        const res = await fetch(elementor_sites_per_batch_pages_url);
        const totalPages = parseInt(await res.text(), 10);

        if (!totalPages || totalPages <= 0) {
            console.error('❌ Invalid totalPages value');
            return;
        }

        console.log('🔵 Total pages:', totalPages);

        // Fetch all pages and collect Gutenberg sites in an array
        const allGutenbergSites = [];
        let currentPage = 1;

        while (currentPage <= totalPages) {
            try {
                const pageUrl = `${elementor_pages_sites_fetch_base_url}${currentPage}`;
                const pageRes = await fetch(pageUrl);
                const pageData = await pageRes.json();

                // Filter for Gutenberg sites and add to our array
                pageData.forEach(site => {
                    if (site.page_builder === 'gutenberg') {
                        allGutenbergSites.push(site);
                    }
                });

                console.log(`✅ Processed page ${currentPage} - found ${allGutenbergSites.length} Gutenberg sites so far`);
                currentPage++;
            } catch (err) {
                console.error(`❌ Error fetching page ${currentPage}:`, err);
                break;
            }
        }

        // Save the filtered results as a properly formatted JSON array
        const outputPath = path.join(dir, `responsive-sites-gutenberg-all${ext}`);
        writeJsonToFile(outputPath, allGutenbergSites);
        console.log(`🎉 Saved ${allGutenbergSites.length} Gutenberg sites to ${outputPath}`);

    } catch (err) {
        console.error('❌ Error in fetchAndSaveGutenbergSites:', err);
    }
}

// Start function
async function start() {
    await clearDirectory();
    await fetchAndSaveGutenbergSites();
}

start();