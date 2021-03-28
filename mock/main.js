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
app.use(express.json());

app.post('/', (req, res) => {
  // リクエストボディを出力
  console.log(req.body);
  // パラメータ名、nameを出力
  console.log(req.body.name);

  res.send('POST request to the homepage');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
