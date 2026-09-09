

let editIndex = null;

function actualizarTablaUsuarios() {
    const cuerpoTabla = document.getElementById('cuerpo-tabla-usuarios');
    if (!cuerpoTabla) return;

    const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
    cuerpoTabla.innerHTML = '';

    if (usuarios.length === 0) {
        cuerpoTabla.innerHTML = '<tr><td colspan="6" style="text-align: center;">No hay usuarios registrados.</td></tr>';
        return;
    }

    usuarios.forEach((u, index) => {
        const fila = document.createElement('tr');
        fila.innerHTML = `
            <td style="border: 1px solid #CBD5E1; padding: 8px;">${u.run}</td>
            <td style="border: 1px solid #CBD5E1; padding: 8px;">${u.nombre} ${u.apellidos || ''}</td>
            <td style="border: 1px solid #CBD5E1; padding: 8px;">${u.correo}</td>
            <td style="border: 1px solid #CBD5E1; padding: 8px;">${u.region}</td>
            <td style="border: 1px solid #CBD5E1; padding: 8px;">${u.comuna}</td>
            <td style="border: 1px solid #CBD5E1; padding: 8px; text-align: center;">
                <button onclick="cargarUsuarioParaEditar(${index})" style="background: #F59E0B; color: white; border: none; padding: 5px 10px; border-radius: 4px; cursor: pointer; margin-right: 5px;">Editar</button>
                <button onclick="eliminarUsuario(${index})" style="background: #EF4444; color: white; border: none; padding: 5px 10px; border-radius: 4px; cursor: pointer;">Eliminar</button>
            </td>
        `;
        cuerpoTabla.appendChild(fila);
    });
}

// Función para la edición de usuarios
function cargarUsuarioParaEditar(index) {
    const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
    const u = usuarios[index];
    if (!u) return;

    document.getElementById('nombre').value = u.nombre;
    document.getElementById('correo').value = u.correo;
    document.getElementById('confCorreo').value = u.correo;
    document.getElementById('contrasena').value = u.contraseña;
    document.getElementById('confContrasena').value = u.contraseña;
    document.getElementById('telefono').value = u.telefono || '';
    document.getElementById('rol').value = u.tipoUsuario || '';
    document.getElementById('region').value = u.region;

    const selectRegion = document.getElementById('region');
    if (selectRegion) {
        selectRegion.dispatchEvent(new Event('change'));
    }

    setTimeout(() => {
        const selectComuna = document.getElementById('comuna');
        if (selectComuna) selectComuna.value = u.comuna;
    }, 100);

    editIndex = index;
    const btnSubmit = document.querySelector('#formUsuario button[type="submit"]');
    if (btnSubmit) btnSubmit.textContent = "ACTUALIZAR USUARIO";
}

// Función para eliminar usuarios con confirmación
function eliminarUsuario(index) {
    if (confirm("¿Estás seguro de que deseas eliminar este usuario?")) {
        let usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
        usuarios.splice(index, 1);
        localStorage.setItem('usuarios', JSON.stringify(usuarios));
        actualizarTablaUsuarios();
    }
}

document.addEventListener('DOMContentLoaded', () => {
    actualizarTablaUsuarios();

    // Formulario de Registro Público
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
                const nuevoUsuario = new Usuario(run, nombre, apellidos, correo, contraseña, telefono, region, comuna, "Cliente");
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

    // Formulario de Panel de Administración (CRUD)
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
                const usuarioData = new Usuario(runTemp, nombreCompleto, "", correo, contraseña, telefono, region, comuna, rol);
                let usuariosRegistrados = JSON.parse(localStorage.getItem('usuarios')) || [];

                if (editIndex !== null) {
                    usuariosRegistrados[editIndex] = usuarioData;
                    editIndex = null;
                    
                    const btnSubmit = document.querySelector('#formUsuario button[type="submit"]');
                    if (btnSubmit) btnSubmit.textContent = "REGISTRAR";
                    
                    alert("Usuario actualizado exitosamente");
                } else {
                    usuariosRegistrados.push(usuarioData);
                    alert("Usuario registrado con éxito");
                }

                localStorage.setItem('usuarios', JSON.stringify(usuariosRegistrados));
                formularioAdmin.reset();
                actualizarTablaUsuarios();
            } catch (error) {
                alert(error.message);
            }
        });
    }
});
