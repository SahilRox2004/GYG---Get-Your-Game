const {

    queryIGDB,
    getCoverUrl

} = require("../services/igdbService");

exports.getTrending = async (req, res) => {

    try {

        const query = `

fields
name,
cover.image_id,
rating,
total_rating_count;

where
cover != null &
total_rating_count > 1000;

sort total_rating_count desc;

limit 20;

`;

        const games = await queryIGDB(query);

        const results = games.map(game => ({

            id: game.id,

            name: game.name,

            rating: game.rating
                ? Math.round(game.rating * 10) / 10
                : null,

            cover: getCoverUrl(game.cover.image_id)

        }));

        res.json(results);

    }

    catch(err){

        res.status(500).json(err.response?.data || err.message);

    }

};