const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
    if (req.headers.authorization) {
        const token = req.headers.authorization.split(" ")[1];
        jwt.verify(token, process.env.JWT_KEY, function(err, decoded) {
            if (err) res.send("Access denied! Please sign in!");
            else {
                console.log(
                    `\n**********\nUser authenticated:\n< ${
                        decoded.email
                    } >\n**********\n`
                );
                next();
            }
        });
    } else res.send("Access denied! Please sign in!");
};
