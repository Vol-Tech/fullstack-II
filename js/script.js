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

localStorage.setItem('inventario', JSON.stringify(inventario));
const data = JSON.parse(localStorage.getItem('inventario'));

function mostrarNombrePrecio(llave, idNom, idPre) {
    const llaveInv = data[llave];  

    const nombre = document.getElementById(idNom);
    const precio = document.getElementById(idPre);

    if (llaveInv && nombre && precio) {
        nombre.textContent = llaveInv.nombre;
        precio.textContent = llaveInv.precio;
    }

}
/*
 logre hacer que se muestren COSAS diferentes del diccionario de forma
 eficiente con esta funcion anonima
*/
document.addEventListener('DOMContentLoaded', () => {
    mostrarNombrePrecio('PROD01', 'nom-pro-1', 'pre-pro-1');
    mostrarNombrePrecio('PROD02', 'nom-pro-2', 'pre-pro-2');
    mostrarNombrePrecio('PROD03', 'nom-pro-3', 'pre-pro-3');
});