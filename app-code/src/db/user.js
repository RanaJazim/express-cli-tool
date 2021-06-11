const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const config = require("config");

const userSchema = new mongoose.Schema({
  name: String,
  email: {
    type: String,
    unique: true,
  },
  password: String,
});

userSchema.pre("save", hashPassword);
function hashPassword(next) {
  var user = this;

  if (!user.password) return next();

  if (!user.isModified("password")) return next();

  bcrypt.genSalt(10, function (err, salt) {
    if (err) return next(err);

    bcrypt.hash(user.password, salt, function (err, hash) {
      if (err) return next(err);
      user.password = hash;
      next();
    });
  });
}

userSchema.method("comparePassword", async function (password) {
  return await bcrypt.compare(password, this.password);
});

userSchema.method("generateToken", function (fields = {}) {
  const userWithoutPassword = excludePasswordField(this);
  const token = jwt.sign(
    { ...userWithoutPassword, ...fields },
    config.get("jwt.secret")
  );
  return token;
});

const User = mongoose.model("User", userSchema);
module.exports = User;

function excludePasswordField(userModel) {
  const userFields = userModel._doc;
  const { password, _userFields } = userFields;

  return _userFields;
}
