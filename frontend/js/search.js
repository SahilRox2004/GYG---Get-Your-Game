const searchParams =
    new URLSearchParams(
        window.location.search
    );

const searchQuery =
    searchParams.get("q");


const resultsTitle =
    document.getElementById(
        "searchResultsTitle"
    );

const resultsContainer =
    document.getElementById(
        "searchResults"
    );

const platformResultsSection =
    document.getElementById(
        "platformResultsSection"
    );

const platformResults =
    document.getElementById(
        "platformResults"
    );


/* ========================= */
/* PLATFORM LIST */
/* ========================= */

const platformList = [

    {
        name: "PC",
        aliases: [
            "pc",
            "computer"
        ],
        slug: "pc"
    },

    {
        name: "PlayStation",
        aliases: [
            "playstation",
            "ps",
            "ps1",
            "playstation 1"
        ],
        slug: "playstation"
    },

    {
        name: "PlayStation 2",
        aliases: [
            "ps2",
            "playstation 2"
        ],
        slug: "playstation 2"
    },

    {
        name: "PlayStation 3",
        aliases: [
            "ps3",
            "playstation 3"
        ],
        slug: "playstation 3"
    },

    {
        name: "PlayStation 4",
        aliases: [
            "ps4",
            "playstation 4"
        ],
        slug: "playstation 4"
    },

    {
        name: "PlayStation 5",
        aliases: [
            "ps5",
            "playstation 5"
        ],
        slug: "playstation 5"
    },

    {
        name: "PlayStation Portable",
        aliases: [
            "psp",
            "playstation portable"
        ],
        slug: "playstation portable"
    },

    {
        name: "PlayStation Vita",
        aliases: [
            "ps vita",
            "vita",
            "playstation vita"
        ],
        slug: "playstation vita"
    },

    {
        name: "Xbox",
        aliases: [
            "xbox"
        ],
        slug: "xbox"
    },

    {
        name: "Xbox 360",
        aliases: [
            "xbox 360"
        ],
        slug: "xbox 360"
    },

    {
        name: "Xbox One",
        aliases: [
            "xbox one"
        ],
        slug: "xbox one"
    },

    {
        name: "Xbox Series X|S",
        aliases: [
            "xbox series",
            "xbox series x",
            "xbox series s"
        ],
        slug: "xbox series x|s"
    },

    {
        name: "Nintendo Switch",
        aliases: [
            "switch",
            "nintendo switch"
        ],
        slug: "nintendo switch"
    },

    {
        name: "Nintendo Switch 2",
        aliases: [
            "switch 2",
            "nintendo switch 2"
        ],
        slug: "nintendo switch 2"
    },

    {
        name: "Nintendo Entertainment System",
        aliases: [
            "nes",
            "nintendo entertainment system"
        ],
        slug: "nintendo entertainment system"
    },

    {
        name: "Super Nintendo",
        aliases: [
            "snes",
            "super nintendo"
        ],
        slug: "super nintendo entertainment system"
    },

    {
        name: "Nintendo 64",
        aliases: [
            "n64",
            "nintendo 64"
        ],
        slug: "nintendo 64"
    },

    {
        name: "Nintendo GameCube",
        aliases: [
            "gamecube",
            "nintendo gamecube"
        ],
        slug: "nintendo gamecube"
    },

    {
        name: "Wii",
        aliases: [
            "wii"
        ],
        slug: "wii"
    },

    {
        name: "Wii U",
        aliases: [
            "wii u"
        ],
        slug: "wii u"
    },

    {
        name: "Game Boy",
        aliases: [
            "game boy",
            "gameboy"
        ],
        slug: "game boy"
    },

    {
        name: "Game Boy Color",
        aliases: [
            "game boy color",
            "gbc"
        ],
        slug: "game boy color"
    },

    {
        name: "Game Boy Advance",
        aliases: [
            "game boy advance",
            "gba"
        ],
        slug: "game boy advance"
    },

    {
        name: "Nintendo DS",
        aliases: [
            "ds",
            "nintendo ds"
        ],
        slug: "nintendo ds"
    },

    {
        name: "Nintendo DSi",
        aliases: [
            "dsi",
            "nintendo dsi"
        ],
        slug: "nintendo dsi"
    },

    {
        name: "Nintendo 3DS",
        aliases: [
            "3ds",
            "nintendo 3ds"
        ],
        slug: "nintendo 3ds"
    },

    {
        name: "New Nintendo 3DS",
        aliases: [
            "new 3ds",
            "new nintendo 3ds"
        ],
        slug: "new nintendo 3ds"
    },

    {
        name: "Sega Genesis",
        aliases: [
            "sega genesis",
            "genesis"
        ],
        slug: "sega genesis"
    },

    {
        name: "Sega Mega Drive",
        aliases: [
            "sega mega drive",
            "mega drive"
        ],
        slug: "sega mega drive"
    },

    {
        name: "Sega Saturn",
        aliases: [
            "sega saturn",
            "saturn"
        ],
        slug: "sega saturn"
    },

    {
        name: "Dreamcast",
        aliases: [
            "dreamcast"
        ],
        slug: "dreamcast"
    }

];


