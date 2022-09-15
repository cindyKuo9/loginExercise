const db = require('../../config/mongoose')
const sampleSchema = require('../shemaSample')
const samples = require('./sampleJson.json')

db.once('open', () => {
  sampleSchema.create(samples)
    .then(() => { console.log('sampleSeeder done.') })
    .catch(error => console.log(error))
    .finally(() => db.close())
})