const productField = document.getElementById("product-field");
const quantityField = document.getElementById("quantity-field");
const btnAddProduct = document.getElementById("btn-add-product");

btnAddProduct.addEventListener("click", () => {
  const product = productField.value;
  const quantity = quantityField.value;

  productField.value = "";
  quantityField.value = "";
  //   displayProduct(product, quantity);
  displayProduct(product, quantity);
  saveProductToLocalStorage(product, quantity);
});

function displayProduct(product, quantity) {
  const productContainer = document.getElementById("product-container");
  const li = document.createElement("li");
  li.innerText = ` ${product} : ${quantity}`;
  productContainer.appendChild(li);
}

function getStoredShoppingCart() {
  let cart = {};
  const storedCart = localStorage.getItem("cart");
  if (storedCart) {
    cart = JSON.parse(storedCart);
  }
  return cart;
}

function saveProductToLocalStorage(product, quantity) {
  const cart = getStoredShoppingCart();
  cart[product] = quantity;
  const cartStringified = JSON.stringify(cart);
  localStorage.setItem("cart", cartStringified);
}

function displayProductsFromLocalStorage() {
  const savedCart = getStoredShoppingCart();
  for (const product in savedCart) {
    const quantity = savedCart[product];
    displayProduct(product, quantity);
  }
}

displayProductsFromLocalStorage();
