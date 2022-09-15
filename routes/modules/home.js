const express = require('express')
const router = express.Router()
const accountDb = require('../../models/account')


router.get('/', (req, res) => {
  res.render('index')
})

router.post('/', (req, res) => {
  const email = req.body.inputEmail
  const pwd = req.body.inputPassword

  accountDb.findOne({ email: email })
    .lean()
    .then(user => {
      if (user) {
        if (user.password === pwd) {
          return res.render('welcome', { firstName: user.firstName })
        }
      }
      return res.render('index', { error: "error" })
    })
})

module.exports = router