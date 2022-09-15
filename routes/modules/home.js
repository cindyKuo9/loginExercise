const express = require('express')
const router = express.Router()
const accountSchema = require('../../models/account')


router.get('/', (req, res) => {
  res.render('index')
})

module.exports = router