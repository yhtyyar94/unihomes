var express = require('express');
var router = express.Router();
const bcryptjs = require('bcryptjs')
const jwt = require('jsonwebtoken')
//Model
const AgentModel = require('../models/Agents.model')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/login', async (req, res) => {
  const {email, password} = req.body
  AgentModel.findOne({email:email}, (err, result) => {
    console.log(result)
    if(err) {
      res.json(err)
    } else if(!result) {
      res.end('The user was not found.')
    } else {
      bcryptjs.compare(password, result.password)
      .then((bcryptCompare) => {
        console.log(bcryptCompare)
        if(bcryptCompare !== true) {
          res.end('Authentication failed.')
        } else {
          const payload = email
          console.log(payload)
          //JWT
          jwt.sign(payload, req.app.get('api_secret_key'), (err, token) => {
            if (err) {
              console.log(err)
            } else {
              res.json({status:true, token, data:result})
            }
          })
        }
      })
      .catch(err => res.json(err))
    }
  })
})

module.exports = router;
