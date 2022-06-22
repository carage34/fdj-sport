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
// app.use(express.static(path.join(__dirname, 'dist/mean-stack-crud-app')))
// app.use('/', express.static(path.join(__dirname, 'dist/mean-stack-crud-app')))
app.use('/teams', teamRoute);
app.use('/leagues', leagueRoute);
app.use('/players', playerRoute);

// Create port
const port = process.env.PORT || 4000
const server = app.listen(port, () => {
  console.log('Connecté au port ' + port)
});

// error handler
// app.use((err) => {
//   console.error(err.message) // Log error message in our server's console
//   if (!err.statusCode) err.statusCode = 500 // If err has no specified error code, set error code to 'Internal Server Error (500)'
//   res.status(err.statusCode).send(err.message) //  All HTTP requests must have a response, so let's send back an error with its status code and message
// });