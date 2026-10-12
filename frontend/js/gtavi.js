/* ========================= */
/* GTA VI SHOWCASE */
/* ========================= */

// Screenshot carousel
const screenshots = document.querySelectorAll('.gtaviScreenshot');
const navButtons = document.querySelectorAll('.gtaviNavBtn');
let currentScreenshot = 0;

function showScreenshot(index) {
    screenshots.forEach((screenshot, i) => {
        screenshot.classList.toggle('gtaviScreenshotActive', i === index);
    });
    
    navButtons.forEach((btn, i) => {
        btn.classList.toggle('gtaviNavBtnActive', i === index);
    });
    
    currentScreenshot = index;
}

navButtons.forEach((btn, index) => {
    btn.addEventListener('click', () => {
        showScreenshot(index);
    });
});

// Auto-rotate screenshots
setInterval(() => {
    const nextIndex = (currentScreenshot + 1) % screenshots.length;
    showScreenshot(nextIndex);
}, 5000);

/* ========================= */
/* GTA VI NEWS */
/* ========================= */

async function loadGTAVINews() {
    const newsGrid = document.getElementById('gtaviNewsGrid');
    
    try {
        const response = await fetch('/api/news');
        
        if (!response.ok) {
            throw new Error('Failed to fetch news');
        }
        
        const news = await response.json();
        
        // Filter for GTA VI related news
        const gtaNews = news
            .filter(article => {
                const title = article.title?.toLowerCase() || '';
                const description = article.description?.toLowerCase() || '';
                return title.includes('gta') || 
                       title.includes('grand theft auto') || 
                       description.includes('gta vi') ||
                       description.includes('grand theft auto vi') ||
                       title.includes('rockstar');
            })
            .slice(0, 6);
        
        if (gtaNews.length === 0) {
            // If no GTA news, show general gaming news
            const generalNews = news.slice(0, 6);
            renderNewsCards(generalNews);
            return;
        }
        
        renderNewsCards(gtaNews);
        
    } catch (error) {
        console.error('Error loading GTA VI news:', error);
        newsGrid.innerHTML = `
            <p class="gtaviNewsLoading">
                Unable to load news at this time. Please check back later.
            </p>
        `;
    }
}

function renderNewsCards(newsArticles) {
    const newsGrid = document.getElementById('gtaviNewsGrid');
    
    if (!newsArticles || newsArticles.length === 0) {
        newsGrid.innerHTML = `
            <p class="gtaviNewsLoading">
                No GTA VI news available at the moment. Check back soon!
            </p>
        `;
        return;
    }
    
    newsGrid.innerHTML = newsArticles
        .map(article => {
            const date = article.publishedAt 
                ? new Date(article.publishedAt).toLocaleDateString('en-US', {
                    month: 'short',
                    day: 'numeric',
                    year: 'numeric'
                })
                : 'Recent';
            
            const image = article.urlToImage || 'https://via.placeholder.com/400x200?text=GTA+VI+News';
            const title = article.title || 'Untitled';
            const description = article.description || 'Read more about this story...';
            const url = article.url || '#';
            
            // Truncate description
            const shortDescription = description.length > 120 
                ? description.substring(0, 120) + '...' 
                : description;
            
            return `
                <a href="${url}" target="_blank" rel="noopener noreferrer" class="gtaviNewsCard" style="text-decoration: none;">
                    <img src="${image}" alt="${title}" class="gtaviNewsImage" onerror="this.src='https://via.placeholder.com/400x200?text=GTA+VI'">
                    <div class="gtaviNewsContent">
                        <h4 class="gtaviNewsTitle">${title}</h4>
                        <p class="gtaviNewsExcerpt">${shortDescription}</p>
                        <p class="gtaviNewsDate">${date}</p>
                    </div>
                </a>
            `;
        })
        .join('');
}

// Load news on page load
if (document.getElementById('gtaviNewsGrid')) {
    loadGTAVINews();
}

/* ========================= */
/* SMOOTH SCROLL TO NEWS */
/* ========================= */

const newsButton = document.querySelector('a[href="#gtaviNews"]');
if (newsButton) {
    newsButton.addEventListener('click', (e) => {
        e.preventDefault();
        const newsSection = document.getElementById('gtaviNews');
        if (newsSection) {
            newsSection.scrollIntoView({ 
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
}
