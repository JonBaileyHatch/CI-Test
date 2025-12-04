import { evokoRequest } from "./services/evoko.js";

export const handler = async (event) => {
  try {
    const { id } = event.queryStringParameters;

    const response = await evokoRequest("delete", `/api/v1/bookings/${id}`);

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
      body: JSON.stringify({ error: "Failed to delete booking" }),
    };
  }
};
