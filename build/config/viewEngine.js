"use strict";

var _express = _interopRequireDefault(require("express"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
// ES6
// var express = require('express'); var:toan cuc , let: bien cuc bo

var configViewEngine = function configViewEngine(app) {
  //arrow function
  app.use(_express["default"]["static"]("./src/public"));
  //client acess to Data.
  app.set("view engine", "ejs"); //logic trong file html
  app.set("views", "./src/views"); //=>caau hinh mvc
};
module.exports = configViewEngine;