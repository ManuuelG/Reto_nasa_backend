require('dotenv').config()
const express = require('express')

const app = express()

const port = process.env.PORT || 3000

require('./startup/db')()
require('./startup/routes')(app)

app.listen(3000, () => {
  console.log(`Server running on port ${port}`)
})
