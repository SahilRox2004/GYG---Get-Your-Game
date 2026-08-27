const {
    generateGameGuide
} = require(
    "../services/groqService"
);


const {
    queryIGDB,
    formatDate
} = require(
    "../services/igdbService"
);


exports.getGameGuide = async (req, res) => {

    try {

        const id =
            Number(req.params.id);


        /* ========================= */
        /* VALIDATE GAME ID */
        /* ========================= */

        if (!Number.isInteger(id)) {

            return res.status(400).json({

                error:
                    "Invalid game ID"

            });

        }


        /* ========================= */
        /* GET GAME DATA FROM IGDB */
        /* ========================= */

        const games =
            await queryIGDB(`

                fields

                id,
                name,
                summary,

                first_release_date,

                platforms.id,
                platforms.name;

                where id = ${id};

                limit 1;

            `);


        /* ========================= */
        /* GAME NOT FOUND */
        /* ========================= */

        if (
            !games ||
            !games.length
        ) {

            return res.status(404).json({

                error:
                    "Game not found"

            });

        }


        const game =
            games[0];


        /* ========================= */
        /* FORMAT PLATFORMS */
        /* ========================= */

        const platforms =
            Array.isArray(
                game.platforms
            )
                ? game.platforms.map(
                    platform => platform.name
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
        /* SEND REAL DATA TO GROQ */
        /* ========================= */

        const guide =
            await generateGameGuide({

                id:
                    game.id,

                name:
                    game.name,

                summary:
                    game.summary ||
                    "No summary available.",

                release_date:
                    releaseDate,

                platforms:
                    platforms

            });


        res.json(guide);

    }

    catch (error) {

        console.error(
            "Game Guide Controller Error:",
            error.response?.data ||
            error.message
        );


        res.status(500).json({

            error:
                "Unable to generate game guide"

        });

    }

};