const express = require('express')
const router = express.Router()

// Player Route
let Player = require('../models/Player')
const PlayerController = require("../controller/PlayerController");
//Récupère tout les joueurs
router.get('/', PlayerController.getAllPlayers);
//Ajoute un joueur
router.post('/add', PlayerController.createPlayer);

module.exports = router
