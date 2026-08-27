async function loadGamingNews() {

    try {

        const response = await fetch(
            "http://localhost:5000/api/news"
        );

        if (!response.ok) {

            throw new Error(
                "Unable to load gaming news"
            );

        }


        const articles =
            await response.json();


        const grid =
            document.getElementById(
                "gamingNewsGrid"
            );


        grid.innerHTML = "";


        /* Show first 6 articles */

        articles
            .filter(article =>
                article.title &&
                article.url
            )
            .slice(0, 6)
            .forEach(article => {

                const card =
                    document.createElement(
                        "article"
                    );


                card.className =
                    "newsCard";


                /* Format date */

                let date =
                    "";

                if (article.publishedAt) {

                    date =
                        new Date(
                            article.publishedAt
                        )
                        .toLocaleDateString(
                            "en-US",
                            {
                                month: "short",
                                day: "numeric"
                            }
                        )
                        .toUpperCase();

                }


                /* Image fallback */

                const image =
                    article.image ||
                    "assets/news-placeholder.jpg";


                card.innerHTML = `

                    <div class="newsImage">

                        <img
                            src="${image}"
                            alt="${article.title}"
                        >

                    </div>


                    <div class="newsContent">

                        <div class="newsMeta">

                            <span class="newsSource">

                                ${article.source}

                            </span>

                            <span>

                                • ${date}

                            </span>

                        </div>


                        <h3 class="newsTitle">

                            ${article.title}

                        </h3>


                        <p class="newsDescription">

                            ${
                                article.description ||
                                "Read the latest story from the gaming world."
                            }

                        </p>

                    </div>

                `;


                /* Open original article */

                card.addEventListener(
                    "click",
                    () => {

                        window.open(
                            article.url,
                            "_blank"
                        );

                    }
                );


                grid.appendChild(
                    card
                );

            });

    }

    catch (error) {

        console.error(
            "Gaming news error:",
            error
        );

    }

}


loadGamingNews();