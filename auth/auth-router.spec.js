
  const request = require("supertest");

  const authRouter = require("./auth-router.js");
  const db = require("../database/dbConfig.js");
  
  
  describe("Authorization end points", function () {
  describe("POST /register", function () {
    // beforeEach(async () => {
    //   await db("hobbits").truncate(); // empty the table and reset the id back to 1
    // });

    it("return 201 on success", function () {
      return request(authRouter)
        .post("/register")
        .send({ username: "super1", password:"super1" })
        .expect(201)
    });

    it('should returned saved user"', function () {
      return request(authRouter)
        .post("/register")
        .send({ username: "super3", password:'super1' })
        .then(res => {
          expect(res.body.username).toBe("super3");
        });
    });


  });
  describe("/ LOGIN", function () {
    it("should return 200 OK", function () {
      return request(authRouter) // return the async call to let jest know it should wait
        .post("/login")
        .send({username: "rocketlauncher17", password: "prayer321"})
        .then(res => {
          // assert that the HTTP status code is 200
          expect(res.status).toBe(200);
        });
    });
    it("should return message saying Welcome!", function () {
        return request(authRouter)
          .post("/login")
          .send({username:"rocketlauncher17", password: "prayer321"})
          .then(res => {
            expect(res.body.message).toBe("Welcome!");
          });
      });
  });
});

