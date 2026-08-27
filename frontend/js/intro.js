const intro = document.getElementById("intro");

const logo = document.getElementById("gygLogo");

const main = document.getElementById("mainSite");


/* ========================= */
/* CHECK INTRO STATUS */
/* ========================= */

const introShown =
    sessionStorage.getItem("gygIntroShown");


if (introShown === "true") {

    intro.style.display = "none";

    main.style.display = "block";

}


/* ========================= */
/* ENTER GYG */
/* ========================= */

document.body.addEventListener("click", (e) => {

    if (
        introShown !== "true" &&
        e.target !== logo
    ) {

        intro.classList.add("hideIntro");


        setTimeout(() => {

            intro.style.display = "none";

            main.style.display = "block";


            sessionStorage.setItem(
                "gygIntroShown",
                "true"
            );

        }, 1000);

    }

});