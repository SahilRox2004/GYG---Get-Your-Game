/* ========================= */
/* FEATURED COLLECTION */
/* ========================= */

const featuredBackground =
    document.getElementById(
        "featuredBackground"
    );

const featuredTitle =
    document.getElementById(
        "featuredTitle"
    );

const featuredSubtitle =
    document.getElementById(
        "featuredSubtitle"
    );

const featuredDescription =
    document.getElementById(
        "featuredDescription"
    );

const featuredCollectionButton =
    document.getElementById(
        "featuredCollectionButton"
    );

const featuredLeftArrow =
    document.getElementById(
        "featuredLeftArrow"
    );

const featuredRightArrow =
    document.getElementById(
        "featuredRightArrow"
    );


/* ========================= */
/* FEATURED COLLECTION DATA */
/* ========================= */

const featuredCollections = [

    {
        type: "open-world",

        title:
            "OPEN WORLD LEGENDS",

        subtitle:
            "Massive worlds. Unforgettable adventures.",

        description:
            "From sprawling cities to unforgiving frontiers, these open worlds invite players into vast places built to be explored, lived in and remembered.",

        backgroundSearch:
            "Red Dead Redemption 2"
    },

    {
        type: "horror",

        title:
            "HORROR ESSENTIALS",

        subtitle:
            "Nightmares worth experiencing.",

        description:
            "From psychological nightmares to brutal survival experiences, horror games create worlds where every sound matters and every shadow could hide something waiting for you.",

        backgroundSearch:
            "Silent Hill 2"
    },

    {
        type: "action",

        title:
            "ACTION ICONS",

        subtitle:
            "Combat, spectacle and unforgettable moments.",

        description:
            "Fast-paced combat, unforgettable bosses and moments of pure spectacle define these action classics.",

        backgroundSearch:
            "God of War"
    },

    {
        type: "superhero",

        title:
            "SUPERHERO GAMES",

        subtitle:
            "The best games behind the mask.",

        description:
            "From swinging through New York to protecting Gotham, superhero games let players step into iconic worlds and experience what it feels like to wear the mask, cape or armor.",

        backgroundSearch:
            "Marvel's Spider-Man"
    },

    {
        type: "scifi",

        title:
            "SCI-FI ADVENTURES",

        subtitle:
            "Beyond Earth. Beyond imagination.",

        description:
            "Travel beyond Earth and into futuristic cities, distant galaxies and worlds shaped by technology.",

        backgroundSearch:
            "Cyberpunk 2077"
    },

    {
        type: "episodic",

        title:
            "EPISODIC ADVENTURES",

        subtitle:
            "One chapter ends. Another begins.",

        description:
            "Stories designed to unfold over chapters, episodes and unforgettable cliffhangers.",

        backgroundSearch:
            "The Walking Dead"
    },

    {
        type: "story-driven",

        title:
            "STORIES THAT STAY WITH YOU",

        subtitle:
            "Some games are never forgotten.",

        description:
            "Powerful characters, unforgettable worlds and stories that stay with you long after the credits roll.",

        backgroundSearch:
            "The Last of Us"
    },

    {
        type: "soulslike",

        title:
            "SOULSLIKE LEGENDS",

        subtitle:
            "Prepare to die. Then try again.",

        description:
            "Demanding combat, mysterious worlds and unforgettable boss battles define these punishing but rewarding adventures.",

        backgroundSearch:
            "Elden Ring"
    },

    {
        type: "rpg",

        title:
            "RPG MASTERPIECES",

        subtitle:
            "Choose your path. Create your legend.",

        description:
            "Massive worlds, meaningful choices and characters worth remembering make these role-playing games unforgettable.",

        backgroundSearch:
            "Baldur's Gate 3"
    },

    {
        type: "survival",

        title:
            "SURVIVAL INSTINCT",

        subtitle:
            "Adapt. Endure. Survive.",

        description:
            "Resources are limited, danger is everywhere and every decision could determine whether you survive another day.",

        backgroundSearch:
            "The Last of Us"
    },

    {
        type: "stealth",

        title:
            "MASTERS OF STEALTH",

        subtitle:
            "Stay hidden. Strike when ready.",

        description:
            "Patience, planning and precision define these games where staying unseen can be just as important as fighting.",

        backgroundSearch:
            "Metal Gear Solid V: The Phantom Pain"
    },

    {
        type: "racing",

        title:
            "RACING LEGENDS",

        subtitle:
            "Speed without limits.",

        description:
            "From realistic simulations to arcade chaos, these games deliver some of the greatest experiences on four wheels.",

        backgroundSearch:
            "Forza Horizon 5"
    },

    {
        type: "indie",

        title:
            "INDIE MASTERPIECES",

        subtitle:
            "Small teams. Massive imagination.",

        description:
            "Creative ideas, unforgettable art styles and unique experiences prove that some of gaming's greatest worlds come from independent creators.",

        backgroundSearch:
            "Hollow Knight"
    },

    {
        type: "cozy",

        title:
            "COZY ESCAPES",

        subtitle:
            "Relax. Explore. Stay awhile.",

        description:
            "Peaceful worlds, charming characters and relaxing adventures for when you just want to slow down and enjoy the journey.",

        backgroundSearch:
            "Stardew Valley"
    },

    {
        type: "retro",

        title:
            "RETRO CLASSICS",

        subtitle:
            "Games that built generations.",

        description:
            "Before photorealism and massive open worlds, these classics defined what video games could be.",

        backgroundSearch:
            "Super Mario Bros."
    }

];


