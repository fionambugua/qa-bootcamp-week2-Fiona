import { test, expect } from "@playwright/test";
import { SearchPage } from "../pages/SearchPage";

test("search returns matching products", async ({ page }) => {
  const searchPage = new SearchPage(page);

  await searchPage.goto();
  await searchPage.searchFor("pliers");

  await expect(searchPage.productNames.first()).toContainText(/pliers/i);

  const names = await searchPage.productNames.allTextContents();

  expect(names.length).toBeGreaterThan(0);

  for (const name of names) {
    expect(name.toLowerCase()).toContain("pliers");
  }
});
