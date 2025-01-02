const express = require('express');
const Booking = require('../models/Booking');
const router = express.Router();

// Create a booking
router.post('/create', async (req, res) => {
    const { name, contact, date,time, guests } = req.body;
    try {
        const newBooking = new Booking({ name, contact, date,time, guests });
        await newBooking.save();
        res.status(201).json(newBooking);
    } catch (error) {
        res.status(400).json({ error: 'Error creating booking' });
    }
});

// Get all bookings
router.get('/', async (req, res) => {
    try {
        const bookings = await Booking.find();
        res.status(200).json(bookings);
    } catch (error) {
        res.status(400).json({ error: 'Error fetching bookings' });
    }
});

// Delete a booking
router.delete('/:id', async (req, res) => {
    try {
        await Booking.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: 'Booking deleted' });
    } catch (error) {
        res.status(400).json({ error: 'Error deleting booking' });
    }
});

module.exports = router;
