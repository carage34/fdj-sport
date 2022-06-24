const express = require('express')
const app = express()
const router = express.Router()

// Employee model
let Player = require('../models/Player')
const PlayerController = require("../controller/PlayerController");

router.get('/', PlayerController.getAllPlayers);
router.post('/add', PlayerController.createPlayer);


// // Ajouter une league
// playerRoute.route('/create').post((req, res, next) => {
//   Player.create(req.body, (error, data) => {
//     if (error) {
//       return next(error)
//     } else {
//       res.json(data)
//     }
//   })
// })
//
// // Get All Employees
// playerRoute.route('/').get((req, res) => {
//   Player.find((error, data) => {
//     console.log(data);
//     if (error) {
//       return next(error)
//     } else {
//       res.json(data)
//     }
//   })
// })
//
// // Get single employee
// playerRoute.route('/read/:id').get((req, res) => {
//   Player.findById(req.params.id, (error, data) => {
//     if (error) {
//       return next(error)
//     } else {
//       res.json(data)
//     }
//   })
// })
//
// // Update employee
// playerRoute.route('/update/:id').put((req, res, next) => {
//   Player.findByIdAndUpdate(
//     req.params.id,
//     {
//       $set: req.body,
//     },
//     (error, data) => {
//       if (error) {
//         return next(error)
//         console.log(error)
//       } else {
//         res.json(data)
//         console.log('Data updated successfully')
//       }
//     },
//   )
// })
//
// // Delete employee
// playerRoute.route('/delete/:id').delete((req, res, next) => {
//   Player.findOneAndRemove(req.params.id, (error, data) => {
//     if (error) {
//       return next(error)
//     } else {
//       res.status(200).json({
//         msg: data,
//       })
//     }
//   })
// })

module.exports = router
