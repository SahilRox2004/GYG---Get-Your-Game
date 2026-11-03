const shareStoryButton =
    document.getElementById("shareStoryButton");

const storyCanvasWidth = 1080;
const storyCanvasHeight = 1920;

function escapeStoryText(value) {
    return String(value)
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#039;");
}

function getStoryScreenshots(game) {
    const screenshots = Array.isArray(game.screenshots)
        ? game.screenshots.filter(Boolean)
        : [];
    const fallback = game.artworks?.[0] || game.cover;

    return [
        screenshots[0] || fallback,
        screenshots[1] || screenshots[0] || fallback,
        screenshots[2] || screenshots[1] || screenshots[0] || fallback
    ];
}

function isDarkPlatformLogo(source) {
    return [
        "apple.svg",
        "gamecube.svg",
        "xbox-one-3.svg",
        "ps3.svg",
        "ps4.svg",
        "ps5.svg",
        "psp.svg",
        "psvita.svg",
        "Sega-genesis.svg",
        "sega-saturn.svg"
    ].some(file => source.endsWith(file));
}

function getStoryRating(game) {
    return window.gygCurrentRating
        ? `${Number(window.gygCurrentRating.rating).toFixed(1)}/10`
        : game.rating
            ? `${(game.rating / 10).toFixed(1)}/10`
            : "Not yet rated";
}

function showStoryPreview(game) {
    let preview = document.getElementById("storyPreview");

    if (!preview) {
        preview = document.createElement("div");
        preview.id = "storyPreview";
        preview.hidden = true;
        document.body.appendChild(preview);
    }

    const platforms = Array.from(
        document.querySelectorAll("#platformContainer img")
    );

    preview.innerHTML = `
        <div class="storyPreviewCard">
            <button class="storyPreviewClose" type="button" aria-label="Close story preview">×</button>
            ${getStoryScreenshots(game).map((source, index) =>
                `<img class="storyPreviewBackground storyPreviewBackground${index + 1}" src="${escapeStoryText(source)}" alt="">`
            ).join("")}
            <div class="storyPreviewShade"></div>
            <div class="storyPreviewContent">
                <img class="storyPreviewCover" src="${escapeStoryText(game.cover)}" alt="${escapeStoryText(game.name)} cover">
                <h2 class="storyPreviewTitle">${escapeStoryText(game.name)}</h2>
                <div class="storyPreviewInfo">${
                    getStoryRating(game)
                } &nbsp;•&nbsp; ${formatStoryDate(game.release_date)}</div>
                <div class="storyPreviewPlatforms"></div>
                <img class="storyPreviewLogo" src="assets/logo.png" alt="GYG">
            </div>
            <div class="storyPreviewActions">
                <button class="storyPreviewShare" type="button">SHARE STORY</button>
            </div>
        </div>
    `;

    const platformPreview =
        preview.querySelector(".storyPreviewPlatforms");

    platforms.forEach(platform => {
        const image = document.createElement("img");
        image.src = platform.src;
        image.alt = platform.alt;
        image.classList.toggle(
            "isDarkPlatform",
            isDarkPlatformLogo(platform.src)
        );
        platformPreview.appendChild(image);
    });

    preview.querySelector(".storyPreviewClose").addEventListener(
        "click",
        () => {
            preview.hidden = true;
        }
    );

    preview.querySelector(".storyPreviewShare").addEventListener(
        "click",
        () => shareGeneratedStory(game)
    );

    preview.hidden = false;
}

function loadStoryImage(source) {
    return new Promise((resolve, reject) => {
        const image = new Image();
        image.crossOrigin = "anonymous";
        image.onload = () => resolve(image);
        image.onerror = () => reject(new Error(`Unable to load story image: ${source}`));
        image.src = source;
    });
}

function drawStoryImage(context, image, x, y, width, height, radius) {
    const scale = Math.max(width / image.width, height / image.height);
    const sourceWidth = width / scale;
    const sourceHeight = height / scale;
    const sourceX = (image.width - sourceWidth) / 2;
    const sourceY = (image.height - sourceHeight) / 2;

    context.save();
    context.beginPath();
    context.roundRect(x, y, width, height, radius);
    context.clip();
    context.drawImage(
        image,
        sourceX,
        sourceY,
        sourceWidth,
        sourceHeight,
        x,
        y,
        width,
        height
    );
    context.restore();
}

function fitStoryTitle(context, title, maxWidth) {
    let fontSize = 76;

    while (fontSize > 42) {
        context.font = `800 ${fontSize}px Arial`;

        if (context.measureText(title).width <= maxWidth) {
            break;
        }

        fontSize -= 2;
    }

    return fontSize;
}

function formatStoryDate(date) {
    if (!date) {
        return "Release date unknown";
    }

    const parsedDate = new Date(`${date}T00:00:00`);

    if (Number.isNaN(parsedDate.getTime())) {
        return "Release date unknown";
    }

    return parsedDate.toLocaleDateString(undefined, {
        day: "numeric",
        month: "long",
        year: "numeric"
    });
}

