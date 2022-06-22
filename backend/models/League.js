const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema
let League = new Schema({
  _id: {
    type: Number
  },
   name: {
      type: String
   },
   sport: {
      type: String
   },
   teams: []
}, {
   collection: 'leagues'
})

module.exports = mongoose.model('League', League)
