const express = require('express')
const router = express.Router()
const jwt = require('jsonwebtoken')

router.get('/', (req, res) => {
    const token = req.params.token || req.body.token || req.headers['x-access-token'] || req.headers.token

    if (token) {
        jwt.verify(token, req.app.get('api_secret_key'), (err, decoded) => {
            if (err) {
                res.end('Token authentication failed.')
                return false
            } else {
                console.log(decoded)
                req.decode = decoded
                res.json({status:true})
            }
        })
    } else {
        res.end('Token not provided.')
        return false
    }
})

module.exports = router