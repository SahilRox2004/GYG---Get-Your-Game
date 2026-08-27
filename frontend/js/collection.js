/* ========================= */
/* GET COLLECTION TYPE */
/* ========================= */

const collectionParams =
    new URLSearchParams(
        window.location.search
    );

const collectionType =
    collectionParams.get("type") ||
    "open-world";


/* ========================= */
/* PLATFORM LOGOS */
/* ========================= */

const platformLogos = {

    "PC": "windows.svg",
    "Microsoft Windows": "windows.svg",
    "Windows": "windows.svg",
    "PC (Microsoft Windows)": "windows.svg",

    "Linux": "linux.svg",

    "Mac": "apple.svg",
    "Mac OS": "apple.svg",
    "macOS": "apple.svg",

    "PlayStation": "ps1.svg",
    "PlayStation 2": "ps2.svg",
    "PlayStation 3": "ps3.svg",
    "PlayStation 4": "ps4.svg",
    "PlayStation 5": "ps5.svg",
    "PlayStation Portable": "psp.svg",
    "PSP": "psp.svg",
    "PlayStation Vita": "psvita.svg",

    "Xbox": "microsoft-xbox-1.svg",
    "Xbox 360": "xbox-360-1.svg",
    "Xbox One": "xbox-one-3.svg",
    "Xbox Series X|S": "xbox-series-x-s-1.svg",
    "Xbox Series X": "xbox-series-x-s-1.svg",
    "Xbox Series S": "xbox-series-x-s-1.svg",

    "Nintendo Switch": "switch.svg",
    "Nintendo Switch 2": "switch2.svg",

    "Nintendo Entertainment System": "nes.svg",
    "NES": "nes.svg",

    "Super Nintendo Entertainment System": "snes.svg",
    "SNES": "snes.svg",

    "Nintendo 64": "nintendo-64.svg",

    "Nintendo GameCube": "gamecube.svg",
    "GameCube": "gamecube.svg",

    "Wii": "wii.svg",
    "Wii U": "wii-u.svg",

    "Game Boy": "game-boy.svg",
    "Game Boy Color": "game-boy.svg",
    "Game Boy Advance": "game-boy-advance.svg",

    "Nintendo DS": "nintendo-ds.svg",
    "Nintendo DSi": "nintendo-ds.svg",

    "Nintendo 3DS": "nintendo-3ds.svg",
    "New Nintendo 3DS": "nintendo-3ds.svg",

    "Sega Master System": "sega.svg",
    "Sega Genesis": "sega.svg",
    "Sega Mega Drive": "sega.svg",
    "Sega Saturn": "sega-saturn.svg",
    "Dreamcast": "dreamcast.svg",
    "Game Gear": "game-gear.svg",

    "Steam": "steam.svg",
    "Steam Deck": "steam.svg",

    "Android": "android.svg",
    "Android OS": "android.svg",

    "iOS": "apple.svg",
    "iPhone": "apple.svg",
    "iPad": "apple.svg",

    "Meta Quest": "meta.svg",
    "Meta Quest 2": "meta.svg",
    "Meta Quest 3": "meta.svg",
    "Meta Quest 3S": "meta.svg",

    "Oculus Rift": "meta.svg",
    "Oculus Rift S": "meta.svg",
    "Oculus Quest": "meta.svg",
    "Oculus Quest 2": "meta.svg",

    "HTC Vive": "vive.svg",
    "HTC Vive Pro": "vive.svg",

    "Valve Index": "valve.svg",

    "PlayStation VR": "psvr.svg",
    "PlayStation VR2": "psvr.svg",

    "Atari 2600": "atari.svg",
    "Atari 5200": "atari.svg",
    "Atari 7800": "atari.svg",
    "Atari Jaguar": "atari.svg",
    "Atari Lynx": "atari.svg",

    "Neo Geo": "neo-geo.svg",
    "Neo Geo CD": "neo-geo.svg",

    "3DO Interactive Multiplayer": "3do.svg",

    "Commodore 64": "commodore.svg",
    "Commodore Amiga": "commodore.svg",
    "Amiga": "commodore.svg",

    "Arcade": "arcade.svg",

    "Web": "web.svg",
    "Browser": "web.svg"
};


/* ========================= */
/* GET PLATFORM SVG */
/* ========================= */

function getPlatformLogo(platformName) {

    if (!platformName) {

        return null;

    }


    platformName =
        platformName.trim();


    /* EXACT MATCH */

    if (platformLogos[platformName]) {

        return platformLogos[platformName];

    }


    const name =
        platformName.toLowerCase();


    /* WINDOWS / PC */

    if (
        name.includes("windows") ||
        name.includes("pc")
    ) {

        return "windows.svg";

    }


    /* PLAYSTATION */

    if (
        name.includes("playstation 5") ||
        name === "ps5"
    ) {

        return "ps5.svg";

    }

    else if (
        name.includes("playstation 4") ||
        name === "ps4"
    ) {

        return "ps4.svg";

    }

    else if (
        name.includes("playstation 3") ||
        name === "ps3"
    ) {

        return "ps3.svg";

    }

    else if (
        name.includes("playstation 2") ||
        name === "ps2"
    ) {

        return "ps2.svg";

    }

    else if (
        name === "playstation" ||
        name === "ps"
    ) {

        return "ps1.svg";

    }

    else if (
        name.includes("portable") ||
        name === "psp"
    ) {

        return "psp.svg";

    }

    else if (
        name.includes("vita")
    ) {

        return "psvita.svg";

    }


    /* XBOX */

    else if (
        name.includes("series x") ||
        name.includes("series s")
    ) {

        return "xbox-series-x-s-1.svg";

    }

    else if (
        name.includes("xbox one")
    ) {

        return "xbox-one-3.svg";

    }

    else if (
        name.includes("xbox 360")
    ) {

        return "xbox-360-1.svg";

    }

    else if (
        name.includes("xbox")
    ) {

        return "microsoft-xbox-1.svg";

    }


    /* SWITCH */

    else if (
        name.includes("switch 2")
    ) {

        return "switch2.svg";

    }

    else if (
        name.includes("switch")
    ) {

        return "switch.svg";

    }


    /* NINTENDO */

    else if (
        name.includes("gamecube")
    ) {

        return "gamecube.svg";

    }

    else if (
        name.includes("wii u")
    ) {

        return "wii-u.svg";

    }

    else if (
        name === "wii"
    ) {

        return "wii.svg";

    }

    else if (
        name.includes("nintendo 64")
    ) {

        return "nintendo-64.svg";

    }

    else if (
        name.includes("super nintendo") ||
        name === "snes"
    ) {

        return "snes.svg";

    }

    else if (
        name.includes("entertainment system") ||
        name === "nes"
    ) {

        return "nes.svg";

    }

    else if (
        name.includes("3ds")
    ) {

        return "nintendo-3ds.svg";

    }

    else if (
        name.includes("nintendo ds")
    ) {

        return "nintendo-ds.svg";

    }

    else if (
        name.includes("game boy advance")
    ) {

        return "game-boy-advance.svg";

    }

    else if (
        name.includes("game boy")
    ) {

        return "game-boy.svg";

    }


    /* SEGA */

    else if (
        name.includes("dreamcast")
    ) {

        return "dreamcast.svg";

    }

    else if (
        name.includes("saturn")
    ) {

        return "sega-saturn.svg";

    }

    else if (
        name.includes("game gear")
    ) {

        return "game-gear.svg";

    }

    else if (
        name.includes("sega") ||
        name.includes("mega drive") ||
        name.includes("genesis")
    ) {

        return "sega.svg";

    }


    /* MOBILE */

    else if (
        name.includes("android")
    ) {

        return "android.svg";

    }

    else if (
        name.includes("ios") ||
        name.includes("iphone") ||
        name.includes("ipad")
    ) {

        return "apple.svg";

    }


    /* STEAM */

    else if (
        name.includes("steam")
    ) {

        return "steam.svg";

    }


    /* VR */

    else if (
        name.includes("meta") ||
        name.includes("oculus")
    ) {

        return "meta.svg";

    }

    else if (
        name.includes("vive")
    ) {

        return "vive.svg";

    }

    else if (
        name.includes("valve index")
    ) {

        return "valve.svg";

    }

    else if (
        name.includes("playstation vr")
    ) {

        return "psvr.svg";

    }


    /* ATARI */

    else if (
        name.includes("atari")
    ) {

        return "atari.svg";

    }


    /* RETRO */

    else if (
        name.includes("neo geo")
    ) {

        return "neo-geo.svg";

    }

    else if (
        name.includes("3do")
    ) {

        return "3do.svg";

    }

    else if (
        name.includes("commodore") ||
        name.includes("amiga")
    ) {

        return "commodore.svg";

    }

    else if (
        name.includes("arcade")
    ) {

        return "arcade.svg";

    }

    else if (
        name.includes("web") ||
        name.includes("browser")
    ) {

        return "web.svg";

    }


    return null;

}


