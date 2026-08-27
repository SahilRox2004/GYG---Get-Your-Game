const {
    queryIGDB,
    getCoverUrl,
    getBackgroundUrl,
    formatDate
} = require("../services/igdbService");


/* ========================= */
/* COLLECTION CONFIGURATION */
/* ========================= */

const collections = {

    "open-world": {

        featured:
            "Red Dead Redemption 2",

        games: [

            "Red Dead Redemption 2",
            "Grand Theft Auto V",
            "The Witcher 3: Wild Hunt",
            "The Elder Scrolls V: Skyrim",
            "Ghost of Tsushima",
            "Cyberpunk 2077",
            "The Legend of Zelda: Breath of the Wild",
            "The Legend of Zelda: Tears of the Kingdom",
            "Horizon Forbidden West",
            "Assassin's Creed IV: Black Flag",
            "Far Cry 3",
            "Fallout: New Vegas",
            "Kingdom Come: Deliverance",
            "Death Stranding",
            "Days Gone"

        ]

    },


    horror: {

        featured:
            "Silent Hill 2",

        games: [

            "Silent Hill 2",
            "Resident Evil 4",
            "Resident Evil 2",
            "Dead Space",
            "Alien: Isolation",
            "Amnesia: The Dark Descent",
            "Outlast",
            "The Evil Within",
            "SOMA",
            "Alan Wake 2",
            "Little Nightmares",
            "Fatal Frame II: Crimson Butterfly",
            "Resident Evil 7: Biohazard",
            "Silent Hill 3",
            "Signalis"

        ]

    },


    action: {

        featured:
            "God of War",

        games: [

            "God of War",
            "Devil May Cry 5",
            "Sekiro: Shadows Die Twice",
            "Bayonetta",
            "Ninja Gaiden Black",
            "Metal Gear Rising: Revengeance",
            "God of War Ragnarök",
            "Hi-Fi Rush",
            "DOOM Eternal",
            "Nier: Automata",
            "Doom",
            "Armored Core VI: Fires of Rubicon",
            "Sifu",
            "Stellar Blade",
            "Black Myth: Wukong"

        ]

    },


    superhero: {

        featured:
            "Marvel's Spider-Man",

        games: [

            "Marvel's Spider-Man",
            "Marvel's Spider-Man: Miles Morales",
            "Marvel's Spider-Man 2",
            "Batman: Arkham City",
            "Batman: Arkham Knight",
            "Batman: Arkham Asylum",
            "Marvel's Guardians of the Galaxy",
            "Marvel's Avengers",
            "Injustice 2",
            "X-Men Origins: Wolverine",
            "Ultimate Spider-Man",
            "Batman: The Telltale Series",
            "LEGO Marvel Super Heroes",
            "Marvel Ultimate Alliance",
            "Deadpool"

        ]

    },


    scifi: {

        featured:
            "Cyberpunk 2077",

        games: [

            "Cyberpunk 2077",
            "Mass Effect 2",
            "Mass Effect 3",
            "Prey",
            "Deus Ex: Human Revolution",
            "Deus Ex: Mankind Divided",
            "Halo: Combat Evolved",
            "Halo 3",
            "Titanfall 2",
            "Half-Life 2",
            "Control",
            "Star Wars Jedi: Survivor",
            "Star Wars Jedi: Fallen Order",
            "Outer Wilds",
            "No Man's Sky"

        ]

    }

};


/* ========================= */
/* SEARCH SINGLE GAME */
/* ========================= */

async function findGame(name) {

    const query = `

        fields
        id,
        name,
        summary,
        cover.image_id,
        screenshots.image_id,
        artworks.image_id,
        rating,
        total_rating,
        total_rating_count,
        first_release_date,
        version_parent;

        search "${name}";

        where
        cover != null &
        version_parent = null;

        limit 10;

    `;


    const games =
        await queryIGDB(query);


    if (!games || !games.length) {

        return null;

    }


    const cleanName =
        name
            .toLowerCase()
            .replace(/[^a-z0-9]/g, "");


    let game =
        games.find(item => {

            const cleanGameName =
                item.name
                    .toLowerCase()
                    .replace(/[^a-z0-9]/g, "");

            return cleanGameName === cleanName;

        });


    if (!game) {

        game =
            games[0];

    }


    return game;

}


