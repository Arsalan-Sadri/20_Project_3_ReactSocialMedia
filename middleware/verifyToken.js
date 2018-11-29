const path = require("path");
const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
    if (req.headers.authorization) {
        const token = req.headers.authorization.split(" ")[1];
        if (!(token === "null")) {
            jwt.verify(token, process.env.JWT_KEY, function(err, decoded) {
                if (err) {
                    console.log(
                        `\n**********\nAccess denied! Invalid token!\n**********\n`
                    );
                    res.sendFile(path.join(__dirname, "../client/build/index.html"));
                } else {
                    console.log(
                        `\n**********\nUser authenticated:-> ${
                            decoded.email
                        }\n**********\n`
                    );
                    next();
                }
            });
        } else {
            console.log(`\n**********\nAccess denied! null token!\n**********\n`);
            res.sendFile(path.join(__dirname, "../client/build/index.html"));
        }
    }
};
