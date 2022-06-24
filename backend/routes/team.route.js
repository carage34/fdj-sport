const express = require('express')
const router = express.Router()

// Team route
let Team = require('../models/Team')
const TeamController = require("../controller/TeamController");

// Récupère toutes les teams
router.get('/', TeamController.getAllTeam);
// Récupère une team
router.get('/:id', TeamController.getTeam);
// Création d'une team
router.post('/add', TeamController.createTeam);
// Miseà jour d'une team (et de sa league)
router.post('/update/:id', TeamController.updateTeam);

module.exports = router
