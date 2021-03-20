require('./migration');

// eslint-disable-next-line import/no-extraneous-dependencies
const express = require('express');
const routers = require('./routes');

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Mock API is running. Hello Jbc Check.');
});

app.use('/api', routers);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
