console.log("GYG Loaded");


/* ========================= */
/* SEARCH ELEMENTS */
/* ========================= */

const searchContainer =
    document.querySelector(".search-container");


const searchWrapper =
    document.querySelector(".search-wrapper");


const searchBox =
    document.getElementById("searchBox");


const searchButton =
    document.getElementById("searchButton");


const searchInputRow =
    document.querySelector(".searchInputRow");


const searchSuggestions =
    document.getElementById("searchSuggestions");


let searchTimeout;


/* ========================= */
/* PLATFORM DATA */
/* ========================= */

const platforms = [

    {
        name: "PC",
        slug: "pc"
    },

    {
        name: "PlayStation",
        slug: "playstation"
    },

    {
        name: "PlayStation 2",
        slug: "playstation 2"
    },

    {
        name: "PlayStation 3",
        slug: "playstation 3"
    },

    {
        name: "PlayStation 4",
        slug: "playstation 4"
    },

    {
        name: "PlayStation 5",
        slug: "playstation 5"
    },

    {
        name: "PlayStation Portable",
        slug: "playstation portable"
    },

    {
        name: "PlayStation Vita",
        slug: "playstation vita"
    },

    {
        name: "Xbox",
        slug: "xbox"
    },

    {
        name: "Xbox 360",
        slug: "xbox 360"
    },

    {
        name: "Xbox One",
        slug: "xbox one"
    },

    {
        name: "Xbox Series X|S",
        slug: "xbox series x|s"
    },

    {
        name: "Nintendo Switch",
        slug: "nintendo switch"
    },

    {
        name: "Nintendo Switch 2",
        slug: "nintendo switch 2"
    },

    {
        name: "Nintendo Entertainment System",
        slug: "nintendo entertainment system"
    },

    {
        name: "Super Nintendo Entertainment System",
        slug: "super nintendo entertainment system"
    },

    {
        name: "Nintendo 64",
        slug: "nintendo 64"
    },

    {
        name: "Nintendo GameCube",
        slug: "nintendo gamecube"
    },

    {
        name: "Wii",
        slug: "wii"
    },

    {
        name: "Wii U",
        slug: "wii u"
    },

    {
        name: "Game Boy",
        slug: "game boy"
    },

    {
        name: "Game Boy Color",
        slug: "game boy color"
    },

    {
        name: "Game Boy Advance",
        slug: "game boy advance"
    },

    {
        name: "Nintendo DS",
        slug: "nintendo ds"
    },

    {
        name: "Nintendo DSi",
        slug: "nintendo dsi"
    },

    {
        name: "Nintendo 3DS",
        slug: "nintendo 3ds"
    },

    {
        name: "New Nintendo 3DS",
        slug: "new nintendo 3ds"
    },

    {
        name: "Sega Genesis",
        slug: "sega genesis"
    },

    {
        name: "Sega Mega Drive",
        slug: "sega mega drive"
    },

    {
        name: "Sega Saturn",
        slug: "sega saturn"
    },

    {
        name: "Dreamcast",
        slug: "dreamcast"
    }

];


/* ========================= */
/* OPEN SEARCH */
/* ========================= */

function openSearch() {

    searchWrapper.classList.add(
        "searchOpen"
    );


    setTimeout(() => {

        searchBox.focus();

    }, 150);

}
/* ========================= */
/* CLOSE SEARCH */
/* ========================= */

function closeSearch() {

    searchWrapper.classList.remove(
        "searchOpen"
    );


    searchSuggestions.innerHTML =
        "";


    searchSuggestions.style.display =
        "none";

}


/* ========================= */
/* CLICK ANYWHERE ON SEARCH BOX */
/* ========================= */

searchInputRow.addEventListener(
    "click",
    event => {

        /*
        If the search button itself was clicked,
        let its own click handler decide whether
        to open the search or perform a search.
        */

        if (
            event.target.closest("#searchButton")
        ) {

            return;

        }


        openSearch();

    }
);


/* ========================= */
/* SEARCH BUTTON CLICK */
/* ========================= */

searchButton.addEventListener(
    "click",
    () => {

        const isOpen =
            searchWrapper.classList.contains(
                "searchOpen"
            );


        /*
        If search is closed,
        first click opens it.
        */

        if (!isOpen) {

            openSearch();

            return;

        }


        /*
        If search is already open,
        perform search.
        */

        const query =
            searchBox.value.trim();


        if (!query) {

            searchBox.focus();

            return;

        }


        window.location.href =
            `search.html?q=${encodeURIComponent(
                query
            )}`;

    }
);


/* ========================= */
/* INPUT AUTO OPENS SEARCH */
/* ========================= */

searchBox.addEventListener(
    "focus",
    () => {

        openSearch();

    }
);


/* ========================= */
/* SEARCH SUGGESTIONS */
/* ========================= */

