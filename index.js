const express = require('express')
const multer = require('multer')
const routes = require('./src/routers/Routers')
const app = express()
const parseData = multer()

app.use('/api', parseData.none(), routes)

app.listen(process.env.PORT, () => {
    console.log(`server run on port ${process.env.PORT}`)
})