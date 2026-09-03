const regiones = {
    'Región Metropolitana de Santiago': { comuna: ["Santiago", "La Florida"] },
    'Región de la Araucanía': { comuna: ["Villarica", "Pucón"]},
    'Región de Ñuble': { comuna: ["Chillán", "San Carlos"]}
};

const selectRegion = document.getElementById('sel-region');
const selectComuna = document.getElementById('sel-comuna');

// lo mismo que para producto, pero solo recorre llaves
function mostrarRegiones() {
    Object.keys(regiones).forEach(nombreRegion => {
        const opcion = document.createElement('option');

        opcion.value = nombreRegion;
        opcion.textContent = nombreRegion;

        selectRegion.appendChild(opcion);
    })
}

document.addEventListener('DOMContentLoaded', mostrarRegiones);