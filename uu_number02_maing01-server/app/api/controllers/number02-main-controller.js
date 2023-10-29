"use strict";
const Number02MainAbl = require("../../abl/number02-main-abl.js");

class Number02MainController {
  init(ucEnv) {
    return Number02MainAbl.init(ucEnv.getUri(), ucEnv.getDtoIn(), ucEnv.getSession());
  }

  load(ucEnv) {
    return Number02MainAbl.load(ucEnv.getUri(), ucEnv.getSession());
  }

  loadBasicData(ucEnv) {
    return Number02MainAbl.loadBasicData(ucEnv.getUri(), ucEnv.getSession());
  }
}

module.exports = new Number02MainController();
