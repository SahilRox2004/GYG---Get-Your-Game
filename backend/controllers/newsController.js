const {
    getGamingNews
} = require(
    "../services/newsService"
);


/* ========================= */
/* TRUSTED GAMING SOURCES */
/* ========================= */

const gamingSources = [

    "IGN",
    "GameSpot",
    "GamesRadar",
    "Polygon",
    "Kotaku",
    "Eurogamer",
    "PC Gamer",
    "Game Informer",
    "Rock Paper Shotgun",
    "Destructoid",
    "VG247",
    "Push Square",
    "Nintendo Life",
    "Game Rant"

];


/* ========================= */
/* STRONG GAMING KEYWORDS */
/* ========================= */

const gamingKeywords = [

    "playstation",
    "ps5",
    "ps4",

    "xbox",

    "nintendo",
    "switch",

    "video game",
    "videogame",

    "game developer",
    "game studio",

    "gta",
    "grand theft auto",
    "rockstar games",

    "skyrim",
    "fallout",
    "bethesda",

    "call of duty",
    "battlefield",

    "fortnite",
    "minecraft",

    "pokemon",
    "zelda",
    "mario",

    "resident evil",
    "silent hill",

    "steam deck",
    "steam next fest",

    "xbox game pass",
    "playstation plus",
    "ps plus"

];


/* ========================= */
/* GET NEWS */
/* ========================= */

exports.getNews = async (req, res) => {

    try {

        const articles =
            await getGamingNews();


        /* ========================= */
        /* FILTER ARTICLES */
        /* ========================= */

        const filteredArticles =
            articles.filter(article => {

                const title =
                    (article.title || "")
                        .toLowerCase();


                const source =
                    article.source?.name || "";


                /* Accept trusted
                   gaming publications */

                const isTrustedSource =
                    gamingSources.some(
                        gamingSource =>
                            source
                                .toLowerCase()
                                .includes(
                                    gamingSource.toLowerCase()
                                )
                    );


                if (isTrustedSource) {

                    return true;

                }


                /* Other sources must
                   have a strong gaming
                   keyword in the TITLE */

                const hasGamingKeyword =
                    gamingKeywords.some(
                        keyword =>
                            title.includes(
                                keyword.toLowerCase()
                            )
                    );


                return hasGamingKeyword;

            });


        /* ========================= */
        /* FORMAT RESULTS */
        /* ========================= */

        const news =
            filteredArticles.map(article => ({

                title:
                    article.title,

                description:
                    article.description,

                image:
                    article.image,

                url:
                    article.url,

                source:
                    article.source?.name ||
                    "Gaming News",

                publishedAt:
                    article.publishedAt

            }));


        res.json(news);

    }

    catch (error) {

        console.error(
            "News Controller Error:",
            error.message
        );


        res.status(500).json({

            error:
                "Unable to fetch gaming news"

        });

    }

};