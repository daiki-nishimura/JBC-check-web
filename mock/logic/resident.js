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
  const residentData = data.residents.find((r) => r.id === residentId);

  residentData.name = name;
  residentData.birthday = birthday;
  residentData.gender = gender;
  residentData.height = height;
  residentData.weight = weight;
  residentData.allergies = allergies;
  residentData.medicalHistory = medicalHistory;
  residentData.preference = preference;
  residentData.lifeHistory = lifeHistory;
  residentData.remarks = remarks;

  return residentData;
};

const destory = (residentId) => {
  const targetIndex = data.residents.findIndex((r) => r.id === residentId);

  data.residents.splice(targetIndex, 1);
};

exports.query = query;
exports.fetch = fetch;
exports.register = register;
exports.update = update;
exports.destory = destory;
