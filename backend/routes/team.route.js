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

// // Ajouter un employé
// teamRoute.route('/create').post((req, res, next) => {
//   Team.create(req.body, (error, data) => {
//     if (error) {
//       return next(error)
//     } else {
//       res.json(data)
//     }
//   })
// })
//
// // Get All Employees
// teamRoute.route('/').get((req, res) => {
//   Team.find((error, data) => {
//     if (error) {
//       return next(error)
//     } else {
//       res.json(data);
//     }
//   }).populate('players')
// })
//
// // Get single employee
// teamRoute.route('/read/:id').get((req, res) => {
//   Team.findById(req.params.id, (error, data) => {
//     if (error) {
//       return next(error)
//     } else {
//       res.json(data)
//     }
//   })
// })
//
// // Update employee
// teamRoute.route('/update/:id').put((req, res, next) => {
//   Team.findByIdAndUpdate(
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
// teamRoute.route('/delete/:id').delete((req, res, next) => {
//   Team.findOneAndRemove(req.params.id, (error, data) => {
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
