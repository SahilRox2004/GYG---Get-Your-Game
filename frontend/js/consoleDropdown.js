/* ========================= */
/* CONSOLE DROPDOWN */
/* ========================= */

const consolePlatforms = [

    /* ========================= */
    /* PLAYSTATION */
    /* ========================= */

    {
        name: "PlayStation",
        platform: "PlayStation"
    },

    {
        name: "PlayStation 2",
        platform: "PlayStation 2"
    },

    {
        name: "PlayStation 3",
        platform: "PlayStation 3"
    },

    {
        name: "PlayStation 4",
        platform: "PlayStation 4"
    },

    {
        name: "PlayStation 5",
        platform: "PlayStation 5"
    },

    {
        name: "PSP",
        platform: "PlayStation Portable"
    },

    {
        name: "PS Vita",
        platform: "PlayStation Vita"
    },


    /* ========================= */
    /* XBOX */
    /* ========================= */

    {
        name: "Xbox",
        platform: "Xbox"
    },

    {
        name: "Xbox 360",
        platform: "Xbox 360"
    },

    {
        name: "Xbox One",
        platform: "Xbox One"
    },

    {
        name: "Xbox Series X|S",
        platform: "Xbox Series X|S"
    },


    /* ========================= */
    /* NINTENDO CONSOLES */
    /* ========================= */

    {
        name: "NES",
        platform: "Nintendo Entertainment System"
    },

    {
        name: "SNES",
        platform: "Super Nintendo Entertainment System"
    },

    {
        name: "Nintendo 64",
        platform: "Nintendo 64"
    },

    {
        name: "GameCube",
        platform: "Nintendo GameCube"
    },

    {
        name: "Wii",
        platform: "Wii"
    },

    {
        name: "Wii U",
        platform: "Wii U"
    },

    {
        name: "Nintendo Switch",
        platform: "Nintendo Switch"
    },

    {
        name: "Nintendo Switch 2",
        platform: "Nintendo Switch 2"
    },


    /* ========================= */
    /* NINTENDO HANDHELDS */
    /* ========================= */

    {
        name: "Game Boy",
        platform: "Game Boy"
    },

    {
        name: "Game Boy Color",
        platform: "Game Boy Color"
    },

    {
        name: "Game Boy Advance",
        platform: "Game Boy Advance"
    },

    {
        name: "Nintendo DS",
        platform: "Nintendo DS"
    },

    {
        name: "Nintendo DSi",
        platform: "Nintendo DSi"
    },

    {
        name: "Nintendo 3DS",
        platform: "Nintendo 3DS"
    },

    {
        name: "New Nintendo 3DS",
        platform: "New Nintendo 3DS"
    },


    /* ========================= */
    /* SEGA */
    /* ========================= */

    {
        name: "Sega Genesis",
        platform: "Sega Genesis"
    },

    {
        name: "Sega Mega Drive",
        platform: "Sega Mega Drive"
    },

    {
        name: "Sega Saturn",
        platform: "Sega Saturn"
    },

    {
        name: "Dreamcast",
        platform: "Dreamcast"
    }

];



/* ========================= */
/* GET ELEMENTS */
/* ========================= */

const consoleButton =
    document.getElementById(
        "consoleButton"
    );


const consoleDropdown =
    document.getElementById(
        "consoleDropdown"
    );


/* OPEN / CLOSE DROPDOWN */

if (
    consoleButton &&
    consoleDropdown
) {

    consoleButton.addEventListener(
        "click",
        event => {

            event.stopPropagation();

            const isOpen =
                consoleDropdown.classList.toggle(
                    "open"
                );

            consoleButton.classList.toggle(
                "active",
                isOpen
            );

            consoleButton.setAttribute(
                "aria-expanded",
                isOpen
            );

        }
    );

    document.addEventListener(
        "click",
        event => {

            if (
                !consoleButton.contains(
                    event.target
                ) &&
                !consoleDropdown.contains(
                    event.target
                )
            ) {

                consoleDropdown.classList.remove(
                    "open"
                );

                consoleButton.classList.remove(
                    "active"
                );

                consoleButton.setAttribute(
                    "aria-expanded",
                    "false"
                );

            }

        }
    );

}



