const {
    queryIGDB,
    getCoverUrl,
    getBackgroundUrl
} = require("../services/igdbService");


/* ========================= */
/* PLATFORM MAP */
/* ========================= */

const platformMap = {

    "pc": {

        id: 6,

        name: "PC",

        manufacturer:
            "Various manufacturers",

        releaseDate:
            "1970s",

        predecessor:
            "Early personal computers",

        successor:
            "Modern PC Gaming",

        heroDescription:
            "The most open and versatile gaming platform, constantly evolving alongside technology and giving players access to generations of games.",

        summary:
            "PC gaming developed alongside the rise of the personal computer. Unlike traditional consoles, it is not defined by a single manufacturer or hardware generation. Its open ecosystem has allowed games from different eras, genres and developers to coexist, while advances in graphics, processors and online technology continue to push the platform forward."

    },


    /* ========================= */
    /* PLAYSTATION */
    /* ========================= */

    "playstation": {

        id: 7,

        name: "PlayStation",

        manufacturer:
            "Sony Interactive Entertainment",

        releaseDate:
            "December 3, 1994",

            generationStart: "1994-12-03",
generationEnd: "2000-03-03",

        predecessor:
            "None",

        successor:
            "PlayStation 2",

        heroDescription:
            "Sony's first entry into the console market, the original PlayStation helped redefine gaming through 3D graphics, cinematic experiences and the move to CD-based games.",

        summary:
            "The original PlayStation was Sony's first home video game console and marked the company's entry into the gaming industry. Released in 1994, it emerged during the transition from sprite-based games to fully realized 3D worlds. The system used CD-ROM technology, giving developers significantly more storage space and helping create larger, more cinematic games. Its success established PlayStation as one of the major names in the gaming industry and laid the foundation for every PlayStation console that followed."

    },


    /* ========================= */
    /* PLAYSTATION 2 */
    /* ========================= */

    "playstation 2": {

        id: 8,

        name: "PlayStation 2",

        manufacturer:
            "Sony Interactive Entertainment",

        releaseDate:
            "March 4, 2000",

            generationStart: "2000-03-04",
generationEnd: "2006-11-10",

        predecessor:
            "PlayStation",

        successor:
            "PlayStation 3",

        heroDescription:
            "The PlayStation 2 expanded on Sony's original console and became home to one of the most influential libraries in gaming history.",

        summary:
            "Released in 2000, the PlayStation 2 succeeded Sony's original PlayStation and introduced more powerful hardware designed for increasingly ambitious 3D games. The console also included DVD playback, helping it become a major entertainment device beyond gaming. Its enormous library covered nearly every genre and included many of the most influential games of its generation. The PlayStation 2 went on to become the best-selling home video game console of all time."

    },


    /* ========================= */
    /* PLAYSTATION 3 */
    /* ========================= */

    "playstation 3": {

        id: 9,

        name: "PlayStation 3",

        manufacturer:
            "Sony Interactive Entertainment",

        releaseDate:
            "November 11, 2006",

        generationStart: "2006-11-11",
        generationEnd: "2013-11-14",

        predecessor:
            "PlayStation 2",

        successor:
            "PlayStation 4",

        heroDescription:
            "A powerful high-definition console that introduced Blu-ray gaming and pushed PlayStation into the era of online services and cinematic experiences.",

        summary:
            "The PlayStation 3 was Sony's third major home console and succeeded the PlayStation 2. Released during the transition to high-definition gaming, it introduced Blu-ray technology as its primary physical media format and expanded PlayStation's online capabilities. Its Cell processor made the console technically ambitious and gave developers the tools to create increasingly detailed worlds. Over its lifetime, the PlayStation 3 became home to many important exclusive franchises and helped shape Sony's modern approach to cinematic game development."

    },


    /* ========================= */
    /* PLAYSTATION 4 */
    /* ========================= */

    "playstation 4": {

        id: 48,

        name: "PlayStation 4",

        manufacturer:
            "Sony Interactive Entertainment",

        releaseDate:
            "November 15, 2013",

            generationStart: "2013-11-15",
generationEnd: "2020-11-11",

        predecessor:
            "PlayStation 3",

        successor:
            "PlayStation 5",

        heroDescription:
            "A generation defined by cinematic storytelling, powerful hardware and some of PlayStation's most recognizable exclusive games.",

        summary:
            "Released in 2013, the PlayStation 4 succeeded the PlayStation 3 and focused on a more developer-friendly hardware architecture. The console became a major platform for both blockbuster exclusives and independent games. Throughout its generation, Sony expanded franchises such as God of War, Spider-Man, Horizon and The Last of Us, helping establish a strong identity centered around cinematic single-player experiences. The PlayStation 4 also introduced a broader social and digital ecosystem for PlayStation players."

    },


    /* ========================= */
    /* PLAYSTATION 5 */
    /* ========================= */

    "playstation 5": {

        id: 167,

        name: "PlayStation 5",

        manufacturer:
            "Sony Interactive Entertainment",

        releaseDate:
            "November 12, 2020",

            generationStart: "2020-11-12",
generationEnd: null,

        predecessor:
            "PlayStation 4",

        successor:
            "Current generation",

        heroDescription:
            "Sony's current-generation console, built around ultra-fast storage, advanced graphics and new hardware designed to reduce the distance between players and the game world.",

        summary:
            "The PlayStation 5 is the successor to the PlayStation 4 and represents Sony's current generation of home console hardware. Released in 2020, it introduced a custom solid-state drive designed to dramatically reduce loading times, alongside ray tracing capabilities, high frame-rate support and the DualSense controller with adaptive triggers and haptic feedback. The platform continues Sony's focus on cinematic experiences while supporting a growing ecosystem of cross-generation and online games."

    },


    /* ========================= */
    /* XBOX */
    /* ========================= */

    "xbox": {

        id: 11,

        name: "Xbox",

        manufacturer:
            "Microsoft",

        releaseDate:
            "November 15, 2001",

            generationStart: "2001-11-15",
generationEnd: "2005-11-21",

        predecessor:
            "None",

        successor:
            "Xbox 360",

        heroDescription:
            "Microsoft's first console brought PC-inspired hardware to the living room and introduced a new competitor to the console industry.",

        summary:
            "The original Xbox marked Microsoft's entry into the home console market. Released in 2001, it featured hardware that was heavily influenced by PC architecture and introduced Xbox Live, an online gaming service that would become central to Microsoft's gaming ecosystem. The console also launched Halo: Combat Evolved, which became one of the most important franchises in Xbox history."

    },


    /* ========================= */
    /* XBOX 360 */
    /* ========================= */

    "xbox 360": {

        id: 12,

        name: "Xbox 360",

        manufacturer:
            "Microsoft",

        releaseDate:
            "November 22, 2005",

            generationStart: "2005-11-22",
generationEnd: "2013-11-21",

        predecessor:
            "Xbox",

        successor:
            "Xbox One",

        heroDescription:
            "The console that transformed Xbox into a global gaming platform and helped define the rise of online multiplayer and digital distribution.",

        summary:
            "Released in 2005, the Xbox 360 succeeded Microsoft's original Xbox and became one of the defining consoles of its generation. Xbox Live expanded into a major online ecosystem, while the Xbox Marketplace helped popularize digital game distribution. The platform was home to major franchises including Halo, Gears of War and Forza, while also becoming a major destination for third-party games."

    },


    /* ========================= */
    /* XBOX ONE */
    /* ========================= */

    "xbox one": {

        id: 49,

        name: "Xbox One",

        manufacturer:
            "Microsoft",

        releaseDate:
            "November 22, 2013",

            generationStart: "2013-11-22",
generationEnd: "2020-11-09",

        predecessor:
            "Xbox 360",

        successor:
            "Xbox Series X|S",

        heroDescription:
            "A generation that expanded Xbox beyond the console itself and laid the groundwork for Microsoft's modern gaming ecosystem.",

        summary:
            "The Xbox One succeeded the Xbox 360 in 2013. Throughout its generation, Microsoft shifted its focus toward a broader gaming ecosystem that connected console, PC and online services. Backward compatibility became an important feature, allowing players to revisit games from previous Xbox generations. The later Xbox One X also introduced a stronger focus on high-resolution console gaming."

    },


    /* ========================= */
    /* XBOX SERIES X|S */
    /* ========================= */

    "xbox series x|s": {

        id: 169,

        name: "Xbox Series X|S",

        manufacturer:
            "Microsoft",

        releaseDate:
            "November 10, 2020",

            generationStart: "2020-11-10",
generationEnd: null,

        predecessor:
            "Xbox One",

        successor:
            "Current generation",

        heroDescription:
            "Microsoft's current console generation, designed around fast storage, flexible hardware and an ecosystem that connects Xbox, PC and cloud gaming.",

        summary:
            "The Xbox Series X and Xbox Series S represent Microsoft's current generation of home consoles. Released in 2020, the two systems provide different levels of hardware performance while sharing the same game ecosystem. Fast SSD storage, Quick Resume and extensive backward compatibility are central features of the generation. The platform also forms part of Microsoft's wider gaming strategy, connecting console, PC and cloud-based gaming."

    },


    /* ========================= */
    /* NINTENDO SWITCH */
    /* ========================= */

    "nintendo switch": {

        id: 130,

        name: "Nintendo Switch",

        manufacturer:
            "Nintendo",

        releaseDate:
            "March 3, 2017",

            generationStart: "2017-03-03",
    generationEnd: "2025-06-04",

        predecessor:
            "Wii U",

        successor:
            "Nintendo Switch 2",

        heroDescription:
            "Nintendo's hybrid console brought home and handheld gaming together in a single device and became one of the company's most successful platforms.",

        summary:
            "Released in 2017, the Nintendo Switch succeeded the Wii U and introduced a hybrid design that allows players to switch between television and portable gaming. Its flexible form factor, detachable Joy-Con controllers and strong first-party lineup helped establish it as one of Nintendo's most successful consoles. Games such as The Legend of Zelda: Breath of the Wild, Super Mario Odyssey and Animal Crossing: New Horizons became defining titles of the platform."

    },


    /* ========================= */
    /* NINTENDO SWITCH 2 */
    /* ========================= */

    "nintendo switch 2": {

        id: 508,

        name: "Nintendo Switch 2",

        manufacturer:
            "Nintendo",

        releaseDate:
            "June 5, 2025",

            generationStart: "2025-06-05",
    generationEnd: null,

        predecessor:
            "Nintendo Switch",

        successor:
            "Current generation",

        heroDescription:
            "The next evolution of Nintendo's hybrid console concept, building on the foundation established by the original Switch.",

        summary:
            "The Nintendo Switch 2 follows the Nintendo Switch as the next generation of Nintendo's hybrid gaming platform. It continues the concept of combining handheld and home console gaming while introducing newer hardware designed for more advanced games and modern features. The platform represents the continuation of one of Nintendo's most successful ideas: allowing players to move between portable and television-based gaming within the same ecosystem."

    },

        /* ========================= */
    /* PLAYSTATION PORTABLE */
    /* ========================= */

    "playstation portable": {

        id: 38,

        name: "PlayStation Portable",

        manufacturer:
            "Sony Computer Entertainment",

        releaseDate:
            "December 12, 2004",

        predecessor:
            "PlayStation 2",

        successor:
            "PlayStation Vita",

        heroDescription:
            "Sony's first major handheld console brought console-style gaming experiences to a portable device.",

        summary:
            "The PlayStation Portable, commonly known as the PSP, was Sony's first handheld gaming console. Released in 2004, it featured powerful hardware for its time and introduced console-quality 3D games to a portable system. The PSP used Universal Media Discs and became home to major franchises including God of War, Monster Hunter, Gran Turismo and Grand Theft Auto."
    },



    /* ========================= */
    /* PLAYSTATION VITA */
    /* ========================= */

    "playstation vita": {

        id: 46,

        name: "PlayStation Vita",

        manufacturer:
            "Sony Computer Entertainment",

        releaseDate:
            "December 17, 2011",

        predecessor:
            "PlayStation Portable",

        successor:
            "None",

        heroDescription:
            "Sony's advanced handheld system combined powerful hardware, a touchscreen and traditional console controls.",

        summary:
            "The PlayStation Vita succeeded the PSP as Sony's second major handheld console. It featured a high-resolution OLED display, dual analog sticks, touchscreen controls and a rear touchpad. Although it had a relatively short commercial lifespan, the Vita developed a dedicated audience and became known for its strong library of Japanese games, independent titles and portable versions of major PlayStation experiences."
    },



    /* ========================= */
    /* NINTENDO ENTERTAINMENT SYSTEM */
    /* ========================= */

    "nintendo entertainment system": {

        id: 18,

        name: "Nintendo Entertainment System",

        manufacturer:
            "Nintendo",

        releaseDate:
            "October 18, 1985",

            generationStart: "1985-10-18",
    generationEnd: "1990-11-20",

        predecessor:
            "None",

        successor:
            "Super Nintendo Entertainment System",

        heroDescription:
            "The console that helped establish Nintendo as one of the defining names in the video game industry.",

        summary:
            "The Nintendo Entertainment System, commonly known as the NES, became one of the most influential consoles in gaming history. It introduced millions of players to franchises such as Super Mario Bros., The Legend of Zelda and Metroid. Its success helped establish Nintendo as a major force in the global gaming industry and created foundations for many of the franchises that continue today."
    },



    /* ========================= */
    /* SUPER NINTENDO */
    /* ========================= */

    "super nintendo entertainment system": {

        id: 19,

        name: "Super Nintendo Entertainment System",

        manufacturer:
            "Nintendo",

        releaseDate:
            "August 23, 1991",

            generationStart: "1990-11-21",
    generationEnd: "1996-06-22",

        predecessor:
            "Nintendo Entertainment System",

        successor:
            "Nintendo 64",

        heroDescription:
            "Nintendo's 16-bit console became home to some of the most celebrated games of its generation.",

        summary:
            "The Super Nintendo Entertainment System, or SNES, succeeded the NES and represented Nintendo's move into the 16-bit era. Its improved graphics and sound allowed developers to create more detailed and ambitious games. The platform became home to classics including Super Mario World, The Legend of Zelda: A Link to the Past, Super Metroid and Donkey Kong Country."
    },



    /* ========================= */
    /* NINTENDO 64 */
    /* ========================= */

    "nintendo 64": {

        id: 4,

        name: "Nintendo 64",

        manufacturer:
            "Nintendo",

        releaseDate:
            "June 23, 1996",

             generationStart: "1996-06-23",
    generationEnd: "2001-09-13",


        predecessor:
            "Super Nintendo Entertainment System",

        successor:
            "Nintendo GameCube",

        heroDescription:
            "Nintendo's first major leap into fully realized 3D gaming and the console that introduced a new generation of iconic experiences.",

        summary:
            "Released in 1996, the Nintendo 64 brought Nintendo into the era of 3D gaming. Its distinctive controller introduced an analog stick that became highly influential for 3D game design. The platform is remembered for games such as Super Mario 64, The Legend of Zelda: Ocarina of Time, GoldenEye 007 and Mario Kart 64."
    },



    /* ========================= */
    /* GAMECUBE */
    /* ========================= */

    "nintendo gamecube": {

        id: 21,

        name: "Nintendo GameCube",

        manufacturer:
            "Nintendo",

        releaseDate:
            "September 14, 2001",

            generationStart: "2001-09-14",
    generationEnd: "2006-11-18",

        predecessor:
            "Nintendo 64",

        successor:
            "Wii",

        heroDescription:
            "Nintendo's compact sixth-generation console delivered a distinctive library filled with beloved first-party games.",

        summary:
            "The Nintendo GameCube was Nintendo's sixth-generation home console. Released in 2001, it used proprietary optical discs and featured a compact design with its recognizable carrying handle. The console became home to games including Super Smash Bros. Melee, Metroid Prime, The Legend of Zelda: The Wind Waker and Resident Evil 4."
    },



    /* ========================= */
    /* WII */
    /* ========================= */

    "wii": {

        id: 5,

        name: "Wii",

        manufacturer:
            "Nintendo",

        releaseDate:
            "November 19, 2006",

            generationStart: "2006-11-19",
    generationEnd: "2012-11-17",


        predecessor:
            "Nintendo GameCube",

        successor:
            "Wii U",

        heroDescription:
            "Nintendo's motion-controlled console changed how millions of people interacted with video games.",

        summary:
            "The Wii became one of Nintendo's most successful home consoles by introducing motion controls to a massive audience. Its accessible design and Wii Remote encouraged new ways of playing games and attracted players beyond traditional gaming audiences. Titles such as Wii Sports, Super Mario Galaxy and The Legend of Zelda: Twilight Princess became defining experiences of the platform."
    },



    /* ========================= */
    /* WII U */
    /* ========================= */

    "wii u": {

        id: 41,

        name: "Wii U",

        manufacturer:
            "Nintendo",

        releaseDate:
            "November 18, 2012",

            generationStart: "2012-11-18",
    generationEnd: "2017-03-02",

        predecessor:
            "Wii",

        successor:
            "Nintendo Switch",

        heroDescription:
            "Nintendo's experimental dual-screen home console introduced the GamePad and new forms of asymmetric gameplay.",

        summary:
            "The Wii U succeeded the Wii and introduced a controller with an integrated touchscreen called the Wii U GamePad. The system experimented with second-screen gameplay and off-TV play. Although the console had a relatively short commercial lifespan, many of its games later found much larger audiences through ports and enhanced versions on the Nintendo Switch."
    },



    /* ========================= */
    /* GAME BOY */
    /* ========================= */

    "game boy": {

        id: 33,

        name: "Game Boy",

        manufacturer:
            "Nintendo",

        releaseDate:
            "April 21, 1989",

            generationStart: "1989-04-21",
generationEnd: "1998-11-17",

        predecessor:
            "None",

        successor:
            "Game Boy Advance",

        heroDescription:
            "Nintendo's iconic handheld helped define portable gaming for an entire generation.",

        summary:
            "The Game Boy became one of the most successful handheld gaming systems ever created. Its long battery life, interchangeable cartridges and portable design helped make gaming accessible almost anywhere. The system became strongly associated with franchises such as Pokémon, Tetris, Super Mario Land and The Legend of Zelda."
    },

    /* ========================= */
/* GAME BOY COLOR */
/* ========================= */

"game boy color": {

    id: 22,

    name: "Game Boy Color",

    manufacturer:
        "Nintendo",

    releaseDate:
        "November 18, 1998",

        generationStart: "1998-11-18",
generationEnd: "2001-03-20",

    predecessor:
        "Game Boy",

    successor:
        "Game Boy Advance",

    heroDescription:
        "Nintendo's colorful evolution of the Game Boy brought a color screen to one of gaming's most successful handheld families while maintaining compatibility with the massive existing Game Boy library.",

    summary:
        "Released in 1998, the Game Boy Color was an updated version of Nintendo's enormously successful Game Boy handheld. Its most significant feature was a color screen, allowing developers to create more visually vibrant games while still supporting the enormous library of original Game Boy titles. The handheld remained compact and portable, helping Nintendo maintain its dominance in the handheld gaming market. The Game Boy Color was home to memorable games including Pokémon Gold and Silver, The Legend of Zelda: Link's Awakening DX and Wario Land 3, before being succeeded by the more powerful Game Boy Advance."

},



    /* ========================= */
    /* GAME BOY ADVANCE */
    /* ========================= */

    "game boy advance": {

        id: 24,

        name: "Game Boy Advance",

        manufacturer:
            "Nintendo",

        releaseDate:
            "March 21, 2001",

            generationStart: "2001-03-21",
generationEnd: "2004-11-20",

        predecessor:
            "Game Boy",

        successor:
            "Nintendo DS",

        heroDescription:
            "Nintendo's 32-bit handheld delivered more advanced games while maintaining compatibility with the Game Boy legacy.",

        summary:
            "The Game Boy Advance represented a major evolution of Nintendo's handheld gaming hardware. It featured more powerful hardware, a widescreen design and a large library spanning original titles and portable versions of popular console games. The system continued Nintendo's dominance in the handheld gaming market."
    },



    /* ========================= */
    /* NINTENDO DS */
    /* ========================= */

    "nintendo ds": {

        id: 20,

        name: "Nintendo DS",

        manufacturer:
            "Nintendo",

        releaseDate:
            "November 21, 2004",

            generationStart: "2004-11-21",
generationEnd: "2011-02-25",

        predecessor:
            "Game Boy Advance",

        successor:
            "Nintendo 3DS",

        heroDescription:
            "Nintendo's dual-screen handheld introduced touchscreen gaming and became one of the best-selling gaming systems ever.",

        summary:
            "The Nintendo DS introduced a unique dual-screen design with touchscreen controls, allowing developers to experiment with entirely new gameplay ideas. Its massive library included franchises such as Pokémon, Mario Kart, Animal Crossing and Professor Layton. The Nintendo DS became one of the best-selling video game systems in history."
    },



    /* ========================= */
    /* NINTENDO DSI */
    /* ========================= */

    "nintendo dsi": {

        id: 159,

        name: "Nintendo DSi",

        manufacturer:
            "Nintendo",

        releaseDate:
            "November 1, 2008",

            generationStart: "2008-11-01",
generationEnd: "2011-02-25",

        predecessor:
            "Nintendo DS",

        successor:
            "Nintendo 3DS",

        heroDescription:
            "An enhanced version of the Nintendo DS that expanded the handheld with cameras, digital downloads and new features.",

        summary:
            "The Nintendo DSi was an updated version of the Nintendo DS. It introduced built-in cameras, an online digital storefront and internal storage while refining the design of Nintendo's dual-screen handheld. The DSi represented Nintendo's increasing interest in digital distribution and connected gaming services."
    },



    /* ========================= */
    /* NINTENDO 3DS */
    /* ========================= */

    "nintendo 3ds": {

        id: 37,

        name: "Nintendo 3DS",

        manufacturer:
            "Nintendo",

        releaseDate:
            "February 26, 2011",

            generationStart: "2011-02-26",
generationEnd: "2014-10-10",

        predecessor:
            "Nintendo DS",

        successor:
            "Nintendo Switch",

        heroDescription:
            "Nintendo's stereoscopic handheld brought glasses-free 3D technology to portable gaming.",

        summary:
            "The Nintendo 3DS succeeded the Nintendo DS and introduced a stereoscopic 3D display that could be viewed without special glasses. It also expanded Nintendo's online features and included extensive backward compatibility with DS games. The platform became home to major Pokémon, Zelda, Fire Emblem and Animal Crossing releases."
    },



    /* ========================= */
    /* NEW NINTENDO 3DS */
    /* ========================= */

    "new nintendo 3ds": {

        id: 137,

        name: "New Nintendo 3DS",

        manufacturer:
            "Nintendo",

        releaseDate:
            "October 11, 2014",

            generationStart: "2014-10-11",
generationEnd: "2017-03-02",

        predecessor:
            "Nintendo 3DS",

        successor:
            "Nintendo Switch",

        heroDescription:
            "An enhanced version of the Nintendo 3DS with improved performance and additional controls.",

        summary:
            "The New Nintendo 3DS expanded Nintendo's 3DS hardware with a faster processor, additional control inputs and improved stereoscopic 3D technology. It remained compatible with the existing 3DS library while supporting a small number of games designed specifically for the newer hardware."
    },



    /* ========================= */
    /* SEGA GENESIS / MEGA DRIVE */
    /* ========================= */

    "sega genesis": {

        id: 29,

        name: "Sega Genesis",

        manufacturer:
            "Sega",

        releaseDate:
            "August 14, 1989",

            generationStart: "1989-08-14",
generationEnd: "1994-11-21",

        predecessor:
            "Sega Master System",

        successor:
            "Sega Saturn",

        heroDescription:
            "Sega's iconic 16-bit console became Nintendo's biggest rival during one of gaming's most competitive eras.",

        summary:
            "The Sega Genesis, known as the Mega Drive in many regions, became one of the defining consoles of the 16-bit era. Sega built a distinctive identity around faster, more arcade-inspired games and introduced Sonic the Hedgehog as the company's flagship character. The console hosted major franchises including Sonic, Streets of Rage, Phantasy Star and Golden Axe."
    },



    "sega mega drive": {

        id: 29,

        name: "Sega Mega Drive",

        manufacturer:
            "Sega",

        releaseDate:
            "October 29, 1988",

            generationStart: "1988-10-29",
generationEnd: "1994-11-21",

        predecessor:
            "Sega Master System",

        successor:
            "Sega Saturn",

        heroDescription:
            "The Sega Mega Drive helped define the 16-bit generation and became one of Sega's most successful gaming systems.",

        summary:
            "Known as the Sega Genesis in North America, the Mega Drive became one of the major consoles of the 16-bit era. Its powerful arcade-style identity and the success of Sonic the Hedgehog helped Sega become Nintendo's biggest competitor during the early 1990s."
    },



    /* ========================= */
    /* SEGA SATURN */
    /* ========================= */

    "sega saturn": {

        id: 32,

        name: "Sega Saturn",

        manufacturer:
            "Sega",

        releaseDate:
            "November 22, 1994",

            generationStart: "1994-11-22",
generationEnd: "1998-11-26",

        predecessor:
            "Sega Genesis / Mega Drive",

        successor:
            "Dreamcast",

        heroDescription:
            "Sega's ambitious 32-bit console became known for arcade experiences, fighting games and a dedicated cult following.",

        summary:
            "The Sega Saturn was Sega's fifth-generation console and followed the Genesis and Mega Drive. Its complex hardware architecture made it particularly strong for 2D and arcade-style games. Although it faced intense competition from the PlayStation and Nintendo 64, the Saturn developed a highly regarded library."
    },



    /* ========================= */
    /* DREAMCAST */
    /* ========================= */

    "dreamcast": {

        id: 23,

        name: "Dreamcast",

        manufacturer:
            "Sega",

        releaseDate:
            "November 27, 1998",

            generationStart: "1998-11-27",
generationEnd: null,

        predecessor:
            "Sega Saturn",

        successor:
            "None",

        heroDescription:
            "Sega's final home console introduced innovative ideas that were ahead of its time and remains one of gaming's most beloved systems.",

        summary:
            "The Dreamcast was Sega's final home video game console. It introduced features including built-in online capabilities and the Visual Memory Unit. The system became known for innovative games such as Shenmue, Jet Set Radio, Crazy Taxi and Soulcalibur. Despite its short commercial lifespan, the Dreamcast developed a lasting legacy and remains one of the most celebrated consoles in gaming history."
    }

};