/* ========================= */
/* CREATE PLATFORM LOGOS */
/* ========================= */

function createPlatformLogos(platforms) {

    if (!platforms || !platforms.length) {

        return "";

    }

    const uniquePlatforms = [

        ...new Set(

            platforms
                .map(platform => {

                    if (typeof platform === "string") {

                        return platform.trim();

                    }

                    return (
                        platform.name ||
                        platform.platform_name ||
                        ""
                    ).trim();

                })

                .filter(Boolean)

        )

    ];


    const validPlatforms =
        uniquePlatforms
            .map(platform => {

                let file =
                    platformLogos[platform];

                const name =
                    platform.toLowerCase();


                /* ========================= */
                /* FALLBACK CHECKS */
                /* ========================= */

                if (!file) {

                    if (
                        name.includes("windows") ||
                        name.includes("pc")
                    ) {

                        file =
                            "windows.svg";

                    }


                    /* PLAYSTATION */

                    else if (
                        name.includes("playstation 5") ||
                        name === "ps5"
                    ) {

                        file =
                            "ps5.svg";

                    }

                    else if (
                        name.includes("playstation 4") ||
                        name === "ps4"
                    ) {

                        file =
                            "ps4.svg";

                    }

                    else if (
                        name.includes("playstation 3") ||
                        name === "ps3"
                    ) {

                        file =
                            "ps3.svg";

                    }

                    else if (
                        name.includes("playstation 2") ||
                        name === "ps2"
                    ) {

                        file =
                            "ps2.svg";

                    }

                    else if (
                        name.includes("playstation portable") ||
                        name === "psp"
                    ) {

                        file =
                            "psp.svg";

                    }

                    else if (
                        name.includes("vita")
                    ) {

                        file =
                            "psvita.svg";

                    }

                    else if (
                        name === "playstation" ||
                        name === "ps"
                    ) {

                        file =
                            "ps1.svg";

                    }


                    /* XBOX */

                    else if (
                        name.includes("series x") ||
                        name.includes("series s")
                    ) {

                        file =
                            "xbox-series-x-s-1.svg";

                    }

                    else if (
                        name.includes("xbox one")
                    ) {

                        file =
                            "xbox-one-3.svg";

                    }

                    else if (
                        name.includes("xbox 360")
                    ) {

                        file =
                            "xbox-360-1.svg";

                    }

                    else if (
                        name.includes("xbox")
                    ) {

                        file =
                            "microsoft-xbox-1.svg";

                    }


                    /* NINTENDO */

                    else if (
                        name.includes("switch 2")
                    ) {

                        file =
                            "switch2.svg";

                    }

                    else if (
                        name.includes("switch")
                    ) {

                        file =
                            "switch.svg";

                    }

                    else if (
                        name.includes("gamecube")
                    ) {

                        file =
                            "gamecube.svg";

                    }

                    else if (
                        name.includes("wii u")
                    ) {

                        file =
                            "wii-u.svg";

                    }

                    else if (
                        name === "wii"
                    ) {

                        file =
                            "wii.svg";

                    }

                    else if (
                        name.includes("nintendo 64")
                    ) {

                        file =
                            "nintendo-64.svg";

                    }

                    else if (
                        name.includes("super nintendo") ||
                        name === "snes"
                    ) {

                        file =
                            "snes.svg";

                    }

                    else if (
                        name.includes("entertainment system") ||
                        name === "nes"
                    ) {

                        file =
                            "nes.svg";

                    }

                    else if (
                        name.includes("3ds")
                    ) {

                        file =
                            "nintendo-3ds.svg";

                    }

                    else if (
                        name.includes("nintendo ds")
                    ) {

                        file =
                            "nintendo-ds.svg";

                    }

                    else if (
                        name.includes("game boy advance")
                    ) {

                        file =
                            "game-boy-advance.svg";

                    }

                    else if (
                        name.includes("game boy")
                    ) {

                        file =
                            "game-boy.svg";

                    }


                    /* SEGA */

                    else if (
                        name.includes("dreamcast")
                    ) {

                        file =
                            "dreamcast.svg";

                    }

                    else if (
                        name.includes("saturn")
                    ) {

                        file =
                            "sega-saturn.svg";

                    }

                    else if (
                        name.includes("game gear")
                    ) {

                        file =
                            "game-gear.svg";

                    }

                    else if (
                        name.includes("sega") ||
                        name.includes("mega drive") ||
                        name.includes("genesis")
                    ) {

                        file =
                            "sega.svg";

                    }


                    /* MOBILE */

                    else if (
                        name.includes("android")
                    ) {

                        file =
                            "android.svg";

                    }

                    else if (
                        name.includes("ios") ||
                        name.includes("iphone") ||
                        name.includes("ipad")
                    ) {

                        file =
                            "apple.svg";

                    }


                    /* STEAM */

                    else if (
                        name.includes("steam")
                    ) {

                        file =
                            "steam.svg";

                    }


                    /* VR */

                    else if (
                        name.includes("meta") ||
                        name.includes("oculus")
                    ) {

                        file =
                            "meta.svg";

                    }

                    else if (
                        name.includes("vive")
                    ) {

                        file =
                            "vive.svg";

                    }

                    else if (
                        name.includes("valve index")
                    ) {

                        file =
                            "valve.svg";

                    }

                    else if (
                        name.includes("playstation vr")
                    ) {

                        file =
                            "psvr.svg";

                    }


                    /* RETRO */

                    else if (
                        name.includes("atari")
                    ) {

                        file =
                            "atari.svg";

                    }

                    else if (
                        name.includes("neo geo")
                    ) {

                        file =
                            "neo-geo.svg";

                    }

                    else if (
                        name.includes("3do")
                    ) {

                        file =
                            "3do.svg";

                    }

                    else if (
                        name.includes("commodore") ||
                        name.includes("amiga")
                    ) {

                        file =
                            "commodore.svg";

                    }

                    else if (
                        name.includes("arcade")
                    ) {

                        file =
                            "arcade.svg";

                    }

                    else if (
                        name.includes("web") ||
                        name.includes("browser")
                    ) {

                        file =
                            "web.svg";

                    }

                }


                if (!file) {

                    return null;

                }


                return {

                    platform,
                    file

                };

            })

            .filter(Boolean)

            .slice(0, 8);


    if (!validPlatforms.length) {

        return "";

    }


    return `

        <div class="featuredPlatformLogos">

            ${validPlatforms
                .map(({ platform, file }) => `

                    <a
                        href="platform.html?platform=${encodeURIComponent(platform)}"
                        title="View ${platform}"
                    >

                        <img
                            src="assets/platform-logos/${file}"
                            alt="${platform}"
                        >

                    </a>

                `)
                .join("")
            }

        </div>

    `;

}

/* ========================= */
/* COLLECTION ELEMENTS */
/* ========================= */

const collectionBackground =
    document.getElementById(
        "collectionBackground"
    );

const collectionTitle =
    document.getElementById(
        "collectionTitle"
    );

const collectionSubtitle =
    document.getElementById(
        "collectionSubtitle"
    );

const collectionDescription =
    document.getElementById(
        "collectionDescription"
    );

const bestCollectionTitle =
    document.getElementById(
        "bestCollectionTitle"
    );

const moreGamesTitle =
    document.getElementById(
        "moreGamesTitle"
    );

const featuredRecommended =
    document.getElementById(
        "featuredRecommended"
    );

const bestGamesCarousel =
    document.getElementById(
        "bestGamesCarousel"
    );

const moreGamesGrid =
    document.getElementById(
        "moreGamesGrid"
    );

let featuredGames = [];
let featuredIndex = 0;
let featuredChanging = false;
let featuredInterval = null;

function getDailyFeaturedGames() {

    const games =
        collection.featuredGames || [];

    if (games.length <= 3) {

        return games;

    }

    const today =
        new Date();

    const dayNumber =
        Math.floor(
            Date.UTC(
                today.getFullYear(),
                today.getMonth(),
                today.getDate()
            ) / 86400000
        );

    const startIndex =
        dayNumber % games.length;

    return Array.from(
        { length: 3 },
        (_, index) =>
            games[
                (startIndex + index) % games.length
            ]
    );

}






/* ========================= */
/* COLLECTION DATA */
/* ========================= */

