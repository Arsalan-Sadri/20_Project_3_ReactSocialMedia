const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
    if (req.headers.authorization) {
        const token = req.headers.authorization.split(" ")[1];
        jwt.verify(token, process.env.JWT_KEY, function(err, decoded) {
            if (err) {
                console.log(
                    `\n**********\nAccess denied! Wrong token!\n**********\n`
                );
                res.sendStatus(401);
            } else {
                console.log(
                    `\n**********\nUser authenticated:\n< ${
                        decoded.email
                    } >\n**********\n`
                );
                next();
            }
        });
    } else {
        console.log(`\n**********\nAccess denied! No token!\n**********\n`);
        res.sendStatus(401);
    }
};
