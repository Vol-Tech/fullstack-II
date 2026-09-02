const inventario = {
    'PROD01': { nombre: "Cable Master G USB-A a USB-C", precio: 4190 },
    'PROD02': { nombre: "Cable Baseus Tipo-C 60W 2m Negro", precio: 9490 },
    'PROD03': { nombre: "Cable USB-C a Lightning 2m Blanco Apple", precio: 29990 },
    'PROD04': { nombre: "Cable VGA a VGA 1.8m", precio: 990},

    'PROD05': { nombre: "Mouse Inalámbrico HP 200 - Azul", precio: 11290},
    'PROD06': { nombre: "Mouse Gamer Alámbrico GXT 160 Ture RGB - Negro", precio: 20590},
    'PROD07': { nombre: "Mouse Bluethoot Inalámbrico Slimblade 2.0 - Blanco", precio: 14690},
    'PROD08': { nombre: "Mouse Inalámbrico M280 - Negro", precio: 10490},

    'PROD09': { nombre: "a", precio: 0},
    'PROD10': { nombre: "a", precio: 0},
    'PROD11': { nombre: "a", precio: 0},
    'PROD12': { nombre: "a", precio: 0},
};

localStorage.setItem('inventario', JSON.stringify(inventario));
const datosInventario = JSON.parse(localStorage.getItem('inventario'));

function mostrarNombrePrecio(llave, idNom, idPre) {
    const llaveInv = datosInventario[llave];  

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
    mostrarNombrePrecio('PROD04', 'nom-pro-4', 'pre-pro-4');

    mostrarNombrePrecio('PROD05', 'nom-pro-5', 'pre-pro-5');
    mostrarNombrePrecio('PROD06', 'nom-pro-6', 'pre-pro-6');
    mostrarNombrePrecio('PROD07', 'nom-pro-7', 'pre-pro-7');
    mostrarNombrePrecio('PROD08', 'nom-pro-8', 'pre-pro-8');

    mostrarNombrePrecio('PROD09', 'nom-pro-9', 'pre-pro-9');
    mostrarNombrePrecio('PROD10', 'nom-pro-10', 'pre-pro-10');
    mostrarNombrePrecio('PROD11', 'nom-pro-11', 'pre-pro-11');
    mostrarNombrePrecio('PROD12', 'nom-pro-12', 'pre-pro-12');
});