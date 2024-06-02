import jwt from "jsonwebtoken";
// import dotenv from "dotenv";
// dotenv.config();

export const decodeJWT = async (token) => {
  return jwt.verify(token, process.env.JWT_SECRET);
};
