const jwt = require("jsonwebtoken");

module.exports = function verifyToken(req, res, next) {
    // The token is sent along in the request's headers and in the following k:v format:
    // Authorization: Bearer TOKEN_VALUE
    if (req.headers.authorization) {
        // Extracting token from the headers
        const token = req.headers.authorization.split(" ")[1];

        jwt.verify(token, process.env.JWT_KEY, function(err, decoded) {
            // User has NOT been authorized
            if (err) res.sendStatus(403);
            // User has been authorized
            else {
                // Decoded is an obj that has the user's email
                // the token was originaly signed with 
                console.log("\n**********");
                console.log(decoded);
                console.log("\n**********");
                next();
            }
        });
    } else res.sendStatus(403);
};