/* ========================= */
/* PLATFORM ALIASES */
/* ========================= */

platformMap["ps1"] =
    platformMap["playstation"];

platformMap["playstation 1"] =
    platformMap["playstation"];

platformMap["ps2"] =
    platformMap["playstation 2"];

platformMap["ps3"] =
    platformMap["playstation 3"];

platformMap["ps4"] =
    platformMap["playstation 4"];

platformMap["ps5"] =
    platformMap["playstation 5"];

platformMap["psp"] =
    platformMap["playstation portable"];

platformMap["ps vita"] =
    platformMap["playstation vita"];

platformMap["nes"] =
    platformMap["nintendo entertainment system"];

platformMap["snes"] =
    platformMap["super nintendo entertainment system"];

platformMap["gamecube"] =
    platformMap["nintendo gamecube"];

platformMap["gba"] =
    platformMap["game boy advance"];

platformMap["nintendo ds"] =
    platformMap["nintendo ds"];

platformMap["ds"] =
    platformMap["nintendo ds"];

platformMap["dsi"] =
    platformMap["nintendo dsi"];

platformMap["3ds"] =
    platformMap["nintendo 3ds"];

platformMap["new 3ds"] =
    platformMap["new nintendo 3ds"];

platformMap["nintendo 3ds"] =
    platformMap["nintendo 3ds"];

