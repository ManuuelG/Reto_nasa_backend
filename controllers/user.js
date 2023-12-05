const { User } = require('../models/user')

const getAll = async (req, res) => {
  try {
    const users = await User.find()

    return res.json(users)
  } catch (error) {
    console.error(error)
    return res.status(500).json({ msg: 'Algo inesperado ha ocurrido' })
  }
}

const getByMail = async (req, res) => {
  try {
    const { email } = req.query

    if (!email) {
      return res
        .status(400)
        .json({ msg: 'Se requiere el parámetro de consulta "email"' })
    }

    const user = await User.findOne({ email })

    if (!user) {
      return res.status(404).json({ msg: 'Usuario no encontrado' })
    }

    return res.json(user)
  } catch (error) {
    console.error(error)
    return res.status(500).json({ msg: 'Algo inesperado ha ocurrido' })
  }
}
const create = async (req, res) => {
  try {
    const newUser = await User.create(req.body)

    return res.status(201).json(newUser)
  } catch (error) {
    return res
      .status(500)
      .json({ error: 'Ha ocurrido un error al crear el usuario.' })
  }
}

const edit = async (req, res) => {
  try {
    const { email } = req.params

    if (!email) {
      return res
        .status(400)
        .json({ msg: 'Se requiere el parámetro de consulta "email"' })
    }

    const updatedUser = await User.findOneAndUpdate({ email }, req.body, {
      new: true,
    })

    if (!updatedUser) {
      return res.status(404).json({ msg: 'Usuario no encontrado' })
    }

    return res.status(201).json(updatedUser)
  } catch (error) {
    return res
      .status(500)
      .json({ error: 'Ha ocurrido un error al editar el usuario.' })
  }
}

const remove = async (req, res) => {
  try {
    const { email } = req.params

    if (!email) {
      return res
        .status(400)
        .json({ msg: 'Se requiere el parámetro de consulta "email"' })
    }

    const deletedUser = await User.findOneAndDelete({ email })

    if (!deletedUser) {
      return res.status(404).json({ msg: 'Usuario no encontrado' })
    }

    return res.status(201).json(deletedUser)
  } catch (error) {
    return res
      .status(500)
      .json({ error: 'Ha ocurrido un error al editar el usuario.' })
  }
}

module.exports = {
  getAll,
  getByMail,
  create,
  edit,
  remove,
}
