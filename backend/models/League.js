const mongoose = require('mongoose');
const {mongo} = require("mongoose");
const Schema = mongoose.Schema;

// Define collection and schema
let League = new Schema({
  _id: {
    type: mongoose.Types.ObjectId,
  },
   name: {
      type: String
   },
   sport: {
      type: String
   },
   teams: [{
    type: mongoose.Types.ObjectId,
     ref: "Team"
   }]
}, {
   collection: 'leagues'
})

module.exports = mongoose.model('League', League)
