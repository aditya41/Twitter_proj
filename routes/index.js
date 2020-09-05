const express = require('express')
const route = express.Router()
const user = require('../models/user')




// get/register
route.get('/register', (req, res, next) => {
        return res.render('signup', { title: 'signup' })
    })
    // post/register
route.post('/register', (req, res, next) => {
    if (req.body.name && req.body.number && req.body.password && req.body.email) {
        var userData = {
            name: req.body.name,
            number: req.body.number,
            email: req.body.email,
            password: req.body.password
        }
        user.create(userData, (err, user) => {
            if (err) return next(err)

            return res.redirect('/login')
        })


    } else {
        let err = new Error('you need to enter info')
        err.status = 400
        return next(err)
    }

})

///get /

route.get('/', (req, res, next) => {
    return res.render('index', { title: 'HOME PAGE' })
})

//get /contact
route.get('/contact', (req, res, next) => {
        return res.render('contact', { title: 'CONTACT' })
    })
    //get /about
route.get('/about', (req, res, next) => {
    return res.render('about', { title: 'ABOUT' })
})
module.exports = route