const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  description: String,
  cv: String,
});

const userModel = new mongoose.model('User Section', userSchema);

module.exports = userModel;
