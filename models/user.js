const mongoose = require('mongoose')
const { body } = require('express-validator')

const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  nickname: { type: String },
  email: { type: String },
  picture: { type: String },
  affiliatedNumber: { type: Number, required: true, unique: true },
  affiliationDate: { type: Date },
  occupation: { type: String },
  birthdate: { type: Date },
  neasDiscovered: [{ type: mongoose.ObjectId, ref: 'Nea' }],
})

const User = mongoose.model('User', userSchema)

const UserValidation = body('username').notEmpty()
body('nickname').notEmpty()
body('email').notEmpty()
body('picture').notEmpty()
body('affiliatedNumber').notEmpty()
body('affiliationDate').notEmpty()
body('occupation').notEmpty()
body('birthdate').notEmpty()

exports.User = User

exports.UserValidation = UserValidation
