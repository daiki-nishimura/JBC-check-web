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
  const residentData =
    (resident,
    data.residents.find((r) => r.id === residentId),
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
    });
  residentData.id = residentId;
  console.log('更新後 data');
  console.log(residentData);

  return residentData;
};

const destory = (residentId) => {
  console.log(data.residents);
  const targetIndex = data.residents.findIndex((r) => r.id === residentId);
  data.residents.splice(targetIndex, 1);
};

exports.query = query;
exports.fetch = fetch;
exports.register = register;
exports.update = update;
exports.destory = destory;
