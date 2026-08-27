const {
    queryIGDB,
    queryIGDBReleaseDates,
    getCoverUrl
} = require("../services/igdbService");


exports.getReleasedToday = async (req, res) => {

    try {

        const today = new Date();

        const month =
            today.getUTCMonth() + 1;

        const day =
            today.getUTCDate();


        /*
        Get release dates for the
        current month.
        */

        const releaseDateQuery = `

fields
id,
game,
date,
m;

where
m = ${month} &
date != null;

sort date asc;

limit 500;

`;


        const releaseDates =
            await queryIGDBReleaseDates(
                releaseDateQuery
            );


        console.log(
            "Month:",
            month
        );

        console.log(
            "Release dates returned:",
            releaseDates.length
        );


        /*
        Find releases matching today's
        month AND day.
        */

        const matchingReleases =
            releaseDates.filter(release => {

                if (!release.date) {
                    return false;
                }


                const releaseDate =
                    new Date(
                        release.date * 1000
                    );


                return (

                    releaseDate.getUTCMonth() + 1
                        === month

                    &&

                    releaseDate.getUTCDate()
                        === day

                );

            });


        console.log(
            "Matching today's date:",
            matchingReleases.length
        );


        /*
        IMPORTANT:
        Show us exactly which release
        records IGDB returned.
        */

        console.log(
            "Matching releases:",
            matchingReleases
        );


        /*
        Get unique game IDs.
        */

        const gameIds =
            [
                ...new Set(
                    matchingReleases
                        .map(release =>
                            release.game
                        )
                        .filter(Boolean)
                )
            ];


        console.log(
            "Matching game IDs:",
            gameIds
        );


        if (!gameIds.length) {

            return res.json([]);

        }


        /*
        Get the actual game information.
        */

        const gameQuery = `

fields
id,
name,
cover.image_id,
rating,
first_release_date,
category,
version_parent;

where
id = (${gameIds.join(",")}) &
cover != null &
category = 0 &
version_parent = null;

limit 500;

`;


        const games =
            await queryIGDB(
                gameQuery
            );


        /*
        Diagnostic:
        see what games IGDB returned.
        */

        console.log(
            "Games returned:",
            games
        );


        /*
        For now, DO NOT filter by
        first_release_date.

        We already know the release_dates
        endpoint found a release on today's
        month/day.

        We'll inspect those games first
        to distinguish original releases
        from ports/re-releases.
        */

        const uniqueGames = [];

        const seen =
            new Set();


        games.forEach(game => {

            if (!seen.has(game.id)) {

                seen.add(game.id);

                uniqueGames.push(game);

            }

        });


        /*
        Format for frontend.
        */

        const results =
            uniqueGames.map(game => ({

                id: game.id,

                name: game.name,

                rating:
                    game.rating
                        ? Math.round(
                            game.rating * 10
                        ) / 10
                        : null,

                releaseYear:
                    game.first_release_date
                        ? new Date(
                            game.first_release_date * 1000
                        ).getUTCFullYear()
                        : null,

                cover:
                    game.cover
                        ? getCoverUrl(
                            game.cover.image_id
                        )
                        : null

            }));


        /*
        Oldest releases first.
        */

        results.sort(
            (a, b) =>
                (a.releaseYear || 9999) -
                (b.releaseYear || 9999)
        );


        console.log(
            `Released On This Day: ${results.length} games found`
        );


        res.json(results);

    }

    catch (err) {

        console.error(
            "Released Today Error:",
            err.response?.data ||
            err.message
        );


        res.status(500).json(
            err.response?.data ||
            err.message
        );

    }

};