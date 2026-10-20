/* ========================================================================== */
/* GYG - EVERYDAY UPDATES & SCENE RADAR CONTROLLER                           */
/* Real-time intelligence on PS4 PC ports, releases, patches & breakthroughs */
/* ========================================================================== */

const updatesData = [
    {
        id: "bloodborne-pc-shadps4",
        title: "Bloodborne PS4: 60 FPS Unofficial PC Port Milestone via shadPS4",
        category: "ports",
        categoryLabel: "PS4 → PC UNOFFICIAL",
        badgeColor: "cyan",
        date: "Updated Today",
        relativeTime: "Just now",
        isBreaking: true,
        platform: "PS4 ➔ PC (shadPS4)",
        cover: "https://images.igdb.com/igdb/image/upload/t_720p/co1r7f.jpg",
        summary: "The coveted PS4 exclusive Bloodborne reaches a landmark milestone on PC through the open-source shadPS4 emulator. With new vertex buffer fixes and audio synchronization patches, players can explore Yharnam at uncapped 60+ FPS.",
        highlights: [
            "Boots in-game & playable at 60 FPS on modern PC GPUs",
            "Community sound patch restores dynamic audio & music",
            "Vertex explosion & memory leak workarounds applied"
        ],
        details: "In one of the fastest emulator development cycles in gaming history, shadPS4 (v0.4.1+) has bridged the gap to make FromSoftware's dark gothic masterpiece Bloodborne boot, render, and run with high stability on modern PC hardware. The community has deployed custom shader recompilation scripts that bypass previous PS4 GPU hardware limitations. While minor geometry hitches remain in complex alpha-particle zones, the title is now playable through multiple boss encounters with full controller support, customizable FOV, and resolution upscaling up to 4K.",
        technical: {
            status: "Playable / In-Game Milestone",
            targetFps: "60 FPS Uncapped",
            engine: "Havok / Proprietary FromSoft Engine",
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
        badgeColor: "cyan",
        date: "Yesterday",
        relativeTime: "1 day ago",
        isBreaking: false,
        platform: "PS4 ➔ PC (Direct Port)",
        cover: "https://images.igdb.com/igdb/image/upload/t_720p/co1x2n.jpg",
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
        badgeColor: "amber",
        date: "Today",
        relativeTime: "3 hours ago",
        isBreaking: true,
        platform: "PC • PS5",
        cover: "https://cdn.akamai.steamstatic.com/steam/apps/2358720/header.jpg",
        summary: "Game Science rolls out patch 1.0.12 tackling key boss encounter collision boxes, fixing critical traversal memory leaks in Chapter 4, and refining staff spin deflection windows.",
        highlights: [
            "Smoother frame pacing under DLSS 3.7 & FSR 3.1 frame generation",
            "Tightened hitboxes on fast-moving Chapter 3 & 5 bosses",
            "Resolved crash-to-desktop during intense cinematic spells"
        ],
        details: "Patch 1.0.12 brings substantial quality-of-life adjustments to the Journey to the West epic. The development team has recalibrated input buffering when switching between Smash and Pillar stances, allowing for instantaneous dodge cancelation. Additionally, an aggressive VRAM garbage-collection routine eliminates stutter during dense foliage sequences on both PC and PS5 performance modes.",
        technical: {
            status: "Live Across All Platforms",
            patchSize: "4.8 GB on Steam / 6.1 GB on PS5",
            engine: "Unreal Engine 5.4",
            tools: "Official Game Science Deployment"
        },
        links: {
            primary: { label: "View Black Myth: Wukong", url: "search.html?q=Black%20Myth" },
            source: { label: "Full Patch Notes", url: "https://store.steampowered.com/news/app/2358720" }
        }
    },
    {
        id: "metaphor-refantazio-launch",
        title: "Metaphor: ReFantazio Launches Worldwide to Universal Acclaim",
        category: "releases",
        categoryLabel: "NEW RELEASE",
        badgeColor: "green",
        date: "Recent Release",
        relativeTime: "New drop",
        isBreaking: false,
        platform: "PC • PS5 • Xbox Series X|S",
        cover: "https://images.igdb.com/igdb/image/upload/t_720p/co8539.jpg",
        summary: "Studio Zero and Atlus deliver their grand fantasy turn-based opus, setting day-one concurrent records and garnering a 94 Metascore for its political intrigue and innovative Archetype system.",
        highlights: [
            "Over 100+ hours of tactical JRPG campaign content",
            "Day-one native 60 FPS performance on handheld PCs & consoles",
            "Seamless blend of real-time squad action and turn-based battles"
        ],
        details: "Directed by Katsura Hashino with music by Shoji Meguro and character design by Shigenori Soejima, Metaphor: ReFantazio invites players to compete for the throne in the United Kingdom of Euchronia. Blending the social time-management brilliance of modern Persona titles with a high-stakes high fantasy tournament arc, the title is already heralded as a modern classic.",
        technical: {
            status: "Available Now Globally",
            ratings: "94/100 Metacritic / Overwhelmingly Positive",
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
        badgeColor: "purple",
        date: "This Week",
        relativeTime: "4 days ago",
        isBreaking: false,
        platform: "PS4 ➔ PC (RPCSX / shadPS4)",
        cover: "https://images.igdb.com/igdb/image/upload/t_720p/co1w67.jpg",
        summary: "Sucker Punch's neon-infused superhero title inFAMOUS: Second Son has successfully passed intro menus and booted into in-engine Seattle rendering for the first time on PC.",
        highlights: [
            "Vulkan asynchronous compute pipeline enables particle rendering",
            "Delsin Rowe's smoke dash and neon sprint shaders initialized",
            "Marks key milestone toward full PS4 exclusive library preservation"
        ],
        details: "Because inFAMOUS Second Son heavily relied on the PS4's unified memory architecture and compute queue asynchronous compute engines, running it on PC was considered one of the hardest emulation hurdles. Recent pull requests in shadPS4 and RPCSX implementing custom memory page translation have allowed Seattle's streetscapes and dynamic particle systems to begin rendering.",
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
        badgeColor: "amber",
        date: "Recent",
        relativeTime: "5 days ago",
        isBreaking: false,
        platform: "PC • PS5 • PS4 • Xbox Series X|S",
        cover: "https://cdn.akamai.steamstatic.com/steam/apps/2778580/header.jpg",
        summary: "FromSoftware unleashes patch 1.14, significantly re-tuning the climactic Promised Consort encounter, buffing light greatswords, and separating PvP and PvE stagger values.",
        highlights: [
            "Reduced visual flash and clutter on final DLC boss light attacks",
            "Buffed speed and stamina efficiency on Thrusting Shields & Hand-to-Hand",
            "Fixed multiplayer phantom connection disconnects on Steam"
        ],
        details: "Addressing player feedback since the record-breaking launch of Shadow of the Erdtree, Update 1.14 refines the rhythm of the final boss battle, allowing more generous opening windows for heavy and colossal weapon users. Several underutilized weapon classes and weapon arts received motion-value increases.",
        technical: {
            status: "Live On All Platforms",
            patchSize: "1.9 GB",
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
        badgeColor: "green",
        date: "Recent Release",
        relativeTime: "1 week ago",
        isBreaking: false,
        platform: "PS5 • PC",
        cover: "https://images.igdb.com/igdb/image/upload/t_720p/co51u4.jpg",
        summary: "Bloober Team and Konami's ground-up rebuild of the iconic 2001 psychological masterpiece is live, featuring full over-the-shoulder immersion, dynamic volumetric fog, and haunting Akira Yamaoka audio.",
        highlights: [
            "Overwhelming praise for atmospheric pacing & respectful story fidelity",
            "Overhauled combat encounter design with visceral dodge mechanics",
            "Full DualSense haptics mapping every footstep and heartbeat"
        ],
        details: "James Sunderland's journey into Silent Hill returns with modern graphical fidelity powered by Unreal Engine 5's Lumen global illumination and Nanite geometry. Explore expanded puzzle sequences, restored historical locations, and encounters crafted with psychological tension.",
        technical: {
            status: "Released Globally",
            ratings: "87 Metascore / Very Positive (Steam)",
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
        badgeColor: "gold",
        date: "Recent",
        relativeTime: "2 days ago",
        isBreaking: false,
        platform: "PC (Steam / Epic / Rockstar)",
        cover: "https://cdn.akamai.steamstatic.com/steam/apps/2668510/header.jpg",
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

/* ========================================================================== */
/* GET ALL UPDATES                                                            */
/* ========================================================================== */

exports.getUpdates = async (req, res) => {
    try {
        const { category, search } = req.query;

        let results = [...updatesData];

        if (category && category !== "all") {
            results = results.filter(item => item.category === category.toLowerCase());
        }

        if (search) {
            const query = search.toLowerCase();
            results = results.filter(item =>
                item.title.toLowerCase().includes(query) ||
                item.summary.toLowerCase().includes(query) ||
                item.platform.toLowerCase().includes(query) ||
                item.categoryLabel.toLowerCase().includes(query)
            );
        }

        res.json({
            count: results.length,
            total: updatesData.length,
            updatedAt: new Date().toISOString(),
            updates: results
        });
    } catch (error) {
        console.error("Updates Controller Error:", error);
        res.status(500).json({ error: "Failed to retrieve everyday updates." });
    }
};

/* ========================================================================== */
/* EXPORT DATA FOR EMBEDDING                                                  */
/* ========================================================================== */

exports.updatesData = updatesData;
