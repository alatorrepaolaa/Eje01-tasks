const authUtils = require('./authUtilities');

function authentication(req, res, next) {
    const Token = req.headers.authorization;
    if (!Token){
        return res.status(401).json({error: "Unauthorized"});
    }
    const decodedToken = authUtils.verifyToken(Token);
    if(!decodedToken){
        return res.status(401).json({error: "Unauthorized"});
    }
    res.user = decodedToken;
    next();
}

module.exports = authentication;