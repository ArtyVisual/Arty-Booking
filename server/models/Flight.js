const mongoose = require('mongoose');

const flightSchema = new mongoose.Schema({
  from: String,
  to: String,
  // Add other fields as needed
});

const Flight = mongoose.model('Flight', flightSchema);

module.exports = Flight;
