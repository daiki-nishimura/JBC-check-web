// eslint-disable-next-line import/no-extraneous-dependencies
const express = require('express');

const router = express.Router();

const logic = require('../logic');

router.get('/', (req, res) => {
  const residents = logic.resident.query();
  res.json(residents);
});

router.get('/:residentId', (req, res) => {
  const residentId = Number(req.param.residentId);
  const resident = logic.resident.fetch(residentId);

  res.json(resident);
});

router.post('/', (req, res) => {
  const { resident } = req.body;
  const newResident = logic.resident.register(resident);

  res.status(201);
  res.json(newResident);

  // res.status(200);
  // res.json(resident);

  // res.status(200);

  // res.status(201);
});

router.put('/:residentId', (req, res) => {
  const residentId = Number(req.param.residentId);
  const resident = logic.resident.update(residentId);

  res.json(resident);
});

router.delete('/:residentId', (req, res) => {
  const residentId = Number(req.param.residentId);
  logic.resident.destory(residentId);

  res.sendStatus(200);
});

module.exports = router;
