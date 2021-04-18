const data = require('../data');
const logic = require('.');

const query = () => data.residents;

const fetch = (residentId) => data.residents.find((r) => r.id === residentId);

const register = (residents) => {
  const resident = residents;

  resident.id = logic.util.createUniqueId();
  resident.deleted = false;

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
  const resident = data.residents.find((r) => r.id === residentId);

  resident.name = name;
  resident.birthday = birthday;
  resident.gender = gender;
  resident.height = height;
  resident.weight = weight;
  resident.allergies = allergies;
  resident.medicalHistory = medicalHistory;
  resident.preference = preference;
  resident.lifeHistory = lifeHistory;
  resident.remarks = remarks;

  return resident;
};

const destory = (
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
  const resident = data.residents.find((r) => r.id === residentId);

  resident.name = name;
  resident.birthday = birthday;
  resident.gender = gender;
  resident.height = height;
  resident.weight = weight;
  resident.allergies = allergies;
  resident.medicalHistory = medicalHistory;
  resident.preference = preference;
  resident.lifeHistory = lifeHistory;
  resident.remarks = remarks;

  resident.deleted = true;

  return resident;
};

exports.query = query;
exports.fetch = fetch;
exports.register = register;
exports.update = update;
exports.destory = destory;
