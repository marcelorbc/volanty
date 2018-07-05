'use strict';

var  UserModel = require('../models/User');


exports.add = function (body) {
  return new Promise(function (resolve, reject) {
    if (body.userName === 3) {
      reject("username invalido");
    }
    
    let u = new UserModel(body);
    u.save(function (err, savedObject) {
      if (err) {
        reject(err);
      } else {
        resolve(u);
      }
    });
  });
}