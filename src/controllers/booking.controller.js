import evoko from '../services/evoko.service.js';

export async function createBooking(req, res) {
  try {
    const booking = req.body;

    const response = await evoko.evokoRequest("post", "/api/v1/bookings", booking);

    res.json(response);
  } catch (err) {
    console.error(err.response?.data || err);
    res.status(500).json({ error: "Failed to create booking" });
  }
}

export async function deleteBooking(req, res) {
  try {
    const bookingId = req.params.id;

    const response = await evoko.evokoRequest("delete", `/api/v1/bookings/${bookingId}`);

    res.json(response);
  } catch (err) {
    console.error(err.response?.data || err);
    res.status(500).json({ error: "Failed to delete booking" });
  }
}
