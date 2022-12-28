console.log("ECOMMERCE");
// All variables and DOM
const productList = document.querySelector(".productList");
const cartList = document.querySelector(".cartList");
const productsEvent = document.querySelector(".productsEvent");
const cartCount = document.querySelector(".cartCount");
let allProducts = [];
let cartProducts = [];

const displayProduct = () => {
  productList.innerHTML = "";
  allProducts.forEach((product, idx) => {
    const productItem = `
        <div class="col-12 col-md-6 col-xl-3 mb-4 hoverable hover-shadow-1-soft">
              <div class="card mr-3">
                <img
                  src="${product.thumbnail}"
                  class="card-img-top"
                  style="width: 100%; height: 200px;"
                  alt="..."
                />
                <div class="card-body">
                  <h5 class="card-title">
                    ${product.title}
                  </h5>
                  <p class="card-text text-truncate">
                    ${product.description}
                  </p>
                  <button onclick="addCart(${idx})"  class="btn btn-primary addCart" >Add card</button>
                </div>
              </div>
            </div>
        `;
    productList.innerHTML += productItem;
  });
};

const getProducts = async () => {
  const response = await fetch("https://dummyjson.com/products");
  const data = await response.json();
  allProducts = data.products;
  displayProduct();
  displayCart();
};

getProducts();

const addCart = (idx) => {
  cartProducts.push(allProducts[idx]);
  cartCount.innerText = cartProducts.length;
  displayCart();
};

const displayCart = () => {
  cartList.innerHTML = "";
  for (product of cartProducts) {
    const cartItem = `
        <div class="d-flex align-items-center mb-5 border border-warning border-2">
            <div class="flex-shrink-0">
              <img
                src="${product.thumbnail}"
                class="img-fluid"
                style="width: 150px"
                alt="Generic placeholder image"
              />
            </div>
            <div class="flex-grow-1 ms-3">
              <button class="btn float-end text-black">
                <i class="fas fa-times"></i>
              </button>
              <h5 class="text-primary">${product.title}</h5>
              <h6 style="color: #9e9e9e">Color: white</h6>
              <div class="d-flex align-items-center">
                <p class="fw-bold mb-0 me-5 pe-3">${product.price}</p>
                <div class="">
                  <input
                    class="form-control"
                    min="0"
                    id="quantity"
                    value="1"
                    type="number"
                  />
                </div>
              </div>
            </div>
        </div>`;
    cartList.innerHTML += cartItem;
  }
};