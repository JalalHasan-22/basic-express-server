"use strict";
const { app } = require("../src/server");
const superTest = require("supertest");
const request = superTest(app);

describe("testing the API", () => {
  it("testing home rout", async () => {
    const response = await request.get("/");
    expect(response.text).toEqual("home route");
  });
  it("Testing the person route without a name query", async () => {
    const response = await request.get("/person");
    expect(response.status).toEqual(500);
  });
  it("Testing not found route", async () => {
    const response = await request.get("/asd");
    expect(response.status).toEqual(404);
  });
  it("Testing the person route adding a name query", async () => {
    const response = await request.get("/person?name=jalal");
    expect(response.status).toEqual(200);
    expect(typeof response).toEqual("object");
  });
});
