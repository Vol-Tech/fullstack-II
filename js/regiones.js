const regiones = {
    'Región Metropolitana de Santiago': { comuna: "" },
    'Región de la Araucanía': { comuna: ""},
    'Región de Ñuble': { comuna: ""}
};

localStorage.setItem('regiones', JSON.stringify(regiones));
const datosRegiones = JSON.parse(localStorage.getItem('regiones'));

function mostrarRegiones() {
    Object.entries(regiones).forEach(([llave, valor], index) => {
        const region = document.getElementById(``);
        const comuna = document.getElementById(``);

        if (region && comuna) {
            region.textContent = llave;
            comuna.textContent = valor.comuna;
        }
    })
};

document.addEventListener('DOMContentLoaded', mostrarRegiones);