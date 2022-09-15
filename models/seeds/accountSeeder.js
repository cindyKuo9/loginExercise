const db = require('../../config/mongoose')
const accountSchema = require('../account')
const accounts = require('./accountJson.json')

db.once('open', () => {
  accountSchema.create(accounts)
    .then(() => { console.log('accountSeeder done.') })
    .catch(error => console.log(error))
    .finally(() => db.close())
})