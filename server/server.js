const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.status(404).send({
    error: 'Page not found.',
    name: 'Todo app v1.0'
  });
});

app.get('/users', (req, res) => {
  res.send([{
    name: 'Sofiane',
    age: 25
  }, {
    name: 'Oliver',
    age: 22
  }, {
    name: 'Anthony',
    age: 25
  }]);
});

app.listen(3000, () => {
  console.log('Server read on port 3000');
});

module.exports = {
  app
};