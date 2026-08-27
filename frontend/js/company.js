/* ========================= */
/* GET COMPANY FROM URL */
/* ========================= */

const params =
    new URLSearchParams(
        window.location.search
    );


const companyName =
    params.get("company");




/* ========================= */
/* LOAD COMPANY */
/* ========================= */

async function loadCompany() {

    if (!companyName) {

        document.getElementById(
            "companyName"
        ).textContent =
            "Company Not Found";

        return;

    }


    try {

        const response =
            await fetch(
                `http://localhost:5000/api/company/${encodeURIComponent(
                    companyName
                )}`
            );


        if (!response.ok) {

            throw new Error(
                "Unable to load company"
            );

        }


        const company =
            await response.json();


        console.log(
            "Company loaded:",
            company
        );


        displayCompany(
            company
        );

    }

    catch (error) {

        console.error(
            "Company loading error:",
            error
        );


        document.getElementById(
            "companyName"
        ).textContent =
            "Company Not Found";

    }

}




/* ========================= */
/* DISPLAY COMPANY */
/* ========================= */

function displayCompany(company) {


    /* ========================= */
    /* HERO BACKGROUND */
    /* ========================= */

    createHeroBackground(
        company.heroGames
    );


    /* ========================= */
    /* HERO */
    /* ========================= */

    document.getElementById(
        "companyName"
    ).textContent =
        company.name;


    document.getElementById(
        "companyEyebrow"
    ).textContent =
        "GAME COMPANY";


    document.getElementById(
        "companyFounded"
    ).textContent =
        `Founded ${company.founded}`;


    document.getElementById(
        "companyLocation"
    ).textContent =
        company.country;


    document.getElementById(
        "companyHeroDescription"
    ).textContent =
        company.description;



    /* ========================= */
    /* ABOUT */
    /* ========================= */

    document.getElementById(
        "companyAboutName"
    ).textContent =
        company.name;


    document.getElementById(
        "companySummary"
    ).textContent =
        company.description;



    /* ========================= */
    /* FACTS */
    /* ========================= */

    document.getElementById(
        "companyFactFounded"
    ).textContent =
        company.founded;


    document.getElementById(
        "companyFactCountry"
    ).textContent =
        company.country;


    document.getElementById(
        "companyParent"
    ).textContent =
        company.parent ||
        "None";



    /* ========================= */
    /* COMPANY NAME SPANS */
    /* ========================= */

    document
        .querySelectorAll(
            ".companySectionName"
        )
        .forEach(element => {

            element.textContent =
                company.name;

        });



    /* ========================= */
    /* COMPANY GAMES */
    /* ========================= */

    displayCompanyGames(
        company.games
    );



    /* ========================= */
/* STUDIOS & SUBSIDIARIES */
/* ========================= */

const studiosSection =
    document.getElementById(
        "studiosSection"
    );


const subsidiaries =
    company.subsidiaries || [];


/*
    IMPORTANT:

    Do NOT use company.isSubsidiary here.

    A company can itself be a subsidiary
    of another company AND still own
    studios/subsidiaries.

    Example:

    Sony
        ↓
    Sony Interactive Entertainment
        ↓
    Insomniac Games
    Naughty Dog
    Santa Monica Studio

    Sony Interactive Entertainment is
    technically a subsidiary of Sony,
    but it still has subsidiaries of
    its own.
*/


if (!subsidiaries.length) {

    /*
        No child studios.

        Completely hide the entire
        Studios & Subsidiaries section.
    */

    if (studiosSection) {

        studiosSection.style.display =
            "none";

    }

}

else {

    /*
        This company has studios /
        subsidiaries.

        Show the entire section.
    */

    if (studiosSection) {

        studiosSection.style.display =
            "";

    }


    displayStudioSections(
        subsidiaries
    );

}

}




/* ========================= */
/* HERO GAME COLLAGE */
/* ========================= */

function createHeroBackground(games) {

    const background =
        document.getElementById(
            "companyBackground"
        );


    if (
        !background ||
        !games ||
        !games.length
    ) {

        return;

    }


    background.innerHTML =
        "";


    games
        .slice(
            0,
            6
        )
        .forEach(game => {

            if (!game.cover) {

                return;

            }


            const image =
                document.createElement(
                    "img"
                );


            image.src =
                game.cover;


            image.alt =
                game.name;


            image.loading =
                "lazy";


            background.appendChild(
                image
            );

        });

}




/* ========================= */
/* DISPLAY COMPANY GAMES */
/* ========================= */

function displayCompanyGames(games) {

    const container =
        document.getElementById(
            "companyGames"
        );


    if (!container) {

        return;

    }


    if (
        !games ||
        !games.length
    ) {

        container.innerHTML =
            "<p>No games found.</p>";

        return;

    }


    container.innerHTML =
        "";


    games.forEach(game => {

        const card =
            createGameCard(
                game
            );


        container.appendChild(
            card
        );

    });


    setupCompanyGamesCarousel(
        container
    );

}




/* ========================= */
/* COMPANY GAMES CAROUSEL */
/* ========================= */

