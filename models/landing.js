const mongoose = require('mongoose')
const { body } = require('express-validator')

const landingSchema = new mongoose.Schema({
  name: { type: String },
  id: { type: Number },
  nameytype: { type: String },
  recclass: { type: String },
  mass: { type: Number },
  fall: { type: String },
  year: { type: Number },
  reclat: { type: Number },
  reclong: { type: Number },
  geolocation: { latitude: { type: Number }, longitude: { type: Number } },
})

const Landing = mongoose.model('Landing', landingSchema)

exports.Landing = Landing

const LandingValidation = body('name').notEmpty()
body('id').notEmpty()
body('nametype').notEmpty()
body('recclass').notEmpty()
body('mass').notEmpty()
body('fall').notEmpty()
body('year').notEmpty()
body('reclat').notEmpty()
body('reclong').notEmpty()
body('geolocation').notEmpty()

exports.LandingValidation = LandingValidation
