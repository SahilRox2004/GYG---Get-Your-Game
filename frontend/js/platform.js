/* ========================= */
/* GET PLATFORM FROM URL */
/* ========================= */

const params =
    new URLSearchParams(
        window.location.search
    );

const platform =
    params.get("platform");

const platformAliases = {
    "pc": "pc",
    "windows": "pc",
    "microsoft windows": "pc",
    "windows pc": "pc",
    "pc (microsoft windows)": "pc",
    "pc/windows": "pc",
    "pc / windows": "pc",
    "linux": "linux",
    "mac": "mac",
    "mac os": "mac",
    "macos": "mac",
    "3do": "3do",
    "3do interactive multiplayer": "3do",
    "atari 2600": "atari2600",
    "atari 5200": "atari5200",
    "atari 7800": "atari7800",
    "atari jaguar": "jaguar",
    "atari lynx": "lynx",
    "neo geo": "neogeoaes",
    "neo geo aes": "neogeoaes",
    "neo geo cd": "neogeocd",
    "commodore 64": "commodore64",
    "commodore c64/128/max": "commodore64",
    "c64": "commodore64",
    "commodore amiga": "amiga",
    "amiga": "amiga"
};

const platformContent = {
    pc: {
        name: "PC",
        manufacturer: "Various manufacturers",
        releaseDate: "1970s",
        heroDescription: "A flexible gaming platform shaped by Windows, custom-built hardware, digital storefronts, mods, and a vast library that spans decades.",
        summary: "PC gaming is an open ecosystem rather than a single console or fixed hardware generation. Players can choose from desktops, laptops, and handheld PCs, then tailor performance with different processors, graphics cards, displays, and controls. Windows is the most widely supported operating system, while Linux offers an open alternative with a growing catalog of native games and compatibility tools such as Proton. Digital storefronts make it easy to move between decades of releases, and mods, community servers, and configurable settings give players unusual control over how games look and feel.",
        platformFacts: [
            { label: "OPERATING SYSTEMS", value: "Windows, Linux, and more" },
            { label: "GAME STOREFRONTS", value: "Steam, GOG, Epic Games Store, and more" }
        ]
    },
    linux: {
        name: "Linux",
        manufacturer: "Open-source community",
        releaseDate: "1991",
        heroDescription: "An open PC gaming ecosystem where Linux distributions, native releases, and compatibility layers bring a growing library to desktops and handhelds.",
        summary: "Linux gaming brings the flexibility of the PC to an open-source operating system. Players can choose from many distributions and desktop environments, use familiar storefronts such as Steam, and install games made specifically for Linux. Compatibility tools, especially Proton, have also made thousands of Windows games playable on Linux, helping devices such as the Steam Deck bring the platform to a wider audience. Support can vary by game, hardware, and anti-cheat software, but ongoing work from developers and the community continues to expand what runs well.",
        platformFacts: [
            { label: "SYSTEM MODEL", value: "Open-source operating system" },
            { label: "GAME COMPATIBILITY", value: "Native games and Windows titles via Proton" }
        ]
    },
    mac: {
        name: "Mac",
        manufacturer: "Apple",
        releaseDate: "1984",
        heroDescription: "Explore Mac gaming across decades of Apple computers, from classic Macintosh releases to modern macOS games and Apple Silicon hardware.",
        summary: "Mac gaming has grown alongside Apple's personal computers, from early Macintosh games to today's macOS releases. The library includes indie games, strategy titles, creative experiments, and selected major releases through storefronts such as Steam and the Mac App Store, as well as Apple Arcade. Modern Apple Silicon brings capable graphics and efficient performance to current Macs, while game availability and compatibility still vary by title.",
        platformFacts: [
            { label: "OPERATING SYSTEM", value: "macOS" },
            { label: "GAME SOURCES", value: "Steam, Mac App Store, and Apple Arcade" }
        ]
    },
    "3do": {
        name: "3DO Interactive Multiplayer",
        manufacturer: "The 3DO Company",
        releaseDate: "October 1993",
        predecessor: "None",
        successor: "None",
        heroDescription: "A multimedia-focused 32-bit console that brought CD-based games and ambitious 3D experiments to the early 1990s.",
        summary: "The 3DO Interactive Multiplayer was a 32-bit CD-based console released in the early 1990s. The 3DO Company licensed the hardware design to partners including Panasonic, GoldStar, and Sanyo. Its multimedia ambitions and high launch price set it apart, while its library became known for experimental FMV, arcade conversions, and early 3D games."
    },
    atari2600: {
        name: "Atari 2600",
        manufacturer: "Atari",
        releaseDate: "September 1977",
        predecessor: "None",
        successor: "Atari 5200",
        heroDescription: "The cartridge-based home console that helped bring arcade-inspired video games into living rooms around the world.",
        summary: "Originally released as the Atari Video Computer System, the Atari 2600 helped popularize interchangeable game cartridges for home consoles. Its joystick and paddle controls made arcade-style games accessible at home, and its broad library helped establish video games as a major form of home entertainment."
    },
    atari5200: {
        name: "Atari 5200",
        manufacturer: "Atari",
        releaseDate: "November 1982",
        predecessor: "Atari 2600",
        successor: "Atari 7800",
        heroDescription: "Atari's next-generation home console brought more detailed arcade conversions and analog controls to the early 1980s.",
        summary: "The Atari 5200 brought Atari's 8-bit computer technology and arcade-style games into the home console market. It offered more capable graphics than the 2600 and came with distinctive analog controllers. The system had a short commercial run, but its hardware and games reflected the rapid technical changes of the early 1980s."
    },
    atari7800: {
        name: "Atari 7800",
        manufacturer: "Atari",
        releaseDate: "May 1986",
        predecessor: "Atari 5200",
        successor: "Atari Jaguar",
        heroDescription: "A backward-compatible Atari console built to deliver sharper arcade-style games while retaining access to the 2600 library.",
        summary: "The Atari 7800 was designed as a more powerful successor to the Atari 5200 and could also play most Atari 2600 cartridges. Its compatibility gave owners access to a large existing library while the system added improved graphics and arcade conversions. After delays, it reached a wider market in 1986."
    },
    jaguar: {
        name: "Atari Jaguar",
        manufacturer: "Atari",
        releaseDate: "November 1993",
        predecessor: "Atari 7800",
        successor: "None",
        heroDescription: "Atari's ambitious 1990s console pursued advanced graphics and a new generation of home gaming.",
        summary: "The Atari Jaguar was Atari's final major home console. Marketed around its multi-chip architecture, it aimed to compete in the transition to 3D graphics and CD-based gaming. Its library included distinctive releases such as Tempest 2000 and Alien vs. Predator, and the system remains a notable part of Atari's hardware history."
    },
    lynx: {
        name: "Atari Lynx",
        manufacturer: "Atari",
        releaseDate: "1989",
        predecessor: "None",
        successor: "None",
        heroDescription: "A color-screen handheld with advanced graphics and an innovative reversible design.",
        summary: "The Atari Lynx was a color handheld released in 1989. Its backlit screen, capable graphics, and ambidextrous controls made it technically distinctive, while its size, battery demands, and competition limited its reach. The Lynx developed a lasting following around its arcade-style and multiplayer games."
    },
    neogeoaes: {
        name: "Neo Geo AES",
        manufacturer: "SNK",
        releaseDate: "1990",
        predecessor: "None",
        successor: "Neo Geo CD",
        heroDescription: "SNK's premium home system brought arcade-quality fighting games and action titles into the living room.",
        summary: "The Neo Geo Advanced Entertainment System brought SNK's arcade hardware and games into the home. Its large cartridges and premium price delivered close conversions of arcade favorites, including The King of Fighters, Metal Slug, and Samurai Shodown. The AES became known for its high-quality library and collector appeal."
    },
    neogeocd: {
        name: "Neo Geo CD",
        manufacturer: "SNK",
        releaseDate: "September 1994",
        predecessor: "Neo Geo AES",
        successor: "None",
        heroDescription: "SNK's CD-based Neo Geo brought its celebrated arcade library to a more affordable home format.",
        summary: "The Neo Geo CD offered a lower-cost way to play SNK's home and arcade titles by replacing the AES's expensive cartridges with compact discs. It retained much of the same game library and arcade feel, with longer loading times as the main tradeoff. The system remains a distinctive branch of the Neo Geo family."
    },
    commodore64: {
        name: "Commodore 64",
        manufacturer: "Commodore",
        releaseDate: "August 1982",
        predecessor: "None",
        successor: "None",
        heroDescription: "A hugely popular home computer whose sound, graphics, and low-cost games helped shape early personal computing.",
        summary: "The Commodore 64 became one of the most successful home computers of its era. Its distinctive SID sound chip, colorful graphics, and accessible price attracted a large community of developers and players. Games arrived on cassette and disk, and its library ranged from arcade conversions to original adventures and programming experiments."
    },
    amiga: {
        name: "Commodore Amiga",
        manufacturer: "Commodore",
        releaseDate: "July 1985",
        predecessor: "None",
        successor: "None",
        heroDescription: "A multimedia home computer celebrated for its rich graphics, stereo sound, and influential game library.",
        summary: "The Commodore Amiga brought advanced graphics and sound capabilities to home computing in the mid-1980s. Its multimedia hardware attracted game developers and creative communities, producing a distinctive catalog of strategy, simulation, platform, and arcade-style titles. The Amiga remained influential in Europe and among game developers long after its commercial peak."
    }
};

