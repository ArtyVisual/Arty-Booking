const mongoose = require('mongoose');

const HotelSchema = new mongoose.Schema({
  city: String,
  price: Number,
  img: String, // Add img field to store the image identifier
});

const Hotel = mongoose.model('Hotel', HotelSchema);

module.exports = Hotel;
