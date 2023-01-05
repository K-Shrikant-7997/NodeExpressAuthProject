const express = require('express');
const app = express();
app.use((req, res, next) => {
  const authHeader = req.get('auth');
  if (!authHeader || authHeader !== 'abc123') {
    res.status(401).send({
      Error: {
        errcode: '401 - Unauthorized access',
        errormessage: 'Login to access the requested resource'
      }
    });
  } else {
    next();
  }
});
app.get('/getNumber', (req, res) => {
  res.send('123-456-7890');
});
app.get('/getName', (req, res) => {
  const authHeader = req.get('auth');
  if (!authHeader || authHeader !== 'abc123') {
    res.status(401).send({
      Error: {
        errcode: '401 - Unauthorized access',
        errormessage: 'Login to access the requested resource'
      }
    });
  } else {
    res.send('Shrikant kambale');
  }
});
app.listen(4000, () => {
  console.log('Server listening on port 4000');
});