function getPlatformFallbackContent(name) {
    const platformKey = platformAliases[
        (name || "").trim().toLowerCase()
    ];
    const content = platformContent[platformKey];

    return content
        ? { ...content, isComputerPlatform: Boolean(content.platformFacts) }
        : null;
}


/* ========================= */
/* PLATFORM IMAGE MAPPING */
/* ========================= */

const platformImageSettings = {

    /* ========================= */
    /* PLAYSTATION */
    /* ========================= */

    "PlayStation": {
        image: "assets/platform-images/ps1.webp",
        size: "60%",
        position: "center-right"
    },
    "PlayStation 1": {
        image: "assets/platform-images/ps1.webp",
        size: "60%",
        position: "center-right"
    },
    "PS1": {    
        image: "assets/platform-images/ps1.webp",
        size: "60%",
        position: "center-right"
    },

    "PlayStation 2": {
        image: "assets/platform-images/ps2.webp",
        size: "35%",
        position: "center-right"
    },
    "PS2": {
        image: "assets/platform-images/ps2.webp",
        size: "35%",
        position: "center-right"
    },

    "PlayStation 3": {
        image: "assets/platform-images/ps3.webp",
        size: "80%",
        position: "center-right"
    },

    "PS3": {
        image: "assets/platform-images/ps3.webp",
        size: "80%",
        position: "center-right"
    },


    "PlayStation 4": {
        image: "assets/platform-images/ps4.webp",
        size: "35%",
        position: "center-right"
    },
    "PS4": {
        image: "assets/platform-images/ps4.webp",
        size: "35%",
        position: "center-right"
    },


      "PlayStation 5": {
        image: "assets/platform-images/ps5.webp",
        size: " 20%",
        position: "center-right"
    },

    "PS5": {
        image: "assets/platform-images/ps5.webp",
        size: "20%",
        position: "center-right"
    },


    "PlayStation Portable": {
        image: "assets/platform-images/psp.webp",
        size: "60%",
        position: "center-right"
    },

    "PSP": {
        image: "assets/platform-images/psp.webp",
        size: "60%",
        position: "center-right"
    },


    "PlayStation Vita": {
        image: "assets/platform-images/psvita.webp",
        size: "60%",
        position: "center-right"
    },

    "PS Vita": {
        image: "assets/platform-images/psvita.webp",
        size: "60%",
        position: "center-right"
    },


    /* ========================= */
    /* XBOX */
    /* ========================= */

    "Xbox": {
        image: "assets/platform-images/xbox.webp",
        size: "80%",
        position: "center-right"
    },

    "Xbox 360": {
        image: "assets/platform-images/xbox-360.webp",
        size: "25%",
        position: "center-right"
    },

    "Xbox One": {
        image: "assets/platform-images/xbox-one.webp",
        size: "60%",
        position: "center-right"
    },

    "Xbox Series X|S": {
        image: "assets/platform-images/xbox-series.webp",
        size: "80%",
        position: "center-right"
    },

    "Xbox Series X": {
        image: "assets/platform-images/xbox-series.webp",
        size: "80%",
        position: "center-right"
    },

    "Xbox Series S": {
        image: "assets/platform-images/xbox-series.webp",
        size: "80%",
        position: "center-right"
    },


    /* ========================= */
    /* NINTENDO CONSOLES */
    /* ========================= */

    "Nintendo Entertainment System": {
        image: "assets/platform-images/nes.webp",
        size: "80%",
        position: "center-right"
    },

    "NES": {
        image: "assets/platform-images/nes.webp",
        size: "80%",
        position: "center-right"
    },

    "Super Nintendo Entertainment System": {
        image: "assets/platform-images/snes.webp",
        size: "80%",
        position: "center-right"
    },

    "SNES": {
        image: "assets/platform-images/snes.webp",
        size: "80%",
        position: "center-right"
    },


    "Nintendo 64": {
        image: "assets/platform-images/nintendo-64.webp",
        size: "80%",
        position: "center-right"
    },


    "Nintendo GameCube": {
        image: "assets/platform-images/gamecube.webp",
        size: "80%",
        position: "center-right"
    },

    "GameCube": {
        image: "assets/platform-images/gamecube.webp",
        size: "80%",
        position: "center-right"
    },

    "Wii": {
        image: "assets/platform-images/wii.webp",
        size: "40%",
        position: "center-right"
    },

    "Wii U": {
        image: "assets/platform-images/wii-u.webp",
        size: "80%",
        position: "center-right"
    },

    "Nintendo Switch": {
        image: "assets/platform-images/switch.webp",
        size: "70%",
        position: "center-right"
    },

    "Nintendo Switch 2": {
        image: "assets/platform-images/switch2.webp",
        size: "80%",
        position: "center-right"
    },

    /* ========================= */
    /* NINTENDO HANDHELDS */
    /* ========================= */

    "Game Boy": {
        image: "assets/platform-images/game-boy.webp",
        size: "28%",
        position: "center-right"
    },

    "Game Boy Color": {
        image: "assets/platform-images/game-boy-color.webp",
        size: "30%",
        position: "center-right"
    },


    "Game Boy Advance": {
        image: "assets/platform-images/game-boy-advance.webp",
        size: "60%",
        position: "center-right"
    },


    "Nintendo DS": {
        image: "assets/platform-images/nintendo-ds.webp",
        size: "50%",
        position: "center-right"
    },


    "Nintendo DSi": {
        image: "assets/platform-images/nintendo-ds.webp",
        size: "50%",
        position: "center-right"
    },


    "Nintendo 3DS": {
        image: "assets/platform-images/nintendo-3ds.webp",
        size: "50%",
        position: "center-right"
    },


    "New Nintendo 3DS": {
        image: "assets/platform-images/nintendo-3ds.webp",
        size: "50%",
        position: "center-right"
    },


    /* ========================= */
    /* SEGA */
    /* ========================= */

    "Sega Genesis": {
        image: "assets/platform-images/sega.webp",
        size: "80%",
        position: "center-right"
    },

    "Sega Mega Drive": {    
        image: "assets/platform-images/sega.webp",
        size: "80%",
        position: "center-right"
    },

    "Sega Saturn": {
        image: "assets/platform-images/sega-saturn.webp",
        size: "80%",
        position: "center-right"
    },

    "Dreamcast": {
        image: "assets/platform-images/dreamcast.webp",
        size: "80%",
        position: "center-right"
    }

};


