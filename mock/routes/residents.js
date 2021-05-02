const express = require('express');

const router = express.Router();

const logic = require('../logic');

router.get('/', (req, res) => {
  const residents = logic.resident.query();

  res.json({ residents });
});

router.get('/:residentId', (req, res) => {
  const residentId = Number(req.params.residentId);
  const resident = logic.resident.fetch(residentId);

  res.json(resident);
});

router.post('/', (req, res) => {
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
  const resident = logic.resident.register({
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

  // res.status(400);
  // res.json({
  //   message: '住所を入力して下さい',

  // });
  // res.status(400);
  // res.json({
  //   message: '性別を入力して下さい',
  // });
});

router.put('/:residentId', (req, res) => {
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

  // res.status(400);
  // res.json({
  //   message: '名前を入力して下さい',
  // });
  // res.status(400);
  // res.json({
  //   message: '住所を入力して下さい',
  // });
  // res.status(400);
  // res.json({
  //   message: '性別を入力して下さい',
  // });
});

router.delete('/:residentId', (req, res) => {
  const residentId = Number(req.params.residentId);
  logic.resident.destory(residentId);

  res.sendStatus(204);
});

module.exports = router;
