const mongoose = require('mongoose');

const trainSchema = new mongoose.Schema({
  from: String,
  to: String,
  // Add other fields as needed
});

const Train = mongoose.model('Train', trainSchema);

module.exports = Train;
