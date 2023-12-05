const { Landing } = require('../models/landing')

const getAll = async (req, res) => {
  try {
    const landings = await Landing.find()

    return res.json(landings)
  } catch (error) {
    console.error(error)
    return res.status(500).json({ msg: 'Algo inesperado ha ocurrido' })
  }
}

const getMinMass = async (req, res) => {
  try {
    const { minimum_mass } = req.query

    const minMassValue = parseFloat(minimum_mass)

    const meteoritos = await Landing.find({}, 'name mass')

    const filteredMeteoritos = meteoritos.filter(
      meteorito => meteorito.mass >= minMassValue
    )

    return res.json(filteredMeteoritos)
  } catch (error) {
    return res.status(500).json({ msg: 'Algo inesperado ha ocurrido' })
  }
}

const getExactMass = async (req, res) => {
  try {
    const { mass } = req.params

    const massValue = parseFloat(mass)

    const meteoritos = await Landing.find({}, 'name mass')

    const filteredMeteoritos = meteoritos.filter(
      meteorito => meteorito.mass === massValue
    )

    return res.json(filteredMeteoritos)
  } catch (error) {
    return res.status(500).json({ msg: 'Algo inesperado ha ocurrido' })
  }
}

const getByClass = async (req, res) => {
  try {
    const { recclass } = req.params

    const meteoritos = await Landing.find({ recclass }, 'name recclass')

    return res.json(meteoritos)
  } catch (error) {
    console.error('Error inesperado:', error)
    return res.status(500).json({ msg: 'Algo inesperado ha ocurrido' })
  }
}

const getByDate = async (req, res) => {
  try {
    const { from, to } = req.query
    ç

    const meteoritos = await Landing.find({}, 'name mass year')

    const filteredMeteoritos = meteoritos.filter(
      meteorito => meteorito.year >= from && meteorito.year <= to
    )

    return res.json(filteredMeteoritos)
  } catch (error) {
    console.error('Error inesperado:', error)
    return res.status(500).json({ msg: 'Algo inesperado ha ocurrido' })
  }
}

const create = async (req, res) => {
  try {
    const newLanding = await Landing.create(req.body)

    return res.status(201).json(newLanding)
  } catch (error) {
    return res
      .status(500)
      .json({ error: 'Ha ocurrido un error al crear el landing.' })
  }
}

const edit = async (req, res) => {
  try {
    const { id } = req.params

    if (!id) {
      return res
        .status(400)
        .json({ msg: 'Se requiere el parámetro de consulta "id"' })
    }

    const updatedLanding = await Landing.findOneAndUpdate({ id }, req.body, {
      new: true,
    })

    if (!updatedLanding) {
      return res.status(404).json({ msg: 'Landing no encontrada' })
    }

    return res.status(201).json(updatedLanding)
  } catch (error) {
    return res
      .status(500)
      .json({ error: 'Ha ocurrido un error al editar el landing.' })
  }
}

const remove = async (req, res) => {
  try {
    const { id } = req.params

    if (!id) {
      return res
        .status(400)
        .json({ msg: 'Se requiere el parámetro de consulta "id"' })
    }

    const deletedLanding = await Landing.findOneAndDelete({ id })

    if (!deletedLanding) {
      return res.status(404).json({ msg: 'Landing no encontrada' })
    }

    return res.status(201).json(deletedLanding)
  } catch (error) {
    return res
      .status(500)
      .json({ error: 'Ha ocurrido un error al eliminar el landing.' })
  }
}

module.exports = {
  getAll,
  getMinMass,
  getExactMass,
  getByClass,
  getByDate,
  create,
  edit,
  remove,
}
