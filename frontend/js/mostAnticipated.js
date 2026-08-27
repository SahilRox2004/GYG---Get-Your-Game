async function loadUpcomingGames() {

    try {

        const response = await fetch(
            "https://gyg-backend-hjbx.onrender.com/api/upcoming"
        );

        const games = await response.json();


        const grid =
            document.getElementById(
                "upcomingGamesGrid"
            );


        grid.innerHTML = "";


        games.forEach(game => {

            /* ========================= */
            /* FORMAT RELEASE DATE */
            /* ========================= */

            let releaseDate =
                "COMING SOON";


            if (game.release_date) {

                const date =
                    new Date(
                        game.release_date * 1000
                    );


                releaseDate =
                    date.toLocaleDateString(
                        "en-US",
                        {
                            month: "short",
                            day: "numeric",
                            year: "numeric"
                        }
                    ).toUpperCase();

            }


            /* ========================= */
            /* CREATE CARD */
            /* ========================= */

            const card =
                document.createElement("div");


            card.className =
                "anticipatedCard";


            card.innerHTML = `

                <img
                    src="${game.background}"
                    alt="${game.name}"
                >


                <div class="anticipatedOverlay">

                </div>


                <div class="anticipatedInfo">

                    <h3>
                        ${game.name}
                    </h3>


                    <p class="upcomingDate">

                        COMING • ${releaseDate}

                    </p>


                    <button class="viewButton">

                        VIEW GAME →

                    </button>

                </div>

            `;


            /* Entire card opens game */

            card.addEventListener(
                "click",
                () => {

                    window.location.href =
                        `game.html?id=${game.id}`;

                }
            );


            grid.appendChild(card);

        });

    }

    catch (error) {

        console.error(
            "Upcoming games error:",
            error
        );

    }

}


loadUpcomingGames();


/* ========================= */
/* UPCOMING CAROUSEL ARROWS */
/* ========================= */

const upcomingGrid =
    document.getElementById(
        "upcomingGamesGrid"
    );


const upcomingPrev =
    document.getElementById(
        "upcomingPrev"
    );


const upcomingNext =
    document.getElementById(
        "upcomingNext"
    );


upcomingNext.addEventListener(
    "click",
    () => {

        upcomingGrid.scrollBy({

            left: 500,

            behavior: "smooth"

        });

    }
);


upcomingPrev.addEventListener(
    "click",
    () => {

        upcomingGrid.scrollBy({

            left: -500,

            behavior: "smooth"

        });

    }
);