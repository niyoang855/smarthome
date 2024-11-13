let cart = [];

function updateCart() {
  const cartItems = document.getElementById("cart-items");
  const cartTotal = document.getElementById("cart-total");

  cartItems.innerHTML = "";

  let total = 0;
  cart.forEach((item) => {
    const listItem = document.createElement("li");
    listItem.textContent = `${item.product} - $${item.price}`;
    cartItems.appendChild(listItem);
    total += parseFloat(item.price);
  });

  cartTotal.textContent = `Total: $${total.toFixed(2)}`;
}

document.querySelectorAll(".add-to-cart").forEach((button) => {
  button.addEventListener("click", function () {
    const product = this.closest(".product-card");
    const productName = product.getAttribute("data-product");
    const productPrice = product.getAttribute("data-price");

    cart.push({ product: productName, price: productPrice });

    updateCart();
  });
});
