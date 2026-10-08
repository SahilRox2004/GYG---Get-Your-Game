const platformHardwareTimelines = {
    playstation: {
        sourceLabel: "PlayStation model history",
        sourceUrl: "https://en.wikipedia.org/wiki/PlayStation_(console)",
        models: [
            {
                name: "Original PlayStation",
                date: "September 1995",
                price: "$299.99",
                changes: "Introduced Sony's first console with CD-based games and 3D graphics.",
                sourceUrl: "https://en.wikipedia.org/wiki/PlayStation_(console)"
            },
            {
                name: "PS one",
                image: "assets/platform-images/models/playstation-ps-one.webp",
                date: "September 2000",
                price: "$99.99",
                changes: "A much smaller, rounded redesign; compatible with the original PlayStation library.",
                sourceUrl: "https://en.wikipedia.org/wiki/PS_one"
            }
        ]
    },
    "playstation 2": {
        sourceLabel: "PlayStation 2 model history",
        sourceUrl: "https://en.wikipedia.org/wiki/PlayStation_2",
        models: [
            {
                name: "Original (Fat)",
                image: "assets/platform-images/models/playstation-2-fat.webp",
                date: "October 2000",
                price: "$299.99",
                changes: "Full-size launch model with DVD playback and backward compatibility with most PlayStation games.",
                sourceUrl: "https://en.wikipedia.org/wiki/PlayStation_2"
            },
            {
                name: "Slim",
                date: "October 2004",
                price: "$149.99",
                changes: "Substantially smaller and lighter, with a built-in Ethernet port; the internal hard-drive bay was removed.",
                sourceUrl: "https://en.wikipedia.org/wiki/PlayStation_2"
            }
        ]
    },
    "playstation 3": {
        sourceLabel: "PlayStation 3 model history",
        sourceUrl: "https://en.wikipedia.org/wiki/PlayStation_3",
        models: [
            {
                name: "Original (Fat)",
                date: "November 2006",
                price: "$499.99 (20 GB) / $599.99 (60 GB)",
                changes: "Launch design; early 60 GB models included additional PlayStation 2 hardware for backward compatibility.",
                sourceUrl: "https://en.wikipedia.org/wiki/PlayStation_3"
            },
            {
                name: "Slim",
                image: "assets/platform-images/models/playstation-3-slim.webp",
                date: "September 2009",
                price: "$299.99",
                changes: "Smaller, lighter, and more power-efficient. Removed PlayStation 2 game compatibility and the OtherOS feature.",
                sourceUrl: "https://en.wikipedia.org/wiki/PlayStation_3"
            },
            {
                name: "Super Slim",
                image: "assets/platform-images/models/playstation-3-super-slim.webp",
                date: "September 2012",
                price: "$269.99 (250 GB)",
                changes: "A further smaller, lighter revision with a sliding disc cover instead of a motorized slot-loading drive.",
                sourceUrl: "https://en.wikipedia.org/wiki/PlayStation_3"
            }
        ]
    },
    "playstation 4": {
        sourceLabel: "PlayStation 4 model history",
        sourceUrl: "https://en.wikipedia.org/wiki/PlayStation_4",
        models: [
            {
                name: "Original",
                image: "assets/platform-images/models/playstation-4-original.webp",
                date: "November 2013",
                price: "$399.99",
                changes: "Original PS4 hardware with an 8-core AMD CPU and a 500 GB hard drive.",
                sourceUrl: "https://en.wikipedia.org/wiki/PlayStation_4"
            },
            {
                name: "Slim",
                date: "September 2016",
                price: "$299.99",
                changes: "Smaller, quieter, and more power-efficient; retained the original PS4 performance.",
                sourceUrl: "https://en.wikipedia.org/wiki/PlayStation_4"
            },
            {
                name: "Pro",
                date: "November 2016",
                price: "$399.99",
                changes: "Added a faster GPU and 4K output for enhanced games; did not include a 4K Blu-ray drive.",
                sourceUrl: "https://en.wikipedia.org/wiki/PlayStation_4"
            }
        ]
    },
    "playstation 5": {
        sourceLabel: "PlayStation 5 model history",
        sourceUrl: "https://en.wikipedia.org/wiki/PlayStation_5",
        models: [
            {
                name: "Original",
                image: "assets/platform-images/models/playstation-5-original.webp",
                date: "November 2020",
                price: "$499.99 (disc) / $399.99 (digital)",
                changes: "Launch models offered a 4K Blu-ray drive or an all-digital configuration.",
                sourceUrl: "https://en.wikipedia.org/wiki/PlayStation_5"
            },
            {
                name: "Slim",
                image: "assets/platform-images/models/playstation-5-slim.webp",
                date: "November 2023",
                price: "$499.99 (disc) / $449.99 (digital)",
                changes: "Smaller chassis and a detachable disc drive; the digital model can add the drive later.",
                sourceUrl: "https://en.wikipedia.org/wiki/PlayStation_5"
            },
            {
                name: "Pro",
                image: "assets/platform-images/models/playstation-5-pro.webp",
                date: "November 2024",
                price: "$699.99",
                changes: "Upgraded GPU, AI-assisted upscaling, and a 2 TB SSD; disc drive sold separately.",
                sourceUrl: "https://en.wikipedia.org/wiki/PlayStation_5_Pro"
            }
        ]
    },
    "playstation portable": {
        sourceLabel: "PlayStation Portable model history",
        sourceUrl: "https://en.wikipedia.org/wiki/PlayStation_Portable",
        models: [
            {
                name: "PSP-1000",
                image: "assets/platform-images/models/psp-1000.webp",
                date: "March 2005",
                price: "$249.99",
                changes: "Original handheld with a UMD drive, Wi-Fi, and a 4.3-inch display.",
                sourceUrl: "https://en.wikipedia.org/wiki/PlayStation_Portable"
            },
            {
                name: "PSP-2000",
                image: "assets/platform-images/models/psp-2000.webp",
                date: "September 2007",
                price: "$169.99",
                changes: "About a third thinner and lighter, with twice the memory and video output; reduced battery capacity.",
                sourceUrl: "https://en.wikipedia.org/wiki/PlayStation_Portable"
            },
            {
                name: "PSP-3000",
                date: "October 2008",
                price: "$169.99",
                changes: "Improved LCD with richer color and an anti-reflective treatment; retained the UMD drive.",
                sourceUrl: "https://en.wikipedia.org/wiki/PlayStation_Portable"
            },
            {
                name: "PSP Go",
                date: "October 2009",
                price: "$249.99",
                changes: "Compact sliding design with built-in storage and Bluetooth; removed the UMD drive.",
                sourceUrl: "https://en.wikipedia.org/wiki/PlayStation_Portable"
            }
        ]
    },
    "playstation vita": {
        sourceLabel: "PlayStation Vita model history",
        sourceUrl: "https://en.wikipedia.org/wiki/PlayStation_Vita",
        models: [
            {
                name: "PCH-1000",
                date: "February 2012",
                price: "$249.99 (Wi-Fi) / $299.99 (3G)",
                changes: "Original model with an OLED display, dual analog sticks, and front and rear touch controls.",
                sourceUrl: "https://en.wikipedia.org/wiki/PlayStation_Vita"
            },
            {
                name: "PCH-2000 (Slim)",
                date: "May 2014",
                price: "$199.99",
                changes: "Thinner and lighter with longer battery life and 1 GB built-in storage; replaced OLED with LCD.",
                sourceUrl: "https://en.wikipedia.org/wiki/PlayStation_Vita"
            }
        ]
    },
    "xbox 360": {
        sourceLabel: "Xbox 360 model history",
        sourceUrl: "https://en.wikipedia.org/wiki/Xbox_360",
        models: [
            {
                name: "Original",
                image: "assets/platform-images/models/xbox-360-original.webp",
                date: "November 2005",
                price: "$299.99 (Core) / $399.99 (Premium)",
                changes: "Launch design with interchangeable faceplates and a removable hard drive on the Premium model.",
                sourceUrl: "https://en.wikipedia.org/wiki/Xbox_360"
            },
            {
                name: "S",
                image: "assets/platform-images/models/xbox-360-s.webp",
                date: "June 2010",
                price: "$299.99 (250 GB)",
                changes: "Smaller, quieter case with built-in Wi-Fi and a larger hard drive; removed the memory-card slots.",
                sourceUrl: "https://en.wikipedia.org/wiki/Xbox_360"
            },
            {
                name: "E",
                image: "assets/platform-images/models/xbox-360-e.webp",
                date: "June 2013",
                price: "$199.99 (4 GB)",
                changes: "Updated case styling to match Xbox One; removed the optical audio output.",
                sourceUrl: "https://en.wikipedia.org/wiki/Xbox_360"
            }
        ]
    },
    "xbox one": {
        sourceLabel: "Xbox One model history",
        sourceUrl: "https://en.wikipedia.org/wiki/Xbox_One",
        models: [
            {
                name: "Original",
                image: "assets/platform-images/models/xbox-one-original.webp",
                date: "November 2013",
                price: "$499.99",
                changes: "Launch console bundled with Kinect; Kinect was later removed from the standard package.",
                sourceUrl: "https://en.wikipedia.org/wiki/Xbox_One"
            },
            {
                name: "S",
                date: "August 2016",
                price: "$399.99 (2 TB launch model)",
                changes: "Smaller case with an internal power supply and 4K video output; added HDR support and removed the Kinect port.",
                sourceUrl: "https://en.wikipedia.org/wiki/Xbox_One"
            },
            {
                name: "X",
                date: "November 2017",
                price: "$499.99",
                changes: "More powerful GPU and memory for enhanced 4K games; compatible with the Xbox One library.",
                sourceUrl: "https://en.wikipedia.org/wiki/Xbox_One"
            }
        ]
    },
    "xbox series x s": {
        sourceLabel: "Xbox Series X|S model history",
        sourceUrl: "https://en.wikipedia.org/wiki/Xbox_Series_X_and_Series_S",
        models: [
            {
                name: "Series S",
                date: "November 2020",
                price: "$299.99",
                changes: "Compact, all-digital system with lower-cost hardware and no disc drive.",
                sourceUrl: "https://en.wikipedia.org/wiki/Xbox_Series_X_and_Series_S"
            },
            {
                name: "Series X",
                date: "November 2020",
                price: "$499.99",
                changes: "Higher-performance model with a 4K Blu-ray drive and greater graphics capability.",
                sourceUrl: "https://en.wikipedia.org/wiki/Xbox_Series_X_and_Series_S"
            },
            {
                name: "Series S (1 TB)",
                date: "September 2023",
                price: "$349.99",
                changes: "Doubled internal storage and added a black color option; remained an all-digital model.",
                sourceUrl: "https://en.wikipedia.org/wiki/Xbox_Series_X_and_Series_S"
            }
        ]
    },
    "nintendo entertainment system": {
        sourceLabel: "Nintendo Entertainment System model history",
        sourceUrl: "https://en.wikipedia.org/wiki/Nintendo_Entertainment_System",
        models: [
            {
                name: "NES (front-loader)",
                date: "October 1985",
                price: "$179.99 (Deluxe Set)",
                changes: "North American launch design with a front-loading cartridge bay and lockout chip.",
                sourceUrl: "https://en.wikipedia.org/wiki/Nintendo_Entertainment_System"
            },
            {
                name: "NES-101 (top-loader)",
                image: "assets/platform-images/models/nes-101.webp",
                date: "October 1993",
                price: "$49.99",
                changes: "Simpler, smaller top-loading redesign; removed composite video output and the power/reset LED.",
                sourceUrl: "https://en.wikipedia.org/wiki/Nintendo_Entertainment_System"
            }
        ]
    },
    "super nintendo entertainment system": {
        sourceLabel: "Super Nintendo model history",
        sourceUrl: "https://en.wikipedia.org/wiki/Super_Nintendo_Entertainment_System",
        models: [
            {
                name: "Original",
                date: "August 1991",
                price: "$199.99",
                changes: "Original North American design, bundled with a controller and Super Mario World.",
                sourceUrl: "https://en.wikipedia.org/wiki/Super_Nintendo_Entertainment_System"
            },
            {
                name: "SNS-101 (SNES Jr.)",
                date: "October 1997",
                price: "$99.95",
                changes: "Smaller, lower-cost redesign; removed S-Video and RGB output support.",
                sourceUrl: "https://en.wikipedia.org/wiki/Super_Nintendo_Entertainment_System"
            }
        ]
    },
    "nintendo gamecube": {
        sourceLabel: "Nintendo GameCube model history",
        sourceUrl: "https://en.wikipedia.org/wiki/GameCube",
        models: [
            {
                name: "Original (DOL-001)",
                date: "November 2001",
                price: "$199.99",
                changes: "Launch model with both analog and digital AV outputs and support for the Game Boy Player accessory.",
                sourceUrl: "https://en.wikipedia.org/wiki/GameCube"
            },
            {
                name: "Revised (DOL-101)",
                date: "2004",
                price: "$99.99",
                changes: "Removed the digital AV output; retained GameCube game and accessory compatibility.",
                sourceUrl: "https://en.wikipedia.org/wiki/GameCube"
            }
        ]
    },
    wii: {
        sourceLabel: "Wii model history",
        sourceUrl: "https://en.wikipedia.org/wiki/Wii",
        models: [
            {
                name: "Original",
                image: "assets/platform-images/models/wii-original.webp",
                date: "November 2006",
                price: "$249.99",
                changes: "Original design with GameCube game and controller support.",
                sourceUrl: "https://en.wikipedia.org/wiki/Wii"
            },
            {
                name: "Family Edition",
                date: "October 2011",
                price: "$149.99",
                changes: "Designed to sit horizontally; removed GameCube compatibility and ports.",
                sourceUrl: "https://en.wikipedia.org/wiki/Wii"
            },
            {
                name: "Wii Mini",
                image: "assets/platform-images/models/wii-mini.webp",
                date: "December 2012",
                price: "$99.99",
                changes: "Top-loading, budget redesign; removed internet connectivity, SD support, and GameCube compatibility.",
                sourceUrl: "https://en.wikipedia.org/wiki/Wii"
            }
        ]
    },
    "nintendo switch": {
        sourceLabel: "Nintendo Switch model history",
        sourceUrl: "https://en.wikipedia.org/wiki/Nintendo_Switch",
        models: [
            {
                name: "Original",
                image: "assets/platform-images/models/switch-original.webp",
                date: "March 2017",
                price: "$299.99",
                changes: "Hybrid home and handheld console with detachable Joy-Con controllers.",
                sourceUrl: "https://en.wikipedia.org/wiki/Nintendo_Switch"
            },
            {
                name: "Lite",
                date: "September 2019",
                price: "$199.99",
                changes: "Smaller handheld-only model with integrated controls; cannot connect to a TV and has no detachable Joy-Con.",
                sourceUrl: "https://en.wikipedia.org/wiki/Nintendo_Switch_Lite"
            },
            {
                name: "OLED",
                date: "October 2021",
                price: "$349.99",
                changes: "Larger OLED display, improved stand, wired LAN in the dock, and 64 GB storage; same game performance as the original.",
                sourceUrl: "https://en.wikipedia.org/wiki/Nintendo_Switch_(OLED_model)"
            }
        ]
    },
    "game boy": {
        sourceLabel: "Game Boy family model history",
        sourceUrl: "https://en.wikipedia.org/wiki/Game_Boy",
        models: [
            {
                name: "Game Boy",
                image: "assets/platform-images/models/game-boy-original.webp",
                date: "July 1989",
                price: "$89.95",
                changes: "Original monochrome handheld with interchangeable cartridges.",
                sourceUrl: "https://en.wikipedia.org/wiki/Game_Boy"
            },
            {
                name: "Game Boy Pocket",
                image: "assets/platform-images/models/game-boy-pocket.webp",
                date: "September 1996",
                price: "$69.99",
                changes: "Smaller and lighter with a sharper screen; removed the original's green-tinted display.",
                sourceUrl: "https://en.wikipedia.org/wiki/Game_Boy"
            },
            {
                name: "Game Boy Color",
                date: "November 1998",
                price: "$69.99",
                changes: "Added a color display and more memory while retaining compatibility with original Game Boy games.",
                sourceUrl: "https://en.wikipedia.org/wiki/Game_Boy_Color"
            }
        ]
    },
    "game boy advance": {
        sourceLabel: "Game Boy Advance model history",
        sourceUrl: "https://en.wikipedia.org/wiki/Game_Boy_Advance",
        models: [
            {
                name: "Original",
                image: "assets/platform-images/models/game-boy-advance-original.webp",
                date: "June 2001",
                price: "$99.99",
                changes: "Landscape handheld with a 32-bit processor and backward compatibility with Game Boy games.",
                sourceUrl: "https://en.wikipedia.org/wiki/Game_Boy_Advance"
            },
            {
                name: "SP",
                image: "assets/platform-images/models/game-boy-advance-sp.webp",
                date: "March 2003",
                price: "$99.99",
                changes: "Clamshell design with a rechargeable battery and front-lit screen; removed the headphone jack.",
                sourceUrl: "https://en.wikipedia.org/wiki/Game_Boy_Advance_SP"
            },
            {
                name: "SP (AGS-101)",
                date: "September 2005",
                price: "$79.99",
                changes: "Replaced the front light with a brighter, switchable backlit screen.",
                sourceUrl: "https://en.wikipedia.org/wiki/Game_Boy_Advance_SP"
            },
            {
                name: "Micro",
                date: "September 2005",
                price: "$99.99",
                changes: "Ultra-compact design with a bright screen and interchangeable faceplates; removed Game Boy and Game Boy Color compatibility.",
                sourceUrl: "https://en.wikipedia.org/wiki/Game_Boy_Micro"
            }
        ]
    },
    "nintendo ds": {
        sourceLabel: "Nintendo DS family model history",
        sourceUrl: "https://en.wikipedia.org/wiki/Nintendo_DS",
        models: [
            {
                name: "Original",
                image: "assets/platform-images/models/nintendo-ds-original.webp",
                date: "November 2004",
                price: "$149.99",
                changes: "Introduced dual screens, touch input, and a built-in microphone.",
                sourceUrl: "https://en.wikipedia.org/wiki/Nintendo_DS"
            },
            {
                name: "DS Lite",
                image: "assets/platform-images/models/nintendo-ds-lite.webp",
                date: "June 2006",
                price: "$129.99",
                changes: "Smaller, lighter, and brighter, with improved battery life.",
                sourceUrl: "https://en.wikipedia.org/wiki/Nintendo_DS_Lite"
            },
            {
                name: "DSi",
                image: "assets/platform-images/models/nintendo-dsi.webp",
                date: "April 2009",
                price: "$169.99",
                changes: "Added cameras, SD storage, and downloadable software; removed the Game Boy Advance cartridge slot.",
                sourceUrl: "https://en.wikipedia.org/wiki/Nintendo_DSi"
            },
            {
                name: "DSi XL",
                image: "assets/platform-images/models/nintendo-dsi-xl.webp",
                date: "March 2010",
                price: "$189.99",
                changes: "Larger screens and a larger stylus; retained the DSi's software and compatibility limits.",
                sourceUrl: "https://en.wikipedia.org/wiki/Nintendo_DSi"
            }
        ]
    },
    "nintendo 3ds": {
        sourceLabel: "Nintendo 3DS family model history",
        sourceUrl: "https://en.wikipedia.org/wiki/Nintendo_3DS",
        models: [
            {
                name: "Original",
                image: "assets/platform-images/models/nintendo-3ds-original.webp",
                date: "March 2011",
                price: "$249.99",
                changes: "Introduced glasses-free stereoscopic 3D and backward compatibility with most Nintendo DS games.",
                sourceUrl: "https://en.wikipedia.org/wiki/Nintendo_3DS"
            },
            {
                name: "3DS XL",
                date: "August 2012",
                price: "$199.99",
                changes: "Larger screens and a larger battery; retained the original's processing performance.",
                sourceUrl: "https://en.wikipedia.org/wiki/Nintendo_3DS"
            },
            {
                name: "2DS",
                date: "October 2013",
                price: "$129.99",
                changes: "Lower-cost, slate-shaped model; removed the stereoscopic 3D display and clamshell hinge.",
                sourceUrl: "https://en.wikipedia.org/wiki/Nintendo_2DS"
            },
            {
                name: "New 3DS XL",
                date: "February 2015",
                price: "$199.99",
                changes: "Added a faster processor, C Stick, extra shoulder buttons, and improved face-tracked 3D.",
                sourceUrl: "https://en.wikipedia.org/wiki/New_Nintendo_3DS"
            },
            {
                name: "New 2DS XL",
                date: "July 2017",
                price: "$149.99",
                changes: "Combined the New 3DS performance upgrades with a clamshell design, without stereoscopic 3D.",
                sourceUrl: "https://en.wikipedia.org/wiki/New_Nintendo_2DS_XL"
            }
        ]
    },
    "sega genesis": {
        sourceLabel: "Sega Genesis model history",
        sourceUrl: "https://en.wikipedia.org/wiki/Sega_Genesis",
        models: [
            {
                name: "Original (Model 1)",
                date: "August 1989",
                price: "$189.99",
                changes: "Original North American design with a front headphone jack and volume control.",
                sourceUrl: "https://en.wikipedia.org/wiki/Sega_Genesis"
            },
            {
                name: "Model 2",
                date: "1993",
                price: "$129.99",
                changes: "Smaller case with a redesigned audio/video connector; retained compatibility with most Genesis accessories.",
                sourceUrl: "https://en.wikipedia.org/wiki/Sega_Genesis"
            },
            {
                name: "Genesis 3",
                date: "1998",
                price: "$49.99",
                changes: "Compact budget redesign; removed support for Sega CD and 32X add-ons.",
                sourceUrl: "https://en.wikipedia.org/wiki/Sega_Genesis"
            }
        ]
    },
    "atari 2600": {
        sourceLabel: "Atari 2600 model history",
        sourceUrl: "https://en.wikipedia.org/wiki/Atari_2600",
        models: [
            {
                name: "Original woodgrain (VCS)",
                date: "September 1977",
                price: "$199.95",
                changes: "Original six-switch console, launched as the Atari Video Computer System.",
                sourceUrl: "https://en.wikipedia.org/wiki/Atari_2600"
            },
            {
                name: "2600 Jr.",
                image: "assets/platform-images/models/atari-2600-jr.webp",
                date: "1986",
                price: "$49.99",
                changes: "Smaller, lower-cost redesign with updated styling; played the established Atari 2600 cartridge library.",
                sourceUrl: "https://en.wikipedia.org/wiki/Atari_2600"
            }
        ]
    },
    "atari lynx": {
        sourceLabel: "Atari Lynx model history",
        sourceUrl: "https://en.wikipedia.org/wiki/Atari_Lynx",
        models: [
            {
                name: "Lynx I",
                image: "assets/platform-images/models/atari-lynx-1.webp",
                date: "September 1989",
                price: "$189.95",
                changes: "Original color handheld with a backlit display and ambidextrous controls.",
                sourceUrl: "https://en.wikipedia.org/wiki/Atari_Lynx"
            },
            {
                name: "Lynx II",
                date: "July 1991",
                price: "$99.99",
                changes: "Smaller and lighter with improved battery life, a clearer display, and a backlight power switch.",
                sourceUrl: "https://en.wikipedia.org/wiki/Atari_Lynx"
            }
        ]
    },
    "3do interactive multiplayer": {
        sourceLabel: "3DO hardware model history",
        sourceUrl: "https://en.wikipedia.org/wiki/3DO_Interactive_Multiplayer",
        models: [
            {
                name: "Panasonic FZ-1",
                date: "October 1993",
                price: "$699.99",
                changes: "Panasonic's original front-loading 3DO model; the high price reflected its advanced multimedia hardware.",
                sourceUrl: "https://en.wikipedia.org/wiki/3DO_Interactive_Multiplayer"
            },
            {
                name: "Panasonic FZ-10",
                date: "November 1994",
                price: "$399.99",
                changes: "Smaller, less expensive top-loading redesign with an integrated disc lid.",
                sourceUrl: "https://en.wikipedia.org/wiki/3DO_Interactive_Multiplayer"
            }
        ]
    }
};