const collections = {

    /* ========================= */
    /* OPEN WORLD */
    /* ========================= */

    "open-world": {

        title:
            "OPEN WORLD LEGENDS",

        subtitle:
            "Massive worlds. Unforgettable adventures.",

        description:
            "From sprawling cities to unforgiving frontiers, these open worlds invite players into vast places built to be explored, lived in and remembered.",

        backgroundSearch:
            "Red Dead Redemption 2",

         featuredGames: [

        "Red Dead Redemption 2",
        "Grand Theft Auto V",
        "The Witcher 3: Wild Hunt",
        "Cyberpunk 2077",
        "Ghost of Tsushima",
        "The Elder Scrolls V: Skyrim",
        "Kingdom Come: Deliverance II",
        "Death Stranding",
        "Horizon Forbidden West",
        "Assassin's Creed Odyssey",
        "The Legend of Zelda: Breath of the Wild",
        "Fallout: New Vegas"

    ],

        bestGames: [

        "Grand Theft Auto V",
        "Red Dead Redemption 2",
        "The Witcher 3: Wild Hunt",
        "The Elder Scrolls V: Skyrim",
        "Ghost of Tsushima",
        "Kingdom Come: Deliverance II",
        "The Legend of Zelda: Breath of the Wild",
        "Red Dead Redemption",
        "Fallout: New Vegas",
        "Cyberpunk 2077",
        "Horizon Zero Dawn",
        "Assassin's Creed IV: Black Flag"

    ],

        moreGames: [

        "Cyberpunk 2077",
        "Assassin's Creed Odyssey",
        "Horizon Forbidden West",
        "Days Gone",
        "Far Cry 5",
        "Death Stranding",
        "Metal Gear Solid V: The Phantom Pain",
        "Watch Dogs 2",
        "Mad Max",
        "Far Cry 3",
        "Assassin's Creed Origins",
        "Ghost Recon Wildlands",
        "Sleeping Dogs",
        "Just Cause 3",
        "Dragon's Dogma 2",
        "The Legend of Zelda: Tears of the Kingdom",
        "Fallout 4",
        "Starfield",
        "Marvel's Spider-Man",
        "Batman: Arkham Knight",
        "Middle-earth: Shadow of Mordor",
        "Middle-earth: Shadow of War",
        "Dying Light",
        "Dying Light 2: Stay Human",
        "Crimson Desert"

    ]

},


    /* ========================= */
    /* HORROR */
    /* ========================= */

    "horror": {

        title:
            "HORROR ESSENTIALS",

        subtitle:
            "Nightmares worth experiencing.",

        description:
            "From psychological nightmares to brutal survival experiences, horror games create worlds where every sound matters and every shadow could hide something waiting for you.",

        backgroundSearch:
            "Silent Hill 2",

        featuredGames: [

            "Silent Hill 2",
            "Resident Evil 4",
            "Alan Wake 2",
            "Dead Space",
            "Alien: Isolation",
            "Resident Evil 2",
            "SOMA"

        ],

        bestGames: [

            "Silent Hill 2",
            "Resident Evil 4",
            "Resident Evil 2",
            "Dead Space",
            "Alien: Isolation",
            "Amnesia: The Dark Descent",
            "Alan Wake 2",
            "SOMA"

        ],

        moreGames: [

            "Silent Hill 3",
            "Silent Hill",
            "Resident Evil 7: Biohazard",
            "Resident Evil Village",
            "Dead Space 2",
            "Dead Space Remake",
            "Amnesia: The Bunker",
            "Amnesia: Rebirth",
            "Outlast",
            "Outlast 2",
            "The Evil Within",
            "The Evil Within 2",
            "Signalis",
            "Darkwood",
            "Layers of Fear",
            "F.E.A.R.",
            "Until Dawn",
            "The Quarry",
            "The Medium",
            "Tormented Souls",
            "Visage",
            "MADiSON",
            "Mouthwashing"

        ]

    },


    /* ========================= */
    /* ACTION */
    /* ========================= */

    "action": {

        title:
            "ACTION ICONS",

        subtitle:
            "Combat, spectacle and unforgettable moments.",

        description:
            "Fast-paced combat, unforgettable bosses and moments of pure spectacle define these action classics.",

        backgroundSearch:
            "God of War",

        featuredGames: [

        "God of War",
        "Devil May Cry 5",
        "Sekiro: Shadows Die Twice",
        "Black Myth: Wukong",
        "Stellar Blade",
        "Nioh 2",
        "Bayonetta",
        "Ninja Gaiden",
        "Metal Gear Rising: Revengeance",
        "Hi-Fi Rush",
        "Sifu",
        "God of War Ragnarök"

    ],

        bestGames: [

        "God of War",
        "Devil May Cry 5",
        "Sekiro: Shadows Die Twice",
        "God of War Ragnarök",
        "Bayonetta",
        "Ninja Gaiden",
        "Metal Gear Rising: Revengeance",
        "Nioh 2",
        "Black Myth: Wukong",
        "Stellar Blade",
        "Sifu",
        "Hi-Fi Rush"

    ],

        moreGames: [

        "Devil May Cry 4",
        "Devil May Cry 3: Dante's Awakening",
        "Bayonetta 2",
        "Ninja Gaiden II",
        "Ninja Gaiden Sigma",
        "Metal Gear Rising: Revengeance",
        "God Hand",
        "Asura's Wrath",
        "Vanquish",
        "Astral Chain",
        "NieR: Automata",
        "Lies of P",
        "Wo Long: Fallen Dynasty",
        "Rise of the Ronin",
        "Nioh",
        "Ghostrunner",
        "Ghostrunner 2",
        "Armored Core VI: Fires of Rubicon",
        "Doom Eternal",
        "Warhammer 40,000: Space Marine 2",
        "Ryse: Son of Rome",
        "Prototype",
        "Prototype 2",
        "Sunset Overdrive",
        "The Wonderful 101"

    ]

},


    /* ========================= */
    /* SUPERHERO */
    /* ========================= */

    "superhero": {

    title:
        "SUPERHERO GAMES",

    subtitle:
        "The best games behind the mask.",

    description:
        "From swinging through New York to protecting Gotham, superhero games let players step into iconic worlds and experience what it feels like to wear the mask, cape or armor.",

    backgroundSearch:
        "Marvel's Spider-Man",


    featuredGames: [

        "Marvel's Spider-Man",
        "Batman: Arkham City",
        "Marvel's Spider-Man 2",
        "Batman: Arkham Knight",
        "Marvel's Guardians of the Galaxy",
        "Batman: Arkham Asylum",
        "Marvel's Spider-Man: Miles Morales",
        "inFAMOUS Second Son",
        "Marvel's Midnight Suns",
        "Batman: Arkham Origins",
        "LEGO Marvel Super Heroes",
        "inFAMOUS"

    ],


    bestGames: [

        "Batman: Arkham City",
        "Marvel's Spider-Man",
        "Batman: Arkham Knight",
        "Marvel's Spider-Man 2",
        "Batman: Arkham Asylum",
        "Marvel's Guardians of the Galaxy",
        "Marvel's Spider-Man: Miles Morales",
        "inFAMOUS Second Son",
        "Marvel's Midnight Suns",
        "X-Men Origins: Wolverine",
        "inFAMOUS",
        "Ultimate Spider-Man"

    ],


    moreGames: [

        "Batman: Arkham Origins",
        "Marvel Ultimate Alliance",
        "Marvel Ultimate Alliance 2",
        "Marvel's Avengers",
        "LEGO Marvel Super Heroes",
        "LEGO Marvel Super Heroes 2",
        "LEGO Batman: The Videogame",
        "LEGO Batman 2: DC Super Heroes",
        "LEGO Batman 3: Beyond Gotham",
        "inFAMOUS 2",
        "inFAMOUS: First Light",
        "Prototype",
        "Prototype 2",
        "The Incredible Hulk: Ultimate Destruction",
        "The Punisher",
        "Deadpool",
        "X-Men Origins: Wolverine",
        "Spider-Man",
        "Spider-Man 2",
        "Spider-Man: Web of Shadows",
        "Ultimate Spider-Man",
        "Batman: The Telltale Series",
        "Batman: The Enemy Within",
        "DC Universe Online",
        "Marvel's Iron Man VR"

    ]

},


    /* ========================= */
    /* SCI-FI */
    /* ========================= */

    "scifi": {

    title:
        "SCI-FI ADVENTURES",

    subtitle:
        "Beyond Earth. Beyond imagination.",

    description:
        "Travel beyond Earth and into futuristic cities, distant galaxies and worlds shaped by technology.",

    backgroundSearch:
        "Cyberpunk 2077",


    featuredGames: [

        "Cyberpunk 2077",
        "Mass Effect 2",
        "Prey",
        "Titanfall 2",
        "Control",
        "Dead Space",
        "Deus Ex: Human Revolution",
        "No Man's Sky",
        "Detroit: Become Human",
        "Starfield",
        "Mass Effect 3",
        "Outer Wilds"

    ],


    bestGames: [

        "Mass Effect 2",
        "Cyberpunk 2077",
        "Prey",
        "Titanfall 2",
        "Deus Ex: Human Revolution",
        "Control",
        "Dead Space",
        "Mass Effect 3",
        "Outer Wilds",
        "System Shock 2",
        "Portal 2",
        "BioShock"

    ],


    moreGames: [

        "Mass Effect",
        "Mass Effect Legendary Edition",
        "Mass Effect: Andromeda",
        "Dead Space 2",
        "Dead Space 3",
        "Dead Space Remake",
        "Deus Ex",
        "Deus Ex: Mankind Divided",
        "BioShock 2",
        "BioShock Infinite",
        "System Shock",
        "Alien: Isolation",
        "The Outer Worlds",
        "Starfield",
        "No Man's Sky",
        "Death Stranding",
        "Death Stranding 2: On the Beach",
        "Detroit: Become Human",
        "SOMA",
        "Observer",
        "Returnal",
        "Halo: Combat Evolved",
        "Halo 3",
        "Halo: Reach",
        "Star Wars Jedi: Survivor"

    ]

},


    /* ========================= */
    /* EPISODIC */
    /* ========================= */

    "episodic": {

    title: "EPISODIC ADVENTURES",

    subtitle: "One chapter ends. Another begins.",

    description:
        "Stories designed to unfold over chapters, episodes and unforgettable cliffhangers. These games prove that sometimes the journey is best experienced one episode at a time.",

    backgroundSearch: "The Walking Dead",

    featuredGames: [
        "The Walking Dead",
        "The Walking Dead: Season Two",
        "The Walking Dead: The Final Season",
        "Life is Strange",
        "Life is Strange 2",
        "Life is Strange: True Colors",
        "Tales from the Borderlands",
        "Batman: The Telltale Series",
        "Batman: The Enemy Within",
        "The Wolf Among Us",
        "Minecraft: Story Mode",
        "Game of Thrones"
    ],

    bestGames: [
        "The Walking Dead",
        "The Walking Dead: Season Two",
        "Life is Strange",
        "The Wolf Among Us",
        "Tales from the Borderlands",
        "Life is Strange 2",
        "Life is Strange: True Colors",
        "Batman: The Enemy Within",
        "Batman: The Telltale Series",
        "The Walking Dead: The Final Season",
        "Game of Thrones",
        "Minecraft: Story Mode"
    ],

    moreGames: [
        "The Walking Dead: Michonne",
        "The Walking Dead: A New Frontier",
        "The Expanse: A Telltale Series",
        "Tales from the Borderlands",
        "New Tales from the Borderlands",
        "Guardians of the Galaxy: The Telltale Series",
        "Minecraft: Story Mode - Season Two",
        "Game of Thrones",
        "Back to the Future: The Game",
        "Sam & Max Save the World",
        "Sam & Max Beyond Time and Space",
        "Sam & Max: The Devil's Playhouse",
        "The Council",
        "Blues and Bullets",
        "Dreamfall Chapters",
        "As Dusk Falls",
        "Oxenfree",
        "Oxenfree II: Lost Signals",
        "Tell Me Why",
        "Road 96",
        "The Dark Pictures Anthology: Man of Medan",
        "The Dark Pictures Anthology: Little Hope",
        "The Dark Pictures Anthology: House of Ashes",
        "The Dark Pictures Anthology: The Devil in Me",
        "Dispatch"
    ]

},


    /* ========================= */
    /* STORY DRIVEN */
    /* ========================= */

    "story-driven": {

    title: "STORIES THAT STAY WITH YOU",

    subtitle: "Some games are never forgotten.",

    description:
        "Powerful characters, unforgettable worlds and stories that stay with you long after the credits roll.",

    backgroundSearch: "The Last of Us",

    featuredGames: [
        "The Last of Us",
        "Red Dead Redemption 2",
        "God of War",
        "The Witcher 3: Wild Hunt",
        "Life is Strange",
        "Disco Elysium",
        "Detroit: Become Human",
        "What Remains of Edith Finch",
        "BioShock",
        "Mass Effect 2",
        "NieR: Automata",
        "Silent Hill 2"
    ],

    bestGames: [
        "The Last of Us",
        "Red Dead Redemption 2",
        "The Witcher 3: Wild Hunt",
        "God of War",
        "Disco Elysium",
        "Mass Effect 2",
        "NieR: Automata",
        "BioShock",
        "Life is Strange",
        "What Remains of Edith Finch",
        "Detroit: Become Human",
        "Outer Wilds"
    ],

    moreGames: [
        "The Last of Us Part II",
        "Red Dead Redemption",
        "God of War Ragnarök",
        "Mass Effect",
        "Mass Effect 3",
        "The Walking Dead",
        "The Wolf Among Us",
        "Firewatch",
        "Gone Home",
        "To the Moon",
        "Finding Paradise",
        "Spiritfarer",
        "Hellblade: Senua's Sacrifice",
        "Hellblade II: Senua's Saga",
        "A Plague Tale: Innocence",
        "A Plague Tale: Requiem",
        "Before Your Eyes",
        "Brothers: A Tale of Two Sons",
        "The Beginner's Guide",
        "SOMA",
        "Spec Ops: The Line",
        "Death Stranding",
        "Persona 5 Royal",
        "Yakuza 0",
        "Clair Obscur: Expedition 33"
    ]

},


    /* ========================= */
    /* SOULSLIKE */
    /* ========================= */

    "soulslike": {

    title: "SOULSLIKE LEGENDS",

    subtitle: "Prepare to die. Then try again.",

    description:
        "Demanding combat, mysterious worlds and unforgettable boss battles define these punishing but rewarding adventures.",

    backgroundSearch: "Elden Ring",

    featuredGames: [
        "Elden Ring",
        "Dark Souls",
        "Dark Souls II",
        "Dark Souls III",
        "Bloodborne",
        "Sekiro: Shadows Die Twice",
        "Demon's Souls",
        "Lies of P",
        "Nioh 2",
        "Hollow Knight",
        "Black Myth: Wukong",
        "Salt and Sanctuary"
    ],

    bestGames: [
        "Elden Ring",
        "Bloodborne",
        "Dark Souls",
        "Dark Souls III",
        "Sekiro: Shadows Die Twice",
        "Demon's Souls",
        "Lies of P",
        "Nioh 2",
        "Black Myth: Wukong",
        "Dark Souls II",
        "Nioh",
        "Hollow Knight"
    ],

    moreGames: [
        "Elden Ring: Shadow of the Erdtree",
        "Demon's Souls",
        "Dark Souls Remastered",
        "Nioh",
        "Wo Long: Fallen Dynasty",
        "The Surge",
        "The Surge 2",
        "Lords of the Fallen",
        "Lords of the Fallen",
        "Mortal Shell",
        "Remnant: From the Ashes",
        "Remnant II",
        "Code Vein",
        "Steelrising",
        "Thymesia",
        "Another Crab's Treasure",
        "Salt and Sanctuary",
        "Salt and Sacrifice",
        "Blasphemous",
        "Blasphemous 2",
        "Hollow Knight",
        "Death's Gambit",
        "Ashen",
        "Nine Sols",
        "The First Berserker: Khazan"
    ]

},


    /* ========================= */
    /* RPG */
    /* ========================= */

    "rpg": {

    title: "RPG MASTERPIECES",

    subtitle: "Choose your path. Create your legend.",

    description:
        "Massive worlds, meaningful choices and characters worth remembering make these role-playing games unforgettable.",

    backgroundSearch: "Baldur's Gate 3",

    featuredGames: [
        "Baldur's Gate 3",
        "The Witcher 3: Wild Hunt",
        "Elden Ring",
        "Persona 5 Royal",
        "Final Fantasy VII",
        "Mass Effect 2",
        "Skyrim",
        "Disco Elysium",
        "Fallout: New Vegas",
        "Kingdom Come: Deliverance II",
        "Dragon Age: Origins",
        "Clair Obscur: Expedition 33"
    ],

    bestGames: [
        "Baldur's Gate 3",
        "The Witcher 3: Wild Hunt",
        "Elden Ring",
        "Persona 5 Royal",
        "Fallout: New Vegas",
        "Mass Effect 2",
        "Disco Elysium",
        "Final Fantasy VII",
        "Dragon Age: Origins",
        "The Elder Scrolls V: Skyrim",
        "Chrono Trigger",
        "Clair Obscur: Expedition 33"
    ],

    moreGames: [
        "Baldur's Gate",
        "Baldur's Gate II: Shadows of Amn",
        "Divinity: Original Sin 2",
        "Dragon Age: Inquisition",
        "Dragon's Dogma 2",
        "Final Fantasy VII Remake",
        "Final Fantasy XVI",
        "Final Fantasy IX",
        "Persona 3 Reload",
        "Persona 4 Golden",
        "Cyberpunk 2077",
        "Kingdom Come: Deliverance",
        "Fallout 3",
        "Fallout 4",
        "The Outer Worlds",
        "Starfield",
        "Pillars of Eternity",
        "Pillars of Eternity II: Deadfire",
        "Pathfinder: Wrath of the Righteous",
        "Wasteland 3",
        "Yakuza: Like a Dragon",
        "Like a Dragon: Infinite Wealth",
        "Octopath Traveler II",
        "Metaphor: ReFantazio",
        "Avowed"
    ]

},


    /* ========================= */
    /* SURVIVAL */
    /* ========================= */

    "survival": {

    title: "SURVIVAL INSTINCT",

    subtitle: "Adapt. Endure. Survive.",

    description:
        "Resources are limited, danger is everywhere and every decision could determine whether you survive another day.",

    backgroundSearch: "The Last of Us",

    featuredGames: [
        "The Last of Us",
        "Resident Evil 4",
        "Minecraft",
        "Subnautica",
        "The Forest",
        "Don't Starve",
        "Valheim",
        "Dying Light",
        "Alien: Isolation",
        "Days Gone",
        "Sons of the Forest",
        "Project Zomboid"
    ],

    bestGames: [
        "The Last of Us",
        "Subnautica",
        "Minecraft",
        "Resident Evil 4",
        "The Forest",
        "Valheim",
        "Alien: Isolation",
        "Don't Starve",
        "Dying Light",
        "Project Zomboid",
        "Sons of the Forest",
        "Frostpunk"
    ],

    moreGames: [
        "The Last of Us Part II",
        "Subnautica: Below Zero",
        "Green Hell",
        "Rust",
        "ARK: Survival Evolved",
        "7 Days to Die",
        "Raft",
        "Stranded Deep",
        "The Long Dark",
        "State of Decay 2",
        "This War of Mine",
        "Frostpunk 2",
        "No Man's Sky",
        "Grounded",
        "Pacific Drive",
        "Darkwood",
        "The Flame in the Flood",
        "Conan Exiles",
        "DayZ",
        "SCUM",
        "Icarus",
        "The Planet Crafter",
        "Enshrouded",
        "Once Human",
        "Forever Skies"
    ]

},


    /* ========================= */
    /* STEALTH */
    /* ========================= */

    "stealth": {

    title: "MASTERS OF STEALTH",

    subtitle: "Stay hidden. Strike when ready.",

    description:
        "Patience, planning and precision define these games where staying unseen can be just as important as fighting.",

    backgroundSearch: "Metal Gear Solid V: The Phantom Pain",

    featuredGames: [
        "Metal Gear Solid V: The Phantom Pain",
        "Metal Gear Solid 3: Snake Eater",
        "Dishonored",
        "Dishonored 2",
        "Hitman: World of Assassination",
        "Splinter Cell: Chaos Theory",
        "Deus Ex: Human Revolution",
        "Mark of the Ninja",
        "Thief II: The Metal Age",
        "Alien: Isolation",
        "Aragami",
        "A Plague Tale: Innocence"
    ],

    bestGames: [
        "Metal Gear Solid V: The Phantom Pain",
        "Metal Gear Solid 3: Snake Eater",
        "Splinter Cell: Chaos Theory",
        "Dishonored 2",
        "Dishonored",
        "Hitman: World of Assassination",
        "Thief II: The Metal Age",
        "Mark of the Ninja",
        "Deus Ex: Human Revolution",
        "Metal Gear Solid",
        "Hitman: Blood Money",
        "A Plague Tale: Requiem"
    ],

    moreGames: [
        "Metal Gear Solid 2: Sons of Liberty",
        "Metal Gear Solid 4: Guns of the Patriots",
        "Metal Gear Solid Delta: Snake Eater",
        "Splinter Cell",
        "Splinter Cell: Blacklist",
        "Thief",
        "Thief: Deadly Shadows",
        "Hitman: Absolution",
        "Hitman 2",
        "Hitman 3",
        "Aragami 2",
        "Styx: Master of Shadows",
        "Styx: Shards of Darkness",
        "Shadow Tactics: Blades of the Shogun",
        "Shadow Gambit: The Cursed Crew",
        "Desperados III",
        "Invisible, Inc.",
        "Gunpoint",
        "Volume",
        "Assassin's Creed Mirage",
        "Assassin's Creed Unity",
        "Batman: Arkham City",
        "The Last of Us Part II",
        "Sniper Elite 5",
        "MGS: Peace Walker"
    ]

},

    /* ========================= */
    /* RACING */
    /* ========================= */

    "racing": {

    title: "RACING LEGENDS",

    subtitle: "Speed without limits.",

    description:
        "From realistic simulations to arcade chaos, these games deliver some of the greatest experiences on four wheels.",

    backgroundSearch: "Forza Horizon 5",

    featuredGames: [
        "Forza Horizon 5",
        "Forza Horizon 4",
        "Gran Turismo 7",
        "Need for Speed: Most Wanted",
        "Burnout 3: Takedown",
        "Mario Kart 8 Deluxe",
        "F1 24",
        "Assetto Corsa",
        "Dirt Rally 2.0",
        "The Crew Motorfest",
        "Wipeout Omega Collection",
        "Midnight Club 3: DUB Edition"
    ],

    bestGames: [
        "Forza Horizon 5",
        "Gran Turismo 7",
        "Forza Horizon 4",
        "Burnout 3: Takedown",
        "Need for Speed: Most Wanted",
        "Mario Kart 8 Deluxe",
        "Dirt Rally 2.0",
        "Assetto Corsa",
        "Midnight Club 3: DUB Edition",
        "F1 24",
        "Forza Motorsport",
        "Trackmania"
    ],

    moreGames: [
        "Forza Horizon 3",
        "Forza Horizon 2",
        "Need for Speed Underground",
        "Need for Speed Underground 2",
        "Need for Speed Carbon",
        "Need for Speed Heat",
        "Need for Speed Unbound",
        "Burnout Paradise",
        "Burnout Revenge",
        "Gran Turismo 4",
        "Gran Turismo Sport",
        "Assetto Corsa Competizione",
        "Project CARS 2",
        "Wreckfest",
        "Dirt 5",
        "EA Sports WRC",
        "The Crew 2",
        "The Crew",
        "Ridge Racer",
        "Wipeout HD",
        "Hotshot Racing",
        "Split/Second",
        "Blur",
        "Sonic & All-Stars Racing Transformed",
        "Crash Team Racing Nitro-Fueled"
    ]

},


    /* ========================= */
    /* INDIE */
    /* ========================= */

    "indie": {

    title: "INDIE MASTERPIECES",

    subtitle: "Small teams. Massive imagination.",

    description:
        "Creative ideas, unforgettable art styles and unique experiences prove that some of gaming's greatest worlds come from independent creators.",

    backgroundSearch: "Hollow Knight",

    featuredGames: [
        "Hollow Knight",
        "Hades",
        "Celeste",
        "Stardew Valley",
        "Undertale",
        "Outer Wilds",
        "Disco Elysium",
        "Dead Cells",
        "Cuphead",
        "Inside",
        "Limbo",
        "Balatro"
    ],

    bestGames: [
        "Hollow Knight",
        "Hades",
        "Outer Wilds",
        "Disco Elysium",
        "Celeste",
        "Undertale",
        "Stardew Valley",
        "Dead Cells",
        "Cuphead",
        "Inside",
        "Return of the Obra Dinn",
        "Balatro"
    ],

    moreGames: [
        "Hollow Knight: Silksong",
        "Hades II",
        "Slay the Spire",
        "Vampire Survivors",
        "Dave the Diver",
        "Dredge",
        "Cocoon",
        "Tunic",
        "Hyper Light Drifter",
        "Katana ZERO",
        "Hotline Miami",
        "Hotline Miami 2: Wrong Number",
        "Shovel Knight",
        "Ori and the Blind Forest",
        "Ori and the Will of the Wisps",
        "Journey",
        "Abzu",
        "Firewatch",
        "What Remains of Edith Finch",
        "Papers, Please",
        "Braid",
        "FEZ",
        "The Witness",
        "Animal Well",
        "Neon White"
    ]

},


    /* ========================= */
    /* COZY */
    /* ========================= */

    "cozy": {

    title: "COZY ESCAPES",

    subtitle: "Relax. Explore. Stay awhile.",

    description:
        "Peaceful worlds, charming characters and relaxing adventures for when you just want to slow down and enjoy the journey.",

    backgroundSearch: "Stardew Valley",

    featuredGames: [
        "Stardew Valley",
        "Animal Crossing: New Horizons",
        "Spiritfarer",
        "A Short Hike",
        "Unpacking",
        "Coffee Talk",
        "Slime Rancher",
        "Disney Dreamlight Valley",
        "Coral Island",
        "Dinkum",
        "Cozy Grove",
        "PowerWash Simulator"
    ],

    bestGames: [
        "Stardew Valley",
        "Animal Crossing: New Horizons",
        "Spiritfarer",
        "A Short Hike",
        "Unpacking",
        "Slime Rancher",
        "Cozy Grove",
        "Coffee Talk",
        "Disney Dreamlight Valley",
        "Coral Island",
        "Dinkum",
        "PowerWash Simulator"
    ],

    moreGames: [
        "Stardew Valley",
        "Harvest Moon: Friends of Mineral Town",
        "Story of Seasons: Friends of Mineral Town",
        "My Time at Portia",
        "My Time at Sandrock",
        "Palia",
        "Ooblets",
        "Bear and Breakfast",
        "Littlewood",
        "Garden Story",
        "Moonstone Island",
        "Fae Farm",
        "Sun Haven",
        "Roots of Pacha",
        "Potion Permit",
        "Wytchwood",
        "Lemon Cake",
        "Lake",
        "Dorfromantik",
        "Townscaper",
        "House Flipper",
        "The Sims 4",
        "Cat Cafe Manager",
        "Sticky Business",
        "Minami Lane"
    ]

},


    /* ========================= */
    /* RETRO */
    /* ========================= */

    "retro": {

    title: "RETRO CLASSICS",

    subtitle: "Games that built generations.",

    description:
        "Before photorealism and massive open worlds, these classics defined what video games could be.",

    backgroundSearch: "Super Mario Bros.",

    featuredGames: [
        "Super Mario Bros.",
        "The Legend of Zelda: Ocarina of Time",
        "Super Mario 64",
        "Final Fantasy VII",
        "Metal Gear Solid",
        "Resident Evil 2",
        "Silent Hill",
        "Chrono Trigger",
        "Castlevania: Symphony of the Night",
        "Sonic the Hedgehog 2",
        "The Legend of Zelda: A Link to the Past",
        "Street Fighter II"
    ],

    bestGames: [
        "The Legend of Zelda: Ocarina of Time",
        "Super Mario 64",
        "Super Mario Bros.",
        "Chrono Trigger",
        "Final Fantasy VII",
        "Metal Gear Solid",
        "Castlevania: Symphony of the Night",
        "The Legend of Zelda: A Link to the Past",
        "Resident Evil 2",
        "Silent Hill",
        "Street Fighter II",
        "Half-Life"
    ],

    moreGames: [
        "Super Mario Bros. 3",
        "Super Mario World",
        "The Legend of Zelda",
        "The Legend of Zelda: Majora's Mask",
        "Metroid",
        "Super Metroid",
        "Metroid Prime",
        "Sonic the Hedgehog",
        "Sonic the Hedgehog 3",
        "Sonic & Knuckles",
        "Mega Man 2",
        "Mega Man X",
        "Donkey Kong Country",
        "Pokémon Red",
        "Pokémon Gold",
        "Tetris",
        "Pac-Man",
        "Space Invaders",
        "Doom",
        "Quake",
        "Half-Life 2",
        "Grand Theft Auto III",
        "Tony Hawk's Pro Skater 2",
        "Crash Bandicoot",
        "Spyro the Dragon"
    ]

}

};


