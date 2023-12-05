const mongoose = require('mongoose')
const { body } = require('express-validator')

const neaSchema = new mongoose.Schema({
  designation: { type: String },
  discovery_date: { type: Date },
  h_mag: { type: Number },
  moid_au: { type: Number },
  q_au_1: { type: Number },
  q_au_2: { type: Number },
  period_yr: { type: Number },
  i_deg: { type: Number },
  pha: { type: String },
  orbit_class: { type: String },
})

const Nea = mongoose.model('Nea', neaSchema)

exports.Nea = Nea

const NeaValidation = body('designation').notEmpty()
body('discovery_date').notEmpty()
body('h_mag').notEmpty()
body('moid_au').notEmpty()
body('q_au_1').notEmpty()
body('q_au_2').notEmpty()
body('period_yr').notEmpty()
body('i_deg').notEmpty()
body('pha').notEmpty()
body('orbit_class').notEmpty()

exports.NeaValidation = NeaValidation
