import { test, expect } from "@playwright/test";

test("should create a cart and add a product", async ({ request }) => {
  // Store the cart ID
  let cartId: string | undefined;

  try {
    // 1. Create a cart
    const createCartResponse = await request.post(
      "https://api.practicesoftwaretesting.com/carts",
    );

    expect(createCartResponse.status()).toBe(201);

    const cart = await createCartResponse.json();

    cartId = cart.id;

    expect(cart).toHaveProperty("id");

    // 2. Get available products
    const productsResponse = await request.get(
      "https://api.practicesoftwaretesting.com/products",
    );

    expect(productsResponse.status()).toBe(200);

    const products = await productsResponse.json();

    const productId = products.data[0].id;

    expect(productId).toBeTruthy();

    // 3. Add product to cart
    const addProductResponse = await request.post(
      `https://api.practicesoftwaretesting.com/carts/${cartId}`,
      {
        data: {
          product_id: productId,
          quantity: 2,
        },
      },
    );

    expect(addProductResponse.status()).toBe(200);

    const addProductBody = await addProductResponse.json();

    expect(addProductBody).toHaveProperty("result");
    expect(addProductBody.result).toBeTruthy();
  } finally {
    // 4. Clean up: Delete the cart
    if (cartId) {
      const deleteCartResponse = await request.delete(
        `https://api.practicesoftwaretesting.com/carts/${cartId}`,
      );

      expect(deleteCartResponse.status()).toBe(204);
    }
  }
});
