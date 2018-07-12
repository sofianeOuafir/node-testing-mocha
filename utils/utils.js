module.exports.add = (a, b) => a + b;
module.exports.square = (x) => x * x;
module.exports.setName = (user, fullname) => {
  var names = fullname.split(" ");
  var [firstname, lastname] = names;
  user.firstname = firstname;
  user.lastname = lastname;
};