/* ========================= */
/* FIND PLATFORM RESULTS */
/* ========================= */

function findPlatforms(query) {

    const normalizedQuery =
        query
            .toLowerCase()
            .trim();

    return platformList.filter(platform =>

        platform.name
            .toLowerCase()
            .includes(
                normalizedQuery
            )

        ||

        platform.aliases.some(alias =>

            alias.includes(
                normalizedQuery
            )

            ||

            normalizedQuery.includes(
                alias
            )

        )

    );

}


/* ========================= */
/* PLATFORM SVG */
/* ========================= */

function getPlatformSVG(slug) {

    const svgMap = {

        "pc":
            "assets/platform-logos/pc.svg",

        "playstation":
            "assets/platform-logos/ps1.svg",

        "playstation 2":
            "assets/platform-logos/ps2.svg",

        "playstation 3":
            "assets/platform-logos/ps3.svg",

        "playstation 4":
            "assets/platform-logos/ps4.svg",

        "playstation 5":
            "assets/platform-logos/ps5.svg",

        "playstation portable":
            "assets/platform-logos/psp.svg",

        "playstation vita":
            "assets/platform-logos/psvita.svg",

        "xbox":
            "assets/platform-logos/microsoft-xbox-1.svg",

        "xbox 360":
            "assets/platform-logos/xbox-360-1.svg",

        "xbox one":
            "assets/platform-logos/xbox-one-3.svg",

        "xbox series x|s":
            "assets/platform-logos/xbox-series-x-s-1.svg",

        "nintendo switch":
            "assets/platform-logos/switch.svg",

        "nintendo switch 2":
            "assets/platform-logos/switch2.svg",

        "nintendo entertainment system":
            "assets/platform-logos/nes.svg",

        "super nintendo entertainment system":
            "assets/platform-logos/snes.svg",

        "nintendo 64":
            "assets/platform-logos/nintendo-64.svg",

        "nintendo gamecube":
            "assets/platform-logos/gamecube.svg",

        "wii":
            "assets/platform-logos/wii.svg",

        "wii u":
            "assets/platform-logos/wii-u.svg",

        "game boy":
            "assets/platform-logos/game-boy.svg",

        "game boy color":
            "assets/platform-logos/game-boy-color.svg",

        "game boy advance":
            "assets/platform-logos/game-boy-advance.svg",

        "nintendo ds":
            "assets/platform-logos/nintendo-ds-1.svg",

        "nintendo dsi":
            "assets/platform-logos/nintendo-ds-i.svg",

        "nintendo 3ds":
            "assets/platform-logos/nintendo-3ds.svg",

        "new nintendo 3ds":
            "assets/platform-logos/new-nintendo-3ds.svg",

        "sega genesis":
            "assets/platform-logos/Sega-genesis.svg",

        "sega mega drive":
            "assets/platform-logos/sega-mega-drive.svg",

        "sega saturn":
            "assets/platform-logos/sega-saturn.svg",

        "dreamcast":
            "assets/platform-logos/dreamcast.svg"

    };

    return (
        svgMap[slug] ||
        null
    );

}


/* ========================= */
/* MATCH GAME PLATFORM */
/* ========================= */

function findPlatformData(
    platformName
) {

    const normalizedName =
        platformName
            .toLowerCase()
            .trim();


    return platformList.find(
        platform =>

            platform.name
                .toLowerCase() ===
            normalizedName

            ||

            platform.aliases.some(
                alias =>
                    alias === normalizedName
            )

    );

}


/* ========================= */
/* DISPLAY PLATFORM RESULTS */
/* ========================= */

