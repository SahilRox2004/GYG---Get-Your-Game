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
    },
    {
        name: "PC / Windows",
        platform: "PC"
    },
    {
        name: "Linux",
        platform: "Linux"
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

const additionalPlatforms = [
    { name: "Mac", platform: "Mac", logo: "apple.svg" },
    { name: "3DO Interactive Multiplayer", platform: "3DO", logo: "3do.svg" },
    { name: "Atari 2600", platform: "Atari 2600", logo: "atari.svg" },
    { name: "Atari 5200", platform: "Atari 5200", logo: "atari.svg" },
    { name: "Atari 7800", platform: "Atari 7800", logo: "atari.svg" },
    { name: "Atari Jaguar", platform: "Atari Jaguar", logo: "atari.svg" },
    { name: "Atari Lynx", platform: "Atari Lynx", logo: "atari.svg" },
    { name: "Neo Geo AES", platform: "Neo Geo AES", logo: "neo-geo.svg" },
    { name: "Neo Geo CD", platform: "Neo Geo CD", logo: "neo-geo.svg" },
    { name: "Commodore 64", platform: "Commodore 64", logo: "commodore.svg" },
    { name: "Commodore Amiga", platform: "Commodore Amiga", logo: "commodore.svg" }
];

if (consoleDropdown) {

    const existingPlatforms = new Set(
        [...consoleDropdown.querySelectorAll("a")].map(link => {
            const linkPlatform =
                new URL(link.href).searchParams.get("platform");

            return (linkPlatform || "").trim().toLowerCase();
        })
    );

    additionalPlatforms.forEach(item => {

        if (existingPlatforms.has(item.platform.toLowerCase())) {
            return;
        }

        const link = document.createElement("a");
        link.href = `platform.html?platform=${encodeURIComponent(item.platform)}`;

        const icon = document.createElement("img");
        icon.src = `assets/platform-logos/${item.logo}`;
        icon.alt = "";
        icon.setAttribute("aria-hidden", "true");

        const label = document.createElement("span");
        label.textContent = item.name;

        link.append(icon, label);
        consoleDropdown.appendChild(link);
        existingPlatforms.add(item.platform.toLowerCase());

    });

}


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



