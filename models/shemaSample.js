const mongoose = require('mongoose')
const Schema = mongoose.Schema

const sampleSchema = new Schema({
  n1: {
    type: String,
    required: true
  },
  n2: {
    type: Boolean,
    default: false
  }
})

module.exports = mongoose.model('sample', sampleSchema)