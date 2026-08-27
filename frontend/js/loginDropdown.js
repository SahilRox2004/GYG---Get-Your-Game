/* ========================= */
/* LOGIN DROPDOWN */
/* ========================= */

const loginButton =
    document.getElementById(
        "loginButton"
    );

const loginDropdown =
    document.getElementById(
        "loginDropdown"
    );


function updateAccountMenu() {

    if (!loginButton || !loginDropdown) {

        return;

    }

    const token = localStorage.getItem("token");
    const storedUser = localStorage.getItem("user");
    let user = null;

    try {

        user = storedUser
            ? JSON.parse(storedUser)
            : null;

    } catch (error) {

        localStorage.removeItem("user");

    }

    const buttonLabel =
        loginButton.querySelector("span");

    if (token && user?.username) {

        buttonLabel.textContent = user.username;
        loginDropdown.innerHTML = `
            <a href="profile.html">Profile</a>
            <a href="#" id="logoutLink">Log out</a>
        `;

        document.getElementById("logoutLink").addEventListener(
            "click",
            event => {

                event.preventDefault();
                localStorage.removeItem("token");
                localStorage.removeItem("user");
                window.location.href = "index.html";

            }
        );

        return;

    }

    buttonLabel.textContent = "LOGIN";
    loginDropdown.innerHTML = `
        <a href="login.html?mode=signin">Sign In</a>
        <a href="login.html?mode=signup">Sign Up</a>
    `;

}


updateAccountMenu();


/* ========================= */
/* ONLY RUN IF ELEMENTS EXIST */
/* ========================= */

if (
    loginButton &&
    loginDropdown
) {

    loginButton.addEventListener(
        "click",
        event => {

            event.stopPropagation();


            const isOpen =
                loginDropdown.classList.contains(
                    "open"
                );


            /* CLOSE OTHER DROPDOWNS */

            const consoleDropdown =
                document.getElementById(
                    "consoleDropdown"
                );

            const consoleButton =
                document.getElementById(
                    "consoleButton"
                );


            const collectionDropdown =
                document.getElementById(
                    "collectionDropdown"
                );

            const collectionButton =
                document.getElementById(
                    "collectionButton"
                );


            if (
                consoleDropdown &&
                consoleButton
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


            if (
                collectionDropdown &&
                collectionButton
            ) {

                collectionDropdown.classList.remove(
                    "open"
                );

                collectionButton.classList.remove(
                    "active"
                );

                collectionButton.setAttribute(
                    "aria-expanded",
                    "false"
                );

            }


            /* TOGGLE LOGIN */

            loginDropdown.classList.toggle(
                "open",
                !isOpen
            );

            loginButton.classList.toggle(
                "active",
                !isOpen
            );

            loginButton.setAttribute(
                "aria-expanded",
                !isOpen
                    ? "true"
                    : "false"
            );

        }
    );


    /* ========================= */
    /* CLOSE ON OUTSIDE CLICK */
    /* ========================= */

    document.addEventListener(
        "click",
        event => {

            if (
                !loginButton.contains(
                    event.target
                )
                &&
                !loginDropdown.contains(
                    event.target
                )
            ) {

                loginDropdown.classList.remove(
                    "open"
                );

                loginButton.classList.remove(
                    "active"
                );

                loginButton.setAttribute(
                    "aria-expanded",
                    "false"
                );

            }

        }
    );

}