import { evokoRequest } from "./services/evoko.js";

export const handler = async (event) => {
  try {
    const { date, start, end } = event.queryStringParameters || {};

    const response = await evokoRequest("get", "/api/v1/rooms/availability", { date, start, end });

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
      body: JSON.stringify({ error: "Failed to fetch rooms" }),
    };
  }
};
