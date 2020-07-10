const jwt = require("jsonwebtoken");
const User = require("../models/users");

const auth = async (req, res, next) => {
  try {
    const token = req.header("Authorization").split(" ")[1];

    //console.log(token)

    const decoded = jwt.verify(token, "mysuperdupersecret");
    //console.log(decoded);

    const user = await User.findById(decoded.userId).select({ password: 0 });

    if (!user) {
      throw new Error(); //fires the code inside the catch error
    }

    req.user = user;
    next();
  } catch (err) {
    res.json({ msg: "Not Authorized" });
  }
};

module.exports = auth;
