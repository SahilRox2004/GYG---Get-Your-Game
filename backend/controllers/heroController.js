const {
    queryIGDB,
    getCoverUrl,
    formatDate
} = require("../services/igdbService");


exports.getHeroGames = async (req, res) => {

    try {

        const now =
            Math.floor(
                Date.now() / 1000
            );


        const query = `

fields
id,
name,
cover.image_id,
artworks.image_id,
first_release_date,
rating,
hypes,
summary;

where
cover != null &
artworks != null &
first_release_date > ${now} &
hypes > 10;

sort hypes desc;

limit 5;

`;


        const games =
            await queryIGDB(query);


        const results =
            games.map(game => ({

                id:
                    game.id,

                title:
                    game.name,

                releaseDate:
                    game.first_release_date
                        ? formatDate(
                            game.first_release_date
                        )
                        : null,

                rating:
                    game.rating
                        ? Math.round(
                            game.rating * 10
                        ) / 10
                        : null,

                hypes:
                    game.hypes || 0,

                summary:
                    game.summary ||
                    "An upcoming game worth keeping an eye on.",

                cover:
                    getCoverUrl(
                        game.cover.image_id
                    ),

                background:
                    game.artworks &&
                    game.artworks.length

                        ? getCoverUrl(
                            game.artworks[0].image_id,
                            "screenshot_huge"
                        )

                        : getCoverUrl(
                            game.cover.image_id
                        )

            }));


        res.json(results);

    }

    catch (err) {

        console.error(
            "Hero Error:",
            err.response?.data ||
            err.message
        );


        res.status(500).json(
            err.response?.data ||
            err.message
        );

    }

};