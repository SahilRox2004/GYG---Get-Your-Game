let heroGames = [];

let currentSlide = 0;

let sliderInterval;


const hero =
    document.getElementById("hero");

const heroTitle =
    document.getElementById("heroTitle");

const heroSummary =
    document.getElementById("heroSummary");

const heroDate =
    document.getElementById("heroDate");

const heroButton =
    document.getElementById("heroButton");

const heroBadge =
    document.getElementById("heroBadge");

const dotsContainer =
    document.getElementById("dots");


async function loadHero() {

    try {

        const response =
            await fetch(
                "http://localhost:5000/api/hero"
            );


        heroGames =
            await response.json();


        if (!heroGames.length) {

            return;

        }


        createDots();

        showSlide(0);

        startAutoSlide();

    }

    catch (err) {

        console.log(
            "Hero error:",
            err
        );

    }

}


function createDots() {

    dotsContainer.innerHTML = "";


    heroGames.forEach(
        (game, index) => {

            const dot =
                document.createElement(
                    "div"
                );


            dot.classList.add(
                "dot"
            );


            dot.addEventListener(
                "click",
                () => {

                    currentSlide =
                        index;

                    showSlide(
                        currentSlide
                    );

                    restartAutoSlide();

                }
            );


            dotsContainer.appendChild(
                dot
            );

        }
    );

}


function showSlide(index) {

    const game =
        heroGames[index];


    if (!game) {

        return;

    }


    /*
    Background
    */

    hero.style.backgroundImage =
        `url(${game.background})`;


    /*
    Title
    */

    heroTitle.textContent =
        game.title ||
        game.name ||
        "Unknown Game";


    /*
    Summary
    */

    heroSummary.textContent =
        game.summary ||
        "Discover more about this game.";


    /*
    Release date
    */

    if (game.releaseDate) {

        heroDate.textContent =
            formatFullDate(
                game.releaseDate
            );

    }

    else {

        heroDate.textContent =
            "Release date unknown";

    }


    /*
    Badge
    */

    if (game.releaseDate) {

        const releaseDate =
            new Date(
                game.releaseDate
            );

        const today =
            new Date();


        if (releaseDate > today) {

            heroBadge.textContent =
                "MOST ANTICIPATED";

        }

        else {

            heroBadge.textContent =
                "⭐ FEATURED GAME";

        }

    }


    /*
    View Game button
    */

    heroButton.onclick =
        () => {

            window.location.href =
                `game.html?id=${game.id}`;

        };


    /*
    Active dot
    */

    document
        .querySelectorAll(".dot")
        .forEach(dot => {

            dot.classList.remove(
                "activeDot"
            );

        });


    if (
        dotsContainer.children[index]
    ) {

        dotsContainer
            .children[index]
            .classList.add(
                "activeDot"
            );

    }

}


function nextSlide() {

    currentSlide++;


    if (
        currentSlide >=
        heroGames.length
    ) {

        currentSlide = 0;

    }


    showSlide(
        currentSlide
    );

}


function prevSlide() {

    currentSlide--;


    if (currentSlide < 0) {

        currentSlide =
            heroGames.length - 1;

    }


    showSlide(
        currentSlide
    );

}


function startAutoSlide() {

    sliderInterval =
        setInterval(
            nextSlide,
            6000
        );

}


function restartAutoSlide() {

    clearInterval(
        sliderInterval
    );

    startAutoSlide();

}


document
    .getElementById("nextSlide")
    .addEventListener(
        "click",
        () => {

            nextSlide();

            restartAutoSlide();

        }
    );


document
    .getElementById("prevSlide")
    .addEventListener(
        "click",
        () => {

            prevSlide();

            restartAutoSlide();

        }
    );


loadHero();