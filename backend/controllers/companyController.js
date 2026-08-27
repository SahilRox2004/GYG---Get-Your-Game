const {
    queryIGDB,
    getCoverUrl
} = require("../services/igdbService");


/* ============================== */
/* COUNTRY NAME */
/* ============================== */

function getCountryName(countryCode) {

    const countries = {

        392: "Japan",
        840: "United States",
        826: "United Kingdom",
        124: "Canada",
        276: "Germany",
        250: "France",
        36: "Australia",
        752: "Sweden",
        528: "Netherlands",
        410: "South Korea",
        156: "China"

    };


    return countries[countryCode] || "Unknown";

}



/* ============================== */
/* FORMAT GAME */
/* ============================== */

function formatGame(game) {

    return {

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
                : null

    };

}



/* ============================== */
/* FIND BEST COMPANY MATCH */
/* ============================== */

function findBestCompany(
    companies,
    companyName
) {

    const normalizedName =
        companyName
            .trim()
            .toLowerCase();


    /*
        1. Exact match
    */

    let company =
        companies.find(
            item =>
                item.name &&
                item.name
                    .trim()
                    .toLowerCase() ===
                normalizedName
        );


    /*
        2. Starts with search
    */

    if (!company) {

        company =
            companies.find(
                item =>
                    item.name &&
                    item.name
                        .trim()
                        .toLowerCase()
                        .startsWith(
                            normalizedName
                        )
            );

    }


    /*
        3. Includes search
    */

    if (!company) {

        company =
            companies.find(
                item =>
                    item.name &&
                    item.name
                        .trim()
                        .toLowerCase()
                        .includes(
                            normalizedName
                        )
            );

    }


    /*
        4. Final fallback
    */

    return company || companies[0];

}



/* ============================== */
/* GET PARENT COMPANY */
/* ============================== */

async function getParentCompany(company) {

    /*
        No parent.
    */

    if (!company || !company.parent) {

        return null;

    }


    const parentQuery = `

        fields
            id,
            name;

        where id = ${company.parent};

        limit 1;

    `;


    const parentResult =
        await queryIGDB(
            parentQuery,
            "companies"
        );


    if (
        !parentResult ||
        !parentResult.length
    ) {

        return null;

    }


    return parentResult[0];

}



/* ============================== */
/* GET COMPANY GAMES */
/* ============================== */

async function getCompanyGames(companyId) {

    const gamesQuery = `

        fields
            id,
            name,
            cover.image_id,
            rating,
            total_rating_count,
            first_release_date;

        where
            involved_companies.company = ${companyId}
            & cover != null;

        sort total_rating_count desc;

        limit 50;

    `;


    const games =
        await queryIGDB(
            gamesQuery,
            "games"
        );


    if (!games) {

        return [];

    }


    return games
        .filter(
            game =>
                game.cover &&
                game.cover.image_id
        )
        .map(
            formatGame
        );

}



/* ============================== */
/* GET SUBSIDIARIES */
/* ============================== */

async function getSubsidiaries(companyId) {

    const subsidiariesQuery = `

        fields
            id,
            name,
            description,
            country,
            start_date;

        where parent = ${companyId};

        limit 50;

    `;


    const subsidiaries =
        await queryIGDB(
            subsidiariesQuery,
            "companies"
        );


    if (
        !subsidiaries ||
        !subsidiaries.length
    ) {

        return [];

    }


    console.log(
        "Subsidiaries found:",
        subsidiaries.map(
            subsidiary => ({
                id: subsidiary.id,
                name: subsidiary.name
            })
        )
    );


    const formattedSubsidiaries =
        await Promise.all(

            subsidiaries.map(
                async subsidiary => {

                    const games =
                        await getCompanyGames(
                            subsidiary.id
                        );


                    return {

                        id:
                            subsidiary.id,

                        name:
                            subsidiary.name,

                        description:
                            subsidiary.description ||
                            "No description available.",

                        country:
                            getCountryName(
                                subsidiary.country
                            ),

                        founded:
                            subsidiary.start_date
                                ? new Date(
                                    subsidiary.start_date * 1000
                                ).getUTCFullYear()
                                : "Unknown",

                        games:
                            games

                    };

                }
            )

        );


    return formattedSubsidiaries;

}



/* ============================== */
/* GET COMPANY */
/* ============================== */

