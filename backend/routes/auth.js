const express = require("express");

const bcrypt = require("bcryptjs");

const jwt = require("jsonwebtoken");

const User = require("../models/User");

const router = express.Router();


router.get(
    "/",
    (req, res) => {

        res.send(
            "Authentication route working"
        );

    }
);


router.post(
    "/signup",
    async (req, res) => {

        try {

            const {
                username,
                email,
                password
            } = req.body;


            if (
                !username ||
                !email ||
                !password
            ) {

                return res.status(400).json({
                    message: "Please provide username, email and password"
                });

            }


            const existingUser = await User.findOne({
                email
            });


            if (existingUser) {

                return res.status(400).json({
                    message: "User already exists"
                });

            }


            const hashedPassword = await bcrypt.hash(
                password,
                10
            );


            const user = await User.create({

                username,

                email,

                password: hashedPassword

            });


            res.status(201).json({

                message: "User created successfully",

                user: {

                    id: user._id,

                    username: user.username,

                    email: user.email

                }

            });

        } catch (error) {

            console.error(error);

            if (
                error.code === 11000 ||
                error.message?.includes("E11000")
            ) {

                const duplicateField =
                    Object.keys(error.keyPattern || {})[0];

                return res.status(400).json({
                    message:
                        duplicateField === "username"
                            ? "Username is already taken"
                            : "Email is already registered"
                });

            }

            res.status(500).json({
                message: "Server error"
            });

        }

    }
);

router.post(
    "/signin",
    async (req, res) => {

        try {

            const {
                email,
                password
            } = req.body;


            // Check if email and password are provided

            if (
                !email ||
                !password
            ) {

                return res.status(400).json({
                    message: "Please provide email and password"
                });

            }


            // Find the user

            const user = await User.findOne({
                email
            });


            if (!user) {

                return res.status(401).json({
                    message: "Invalid email or password"
                });

            }


            // Compare passwords

            const passwordMatch =
                await bcrypt.compare(
                    password,
                    user.password
                );


            if (!passwordMatch) {

                return res.status(401).json({
                    message: "Invalid email or password"
                });

            }


            // Generate JWT token

            const token = jwt.sign(
                { id: user._id },
                process.env.JWT_SECRET,
                { expiresIn: "7d" }
            );


            // Temporary successful response

            res.status(200).json({

                message: "Sign in successful",

                token,

                user: {

                    id: user._id,

                    username: user.username,

                    email: user.email

                }

            });

        } catch (error) {

            console.error(error);

            res.status(500).json({
                message: "Server error"
            });

        }

    }
);

const authMiddleware = require("../middleware/authMiddleware");

router.get(
    "/profile",
    authMiddleware,
    async (req, res) => {

        const user = await User.findById(
            req.userId
        ).select("-password");

        if (!user) {

            return res.status(404).json({
                message: "User not found"
            });

        }

        res.json({
            message: "Protected profile route working",
            user
        });

    }
);

router.post(
    "/favourites",
    authMiddleware,
    async (req, res) => {

        try {

            const {
                gameId,
                name,
                image,
                listType = "favourites"
            } = req.body;

            const numericGameId = Number(gameId);
            const list =
                listType === "wishlist"
                    ? "wishlist"
                    : "favourites";


            if (
                !Number.isInteger(numericGameId) ||
                !name
            ) {

                return res.status(400).json({
                    message: "Game ID and name are required"
                });

            }


            const user = await User.findById(
                req.userId
            );


            if (!user) {

                return res.status(404).json({
                    message: "User not found"
                });

            }


            const alreadySaved =
                user[list].some(
                    game =>
                        game.gameId === numericGameId
                );


            if (alreadySaved) {

                return res.status(400).json({
                    message:
                        list === "wishlist"
                            ? "Game is already in your wishlist"
                            : "Game is already in favourites"
                });

            }


            user[list].push({

                gameId: numericGameId,

                title: name,

                cover: image

            });


            await user.save();


            res.status(200).json({

                message:
                    list === "wishlist"
                        ? "Game added to wishlist"
                        : "Game added to favourites",

                favourites: user.favourites

            });

        } catch (error) {

            console.error(error);

            res.status(500).json({
                message: "Server error"
            });

        }

    }
);

router.delete(
    "/favourites/:gameId",
    authMiddleware,
    async (req, res) => {

        try {

            const list =
                req.query.list === "wishlist"
                    ? "wishlist"
                    : "favourites";

            const gameId = Number(req.params.gameId);
            const user = await User.findById(req.userId);

            if (!user) {

                return res.status(404).json({
                    message: "User not found"
                });

            }

            const originalLength = user[list].length;
            user[list] = user[list].filter(
                game => game.gameId !== gameId
            );

            if (user[list].length === originalLength) {

                return res.status(404).json({
                    message: "Game was not found in this list"
                });

            }

            await user.save();

            res.json({
                message: "Game removed",
                favourites: user.favourites,
                wishlist: user.wishlist
            });

        } catch (error) {

            console.error(error);

            res.status(500).json({
                message: "Server error"
            });

        }

    }
);

module.exports = router;