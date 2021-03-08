const mongoose = require('mongoose')
const AgentModel = require('../models/Agents.model')

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

exports.create = async (req, res) => {
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