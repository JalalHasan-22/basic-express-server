"use strict";

module.exports = (req, res, next) => {
  console.log(`request method: ${req.method} \nrequest path: ${req.path}`);
  next();
};
