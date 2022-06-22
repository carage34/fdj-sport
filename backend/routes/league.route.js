const express = require('express')
const app = express()
const leagueRoute = express.Router()

// Employee model
let League = require('../models/League')

// Ajouter une team
leagueRoute.route('/create').post((req, res, next) => {
  League.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Get All Employees
leagueRoute.route('/').get((req, res) => {
  League.find((error, data) => {
    if (error) {
      //return next(error)
      console.log(error)
    } else {
      res.json(data);
    }
  }).populate('teams')
})

// Get single employee
leagueRoute.route('/read/:id').get((req, res) => {
  League.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Update employee
leagueRoute.route('/update/:id').put((req, res, next) => {
  League.findByIdAndUpdate(
    req.params.id,
    {
      $set: req.body,
    },
    (error, data) => {
      if (error) {
        return next(error)
        console.log(error)
      } else {
        res.json(data)
        console.log('Data updated successfully')
      }
    },
  )
})

// Delete employee
leagueRoute.route('/delete/:id').delete((req, res, next) => {
  League.findOneAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.status(200).json({
        msg: data,
      })
    }
  })
})

module.exports = leagueRoute
