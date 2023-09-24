const jwt = require('jsonwebtoken')
const JWT_SECRET  = 'KamalNapoRitik$class1'

const userDetailsFetch = (req, res, next) => {
    const token = req.header('auth-token');
    if(!token) {
        res.status(401).send({error: "Please authenticate using valid token"})
        console.log("inavlid")
        return
    }
    try {
        const data = jwt.verify(token, JWT_SECRET);
        req.user = data.user;
        next();
    } catch (error) {
        res.status(401).send({error: "Please authenticate using valid token"})
    }
}

module.exports = userDetailsFetch;