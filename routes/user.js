const { userValidation } = require('../models/user')
const userController = require('../controllers/user')

const { Router } = require('express')

const router = Router()

router.get('/all', userController.getAll)
router.get('/', userController.getByMail)
router.post('/create', userController.create)
router.put('/edit/:email', userController.edit)
router.delete('/delete/:email', userController.remove)

module.exports = router
