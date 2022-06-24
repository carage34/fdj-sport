const express = require('express')
const app = express()
const router = express.Router()

// Employee model
let Player = require('../models/Player')
const PlayerController = require("../controller/PlayerController");

router.get('/', PlayerController.getAllPlayers);
router.post('/add', PlayerController.createPlayer);

module.exports = router
