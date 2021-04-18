const uniqueId = require('lodash.uniqueid');

const createUniqueId = () => Number(uniqueId());

exports.createUniqueId = createUniqueId;