/* ========================= */
/* GET ACTIVE COLLECTION */
/* ========================= */

const collection =
    collections[collectionType]
    || collections["open-world"];


/* ========================= */
/* UPDATE COLLECTION TEXT */
/* ========================= */

collectionTitle.textContent =
    collection.title;

collectionSubtitle.textContent =
    collection.subtitle;

collectionDescription.textContent =
    collection.description;

bestCollectionTitle.textContent =
    `BEST OF ${collection.title}`;

moreGamesTitle.textContent =
    `MORE ${collection.title}`;


/* ========================= */
/* SEARCH GAME */
/* ========================= */

// Helper function to add delay between requests
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// Helper function to batch process promises with delay
async function batchProcess(items, processFn, delayMs = 100) {
    const results = [];
    let successCount = 0;
    let failCount = 0;
    
    console.log(`Starting batch process for ${items.length} items`);
    
    for (let i = 0; i < items.length; i++) {
        const item = items[i];
        console.log(`Processing ${i + 1}/${items.length}: ${item}`);
        
        const result = await processFn(item);
        
        if (result) {
            successCount++;
            console.log(`✓ Found: ${item}`);
        } else {
            failCount++;
            console.log(`✗ Not found: ${item}`);
        }
        
        results.push(result);
        await delay(delayMs); // Wait between requests
    }
    
    console.log(`Batch complete: ${successCount} found, ${failCount} not found`);
    return results;
}

