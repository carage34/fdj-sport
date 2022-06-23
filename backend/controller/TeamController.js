const Team = require('../models/Team')

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
