const inventario = {
    'PROD01': { nombre: "Product Title", precio: 1000 },
    'PROD02': { nombre: "Product Title", precio: 1000 },
    'PROD03': { nombre: "Product Title", precio: 1000 },
    'PROD04': { nombre: "Product Title", precio: 1000 },
    'PROD05': { nombre: "Product Title", precio: 1000 },
    'PROD06': { nombre: "Product Title", precio: 1000 },
    'PROD07': { nombre: "Product Title", precio: 1000 },
    'PROD08': { nombre: "Product Title", precio: 1000 },
    'PROD09': { nombre: "Product Title", precio: 1000 },
    'PROD10': { nombre: "Product Title", precio: 1000 },
    'PROD11': { nombre: "Product Title", precio: 1000 },
    'PROD12': { nombre: "Product Title", precio: 1000 }
};

localStorage.setItem('inventario', JSON.stringify(inventario));

document.addEventListener('DOMContentLoaded', () => {
    const botonesAnadir = document.querySelectorAll('.product-card .btn-primary, .btn-add-cart');
    const contadorCarrito = document.querySelector('.cart');

    let carrito = JSON.parse(localStorage.getItem('carritoVoltech')) || [];
    actualizarContador();

    botonesAnadir.forEach((boton, index) => {
        boton.addEventListener('click', (e) => {
            e.preventDefault();
            
            const llavesInventario = Object.keys(inventario);
            const claveProducto = llavesInventario[index % llavesInventario.length] || 'PROD01';
            const productoSeleccionado = inventario[claveProducto];

            carrito.push(productoSeleccionado);
            
            // para guardar información del carrito en localstorage
            localStorage.setItem('carritoVoltech', JSON.stringify(carrito));
            
            actualizarContador();
            alert(`¡${productoSeleccionado.nombre} añadido al carrito con éxito!`);
        });
    });

    function actualizarContador() {
        if (contadorCarrito) {
            contadorCarrito.innerText = `🛒 Carrito (${carrito.length})`;
        }
    }
});
//validacion
document.addEventListener('DOMContentLoaded', () => {
    const formProducto = document.getElementById('form-producto');
    
    if (formProducto) {
        formProducto.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const codigo = document.getElementById('codigo-prod').value;
            const stock = parseInt(document.getElementById('stock-prod').value);
            const stockCritico = parseInt(document.getElementById('stock-critico').value) || 0;

            if (codigo.length < 3) {
                alert("El código del producto debe tener al menos 3 caracteres.");
                return;
            }

            if (stock <= stockCritico) {
                alert("⚠️ Alerta: El stock actual se encuentra en nivel crítico o agotado.");
            }

            alert("¡Producto guardado y registrado correctamente en el sistema!");
            formProducto.reset();
        });
    }
});