'use strict'

const express = require('express');
const router = express.Router();
const models = require('../models')

router.route('/')
  .get((request, response) => {
    models.Master.findAll()
      .then(masters => {
        response.render('master/index', {masters: masters})
      })
  })

router.route('/:masterId')
  .get((request, response) => {
    models.Master.findById(request.params.masterId, {
      include: [models.Pet]
    })
      .then(master => {
        response.render('master/show', {master: master})
      })
  })

router.route('/create')
  .get((request, response) => {
    response.render('master/create')
  })
  .post((request, response) => {
    models.Master.create({
      name: request.body.name
    })
      .then(() => {
        console.log('enter')
        response.redirect('/master')
      })
  })

module.exports = router;
