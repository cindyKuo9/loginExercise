const express = require('express')
const router = express.Router()
const accountDb = require('../../models/account')

router.get('/', (req, res) => {
  if (req.session.user) {
    res.render('welcome', { firstName: req.session.user })
  } else {
    res.render('index')
  }
})

router.get('/logout', (req, res) => {
  if (req.session.user) {
    req.session.destroy()
  }
  res.redirect('/')
})

router.post('/', (req, res) => {
  const email = req.body.inputEmail
  const pwd = req.body.inputPassword

  accountDb.findOne({ email: email })
    .lean()
    .then(user => {
      if (user) {
        if (user.password === pwd) {
          req.session.user = user.firstName
          return res.render('welcome', { firstName: user.firstName })
        }
      }
      return res.render('index', { error: "error" })
    })
})

module.exports = router