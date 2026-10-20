const path = require("path");

require("dotenv").config({
    path: path.join(__dirname, "private", ".env")
});

const express = require("express");
const cors = require("cors");

const connectDB = require("./config/db");

const app = express();

app.use(cors());

app.use(express.json());

app.use("/api", require("./routes/games"));

app.use("/api/search", require("./routes/search"));

app.use(
    "/api/auth",
    require("./routes/auth")
);

app.use("/api/collection", require("./routes/collectionRoutes"));

app.use("/api/platform", require("./routes/platforms"));

app.use("/api/trending", require("./routes/trending"));

app.use("/api/releasedtoday", require("./routes/releasedToday"));

app.use("/api/similar", require("./routes/similar"));

app.use("/api/dlc", require("./routes/dlc"));

app.use("/api/upcoming", require("./routes/upcoming"));

app.use("/api/hero", require("./routes/hero"));

app.use("/api/news", require("./routes/news"));

app.use("/api/guide", require("./routes/groq"));

app.use(
    "/api/company",
    require("./routes/company")
);

connectDB();


const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {

    res.send("GYG Backend Running");

});



app.listen(PORT, () => {

    console.log(`Server running on port ${PORT}`);

});



