/* ========================= */
/* GET PLATFORM FROM URL */
/* ========================= */

const params =
    new URLSearchParams(
        window.location.search
    );

const platform =
    params.get("platform");


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

        const response =
            await fetch(
                `https://gyg-backend-hjbx.onrender.com/api/platform/${encodeURIComponent(platform)}`
            );


        if (!response.ok) {

            throw new Error(
                "Platform request failed"
            );

        }


        const data =
            await response.json();


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

            setPlatformFact(
                platformFactManufacturer,
                data.manufacturer || "Unknown",
                "company.html",
                "company"
            );

        }


        if (platformFactRelease) {

            platformFactRelease.textContent =
                data.releaseDate ||
                "Unknown";

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
                platform ||
                "Unknown Platform";

        }


        if (platformSummary) {

            platformSummary.textContent =
                "Unable to load platform information.";

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