const token = localStorage.getItem("token");
const profileUsername = document.getElementById("profileUsername");
const profileEmail = document.getElementById("profileEmail");
const favouritesCount = document.getElementById("favouritesCount");
const favouritesGrid = document.getElementById("favouritesGrid");
const favouritesMessage = document.getElementById("favouritesMessage");
const wishlistCount = document.getElementById("wishlistCount");
const wishlistGrid = document.getElementById("wishlistGrid");
const wishlistMessage = document.getElementById("wishlistMessage");

if (!token) {

    window.location.href = "login.html?mode=signin";

} else {

    loadProfile();

}

async function loadProfile() {

    try {

        const response = await fetch(
            "http://localhost:5000/api/auth/profile",
            {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
        );

        const data = await response.json();

        if (!response.ok) {

            throw new Error(data.message || "Unable to load profile");

        }

        profileUsername.textContent = data.user.username;
        profileEmail.textContent = data.user.email;

        const favourites = data.user.favourites || [];
        const wishlist = data.user.wishlist || [];

        favouritesGrid.innerHTML = "";
        wishlistGrid.innerHTML = "";
        favouritesMessage.textContent = "";
        wishlistMessage.textContent = "";

        favouritesCount.textContent = favourites.length;
        wishlistCount.textContent = wishlist.length;

        if (!favourites.length) {

            favouritesMessage.textContent = "No favourites added yet.";

        } else {

            favouritesGrid.innerHTML = renderGames(
                favourites,
                "favourites"
            );

        }

        if (!wishlist.length) {

            wishlistMessage.textContent = "No games added to your wishlist yet.";

        } else {

            wishlistGrid.innerHTML = renderGames(
                wishlist,
                "wishlist"
            );

        }

        document.querySelectorAll(".removeGameButton").forEach(button => {
            button.addEventListener("click", removeGame);
        });

    } catch (error) {

        console.error("Profile error:", error);
        favouritesMessage.textContent = error.message;

    }

}

function escapeHtml(value) {

    return value.replace(/[&<>'"]/g, character => ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        "'": "&#39;",
        '"': "&quot;"
    }[character]));

}

function renderGames(games, listType) {

    return games.map(game => `
        <article class="platformGameCard favouriteCard">
            <a href="game.html?id=${encodeURIComponent(game.gameId)}" class="favouriteLink">
                <img src="${game.cover || "assets/logo.png"}" alt="${escapeHtml(game.title || "Untitled game")}" loading="lazy">
                <div class="platformCardInfo">
                    <h3>${escapeHtml(game.title || "Untitled game")}</h3>
                    <div class="platformGameMeta"><span>${listType === "wishlist" ? "Wishlist" : "Favourite"}</span></div>
                </div>
            </a>
            <button class="removeGameButton" type="button" data-game-id="${game.gameId}" data-list="${listType}">Remove</button>
        </article>
    `).join("");

}

async function removeGame(event) {

    const button = event.currentTarget;
    const gameId = button.dataset.gameId;
    const listType = button.dataset.list;

    const listName =
        listType === "wishlist"
            ? "wishlist"
            : "favourites";

    if (!window.confirm(`Remove this game from your ${listName}?`)) {

        return;

    }

    try {

        const response = await fetch(
            `http://localhost:5000/api/auth/favourites/${encodeURIComponent(gameId)}?list=${listType}`,
            {
                method: "DELETE",
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
        );

        const data = await response.json();

        if (!response.ok) {

            throw new Error(data.message || "Unable to remove game");

        }

        await loadProfile();

    } catch (error) {

        console.error("Remove game error:", error);
        alert(error.message);

    }

}