const mongoose = require('mongoose')
const BookModel = require('../models/Book.model')

exports.getMessages = async (req, res) => {
    const userId = req.params.userId

    await BookModel.find({user:userId}, (err, data) => {
        if(err) {
            res.status(500).json({message: err})
        } else {
            res.status(200).json(data)
        }
    })
}

// exports.getMessageById = async (req, res) => {
//     const messageId = req.body.user

//     await BookModel.findById({_id:userId}, (err, data) => {
//         if(err) {
//             res.status(500).json({message: err})
//         } else {
//             res.status(200).json(data)
//         }
//     })
// }

exports.sendMessage = async (req, res) => {
    const newMessage = await new BookModel(req.body)
    newMessage.save((err, data) => {
        if(err) {
            res.status(500).json({message: err})
        } else {
            res.status(200).json(data)
        }
    })
}

exports.updateMessage = async (req, res) => {
    const messageId = req.params.id

    await BookModel.findByIdAndUpdate({_id:messageId}, {$set:req.body}, (err, data) => {
        if(err) {
            res.status(500).json({message:err})
        } else {
            res.status(200).json({message: 'Message updated', data})
        }
    })
}

exports.deleteMessage = async (req, res) => {
    const messageId = req.params.id

    await BookModel.findByIdAndRemove({_id:messageId}, (err, data) => {
        if(err) {
            res.status(500).json({message:err})
        } else {
            res.status(200).json({message: 'Message deleted', data})
        }
    })
}