platformMap["nintendo switch"] =
    platformMap["nintendo switch"];

platformMap["switch"] =
    platformMap["nintendo switch"];

platformMap["switch 2"] =
    platformMap["nintendo switch 2"];

platformMap["xbox series x"] =
    platformMap["xbox series x|s"];

platformMap["xbox series s"] =
    platformMap["xbox series x|s"];




/* ========================= */
/* UNWANTED GAME TYPES */
/* ========================= */

const unwantedTerms = [

     "bundle",
        "collector's package",
        "collectors package",
        "collection",
        "ultimate edition",
        "deluxe edition",
        "special edition",
        "game pack",
        "demo",
        "dlc",
        "soundtrack",
        "expansion",

        "mod",
        "modded",
        "restored",
        "remaster project",
        "rom hack",
        "hack",
        "homebrew",
        "fan game",

        "spec ii",
        "spec 2",
        "patch",
        "translation",

        "hits indonesia"
    ];



/* ========================= */
/* FILTER GAMES */
/* ========================= */

function cleanGames(games) {

    return games.filter(game => {

        if (
            !game.cover ||
            !game.cover.image_id
        ) {

            return false;

        }


        const name =
            game.name
                .toLowerCase()
                .trim();


        return !unwantedTerms.some(
            term => name.includes(term)
        );

    });

}