async function searchGame(name) {

    try {

        const response =
            await fetch(
                `https://gyg-backend-hjbx.onrender.com/api/search/${encodeURIComponent(name)}`
            );

        if (!response.ok) {

            return null;

        }

        const results =
            await response.json();

        if (
            !results ||
            !results.length
        ) {

            return null;

        }

        const cleanSearch =
            name
                .toLowerCase()
                .replace(
                    /[^a-z0-9]/g,
                    ""
                );


        /* Exact match */

        const exactMatch =
            results.find(item => {

                if (
                    !item.name ||
                    !item.cover
                ) {

                    return false;

                }

                const cleanName =
                    item.name
                        .toLowerCase()
                        .replace(
                            /[^a-z0-9]/g,
                            ""
                        );

                return (
                    cleanName ===
                    cleanSearch
                );

            });

        if (exactMatch) {

            return exactMatch;

        }


        /* Remove unwanted results */

        const unwantedTerms = [

            "demo",
            "dlc",
            "expansion",
            "soundtrack",
            "bundle",
            "collection",
            "edition",
            "pack",
            "episode",
            "season pass",
            "mobile"

        ];

        const cleanGames =
            results.filter(game => {

                if (
                    !game.name ||
                    !game.cover
                ) {

                    return false;

                }

                const gameName =
                    game.name.toLowerCase();

                return !unwantedTerms.some(
                    term =>
                        gameName.includes(term)
                );

            });


        /* Name match */

        const nameMatch =
            cleanGames.find(game => {

                const cleanGameName =
                    game.name
                        .toLowerCase()
                        .replace(
                            /[^a-z0-9]/g,
                            ""
                        );

                return (
                    cleanGameName.includes(
                        cleanSearch
                    )

                    ||

                    cleanSearch.includes(
                        cleanGameName
                    )

                );

            });

        if (nameMatch) {

            return nameMatch;

        }


        /* Highest rated fallback */

        const ratedGames =
            cleanGames
                .filter(
                    game =>
                        game.rating
                )
                .sort(
                    (a, b) =>
                        b.rating -
                        a.rating
                );

        if (ratedGames.length) {

            return ratedGames[0];

        }

        return (

            cleanGames[0]

            ||

            results.find(
                game =>
                    game.cover
            )

            ||

            null

        );

    }

    catch (error) {

        console.error(
            "Game search error:",
            name,
            error
        );

        return null;

    }

}


