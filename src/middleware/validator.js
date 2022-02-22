"use strict";

module.exports = (req, res, next) => {
  if (req.query.hasOwnProperty("name")) {
    next();
  } else {
    next(`Please enter a valid query (name) in the URL ex: /person?name=john`);
  }
};
