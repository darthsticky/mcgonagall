const db = require('../schema');
const User = require('../models/user');

const Users = new db.Collection();

Users.model = User;

module.exports = Users;
