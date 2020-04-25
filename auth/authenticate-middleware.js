/* 
  complete the middleware code to check if the user is logged in
  before granting access to the next middleware/route handler
*/

const jwt = require("jsonwebtoken");

const secrets = require("../api/secrets.js");

module.exports = (req, res, next) => {
  // tokens are normally sent as the Authorization header
  const token = req.headers.authorization;

  const secret = secrets.jwtSecret;
 console.log('in middleware :)')
  if (token) {
    // verify that the token is valid
    jwt.verify(token, secret, (error, decodedToken) => {
      // if everything is good with the token, the error will be undefined
      if (error) {
        res.status(401).json({ message: "Invalid Credentials, please login" });
      } else {
        req.decodedToken = decodedToken;

        next();
      }
    });
  } else {
    res.status(400).json({ message: "Please provide credentials" });
  }
};