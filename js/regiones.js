const regiones = {
    'Región Metropolitana de Santiago': { comuna: ["Santiago", "La Florida", "Maipú", "Providencia"] },
    'Región de la Araucanía': { comuna: ["Temuco", "Villarica", "Pucón"] },
    'Región de Ñuble': { comuna: ["Chillán", "San Carlos"] }
};

const selectRegion = document.getElementById('region') || document.getElementById('sel-region');
const selectComuna = document.getElementById('comuna') || document.getElementById('sel-comuna');

function mostrarRegiones() {
    if (!selectRegion) return;
    
    Object.keys(regiones).forEach(nombreRegion => {
        const opcion = document.createElement('option');
        opcion.value = nombreRegion;
        opcion.textContent = nombreRegion;
        selectRegion.appendChild(opcion);
    });
}

document.addEventListener('DOMContentLoaded', mostrarRegiones);

if (selectRegion && selectComuna) {
    selectRegion.addEventListener('change', (e) => {
        selectComuna.innerHTML = '<option value="">-- Seleccione la comuna --</option>';

        const regionSeleccionada = e.target.value;

        if (regiones[regionSeleccionada]) {
            const listaComunas = regiones[regionSeleccionada].comuna;

            listaComunas.forEach(comuna => {
                const opcion = document.createElement('option');
                opcion.value = comuna;
                opcion.textContent = comuna;
                selectComuna.appendChild(opcion);
            });
        }
    });
}