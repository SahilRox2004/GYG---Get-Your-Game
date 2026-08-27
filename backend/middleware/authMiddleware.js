const jwt = require("jsonwebtoken");


const authMiddleware = (req, res, next) => {

    try {

        const authHeader =
            req.headers.authorization;


        // Check if token exists

        if (!authHeader) {

            return res.status(401).json({
                message: "No authentication token provided"
            });

        }


        // Extract token

        const token =
            authHeader.split(" ")[1];


        // Verify token

        const decoded = jwt.verify(
            token,
            process.env.JWT_SECRET
        );


        // Store user ID in request

        req.userId = decoded.id;


        next();

    } catch (error) {

        return res.status(401).json({
            message: "Invalid or expired token"
        });

    }

};


module.exports = authMiddleware;