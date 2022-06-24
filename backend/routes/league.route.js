const express = require('express')
const LeagueController = require('../controller/LeagueController')
const app = express()
const router = express.Router()

// Employee model
let League = require('../models/League')

router.get('/', LeagueController.getAllLeagues);
router.post('/add', LeagueController.createLeague);

module.exports = router
