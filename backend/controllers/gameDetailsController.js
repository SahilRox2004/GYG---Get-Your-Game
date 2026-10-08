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

        franchise.id,
        franchise.name,
        franchises.id,
        franchises.name,
        collection.id,
        collection.name,
        collections.id,
        collections.name,

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

        const franchiseRecord =
            game.franchise?.id
                ? { ...game.franchise, kind: "franchise" }
                : game.franchises?.find(item => item.id)
                    ? { ...game.franchises.find(item => item.id), kind: "franchise" }
                    : game.collection?.id
                        ? { ...game.collection, kind: "collection" }
                        : game.collections?.find(item => item.id)
                            ? { ...game.collections.find(item => item.id), kind: "collection" }
                            : null;

        const series =
            franchiseRecord
                ? {
                    id: franchiseRecord.id,
                    name: franchiseRecord.name || "Series",
                    kind: franchiseRecord.kind
                }
                : null;

        let seriesGames = [];

        if (series) {

            const seriesFilter =
                series.kind === "franchise"
                    ? `franchise = ${series.id} | franchises = (${series.id})`
                    : `collection = ${series.id} | collections = (${series.id})`;

            try {

                const seriesResults =
                    await queryIGDB(`
                        fields
                            id,
                            name,
                            cover.image_id,
                            first_release_date;

                        where (${seriesFilter})
                            & first_release_date != null;

                        sort first_release_date asc;

                        limit 500;
                    `);

                seriesGames =
                    seriesResults.map(seriesGame => ({
                        id: seriesGame.id,
                        name: seriesGame.name || "Unknown Game",
                        cover: seriesGame.cover?.image_id
                            ? getCoverUrl(seriesGame.cover.image_id)
                            : null,
                        release_date: seriesGame.first_release_date
                            ? formatDate(seriesGame.first_release_date)
                            : null
                    }));

            }
            catch (seriesError) {
                console.error(
                    "Series timeline error:",
                    seriesError.response?.data || seriesError.message
                );
            }

        }


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
                versionParent,

            series,

            series_games:
                seriesGames

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