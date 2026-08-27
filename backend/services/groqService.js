const Groq = require("groq-sdk");


const groq = new Groq({

    apiKey:
        process.env.GROQ_API_KEY

});


async function generateGameGuide(game) {

    try {

        const completion =
            await groq.chat.completions.create({

                model:
                    "openai/gpt-oss-20b",


                messages: [

                    /* ========================= */
                    /* GYG EDITORIAL SYSTEM */
                    /* ========================= */

                    {

                        role: "system",

                        content: `
You are the editorial intelligence system for GYG (Get Your Game).

Write in a consistent, professional gaming editorial style.

Your writing style must always be:

- concise
- neutral
- informative
- confident
- not overly promotional
- no exaggerated language
- no unnecessary adjectives
- no emojis
- no slang
- no conversational filler

Keep recommendations practical and based on what each platform or version actually offers.

Use short, direct sentences.

For "overview", write 2 to 3 sentences.

For "playAdvice", write exactly 1 or 2 sentences.

For each platform recommendation:
- recommendation: exactly 1 sentence
- bestFor: exactly 1 short sentence
- pros: maximum 3 items
- cons: maximum 3 items

Do not change the JSON structure.

Return ONLY valid JSON.
`

                    },


                    /* ========================= */
                    /* GAME DATA */
                    /* ========================= */

                    {

                        role: "user",

                        content: `
Create a GYG Game Guide using the following verified
game information.

GAME NAME:
${game.name}

RELEASE DATE:
${game.release_date || "Unknown"}

IGDB SUMMARY:
${game.summary || "No summary available."}

AVAILABLE PLATFORMS:
${
    game.platforms &&
    game.platforms.length
        ? game.platforms.join(", ")
        : "Unknown"
}


Return JSON in EXACTLY this structure:

{
    "overview": "",
    "playAdvice": "",
    "bestVersions": [
        {
            "platform": "",
            "recommendation": "",
            "bestFor": "",
            "pros": [],
            "cons": []
        }
    ],
    "modernAlternative": {
        "name": "",
        "type": "",
        "reason": ""
    }
}


IMPORTANT:

- "overview" should be a concise editorial introduction
  explaining what the game is and why it matters.

- "playAdvice" should give a quick overall recommendation
  about how a new player should approach the game today.

- "bestVersions" should contain only meaningful versions
  or platforms worth discussing.

- "bestFor" should clearly explain the type of player who
  would prefer that version.

Examples:

"Players who want the original experience"

"Players who prioritise modern controls"

"Players who want higher resolution and flexibility"

"Players interested in historical authenticity"

- Include 2 to 5 meaningful entries in "bestVersions"
  when enough reliable differences exist.

- Each "pros" and "cons" array should contain concise,
  specific points.

- "modernAlternative" must be null if no genuinely relevant
  remake, remaster, enhanced edition, or modern alternative
  exists.

Return ONLY the JSON object.
`

                    }

                ],


                temperature:
                    0,


                response_format: {

                    type:
                        "json_object"

                }

            });


        return JSON.parse(

            completion
                .choices[0]
                .message
                .content

        );

    }


    catch (error) {

        console.error(

            "Groq Error:",

            error.message

        );


        throw error;

    }

}

async function generateDLCInfo(game) {

    try {

        const completion =
            await groq.chat.completions.create({

                model:
                    "openai/gpt-oss-20b",


                messages: [

                    {

                        role: "system",

                        content: `
You are a video game database assistant.

Identify official significant DLC and expansions
for the exact game provided.

Only return information belonging to that exact game.
`

                    },


                    {

                        role: "user",

                        content: `
Find official significant DLC and expansions for:

GAME:
${game.name}

RELEASE DATE:
${game.release_date || "Unknown"}

PLATFORMS:
${
    game.platforms &&
    game.platforms.length
        ? game.platforms.join(", ")
        : "Unknown"
}
`

                    }

                ],


                temperature: 0,


                response_format: {

                    type: "json_schema",

                    json_schema: {

                        name: "game_dlc",

                        strict: true,

                        schema: {

                            type: "object",

                            properties: {

                                dlc: {

                                    type: "array",

                                    items: {

                                        type: "object",

                                        properties: {

                                            name: {
                                                type: "string"
                                            },


                                            type: {

                                                type: "string",

                                                enum: [
                                                    "DLC",
                                                    "Expansion"
                                                ]

                                            },


                                            summary: {
                                                type: "string"
                                            },


                                            release_date: {
                                                type: "string"
                                            }

                                        },


                                        required: [

                                            "name",
                                            "type",
                                            "summary",
                                            "release_date"

                                        ],


                                        additionalProperties: false

                                    }

                                }

                            },


                            required: [

                                "dlc"

                            ],


                            additionalProperties: false

                        }

                    }

                }

            });


        const result =
            JSON.parse(

                completion
                    .choices[0]
                    .message
                    .content ||
                '{"dlc":[]}'

            );


        return result.dlc;

    }


    catch (error) {

        console.error(

            "Groq DLC Error:",

            error.response?.data ||
            error.message

        );


        return [];

    }

}


module.exports = {

    generateGameGuide,
    generateDLCInfo

};