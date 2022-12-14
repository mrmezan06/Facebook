const { validateEmail, validateUsername } = require("../helpers/validation");
const { validateLength } = require("../helpers/validation");
const User = require("../models/User");
const bcrypt = require("bcrypt");
const { generateToken } = require("../helpers/token");
const { sendVerificationEmail } = require("../helpers/mailer");
const jwt = require("jsonwebtoken");

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
    //console.log(cryptPassword);

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

    // Generate token
    const emailVerficationToken = generateToken(
      {
        id: user._id.toString(),
      },
      "30m"
    );

    // Email verification
    const url = `${process.env.BASE_URL}/activate/${emailVerficationToken}`;
    sendVerificationEmail(user.email, user.first_name, url);
    const token = generateToken({ id: user._id.toString() }, "7d");

    res.send({
      id: user._id,
      username: user.username,
      picture: user.picture,
      first_name: user.first_name,
      last_name: user.last_name,
      token: token,
      verified: user.verified,
      message:
        "Registration Successfull ! Please activate your email to explore more",
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.activateAccount = async (req, res) => {
  try {
    const { token } = req.body;
    const user = jwt.verify(token, process.env.TOKEN_SECRET);
    const check = await User.findById({ _id: user.id });
    if (check.verified) {
      return res.status(400).json({
        message: "Account already activated!",
      });
    } else {
      await User.findByIdAndUpdate({ _id: user.id }, { verified: true });
      return res.status(200).json({
        message: "Account has been activated successfully!",
      });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({
        message: "User does not exist",
      });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({
        message: "Wrong password!",
      });
    }
    if (!user.verified) {
      return res.status(400).json({
        message: "Please activate your account first",
      });
    }
    const token = generateToken({ id: user._id.toString() }, "7d");

    res.send({
      id: user._id,
      username: user.username,
      picture: user.picture,
      first_name: user.first_name,
      last_name: user.last_name,
      token: token,
      verified: user.verified,
      message:
        "Login successful! Welcome back " +
        user.first_name +
        " " +
        user.last_name,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
