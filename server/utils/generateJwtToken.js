// const jwt = require("jsonwebtoken");
// const { JWT_SECRET } = require("./keys");
import jwt from "jsonwebtoken";
// const JWT_SECRET = process.env.JWT_SECRET;

export const generateToken = (id, tokenValidity = "30d") => {
  // console.log(tokenValidity);
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: tokenValidity,
  });
};