const platformHardwareTimelineAliases = {
    "playstation 1": "playstation",
    ps1: "playstation",
    "ps one": "playstation",
    ps2: "playstation 2",
    ps3: "playstation 3",
    ps4: "playstation 4",
    ps5: "playstation 5",
    psp: "playstation portable",
    "ps vita": "playstation vita",
    "vita": "playstation vita",
    "xbox 360": "xbox 360",
    "xbox one": "xbox one",
    "xbox series x s": "xbox series x s",
    "xbox series x|s": "xbox series x s",
    nes: "nintendo entertainment system",
    "super nes": "super nintendo entertainment system",
    snes: "super nintendo entertainment system",
    gamecube: "nintendo gamecube",
    "game boy color": "game boy",
    gbc: "game boy",
    gba: "game boy advance",
    "nintendo dsi": "nintendo ds",
    dsi: "nintendo ds",
    "nintendo dsi xl": "nintendo ds",
    "nintendo 3ds xl": "nintendo 3ds",
    "new nintendo 3ds": "nintendo 3ds",
    "new nintendo 3ds xl": "nintendo 3ds",
    "new nintendo 2ds xl": "nintendo 3ds",
    "sega mega drive": "sega genesis",
    "atari vcs": "atari 2600",
    "3do": "3do interactive multiplayer",
    "commodore 64": "commodore 64",
    "commodore 64 games": "commodore 64"
};

