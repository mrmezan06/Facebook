const User = require("../models/User");

exports.validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
};

exports.validateLength = (string, min, max) => {
  return string.length >= min && string.length <= max;
};

exports.validateUsername = async (username) => {
  let a = false;
  do {
    username += (new Date() * Math.random()).toString().substring(0, 1);
    let check = await User.findOne({ username });
    if (check) {
      username += (new Date() * Math.random()).toString().substring(0, 1);
      a = true;
    } else {
      a = false;
    }
  } while (a);
  return username;
};
