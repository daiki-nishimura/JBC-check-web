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
  //   message: ['名前を入力して下さい', '住所を入力して下さい', '性別を入力して下さい'],
  //   resident,
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
  //   message: [
  //     '身長は半角数字で入力して下さい',
  //     '体重は半角数字で入力して下さい',
  //     '生年月日は半角数字で入力して下さい',
  //   ],
  //   resident,
  // });
});

router.delete('/:residentId', (req, res) => {
  const residentId = Number(req.params.residentId);
  logic.resident.destory(residentId);

  res.sendStatus(204);

  // res.status(400);
  // res.json({
  //   message: ['利用者を選択して下さい'],
  // });
});

module.exports = router;
