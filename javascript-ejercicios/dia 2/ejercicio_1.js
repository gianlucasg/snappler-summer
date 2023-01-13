/* ------------------ PRACTICA CLASE JS-DOM,Eventos y Window API. SUMMER TRAINING 2022 - SNAPPLER ---------------------- 

 1 ). Ver detalle de carrito.

    - Abrir el 'detalle de carrito' (Ya implementado) al presionar dos veces sobre el icono del mismo, del mismo modo cerrarlo al tocar en "X cerrar".
     
    TIP: Probar qué sucede agregando la clase 'visible' en el nodo del detalle, utilizando DevTools del navegador (Ctrl+Shift+I). Replicarlo utilizando selectors y event handlers.


 ---------------------------------------------------------------------------------------------- */

const cart = document.querySelector("#openCart");
const closeDetails = document.querySelector("#closeCart");
const details = document.querySelector("#cartDetail");
cart.addEventListener("dblclick", (e) => {
  details.classList.add("visible");
});
closeDetails.addEventListener("dblclick", (e) => {
  details.classList.remove("visible");
});