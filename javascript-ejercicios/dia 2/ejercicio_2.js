/* ------------------ PRACTICA CLASE JS-DOM,Eventos y Window API. SUMMER TRAINING 2022 - SNAPPLER ---------------------- 

 2 ). Ver articulos disponibles y Mensaje de Bienvenida.
    
    - Contar los diferentes articulos disponibles para comprar y mostrar dicha cantidad en el nodo correspondiente(buscando el identificador 'productCount').

    - Mostrar el cartel 'Bienvenido' durante los primeros 3 segundos de visita a la web, colocandolo como primer hijo de <body>.

    const welcome = `<div class="welcome-toast"><span>Bienvenido!</span></div>`;

 ---------------------------------------------------------------------------------------------- */
 const welcome = `<div class="welcome-toast"><span>Bienvenido!</span></div>`;
 document.body.insertAdjacentHTML("afterbegin", welcome);
 document.querySelector("#productCount").textContent = document.querySelectorAll(
   ".product"
 ).length;
 setTimeout(() => {
   //document.querySelector(".welcome-toast").remove();
 }, 3000);