const USE_PLACEHOLDER = process.env.USE_PLACEHOLDER === "true";

export const handler = async (event) => {
  try {
    const body = JSON.parse(event.body);

    let response;

    if (USE_PLACEHOLDER) {
      // Return dummy booking
      response = {
        id: "TEST123",
        roomId: body.roomId,
        start: body.start,
        end: body.end,
        title: body.title,
        organizer: body.organizer,
      };
    } else {
      // Call real Evoko API
      response = await evokoRequest("post", "/api/v1/bookings", body);
    }

    return {
      statusCode: 200,
      headers: { "Access-Control-Allow-Origin": "*" },
      body: JSON.stringify(response),
    };

  } catch (err) {
    console.error(err.response?.data || err);

    return {
      statusCode: 500,
      headers: { "Access-Control-Allow-Origin": "*" },
      body: JSON.stringify({ error: "Failed to create booking" }),
    };
  }
};

