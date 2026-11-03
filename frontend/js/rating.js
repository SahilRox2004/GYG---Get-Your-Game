const ratingSection =
    document.getElementById("userRatingSection");

const ratingForm =
    document.getElementById("userRatingForm");

const ratingInput =
    document.getElementById("userRatingInput");

const ratingValue =
    document.getElementById("userRatingValue");

const ratingMessage =
    document.getElementById("userRatingMessage");
const savedRatingDisplay =
    document.getElementById("userRatingSaved");

const ratingApiBase =
    "https://gyg-backend-hjbx.onrender.com/api/auth/ratings";

const ratingTestMode =
    new URLSearchParams(window.location.search)
        .get("ratingTest") === "1";

window.gygCurrentRating = null;

function updateRatingValue() {
    ratingValue.textContent =
        `${Number(ratingInput.value).toFixed(1)}/10`;
}

ratingInput.addEventListener("input", updateRatingValue);
updateRatingValue();

async function loadUserRating(game) {
    if (ratingTestMode) {
        const storedRating = localStorage.getItem(
            `gyg-test-rating-${game.id}`
        );

        window.gygCurrentRating = storedRating
            ? JSON.parse(storedRating)
            : { rating: 9 };

        ratingSection.hidden = false;
        ratingInput.value = window.gygCurrentRating.rating;
        updateRatingValue();
        ratingMessage.textContent = "Local preview mode.";
        window.dispatchEvent(new CustomEvent("gyg:rating-loaded"));
        return;
    }

    const token = localStorage.getItem("token");

    if (!token) {
        return;
    }

    ratingSection.hidden = false;

    const response = await fetch(
        `${ratingApiBase}/${encodeURIComponent(game.id)}`,
        {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
    );

    if (!response.ok) {
        throw new Error("Unable to load your rating");
    }

    const data = await response.json();
    window.gygCurrentRating = data.rating;

    if (data.rating) {
        ratingInput.value = data.rating.rating;
        updateRatingValue();
        savedRatingDisplay.textContent =
            `Saved rating: ${Number(data.rating.rating).toFixed(1)}/10`;
    }
}

window.addEventListener("gyg:game-loaded", event => {
    loadUserRating(event.detail).catch(error => {
        console.error("Rating loading error:", error);
        ratingMessage.textContent = "Your rating could not be loaded.";
    });
});

ratingForm.addEventListener("submit", async event => {
    event.preventDefault();

    const token = localStorage.getItem("token");

    if (!token && !ratingTestMode) {
        ratingMessage.textContent = "Please sign in to save a rating.";
        return;
    }

    if (!window.gygCurrentGame) {
        ratingMessage.textContent = "Game details are still loading.";
        return;
    }

    const savedRatingData = {
        rating: Number(ratingInput.value),
        gameTitle: window.gygCurrentGame.name,
        gameCover: window.gygCurrentGame.cover
    };

    if (ratingTestMode) {
        localStorage.setItem(
            `gyg-test-rating-${window.gygCurrentGame.id}`,
            JSON.stringify(savedRatingData)
        );
        window.gygCurrentRating = savedRatingData;
        ratingMessage.textContent = "Saved locally for template testing.";
        savedRatingDisplay.textContent =
            `Saved rating: ${Number(savedRatingData.rating).toFixed(1)}/10`;
        window.dispatchEvent(new CustomEvent("gyg:rating-loaded"));
        return;
    }

    ratingMessage.textContent = "Saving...";

    try {
        const response = await fetch(
            `${ratingApiBase}/${encodeURIComponent(window.gygCurrentGame.id)}`,
            {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                },
                body: JSON.stringify(savedRatingData)
            }
        );

        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.message || "Unable to save rating");
        }

        window.gygCurrentRating = data.rating;
        ratingMessage.textContent = "Rating saved.";
        savedRatingDisplay.textContent =
            `Saved rating: ${Number(data.rating.rating).toFixed(1)}/10`;
        window.dispatchEvent(new CustomEvent("gyg:rating-loaded"));
    }
    catch (error) {
        console.error("Rating save error:", error);
        ratingMessage.textContent = error.message;
    }
});