/* ========================= */
/* GET GAME DETAILS */
/* ========================= */

async function getGameDetails(id) {

    try {

        const response =
            await fetch(
                `https://gyg-backend-hjbx.onrender.com/api/game/${id}`
            );

        if (!response.ok) {

            return null;

        }

        return await response.json();

    }

    catch (error) {

        console.error(
            "Game details error:",
            error
        );

        return null;

    }

}


/* ========================= */
/* GET BEST BACKGROUND */
/* ========================= */

function getBestBackground(game) {

    if (
        game.artworks &&
        game.artworks.length > 0
    ) {

        return game.artworks[0];

    }

    if (
        game.screenshots &&
        game.screenshots.length > 0
    ) {

        return game.screenshots[0];

    }

    if (game.background) {

        return game.background;

    }

    return game.cover || null;

}


/* ========================= */
/* LOAD COLLECTION BACKGROUND */
/* ========================= */

async function loadCollectionBackground() {

    try {

        const game =
            await searchGame(
                collection.backgroundSearch
            );

        if (!game) {

            return;

        }

        const details =
            await getGameDetails(
                game.id
            );

        const background =
            details
                ? getBestBackground(details)
                : game.background ||
                  game.cover;

        if (!background) {

            return;

        }

        const image =
            new Image();

        image.onload = () => {

            collectionBackground.style.backgroundImage =
                `url("${background}")`;

        };

        image.src =
            background;

    }

    catch (error) {

        console.error(
            "Collection background error:",
            error
        );

    }

}


