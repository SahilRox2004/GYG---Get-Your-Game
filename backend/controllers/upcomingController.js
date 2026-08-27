const {
    queryIGDB,
    getCoverUrl
} = require("../services/igdbService");

exports.getUpcomingGames = async (req, res) => {

    try {

        const now = Math.floor(Date.now() / 1000);

        const query = `

fields
name,
cover.image_id,
artworks.image_id,
screenshots.image_id,
rating,
hypes,
first_release_date,
total_rating_count;

where
cover != null &
first_release_date > ${now} &
hypes > 10;

sort hypes desc;

limit 30;

`;

        const games = await queryIGDB(query);

        const results = games.map(game => ({

            id: game.id,

            name: game.name,

            release_date: game.first_release_date,

            rating: game.rating
                ? Math.round(game.rating * 10) / 10
                : null,

            background:

game.artworks && game.artworks.length

? getCoverUrl(

game.artworks[0].image_id,

"screenshot_huge"

)

:

game.screenshots && game.screenshots.length

? getCoverUrl(

game.screenshots[0].image_id,

"screenshot_huge"

)

:

getCoverUrl(

game.cover.image_id

)

        }));

        res.json(results);

    }

    catch(err){

        res.status(500).json(err.response?.data || err.message);

    }

};