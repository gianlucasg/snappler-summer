/* ------------------ PRACTICA CLASE JS-DOM,Eventos y Window API. SUMMER TRAINING 2022 - SNAPPLER ---------------------- 
 
 3 ). Modificar el carrito.   
    - Agregar funcionalidad de agregar al carrito al hacer click en el boton 'Agregar al carrito' de cada producto. Al agregarlo, se debe obtener el ID,Nombre,Imagen y Precio del producto.

      TIP: Obtener primero todos los nodos producto para poder identificar cual se está agregando.
   
   - Persistir el carrito utilizando localStorage.

      TIP: Los productos de carrito se van guardando en la variable 'productsInCart'. 

 ---------------------------------------------------------------------------------------------- */

 let productsInCart = getCart() || [];

 const cartItems = document.querySelector("#cartItems");
 const cartTotalValue = document.querySelector("#cartTotalValue");
 const cartDetailTotalValue = document.querySelector("#cartDetailTotalValue");
 
 function countTheSumPrice() {
   let sum = 0;
   productsInCart.forEach((item) => {
     sum += item.price;
   });
   return sum;
 }
 
 updateShoppingCartHTML();
 
 function updateShoppingCartHTML() {
   setCart();
   if (productsInCart.length > 0) {
     cartItems.innerHTML = "";
     productsInCart.forEach((product) => {
       const productString = `
        <li class="cart-item">
        <img src="${product.image}">
        <div>
        <h2>${product.name}</h2>
        <h3>$${product.basePrice}</h3>
        <div>
        <button class="button-qty minus" id=${product.id}>-</button>
        <span class="product-qty">${product.count}</span>
        <button class="button-qty plus" id=${product.id}>+</button>
        </div>
            </div>
            </li>`;
       cartItems.insertAdjacentHTML("beforeend", productString);
     });
     cartTotalValue.innerHTML = countTheSumPrice();
     cartDetailTotalValue.innerHTML = countTheSumPrice();
   } else {
     cartItems.innerHTML = '<h4 class="empty">El carrito está vacío</h4>';
     cartTotalValue.innerHTML = "0";
     cartDetailTotalValue.innerHTML = "0";
   }
 }
 
 function updateProductsInCart(product) {
   for (let i = 0; i < productsInCart.length; i++) {
     if (productsInCart[i].id === product.id) {
       productsInCart[i].count += 1;
       productsInCart[i].price =
         productsInCart[i].basePrice * productsInCart[i].count;
       return;
     }
   }
   productsInCart.push(product);
 }
 
 cartItems.addEventListener("click", (e) => {
   const isPlusButton = e.target.classList.contains("plus");
   const isMinusButton = e.target.classList.contains("minus");
   if (isPlusButton || isMinusButton) {
     for (let i = 0; i < productsInCart.length; i++) {
       if (productsInCart[i].id === e.target.id) {
         if (isPlusButton) {
           productsInCart[i].count += 1;
         } else if (isMinusButton) {
           productsInCart[i].count -= 1;
         }
         productsInCart[i].price =
           productsInCart[i].basePrice * productsInCart[i].count;
       }
       if (productsInCart[i].count <= 0) {
         productsInCart.splice(i, 1);
       }
     }
     updateShoppingCartHTML();
   }
 });
 
 function addProductToCart(id, name, imgSrc, price) {
   let product = {
     name: name,
     image: imgSrc,
     id: id,
     count: 1,
     price: +price,
     basePrice: +price
   };
   updateProductsInCart(product);
   updateShoppingCartHTML();
 }
  function getCart() {
    // IMPLEMENTAR...
    return JSON.parse(localStorage.getItem("cart"));
  }
  function setCart() {
    // IMPLEMENTAR...
    localStorage.setItem("cart", JSON.stringify(productsInCart));
  }

  //------
  // IMPLEMENTAR...
  //------
  const productos = document.querySelectorAll(".product");
  productos.forEach((prod) => {
    let id = prod.querySelector("button").getAttribute("id");
    let name = prod.querySelector(".product-name").textContent;
    let imgSrc = prod.querySelector("img").getAttribute("src");
    let price = prod.querySelector(".price-value").textContent;
    prod.querySelector("button").addEventListener("click", () => {
      addProductToCart(id, name, imgSrc, price);
    });
  });