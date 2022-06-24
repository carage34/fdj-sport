const express = require('express')
const path = require('path')
const mongoose = require('mongoose')
const cors = require('cors')
const bodyParser = require('body-parser')

// Connexion à mongoDB
mongoose
  .connect('mongodb://127.0.0.1:27017/fdj')
  .then((x) => {
    console.log(`Connecté à Mongo! Nom de la base: "${x.connections[0].name}"`)
  })
  .catch((err) => {
    console.error('Erreur de connexion à la base', err.reason)
  })

// Configuration des routes et des ports
const teamRoute = require('./routes/team.route');
const leagueRoute = require('./routes/league.route');
const playerRoute = require('./routes/player.route');
const app = express()
app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: false,
  }),
)
app.use(cors())
app.use(express.static(process.cwd()+"../my-app/dist/fdj/"));
app.use('/teams', teamRoute);
app.use('/leagues', leagueRoute);
app.use('/players', playerRoute);


app.use('/', express.static(path.join(__dirname, '/../dist/fdj/')))

// Create port
const port = process.env.PORT || 4000
const server = app.listen(port, () => {
  console.log('Connecté au port ' + port)
});