/* ========================= */
/* PLATFORM ELEMENTS */
/* ========================= */

const platformName =
    document.getElementById(
        "platformName"
    );

const platformBackground =
    document.getElementById(
        "platformBackground"
    );

const platformManufacturer =
    document.getElementById(
        "platformManufacturer"
    );

const platformRelease =
    document.getElementById(
        "platformRelease"
    );

const platformHeroDescription =
    document.getElementById(
        "platformHeroDescription"
    );

const platformSummary =
    document.getElementById(
        "platformSummary"
    );

const platformAboutName =
    document.getElementById(
        "platformAboutName"
    );

const platformFactManufacturer =
    document.getElementById(
        "platformFactManufacturer"
    );

const platformFactRelease =
    document.getElementById(
        "platformFactRelease"
    );

const platformPredecessor =
    document.getElementById(
        "platformPredecessor"
    );

const platformSuccessor =
    document.getElementById(
        "platformSuccessor"
    );

const platformPredecessorFact =
    document.getElementById(
        "platformPredecessorFact"
    );

const platformSuccessorFact =
    document.getElementById(
        "platformSuccessorFact"
    );


function setPlatformFact(
    element,
    value,
    page,
    parameter
) {

    if (!element) {

        return;

    }

    const text =
        value || "";

    element.textContent =
        text;

    const plainText =
        text.trim().toLowerCase();

    if (
        !text.trim() ||
        plainText === "none" ||
        plainText === "current generation"
    ) {

        return;

    }

    const link =
        document.createElement("a");

    link.href =
        `${page}?${parameter}=${encodeURIComponent(text)}`;

    link.textContent =
        text;

    element.textContent =
        "";

    element.appendChild(
        link
    );

}