/* ========================= */
/* FORMAT GAMES */
/* ========================= */

function formatGames(games) {

    return cleanGames(games)
        .map(game => ({

            id:
                game.id,

            name:
                game.name,

            rating:
                game.rating
                    ? Math.round(
                        game.rating * 10
                    ) / 10
                    : null,

            releaseYear:
                game.first_release_date
                    ? new Date(
                        game.first_release_date * 1000
                    ).getUTCFullYear()
                    : "",

            releaseTimestamp:
                game.first_release_date || 0,

            hypes:
                game.hypes || 0,

            ratingCount:
                game.total_rating_count || 0,

            cover:
                getCoverUrl(
                    game.cover.image_id
                )

        }));

}





/* ========================= */
/* GET PLATFORM LOGO */
/* ========================= */

async function getPlatformLogo(platformId) {

    try {

        const logoQuery = `

            fields
                id,
                image_id;

            where
                platform = ${platformId};

            limit 1;

        `;


        const logos =
            await queryIGDB(
                logoQuery,
                "platform_logos"
            );


        if (
            !logos ||
            !logos.length ||
            !logos[0].image_id
        ) {

            return null;

        }


        return `https://images.igdb.com/igdb/image/upload/t_logo_med/${logos[0].image_id}.png`;

    }

    catch (error) {

        console.error(
            "Platform logo error:",
            error.message
        );

        return null;

    }

}





