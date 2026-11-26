import { test, expect } from "@playwright/test";

test("GET products returns a successful response", async ({ request }) => {
  const response = await request.get(
    "https://api.practicesoftwaretesting.com/products",
  );

  // Check the HTTP status
  expect(response.status()).toBe(200);

  // Read the JSON response
  const body = await response.json();

  // Check that the response contains products
  expect(body.data.length).toBeGreaterThan(0);

  // Check that a product has a name
  expect(body.data[0]).toHaveProperty("name");
});