function displayPlatforms() {

    const matchedPlatforms =
        findPlatforms(
            searchQuery
        );


    platformResults.innerHTML = "";


    if (!matchedPlatforms.length) {

        platformResultsSection.style.display =
            "none";

        return;

    }


    platformResultsSection.style.display =
        "block";


    matchedPlatforms.forEach(
        platform => {

            const item =
                document.createElement(
                    "div"
                );


            item.className =
                "platformSearchItem";


            const svg =
                getPlatformSVG(
                    platform.slug
                );


            item.innerHTML = `

                <div class="platformSearchLogo">

                    ${
                        svg

                            ? `<img
                                src="${svg}"
                                alt="${platform.name}"
                            >`

                            : ""
                    }

                </div>

                <h3>
                    ${platform.name}
                </h3>

            `;


            item.addEventListener(
                "click",
                () => {

                    window.location.href =
                        `platform.html?platform=${encodeURIComponent(
                            platform.slug
                        )}`;

                }
            );


            platformResults.appendChild(
                item
            );

        }
    );

}


/* ========================= */
/* GET GAME PLATFORM SVGs */
/* ========================= */

function getGamePlatformSVGs(
    gamePlatforms
) {

    if (
        !gamePlatforms ||
        !gamePlatforms.length
    ) {

        return {
            html: "",
            count: 0
        };

    }


    const uniquePlatforms =
        [];


    gamePlatforms.forEach(
        platformName => {

            const platform =
                findPlatformData(
                    platformName
                );


            if (!platform) {

                return;

            }


            if (
                !uniquePlatforms.some(
                    item =>
                        item.slug ===
                        platform.slug
                )
            ) {

                uniquePlatforms.push(
                    platform
                );

            }

        }
    );


    const displayedPlatforms =
        uniquePlatforms.slice(0, 3);


    const html =
        displayedPlatforms
            .map(
                platform => {

                    const svg =
                        getPlatformSVG(
                            platform.slug
                        );


                    if (!svg) {

                        return "";

                    }


                    return `

                        <img
                            class="gamePlatformLogo"
                            src="${svg}"
                            alt="${platform.name}"
                            title="${platform.name}"
                        >

                    `;

                }
            )
            .join("");


    return {

        html: html,

        count:
            displayedPlatforms.length

    };

}


/* ========================= */
/* LOAD GAME RESULTS */
/* ========================= */

async function loadSearchResults() {

    if (!searchQuery) {

        resultsTitle.textContent =
            "Search Results";

        platformResultsSection.style.display =
            "none";

        return;

    }


    resultsTitle.textContent =
        `Games for "${searchQuery}"`;


    displayPlatforms();


    try {

        const response =
            await fetch(
                `https://gyg-backend-hjbx.onrender.com/api/search/${encodeURIComponent(
                    searchQuery
                )}`
            );


        const games =
            await response.json();


        resultsContainer.innerHTML =
            "";


        if (!games.length) {

            resultsContainer.innerHTML = `

                <p class="noResults">
                    No games found.
                </p>

            `;

            return;

        }


        games.forEach(
            game => {

                const card =
                    document.createElement(
                        "div"
                    );


                card.className =
                    "searchGameCard";


                let year =
                    "";


                if (
                    game.release_date
                ) {

                    year =
                        new Date(
                            game.release_date
                        ).getFullYear();

                }


                const platformData =
    getGamePlatformSVGs(
        game.platforms
    );


                card.innerHTML = `

                    <img
                        class="searchGameCover"
                        src="${game.cover}"
                        alt="${game.name}"
                    >

                    <h3>
                        ${game.name}
                    </h3>

                    <p class="searchGameYear">
                        ${
                            year ||
                            "Release date unknown"
                        }
                    </p>

                    <div
    class="gamePlatformLogos platformCount${platformData.count}"
>
    ${platformData.html}
</div>

                `;


                card.addEventListener(
                    "click",
                    () => {

                        window.location.href =
                            `game.html?id=${game.id}`;

                    }
                );


                resultsContainer.appendChild(
                    card
                );

            }
        );

    }

    catch (error) {

        console.error(
            "Search error:",
            error
        );


        resultsContainer.innerHTML = `

            <p class="noResults">
                Something went wrong while
                searching for games.
            </p>

        `;

    }

}


loadSearchResults();