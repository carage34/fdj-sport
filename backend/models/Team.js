const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema
let Team = new Schema({
  _id: {
    type: Number
  },
  name: {
    type: String
  },
  players: [],
  thumbnail: {
    type: String
  },
}, {
  collection: 'teams'
})

module.exports = mongoose.model('Team', Team)
