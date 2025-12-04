const USE_PLACEHOLDER = process.env.USE_PLACEHOLDER === "true";

export async function evokoRequest(method, endpoint, data = null) {
  if (USE_PLACEHOLDER) {
    // Return dummy data
    if (endpoint.includes("rooms/availability")) {
      return {
        rooms: [
          { id: "room1", name: "Test Room 1", capacity: 4 },
          { id: "room2", name: "Test Room 2", capacity: 8 }
        ]
      };
    }
    if (endpoint.includes("bookings") && method === "post") {
      return {
        id: "TEST123",
        roomId: data.roomId,
        start: data.start,
        end: data.end,
        title: data.title,
        organizer: data.organizer
      };
    }
    if (endpoint.includes("bookings") && method === "delete") {
      return { success: true };
    }
  }

  // Real Evoko API call
  const token = await getAccessToken();
  const url = `${evokoConfig.baseUrl}${endpoint}`;

  const config = {
    method,
    url,
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json"
    },
  };

  if (data) config.data = data;

  const response = await axios(config);
  return response.data;
}