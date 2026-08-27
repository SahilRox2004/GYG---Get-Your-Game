const {
    queryIGDB,
    getCoverUrl,
    getBackgroundUrl,
    formatDate
} = require("../services/igdbService");


/* ============================== */
/* HOME PAGE */
/* ============================== */

exports.getHome = async (req, res) => {

    try {

        const hero = await queryIGDB(`

            fields
            id,
            name,
            cover.image_id,
            artworks.image_id,
            first_release_date,
            rating,
            summary;

            where category = 0 &
            total_rating_count > 500;

            sort total_rating desc;

            limit 1;

        `);


        const trending = await queryIGDB(`

            fields
            id,
            name,
            cover.image_id,
            rating;

            where category = 0 &
            total_rating_count > 500;

            sort follows desc;

            limit 20;

        `);


        res.json({

            hero,
            trending

        });

    }

    catch (err) {

        console.error(
            "Home Error:",
            err.response?.data || err.message
        );

        res.status(500).json({

            error:
                err.response?.data || err.message

        });

    }

};

/* ============================== */
/* SEARCH GAMES */
/* ============================== */

exports.searchGames = async (req, res) => {

    try {

        const query =
            req.params.query;


        if (!query) {

            return res.json([]);

        }


        const games =
            await queryIGDB(

                `

                search "${query.replace(
                    /"/g,
                    '\\"'
                )}";

                fields
                id,
                name,
                cover.image_id,
                first_release_date,
                rating;

                where
                category = 0;

                limit 20;

                `

            );


        const formattedGames =
            games.map(
                game => ({

                    id:
                        game.id,


                    name:
                        game.name,


                    cover:
                        game.cover?.image_id
                            ? getCoverUrl(
                                game.cover.image_id
                            )
                            : null,


                    release_date:
                        game.first_release_date
                            ? formatDate(
                                game.first_release_date
                            )
                            : null,


                    rating:
                        game.rating
                            ? Number(
                                game.rating
                            )
                            : null

                })
            );


        res.json(
            formattedGames
        );

    }

    catch (err) {

        console.error(
            "Search Error:",
            err.response?.data ||
            err.message
        );


        res.status(500).json({

            error:
                "Unable to search games"

        });

    }

};


