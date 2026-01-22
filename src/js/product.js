import { getParam } from "./utils.mjs"; // import utility function to set local storage but it also suppoe to get it (fixed)
import ProductData from "./ProductData.mjs";
import ProductDetails from "./ProductDetails.mjs";

const productID = getParam("product");
const dataSource = new ProductData("tents");

// console.log(dataSource.findProductById(productID));

const product = new ProductDetails(productID, dataSource);
product.init();

// // add to cart button event handler
// async function addToCartHandler(e) {
//   const product = await dataSource.findProductById(e.target.dataset.id);
//   addProductToCart(product);
// }

// // add listener to Add to Cart button
// document
//   .getElementById("addToCart")
//   .addEventListener("click", addToCartHandler);
