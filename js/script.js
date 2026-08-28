// Test de guardar productos

const producto = {
    nombreProducto: 'Cable HDMI',
    precio: 4500
}

// se pasa de objeto a texto con stringify para que localStorage lo lea
localStorage.setItem('producto', JSON.stringify(producto));

// se usa para recuperar el 'objeto'
const data = JSON.parse(localStorage.getItem('producto'));

// testeo para mostrar los datos del 'objeto' al frontEnd
const nombreSpan = document.getElementById('nombre-producto');
const precioSpan = document.getElementById('precio-producto');

// textContent lee o modifica el texto de forma pura (osea segu su etiqueta)
nombreSpan.textContent = data.nombreProducto;
precioSpan.textContent = data.precio;