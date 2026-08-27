async function loadReleasedToday(){

    const response =
        await fetch(
        "https://gyg-backend-hjbx.onrender.com/api/releasedtoday"
    );

    const games =
        await response.json();

    const carousel =
        document.getElementById(
            "releasedTodayCarousel"
        );

    carousel.innerHTML="";

    games.forEach(game => {

    const card =
        document.createElement("div");

    card.className =
        "gameCard";

    card.innerHTML = `

        <img
            src="${game.cover}"
            alt="${game.name}"
        >

        <h3>
            ${game.name}
        </h3>

        <p>
            Released ${game.releaseYear}
        </p>

    `;

    card.addEventListener(
        "click",
        () => {

            window.location.href =
                `game.html?id=${game.id}`;

        }
    );

    carousel.appendChild(card);

});

}

loadReleasedToday();