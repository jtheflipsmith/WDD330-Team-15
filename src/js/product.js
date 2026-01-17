<<<<<<< HEAD
import { setLocalStorage } from "./utils.mjs";
import ProductData from "./ProductData.mjs";
=======
import { getLocalStorage, setLocalStorage } from './utils.mjs'; // import utility function to set local storage but it also suppoe to get it (fixed)
import ProductData from './ProductData.mjs';
>>>>>>> f97687d8974b885763a2ec98b16f3938bc4a3886

const dataSource = new ProductData("tents");

function addProductToCart(product) {
<<<<<<< HEAD
  setLocalStorage("so-cart", product);
=======
  /* setLocalStorage('so-cart', product); This is incorrect, it overwrites the cart
  */
 let cartItems = getLocalStorage('so-cart') || []; // retrieve existing cart items or initialize as empty array

 if (!Array.isArray(cartItems)) {
    console.error('Cart data is corrupted. Resetting cart.');
    cartItems = []; // This will basically reset to empty array if corrupted
 }

 cartItems.push(product); // add new product to cart array
 setLocalStorage('so-cart', cartItems); // save updated cart back to local storage
>>>>>>> f97687d8974b885763a2ec98b16f3938bc4a3886
}

// add to cart button event handler
async function addToCartHandler(e) {
  const product = await dataSource.findProductById(e.target.dataset.id);
  addProductToCart(product);
}

// add listener to Add to Cart button
document
  .getElementById("addToCart")
  .addEventListener("click", addToCartHandler);
