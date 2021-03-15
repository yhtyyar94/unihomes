const jwt = require('jsonwebtoken')

module.exports = (req, res, next) => {
    const token = req.params.token || req.body.token || req.headers['x-access-token'] || req.headers.token

    if (token) {
        jwt.verify(token, req.app.get('api_secret_key'), (err, decoded) => {
            if (err) {
                res.end('Token authentication failed.')
            } else {
                console.log(decoded)
                req.decode = decoded
                next()
            }
        })
    } else {
        res.end('Token not provided.')
    }
}