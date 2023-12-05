const { Nea } = require('../models/nea')

const getByClass = async (req, res) => {
  try {
    const { orbit_class } = req.query

    const neas = await Nea.find(
      { orbit_class },
      'designation period_yr orbit_class'
    )

    return res.json(neas)
  } catch (error) {
    console.error('Error inesperado:', error)
    return res.status(500).json({ msg: 'Algo inesperado ha ocurrido' })
  }
}

const getByDate = async (req, res) => {
  try {
    const { from, to } = req.query

    const fromDate = new Date(from)
    const toDate = new Date(to)

    console.log(fromDate)

    const neas = await Nea.find(
      {
        discovery_date: { $gte: fromDate, $lte: toDate },
      },
      'designation discovery_date period_yr'
    )

    return res.json(neas)
  } catch (error) {
    console.error('Error inesperado:', error)
    return res.status(500).json({ msg: 'Algo inesperado ha ocurrido' })
  }
}

const create = async (req, res) => {
  try {
    const newNea = await Nea.create(req.body)

    return res.status(201).json(newNea)
  } catch (error) {
    return res
      .status(500)
      .json({ error: 'Ha ocurrido un error al crear la Nea.' })
  }
}

const edit = async (req, res) => {
  try {
    const { designation } = req.query

    console.log('Designation:', designation)

    if (!designation) {
      return res
        .status(400)
        .json({ msg: 'Se requiere el parámetro de consulta "designation"' })
    }

    const updatedNea = await Nea.findOneAndUpdate({ designation }, req.body, {
      new: true,
    })

    if (!updatedNea) {
      return res.status(404).json({ msg: 'Nea no encontrada' })
    }

    return res.status(201).json(updatedNea)
  } catch (error) {
    return res
      .status(500)
      .json({ error: 'Ha ocurrido un error al editar la Nea.' })
  }
}

const remove = async (req, res) => {
  try {
    const { designation } = req.params

    if (!designation) {
      return res
        .status(400)
        .json({ msg: 'Se requiere el parámetro de consulta "designation"' })
    }

    const deletedNea = await Nea.findOneAndDelete({ designation })

    if (!deletedNea) {
      return res.status(404).json({ msg: 'Nea no encontrada' })
    }

    return res.status(201).json(deletedNea)
  } catch (error) {
    return res
      .status(500)
      .json({ error: 'Ha ocurrido un error al eliminar la Nea.' })
  }
}

module.exports = {
  getByClass,
  getByDate,
  create,
  edit,
  remove,
}
