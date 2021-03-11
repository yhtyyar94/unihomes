var express = require('express');
var router = express.Router();
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
//Model
const AgentModel = require('../models/Agents.model')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.post('/authenticate', async (req, res) => {
  const {email, password} = req.body
  AgentModel.findOne({email}, (err, result) => {
    console.log(result)
    if(err) {
      res.json(err)
    } else if(!result) {
      res.end('The user was not found.')
    } else {
      bcrypt.compare(password, result.password)
      .then((bcryptCompare) => {
        if(!bcryptCompare) {
          res.end('Authentication failed.')
        } else {
          const payload = {email}
          //JWT
          const token = jwt.sign(payload, req.app.get('api_secret_key'), {expiresIn:"1h" /*1 hour*/ })
          res.json({status:true, token})
        }
      })
      .catch(err => res.json(err))
    }
  })
})

module.exports = router;
