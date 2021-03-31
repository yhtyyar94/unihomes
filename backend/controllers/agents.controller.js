const mongoose = require('mongoose')
const AgentModel = require('../models/Agents.model')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

exports.getAllAgents = async (req, res) => {
    const agents = await AgentModel.find()
    res.json(agents)
}

exports.getOneAgent = async (req, res) => {
    const agentId = req.params.id

    await AgentModel.findById({_id: agentId}, (err, data) => {
        if(err) {
            res.status(500).json({message: err})
        } else {
            res.status(200).json({
                message: 'Agent found',
                data
            })
        }
    })
}

exports.create = async (req, res, next) => {
    /*
    const newAgent = new AgentModel(req.body)
    newAgent.save((err, data) => {
        if(err) {
            res.status(500).json({message: err})
        } else {
            res.status(200).json({
                message: 'Agent created',
                data
            })
        }
    }) 
*/
//hashed pass
const {email, password, companyName} = req.body

  bcrypt.hash(password, 10)
  .then(hashedPassword => {
    const agent = new AgentModel({
      email:email,
      password:hashedPassword,
      company:companyName
     
    })
    
    agent.save((err, data) => {
      if(err) {
        // next({message:err})
        res.json(err)
      } else {
        res.json(data)
      }
    })
  })
}

exports.authenticate = async (req, res) => {
    const {email, password} = req.body
    AgentModel.findOne({email}, (err, result) => {
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
            res.end('hello')
          }
        })
        .catch(err => res.json(err))
      }
    })
  }

exports.updateAgent = async (req, res) => {
    const agentId = req.params.id

    await AgentModel.findByIdAndUpdate({_id:agentId}, {$set:req.body}, (err, data) => {
        if(err) {
            res.status(500).json({message:err})
        } else {
            res.status(200).json({message: 'Agent updated', data})
        }
    })
}

exports.deleteAgent = async (req, res) => {
    const agentId = req.params.id

    await AgentModel.deleteOne({_id:agentId}, (err, data) => {
        if(err) {
            res.status(500).json({message:err})
        } else {
            res.status(200).json({message:'Agent deleted.', data})
        }
    })
}