console.log(`Ecommerce`);




let productLists = document.querySelector(".productList");
let allProducts = [ 5 ];
const displayProduct = (products) => {
    productLists.innerHTML += products.map(
        (product) => {
        return `<div class="col-md-12 col-lg-3 mb-3 mb-lg-0">

              <div class="card">
                <div class="d-flex justify-content-between p-3">
                  <p class="lead mb-0">Item</p>
                </div>

                <img src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/4.webp"
                  class="card-img-top" alt="Laptop" />

                <div class="card-body">
                  <div class="d-flex justify-content-between">
                    <p class="small"><a href="#!" class="text-muted">Laptops</a></p>
                    <p class="small text-danger"><s>$1099</s></p>
                  </div>
      
                  <div class="d-flex justify-content-between mb-3">
                    <h5 class="mb-0">${product.title}</h5>
                    <h5 class="text-dark mb-0">$${product.price}</h5>
                  </div>

                  <div class="d-flex justify-content-between mb-2">

                    <p class="text-muted mb-0">Available: <span class="fw-bold">6</span></p>
                    <div class="ms-auto text-warning">
                    
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
      `}
    ).join("");
};

const getProducts = async () => {
    const response = await fetch("http://dummyjson.com/products");
    const data = await response.json();
    allProducts = data.products;
    console.log(allProducts); 
    displayProduct(allProducts);
    console.log("Data", data);

}
getProducts()

