import { test, expect } from "@playwright/test";

test("search returns products containing pliers", async ({ page }) => {
  await page.goto("https://practicesoftwaretesting.com/");

  const searchInput = page.getByRole("textbox", {
    name: "Search",
  });

  await searchInput.fill("pliers");

  await page.getByRole("button", { name: "Search" }).click();

  const productNames = page.getByRole("heading", { level: 5 });

  // Wait until the first product name contains "pliers"
  await expect(productNames.first()).toContainText(/pliers/i);

  const names = await productNames.allTextContents();

  console.log("Products found:", names);

  expect(names.length).toBeGreaterThan(0);

  for (const name of names) {
    expect(name.toLowerCase()).toContain("pliers");
  }
});
