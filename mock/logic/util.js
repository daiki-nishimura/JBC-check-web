// eslint-disable-next-line import/no-extraneous-dependencies
const uniqueId = require('lodash.uniqueid');

const createUniqueId = () => Number(uniqueId());

exports.createUniqueId = createUniqueId;