/* ========================= */
/* FORMAT GAME */
/* ========================= */

function formatGame(game) {

    if (!game) {

        return null;

    }


    const background =

        game.screenshots &&
        game.screenshots.length > 0

            ? getBackgroundUrl(
                game.screenshots[0].image_id
            )

            : game.artworks &&
              game.artworks.length > 0

            ? getBackgroundUrl(
                game.artworks[0].image_id
            )

            : null;


    return {

        id:
            game.id,


        name:
            game.name,


        summary:
            game.summary ||
            "No description available.",


        cover:
            game.cover
                ? getCoverUrl(
                    game.cover.image_id
                )
                : null,


        background,


        rating:
            game.rating
                ? Math.round(
                    game.rating * 10
                ) / 10
                : null,


        total_rating:
            game.total_rating
                ? Math.round(
                    game.total_rating * 10
                ) / 10
                : null,


        total_rating_count:
            game.total_rating_count || 0,


        release_date:
            game.first_release_date
                ? formatDate(
                    game.first_release_date
                )
                : null

    };

}


/* ========================= */
/* GET COLLECTION */
/* ========================= */

exports.getCollection =
async (req, res) => {

    try {

        const type =
            req.params.type;


        const collection =
            collections[type];


        if (!collection) {

            return res.status(404).json({

                error:
                    "Collection not found"

            });

        }


        /* ========================= */
        /* GET ALL COLLECTION GAMES */
        /* ========================= */

        const games =
            await Promise.all(

                collection.games.map(
                    gameName =>
                        findGame(gameName)
                )

            );


        const validGames =
            games
                .filter(Boolean)
                .map(formatGame);


        /* ========================= */
        /* FIND FEATURED GAME */
        /* ========================= */

        let featured =
            validGames.find(game => {

                return game.name
                    .toLowerCase()
                    .includes(

                        collection.featured
                            .toLowerCase()
                            .split(":")[0]

                    );

            });


        if (!featured) {

            featured =
                validGames[0];

        }


        /* ========================= */
        /* FILTER HIGH QUALITY */
        /* ========================= */

        const qualityGames =
            validGames.filter(game => {

                return (

                    game.total_rating_count >= 50 ||

                    game.rating >= 70 ||

                    game.total_rating >= 70

                );

            });


        /* ========================= */
        /* SORT BY QUALITY */
        /* ========================= */

        qualityGames.sort(
            (a, b) => {

                const ratingA =
                    a.total_rating ||
                    a.rating ||
                    0;


                const ratingB =
                    b.total_rating ||
                    b.rating ||
                    0;


                return ratingB - ratingA;

            }
        );


        /* ========================= */
        /* ESSENTIALS */
        /* ========================= */

        const essentials =
            qualityGames
                .filter(
                    game =>
                        game.id !== featured.id
                )
                .slice(0, 12);


        /* ========================= */
        /* MORE GAMES */
        /* ========================= */

        const moreGames =
            qualityGames
                .filter(game => {

                    return (

                        game.id !== featured.id &&

                        !essentials.some(
                            essential =>
                                essential.id ===
                                game.id
                        )

                    );

                })
                .slice(0, 30);


        /* ========================= */
        /* RESPONSE */
        /* ========================= */

        res.json({

            type,

            featured,

            essentials,

            moreGames

        });

    }


    catch (err) {

        console.error(
            "Collection Error:",
            err.response?.data ||
            err.message
        );


        res.status(500).json(

            err.response?.data ||
            {

                error:
                    err.message

            }

        );

    }

};