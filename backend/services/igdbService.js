const axios = require("axios");


/* ============================== */
/* GET TWITCH ACCESS TOKEN */
/* ============================== */

async function getAccessToken() {

    const response = await axios.post(

        "https://id.twitch.tv/oauth2/token",

        null,

        {
            params: {

                client_id:
                    process.env.CLIENT_ID,

                client_secret:
                    process.env.CLIENT_SECRET,

                grant_type:
                    "client_credentials"

            }
        }

    );


    return response.data.access_token;

}


/* ============================== */
/* IGDB QUERY */
/* ============================== */

async function queryIGDB(
    query,
    endpoint = "games"
) {

    const token =
        await getAccessToken();


    const response =
        await axios.post(

            `https://api.igdb.com/v4/${endpoint}`,

            query,

            {
                headers: {

                    "Client-ID":
                        process.env.CLIENT_ID,

                    "Authorization":
                        `Bearer ${token}`

                }
            }

        );


    return response.data;

}


/* ============================== */
/* RELEASE DATE QUERY */
/* ============================== */

async function queryIGDBReleaseDates(
    query
) {

    return queryIGDB(
        query,
        "release_dates"
    );

}


/* ============================== */
/* COVER IMAGE URL */
/* ============================== */

function getCoverUrl(
    imageId,
    size = "cover_big"
) {

    if (!imageId) {

        return null;

    }


    return `https://images.igdb.com/igdb/image/upload/t_${size}/${imageId}.jpg`;

}


/* ============================== */
/* BACKGROUND IMAGE URL */
/* ============================== */

function getBackgroundUrl(
    imageId,
    size = "screenshot_big"
) {

    if (!imageId) {

        return null;

    }


    return `https://images.igdb.com/igdb/image/upload/t_${size}/${imageId}.jpg`;

}


/* ============================== */
/* FORMAT DATE */
/* ============================== */

function formatDate(
    timestamp
) {

    if (!timestamp) {

        return null;

    }


    return new Date(
        timestamp * 1000
    )
        .toISOString()
        .split("T")[0];

}


/* ============================== */
/* EXPORTS */
/* ============================== */

module.exports = {

    queryIGDB,

    queryIGDBReleaseDates,

    getCoverUrl,

    getBackgroundUrl,

    formatDate

};