const data = require('../data');
const logic = require('.');

const query = () => {
  console.log(data.residents);
  return data.residents;
};

const fetch = (residentId) => {
  console.log(residentId);
};

const register = () => {
  register.id = logic.util.createUniqueId();
  console.log(data.residents);
};

const update = (residentId) => {
  console.log(residentId);
  console.log(data.residents);
};

const destory = (residentId) => {
  console.log(residentId);
  console.log(data.residents);
};

exports.query = query;
exports.fetch = fetch;
exports.register = register;
exports.update = update;
exports.destory = destory;
