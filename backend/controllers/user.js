const { validateEmail, validateUsername } = require("../helpers/validation");
const { validateLength } = require("../helpers/validation");
const User = require("../models/User");
const bcrypt = require("bcrypt");

exports.register = async (req, res) => {
  try {
    const {
      first_name,
      last_name,
      email,
      username,
      password,
      bYear,
      bMonth,
      bDay,
      gender,
    } = req.body;

    // Email validation
    if (!validateEmail(email)) {
      return res.status(400).json({
        message: "Invalid email address",
      });
    }
    // Check if user already exists
    const check = await User.findOne({ email });
    if (check) {
      return res.status(400).json({
        message: "User already exists, please login instead or reset password",
      });
    }

    // Name length validation
    if (!validateLength(first_name, 3, 30)) {
      return res.status(400).json({
        message: "First name must be between 3 and 20 characters",
      });
    }
    if (!validateLength(last_name, 3, 30)) {
      return res.status(400).json({
        message: "Last name must be between 3 and 20 characters",
      });
    }
    // Password length validation
    if (!validateLength(password, 6, 40)) {
      return res.status(400).json({
        message: "Password must be between 6 and 40 characters",
      });
    }
    // Password encryption using bcrypt
    const cryptPassword = await bcrypt.hash(password, 12);
    console.log(cryptPassword);

    // Username validation
    const tempUsername = first_name.toLowerCase();
    let newUsername = await validateUsername(tempUsername);
    const user = await new User({
      first_name,
      last_name,
      email,
      username: newUsername,
      password: cryptPassword,
      bYear,
      bMonth,
      bDay,
      gender,
    }).save();

    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
