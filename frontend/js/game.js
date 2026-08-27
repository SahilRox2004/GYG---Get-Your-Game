const params = new URLSearchParams(window.location.search);

const gameId = params.get("id");

let currentGame = null;
let currentListType = "favourites";
let currentGameSaved = false;





async function loadGame() {

    const response = await fetch(
        `https://gyg-backend-hjbx.onrender.com/api/game/${gameId}`
    );

    const game = await response.json();

    currentGame = game;

    const hero = document.getElementById("hero");

let heroImage = null;

/* First choice: artwork */

if (game.artworks && game.artworks.length > 0) {

    heroImage = game.artworks[0];

}

/* Second choice: screenshot */

else if (
    game.screenshots &&
    game.screenshots.length > 0
) {

    heroImage = game.screenshots[0];

}

/* Final choice: cover */

else if (game.cover) {

    heroImage = game.cover;

}


if (heroImage) {

    hero.style.backgroundImage =
        `url(${heroImage})`;

}

document.getElementById("gameCover").src =
    game.cover;

    document.getElementById("gameTitle").textContent =
        game.name;

    const ratingElement =
    document.getElementById("gameRating");

const releaseDate =
    new Date(game.release_date);

const today =
    new Date();

const isReleased =
    Boolean(game.release_date) &&
    releaseDate <= today;

const actionButton =
    document.getElementById(
        "favouriteButton"
    );

if (actionButton) {

    actionButton.textContent =
        isReleased
            ? "♡ ADD TO FAVOURITES"
            : "♡ ADD TO WISHLIST";

    currentListType =
        isReleased
            ? "favourites"
            : "wishlist";

    await syncSavedState(actionButton);

}

if (releaseDate > today) {

    ratingElement.textContent =
        "Not yet released";

}
else if (game.rating) {

    ratingElement.textContent =
        ` ${(game.rating / 10).toFixed(1)}/10`;

}
else {

    ratingElement.textContent =
        "Not yet rated";

}
    document.getElementById("gameRelease").textContent =
    formatFullDate(game.release_date);

    const platformContainer =
    document.getElementById("platformContainer");

platformContainer.innerHTML = "";

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
    "Game Boy Color": "game-boy-color.svg",
    "Game Boy Advance": "game-boy-advance.svg",
    "Nintendo DS": "nintendo-ds-1.svg",
    "Nintendo DSi": "nintendo-ds-i.svg",
    "Nintendo 3DS": "nintendo-3ds.svg",
    "New Nintendo 3DS": "new-nintendo-3ds.svg",

    "Sega Master System": "sega.svg",
    "Sega Genesis": "Sega-genesis.svg",
    "Sega Mega Drive": "sega-mega-drive.svg",
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

game.platforms.forEach(platform => {

    /* Get the exact platform name from IGDB */

    const platformName =
        platform.name
            ? platform.name.trim()
            : "";


    /* Find matching SVG */

    let file =
        platformLogos[platformName];


    /* ========================= */
    /* FALLBACK PLATFORM CHECKS */
    /* ========================= */

    if (!file) {

        const name =
            platformName.toLowerCase();


        /* WINDOWS / PC */

        if (
            name.includes("windows") ||
            name.includes("pc")
        ) {

            file = "windows.svg";

        }


        /* PLAYSTATION */

        else if (
            name.includes("playstation 5") ||
            name === "ps5"
        ) {

            file = "ps5.svg";

        }

        else if (
            name.includes("playstation 4") ||
            name === "ps4"
        ) {

            file = "ps4.svg";

        }

        else if (
            name.includes("playstation 3") ||
            name === "ps3"
        ) {

            file = "ps3.svg";

        }

        else if (
            name.includes("playstation 2") ||
            name === "ps2"
        ) {

            file = "ps2.svg";

        }

        else if (
            name === "playstation" ||
            name === "ps"
        ) {

            file = "ps1.svg";

        }

        else if (
            name.includes("portable") ||
            name === "psp"
        ) {

            file = "psp.svg";

        }

        else if (
            name.includes("vita")
        ) {

            file = "psvita.svg";

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


        /* NINTENDO SWITCH */

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


        /* NINTENDO */

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


        /* VALVE */

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


        /* ATARI */

        else if (
            name.includes("atari")
        ) {

            file =
                "atari.svg";

        }


        /* RETRO */

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


    /* ========================= */
    /* CREATE PLATFORM LOGO */
    /* ========================= */

    if (file) {

        const link =
            document.createElement("a");

        link.className =
            "platformLink";


        link.href =
            `platform.html?platform=${encodeURIComponent(platformName)}`;


        link.title =
            `View ${platformName}`;


        const img =
            document.createElement("img");


        img.src =
            `assets/platform-logos/${file}`;


        img.className =
            "platformLogo";


        img.alt =
            platformName;


        link.appendChild(img);


        platformContainer.appendChild(link);

    }

});

    document.getElementById("gameSummary").textContent =
        game.summary;



    
    /* ========================= */
/* CLICKABLE DEVELOPERS */
/* ========================= */

const developerContainer =
    document.getElementById(
        "developer"
    );

developerContainer.innerHTML = "";


if (
    game.developers &&
    game.developers.length
) {

    game.developers.forEach(
        (developer, index) => {

            const link =
                document.createElement(
                    "a"
                );


            link.href =
    `company.html?company=${encodeURIComponent(
        developer.name
    )}&type=developer`;

            link.textContent =
                developer.name;


            link.className =
                "companyLink";


            developerContainer.appendChild(
                link
            );


            if (
                index <
                game.developers.length - 1
            ) {

                developerContainer.append(
                    " • "
                );

            }

        }
    );

}

else {

    developerContainer.textContent =
        "Unknown";

}



/* ========================= */
/* CLICKABLE PUBLISHERS */
/* ========================= */

const publisherContainer =
    document.getElementById(
        "publisher"
    );

publisherContainer.innerHTML = "";


if (
    game.publishers &&
    game.publishers.length
) {

    game.publishers.forEach(
        (publisher, index) => {

            const link =
                document.createElement(
                    "a"
                );


            link.href =
    `company.html?company=${encodeURIComponent(
        publisher.name
    )}&type=publisher`;


            link.textContent =
                publisher.name;


            link.className =
                "companyLink";


            publisherContainer.appendChild(
                link
            );


            if (
                index <
                game.publishers.length - 1
            ) {

                publisherContainer.append(
                    " • "
                );

            }

        }
    );

}

else {

    publisherContainer.textContent =
        "Unknown";

}

const genresContainer =
    document.getElementById("genres");

genresContainer.innerHTML = "";


if (
    game.genres &&
    game.genres.length > 0
) {

    game.genres.forEach((genre, index) => {
        const genreSpan = document.createElement("span");
        genreSpan.textContent = genre.name;
        genreSpan.style.color = "#a0a0a0";
        
        genresContainer.appendChild(genreSpan);
        
        // Add dot separator if not the last genre
        if (index < game.genres.length - 1) {
            const separator = document.createElement("span");
            separator.textContent = " • ";
            separator.style.color = "#a0a0a0";
            separator.style.margin = "0 4px";
            genresContainer.appendChild(separator);
        }
    });

}

else {

    genresContainer.textContent =
        "Unknown";

}

const ageRatingContainer =
    document.getElementById("ageRating");

ageRatingContainer.innerHTML = "";

if (game.age_ratings && game.age_ratings.length > 0) {

    const pegiRating =
        game.age_ratings.find(
            rating => rating.organization === 2
        );

    if (
        pegiRating &&
        pegiRating.rating_category
    ) {

        const rating =
            pegiRating.rating_category.rating;

        const pegiRatings = {

            "3": "pegi3.svg",

            "7": "pegi7.svg",

            "12": "pegi12.svg",

            "16": "pegi16.svg",

            "18": "pegi18.svg"

        };

        const ratingFile =
            pegiRatings[rating];

        if (ratingFile) {

            const img =
                document.createElement("img");

            img.src =
                "assets/ratings/" + ratingFile;

            img.className =
                "ageRatingLogo";

            img.alt =
                `PEGI ${rating}`;

            ageRatingContainer.appendChild(img);

        }

    }

}


    /* ========================= */
/* SCREENSHOTS / VISUALS */
/* ========================= */

const screenshotsContainer =
    document.getElementById("screenshots");

screenshotsContainer.innerHTML = "";

if (
    game.screenshots &&
    game.screenshots.length > 0
) {

    game.screenshots.forEach(image => {

        const img =
            document.createElement("img");

        img.src =
            image;

        img.className =
            "screenshot";

        img.alt =
            `${game.name} screenshot`;

        img.addEventListener(
            "click",
            () => {

                document.getElementById(
                    "lightboxImage"
                ).src = image;

                document.getElementById(
                    "screenshotLightbox"
                ).style.display =
                    "flex";

            }
        );

        screenshotsContainer.appendChild(
            img
        );

    });

}

        

        

}

loadGame();

/* ========================= */
/* VISUALS CAROUSEL */
/* ========================= */

const screenshotsCarousel =
    document.getElementById(
        "screenshots"
    );


const screenshotsLeft =
    document.getElementById(
        "screenshotsLeft"
    );


const screenshotsRight =
    document.getElementById(
        "screenshotsRight"
    );


if (screenshotsLeft) {

    screenshotsLeft.addEventListener(
        "click",
        () => {

            screenshotsCarousel.scrollBy({

                left: -600,

                behavior: "smooth"

            });

        }
    );

}


if (screenshotsRight) {

    screenshotsRight.addEventListener(
        "click",
        () => {

            screenshotsCarousel.scrollBy({

                left: 600,

                behavior: "smooth"

            });

        }
    );

}

document.getElementById("closeLightbox")
    .addEventListener("click", () => {

        document.getElementById(
            "screenshotLightbox"
        ).style.display = "none";

    });



    async function loadSimilarGames() {

    const response = await fetch(
        `https://gyg-backend-hjbx.onrender.com/api/similar/${gameId}`
    );

    const games = await response.json();

    const container =
        document.getElementById("similarGames");

    container.innerHTML = "";

    games.forEach(game => {

        const card =
            document.createElement("div");

        card.className = "similarCard";

        card.innerHTML = `

            <img
                src="${game.cover}"
                alt="${game.name}"
            >

            <h3>${game.name}</h3>

            ${
                game.rating
                ? `<p>⭐ ${(game.rating / 10).toFixed(1)}</p>`
                : `<p>⭐ Not yet rated</p>`
            }

        `;

        card.addEventListener("click", () => {

            window.location.href =
                `game.html?id=${game.id}`;

        });

        container.appendChild(card);

    });

}

loadSimilarGames();

const similarGamesContainer =
    document.getElementById("similarGames");

document.getElementById("similarLeft")
    .addEventListener("click", () => {

        similarGamesContainer.scrollBy({
            left: -500,
            behavior: "smooth"
        });

    });

document.getElementById("similarRight")
    .addEventListener("click", () => {

        similarGamesContainer.scrollBy({
            left: 500,
            behavior: "smooth"
        });

    });

  /* ========================= */
/* EXPANSIONS & DLC */
/* ========================= */

async function loadDLC() {

    const section =
        document.querySelector(
            ".dlcSection"
        );


    const container =
        document.getElementById(
            "dlcGames"
        );


    try {

        const response =
            await fetch(
                `https://gyg-backend-hjbx.onrender.com/api/dlc/${gameId}`
            );


        if (!response.ok) {

            throw new Error(
                "Unable to load DLC"
            );

        }


        const dlcs =
            await response.json();


        /* ========================= */
        /* HIDE SECTION IF NO DLC */
        /* ========================= */

        if (
            !dlcs ||
            dlcs.length === 0
        ) {

            section.style.display =
                "none";

            return;

        }


        /* SHOW SECTION */

        section.style.display =
            "";


        container.innerHTML =
            "";


        dlcs.forEach(dlc => {

            const card =
                document.createElement(
                    "div"
                );


            card.className =
                "dlcCard";


            card.innerHTML = `

                <img
                    src="${dlc.cover}"
                    alt="${dlc.name}"
                >


                <div class="dlcInfo">

                    <span class="dlcBadge">

                        ${dlc.type || "DLC"}

                    </span>


                    <h3>

                        ${dlc.name}

                    </h3>


                    <p>

                        ${
                            dlc.release_date
                                ? formatFullDate(
                                    dlc.release_date
                                )
                                : "Release date unknown"
                        }

                    </p>

                </div>

            `;


            card.addEventListener(
                "click",
                () => {

                    window.location.href =
                        `game.html?id=${dlc.id}`;

                }
            );


            container.appendChild(
                card
            );

        });

    }


    catch (error) {

        console.error(
            "DLC Error:",
            error
        );


        /* Hide instead of showing error */

        section.style.display =
            "none";

    }

}


/* LOAD DLC */

loadDLC();


/* ========================= */
/* DLC CAROUSEL */
/* ========================= */

const dlcGamesContainer =
    document.getElementById("dlcGames");


document.getElementById("dlcLeft")
    .addEventListener(
        "click",
        () => {

            dlcGamesContainer.scrollBy({

                left: -500,
                behavior: "smooth"

            });

        }
    );


document.getElementById("dlcRight")
    .addEventListener(
        "click",
        () => {

            dlcGamesContainer.scrollBy({

                left: 500,
                behavior: "smooth"

            });

        }
    );  

 /* ========================= */
/* GYG GAME GUIDE */
/* ========================= */

async function loadGameGuide() {

    const container =
        document.getElementById(
            "gameGuide"
        );


    const gameSummary =
        document.getElementById(
            "gameSummary"
        );


    try {

        const response =
            await fetch(
                `https://gyg-backend-hjbx.onrender.com/api/guide/${gameId}`
            );


        if (!response.ok) {

            throw new Error(
                "Unable to load game guide"
            );

        }


        const guide =
            await response.json();


        /* ========================= */
        /* AI OVERVIEW → THE GAME */
        /* ========================= */

        if (guide.overview) {

            gameSummary.textContent =
                guide.overview;

        }


        /* ========================= */
        /* CLEAR GAME GUIDE */
        /* ========================= */

        container.innerHTML = "";


        /* ========================= */
        /* PLAY ADVICE */
        /* ========================= */

        if (guide.playAdvice) {

            const advice =
                document.createElement(
                    "div"
                );


            advice.className =
                "playAdvice";


            advice.innerHTML = `

                <p class="guideLabel">

                    HOW SHOULD YOU PLAY IT?

                </p>

                <p>

                    ${guide.playAdvice}

                </p>

            `;


            container.appendChild(
                advice
            );

        }


        /* ========================= */
        /* VERSION HEADING */
        /* ========================= */

        if (
            guide.bestVersions &&
            guide.bestVersions.length > 0
        ) {

            const heading =
                document.createElement(
                    "div"
                );


            heading.className =
                "guideVersionHeading";


            heading.innerHTML = `

                <p class="guideLabel">

                    CHOOSE YOUR VERSION

                </p>

                <h3>

                    WHICH VERSION IS RIGHT FOR YOU?

                </h3>

            `;


            container.appendChild(
                heading
            );


            const grid =
                document.createElement(
                    "div"
                );


            grid.className =
                "versionGrid";


            guide.bestVersions.forEach(
                version => {

                    const card =
                        document.createElement(
                            "div"
                        );


                    card.className =
                        "versionCard";


                    card.innerHTML = `

                        <div class="versionTop">

                            <h3>

                                ${version.platform}

                            </h3>


                            <p class="bestFor">

                                BEST FOR:
                                ${version.bestFor}

                            </p>

                        </div>


                        <p class="versionRecommendation">

                            ${version.recommendation}

                        </p>


                        <div class="versionLists">


                            <div class="pros">

                                <p class="listLabel">

                                    PROS

                                </p>


                                <ul>

                                    ${
                                        version.pros
                                            .map(
                                                pro =>
                                                    `<li>${pro}</li>`
                                            )
                                            .join("")
                                    }

                                </ul>

                            </div>


                            <div class="cons">

                                <p class="listLabel">

                                    CONS

                                </p>


                                <ul>

                                    ${
                                        version.cons
                                            .map(
                                                con =>
                                                    `<li>${con}</li>`
                                            )
                                            .join("")
                                    }

                                </ul>

                            </div>


                        </div>

                    `;


                    grid.appendChild(
                        card
                    );

                }
            );


            container.appendChild(
                grid
            );

        }


        /* ========================= */
        /* MODERN ALTERNATIVE */
        /* ========================= */

        if (
            guide.modernAlternative &&
            guide.modernAlternative.name
        ) {

            const alternative =
                document.createElement(
                    "div"
                );


            alternative.className =
                "modernAlternative";


            alternative.innerHTML = `

                <p class="guideLabel">

                    MODERN ALTERNATIVE

                </p>


                <h3>

                    ${guide.modernAlternative.name}

                </h3>


                <span class="alternativeType">

                    ${
                        guide.modernAlternative.type ||
                        "Modern Version"
                    }

                </span>


                <p>

                    ${guide.modernAlternative.reason}

                </p>

            `;


            container.appendChild(
                alternative
            );

        }

    }


    catch (error) {

        console.error(
            "Game Guide Error:",
            error
        );


        container.innerHTML = `

            <p class="guideError">

                The GYG Game Guide is currently unavailable.

            </p>

        `;

    }

}


/* LOAD GAME GUIDE */

loadGameGuide();

async function syncSavedState(actionButton) {

    const token = localStorage.getItem("token");

    if (!token) {

        return;

    }

    try {

        const response = await fetch(
            "https://gyg-backend-hjbx.onrender.com/api/auth/profile",
            {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
        );

        if (!response.ok) {

            return;

        }

        const data = await response.json();
        const savedGames = data.user[currentListType] || [];

        currentGameSaved = savedGames.some(
            game => Number(game.gameId) === Number(currentGame.id)
        );

        if (currentGameSaved) {

            actionButton.textContent =
                currentListType === "wishlist"
                    ? "REMOVE FROM WISHLIST"
                    : "REMOVE FROM FAVOURITES";

        }

    } catch (error) {

        console.error("Saved game check error:", error);

    }

}

/* ========================= */
/* ADD TO FAVOURITES */
/* ========================= */

const favouriteButton =
    document.getElementById(
        "favouriteButton"
    );


if (
    favouriteButton &&
    localStorage.getItem("token")
) {

    favouriteButton.hidden = false;

}


if (favouriteButton) {

    favouriteButton.addEventListener(
        "click",
        async () => {

            const token =
                localStorage.getItem(
                    "token"
                );


            if (!token) {

                alert(
                    "Please sign in to add games to favourites"
                );

                return;

            }


            if (!currentGame) {

                return;

            }

            try {

                const request = currentGameSaved
                    ? {
                        method: "DELETE",
                        headers: {
                            "Authorization":
                                `Bearer ${token}`
                        }
                    }
                    : {
                        method: "POST",
                        headers: {
                            "Content-Type":
                                "application/json",
                            "Authorization":
                                `Bearer ${token}`
                        },
                        body: JSON.stringify({
                            gameId: currentGame.id,
                            name: currentGame.name,
                            image: currentGame.cover,
                            listType: currentListType
                        })
                    };

                const response =
                    await fetch(
                        currentGameSaved
                            ? `https://gyg-backend-hjbx.onrender.com/api/auth/favourites/${currentGame.id}?list=${currentListType}`
                            : "https://gyg-backend-hjbx.onrender.com/api/auth/favourites",
                        request
                    );


                const data =
                    await response.json();


                if (!response.ok) {

                    alert(
                        data.message ||
                        "Unable to add favourite"
                    );

                    return;

                }


                currentGameSaved = !currentGameSaved;

                favouriteButton.textContent = currentGameSaved
                    ? currentListType === "wishlist"
                        ? "REMOVE FROM WISHLIST"
                        : "REMOVE FROM FAVOURITES"
                    : currentListType === "wishlist"
                        ? "♡ ADD TO WISHLIST"
                        : "♡ ADD TO FAVOURITES";

            }

            catch (error) {

                console.error(
                    "Favourite Error:",
                    error
                );

                alert(
                    "Something went wrong"
                );

            }

        }
    );

}