import { renderListTemplates } from "./utils.mjs";

//template function for product cards
function productCardTemplate(product){
    return `<li class="product-card">
            <a href="/product_pages/index.html?product=${product.Id}">
              <img src="${product.Image}" alt="${product.NameWithoutBrand}"/>
              <h3 class="card__brand">${product.Brand.Name}</h3>
              <h2 class="card__name">${product.NameWithoutBrand}</h2>
              <p class="product-card__price">$${product.FinalPrice}</p>
            </a>
          </li>`;
}
  


//add class called product list
export default class ProductList {
    // write code for the constructor
    constructor(category, dataSource, listElement){
        //recieve category, datasource and HTML listElement
        this.category = category;
        this.dataSource = dataSource;
        this.listElement = listElement;
    }

    async init(){
        const list = await this.dataSource.getData();
        this.renderList(list);
    }

    renderList(list) {
    renderListTemplates(productCardTemplate, this.listElement, list, 'beforeend', true);
}
}