/* ========================= */
/* GET PLATFORM BACKGROUND */
/* ========================= */

async function getPlatformBackground(platformId) {

    try {

        const gameQuery = `

            fields
                screenshots.image_id,
                artworks.image_id;

            where
                platforms = (${platformId})
                & artworks != null;

            limit 20;

        `;


        const games =
            await queryIGDB(
                gameQuery,
                "games"
            );


        for (const game of games) {

            if (
                game.artworks &&
                game.artworks.length &&
                game.artworks[0].image_id
            ) {

                return getBackgroundUrl(
                    game.artworks[0].image_id,
                    "screenshot_huge"
                );

            }

        }


        return null;

    }

    catch (error) {

        console.error(
            "Platform background error:",
            error.message
        );

        return null;

    }

}





/* ========================= */
/* GET GENERATION TIMESTAMPS */
/* ========================= */

function getGenerationTimestamps(platform) {

    const start =
        platform.generationStart
            ? Math.floor(
                new Date(
                    platform.generationStart
                ).getTime() / 1000
            )
            : null;


    const end =
        platform.generationEnd
            ? Math.floor(
                new Date(
                    platform.generationEnd
                ).getTime() / 1000
            )
            : null;


    return {
        start,
        end
    };

}

/* ========================= */
/* PLATFORM ECOSYSTEMS */
/* ========================= */