/* ========================= */
/* CREATE GAME CARD */
/* ========================= */

function getGameImage(game) {

    return game.cover || "";

}


function getGameRating(game) {

    const rating =
        Number(game.rating);

    return rating > 0
        ? (
            rating > 10
                ? rating / 10
                : rating
        ).toFixed(1)
        : "N/A";

}


function getGameYear(game) {

    if (!game.release_date) {

        return "Unknown";

    }

    const date =
        new Date(game.release_date);

    return Number.isNaN(date.getTime())
        ? "Unknown"
        : date.getFullYear();

}

function createGameCard(
    game
) {

    const card =
    document.createElement(
        "div"
    );

card.className =
    "collectionGameCard";

card.dataset.gameId =
    game.id;

    /* ========================= */
    /* GAME IMAGE */
    /* ========================= */

    const image =
        game.cover ||
        getGameImage(
            game
        );


    /* ========================= */
    /* IMAGE CONTAINER */
    /* ========================= */

    const imageContainer =
        document.createElement(
            "div"
        );


    imageContainer.className =
        "collectionGameImage";


    const imageElement =
        document.createElement(
            "img"
        );


    imageElement.src =
        image ||
        "";


    imageElement.alt =
        game.name ||
        "Game";


    imageElement.loading =
        "lazy";


    imageElement.onerror =
        () => {

            imageElement.style.display =
                "none";

        };


    imageContainer.appendChild(
        imageElement
    );


    /* ========================= */
    /* GAME INFO */
    /* ========================= */

    const info =
        document.createElement(
            "div"
        );


    info.className =
        "collectionGameInfo";


    /* ========================= */
    /* GAME TITLE */
    /* ========================= */

    const title =
        document.createElement(
            "h3"
        );


    title.textContent =
        game.name ||
        "Unknown Game";


    /* ========================= */
    /* GAME META */
    /* ========================= */

    const meta =
        document.createElement(
            "div"
        );


    meta.className =
        "gameMeta";


    /* YEAR */

    const year =
        document.createElement(
            "span"
        );


    year.textContent =
        getGameYear(
            game
        );


    /* GENRE */

    /* GENRE */

const genre =
    game.genres &&
    game.genres.length
        ? (
            typeof game.genres[0] === "string"
                ? game.genres[0]
                : game.genres[0].name || "Game"
        )
        : "Game";


const genreText =
    document.createElement(
        "span"
    );

genreText.textContent =
    genre;


    meta.appendChild(
        year
    );


    meta.appendChild(
        genreText
    );


    /* ========================= */
    /* BOTTOM ROW */
    /* ========================= */

    const bottomMeta =
        document.createElement(
            "div"
        );


    bottomMeta.className =
        "gameBottomMeta";


    /* ========================= */
    /* RATING */
    /* ========================= */

    const rating =
        document.createElement(
            "span"
        );


    rating.className =
        "gameCardRating";


    rating.textContent =
        `★ ${getGameRating(
            game
        )}`;


    /* ========================= */
    /* BUILD BOTTOM ROW */
    /* ========================= */

    bottomMeta.appendChild(
        rating
    );


    /* ========================= */
    /* BUILD INFO */
    /* ========================= */

    info.appendChild(
        title
    );


    info.appendChild(
        meta
    );


    info.appendChild(
        bottomMeta
    );


    /* ========================= */
    /* BUILD CARD */
    /* ========================= */

    card.appendChild(
        imageContainer
    );


    card.appendChild(
        info
    );


    /* ========================= */
    /* OPEN GAME */
    /* ========================= */

    card.addEventListener(
        "click",
        () => {

            window.location.href =
                `game.html?id=${game.id}`;

        }
    );


    return card;

}




/* ===================================== */
/* CREATE FEATURED SLIDE */
/* ===================================== */

function createFeaturedSlide(
    game,
    details,
    index
) {

    const background =
        details
            ? getBestBackground(details)
            : game.background ||
              game.cover;

    const year =
        game.release_date
            ? new Date(
                game.release_date
            ).getFullYear()
            : "Unknown";

    const numericRating =
        Number(game.rating);

    const rating =
        numericRating > 0
            ? (
                numericRating > 10
                    ? numericRating / 10
                    : numericRating
            ).toFixed(1)
            : null;

    const summary =
        details?.summary ||
        game.summary ||
        "One of the defining experiences in this collection.";

    const platforms =
    details?.platforms ||
    game.platforms ||
    [];

    const genres =
        details?.genres ||
        game.genres ||
        [];

    const developers =
        details?.developers ||
        [];

    const publishers =
        details?.publishers ||
        [];

    const genreTags =
        genres
            .slice(0, 4)
            .map(
                genre => {

                    const genreName =
                        typeof genre === "string"
                            ? genre
                            : genre.name || "";

                    if (!genreName) {

                        return "";

                    }

                    return `
                        <span class="featuredGenreTag">
                            ${genreName}
                        </span>
                    `;

                }
            )
            .filter(Boolean)
            .join("");

    const developerText =
        developers
            .map(
                developer =>
                    typeof developer === "string"
                        ? developer
                        : developer.name || ""
            )
            .filter(Boolean)
            .join(" • ");

    const publisherText =
        publishers
            .map(
                publisher =>
                    typeof publisher === "string"
                        ? publisher
                        : publisher.name || ""
            )
            .filter(Boolean)
            .join(" • ");


    return `

        <div
            class="featuredSlide"
            data-index="${index}"
            data-game-id="${game.id}"
        >

            <div
                class="featuredMain"
                style="
                    background-image:
                    url('${background}');
                "
            >

                <div
                    class="featuredImageOverlay"
                ></div>

                <div
                    class="featuredMainInfo"
                >

                    <span
                        class="featuredBadge"
                    >
                        FEATURED
                    </span>

                    <h3>
                        ${game.name}
                    </h3>

                    <p
                        class="featuredMainDescription"
                    >
                        ${summary}
                    </p>

                </div>

                <button
                    class="featuredArrow featuredPrevious"
                    aria-label="Previous featured game"
                >
                    ❮
                </button>

                <div
                    class="featuredDots"
                >

                    ${
                        featuredGames
                            .map(
                                (_, dotIndex) => `

                                    <button
                                        class="
                                            featuredDot
                                            ${
                                                dotIndex === index
                                                    ? "active"
                                                    : ""
                                            }
                                        "
                                        data-index="${dotIndex}"
                                        aria-label="Show featured game ${dotIndex + 1}"
                                    ></button>

                                `
                            )
                            .join("")
                    }

                </div>

                <button
                    class="featuredArrow featuredNext"
                    aria-label="Next featured game"
                >
                    ❯
                </button>

            </div>


            <div
                class="featuredSide"
            >

                <div
                    class="featuredSideContent"
                >

                    <p
                        class="featuredEyebrow"
                    >
                        HANDPICKED EXPERIENCE
                    </p>

                    <h3
                        class="featuredGameTitle"
                    >
                        ${game.name}
                    </h3>


                    <div
                        class="featuredMeta"
                    >

                        <span
                            class="featuredYear"
                        >
                            ◫ ${year}
                        </span>

                        <span
                            class="featuredRating"
                        >
                            ☆
                            ${
                                rating
                                    ? `${rating}/10`
                                    : "Not yet rated"
                            }
                        </span>

                        <span
                            class="featuredMetaGenres"
                        >
                            ${
                                genres
                                    .slice(0, 3)
                                    .map(
                                        genre =>
                                            typeof genre === "string"
                                                ? genre
                                                : genre.name || ""
                                    )
                                    .filter(Boolean)
                                    .join(" • ")
                            }
                        </span>

                    </div>


                    <div
                        class="featuredCompanyRow"
                    >

                        <div
                            class="featuredCompany"
                        >

                            <p>
                                DEVELOPER
                            </p>

                            <span>
                                ${
                                    developerText ||
                                    "Unknown"
                                }
                            </span>

                        </div>


                        <div
                            class="featuredCompany"
                        >

                            <p>
                                PUBLISHER
                            </p>

                            <span>
                                ${
                                    publisherText ||
                                    "Unknown"
                                }
                            </span>

                        </div>

                    </div>


                                        <div class="featuredGenres">

    <p>
        GENRES
    </p>

    <div class="featuredGenreTags">

        ${genreTags}

    </div>

</div>


${createPlatformLogos(platforms)}


                    


                    <button
                        class="featuredExploreButton"
                        data-game-id="${game.id}"
                    >

                        <span>
                            EXPLORE GAME
                        </span>

                        <span
                            class="exploreArrow"
                        >
                            →
                        </span>

                    </button>

                </div>

            </div>

        </div>

    `;

}


/* ===================================== */
/* LOAD FEATURED GAMES */
/* ===================================== */

