const Player = require('../models/Player')
const Team = require("../models/Team");
const mongoose = require("mongoose");

function getPlayers(option){
  return Player.find(option).sort({nom: 'asc'})
}

exports.getAllPlayers = (req, res) => {
  getPlayers()
    .then(players => res.status(200).json(players))
    .catch(() => res.status(500).send('Impossible de récupérer tout les joueurs'));
}

exports.getPlayer = (req, res) => {
  Player.findById(req.params.id)
    .then(player => res.status(200).json(player))
    .catch(() => res.status(500).send('Impossible de récupérer le joueur'));
}

exports.createPlayer = (req, res) => {
  const player = new Player({
    _id: new mongoose.Types.ObjectId,
    name: req.body.name,
    thumbnail: req.body.thumbnail,
    position: req.body.position,
    signin: {
      amount: req.body.amount,
      currency: req.body.currency
    },
    born: new Date(req.body.born)
  })

    //Ajoute le joueur à l'équipe
  Team.findByIdAndUpdate(req.body.teamId,  {$push: {"players": {_id: mongoose.mongo.ObjectId(player._id)}}}).then((result) => {console.log(result)}).catch((error) => console.log(error));
  player.save().then(result => res.status(200).json({message: result})).catch(() => res.status(500).send('Impossible de créer le joueur'));
}
