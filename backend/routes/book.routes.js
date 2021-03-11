const express = require('express')
const router = express.Router()

//import the controllers file for functions
const bookController = require('../controllers/book.controller')


router.get('/getbooks/:userId', bookController.getMessages)
router.post('/createbook', bookController.sendMessage)
router.put('/books/:id/update', bookController.updateMessage)
router.delete('/deletebook/:id', bookController.deleteMessage)


module.exports = router