/* ========================= */
/* CHECK PLATFORM */
/* ========================= */

if (
    !platform &&
    platformName
) {

    platformName.textContent =
        "Platform Not Found";

    if (platformSummary) {

        platformSummary.textContent =
            "No platform was specified.";

    }

}


/* ========================= */
/* SET HERO BACKGROUND */
/* ========================= */

function setHeroBackground(data) {

    if (!platformBackground) {

        return;

    }


    const currentPlatform =
        data.name ||
        platform;


    const settings =
        platformImageSettings[currentPlatform];


    if (settings) {

        platformBackground.style.backgroundImage =
            `url("${settings.image}")`;

        platformBackground.style.backgroundSize =
            settings.size || "cover";

        platformBackground.style.backgroundPosition =
            settings.position || "center";

        platformBackground.style.backgroundRepeat =
            "no-repeat";

    }

    else if (data.background) {

        platformBackground.style.backgroundImage =
            `url("${data.background}")`;

        platformBackground.style.backgroundSize =
            "cover";

        platformBackground.style.backgroundPosition =
            "center";

    }

}


/* ========================= */
/* LOAD PLATFORM */
/* ========================= */

async function loadPlatform() {

    try {

        const localComputerContent =
            getPlatformFallbackContent(platform);

        let data;

        try {

            const response =
                await fetch(
                    `https://gyg-backend-hjbx.onrender.com/api/platform/${encodeURIComponent(platform)}`
                );

            if (!response.ok) {
                throw new Error("Platform request failed");
            }

            data = await response.json();

            if (localComputerContent) {
                data = {
                    ...data,
                    ...localComputerContent,
                    popularGames: data.popularGames || [],
                    ratedGames: data.ratedGames || [],
                    anticipatedGames: data.anticipatedGames || [],
                    exclusiveGames: data.exclusiveGames || []
                };
            }

        }
        catch (error) {

            if (!localComputerContent) {
                throw error;
            }

            data = {
                ...localComputerContent,
                popularGames: [],
                ratedGames: [],
                anticipatedGames: [],
                exclusiveGames: []
            };

        }


        /* ========================= */
        /* PLATFORM NAME */
        /* ========================= */

        if (platformName) {

            platformName.textContent =
                data.name ||
                platform;

        }


        /* ========================= */
        /* HERO INFORMATION */
        /* ========================= */

        if (platformManufacturer) {

            platformManufacturer.textContent =
                data.manufacturer ||
                "";

        }


        if (platformRelease) {

            platformRelease.textContent =
                data.releaseDate
                    ? `Released ${data.releaseDate}`
                    : "";

        }


        if (platformHeroDescription) {

            platformHeroDescription.textContent =
                data.heroDescription ||
                `Discover the games and legacy of ${data.name || platform}.`;

        }


        /* ========================= */
        /* ABOUT TITLE */
        /* ========================= */

        if (platformAboutName) {

            platformAboutName.textContent =
                data.name ||
                platform;

        }


        /* ========================= */
        /* ABOUT DESCRIPTION */
        /* ========================= */

        if (platformSummary) {

            platformSummary.textContent =
                data.summary ||
                "No information available.";

        }


        /* ========================= */
        /* PLATFORM FACTS */
        /* ========================= */

        if (platformFactManufacturer) {

            if (data.isComputerPlatform) {
                platformFactManufacturer.textContent =
                    data.manufacturer || "Unknown";
            }
            else {
                setPlatformFact(
                    platformFactManufacturer,
                    data.manufacturer || "Unknown",
                    "company.html",
                    "company"
                );
            }

        }


        if (platformFactRelease) {

            platformFactRelease.textContent =
                data.releaseDate ||
                "Unknown";

        }


        if (data.isComputerPlatform) {

            if (platformPredecessorFact) {
                platformPredecessorFact.hidden = true;
            }

            if (platformSuccessorFact) {
                platformSuccessorFact.hidden = true;
            }

            (data.platformFacts || []).slice(0, 2).forEach((fact, index) => {

                const row = document.getElementById(
                    `platformCustomFact${index === 0 ? "One" : "Two"}`
                );
                const label = document.getElementById(
                    `platformCustomLabel${index === 0 ? "One" : "Two"}`
                );
                const value = document.getElementById(
                    `platformCustomValue${index === 0 ? "One" : "Two"}`
                );

                if (row && label && value) {
                    label.textContent = fact.label;
                    value.textContent = fact.value;
                    row.hidden = false;
                }

            });

            const exclusiveEyebrow = document.getElementById("exclusiveEyebrow");
            const exclusiveHeading = document.getElementById("exclusiveHeading");
            const exclusiveDescription = document.getElementById("exclusiveDescription");

            if (exclusiveEyebrow) {
                exclusiveEyebrow.textContent = `THE ${data.name.toUpperCase()} LIBRARY`;
            }

            if (exclusiveHeading) {
                exclusiveHeading.textContent = "GAMES";
            }

            if (exclusiveDescription) {
                exclusiveDescription.textContent = "Games listed for this operating system and its ecosystem.";
            }

        }


        if (platformPredecessor) {

            setPlatformFact(
                platformPredecessor,
                data.predecessor || "None",
                "platform.html",
                "platform"
            );

        }


        if (platformSuccessor) {

            setPlatformFact(
                platformSuccessor,
                data.successor || "Current generation",
                "platform.html",
                "platform"
            );

        }


        /* ========================= */
        /* HERO IMAGE */
        /* ========================= */

        setHeroBackground(
            data
        );


        /* ========================= */
        /* SECTION PLATFORM NAMES */
        /* ========================= */

        document
            .querySelectorAll(
                ".platformSectionName"
            )
            .forEach(element => {

                element.textContent =
                    data.name ||
                    platform;

            });


        /* ========================= */
        /* LOAD GAME SECTIONS */
        /* ========================= */

        loadGames(
            data.popularGames,
            "popularGames",
            "popularSection"
        );


        loadGames(
            data.ratedGames,
            "ratedGames",
            "ratedSection"
        );


        loadGames(
            data.anticipatedGames,
            "anticipatedGames",
            "anticipatedSection"
        );


        loadGames(
    data.exclusiveGames,
    "exclusiveGames",
    "exclusiveSection"
);

    }

    catch (error) {

        console.error(
            "Platform loading error:",
            error
        );


        if (platformName) {

            platformName.textContent =
                getPlatformFallbackContent(platform)?.name ||
                platform ||
                "Unknown Platform";

        }

        if (platformAboutName) {
            platformAboutName.textContent =
                getPlatformFallbackContent(platform)?.name ||
                platform ||
                "THIS PLATFORM";
        }


        if (platformSummary) {

            platformSummary.textContent = getPlatformFallbackContent(platform)
                ? getPlatformFallbackContent(platform).summary
                : "Unable to load platform information.";

        }

    }

}


