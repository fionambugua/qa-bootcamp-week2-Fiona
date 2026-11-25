import { test, expect } from "@playwright/test";

test("invalid login displays an error message", async ({ page }) => {
  await page.goto("https://practicesoftwaretesting.com/");

 await page.locator ('[data-test="nav-sign-in"]').click();

  await page.getByLabel("Email address").fill("wrong@example.com");

  await page.locator('[data-test="password"]').fill("WrongPassword123");

  await page.getByRole("button", { name: "Login" }).click();

  await expect(page.getByText("Invalid email or password")).toBeVisible();
});
