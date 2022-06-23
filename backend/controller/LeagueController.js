const League = require('../models/League')
const mongoose = require("mongoose");

function getLeagues(option){
  return League.find(option).sort({nom: 'asc'})
}

exports.getAllLeagues = (req, res) => {
  getLeagues().populate({path: 'teams'})
    .then(leagues => res.status(200).json(leagues))
    .catch(() => res.status(500).send('Impossible de récupérer toute les leagues'));
}

exports.createLeague = (req, res) => {
  const league = new League({
    _id: new mongoose.Types.ObjectId,
    name: req.body.name,
    sport: req.body.sport
  })
  league.save().then(result => res.status(200).json({message: result})).catch(() => res.status(500).send('Impossible de créer la League'));
}
