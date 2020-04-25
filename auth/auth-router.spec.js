
  const request = require("supertest");

  const server = require("../api/server.js");
  const db = require("../database/dbConfig.js");
  
  
  describe("Authorization end points", function () {
  describe("POST /register", function () {
    beforeEach(async () => {
      await db("users").truncate(); // empty the table and reset the id back to 1
    });

    it("return 201 on success", function () {
        // WILL throw if user is already registered
      return request(server)
        .post("/api/auth/register")
        .send({
            username:"rocket1717",
            password:"p321"
        })
        .then(res => {
            // assert that the HTTP status code is 201
            console.log(res.status, res.body);
            expect(res.status).toBe(201);
          });
    });

  });
describe('/ REGISTER', function (){
    it('should returned success message"', function () {
        // WILL throw if user is already registered
      return request(server)
        .post("/api/auth/register")
        .send({ username: "super", password:'super1' })
        .then(res => {
          expect(res.body.message).toBe("registration complete!");
        });
    });
})

  describe("/ LOGIN", function () {
    it("should return 200 OK", function () {
      return request(server) // return the async call to let jest know it should wait
        .post("/api/auth/login")
        .send({username: "super", password: "super1"})
        .then(res => {
          // assert that the HTTP status code is 200
          expect(res.status).toBe(200);
        });
    });
    it("should return message saying Welcome!", function () {
        return request(server)
          .post("/api/auth/login")
          .send({username:"super", password: "super1"})
          .then(res => {
            expect(res.body.message).toBe("Welcome!");
          });
      });
  });
});

