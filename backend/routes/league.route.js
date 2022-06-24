const express = require('express')
const LeagueController = require('../controller/LeagueController')
const router = express.Router()

// League Route
let League = require('../models/League')

// Récupère toutes les leagues
router.get('/', LeagueController.getAllLeagues);
// Création d'une league
router.post('/add', LeagueController.createLeague);

module.exports = router
