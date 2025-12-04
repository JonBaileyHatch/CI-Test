import evoko from '../services/evoko.service.js';

export async function getAvailableRooms(req, res) {
  try {
    const { date, start, end } = req.query;

    const data = await evoko.evokoRequest(
      "get",
      `/api/v1/rooms/availability?date=${date}&start=${start}&end=${end}`
    );

    res.json(data);
  } catch (err) {
    console.error(err.response?.data || err);
    res.status(500).json({ error: "Failed to fetch room availability" });
  }
}
