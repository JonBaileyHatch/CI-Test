const USE_PLACEHOLDER = process.env.USE_PLACEHOLDER === "true";

export async function evokoRequest(method, endpoint, data = null) {
  if (USE_PLACEHOLDER) {
    if (endpoint.includes("bookings") && method === "post") {
      return { id: "TEST123", ...data };
    }
    if (endpoint.includes("bookings") && method === "delete") {
      return { success: true };
    }
    if (endpoint.includes("rooms/availability")) {
      return {
        rooms: [
          { id: "room1", name: "Test Room 1", capacity: 4 },
          { id: "room2", name: "Test Room 2", capacity: 8 }
        ]
      };
    }
  }
  throw new Error("Evoko API not implemented in placeholder mode.");
}
