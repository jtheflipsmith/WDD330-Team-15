import ProductData from "./ProductData.mjs";
import ProductList from "./ProductList.mjs";
import loadHeaderFooter from "./utils.mjs";
import getParam from "./utils.mjs";
// Load header and footer
loadHeaderFooter();

// Initialize product list for tents category
const category = getParam("category");
const dataSource = new ProductData(category);
const listElement = document.querySelector(".product-list");
const productList = new ProductList(category, dataSource, listElement);
productList.init();
