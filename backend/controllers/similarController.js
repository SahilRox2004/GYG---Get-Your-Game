const {
    queryIGDB,
    getCoverUrl
} = require("../services/igdbService");

exports.getSimilarGames = async (req, res) => {

    try {

        const id = req.params.id;

        const query = `

fields
similar_games.name,
similar_games.cover.image_id,
similar_games.rating;

where id = ${id};

`;

        const game = await queryIGDB(query);

        if (!game.length) {

            return res.json([]);

        }

        const similar = game[0].similar_games || [];

        const results = similar.map(g => ({

            id: g.id,

            name: g.name,

            rating: g.rating
                ? Math.round(g.rating * 10) / 10
                : null,

            cover:
                g.cover
                ? getCoverUrl(g.cover.image_id)
                : null

        }));

        res.json(results);

    }

    catch(err){

        res.status(500).json(err.response?.data || err.message);

    }

};