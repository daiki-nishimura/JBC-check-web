require('./migration');

const express = require('express');
const cors = require('cors');

const routers = require('./routes');

const app = express();


const port = 3000;

app.use(cors());

app.use(express.json());

app.use(cors({
  origin: 'http://localhost:8080',
  credentials: true,
  optionsSuccessStatus: 200 
}))

app.get('/', (req, res) => {
  res.send('Mock API is running. Hello Jbc Check.');
});

app.use('/api', routers);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