exports.getCompany = async (req, res) => {

    try {

        const rawCompanyName =
            decodeURIComponent(
                req.params.company
            ).trim();


        const companyName =
            rawCompanyName.toLowerCase();


        console.log(
            "Company search:",
            rawCompanyName
        );



        /* ============================== */
        /* SEARCH COMPANY */
        /* ============================== */

        const safeCompanyName =
    rawCompanyName.replace(
        /"/g,
        '\\"'
    );


const companyQuery = `

    fields
        id,
        name,
        description,
        country,
        start_date,
        parent;

    where name ~ *"${safeCompanyName}"*;

    limit 20;

`;


        const companies =
            await queryIGDB(
                companyQuery,
                "companies"
            );


        if (
            !companies ||
            !companies.length
        ) {

            console.log(
                "Company not found:",
                rawCompanyName
            );


            return res
                .status(404)
                .json({

                    error:
                        "Company not found"

                });

        }



        /* ============================== */
        /* PICK BEST MATCH */
        /* ============================== */

        const company =
            findBestCompany(
                companies,
                companyName
            );


        console.log(
            "Displaying company:",
            company.name
        );



        /*
            IMPORTANT:

            We do NOT redirect a company
            to its parent.

            Example:

            Naughty Dog
            remains Naughty Dog.

            Ubisoft Montreal
            remains Ubisoft Montreal.

            PlayStation Studios
            remains PlayStation Studios.

            Sony Interactive Entertainment
            remains Sony Interactive Entertainment.
        */



        /* ============================== */
        /* CHECK PARENT COMPANY */
        /* ============================== */

        const parentCompany =
            await getParentCompany(
                company
            );


        /*
            If the company has a parent,
            it is treated as a studio /
            subsidiary page.
        */

        const isSubsidiary =
            Boolean(
                company.parent
            );


        console.log(
            "Is subsidiary:",
            isSubsidiary
        );


        if (parentCompany) {

            console.log(
                "Parent company:",
                parentCompany.name
            );

        }



        /* ============================== */
        /* GET COMPANY'S OWN GAMES */
        /* ============================== */

        const formattedGames =
            await getCompanyGames(
                company.id
            );



        /* ============================== */
        /* HERO BACKGROUND GAMES */
        /* ============================== */

        const heroGames =
            formattedGames.slice(
                0,
                6
            );



       /* ============================== */
/* GET SUBSIDIARIES */
/* ============================== */

/*
    Always check whether this company
    has subsidiaries.

    A company can itself have a parent
    AND still have studios/subsidiaries.

    Example structure:

    Parent Company
        ↓
    Publisher / Division
        ↓
    Game Studios

    Therefore, isSubsidiary should NOT
    prevent us from searching for
    subsidiaries.
*/

const formattedSubsidiaries =
    await getSubsidiaries(
        company.id
    );


console.log(
    "Subsidiaries returned:",
    formattedSubsidiaries.map(
        subsidiary => subsidiary.name
    )
);



        /* ============================== */
        /* RESPONSE */
        /* ============================== */

        res.json({

            id:
                company.id,

            name:
                company.name,

            description:
                company.description ||
                "No description available.",

            country:
                getCountryName(
                    company.country
                ),

            founded:
                company.start_date
                    ? new Date(
                        company.start_date * 1000
                    ).getUTCFullYear()
                    : "Unknown",


            /* ============================== */
            /* PARENT */
            /* ============================== */

            parent:
                parentCompany
                    ? parentCompany.name
                    : "None",


            parentId:
                parentCompany
                    ? parentCompany.id
                    : null,


            /* ============================== */
            /* COMPANY TYPE */
            /* ============================== */

            isSubsidiary:
                isSubsidiary,


            /* ============================== */
            /* HERO */
            /* ============================== */

            heroGames:
                heroGames,


            /* ============================== */
            /* COMPANY GAMES */
            /* ============================== */

            games:
                formattedGames,


            /* ============================== */
            /* SUBSIDIARIES */
            /* ============================== */

            subsidiaries:
                formattedSubsidiaries

        });

    }

    catch (error) {

        console.error(
            "Company error:",
            error.response?.data ||
            error.message
        );


        res.status(500).json({

            error:
                "Unable to load company",

            details:
                error.response?.data ||
                error.message

        });

    }

};