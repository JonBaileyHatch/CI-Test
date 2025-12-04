import { evokoRequest } from "../../src/services/evoko.js";

export const handler = async (event) => {
  try {
    const body = JSON.parse(event.body);

    const response = await evokoRequest(
      "post",
      "/api/v1/bookings",
      body
    );

    return {
      statusCode: 200,
      body: JSON.stringify(response),
    };

  } catch (err) {
    console.error(err.response?.data || err);

    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Failed to create booking" }),
    };
  }
};
