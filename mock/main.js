require('./migration');

const express = require('express');
const routers = require('./routes');

const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Mock API is running. Hello Jbc Check.');
});

app.use('/api', routers);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
