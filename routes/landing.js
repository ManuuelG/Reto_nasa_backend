const { landingValidation } = require('../models/landing')
const landingController = require('../controllers/landing')

const { Router } = require('express')

const router = Router()

router.get('/all', landingController.getAll)
router.get('/', landingController.getMinMass)
router.get('/mass/:mass', landingController.getExactMass)
router.get('/class/:recclass', landingController.getByClass)
router.get('/year', landingController.getByDate)
router.post('/create', landingController.create)
router.put('/edit/:id', landingController.edit)
router.delete('/delete/:id', landingController.remove)

module.exports = router