function renderPlatformHardwareTimeline(platformName) {
    const section = document.getElementById("platformHardwareTimeline");
    const track = document.getElementById("platformTimelineTrack");

    if (!section || !track || !platformName) {
        return;
    }

    const timeline = [platformName, platform]
        .filter(Boolean)
        .map(name => name
            .trim()
            .toLowerCase()
            .replace(/[^a-z0-9]+/g, " ")
            .trim())
        .map(name => platformHardwareTimelineAliases[name] || name)
        .map(name => platformHardwareTimelines[name])
        .find(Boolean);

    track.replaceChildren();

    if (!timeline || timeline.models.length < 2) {
        section.hidden = true;
        return;
    }

    timeline.models.forEach((model, index) => {
        const card = document.createElement("article");
        card.className = "platformTimelineCard";
        card.tabIndex = 0;

        const marker = document.createElement("span");
        marker.className = "platformTimelineMarker";
        marker.setAttribute("aria-hidden", "true");

        const modelNumber = document.createElement("span");
        modelNumber.className = "platformTimelineNumber";
        modelNumber.textContent = `MODEL ${String(index + 1).padStart(2, "0")}`;

        const name = document.createElement("h3");
        name.textContent = model.name;

        const date = document.createElement("p");
        date.className = "platformTimelineDate";
        date.textContent = model.date;

        const details = document.createElement("div");
        details.className = "platformTimelineDetails";

        const priceLabel = document.createElement("span");
        priceLabel.className = "platformTimelineDetailLabel";
        priceLabel.textContent = "US LAUNCH MSRP";

        const price = document.createElement("strong");
        price.className = "platformTimelinePrice";
        price.textContent = model.price;

        const changesLabel = document.createElement("span");
        changesLabel.className = "platformTimelineDetailLabel";
        changesLabel.textContent = "UPGRADES & TRADE-OFFS";

        const changes = document.createElement("p");
        changes.className = "platformTimelineChanges";
        changes.textContent = model.changes;

        const source = document.createElement("a");
        source.className = "platformTimelineSource";
        source.href = model.sourceUrl || timeline.sourceUrl;
        source.target = "_blank";
        source.rel = "noopener noreferrer";
        source.textContent = `Source: ${timeline.sourceLabel}`;

        details.append(priceLabel, price, changesLabel, changes, source);
        card.append(marker, modelNumber, name, date, details);
        track.appendChild(card);
    });

    section.hidden = false;
}
