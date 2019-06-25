const express = require("express");
const app = express();
const logger = require("morgan");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const routes = require("./routes");

app.use(logger("dev"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/uploads", express.static("uploads"));

if (process.env.NODE_ENV === "production") {
    console.log(`\nNODE_ENV= ${process.env.NODE_ENV}\n`)
    app.use(express.static("client/build"));
}

app.use(routes);

mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/react-social-media-db",
    {
        useNewUrlParser: true
    }
);

const PORT = process.env.PORT || 3001;
app.listen(PORT, function() {
    console.log(
        `\n**********\nApp is running on port: ${PORT}\n**********\n`
    );
});
