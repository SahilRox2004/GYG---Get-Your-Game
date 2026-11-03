const mongoose = require("mongoose");


const userSchema = new mongoose.Schema(

    {
    username: {

        type: String,
        required: true,
        unique: true,
        trim: true

    },

    email: {

        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true

    },

    password: {

        type: String,
        required: true

    },


    favourites: [

        {

            gameId: {

                type: Number,
                required: true

            },

            title: String,

            cover: String

        }

       ]

    ,

    wishlist: [

        {

            gameId: {

                type: Number,
                required: true

            },

            title: String,

            cover: String

        }

    ],

    ratings: [
        {
            gameId: {
                type: Number,
                required: true
            },
            rating: {
                type: Number,
                required: true,
                min: 0,
                max: 10
            }
        }
    ]

    },

    {

        timestamps: true

    }

);


module.exports = mongoose.model(
    "User",
    userSchema
);