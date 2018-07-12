const utils = require('./utils');
const expect = require('expect');

it('should add 2 numbers', () => {
  var res = utils.add(33, 11);
  expect(res)
    .toBe(44)
    .toBeA('number');
});

it('should add to number asynchronously', (done) => {
  var res = utils.asyncAdd(10, 2, (sum) => {
    expect(sum).toBe(12).toBeA('number');
    done();
  });
});

it('should square a number', () => {
  var res = utils.square(9);
  expect(res)
    .toBe(81)
    .toBeA('number');
});

it('should square a number asynchronously', (done) => {
  utils.asyncSquare(10, (result) => {
    expect(result).toBe(100).toBeA('number');
    done();
  })
});

it('should set the names correctly', () => {
  var user = {
    age: 24,
    location: 'London'
  };
  utils.setName(user, 'Sofiane OUAFIR');
  expect(user)
    .toInclude({
      firstname: 'Sofiane',
      lastname: 'OUAFIR'
    });
});

