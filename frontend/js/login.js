/* ========================= */
/* GET ELEMENTS */
/* ========================= */

const signinForm =
    document.getElementById(
        "signinForm"
    );

const signupForm =
    document.getElementById(
        "signupForm"
    );

const switchAuth =
    document.getElementById(
        "switchAuth"
    );

const switchText =
    document.getElementById(
        "switchText"
    );

const authTitle =
    document.getElementById(
        "authTitle"
    );


/* ========================= */
/* SHOW SIGN IN */
/* ========================= */

function showSignin() {

    signinForm.style.display =
        "block";

    signupForm.style.display =
        "none";


    authTitle.textContent =
        "Welcome Back";


    switchText.innerHTML = `
        Don't have an account?

        <button
            id="switchAuth"
            type="button"
        >
            Sign Up
        </button>
    `;


    document.getElementById(
        "switchAuth"
    ).addEventListener(
        "click",
        showSignup
    );

}


/* ========================= */
/* SHOW SIGN UP */
/* ========================= */

function showSignup() {

    signinForm.style.display =
        "none";

    signupForm.style.display =
        "block";


    authTitle.textContent =
        "Create Your Account";


    switchText.innerHTML = `
        Already have an account?

        <button
            id="switchAuth"
            type="button"
        >
            Sign In
        </button>
    `;


    document.getElementById(
        "switchAuth"
    ).addEventListener(
        "click",
        showSignin
    );

}


/* ========================= */
/* CHECK URL MODE */
/* ========================= */

const params =
    new URLSearchParams(
        window.location.search
    );


const mode =
    params.get("mode");


if (mode === "signup") {

    showSignup();

}

else {

    showSignin();

}


/* ========================= */
/* SIGN IN */
/* ========================= */

signinForm.addEventListener(
    "submit",
    async (event) => {

        event.preventDefault();


        const email =
            document.getElementById(
                "signinEmail"
            ).value;


        const password =
            document.getElementById(
                "signinPassword"
            ).value;


        try {

            const response =
                await fetch(
                    "https://gyg-backend-hjbx.onrender.com/api/auth/signin",
                    {

                        method: "POST",

                        headers: {

                            "Content-Type":
                                "application/json"

                        },

                        body:
                            JSON.stringify({

                                email,
                                password

                            })

                    }
                );


            const data =
                await response.json();


            if (!response.ok) {

                alert(
                    data.message ||
                    "Sign in failed"
                );

                return;

            }


            /* SAVE TOKEN */

            localStorage.setItem(
                "token",
                data.token
            );


            /* SAVE USER */

            localStorage.setItem(
                "user",
                JSON.stringify(
                    data.user
                )
            );


            alert(
                "Signed in successfully!"
            );


            /* GO BACK TO WEBSITE */

            window.location.href =
                "index.html";

        }

        catch (error) {

            console.error(
                "Sign in error:",
                error
            );

            alert(
                "Unable to connect to server"
            );

        }

    }
);


/* ========================= */
/* SIGN UP */
/* ========================= */

signupForm.addEventListener(
    "submit",
    async (event) => {

        event.preventDefault();


        const username =
            document.getElementById(
                "signupUsername"
            ).value;


        const email =
            document.getElementById(
                "signupEmail"
            ).value;


        const password =
            document.getElementById(
                "signupPassword"
            ).value;


        try {

            const response =
                await fetch(
                    "https://gyg-backend-hjbx.onrender.com/api/auth/signup",
                    {

                        method: "POST",

                        headers: {

                            "Content-Type":
                                "application/json"

                        },

                        body:
                            JSON.stringify({

                                username,
                                email,
                                password

                            })

                    }
                );


            const data =
                await response.json();


            if (!response.ok) {

                alert(
                    data.message ||
                    "Sign up failed"
                );

                return;

            }


            alert(
                "Account created successfully! Please sign in."
            );


            /* SWITCH TO SIGN IN */

            showSignin();


            /* CLEAN URL */

            window.history.replaceState(
                {},
                "",
                "login.html"
            );

        }

        catch (error) {

            console.error(
                "Sign up error:",
                error
            );

            alert(
                "Unable to connect to server"
            );

        }

    }
);