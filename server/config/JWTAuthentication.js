import passport from "passport";
const authenticateJWT = (req, res, next) => {
  passport.authenticate("jwt", { session: false }, (err, user, info) => {
    if (err) {
      return res.status(500).json({
        success: false,
        message: "Internal Server Error",
      });
    }
    if (!user) {
      return res.status(401).json({
        success: false,
        isLoggedIn: false,
        message: "Invalid Request. Please Sign In Your Account",
      });
    }
    req.user = user;
    next();
  })(req, res, next);
};

export { authenticateJWT };
