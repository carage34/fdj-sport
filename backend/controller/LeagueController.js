const League = require('../models/League')

function getLeagues(option){
  return League.find(option).sort({nom: 'asc'})
}

exports.getAllLeagues = (req, res) => {
  getLeagues().populate({path: 'teams'})
    .then(leagues => res.status(200).json(leagues))
    .catch(() => res.status(500).send('Impossible de récupérer toute les leagues'));
}
