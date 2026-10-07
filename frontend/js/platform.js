/* ========================= */
/* GET PLATFORM FROM URL */
/* ========================= */

const params =
    new URLSearchParams(
        window.location.search
    );

const platform =
    params.get("platform");

const computerPlatformAliases = {
    "pc": "pc",
    "windows": "pc",
    "microsoft windows": "pc",
    "windows pc": "pc",
    "pc (microsoft windows)": "pc",
    "pc/windows": "pc",
    "pc / windows": "pc",
    "linux": "linux"
};

const computerPlatformContent = {
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
    }
};

function getComputerPlatformContent(name) {
    const platformKey = computerPlatformAliases[
        (name || "").trim().toLowerCase()
    ];
    const content = computerPlatformContent[platformKey];

    return content
        ? { ...content, isComputerPlatform: true }
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
            getComputerPlatformContent(platform);

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
                getComputerPlatformContent(platform)?.name ||
                platform ||
                "Unknown Platform";

        }

        if (platformAboutName) {
            platformAboutName.textContent =
                getComputerPlatformContent(platform)?.name ||
                platform ||
                "THIS PLATFORM";
        }


        if (platformSummary) {

            platformSummary.textContent = getComputerPlatformContent(platform)
                ? getComputerPlatformContent(platform).summary
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