async function createStoryImage(game) {
    const canvas = document.createElement("canvas");
    canvas.width = storyCanvasWidth;
    canvas.height = storyCanvasHeight;

    const context = canvas.getContext("2d");
    const backgroundSources = getStoryScreenshots(game);

    const platformSources = Array.from(
        document.querySelectorAll("#platformContainer img")
    ).map(image => image.src);

    const [backgroundTop, backgroundMiddle, backgroundBottom, cover, logo, ...platformImages] =
        await Promise.all([
            ...backgroundSources.map(loadStoryImage),
            loadStoryImage(game.cover),
            loadStoryImage("assets/logo.png"),
            ...platformSources.map(loadStoryImage)
        ]);

    [
        [backgroundTop, 0],
        [backgroundMiddle, storyCanvasHeight / 3],
        [backgroundBottom, (storyCanvasHeight / 3) * 2]
    ].forEach(([image, y]) => {
        drawStoryImage(
            context,
            image,
            0,
            y,
            storyCanvasWidth,
            storyCanvasHeight / 3,
            0
        );
    });

    const backgroundGradient =
        context.createLinearGradient(0, 0, 0, storyCanvasHeight);

    backgroundGradient.addColorStop(0, "rgba(10, 5, 21, .05)");
    backgroundGradient.addColorStop(.45, "rgba(10, 5, 21, .22)");
    backgroundGradient.addColorStop(1, "rgba(10, 5, 21, .45)");
    context.fillStyle = backgroundGradient;
    context.fillRect(0, 0, storyCanvasWidth, storyCanvasHeight);

    context.fillStyle = "rgba(22, 11, 46, .14)";
    context.fillRect(92, 170, storyCanvasWidth - 184, 1580);
    context.strokeStyle = "rgba(155, 109, 255, .8)";
    context.lineWidth = 4;
    context.strokeRect(92, 170, storyCanvasWidth - 184, 1580);

    drawStoryImage(context, cover, 220, 280, 640, 820, 28);

    context.textAlign = "center";
    context.font = `800 ${fitStoryTitle(context, game.name, 840)}px Arial`;
    context.fillStyle = "#ffffff";
    context.shadowColor = "rgba(0, 0, 0, .9)";
    context.shadowBlur = 12;
    context.shadowOffsetX = 0;
    context.shadowOffsetY = 6;
    context.fillText(game.name, storyCanvasWidth / 2, 1240);

    const rating = getStoryRating(game);

    context.font = "700 42px Arial";
    context.fillStyle = "#D9C8FF";
    context.shadowBlur = 8;
    context.shadowOffsetY = 4;
    context.fillText(
        `${rating}  •  ${formatStoryDate(game.release_date)}`,
        storyCanvasWidth / 2,
        1325
    );

    const platformWidth = 94;
    const platformHeight = 64;
    const platformGap = 14;
    const platformStartX =
        (storyCanvasWidth -
            (platformImages.length * platformWidth) -
            ((platformImages.length - 1) * platformGap)) / 2;

    platformImages.forEach((platformImage, index) => {
        const x =
            platformStartX + index * (platformWidth + platformGap);

        context.fillStyle = "#ffffff";
        context.beginPath();
        context.roundRect(x, 1390, platformWidth, platformHeight, 10);
        context.fill();
        drawStoryImage(
            context,
            platformImage,
            x + 12,
            1402,
            platformWidth - 24,
            platformHeight - 24,
            0
        );
    });

    context.shadowBlur = 16;
    context.shadowOffsetY = 10;
    context.globalAlpha = .95;
    context.drawImage(logo, 390, 1590, 300, 105);
    context.globalAlpha = 1;
    context.shadowColor = "transparent";
    context.shadowBlur = 0;
    context.shadowOffsetY = 0;
    context.font = "600 30px Arial";
    context.fillStyle = "rgba(255,255,255,.72)";
    context.fillText(
        "Discover your next game with GYG",
        storyCanvasWidth / 2,
        1725
    );

    return new Promise((resolve, reject) => {
        canvas.toBlob(blob => {
            if (blob) {
                resolve(blob);
            }
            else {
                reject(new Error("Unable to create story image"));
            }
        }, "image/png");
    });
}

async function shareGameStory() {
    const game = window.gygCurrentGame;

    if (!game || !game.cover) {
        return;
    }

    shareStoryButton.disabled = true;
    showStoryPreview(game);
    shareStoryButton.disabled = false;
}

async function createStoryFile(game) {
    const blob = await createStoryImage(game);

    return new File(
        [blob],
        `${game.name.replace(/[^\w-]+/g, "-")}-GYG-story.png`,
        { type: "image/png" }
    );
}

function downloadStoryFile(file) {
    const link = document.createElement("a");
    link.href = URL.createObjectURL(file);
    link.download = file.name;
    link.click();
    URL.revokeObjectURL(link.href);
}

async function shareGeneratedStory(game) {
    const previewShare =
        document.querySelector(".storyPreviewShare");

    if (previewShare) {
        previewShare.disabled = true;
        previewShare.textContent = "CREATING STORY...";
    }

    try {
        const file = await createStoryFile(game);

        if (
            navigator.share &&
            navigator.canShare &&
            navigator.canShare({ files: [file] })
        ) {
            await navigator.share({
                title: `${game.name} - GYG`,
                text: `Check out ${game.name} on GYG.`,
                files: [file]
            });
        }
        else {
            downloadStoryFile(file);
        }
    }
    catch (error) {
        if (error.name !== "AbortError") {
            console.error("Story sharing failed:", error);
            window.alert(
                "The story preview is ready, but the image could not be shared. Try downloading it again."
            );
        }
    }
    finally {
        if (previewShare) {
            previewShare.disabled = false;
            previewShare.textContent = "SHARE STORY";
        }
    }
}

shareStoryButton.addEventListener(
    "click",
    shareGameStory
);
