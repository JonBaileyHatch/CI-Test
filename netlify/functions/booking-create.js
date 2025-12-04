import { evokoRequest } from "./services/evoko.js";

export const handler = async (event) => {
  try {
    const body = JSON.parse(event.body);

    const response = await evokoRequest("post", "/api/v1/bookings", body);

    return {
      statusCode: 200,
      headers: { "Access-Control-Allow-Origin": "*" },
      body: JSON.stringify(response),
    };
  } catch (err) {
    console.error(err);
    return {
      statusCode: 500,
      headers: { "Access-Control-Allow-Origin": "*" },
      body: JSON.stringify({ error: "Failed to create booking" }),
    };
  }
};
