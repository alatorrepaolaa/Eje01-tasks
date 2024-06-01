const jwt = require("jsonwebtoken");

function generateToken(user){
    const payload = { userid: user.id, username: user.username };  // Asegura de que username esté correctamente definido
    const secretKey = "Key";
    const options = { expiresIn: "1h" };
    return jwt.sign(payload, secretKey, options);
}

function verifyToken(token){
    const secretKey = "Key";
    try {
        const decoded = jwt.verify(token, secretKey);
        return decoded;
    } catch (error) {
        return null;
    }
}

module.exports = {
    generateToken,
    verifyToken
};
