exports.validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
};

exports.validateLength = (string, min, max) => {
  return string.length >= min && string.length <= max;
};
