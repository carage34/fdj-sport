const express = require('express')
const app = express()
const router = express.Router()

// Employee model
let Team = require('../models/Team')
const TeamController = require("../controller/TeamController");

router.get('/', TeamController.getAllTeam);
router.get('/:id', TeamController.getTeam);
router.post('/add', TeamController.createTeam);
router.post('/update/:id', TeamController.updateTeam);

module.exports = router
