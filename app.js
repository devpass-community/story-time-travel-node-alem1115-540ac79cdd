
const dateRouter = require('./src/routes/dateRoutes');

const express = require('express')
const app = express()
const port = 3000

app.use(dateRouter);

app.listen(port, () => {
  console.log(`Server up and running on port: ${port}`)
})