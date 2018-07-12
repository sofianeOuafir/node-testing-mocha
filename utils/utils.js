function add(a, b){
  return a + b;
}

function asyncAdd(a, b, callback) {
  setTimeout(() => {
    callback(a + b);
  }, 1000);
};

function square(x){
  return x * x;
}

function asyncSquare(x, callback) {
  setTimeout(() => {
    callback(x * x);
  }, 1000); 
}

function setName(user, fullname){
  var names = fullname.split(" ");
  var [firstname, lastname] = names;
  user.firstname = firstname;
  user.lastname = lastname;
}

module.exports = {
  add, 
  square,
  setName,
  asyncAdd,
  asyncSquare
}