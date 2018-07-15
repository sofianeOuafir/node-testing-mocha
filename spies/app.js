// const db = require('./db.js');

var handleSignUp = (email, password, db = require('./db.js')) => {
  // check if the email already exist
  db.saveUser({
    email,
    password
  });
  // send welcome email
}

module.exports = { 
  handleSignUp
};

handleSignUp('sof@live.fr', '123456');