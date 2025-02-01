const Booking = require('../Models/booking');

const addBooking = async (req, res) => {
  try {
    const newBooking = await Booking.create(req.body);
    res.status(201).json({ message: "Booking added successfully" });
  } catch (err) {
    console.error("Error adding booking:", err);
    res.status(500).json({ error: err.message });
  }
};

const getBookings = async (req, res) => {
  try {
    const bookings = await Booking.find(); 
    res.status(200).json(bookings);
  } catch (err) {
    console.error("Error fetching bookings:", err);
    res.status(500).json({ error: err.message });
  }
};

module.exports = { addBooking, getBookings }; 
