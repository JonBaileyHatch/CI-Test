import { evokoRequest } from "../../src/services/evoko.js";

export const handler = async (event) => {
  try {
    const params = event.queryStringParameters;
    const { date, start, end } = params;

    const response = await evokoRequest(
      "get",
      `/api/v1/rooms/availability?date=${date}&start=${start}&end=${end}`
    );

    return {
      statusCode: 200,
      body: JSON.stringify(response),
    };

  } catch (err) {
    console.error(err.response?.data || err);

    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Failed to fetch room availability" }),
    };
  }
};
