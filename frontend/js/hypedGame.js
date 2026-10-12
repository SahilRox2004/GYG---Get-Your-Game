/* ========================= */
/* MOST HYPED GAME SHOWCASE - DYNAMIC */
/* ========================= */

const HYPED_GAME_CONFIG = {
    2026: {
        gameId: 119133, // GTA VI IGDB ID
        searchTerm: "Grand Theft Auto VI",
        developerLogo: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Rockstar_Games_logo.svg",
        themeColors: {
            primary: "#5fff8c",
            secondary: "#3dd168",
            tertiary: "#2ba84e",
            dark: "#0d4a2e",
            darker: "#2d0a1f"
        },
        editions: [
            {
                name: "Standard Edition",
                price: "$69.99",
                features: [
                    "Full GTA VI base game",
                    "Story mode with dual protagonists",
                    "GTA Online access"
                ]
            },
            {
                name: "Ultimate Edition",
                price: "$99.99",
                features: [
                    "Everything in Standard Edition",
                    "$1,000,000 in-game currency",
                    "Exclusive vehicles and properties",
                    "Season Pass for future DLC"
                ]
            }
        ]
    }
};

const platformLogos = {
    "PC": "windows.svg",
    "Microsoft Windows": "windows.svg",
    "Windows": "windows.svg",
    "Linux": "linux.svg",
    "Mac": "apple.svg",
    "macOS": "apple.svg",
    "PlayStation": "ps1.svg",
    "PlayStation 2": "ps2.svg",
    "PlayStation 3": "ps3.svg",
    "PlayStation 4": "ps4.svg",
    "PlayStation 5": "ps5.svg",
    "PSP": "psp.svg",
    "PlayStation Portable": "psp.svg",
    "PlayStation Vita": "psvita.svg",
    "Xbox": "microsoft-xbox-1.svg",
    "Xbox 360": "xbox-360-1.svg",
    "Xbox One": "xbox-one-3.svg",
    "Xbox Series X|S": "xbox-series-x-s-1.svg",
    "Xbox Series X": "xbox-series-x-s-1.svg",
    "Xbox Series S": "xbox-series-x-s-1.svg",
    "Nintendo Switch": "switch.svg",
    "Nintendo Switch 2": "switch2.svg"
};

let currentScreenshot = 0;
let screenshots = [];

async function loadHypedGame() {
    const currentYear = new Date().getFullYear();
    const config = HYPED_GAME_CONFIG[currentYear] || HYPED_GAME_CONFIG[2026];
    
    // Update year
    document.getElementById('hypedYear').textContent = currentYear;
    
    // Apply theme colors
    applyTheme(config.themeColors);
    
    // Load game data
    await fetchGameData(config);
    
    // Load developer logo
    loadDeveloperLogo(config.developerLogo);
    
    // Load editions
    if (config.editions) {
        renderEditions(config.editions, config.themeColors);
    }
    
    // Load news
    loadGameNews(config.searchTerm);
}

function applyTheme(colors) {
    const showcase = document.getElementById('hypedGameShowcase');
    if (!showcase) return;
    
    showcase.style.setProperty('--hyped-primary', colors.primary);
    showcase.style.setProperty('--hyped-secondary', colors.secondary);
    showcase.style.setProperty('--hyped-tertiary', colors.tertiary);
    showcase.style.setProperty('--hyped-dark', colors.dark);
    showcase.style.setProperty('--hyped-darker', colors.darker);
}

function loadDeveloperLogo(logoUrl) {
    const logoElement = document.getElementById('hypedDeveloperLogo');
    if (logoElement) {
        logoElement.src = logoUrl;
        logoElement.style.display = 'block';
    }
}

async function fetchGameData(config) {
    try {
        const response = await fetch(`/api/games/${config.gameId}`);
        
        if (!response.ok) {
            throw new Error('Failed to fetch game data');
        }
        
        const game = await response.json();
        
        // Update title
        document.getElementById('hypedTitle').textContent = game.name;
        
        // Update platforms
        renderPlatforms(game.platforms || []);
        
        // Update info
        renderGameInfo(game);
        
        // Update screenshots
        renderScreenshots(game.screenshots || []);
        
        // Update view details button
        document.getElementById('hypedDetailsBtn').href = `game.html?id=${game.id}`;
        
        // Update news title
        document.getElementById('hypedNewsTitle').textContent = `LATEST ${game.name.toUpperCase()} NEWS`;
        
    } catch (error) {
        console.error('Error loading hyped game:', error);
        document.getElementById('hypedTitle').textContent = config.searchTerm || 'Loading...';
    }
}

