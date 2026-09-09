let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

function actualizarContador() {
    const contadorCarrito = document.querySelector('.icono-carrito');

    if (contadorCarrito) {
        contadorCarrito.textContent = " Articulos en el carrito: " + carrito.length;
    }

}

function configBotones() {
    const botonAñadir = document.querySelectorAll('.producto button');

    botonAñadir.forEach((boton, index) => {
        boton.addEventListener('click', () => {
            const añadirProducto = listaProductos[index];

            carrito.push(añadirProducto);
            localStorage.setItem('carrito', JSON.stringify(carrito));

            actualizarContador();
            alert("Agregaste al carrito el articulo: " + añadirProducto.nombre);
        });
    });
}

document.addEventListener('DOMContentLoaded', () => {
    actualizarContador();
    configBotones();
})