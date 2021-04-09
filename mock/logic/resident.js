const data = require('../data');
const logic = require('.');

const query = () => data.residents;

const fetch = (residentId) => data.residents.find((r) => r.id === residentId);

const register = (
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
) => {
  const resident = {
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
  };

  resident.id = logic.util.createUniqueId();

  data.residents.push(resident);

  return resident;
};

const update = (
  residentId,
  {
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
  }
) => {
  console.log('更新前 data');

  console.log(data.residents);
  const resident = {
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
  };

  console.log('更新後 data');
  const residentData = data.residents.find((r) => r.id === residentId);
  resident.id = residentData.id;
  console.log(residentData);

  return resident;
};

const destory = (residentId) => {
  console.log('削除前 data');
  console.log(data.residents);
  const targetIndex = data.residents.findIndex((r) => r.id === residentId);
  data.residents.splice(targetIndex, 1);
  console.log('削除後 data');
  console.log(data.residents);
};

exports.query = query;
exports.fetch = fetch;
exports.register = register;
exports.update = update;
exports.destory = destory;