const platformEcosystems = {

    playstation: [

        7,      // PlayStation
        8,      // PlayStation 2
        9,      // PlayStation 3
        48,     // PlayStation 4
        167,    // PlayStation 5
        38,     // PSP
        46,     // PS Vita

        6       // PC ports allowed

    ],


    xbox: [

        11,     // Xbox
        12,     // Xbox 360
        49,     // Xbox One
        169,    // Xbox Series X|S

        6       // PC ports allowed

    ],


    nintendo: [

        18,     // NES
        19,     // SNES
        4,      // Nintendo 64
        21,     // GameCube
        5,      // Wii
        41,     // Wii U

        33,     // Game Boy
        22,     // Game Boy Color
        24,     // Game Boy Advance

        20,     // Nintendo DS
        159,    // Nintendo DSi
        37,     // Nintendo 3DS
        137,    // New Nintendo 3DS

        130,    // Nintendo Switch
        508      // Nintendo Switch 2

    ],


    sega: [

        29,     // Sega Genesis
        32,     // Sega Saturn
        23      // Dreamcast

    ]

};

/* ========================= */
/* GET PLATFORM ECOSYSTEM */
/* ========================= */

function getPlatformEcosystem(platformId) {

    if (
        platformEcosystems.playstation.includes(
            platformId
        )
    ) {

        return platformEcosystems.playstation;

    }


    if (
        platformEcosystems.xbox.includes(
            platformId
        )
    ) {

        return platformEcosystems.xbox;

    }


    if (
        platformEcosystems.nintendo.includes(
            platformId
        )
    ) {

        return platformEcosystems.nintendo;

    }


    if (
        platformEcosystems.sega.includes(
            platformId
        )
    ) {

        return platformEcosystems.sega;

    }


    return [

        platformId

    ];

}











