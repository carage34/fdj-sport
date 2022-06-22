const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema
let Team = new Schema({
  _id: {
    type: mongoose.Types.ObjectId,
  },
  name: {
    type: String
  },
  players: [{
    type: mongoose.Types.ObjectId,
    ref: "Player"
  }],
  thumbnail: {
    type: String
  },
}, {
  collection: 'teams'
})

module.exports = mongoose.model('Team', Team)
