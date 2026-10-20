/* ========================================================================== */
/* GYG - EVERYDAY UPDATES & SCENE RADAR CLIENT                               */
/* Real-time PS4 PC Ports, Releases, Patches, & Breakthroughs                */
/* ========================================================================== */

(function () {
    // Built-in initial curated dataset for instant, zero-latency rendering
    const defaultUpdates = [
        {
            id: "bloodborne-pc-shadps4",
            title: "Bloodborne PS4: 60 FPS Unofficial PC Port Milestone via shadPS4",
            category: "ports",
            categoryLabel: "PS4 → PC UNOFFICIAL",
            badgeClass: "badge-cyan",
            date: "Updated Today",
            relativeTime: "Just now",
            isBreaking: true,
            platform: "PS4 ➔ PC (shadPS4)",
            cover: "https://images.igdb.com/igdb/image/upload/t_720p/co1r7f.jpg",
            fallbackCover: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&q=80",
            summary: "The coveted PS4 exclusive Bloodborne reaches a landmark milestone on PC through the open-source shadPS4 emulator. With new vertex buffer fixes and audio synchronization patches, players can explore Yharnam at uncapped 60+ FPS.",
            highlights: [
                "Boots in-game & playable at 60 FPS on modern PC GPUs",
                "Community sound patch restores dynamic audio & music",
                "Vertex explosion & memory leak workarounds applied"
            ],
            details: "In one of the fastest emulator development cycles in gaming history, shadPS4 (v0.4.1+) has bridged the gap to make FromSoftware's dark gothic masterpiece Bloodborne boot, render, and run with unprecedented stability on modern PC hardware. The community has deployed custom shader recompilation scripts that bypass previous PS4 GPU hardware limitations. While minor geometry hitches remain in complex alpha-particle zones, the title is now playable through multiple boss encounters with full controller support, customizable FOV, and resolution upscaling up to 4K.",
            technical: {
                status: "Playable / In-Game Milestone",
                targetFps: "60 FPS Uncapped",
                engine: "Havok / FromSoftware Proprietary",
                tools: "shadPS4 Emulator + BB-Hack Community Loader"
            },
            links: {
                primary: { label: "Explore Bloodborne on GYG", url: "search.html?q=Bloodborne" },
                source: { label: "shadPS4 Progress Tracker", url: "https://github.com/shadps4-emu/shadPS4" }
            }
        },
        {
            id: "pt-silent-hills-pc-port",
            title: "P.T. (Silent Hills) Standalone PC Edition: Complete 1:1 Unofficial Port",
            category: "ports",
            categoryLabel: "UNOFFICIAL PC PORT",
            badgeClass: "badge-cyan",
            date: "Yesterday",
            relativeTime: "1 day ago",
            isBreaking: false,
            platform: "PS4 ➔ PC (Direct Port)",
            cover: "https://images.igdb.com/igdb/image/upload/t_720p/co1x2n.jpg",
            fallbackCover: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=800&q=80",
            summary: "Hideo Kojima and Guillermo del Toro's lost psychological horror demo has been faithfully decompiled and preserved as an uncompressed, standalone native PC experience with complete 3D spatial audio.",
            highlights: [
                "1:1 exact reproduction of original PS4 physics & audio triggers",
                "Native 4K texture upscaling, 120Hz support & zero input delay",
                "Steam Deck verified with native gamepad vibration"
            ],
            details: "Preserving a lost piece of video game history, independent scene developers have reconstructed the infamous 2014 PlayStation 4 demo P.T. directly using extracted console packages and exact lighting parameter mappings. Unlike typical approximations, this build contains the identical haunting radio broadcasts, Lisa's procedural jump-scares, and the puzzle-looping logic intact, unencumbered by PS Store delisting.",
            technical: {
                status: "100% Fully Playable",
                targetFps: "120+ FPS & Ultrawide",
                engine: "Fox Engine Decrypted / Standalone PC",
                tools: "Unreal Community Wrapper"
            },
            links: {
                primary: { label: "Search Silent Hill on GYG", url: "search.html?q=Silent%20Hill" },
                source: { label: "P.T. PC Preservation Project", url: "https://archive.org" }
            }
        },
        {
            id: "black-myth-wukong-patch-1012",
            title: "Black Myth: Wukong - Major Combat Tuning & Frame Pacing Patch 1.0.12",
            category: "patches",
            categoryLabel: "MAJOR PATCH",
            badgeClass: "badge-amber",
            date: "Today",
            relativeTime: "3 hours ago",
            isBreaking: true,
            platform: "PC • PS5",
            cover: "https://cdn.akamai.steamstatic.com/steam/apps/2358720/header.jpg",
            fallbackCover: "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=800&q=80",
            summary: "Game Science rolls out patch 1.0.12 tackling key boss encounter collision boxes, fixing critical traversal memory leaks in Chapter 4, and refining staff spin deflection windows.",
            highlights: [
                "Smoother frame pacing under DLSS 3.7 & FSR 3.1 frame generation",
                "Tightened hitboxes on fast-moving Chapter 3 & 5 bosses",
                "Resolved crash-to-desktop during intense cinematic spells"
            ],
            details: "Patch 1.0.12 brings substantial quality-of-life adjustments to the Journey to the West epic. The development team has recalibrated input buffering when switching between Smash and Pillar stances, allowing for instantaneous dodge cancelation. Additionally, an aggressive VRAM garbage-collection routine eliminates stutter during dense foliage sequences on both PC and PS5 performance modes.",
            technical: {
                status: "Live Across All Platforms",
                targetFps: "Optimized 60-120 FPS",
                engine: "Unreal Engine 5.4",
                tools: "Official Game Science Deployment"
            },
            links: {
                primary: { label: "View Black Myth on GYG", url: "search.html?q=Black%20Myth" },
                source: { label: "Full Patch Notes", url: "https://store.steampowered.com/news/app/2358720" }
            }
        },
        {
            id: "metaphor-refantazio-launch",
            title: "Metaphor: ReFantazio Launches Worldwide to Universal Acclaim",
            category: "releases",
            categoryLabel: "NEW RELEASE",
            badgeClass: "badge-green",
            date: "Recent Release",
            relativeTime: "New drop",
            isBreaking: false,
            platform: "PC • PS5 • Xbox Series X|S",
            cover: "https://images.igdb.com/igdb/image/upload/t_720p/co8539.jpg",
            fallbackCover: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800&q=80",
            summary: "Studio Zero and Atlus deliver their grand fantasy turn-based opus, setting day-one concurrent records and garnering a 94 Metascore for its political intrigue and innovative Archetype system.",
            highlights: [
                "Over 100+ hours of tactical JRPG campaign content",
                "Day-one native 60 FPS performance on handheld PCs & consoles",
                "Seamless blend of real-time squad action and turn-based battles"
            ],
            details: "Directed by Katsura Hashino with music by Shoji Meguro and character design by Shigenori Soejima, Metaphor: ReFantazio invites players to compete for the throne in the United Kingdom of Euchronia. Blending the social time-management brilliance of modern Persona titles with a high-stakes high fantasy tournament arc, the title is already heralded as a modern classic.",
            technical: {
                status: "Available Now Globally",
                targetFps: "Solid 60 FPS",
                engine: "Atlus Proprietary Engine",
                tools: "Standard & Collector Editions"
            },
            links: {
                primary: { label: "View Metaphor on GYG", url: "search.html?q=Metaphor" },
                source: { label: "Official Release Page", url: "https://metaphor.atlus.com" }
            }
        },
        {
            id: "infamous-second-son-pc-progress",
            title: "inFAMOUS Second Son: First In-Engine Gameplay Boots on PC via Emulation",
            category: "ports",
            categoryLabel: "EMULATION SCENE",
            badgeClass: "badge-purple",
            date: "This Week",
            relativeTime: "4 days ago",
            isBreaking: false,
            platform: "PS4 ➔ PC (RPCSX / shadPS4)",
            cover: "https://images.igdb.com/igdb/image/upload/t_720p/co1w67.jpg",
            fallbackCover: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&q=80",
            summary: "Sucker Punch's neon-infused superhero title inFAMOUS: Second Son has successfully passed intro menus and booted into in-engine Seattle rendering for the first time on PC.",
            highlights: [
                "Vulkan asynchronous compute pipeline enables particle rendering",
                "Delsin Rowe's smoke dash and neon sprint shaders initialized",
                "Marks key milestone toward full PS4 exclusive library preservation"
            ],
            details: "Because inFAMOUS Second Son heavily relied on the PS4's unified memory architecture and compute queue asynchronous compute engines, running it on PC was considered one of the hardest emulation hurdles. Recent pull requests implementing custom memory page translation have allowed Seattle's streetscapes and dynamic particle systems to begin rendering.",
            technical: {
                status: "Experimental / In-Engine Booting",
                targetFps: "30-45 FPS (Early testing)",
                engine: "Sucker Punch Proprietary PS4 Engine",
                tools: "Vulkan API Compute Shaders"
            },
            links: {
                primary: { label: "Explore inFAMOUS Series", url: "search.html?q=inFAMOUS" },
                source: { label: "Emulation Development Log", url: "https://github.com" }
            }
        },
        {
            id: "elden-ring-patch-114",
            title: "Elden Ring: Shadow of the Erdtree Patch 1.14 Balance Overhaul",
            category: "patches",
            categoryLabel: "BALANCE UPDATE",
            badgeClass: "badge-amber",
            date: "Recent",
            relativeTime: "5 days ago",
            isBreaking: false,
            platform: "PC • PS5 • PS4 • Xbox Series X|S",
            cover: "https://cdn.akamai.steamstatic.com/steam/apps/2778580/header.jpg",
            fallbackCover: "https://images.unsplash.com/photo-1579373903781-fd5c0c30c4cd?w=800&q=80",
            summary: "FromSoftware unleashes patch 1.14, significantly re-tuning the climactic Promised Consort encounter, buffing light greatswords, and separating PvP and PvE stagger values.",
            highlights: [
                "Reduced visual flash and clutter on final DLC boss light attacks",
                "Buffed speed and stamina efficiency on Thrusting Shields & Hand-to-Hand",
                "Fixed multiplayer phantom connection disconnects on Steam"
            ],
            details: "Addressing player feedback since the record-breaking launch of Shadow of the Erdtree, Update 1.14 refines the rhythm of the final boss battle, allowing more generous opening windows for heavy and colossal weapon users. Several underutilized weapon classes and weapon arts received motion-value increases.",
            technical: {
                status: "Live On All Platforms",
                targetFps: "60 FPS Locked",
                engine: "FromSoftware Engine",
                tools: "Official FromSoftware Update"
            },
            links: {
                primary: { label: "View Elden Ring on GYG", url: "search.html?q=Elden%20Ring" },
                source: { label: "Bandai Namco Official Notes", url: "https://bandainamcoent.com" }
            }
        },
        {
            id: "silent-hill-2-remake-launch",
            title: "Silent Hill 2 Remake - Masterful Unreal Engine 5 Reimagining Arrives",
            category: "releases",
            categoryLabel: "NEW RELEASE",
            badgeClass: "badge-green",
            date: "Recent Release",
            relativeTime: "1 week ago",
            isBreaking: false,
            platform: "PS5 • PC",
            cover: "https://images.igdb.com/igdb/image/upload/t_720p/co51u4.jpg",
            fallbackCover: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=800&q=80",
            summary: "Bloober Team and Konami's ground-up rebuild of the iconic 2001 psychological masterpiece is live, featuring full over-the-shoulder immersion, dynamic volumetric fog, and Akira Yamaoka audio.",
            highlights: [
                "Overwhelming praise for atmospheric pacing & respectful story fidelity",
                "Overhauled combat encounter design with visceral dodge mechanics",
                "Full DualSense haptics mapping every footstep and heartbeat"
            ],
            details: "James Sunderland's journey into Silent Hill returns with modern graphical fidelity powered by Unreal Engine 5's Lumen global illumination and Nanite geometry. Explore expanded puzzle sequences, restored historical locations, and encounters crafted with psychological tension.",
            technical: {
                status: "Released Globally",
                targetFps: "60 FPS Performance Mode",
                engine: "Unreal Engine 5",
                tools: "Full DualSense PC & PS5 Support"
            },
            links: {
                primary: { label: "View Silent Hill 2 on GYG", url: "search.html?q=Silent%20Hill%202" },
                source: { label: "Konami Official Portal", url: "https://konami.com/games/silenthill" }
            }
        },
        {
            id: "rdr1-pc-ultrawide-mods",
            title: "Red Dead Redemption PC: Unofficial 144Hz & Ultra-HD Mod Suite Released",
            category: "mods",
            categoryLabel: "COMMUNITY MOD SCENE",
            badgeClass: "badge-gold",
            date: "Recent",
            relativeTime: "2 days ago",
            isBreaking: false,
            platform: "PC (Steam / Epic / Rockstar)",
            cover: "https://cdn.akamai.steamstatic.com/steam/apps/2668510/header.jpg",
            fallbackCover: "https://images.unsplash.com/photo-1533240332313-0db49b459ad6?w=800&q=80",
            summary: "The PC modding community releases a comprehensive overhaul suite for John Marston's western classic, unlocking uncapped framerates, 32:9 Super Ultrawide support, and beta soundtrack tracks.",
            highlights: [
                "Decoupled physics tick-rate for flawless 144Hz & 240Hz play",
                "4K AI-upscaled terrain textures and draw-distance multipliers",
                "Custom camera FOV sliders and restored original PS3/Xbox color grades"
            ],
            details: "Following the long-awaited official PC port of Red Dead Redemption and Undead Nightmare, modders have quickly resolved standard engine limitations. The community overhaul package fixes ragdoll physics glitches at high refresh rates, adds customizable field of view sliders, and restores removed dialogue and ambient western audio.",
            technical: {
                status: "Available via NexusMods & GitHub",
                targetFps: "Uncapped 144Hz+",
                engine: "Rockstar Advanced Game Engine (RAGE)",
                tools: "OpenIV & Scripthook Community Tools"
            },
            links: {
                primary: { label: "Search Red Dead on GYG", url: "search.html?q=Red%20Dead" },
                source: { label: "NexusMods Community Suite", url: "https://nexusmods.com" }
            }
        }
    ];

    let currentUpdates = [...defaultUpdates];
    let activeCategory = "all";
    let searchQuery = "";

    // DOM Elements
    const gridEl = document.getElementById("updatesGrid");
    const countEl = document.getElementById("updatesStatusCount");
    const searchInput = document.getElementById("updatesSearchInput");
    const tabsContainer = document.getElementById("updatesTabs");
    const modalOverlay = document.getElementById("updateModalOverlay");
    const modalContent = document.getElementById("updateModalCard");
    const modalCloseBtn = document.getElementById("modalCloseBtn");

    /* ====================================================================== */
    /* FETCH LIVE UPDATES FROM BACKEND                                        */
    /* ====================================================================== */
    async function fetchLiveUpdates() {
        // Endpoints to try: local backend first if in dev, then production Render
        const endpoints = [
            "https://gyg-backend-hjbx.onrender.com/api/updates",
            "http://localhost:5000/api/updates"
        ];

        for (const url of endpoints) {
            try {
                const controller = new AbortController();
                const timeoutId = setTimeout(() => controller.abort(), 4000);
                const res = await fetch(url, { signal: controller.signal });
                clearTimeout(timeoutId);

                if (res.ok) {
                    const data = await res.json();
                    if (data && Array.isArray(data.updates) && data.updates.length > 0) {
                        currentUpdates = data.updates.map(item => ({
                            ...item,
                            badgeClass: item.badgeColor ? `badge-${item.badgeColor}` : "badge-cyan",
                            fallbackCover: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&q=80"
                        }));
                        updateTabCounts();
                        renderCards();
                        break;
                    }
                }
            } catch (err) {
                // Silently fallback to built-in dataset
            }
        }
    }

    /* ====================================================================== */
    /* TAB COUNTS                                                             */
    /* ====================================================================== */
    function updateTabCounts() {
        if (!tabsContainer) return;

        const counts = {
            all: currentUpdates.length,
            ports: currentUpdates.filter(u => u.category === "ports").length,
            releases: currentUpdates.filter(u => u.category === "releases").length,
            patches: currentUpdates.filter(u => u.category === "patches").length,
            mods: currentUpdates.filter(u => u.category === "mods").length
        };

        const countBadges = tabsContainer.querySelectorAll(".tabBadgeCount");
        countBadges.forEach(badge => {
            const cat = badge.getAttribute("data-category");
            if (counts[cat] !== undefined) {
                badge.textContent = counts[cat];
            }
        });
    }

    /* ====================================================================== */
    /* RENDER CARDS                                                           */
    /* ====================================================================== */
    function renderCards() {
        if (!gridEl) return;

        let filtered = currentUpdates.filter(item => {
            const matchesCat = activeCategory === "all" || item.category === activeCategory;
            const q = searchQuery.toLowerCase().trim();
            const matchesSearch = !q ||
                item.title.toLowerCase().includes(q) ||
                item.summary.toLowerCase().includes(q) ||
                item.platform.toLowerCase().includes(q) ||
                item.categoryLabel.toLowerCase().includes(q);

            return matchesCat && matchesSearch;
        });

        if (countEl) {
            countEl.textContent = `Showing ${filtered.length} of ${currentUpdates.length} updates`;
        }

        if (filtered.length === 0) {
            gridEl.innerHTML = `
                <div class="updatesEmptyState">
                    <div class="emptyStateIcon">🔍</div>
                    <h3>No matching updates found</h3>
                    <p>Try searching for a different keyword or resetting your filter category.</p>
                    <button class="resetFilterBtn" id="resetUpdatesFilterBtn">View All Updates</button>
                </div>
            `;
            const resetBtn = document.getElementById("resetUpdatesFilterBtn");
            if (resetBtn) {
                resetBtn.addEventListener("click", () => {
                    activeCategory = "all";
                    searchQuery = "";
                    if (searchInput) searchInput.value = "";
                    tabsContainer.querySelectorAll(".updateTab").forEach(t => {
                        t.classList.toggle("active", t.getAttribute("data-category") === "all");
                    });
                    renderCards();
                });
            }
            return;
        }

        gridEl.innerHTML = "";

        filtered.forEach(item => {
            const card = document.createElement("article");
            card.className = "updateCard";
            card.setAttribute("role", "button");
            card.setAttribute("tabindex", "0");
            card.setAttribute("aria-label", item.title);

            const breakingHtml = item.isBreaking
                ? `<div class="cardBreakingRibbon"><span class="tickerBeacon"></span> BREAKING SCENE</div>`
                : "";

            const highlightsHtml = (item.highlights || [])
                .slice(0, 3)
                .map(h => `<li><span class="checkIcon">✔</span><span>${escapeHtml(h)}</span></li>`)
                .join("");

            card.innerHTML = `
                ${breakingHtml}
                <div class="cardMedia">
                    <img 
                        src="${escapeHtml(item.cover)}" 
                        alt="${escapeHtml(item.title)}" 
                        loading="lazy"
                        onerror="this.onerror=null; this.src='${item.fallbackCover}';"
                    >
                    <div class="cardMediaOverlay"></div>
                    <span class="cardCategoryBadge ${item.badgeClass}">
                        ${escapeHtml(item.categoryLabel)}
                    </span>
                    <span class="cardPlatformTag">
                        ${escapeHtml(item.platform)}
                    </span>
                </div>

                <div class="cardBody">
                    <div class="cardMetaRow">
                        <span class="metaTime">${escapeHtml(item.relativeTime || item.date)}</span>
                        <span class="metaDot">•</span>
                        <span>${escapeHtml(item.date)}</span>
                    </div>

                    <h3 class="cardTitle">${escapeHtml(item.title)}</h3>

                    <p class="cardSummary">${escapeHtml(item.summary)}</p>

                    <ul class="cardHighlights">
                        ${highlightsHtml}
                    </ul>

                    <div class="cardFooter">
                        <button class="cardActionBtn" type="button">
                            Read Full Report <span>→</span>
                        </button>
                        <span class="cardQuickBadge">Details & Specs</span>
                    </div>
                </div>
            `;

            // Click or Enter opens modal
            const openModalAction = () => openModal(item);
            card.addEventListener("click", openModalAction);
            card.addEventListener("keydown", (e) => {
                if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    openModalAction();
                }
            });

            gridEl.appendChild(card);
        });
    }

    /* ====================================================================== */
    /* MODAL DISPLAY                                                          */
    /* ====================================================================== */
    function openModal(item) {
        if (!modalOverlay || !modalContent) return;

        const highlightsHtml = (item.highlights || [])
            .map(h => `<li><span class="checkIcon">✔</span><span>${escapeHtml(h)}</span></li>`)
            .join("");

        const tech = item.technical || {};
        const techEntries = Object.entries(tech).map(([k, v]) => `
            <div class="techBox">
                <div class="techBoxLabel">${escapeHtml(formatKey(k))}</div>
                <div class="techBoxValue">${escapeHtml(v)}</div>
            </div>
        `).join("");

        const primaryLink = item.links?.primary
            ? `<a href="${escapeHtml(item.links.primary.url)}" class="modalPrimaryBtn">${escapeHtml(item.links.primary.label)} ➔</a>`
            : "";

        const sourceLink = item.links?.source
            ? `<a href="${escapeHtml(item.links.source.url)}" target="_blank" rel="noopener noreferrer" class="modalSecondaryBtn">🌐 ${escapeHtml(item.links.source.label)}</a>`
            : "";

        modalContent.innerHTML = `
            <button class="modalCloseBtn" id="modalCloseBtn" type="button" aria-label="Close modal">✕</button>
            <div class="modalBanner">
                <img 
                    src="${escapeHtml(item.cover)}" 
                    alt="${escapeHtml(item.title)}"
                    onerror="this.onerror=null; this.src='${item.fallbackCover}';"
                >
                <div class="modalBannerOverlay"></div>
                <div class="modalBannerContent">
                    <div class="modalBadgeRow">
                        <span class="cardCategoryBadge ${item.badgeClass}">${escapeHtml(item.categoryLabel)}</span>
                        <span class="cardPlatformTag">${escapeHtml(item.platform)}</span>
                        <span class="cardQuickBadge">${escapeHtml(item.date)}</span>
                    </div>
                    <h2 class="modalTitle">${escapeHtml(item.title)}</h2>
                </div>
            </div>

            <div class="modalBody">
                <div class="modalSectionTitle">
                    <span>⚡</span> Comprehensive Briefing & Scene Analysis
                </div>
                <p class="modalOverviewText">${escapeHtml(item.details || item.summary)}</p>

                ${techEntries ? `
                    <div class="modalSectionTitle">
                        <span>🛠️</span> Technical Profile & Compatibility
                    </div>
                    <div class="modalTechGrid">
                        ${techEntries}
                    </div>
                ` : ""}

                <div class="modalSectionTitle">
                    <span>💎</span> Key Breakthroughs & Highlights
                </div>
                <ul class="modalHighlightsList">
                    ${highlightsHtml}
                </ul>

                <div class="modalActions">
                    ${primaryLink}
                    ${sourceLink}
                </div>
            </div>
        `;

        modalOverlay.classList.add("active");
        document.body.style.overflow = "hidden";

        // Wire close button inside newly rendered content
        const closeBtn = document.getElementById("modalCloseBtn");
        if (closeBtn) {
            closeBtn.addEventListener("click", closeModal);
        }
    }

    function closeModal() {
        if (!modalOverlay) return;
        modalOverlay.classList.remove("active");
        document.body.style.overflow = "";
    }

    /* ====================================================================== */
    /* EVENT LISTENERS                                                        */
    /* ====================================================================== */
    function initListeners() {
        // Tab click
        if (tabsContainer) {
            tabsContainer.addEventListener("click", (e) => {
                const tab = e.target.closest(".updateTab");
                if (!tab) return;

                tabsContainer.querySelectorAll(".updateTab").forEach(t => t.classList.remove("active"));
                tab.classList.add("active");

                activeCategory = tab.getAttribute("data-category") || "all";
                renderCards();
            });
        }

        // Live Search with slight debounce
        if (searchInput) {
            let timeout;
            searchInput.addEventListener("input", (e) => {
                clearTimeout(timeout);
                timeout = setTimeout(() => {
                    searchQuery = e.target.value;
                    renderCards();
                }, 150);
            });
        }

        // Close modal on overlay click
        if (modalOverlay) {
            modalOverlay.addEventListener("click", (e) => {
                if (e.target === modalOverlay) {
                    closeModal();
                }
            });
        }

        // Close modal on ESC key
        document.addEventListener("keydown", (e) => {
            if (e.key === "Escape" && modalOverlay && modalOverlay.classList.contains("active")) {
                closeModal();
            }
        });
    }

    /* ====================================================================== */
    /* HELPERS                                                                */
    /* ====================================================================== */
    function escapeHtml(str) {
        if (!str) return "";
        return String(str)
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#039;");
    }

    function formatKey(key) {
        return key.replace(/([A-Z])/g, " $1").toUpperCase();
    }

    /* ====================================================================== */
    /* INITIALIZE                                                             */
    /* ====================================================================== */
    function init() {
        updateTabCounts();
        renderCards();
        initListeners();
        fetchLiveUpdates();
    }

    // Run on DOM ready
    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", init);
    } else {
        init();
    }
})();
