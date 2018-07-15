const expect = require('expect');
// const rewire = require('rewire');

var app = require('./app');

describe('App', () => {
  it('should call saveUser with user object', () => {
    var db = {
      saveUser: expect.createSpy()
    };

    // app.__set__('db', db);
    app.handleSignUp('foo@bar.com', '123456', db);
    expect(db.saveUser).toHaveBeenCalledWith({
      email: 'foo@bar.com', 
      password: '123456'});
  });
});