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

const inventario = {
    'PROD01': { nombre: "Cable HDMI", precio: 4500 },
    'PROD02': { nombre: "Cable DVI", precio: 7500 },
    'PROD03': { nombre: "Monitor ASUS 120Hz", precio: 150000 }
};


/*
debo ver como hacer que se pase el diccionario a json en forma más
funcional y mantenible y más eficiente, se debe consultar al profe
desde la linea 39 a 46
*/

localStorage.setItem('inventario', JSON.stringify(inventario));
const data = JSON.parse(localStorage.getItem('inventario'));

const nombreSpan1 = document.getElementById('nombre-producto');
const precioSpan1 = document.getElementById('precio-producto');

nombreSpan1.textContent = data['PROD01'].nombre;
precioSpan1.textContent = data['PROD01'].precio;