// Test de guardar productos

/*
const producto = {
    nombreProducto: 'Cable HDMI',
    precio: 4500
}
*/

/* se pasa de objeto a texto con stringify para que localStorage lo lea
localStorage.setItem('producto', JSON.stringify(producto));

// se usa para recuperar el 'objeto'
const data = JSON.parse(localStorage.getItem('producto'));

// testeo para mostrar los datos del 'objeto' al frontEnd
const nombreSpan = document.getElementById('nombre-producto');
const precioSpan = document.getElementById('precio-producto');

// textContent lee o modifica el texto de forma pura (osea segu su etiqueta)
nombreSpan.textContent = data.nombreProducto;
precioSpan.textContent = data.precio;

//test de tener muchos productos?*/

// Inventario base guardado en localStorage como pide la rúbrica
// Inventario base guardado en localStorage como pide la rúbrica
// Inventario y persistencia en LocalStorage según requerimiento de rúbrica
// Inventario y persistencia en LocalStorage según requerimiento de rúbrica
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
            
            // Guardar información del carrito en LOCALSTORAGE (Requisito de rúbrica)
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

// --- VALIDACIÓN DEL FORMULARIO DE ADMINISTRACIÓN DE PRODUCTOS ---
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