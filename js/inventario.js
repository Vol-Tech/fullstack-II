const inventario = {
    'PROD01': { nombre: "Cable Master G USB-A a USB-C", precio: 4190 },
    'PROD02': { nombre: "Cable Baseus Tipo-C 60W 2m Negro", precio: 9490 },
    'PROD03': { nombre: "Cable USB-C a Lightning 2m Blanco Apple", precio: 29990 },
    'PROD04': { nombre: "Cable VGA a VGA 1.8m", precio: 990 },

    'PROD05': { nombre: "Mouse Inalámbrico HP 200 - Azul", precio: 11290 },
    'PROD06': { nombre: "Mouse Gamer Alámbrico GXT 160 Ture RGB - Negro", precio: 20590 },
    'PROD07': { nombre: "Mouse Bluetooth Inalámbrico Slimblade 2.0 - Blanco", precio: 14690 },
    'PROD08': { nombre: "Mouse Inalámbrico M280 - Negro", precio: 10490 },

    'PROD09': { nombre: "Teclado Mecánico Redragon Kumara K552 RGB", precio: 34990 },
    'PROD10': { nombre: "Audífonos Gamer HyperX Cloud Stinger II", precio: 39990 },
    'PROD11': { nombre: "Hub USB-C 4 en 1 HDMI y USB 3.0", precio: 15990 },
    'PROD12': { nombre: "Base Soporte Notebook Aluminio Ajustable", precio: 18990 }
};

localStorage.setItem('inventario', JSON.stringify(inventario));

document.addEventListener('DOMContentLoaded', () => {
    Object.entries(inventario).forEach(([_, valor], index) => {
        const nombre = document.getElementById(`nom-pro-${index + 1}`);
        const precio = document.getElementById(`pre-pro-${index + 1}`);

        if (nombre && precio) {
            nombre.textContent = valor.nombre;
            precio.textContent = `$${valor.precio.toLocaleString('es-CL')}`;
        }
    });

    const botonesAnadir = document.querySelectorAll('.product-card .btn-primary, .producto .btn-primary, .btn-add-cart');
    const contadorCarrito = document.querySelector('.cart, .icono-carrito');

    let carrito = JSON.parse(localStorage.getItem('carritoVoltech')) || [];
    actualizarContador();

    botonesAnadir.forEach((boton, index) => {
        boton.addEventListener('click', (e) => {
            e.preventDefault();
            
            const llavesInventario = Object.keys(inventario);
            const claveProducto = llavesInventario[index % llavesInventario.length] || 'PROD01';
            const productoSeleccionado = inventario[claveProducto];

            carrito.push(productoSeleccionado);
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