console.log(`Ecommerce`);




let productLists = document.querySelector(".productList");
let allProducts = [ 5 ];
const displayProduct = (products) => {
    productLists.innerHTML += products.map(
        (product) => {
        return `<div class="col-md-12 col-lg-3 mb-3 mb-lg-0 m-b-4 hoverable hover-shadow-1-soft mt-2">

              <div class="card">
                <div class="d-flex justify-content-between p-3">
                  <p class="lead mb-0">Item</p>
                </div>

                <img src="${product.thumbnail}"
                  class="card-img-top" alt="Laptop" 
                  style="width: 100%; height: 200px;" 
                  />

                <div class="card-body">
                  <div class="d-flex justify-content-between">
                    <p class="small"><a href="#!" class="text-muted">Laptops</a></p>
                    <p class="small text-danger"><s>$1099</s></p>
                  </div>
      
                  <div class="d-flex justify-content-between mb-3">
                    <h5 class="mb-0 text-overflow">${product.title}</h5>
                    <h5 class="text-dark mb-0">$${product.price}</h5>
                  </div>

                  <button onclick="addCart(${product})" class="btn btn-primary">Add Card</button>

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
const addCart =(product) => {
  console.log("Added cart");
  cartList.push(product)
}
