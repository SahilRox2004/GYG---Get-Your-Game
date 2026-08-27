const axios = require("axios");


async function getGamingNews() {

    try {

        const response = await axios.get(
            "https://gnews.io/api/v4/search",
            {
                params: {

                    q: `"video game" OR videogame OR PlayStation OR Xbox OR Nintendo OR Steam`,

                    lang: "en",

                    max: 10,

                    sortby: "publishedAt",

                    apikey:
                        process.env.GNEWS_API_KEY

                }

            }
        );


        return response.data.articles;

    }

    catch (error) {

        console.error(
            "GNews Error:",
            error.response?.data ||
            error.message
        );

        throw error;

    }

}


module.exports = {

    getGamingNews

};