function setupCompanyGamesCarousel(container) {

    const leftButton =
        document.querySelector(
            ".companyGamesLeft"
        );


    const rightButton =
        document.querySelector(
            ".companyGamesRight"
        );


    if (leftButton) {

        leftButton.onclick =
            () => {

                container.scrollBy({

                    left:
                        -700,

                    behavior:
                        "smooth"

                });

            };

    }


    if (rightButton) {

        rightButton.onclick =
            () => {

                container.scrollBy({

                    left:
                        700,

                    behavior:
                        "smooth"

                });

            };

    }

}




/* ========================= */
/* SUBSIDIARY STUDIO SECTIONS */
/* ========================= */

function displayStudioSections(subsidiaries) {

    const container =
        document.getElementById(
            "studioGameSections"
        );


    const studiosSection =
        document.getElementById(
            "studiosSection"
        );


    if (!container) {

        return;

    }


    /*
        Clear previous content
    */

    container.innerHTML =
        "";


    /*
        No subsidiaries.

        Hide the ENTIRE section.
    */

    if (
        !subsidiaries ||
        !subsidiaries.length
    ) {

        if (studiosSection) {

            studiosSection.style.display =
                "none";

        }

        return;

    }


    /*
        Subsidiaries exist.

        Show the section.
    */

    if (studiosSection) {

        studiosSection.style.display =
            "";

    }


    /*
        Debug
    */

    console.log(
        "Displaying subsidiaries:",
        subsidiaries
    );


    /*
        Create each studio section
    */

    subsidiaries.forEach(
        (subsidiary, index) => {

            const section =
                createStudioSection(
                    subsidiary,
                    index
                );


            container.appendChild(
                section
            );

        }
    );

}



/* ========================= */
/* CREATE STUDIO SECTION */
/* ========================= */

function createStudioSection(
    subsidiary,
    index
) {

    const section =
        document.createElement(
            "section"
        );


    section.className =
        "studioGameSection";


    const carouselId =
        `studioGames${index}`;


    section.innerHTML = `

        <div
            class="studioSectionHeader"
        >

            <div
                class="studioDetails"
            >

                <p
                    class="sectionEyebrow"
                >
                    A STUDIO OF
                </p>


                <h2>

                    ${subsidiary.name}

                </h2>


                <div
                    class="studioMeta"
                >

                    <span>

                        ${subsidiary.country || "Unknown"}

                    </span>


                    <span>

                        Founded
                        ${subsidiary.founded || "Unknown"}

                    </span>

                </div>


                <p
                    class="studioDescription"
                >

                    ${
                        subsidiary.description ||
                        "No description available."
                    }

                </p>

            </div>


            <div
                class="carouselControls"
            >

                <button
                    class="studioLeft"
                    type="button"
                >
                    ❮
                </button>


                <button
                    class="studioRight"
                    type="button"
                >
                    ❯
                </button>

            </div>

        </div>


        <div
            class="studioGamesCarousel"
            id="${carouselId}"
        ></div>

    `;


    const gamesContainer =
        section.querySelector(
            `#${carouselId}`
        );


    if (
        !subsidiary.games ||
        !subsidiary.games.length
    ) {

        gamesContainer.innerHTML =
            "<p class='noStudioGames'>No games found for this studio.</p>";

    }

    else {

        subsidiary.games.forEach(
            game => {

                const card =
                    createGameCard(
                        game
                    );


                gamesContainer.appendChild(
                    card
                );

            }
        );

    }



    /* ========================= */
    /* STUDIO CAROUSEL */
    /* ========================= */

    const leftButton =
        section.querySelector(
            ".studioLeft"
        );


    const rightButton =
        section.querySelector(
            ".studioRight"
        );


    if (leftButton) {

        leftButton.addEventListener(
            "click",
            () => {

                gamesContainer.scrollBy({

                    left:
                        -700,

                    behavior:
                        "smooth"

                });

            }
        );

    }


    if (rightButton) {

        rightButton.addEventListener(
            "click",
            () => {

                gamesContainer.scrollBy({

                    left:
                        700,

                    behavior:
                        "smooth"

                });

            }
        );

    }


    return section;

}




/* ========================= */
/* CREATE GAME CARD */
/* ========================= */

function createGameCard(game) {

    const card =
        document.createElement(
            "div"
        );


    card.className =
        "companyGameCard";


    card.innerHTML = `

        <img
            class="companyGamePoster"
            src="${game.cover}"
            alt="${game.name}"
            loading="lazy"
        >


        <div
            class="companyGameTitle"
        >

            ${game.name}

        </div>


        <div
            class="companyGameMeta"
        >

            ${game.releaseYear || "Unknown"}

            ${
                game.rating
                    ? ` • ⭐ ${(game.rating / 10).toFixed(1)}`
                    : ""
            }

        </div>

    `;


    card.addEventListener(
        "click",
        () => {

            window.location.href =
                `game.html?id=${game.id}`;

        }
    );


    return card;

}




/* ========================= */
/* LOAD PAGE */
/* ========================= */

loadCompany();