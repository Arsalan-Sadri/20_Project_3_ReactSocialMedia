const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
    if (req.headers.authorization) {
        const token = req.headers.authorization.split(" ")[1];
        jwt.verify(token, process.env.JWT_KEY, function(err, decoded) {
            if (err) res.send("2Access denied! Please sign in!");
            else {
                console.log("\n\nToken verified\n\n");
                next();
            }
        });
    } else res.send("1Access denied! Please sign in!");
};
