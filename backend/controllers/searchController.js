const {

    queryIGDB,
    getCoverUrl,
    getBackgroundUrl

} = require("../services/igdbService");


exports.searchGames = async (req, res) => {

    try {

        const searchTerm =
            req.params.query;


        const query = `

fields
name,
cover.image_id,
screenshots.image_id,
artworks.image_id,
platforms.name,
rating,
version_parent,
first_release_date;

search "${searchTerm}";

where
cover != null &
version_parent = null;

limit 20;

`;


        const games =
            await queryIGDB(query);


        const results =
            games.map(game => ({

                id:
                    game.id,


                name:
                    game.name,


                release_date:
                    game.first_release_date
                        ? game.first_release_date * 1000
                        : null,


                rating:
                    game.rating
                        ? Math.round(
                            game.rating * 10
                        ) / 10
                        : null,


                cover:
                    game.cover
                        ? getCoverUrl(
                            game.cover.image_id
                        )
                        : null,


                /* ========================= */
                /* GAME PLATFORMS */
                /* ========================= */

                platforms:

                    game.platforms
                        ? game.platforms.map(
                            platform =>
                                platform.name
                        )
                        : [],


                /*
                WIDE BACKGROUND IMAGE
                */

                background:

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

                        : null

            }));


        res.json(
            results
        );

    }


    catch (err) {

        console.error(
            "Search Games Error:",
            err.response?.data ||
            err.message
        );


        res.status(500).json(

            err.response?.data ||
            err.message

        );

    }

};