/* ========================= */
/* LOAD GAME CARDS */
/* ========================= */

function loadGames(
    games,
    containerId,
    sectionId
) {

    const container =
        document.getElementById(
            containerId
        );

    const section =
        document.getElementById(
            sectionId
        );


    if (
        !container ||
        !section
    ) {

        return;

    }


    container.innerHTML =
        "";


    /* ========================= */
    /* EMPTY SECTION */
    /* ========================= */

    if (
        !games ||
        !games.length
    ) {

        section.style.display =
            "none";

        return;

    }


    section.style.display =
        "block";


    /* ========================= */
    /* CREATE GAME CARDS */
    /* ========================= */

    games.forEach(game => {

        const card =
            document.createElement(
                "article"
            );


        card.className =
            "platformGameCard";


        const year =
            game.releaseYear ||
            "";


        const rating =
            game.rating
                ? `⭐ ${(game.rating / 10).toFixed(1)}`
                : "Not yet rated";


        card.innerHTML = `

            <img
                src="${game.cover}"
                alt="${game.name}"
                loading="lazy"
            >

            <div class="platformCardInfo">

                <h3>
                    ${game.name}
                </h3>

                <div class="platformGameMeta">

                    ${
                        year
                            ? `
                                <span>
                                    ${year}
                                </span>
                            `
                            : ""
                    }

                    <span>
                        ${rating}
                    </span>

                </div>

            </div>

        `;


        const image =
            card.querySelector(
                "img"
            );


        if (image) {

            image.addEventListener(
                "error",
                () => {

                    image.style.display =
                        "none";

                }
            );

        }


        /* ========================= */
        /* CLICK GAME */
        /* ========================= */

        card.addEventListener(
            "click",
            () => {

                window.location.href =
                    `game.html?id=${game.id}`;

            }
        );


        container.appendChild(
            card
        );

    });

}


/* ========================= */
/* CAROUSEL ARROWS */
/* ========================= */

function setupCarousels() {

    const sections =
        document.querySelectorAll(
            ".platformGameSection"
        );


    sections.forEach(section => {

        const carousel =
            section.querySelector(
                ".platformCarousel"
            );

        const leftButton =
            section.querySelector(
                ".platformLeft"
            );

        const rightButton =
            section.querySelector(
                ".platformRight"
            );


        if (
            !carousel ||
            !leftButton ||
            !rightButton
        ) {

            return;

        }


        /* ========================= */
        /* LEFT */
        /* ========================= */

        leftButton.addEventListener(
            "click",
            () => {

                carousel.scrollBy({

                    left: -900,

                    behavior: "smooth"

                });

            }
        );


        /* ========================= */
        /* RIGHT */
        /* ========================= */

        rightButton.addEventListener(
            "click",
            () => {

                carousel.scrollBy({

                    left: 900,

                    behavior: "smooth"

                });

            }
        );

    });

}


/* ========================= */
/* START */
/* ========================= */

if (platform) {

    loadPlatform();

    setupCarousels();

}