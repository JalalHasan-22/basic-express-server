"use strict";

const validator = require("../src/middleware/validator");

describe("testing the validator middleware", () => {
  let req = {};
  let res = {};
  let next = jest.fn();
  it("tests the successful call of the next method", () => {
    req.query = {
      name: test,
    };
    validator(req, res, next);
    expect(next).toHaveBeenCalled();
  });
  // this time, the req object has no name query
  it("test the failing next call", () => {
    validator(req, res, next);
    expect(next).toHaveBeenCalled();
  });
});
