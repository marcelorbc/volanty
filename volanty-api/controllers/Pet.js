'use strict';

var utils = require('../utils/writer.js');
var Volanty = require('../../volanty-services')
var mongoose = require('mongoose');

module.exports.addPet = function addPet (req, res, next) {
  var body = req.swagger.params['body'].value;
  Volanty.Services.UserService.add({userName:1})
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