function renderPlatforms(platforms) {
    const container = document.getElementById('hypedPlatformContainer');
    if (!container) return;
    
    if (!platforms || platforms.length === 0) {
        container.innerHTML = '<p class="hypedPlatformsLoading">Platforms TBA</p>';
        return;
    }
    
    container.innerHTML = '';
    
    platforms.forEach(platform => {
        const platformName = platform.name || platform;
        const logoFile = platformLogos[platformName];
        
        if (logoFile) {
            const link = document.createElement('a');
            link.href = `platform.html?platform=${encodeURIComponent(platformName)}`;
            link.className = 'hypedPlatformBox';
            link.setAttribute('data-platform', logoFile.toLowerCase().replace('.svg', ''));
            
            const img = document.createElement('img');
            img.src = `assets/platform-logos/${logoFile}`;
            img.alt = platformName;
            img.className = 'hypedPlatformLogo';
            
            link.appendChild(img);
            container.appendChild(link);
        }
    });
}

function renderGameInfo(game) {
    const infoContainer = document.getElementById('hypedInfo');
    if (!infoContainer) return;
    
    const summary = game.summary || 'Information coming soon...';
    const genres = game.genres ? game.genres.map(g => g.name || g).join(', ') : 'Action, Adventure';
    const rating = game.rating ? Math.round(game.rating) : null;
    
    infoContainer.innerHTML = `
        <h3>THE EXPERIENCE</h3>
        <p>${summary}</p>
        
        ${rating ? `
        <div class="hypedFeature">
            <span class="hypedFeatureIcon">⭐</span>
            <div>
                <strong>Critical Acclaim</strong>
                <p>Rated ${rating}/100 - ${getRatingDescription(rating)}</p>
            </div>
        </div>
        ` : ''}
        
        <div class="hypedFeature">
            <span class="hypedFeatureIcon">🎯</span>
            <div>
                <strong>Genres</strong>
                <p>${genres}</p>
            </div>
        </div>
        
        ${game.game_modes ? `
        <div class="hypedFeature">
            <span class="hypedFeatureIcon">👥</span>
            <div>
                <strong>Game Modes</strong>
                <p>${game.game_modes.map(m => m.name || m).join(', ')}</p>
            </div>
        </div>
        ` : ''}
    `;
}

function getRatingDescription(rating) {
    if (rating >= 90) return "Masterpiece";
    if (rating >= 80) return "Excellent";
    if (rating >= 70) return "Great";
    if (rating >= 60) return "Good";
    return "Mixed Reviews";
}

function renderEditions(editions, colors) {
    const container = document.getElementById('hypedEditions');
    if (!container || !editions) return;
    
    container.innerHTML = `
        <h3 class="hypedEditionsTitle">AVAILABLE EDITIONS</h3>
        <div class="hypedEditionsGrid">
            ${editions.map((edition, index) => `
                <div class="hypedEdition">
                    <div class="hypedEditionHeader">
                        <h4>${edition.name}</h4>
                        <span class="hypedEditionPrice">${edition.price}</span>
                    </div>
                    <ul class="hypedEditionFeatures">
                        ${edition.features.map(feature => `<li>${feature}</li>`).join('')}
                    </ul>
                </div>
            `).join('')}
        </div>
    `;
}

