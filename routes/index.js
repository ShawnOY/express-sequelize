'use strict'

const express = require('express')
const router = express.Router()
const models = require('../models')

router.get('/', function(request, response, next) {
  models.Master.findAll()
  .then(masters => {
    response.render('index', {masters: masters})
  })
})

module.exports = router
