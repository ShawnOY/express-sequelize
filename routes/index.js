'use strict'

const express = require('express')
const router = express.Router()
const models = require('../models')

router.get('/', (request, response) => {
  models.Master.findAll()
  .then(masters => {
    response.render('index', {masters: masters})
  })
})

router.route('/master')
.get((request, response) => {
  response.render('masterForm')
})
.post((request, response) => {
  const postData = request.body

  models.Master.create({
    name: postData.masterName
  })
  .then(master => {
    return models.Pet.create({
      name: postData.petName,
      MasterId: master.id
    })
  })
  .then(pet => {
    response.redirect('/')
  })
})

module.exports = router
