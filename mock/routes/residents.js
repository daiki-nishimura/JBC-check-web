const express = require('express');

const router = express.Router();

const logic = require('../logic');

router.get('/', (req, res) => {
  const residents = logic.resident.query();

  res.json(residents);
});

router.get('/:residentId', (req, res) => {
  const residentId = Number(req.params.residentId);
  const resident = logic.resident.fetch(residentId);

  res.json(resident);
});

router.post('/register', (req, res) => {
  const {
    name,
    birthday,
    gender,
    height,
    weight,
    allergies,
    medicalHistory,
    preference,
    lifeHistory,
    remarks,
  } = req.body;
  const addResident = logic.resident.register(
    name,
    birthday,
    gender,
    height,
    weight,
    allergies,
    medicalHistory,
    preference,
    lifeHistory,
    remarks
  );

  res.status(201);
  res.json(addResident);
});

router.put('/edit/:residentId', (req, res) => {
  const residentId = Number(req.params.residentId);
  const {
    name,
    birthday,
    gender,
    height,
    weight,
    allergies,
    medicalHistory,
    preference,
    lifeHistory,
    remarks,
  } = req.body;
  const resident = logic.resident.update(residentId, {
    name,
    birthday,
    gender,
    height,
    weight,
    allergies,
    medicalHistory,
    preference,
    lifeHistory,
    remarks,
  });

  res.status(201);
  res.json(resident);
});

router.delete('/delete/:residentId', (req, res) => {
  const residentId = Number(req.params.residentId);
  logic.resident.destory(residentId);

  res.sendStatus(204);
});

module.exports = router;
