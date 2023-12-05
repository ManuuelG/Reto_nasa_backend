const { neaValidation } = require('../models/nea')
const neaController = require('../controllers/nea')

const { Router } = require('express')

const router = Router()

router.get('/', neaController.getByClass)
router.get('/year', neaController.getByDate)
router.post('/create', neaController.create)
router.put('/edit', neaController.edit)
router.delete('/delete/:designation', neaController.remove)

module.exports = router
