const db = require('../schema');
const Business = require('../models/business');

const Businesses = new db.Collection();

Businesses.model = Business;

module.exports = Businesses;
