"use strict";

module.exports = (error, req, res, next) => {
  res.status(500).json({
    code: 500,
    message: `Internal server error: ${error}`,
  });
};
