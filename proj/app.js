require('dotenv').config()
const express = require('express')
const app = express()
const MongoClient = require('mongodb').MongoClient;
const route = require('./routes/index')
const mongoose = require('mongoose')
const session = require('express-session')
const MongoStore = require('connect-mongo');
const { compare } = require('bcrypt');

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
    // mongodb connection
    // mongoose.connect('mongodb://localhost:27017/movies')
    // mongoose.connect("mongodb+srv://Aditya41:123@cluster0.gysyj.mongodb.net/twitter?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true });

let uri = "mongodb+srv://Aditya41:123@cluster0.gysyj.mongodb.net/twitter?retryWrites=true&w=majority"
const client = mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.then((client) => {

}, (err) => {

})


// const db = mongoose.connection
// db.on('error', err => {
//     console.error(err)
// })


app.use(session({
    secret: 'bjksdbsfsdkfnksfjkskfksjdkfsbfbksdbfks',
    resave: false,
    saveUninitialized: true
        // store: new MongoStore({ mongooseConnection: MongoClient })
}))

app.use((req, res, next) => {
    console.log(client)
    res.locals.currentUser = req.session.userID
    next()
})

app.set('view engine', 'hbs');
app.use('/', route);

// Error Handler - Middleware
// This should be the last middle ware
app.use((err, req, res, next) => {
    res.render('error', { title: 'error', message: err.message })
})
const port = process.env.PORT || 3000;
app.listen(port);
// app.listen(4444, () => {
//     console.log('Server started at http://localhost:4444')
// })