const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
  {
    email: { type: String, required: true },
    password: { type: String, required: true },
    name: { type: String, required: true },
  },
  { timestamps: true },
  { collection: 'user-collection' }
);

module.exports = mongoose.model('User', userSchema);