const {
    queryIGDB,
    getCoverUrl,
    formatDate
} = require("../services/igdbService");


/* ========================= */
/* GET GAME DETAILS */
/* ========================= */

exports.getGameDetails = async (req, res) => {

    try {

        const id =
            Number(req.params.id);


        /* ========================= */
        /* VALIDATE ID */
        /* ========================= */

        if (!Number.isInteger(id)) {

            return res.status(400).json({

                error: "Invalid game ID"

            });

        }


        /* ========================= */
        /* IGDB QUERY */
/* ========================= */

        const query = `

        fields

        id,
        name,
        summary,

        category,

        version_parent.id,
        version_parent.name,

        cover.image_id,

        artworks.image_id,

        screenshots.image_id,

        genres.name,

        platforms.id,
        platforms.name,

        involved_companies.company.id,
        involved_companies.company.name,
        involved_companies.developer,
        involved_companies.publisher,

        age_ratings.organization,
        age_ratings.rating_category.rating,
        age_ratings.rating_cover_url,

        first_release_date,

        rating,
        total_rating,
        total_rating_count;

        where id = ${id};

        limit 1;

        `;


        const games =
            await queryIGDB(query);


        /* ========================= */
        /* GAME NOT FOUND */
        /* ========================= */

        if (
            !games ||
            !games.length
        ) {

            return res.status(404).json({

                error: "Game not found"

            });

        }


        const game =
            games[0];


        /* ========================= */
        /* SAFE ARRAYS */
/* ========================= */

        const artworks =
            Array.isArray(game.artworks)
                ? game.artworks
                : [];


        const screenshots =
            Array.isArray(game.screenshots)
                ? game.screenshots
                : [];


        const genres =
            Array.isArray(game.genres)
                ? game.genres
                : [];


        const platforms =
            Array.isArray(game.platforms)
                ? game.platforms
                : [];


        const companies =
            Array.isArray(
                game.involved_companies
            )
                ? game.involved_companies
                : [];


        const ageRatings =
            Array.isArray(
                game.age_ratings
            )
                ? game.age_ratings
                : [];


        /* ========================= */
        /* COVER */
/* ========================= */

        let cover = null;


        if (
            game.cover &&
            game.cover.image_id
        ) {

            cover =
                getCoverUrl(
                    game.cover.image_id
                );

        }


        /* ========================= */
        /* ARTWORKS */
/* ========================= */

        const artworkUrls =
            artworks
                .filter(
                    artwork =>
                        artwork &&
                        artwork.image_id
                )
                .map(
                    artwork =>
                        getCoverUrl(
                            artwork.image_id,
                            "screenshot_huge"
                        )
                );


        /* ========================= */
        /* SCREENSHOTS */
/* ========================= */

        const screenshotUrls =
            screenshots
                .filter(
                    screenshot =>
                        screenshot &&
                        screenshot.image_id
                )
                .map(
                    screenshot =>
                        getCoverUrl(
                            screenshot.image_id,
                            "screenshot_huge"
                        )
                );


        /* ========================= */
        /* COMPANIES */
/* ========================= */

        /* ========================= */
/* COMPANIES */
/* ========================= */

const developers =
    companies
        .filter(
            company =>
                company.developer &&
                company.company
        )
        .map(
            company => ({

                id:
                    company.company.id,

                name:
                    company.company.name

            })
        );


const publishers =
    companies
        .filter(
            company =>
                company.publisher &&
                company.company
        )
        .map(
            company => ({

                id:
                    company.company.id,

                name:
                    company.company.name

            })
        );


        /* ========================= */
        /* RELEASE DATE */
/* ========================= */

        const releaseDate =
            game.first_release_date
                ? formatDate(
                    game.first_release_date
                )
                : null;


        /* ========================= */
        /* VERSION INFORMATION */
/* ========================= */

        let versionParent = null;


        if (
            game.version_parent &&
            game.version_parent.id
        ) {

            versionParent = {

                id:
                    game.version_parent.id,

                name:
                    game.version_parent.name

            };

        }


        /* ========================= */
        /* RESPONSE */
/* ========================= */

        const result = {

            id:
                game.id,

            name:
                game.name || "Unknown Game",


            summary:
                game.summary ||
                "No description available.",


            cover,


            artworks:
                artworkUrls,


            screenshots:
                screenshotUrls,


            genres,


            platforms,


            developers,


            publishers,


            involved_companies:
                companies,


            age_ratings:
                ageRatings,


            release_date:
                releaseDate,


            rating:
                game.rating ?? null,


            total_rating:
                game.total_rating ?? null,


            total_rating_count:
                game.total_rating_count ?? 0,


            category:
                game.category ?? null,


            version_parent:
                versionParent

        };


        res.json(result);

    }


    catch (err) {

        console.error(
            "Game Details Error:",
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