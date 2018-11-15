const express = require("express");
const app = express();
const logger = require("morgan");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const routes = require("./routes");

app.use(logger("dev"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/profile_pics", express.static("profile_pics"));

if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

app.use(routes);

mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/project-3",
    {
        useNewUrlParser: true
    }
);

const PORT = process.env.PORT || 3001;
const host = "localhost";
app.listen(PORT, host, function() {
    console.log(
        `\n**********\nApp is running on: http://${host}:${PORT}\n**********\n`
    );
});