/* ========================= */
/* GET PLATFORM GAMES */
/* ========================= */

exports.getPlatformGames = async (
    req,
    res
) => {

    try {

        const platformName =
            decodeURIComponent(
                req.params.platform
            )
            .trim()
            .toLowerCase();


        const platform =
            platformMap[
                platformName
            ];


        if (!platform) {

            return res
                .status(404)
                .json({

                    error:
                        "Unknown platform"

                });

        }





        /* ========================= */
        /* CURRENT TIME */
        /* ========================= */

        const now =
            Math.floor(
                Date.now() / 1000
            );



        const {
            start: generationStart,
            end: generationEnd
        } = getGenerationTimestamps(
            platform
        );





        /* ========================= */
        /* PLATFORM ASSETS */
        /* ========================= */

        const logoPromise =
            getPlatformLogo(
                platform.id
            );


        const backgroundPromise =
            getPlatformBackground(
                platform.id
            );





        /* ========================= */
        /* GAME FIELDS */
        /* ========================= */

        const gameFields = `

    fields
        id,
        name,
        cover.image_id,
        rating,
        total_rating_count,
        first_release_date,
        hypes,
        category,
        version_parent,
        platforms;

`;





        /* ========================= */
        /* BASE FILTER */
        /* ========================= */

        const baseFilter = `

            platforms = (${platform.id})
            & cover != null

        `;





        /* ========================= */
        /* GENERATION FILTER */
        /* ========================= */

        const dateFilter = `

            ${
                generationStart
                    ? `& first_release_date >= ${generationStart}`
                    : ""
            }

            ${
                generationEnd
                    ? `& first_release_date <= ${generationEnd}`
                    : ""
            }

        `;





        /* ========================= */
        /* POPULAR GAMES */
        /* ========================= */

        const popularQuery = `

            ${gameFields}

            where

                ${baseFilter}

                & total_rating_count != null

                ${dateFilter};

            sort
                total_rating_count desc;

            limit 50;

        `;





        /* ========================= */
        /* HIGHEST RATED */
        /* ========================= */

        const ratedQuery = `

            ${gameFields}

            where

                ${baseFilter}

                & rating != null

                & total_rating_count >= 10

                ${dateFilter};

            sort
                rating desc;

            limit 50;

        `;





        /* ========================= */
        /* MOST ANTICIPATED */
        /* ========================= */

        const anticipatedQuery =
            generationEnd
                ? null
                : `

                    ${gameFields}

                    where

                        ${baseFilter}

                        & first_release_date > ${now}

                        & category = (0,8,9,10)

                        & version_parent = null;

                    sort
                        hypes desc;

                    limit 50;

                `;

             /* ========================= */
/* PLATFORM EXCLUSIVES */
/* ========================= */

const exclusiveQuery = `

    ${gameFields}

    where
        platforms = (${platform.id})
        & cover != null;

    sort total_rating_count desc;

    limit 200;

`;




        /* ========================= */
        /* LOAD EVERYTHING */
        /* ========================= */

       const [
    popularResults,
    ratedResults,
    anticipatedResults,
    exclusiveResults,
    logo,
    background
] = await Promise.all([

    

            queryIGDB(
                popularQuery
            ),


            queryIGDB(
                ratedQuery
            ),


            anticipatedQuery

                ? queryIGDB(
                    anticipatedQuery
                )

                : Promise.resolve([]),

            queryIGDB(
    exclusiveQuery
),


           

           


            logoPromise,


            backgroundPromise


        ]);

        console.log(
    "Exclusive results:",
    exclusiveResults.length
);

console.log(
    exclusiveResults.slice(0, 10).map(game => ({
        name: game.name,
        platforms: game.platforms
    }))
);





        /* ========================= */
        /* FORMAT RESULTS */
        /* ========================= */

        const popularGames =
            formatGames(
                popularResults
            )
            .slice(0, 20);



        const ratedGames =
            formatGames(
                ratedResults
            )
            .slice(0, 20);



        const anticipatedGames =
            formatGames(
                anticipatedResults
            )
            .slice(0, 20);

/* ========================= */
/* FILTER PLATFORM EXCLUSIVES */
/* ========================= */

const allowedPlatforms =
    getPlatformEcosystem(
        platform.id
    );


const trueExclusiveResults =
    exclusiveResults.filter(game => {

        if (
            !game.platforms ||
            !game.platforms.length
        ) {

            return false;

        }


        return game.platforms.every(
            gamePlatform =>

                allowedPlatforms.includes(
                    gamePlatform
                )
        );

    });


const exclusiveGames =
    formatGames(
        trueExclusiveResults
    )
    .slice(0, 20);



    console.log(
    "Final exclusive games:",
    exclusiveGames.length
);



        /* ========================= */
        /* RESPONSE */
        /* ========================= */

        res.json({

            name:
                platform.name,


            manufacturer:
                platform.manufacturer,


            releaseDate:
                platform.releaseDate,


            predecessor:
                platform.predecessor,


            successor:
                platform.successor,


            heroDescription:
                platform.heroDescription,


            summary:
                platform.summary,


            logo,


            background,


            popularGames,


            ratedGames,


            anticipatedGames,


        exclusiveGames,



        });

    }

    catch (err) {

        console.error(

            "Platform Error:",

            err.response?.data ||
            err.message

        );


        res.status(500).json({

            error:
                "Unable to load platform",

            details:

                err.response?.data ||
                err.message

        });

    }

};