function renderScreenshots(screenshotsData) {
    const container = document.getElementById('hypedScreenshots');
    const navContainer = document.getElementById('hypedScreenshotNav');
    
    if (!container || !navContainer) return;
    
    if (!screenshotsData || screenshotsData.length === 0) {
        container.innerHTML = '<p class="hypedScreenshotsLoading">Screenshots coming soon...</p>';
        navContainer.innerHTML = '';
        return;
    }
    
    screenshots = screenshotsData.slice(0, 5);
    
    container.innerHTML = screenshots.map((screenshot, index) => {
        const imageId = screenshot.image_id || screenshot;
        const imageUrl = `https://images.igdb.com/igdb/image/upload/t_screenshot_big/${imageId}.jpg`;
        
        return `
            <img 
                src="${imageUrl}" 
                alt="Screenshot ${index + 1}" 
                class="hypedScreenshot ${index === 0 ? 'hypedScreenshotActive' : ''}"
            >
        `;
    }).join('');
    
    navContainer.innerHTML = screenshots.map((_, index) => `
        <button 
            class="hypedNavBtn ${index === 0 ? 'hypedNavBtnActive' : ''}" 
            data-index="${index}"
        ></button>
    `).join('');
    
    // Add click handlers
    const navButtons = navContainer.querySelectorAll('.hypedNavBtn');
    navButtons.forEach((btn, index) => {
        btn.addEventListener('click', () => showScreenshot(index));
    });
    
    // Auto-rotate
    setInterval(() => {
        const nextIndex = (currentScreenshot + 1) % screenshots.length;
        showScreenshot(nextIndex);
    }, 5000);
}

function showScreenshot(index) {
    const screenshotElements = document.querySelectorAll('.hypedScreenshot');
    const navButtons = document.querySelectorAll('.hypedNavBtn');
    
    screenshotElements.forEach((screenshot, i) => {
        screenshot.classList.toggle('hypedScreenshotActive', i === index);
    });
    
    navButtons.forEach((btn, i) => {
        btn.classList.toggle('hypedNavBtnActive', i === index);
    });
    
    currentScreenshot = index;
}

async function loadGameNews(searchTerm) {
    const newsGrid = document.getElementById('hypedNewsGrid');
    if (!newsGrid) return;
    
    try {
        const response = await fetch('/api/news');
        
        if (!response.ok) {
            throw new Error('Failed to fetch news');
        }
        
        const news = await response.json();
        
        // Filter for game-related news
        const searchWords = searchTerm.toLowerCase().split(' ');
        const gameNews = news
            .filter(article => {
                const title = (article.title || '').toLowerCase();
                const description = (article.description || '').toLowerCase();
                return searchWords.some(word => title.includes(word) || description.includes(word));
            })
            .slice(0, 6);
        
        if (gameNews.length === 0) {
            const generalNews = news.slice(0, 6);
            renderNewsCards(generalNews);
            return;
        }
        
        renderNewsCards(gameNews);
        
    } catch (error) {
        console.error('Error loading news:', error);
        newsGrid.innerHTML = '<p class="hypedNewsLoading">Unable to load news at this time.</p>';
    }
}

function renderNewsCards(newsArticles) {
    const newsGrid = document.getElementById('hypedNewsGrid');
    if (!newsGrid) return;
    
    if (!newsArticles || newsArticles.length === 0) {
        newsGrid.innerHTML = '<p class="hypedNewsLoading">No news available at the moment.</p>';
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
            
            const image = article.urlToImage || 'https://via.placeholder.com/400x200?text=Gaming+News';
            const title = article.title || 'Untitled';
            const description = article.description || 'Read more...';
            const url = article.url || '#';
            
            const shortDescription = description.length > 120 
                ? description.substring(0, 120) + '...' 
                : description;
            
            return `
                <a href="${url}" target="_blank" rel="noopener noreferrer" class="hypedNewsCard" style="text-decoration: none;">
                    <img src="${image}" alt="${title}" class="hypedNewsImage" onerror="this.src='https://via.placeholder.com/400x200?text=News'">
                    <div class="hypedNewsContent">
                        <h4 class="hypedNewsTitle">${title}</h4>
                        <p class="hypedNewsExcerpt">${shortDescription}</p>
                        <p class="hypedNewsDate">${date}</p>
                    </div>
                </a>
            `;
        })
        .join('');
}

// Smooth scroll
const newsButton = document.querySelector('a[href="#hypedNews"]');
if (newsButton) {
    newsButton.addEventListener('click', (e) => {
        e.preventDefault();
        const newsSection = document.getElementById('hypedNews');
        if (newsSection) {
            newsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
}

// Load platform count for "What is GYG" section
async function loadPlatformCount() {
    const platformCount = Object.keys(platformLogos).length;
    const countElement = document.getElementById('platformCount');
    if (countElement) {
        countElement.textContent = `${platformCount}+`;
    }
}

// Initialize
if (document.getElementById('hypedGameShowcase')) {
    loadHypedGame();
}

if (document.getElementById('platformCount')) {
    loadPlatformCount();
}
