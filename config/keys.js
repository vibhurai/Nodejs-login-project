dbPassword =
  "mongodb+srv://user:" +
  encodeURIComponent("user") +
  "@cluster0.jduon.mongodb.net/Passport-login-db?retryWrites=true&w=majority";

module.exports = {
  mongoURI: dbPassword,
};
