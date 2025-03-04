const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
    name: String,
    contact: String,
    date: Date,
    time : String,
    guests: Number
});

module.exports = mongoose.model('Booking', bookingSchema);