async function loadFeaturedGame() {

    featuredRecommended.innerHTML =
        "<p>Loading featured games...</p>";

    const dailyGames =
        getDailyFeaturedGames();

    const games =
        await Promise.all(

            dailyGames.map(
                name =>
                    searchGame(name)
            )

        );

    featuredGames =
        games.filter(
            game => game
        );

    if (
        !featuredGames.length
    ) {

        featuredRecommended.innerHTML =
            "<p>Unable to load featured games.</p>";

        return;

    }

    const featuredDetails =
        await Promise.all(

            featuredGames.map(
                game =>
                    getGameDetails(
                        game.id
                    )
            )

        );

    featuredRecommended.innerHTML =
        featuredGames
            .map(
                (game, index) =>
                    createFeaturedSlide(
                        game,
                        featuredDetails[index],
                        index
                    )
            )
            .join("");

    const slides =
        featuredRecommended.querySelectorAll(
            ".featuredSlide"
        );

    slides.forEach(
        (slide, index) => {

            if (index === 0) {

                slide.classList.add(
                    "active"
                );

            }

        }
    );

    featuredIndex = 0;

    addFeaturedListeners();

    startFeaturedCarousel();

}


/* ===================================== */
/* CHANGE FEATURED SLIDE */
/* ===================================== */

function showFeaturedGame(
    newIndex,
    direction = "next"
) {

    if (featuredChanging) {

        return;

    }

    if (
        newIndex ===
        featuredIndex
    ) {

        return;

    }

    const slides =
        featuredRecommended.querySelectorAll(
            ".featuredSlide"
        );

    if (!slides.length) {

        return;

    }

    featuredChanging = true;

    const currentSlide =
        slides[
            featuredIndex
        ];

    const nextSlide =
        slides[
            newIndex
        ];

    if (
        !currentSlide ||
        !nextSlide
    ) {

        featuredChanging = false;

        return;

    }

    nextSlide.classList.remove(
        "active",
        "slideNext",
        "slidePrevious",
        "leaving"
    );

    currentSlide.classList.remove(
        "slideNext",
        "slidePrevious"
    );

    if (
        direction ===
        "previous"
    ) {

        nextSlide.classList.add(
            "slidePrevious"
        );

    }

    else {

        nextSlide.classList.add(
            "slideNext"
        );

    }

    void nextSlide.offsetWidth;

    currentSlide.classList.add(
        "leaving"
    );

    nextSlide.classList.add(
        "active"
    );

    featuredIndex =
        newIndex;

    updateFeaturedDots();

    setTimeout(
        () => {

            slides.forEach(
                (slide, index) => {

                    if (
                        index !==
                        featuredIndex
                    ) {

                        slide.classList.remove(
                            "active",
                            "slideNext",
                            "slidePrevious",
                            "leaving"
                        );

                    }

                }
            );

            nextSlide.classList.remove(
                "slideNext",
                "slidePrevious"
            );

            featuredChanging =
                false;

        },
        850
    );

}


/* ===================================== */
/* UPDATE DOTS */
/* ===================================== */

function updateFeaturedDots() {

    const dots =
        featuredRecommended.querySelectorAll(
            ".featuredDot"
        );

    dots.forEach(
        (dot, index) => {

            dot.classList.toggle(
                "active",
                index === featuredIndex
            );

        }
    );

}


/* ===================================== */
/* FEATURED EVENT LISTENERS */
/* ===================================== */

function addFeaturedListeners() {

    featuredRecommended
        .querySelectorAll(
            ".featuredExploreButton"
        )
        .forEach(
            button => {

                button.addEventListener(
                    "click",
                    event => {

                        event.stopPropagation();

                        const gameId =
                            button.dataset.gameId;

                        window.location.href =
                            `game.html?id=${gameId}`;

                    }
                );

            }
        );


    featuredRecommended
        .querySelectorAll(
            ".featuredMain"
        )
        .forEach(
            main => {

                main.addEventListener(
                    "click",
                    () => {

                        const slide =
                            main.closest(
                                ".featuredSlide"
                            );

                        const gameId =
                            slide.dataset.gameId;

                        window.location.href =
                            `game.html?id=${gameId}`;

                    }
                );

            }
        );


    featuredRecommended
        .querySelectorAll(
            ".featuredPrevious"
        )
        .forEach(
            button => {

                button.addEventListener(
                    "click",
                    event => {

                        event.stopPropagation();

                        clearInterval(
                            featuredInterval
                        );

                        const newIndex =
                            (
                                featuredIndex - 1 +
                                featuredGames.length
                            )
                            %
                            featuredGames.length;

                        showFeaturedGame(
                            newIndex,
                            "previous"
                        );

                        startFeaturedCarousel();

                    }
                );

            }
        );


    featuredRecommended
        .querySelectorAll(
            ".featuredNext"
        )
        .forEach(
            button => {

                button.addEventListener(
                    "click",
                    event => {

                        event.stopPropagation();

                        clearInterval(
                            featuredInterval
                        );

                        const newIndex =
                            (
                                featuredIndex + 1
                            )
                            %
                            featuredGames.length;

                        showFeaturedGame(
                            newIndex,
                            "next"
                        );

                        startFeaturedCarousel();

                    }
                );

            }
        );


    featuredRecommended
        .querySelectorAll(
            ".featuredDot"
        )
        .forEach(
            dot => {

                dot.addEventListener(
                    "click",
                    () => {

                        const newIndex =
                            Number(
                                dot.dataset.index
                            );

                        if (
                            newIndex ===
                            featuredIndex
                        ) {

                            return;

                        }

                        clearInterval(
                            featuredInterval
                        );

                        const direction =
                            newIndex >
                            featuredIndex
                                ? "next"
                                : "previous";

                        showFeaturedGame(
                            newIndex,
                            direction
                        );

                        startFeaturedCarousel();

                    }
                );

            }
        );

}


/* ===================================== */
/* START FEATURED CAROUSEL */
/* ===================================== */

function startFeaturedCarousel() {

    clearInterval(
        featuredInterval
    );

    if (
        featuredGames.length <= 1
    ) {

        return;

    }

    featuredInterval =
        setInterval(
            () => {

                const nextIndex =
                    (
                        featuredIndex +
                        1
                    )
                    %
                    featuredGames.length;

                showFeaturedGame(
                    nextIndex,
                    "next"
                );

            },
            6500
        );

}


/* ========================= */
/* GAME CARD CLICK */
/* ========================= */

function addGameCardListeners() {

    document
        .querySelectorAll(
            ".collectionGameCard"
        )
        .forEach(card => {

            card.addEventListener(
                "click",
                () => {

                    const id =
                        card.dataset.gameId;

                    window.location.href =
                        `game.html?id=${id}`;

                }
            );

        });

}


/* ========================= */
/* LOAD COLLECTION GAMES */
/* ========================= */

async function loadBestGames() {

    const games =
        await Promise.all(
            collection.bestGames.map(
                name => searchGame(name)
            )
        );

    bestGamesCarousel.innerHTML =
        "";

    games
        .filter(Boolean)
        .forEach(
            game => bestGamesCarousel.appendChild(
                createGameCard(game)
            )
        );
}


async function loadMoreGames() {

    const games =
        await Promise.all(
            collection.moreGames.map(
                name => searchGame(name)
            )
        );

    moreGamesGrid.innerHTML =
        "";

    games
        .filter(Boolean)
        .forEach(
            game => moreGamesGrid.appendChild(
                createGameCard(game)
            )
        );
}


/* ========================= */
/* BEST GAMES CAROUSEL */
/* ========================= */

let carouselPosition = 0;

const bestNextButton =
    document.getElementById(
        "bestNext"
    );

const bestPrevButton =
    document.getElementById(
        "bestPrev"
    );


if (bestNextButton) {

    bestNextButton.addEventListener(
        "click",
        () => {

            carouselPosition -= 242;

            const maxPosition =
                -(
                    bestGamesCarousel.scrollWidth -
                    bestGamesCarousel.parentElement.clientWidth
                );

            if (
                carouselPosition <
                maxPosition
            ) {

                carouselPosition =
                    maxPosition;

            }

            bestGamesCarousel.style.transform =
                `translateX(${carouselPosition}px)`;

        }
    );

}


if (bestPrevButton) {

    bestPrevButton.addEventListener(
        "click",
        () => {

            carouselPosition += 242;

            if (
                carouselPosition >
                0
            ) {

                carouselPosition =
                    0;

            }

            bestGamesCarousel.style.transform =
                `translateX(${carouselPosition}px)`;

        }
    );

}


/* ========================= */
/* LOAD COLLECTION */
/* ========================= */

loadCollectionBackground();

loadFeaturedGame();

loadBestGames();

loadMoreGames();