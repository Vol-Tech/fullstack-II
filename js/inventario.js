const inventario = {
    'PROD01': { nombre: "Cable Master G USB-A a USB-C", precio: 4190 },
    'PROD02': { nombre: "Cable Baseus Tipo-C 60W 2m Negro", precio: 9490 },
    'PROD03': { nombre: "Cable USB-C a Lightning 2m Blanco Apple", precio: 29990 },
    'PROD04': { nombre: "Cable VGA a VGA 1.8m", precio: 990},

    'PROD05': { nombre: "Mouse Inalámbrico HP 200 - Azul", precio: 11290},
    'PROD06': { nombre: "Mouse Gamer Alámbrico GXT 160 Ture RGB - Negro", precio: 20590},
    'PROD07': { nombre: "Mouse Bluethoot Inalámbrico Slimblade 2.0 - Blanco", precio: 14690},
    'PROD08': { nombre: "Mouse Inalámbrico M280 - Negro", precio: 10490},

    'PROD09': { nombre: "Monitor Portátil ASUS 15,6 FHD, 60Hz, IPS, 5ms, ZenScreen MB169CK", precio: 117990},
    'PROD10': { nombre: "ASUS ROG XG27AQDMES - OLED monitor - 27 - 2560 x 1440 - DisplayPort / HDMI / USB - Black - 240 Hz", precio: 589990},
    'PROD11': { nombre: "Monitor Gamer ASUS TUF 24, FHD, 180Hz, IPS, 1ms, VG249QL3A", precio: 124990},
    'PROD12': { nombre: "Monitor Gamer ASUS TUF 32 QHD 170Hz, VA, 1ms, VG32AQA1A" , precio: 232990},
};

localStorage.setItem('inventario', JSON.stringify(inventario));
const datosInventario = JSON.parse(localStorage.getItem('inventario'));

// object pasa todo a una suerte de diccionario, asi que use un for each para mostrar mejor los productos

function mostrarProducto() {
    Object.entries(inventario).forEach(([_, valor], index) => {
        const nombre = document.getElementById(`nom-pro-${index + 1}`);
        const precio = document.getElementById(`pre-pro-${index + 1}`);

        if (nombre && precio) {
            nombre.textContent = valor.nombre
            precio.textContent = valor.precio
        }
    })
};

document.addEventListener('DOMContentLoaded', mostrarProducto);