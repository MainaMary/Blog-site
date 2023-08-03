import jwt from "jsonwebtoken";

require('dotenv').config()

const SECRET_KEY = process.env.JWT_SECRET_KEY || "somethingveryrandomnaround";

const expiresIn = 60 * 60 * 24 * 60;
const createToken = ( email ) => {
    return jwt.sign({ email: email}, SECRET_KEY, {expiresIn})
};


const authHelper = ( req, res ) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    return jwt.verify(token, SECRET_KEY);
  } catch (error) {
    return res.status(401).json({
      message: 'Auth failed'
  });
  }
}


const checkAuth = (req, res, next) => {
      req.userData = authHelper(req, res);
      next();
  };


const getUser = (req, res) => {
    return authHelper(req, res)
}
export { createToken, checkAuth, getUser };
