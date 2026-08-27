const {
    queryIGDB,
    getCoverUrl,
    formatDate
} = require(
    "../services/igdbService"
);


const {
    generateDLCInfo
} = require(
    "../services/groqService"
);


/* ========================= */
/* GET DLC & EXPANSIONS */
/* ========================= */

exports.getDLC = async (req, res) => {

    try {

        const gameId =
            Number(req.params.gameId);


        /* ========================= */
        /* VALIDATE ID */
        /* ========================= */

        if (!Number.isInteger(gameId)) {

            return res.status(400).json({

                error:
                    "Invalid game ID"

            });

        }


        /* ========================= */
        /* GET MAIN GAME + DLC DATA */
        /* ========================= */

        const games =
            await queryIGDB(`

                fields

                id,
                name,
                summary,
                first_release_date,

                platforms.id,
                platforms.name,

                expansions.id,
                expansions.name,
                expansions.cover.image_id,
                expansions.summary,
                expansions.first_release_date,

                dlcs.id,
                dlcs.name,
                dlcs.cover.image_id,
                dlcs.summary,
                dlcs.first_release_date;

                where id = ${gameId};

                limit 1;

            `);


        if (
            !games ||
            games.length === 0
        ) {

            return res.status(404).json({

                error:
                    "Game not found"

            });

        }


        const game =
            games[0];


        /* ========================= */
        /* GET EXPANSIONS */
        /* ========================= */

        const expansions =
            Array.isArray(
                game.expansions
            )
                ? game.expansions
                : [];


        /* ========================= */
        /* GET DLC */
        /* ========================= */

        const dlcs =
            Array.isArray(
                game.dlcs
            )
                ? game.dlcs
                : [];


        /* ========================= */
        /* FORMAT EXPANSIONS */
        /* ========================= */

        const formattedExpansions =
            expansions
                .filter(
                    item =>
                        item &&
                        item.id
                )
                .map(
                    item => ({

                        id:
                            item.id,

                        name:
                            item.name ||
                            "Unknown Expansion",

                        cover:
                            item.cover &&
                            item.cover.image_id
                                ? getCoverUrl(
                                    item.cover.image_id
                                )
                                : null,

                        summary:
                            item.summary ||
                            "",

                        release_date:
                            item.first_release_date
                                ? formatDate(
                                    item.first_release_date
                                )
                                : null,

                        type:
                            "Expansion"

                    })
                );


        /* ========================= */
        /* FORMAT DLC */
        /* ========================= */

        const formattedDLC =
            dlcs
                .filter(
                    item =>
                        item &&
                        item.id
                )
                .map(
                    item => ({

                        id:
                            item.id,

                        name:
                            item.name ||
                            "Unknown DLC",

                        cover:
                            item.cover &&
                            item.cover.image_id
                                ? getCoverUrl(
                                    item.cover.image_id
                                )
                                : null,

                        summary:
                            item.summary ||
                            "",

                        release_date:
                            item.first_release_date
                                ? formatDate(
                                    item.first_release_date
                                )
                                : null,

                        type:
                            "DLC"

                    })
                );


        /* ========================= */
        /* COMBINE IGDB RESULTS */
        /* ========================= */

        const result =
            [
                ...formattedExpansions,
                ...formattedDLC
            ];


        /* ========================= */
        /* IF IGDB FOUND CONTENT */
        /* ========================= */

        if (
            result.length > 0
        ) {

            return res.json(
                result
            );

        }


        /* ========================= */
        /* FORMAT PLATFORMS */
        /* ========================= */

        const platforms =
            Array.isArray(
                game.platforms
            )
                ? game.platforms.map(
                    platform =>
                        platform.name
                )
                : [];


        /* ========================= */
        /* FORMAT RELEASE DATE */
        /* ========================= */

        const releaseDate =
            game.first_release_date
                ? formatDate(
                    game.first_release_date
                )
                : "Unknown";


        /* ========================= */
        /* GROQ FALLBACK */
        /* ========================= */

        console.log(
            `No DLC found in IGDB for "${game.name}". Using Groq fallback...`
        );


        const groqDLC =
            await generateDLCInfo({

                name:
                    game.name,

                release_date:
                    releaseDate,

                platforms:
                    platforms

            });


        /* ========================= */
/* FORMAT GROQ RESULTS */
/* + FIND DLC COVERS IN IGDB */
/* ========================= */

const formattedGroqDLC =
    await Promise.all(

        groqDLC
            .filter(
                item =>
                    item &&
                    item.name
            )
            .map(
                async (item, index) => {

                    let cover =
                        null;

                    let igdbId =
                        `groq-${gameId}-${index}`;


                    /* ========================= */
                    /* SEARCH DLC NAME IN IGDB */
                    /* ========================= */

                    try {

                        const safeName =
                            item.name.replace(
                                /"/g,
                                '\\"'
                            );


                        const searchResult =
                            await queryIGDB(`

                                search "${safeName}";

                                fields
                                id,
                                name,
                                cover.image_id;

                                limit 10;

                            `);


                        /*
                        Try to find the closest
                        exact name match first
                        */

                        const matchedGame =
                            searchResult.find(
                                result =>
                                    result.name &&
                                    result.name
                                        .toLowerCase()
                                        ===
                                    item.name
                                        .toLowerCase()
                            )
                            ||
                            searchResult[0];


                        if (
                            matchedGame
                        ) {

                            /*
                            Use the real IGDB ID
                            if we found a match
                            */

                            igdbId =
                                matchedGame.id;


                            if (
                                matchedGame.cover &&
                                matchedGame.cover.image_id
                            ) {

                                cover =
                                    getCoverUrl(
                                        matchedGame
                                            .cover
                                            .image_id
                                    );

                            }

                        }

                    }


                    catch (error) {

                        console.log(
                            `Could not find IGDB cover for "${item.name}"`
                        );

                    }


                    /* ========================= */
                    /* RETURN DLC */
                    /* ========================= */

                    return {

                        id:
                            igdbId,

                        name:
                            item.name,

                        cover:
                            cover,

                        summary:
                            item.summary ||
                            "",

                        release_date:
                            item.release_date ||
                            null,

                        type:
                            item.type === "Expansion"
                                ? "Expansion"
                                : "DLC"

                    };

                }
            )

    );

        return res.json(
            formattedGroqDLC
        );

    }


    catch (error) {

        console.error(
            "DLC Controller Error:",
            error.response?.data ||
            error.message
        );


        res.status(500).json({

            error:
                "Unable to fetch DLC"

        });

    }

};