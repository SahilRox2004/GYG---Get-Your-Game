/* ========================= */
/* COLLECTION DROPDOWN */
/* ========================= */

const collectionMenuItems = [

    {
        name: "Open World Legends",
        type: "open-world"
    },

    {
        name: "Horror Essentials",
        type: "horror"
    },

    {
        name: "Action Icons",
        type: "action"
    },

    {
        name: "Superhero Games",
        type: "superhero"
    },

    {
        name: "Sci-Fi Adventures",
        type: "scifi"
    },

    {
        name: "Episodic Adventures",
        type: "episodic"
    },

    {
        name: "Stories That Stay With You",
        type: "story-driven"
    },

    {
        name: "Soulslike Legends",
        type: "soulslike"
    },

    {
        name: "RPG Masterpieces",
        type: "rpg"
    },

    {
        name: "Survival Instinct",
        type: "survival"
    },

    {
        name: "Masters of Stealth",
        type: "stealth"
    },

    {
        name: "Racing Legends",
        type: "racing"
    },

    {
        name: "Indie Masterpieces",
        type: "indie"
    },

    {
        name: "Cozy Escapes",
        type: "cozy"
    },

    {
        name: "Retro Classics",
        type: "retro"
    }

];


/* ========================= */
/* GET ELEMENTS */
/* ========================= */

const collectionMenuButton =
    document.getElementById(
        "collectionButton"
    );


const collectionMenuDropdown =
    document.getElementById(
        "collectionDropdown"
    );


/* ========================= */
/* CREATE COLLECTION LINKS */
/* ========================= */

if (collectionMenuDropdown) {

    collectionMenuItems.forEach(
        collection => {

            const link =
                document.createElement(
                    "a"
                );


            link.href =
                `collection.html?type=${encodeURIComponent(
                    collection.type
                )}`;


            link.textContent =
                collection.name;


            collectionMenuDropdown.appendChild(
                link
            );

        }
    );

}


/* ========================= */
/* OPEN / CLOSE DROPDOWN */
/* ========================= */

if (
    collectionMenuButton &&
    collectionMenuDropdown
) {

    collectionMenuButton.addEventListener(
        "click",
        event => {

            event.stopPropagation();


            const isOpen =
                collectionMenuDropdown.classList.toggle(
                    "open"
                );


            collectionMenuButton.classList.toggle(
                "active",
                isOpen
            );


            collectionMenuButton.setAttribute(
                "aria-expanded",
                isOpen
            );

        }
    );


    document.addEventListener(
        "click",
        event => {

            if (
                !collectionMenuButton.contains(
                    event.target
                ) &&
                !collectionMenuDropdown.contains(
                    event.target
                )
            ) {

                collectionMenuDropdown.classList.remove(
                    "open"
                );


                collectionMenuButton.classList.remove(
                    "active"
                );


                collectionMenuButton.setAttribute(
                    "aria-expanded",
                    "false"
                );

            }

        }
    );

}

