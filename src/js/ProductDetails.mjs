import { getLocalStorage, setLocalStorage } from './utils.mjs';

export default class ProductDetails {


    constructor(dataSource, productId) {
        this.productId = productId;
        this.dataSource = dataSource;
        this.product = {};
        console.log("Fetched product:", this.product)
        
    }

    async init(){
        // use the datasource to get the details for the current product. findProductById will return a promise! use await or .then() to process it
// the product details are needed before rendering the HTML
// once the HTML is rendered, add a listener to the Add to Cart button
// Notice the .bind(this). This callback will not work if the bind(this) is missing. Review the readings from this week on 'this' to understand why.
        this.product = await this.dataSource.findProductById(this.productId);
        console.log("Product object:", this.product);
        this.renderProductDetails();
        document.getElementById('addToCart').addEventListener('click', this.addProductToCart.bind(this));
    }

    addProductToCart(product){
          const cartProduct = getLocalStorage('so-cart') || [];
          cartProduct.push(this.product);
          setLocalStorage('so-cart', cartProduct);
        }
    
    renderProductDetails(){
        const element = document.querySelector('.product-detail');
        element.innerHTML = productTemplate(this.product);
    };
}
    function productTemplate(product){
        // Code to generate or populate the HTML to display the product details
        return `<section class='product-detail'>
            <h3>${product.Brand.Name}</h3>
            <h2 class='divider'>${product.NameWithoutBrand}</h2>
            <img class='divider' src='${product.Image}' alt='${product.NameWithoutBrand}'/>
            <p class='product__price'>Price: $${product.FinalPrice}</p>
            <p class='product__color'>Color: ${product.Colors?.[0]?.ColorName ?? "N/A"}</p>
            <p class='product__description'>${product.DescriptionHtmlSimple}</p>
            <div class='product-detail__add'>
                <button id='addToCart' data-id='${product.Id}'>Add to Cart</button>
                </div></section>`;

    }