searchBox.addEventListener(
    "input",
    () => {

        const query =
            searchBox.value.trim();


        clearTimeout(
            searchTimeout
        );


        /*
        Hide suggestions if empty.
        */

        if (!query) {

            searchSuggestions.innerHTML =
                "";


            searchSuggestions.style.display =
                "none";

            return;

        }


        /*
        Delay API request.
        */

        searchTimeout =
            setTimeout(
                async () => {

                    try {

                        const response =
                            await fetch(

                                `https://gyg-backend-hjbx.onrender.com/api/search/${encodeURIComponent(
                                    query
                                )}`

                            );


                        const games =
                            await response.json();


                        const lowerQuery =
                            query.toLowerCase();


                        /*
                        Platform matching.
                        */

                        const matchingPlatforms =
                            platforms.filter(
                                platform =>

                                    platform.name
                                        .toLowerCase()
                                        .includes(
                                            lowerQuery
                                        )
                            );


                        /*
                        Clear old suggestions.
                        */

                        searchSuggestions.innerHTML =
                            "";


                        /*
                        No results.
                        */

                        if (

                            !games.length &&

                            !matchingPlatforms.length

                        ) {

                            searchSuggestions.style.display =
                                "none";

                            return;

                        }


                        /*
                        Remove duplicate/unwanted games.
                        */

                        const uniqueGames = [];

                        const seenGames =
                            new Set();


                        games.forEach(
                            game => {

                                if (
                                    !game.name
                                ) {

                                    return;

                                }


                                const name =
                                    game.name.trim();


                                const lowerName =
                                    name.toLowerCase();


                                const year =
                                    game.release_date

                                        ?

                                        new Date(
                                            game.release_date
                                        ).getFullYear()

                                        :

                                        "";


                                const gameKey =
                                    `${lowerName}-${year}`;


                                const unwantedTerms = [

                                    "game pack",

                                    "bundle",

                                    "collection",

                                    "pack",

                                    "edition",

                                    "demo",

                                    "dlc",

                                    "soundtrack",

                                    "expansion"

                                ];


                                const isUnwanted =
                                    unwantedTerms.some(
                                        term =>

                                            lowerName.includes(
                                                term
                                            )
                                    );


                                if (

                                    !seenGames.has(
                                        gameKey
                                    )

                                    &&

                                    !isUnwanted

                                ) {

                                    seenGames.add(
                                        gameKey
                                    );


                                    uniqueGames.push(
                                        game
                                    );

                                }

                            }
                        );


                        /* ========================= */
                        /* PLATFORM SUGGESTIONS */
                        /* ========================= */

                        matchingPlatforms
                            .slice(0, 3)
                            .forEach(
                                platform => {

                                    const suggestion =
                                        document.createElement(
                                            "div"
                                        );


                                    suggestion.className =
                                        "searchSuggestion platformSuggestion";


                                    suggestion.innerHTML = `

                                        <div class="platformSuggestionIcon">

                                            🎮

                                        </div>


                                        <div class="suggestionInfo">

                                            <div class="suggestionTitle">

                                                ${platform.name}

                                            </div>


                                            <div class="suggestionYear">

                                                GAMING PLATFORM

                                            </div>

                                        </div>

                                    `;


                                    suggestion.addEventListener(
                                        "click",
                                        () => {

                                            window.location.href =
                                                `platform.html?platform=${encodeURIComponent(
                                                    platform.slug
                                                )}`;

                                        }
                                    );


                                    searchSuggestions.appendChild(
                                        suggestion
                                    );

                                }
                            );


                        /* ========================= */
                        /* GAME SUGGESTIONS */
                        /* ========================= */

                        uniqueGames
                            .slice(0, 6)
                            .forEach(
                                game => {

                                    const suggestion =
                                        document.createElement(
                                            "div"
                                        );


                                    suggestion.className =
                                        "searchSuggestion";


                                    let year = "";


                                    if (
                                        game.release_date
                                    ) {

                                        year =
                                            new Date(
                                                game.release_date
                                            ).getFullYear();

                                    }


                                    const cover =
                                        game.cover ||

                                        "assets/placeholder.jpg";


                                    suggestion.innerHTML = `

                                        <img

                                            src="${cover}"

                                            alt="${game.name}"

                                            onerror="
                                                this.src='assets/placeholder.jpg'
                                            "

                                        >


                                        <div class="suggestionInfo">

                                            <div class="suggestionTitle">

                                                ${game.name}

                                            </div>


                                            <div class="suggestionYear">

                                                ${year || "Release date unknown"}

                                            </div>

                                        </div>

                                    `;


                                    suggestion.addEventListener(
                                        "click",
                                        () => {

                                            window.location.href =
                                                `game.html?id=${game.id}`;

                                        }
                                    );


                                    searchSuggestions.appendChild(
                                        suggestion
                                    );

                                }
                            );


                        /*
                        Show results.
                        */

                        searchSuggestions.style.display =
                            "block";

                    }


                    catch (error) {

                        console.error(

                            "Search suggestions error:",

                            error

                        );


                        searchSuggestions.innerHTML =
                            "";


                        searchSuggestions.style.display =
                            "none";

                    }

                },

                300
            );

    }
);


/* ========================= */
/* ENTER KEY SEARCH */
/* ========================= */

searchBox.addEventListener(
    "keydown",
    event => {

        if (
            event.key === "Enter"
        ) {

            const query =
                searchBox.value.trim();


            if (!query) {

                return;

            }


            window.location.href =
                `search.html?q=${encodeURIComponent(
                    query
                )}`;

        }


        /*
        ESC closes search.
        */

        if (
            event.key === "Escape"
        ) {

            searchBox.value = "";

            closeSearch();

        }

    }
);


/* ========================= */
/* CLICK OUTSIDE SEARCH */
/* ========================= */

document.addEventListener(
    "click",
    event => {

        if (

            !searchContainer.contains(
                event.target
            )

        ) {

            closeSearch();

        }

    }
);

