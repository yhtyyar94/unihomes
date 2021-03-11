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

/******* */
router.post('/register',(req,res,next)=>{
  const {email,password,name,contactNumber,company,city,createdAt}=req.body;
  bcrypt.hash(password, 10).then(function(hash) {
    const newUser = new UserModel({email,password:hash,name,contactNumber,company,city,createdAt});
  newUser.save()
    .then((data)=>{res.json(data)} )
    .catch((err)=>{res.json(err)})

});

})

router.post('/auth',(req,res)=>{
  const {email, password} = req.body;
  AgentModel.findOne({email})
.then((resultUser)=>{
  if(!resultUser){res.end("User not found...")}
  else{
    bcrypt.compare(password,resultUser.password)
      .then((resultCompare)=>{
        if(!resultCompare){ res.end("Authentication faild, wrong password.")
      }else{
        const payload ={email};
        //JWT
        const token=jwt.sign(payload,req.app.get("api_secret_key"),{expiresIn:6000});

        res.json({status:true,token})
      }
      })
     
  }
  // res.json(resultUser)
})
.catch((err)=>{res.json(err)})
})
/********** */

// router.post('/authenticate', async (req, res) => {
//   const {email, password} = req.body
//   AgentModel.findOne({email}, (err, result) => {
//     console.log(result)
//     if(err) {
//       res.json(err)
//     } else if(!result) {
//       res.end('The user was not found.')
//     } else {
//       bcrypt.compare(password, result.password)
//       .then((bcryptCompare) => {
//         if(!bcryptCompare) {
//           res.end('Authentication failed.')
//         } else {
//           const payload = {email}
//           //JWT
//           const token = jwt.sign(payload, req.app.get('api_secret_key'), {expiresIn:"1h" /*1 hour*/ })
//           res.json({status:true, token})
//         }
//       })
//       .catch(err => res.json(err))
//     }
//   })
// })

module.exports = router;
