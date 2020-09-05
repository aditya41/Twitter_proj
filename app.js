const express = require('express')
const app = express()
const route = require('./routes/index')
const mongoose = require('mongoose')
const { Db } = require('mongodb')

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.set('view engine', 'hbs')
app.use('/', route)

// mongo db connection
mongoose.connect('mongodb://localhost:27017/posts')
const db = mongoose.connection

db.on('error', err => {
    console.error(err)
})

app.listen(4444, () => {
    console.log("server started at http://localhostert:4444")
})