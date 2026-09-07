class Usuario {
    constructor(run, nombre, apellidos, correo, contraseña, telefono, region, comuna, tipoUsuario) {
        this.run = this.validarRun(run);
        this.nombre = this.validarLargo(nombre, 100);
        this.apellidos = this.validarLargo(apellidos, 100);
        this.correo = this.validarCorreo(correo);
        this.contraseña = this.validarContrasena(contraseña); 
        this.telefono = telefono;
        this.region = region;
        this.comuna = comuna;
        this.tipoUsuario = tipoUsuario;
    }

    validarRun(run) {
        if (!run || run.length < 7 || run.length > 9 || run.includes('-') || run.includes('.')) {
            throw new Error("El RUN debe tener entre 7 y 9 caracteres, sin puntos ni guion");   
        }
        return run;
    }

    validarLargo(texto, maximo) {
        if (texto && texto.length > maximo) {
            throw new Error(`El texto excede el máximo de ${maximo} caracteres`);
        }
        return texto || "";
    }

    validarContrasena(contraseña) {
        if (!contraseña || contraseña.length < 4 || contraseña.length > 10) {
            throw new Error("La contraseña debe tener entre 4 y 10 caracteres");
        }
        return contraseña;
    }

    validarCorreo(correo) {
        const dominiosValidos = ["@duoc.cl", "@profesor.duoc.cl", "@gmail.com"];
        const esValido = dominiosValidos.some(dominio => correo.toLowerCase().endsWith(dominio));
        if (!esValido) {
            throw new Error("El dominio del correo debe ser @duoc.cl, @profesor.duoc.cl o @gmail.com");
        }
        return correo;
    }
}

function actualizarTablaUsuarios() {
    const cuerpoTabla = document.getElementById('cuerpo-tabla-usuarios');
    if (!cuerpoTabla) return;

    const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
    cuerpoTabla.innerHTML = '';

    if (usuarios.length === 0) {
        cuerpoTabla.innerHTML = '<tr><td colspan="5" style="text-align: center;">No hay usuarios registrados.</td></tr>';
        return;
    }

    usuarios.forEach(u => {
        const fila = document.createElement('tr');
        fila.innerHTML = `
            <td>${u.run}</td>
            <td>${u.nombre} ${u.apellidos || ''}</td>
            <td>${u.correo}</td>
            <td>${u.region}</td>
            <td>${u.comuna}</td>
        `;
        cuerpoTabla.appendChild(fila);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    actualizarTablaUsuarios();

    const formularioPublico = document.getElementById('formulario');
    if (formularioPublico) {
        formularioPublico.addEventListener('submit', function(e) {
            e.preventDefault();

            const run = document.getElementById('regRun').value;
            const nombre = document.getElementById('regNombre').value;
            const apellidos = document.getElementById('regApellido').value;
            const correo = document.getElementById('regCorreo').value;
            const confirmarCorreo = document.getElementById('regConfirmarCorreo').value;
            const contraseña = document.getElementById('regContraseña').value;
            const confirmarContra = document.getElementById('regConfirmContraseña').value;
            const telefono = document.getElementById('regTelefono').value;
            const region = document.getElementById('sel-region').value;
            const comuna = document.getElementById('sel-comuna').value;

            if (correo !== confirmarCorreo) {
                alert("Los correos no coinciden");
                return;
            }

            if (contraseña !== confirmarContra) {
                alert("Las contraseñas no coinciden");
                return;
            }

            if (region === "" || comuna === "") {
                alert("Debe seleccionar una región y una comuna");
                return;
            }

            try {
                const nuevoUsuario = new Usuario(
                    run,
                    nombre,
                    apellidos,
                    correo,
                    contraseña,
                    telefono,
                    region,
                    comuna,
                    "Cliente"
                );

                let usuariosRegistrados = JSON.parse(localStorage.getItem('usuarios')) || [];
                usuariosRegistrados.push(nuevoUsuario);
                localStorage.setItem('usuarios', JSON.stringify(usuariosRegistrados));
                
                alert("¡Registro exitoso!");
                formularioPublico.reset();
                actualizarTablaUsuarios();
            } catch (error) {
                alert(error.message);
            }
        });
    }

    const formularioAdmin = document.getElementById('formUsuario');
    if (formularioAdmin) {
        formularioAdmin.addEventListener('submit', function(e) {
            e.preventDefault();

            const runTemp = "12345678"; 
            const nombreCompleto = document.getElementById('nombre').value;
            const correo = document.getElementById('correo').value;
            const confCorreo = document.getElementById('confCorreo').value;
            const contraseña = document.getElementById('contrasena').value;
            const confContrasena = document.getElementById('confContrasena').value;
            const telefono = document.getElementById('telefono').value;
            const rol = document.getElementById('rol').value;
            const region = document.getElementById('region').value;
            const comuna = document.getElementById('comuna').value;

            if (correo !== confCorreo) {
                alert("Los correos no coinciden");
                return;
            }

            if (contraseña !== confContrasena) {
                alert("Las contraseñas no coinciden");
                return;
            }

            if (region === "" || comuna === "") {
                alert("Debe seleccionar una región y una comuna");
                return;
            }

            try {
                const nuevoUsuario = new Usuario(
                    runTemp,
                    nombreCompleto,
                    "", 
                    correo,
                    contraseña,
                    telefono,
                    region,
                    comuna,
                    rol
                );

                let usuariosRegistrados = JSON.parse(localStorage.getItem('usuarios')) || [];
                usuariosRegistrados.push(nuevoUsuario);
                localStorage.setItem('usuarios', JSON.stringify(usuariosRegistrados));
                
                alert("¡Usuario registrado desde el panel!");
                formularioAdmin.reset();
                actualizarTablaUsuarios();
            } catch (error) {
                alert(error.message);
            }
        });
    }
});