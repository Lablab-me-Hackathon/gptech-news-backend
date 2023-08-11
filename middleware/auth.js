import jwt from "jsonwebtoken";
import { UnAuthenticatedError } from "../errors/index.js";

const auth = async (req, res, next) => {
  const token = req.cookies.token;

  if (!token) {
    throw new UnAuthenticatedError("authentication invalid.");
  }

  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    // req.user = payload
    req.user = { userId: payload.userId };
    next();
  } catch (error) {
    throw new UnAuthenticatedError("authentication invalid.");
  }
};

export default auth;
