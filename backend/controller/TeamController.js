const Team = require('../models/Team')
const League = require("../models/League");
const mongoose = require("mongoose");

function getTeams(option){
  return Team.find(option).sort({nom: 'asc'})
}

exports.getAllTeam = (req, res) => {
  getTeams().populate({path: 'players'})
    .then(teams => res.status(200).json(teams))
    .catch(() => res.status(500).send('Impossible de récupérer toute les équipes'));
}

exports.getTeam = (req, res) => {
  Team.findById(req.params.id).populate({path: 'players'})
    .then(team => res.status(200).json(team))
    .catch(() => res.status(500).send('Impossible de récupérer l\'équipe'));
}

exports.createTeam = (req, res) => {
  const team = new Team({
    _id: new mongoose.Types.ObjectId,
    name: req.body.name,
    thumbnail: req.body.thumbnail,
  })
  console.log(req.body.leagueId)
  // Ajoute la team à la league leagueId
  League.findByIdAndUpdate(req.body.leagueId,  {$push: {"teams": {_id: mongoose.mongo.ObjectId(team._id)}}}).then((result) => {console.log(result)}).catch((error) => console.log(error));
  team.save().then(result => res.status(200).json({message: result})).catch(() => res.status(500).send('Impossible de créer l\'équipe'));
}
