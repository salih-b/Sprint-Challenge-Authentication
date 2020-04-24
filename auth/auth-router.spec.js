
  const request = require("supertest");

  const server = require("../api/server.js");
  const db = require("../database/dbConfig.js");
  
  
  describe("Authorization end points", function () {
  describe("POST /register", function () {
    // beforeEach(async () => {
    //   await db("hobbits").truncate(); // empty the table and reset the id back to 1
    // });

    it("return 201 on success", function () {
      return request(server)
        .post("/api/auth/register")
        .send({
            "username":"rocketlauncher17",
            "password":"prayer321"
        })
        .then(res => {
            // assert that the HTTP status code is 201
            expect(res.status).toBe(201);
          });
    });

    it('should returned saved user"', function () {
      return request(server)
        .post("/api/auth/register")
        .send({ username: "super3", password:'super1' })
        .then(res => {
          expect(res.body.message).toBe("registration complete!");
        });
    });


  });
  describe("/ LOGIN", function () {
    it("should return 200 OK", function () {
      return request(server) // return the async call to let jest know it should wait
        .post("/api/auth/login")
        .send({username: "rocketlauncher17", password: "prayer321"})
        .then(res => {
          // assert that the HTTP status code is 200
          expect(res.status).toBe(200);
        });
    });
    it("should return message saying Welcome!", function () {
        return request(server)
          .post("/api/auth/login")
          .send({username:"rocketlauncher17", password: "prayer321"})
          .then(res => {
            expect(res.body.message).toBe("Welcome!");
          });
      });
  });
});