/* ========================= */
/* CURRENT COLLECTION */
/* ========================= */

let currentCollectionIndex = 0;


/* ========================= */
/* BACKGROUND CACHE */
/* ========================= */

const featuredBackgroundCache = {};


/* ========================= */
/* SEARCH GAME */
/* ========================= */

async function searchFeaturedGame(name) {

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


        const exactMatch =
            results.find(
                game => {

                    if (
                        !game.name ||
                        !game.cover
                    ) {

                        return false;

                    }

                    const cleanName =
                        game.name
                            .toLowerCase()
                            .replace(
                                /[^a-z0-9]/g,
                                ""
                            );

                    return (
                        cleanName ===
                        cleanSearch
                    );

                }
            );


        if (exactMatch) {

            return exactMatch;

        }


        return (
            results.find(
                game =>
                    game.cover
            )
            ||
            results[0]
        );

    }

    catch (error) {

        console.error(
            "Featured game search error:",
            name,
            error
        );

        return null;

    }

}


/* ========================= */
/* GET GAME DETAILS */
/* ========================= */

async function getFeaturedGameDetails(id) {

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
            "Featured game details error:",
            error
        );

        return null;

    }

}


/* ========================= */
/* GET BEST BACKGROUND */
/* ========================= */

function getFeaturedBackground(game) {

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
/* LOAD BACKGROUND */
/* ========================= */

async function loadCollectionBackground(index) {

    const collection =
        featuredCollections[index];


    if (
        featuredBackgroundCache[index]
    ) {

        return featuredBackgroundCache[index];

    }


    const game =
        await searchFeaturedGame(
            collection.backgroundSearch
        );


    if (!game) {

        return null;

    }


    const details =
        await getFeaturedGameDetails(
            game.id
        );


    const background =
        details
            ? getFeaturedBackground(details)
            : game.cover;


    if (!background) {

        return null;

    }


    await new Promise(
        resolve => {

            const image =
                new Image();

            image.onload =
                resolve;

            image.onerror =
                resolve;

            image.src =
                background;

        }
    );


    featuredBackgroundCache[index] =
        background;


    return background;

}


/* ========================= */
/* PRELOAD ALL BACKGROUNDS */
/* ========================= */

async function preloadFeaturedBackgrounds() {

    const promises =
        featuredCollections.map(
            (_, index) =>
                loadCollectionBackground(index)
        );


    await Promise.allSettled(
        promises
    );

}


/* ========================= */
/* UPDATE FEATURED SECTION */
/* ========================= */

async function loadFeaturedCollection(index) {

    const collection =
        featuredCollections[index];


    /* UPDATE TEXT */

    featuredTitle.textContent =
        collection.title;

    featuredSubtitle.textContent =
        collection.subtitle;

    featuredDescription.textContent =
        collection.description;


    /* UPDATE LINK */

    featuredCollectionButton.href =
        `collection.html?type=${collection.type}`;


    /* UPDATE BACKGROUND */

    let background =
        featuredBackgroundCache[index];


    if (!background) {

        background =
            await loadCollectionBackground(
                index
            );

    }


    if (background) {

        featuredBackground.style.backgroundImage =
            `url("${background}")`;

    }

}


/* ========================= */
/* CHANGE COLLECTION */
/* ========================= */

function changeCollection(direction) {

    currentCollectionIndex =
        (
            currentCollectionIndex +
            direction +
            featuredCollections.length
        )
        %
        featuredCollections.length;


    loadFeaturedCollection(
        currentCollectionIndex
    );

}


/* ========================= */
/* PREVIOUS COLLECTION */
/* ========================= */

featuredLeftArrow.addEventListener(
    "click",
    () => {

        changeCollection(-1);

    }
);


/* ========================= */
/* NEXT COLLECTION */
/* ========================= */

featuredRightArrow.addEventListener(
    "click",
    () => {

        changeCollection(1);

    }
);


/* ========================= */
/* AUTO ROTATE */
/* ========================= */

setInterval(
    () => {

        changeCollection(1);

    },

    5000
);


/* ========================= */
/* INITIAL LOAD */
/* ========================= */

async function initializeFeatured() {

    await loadFeaturedCollection(0);


    /* Start loading all remaining
       backgrounds in advance */

    preloadFeaturedBackgrounds();

}


initializeFeatured();