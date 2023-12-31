"use strict";
const { UseCaseError } = require("uu_appg01_server").AppServer;

class Number02MainUseCaseError extends UseCaseError {
  static get ERROR_PREFIX() {
    return "uu-number02-main/";
  }

  constructor(dtoOut, paramMap = {}, cause = null) {
    if (paramMap instanceof Error) {
      cause = paramMap;
      paramMap = {};
    }
    super({ dtoOut, paramMap, status: 400 }, cause);
  }
}

module.exports = Number02MainUseCaseError;
