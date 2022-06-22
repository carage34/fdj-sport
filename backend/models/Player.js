const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema
let Player = new Schema({
  _id: {
    type: Number
  },
  name: {
    type: String
  },
  born: {
    type: Date
  },
  position: {
    type: String
  },
  thumbnail: {
    type: String
  },
  signin: {
    amount: Number,
    currency: String
  }
}, {
  collection: 'players'
})

module.exports = mongoose.model('Player', Player)
