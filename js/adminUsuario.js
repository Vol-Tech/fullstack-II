let editIndex = null;

function actualizarTablaUsuarios() {
    const cuerpoTabla = document.getElementById('cuerpo-tabla-usuarios');
    if (!cuerpoTabla) return;

    cuerpoTabla.innerHTML = '';

    if (usuariosRegistrados.length === 0) {
        cuerpoTabla.innerHTML = '<tr><td colspan="6" style="text-align: center;">No hay usuarios registrados.</td></tr>';
        return;
    }

    usuariosRegistrados.forEach((u, index) => {
        const fila = document.createElement('tr');
        fila.innerHTML = `
            <td style="border: 1px solid #ddd; padding: 8px;">${u.run}</td>
            <td style="border: 1px solid #ddd; padding: 8px;">${u.nombre} ${u.apellidos || ''}</td>
            <td style="border: 1px solid #ddd; padding: 8px;">${u.correo}</td>
            <td style="border: 1px solid #ddd; padding: 8px;">${u.region}</td>
            <td style="border: 1px solid #ddd; padding: 8px;">${u.comuna}</td>
            <td style="border: 1px solid #ddd; padding: 8px; text-align: center;">
                <button onclick="cargarUsuarioParaEditar(${index})" style="background: #f0ad4e; color: white; border: none; padding: 5px 10px; border-radius: 3px; cursor: pointer; margin-right: 5px;">Editar</button>
                <button onclick="eliminarUsuario(${index})" style="background: #d9534f; color: white; border: none; padding: 5px 10px; border-radius: 3px; cursor: pointer;">Eliminar</button>
            </td>
        `;
        cuerpoTabla.appendChild(fila);
    });
}

window.cargarUsuarioParaEditar = function(index) {
    const u = usuariosRegistrados[index];
    if (!u) return;

    document.getElementById('nombre').value = u.nombre;
    document.getElementById('correo').value = u.correo;
    document.getElementById('confCorreo').value = u.correo;
    document.getElementById('contrasena').value = u.contraseña;
    document.getElementById('confContrasena').value = u.contraseña;
    document.getElementById('telefono').value = u.telefono || '';
    document.getElementById('rol').value = u.tipoUsuario || '';
    document.getElementById('region').value = u.region;

    document.getElementById('region').dispatchEvent(new Event('change'));

    setTimeout(() => {
        document.getElementById('comuna').value = u.comuna;
    }, 100);

    editIndex = index;
    const btnSubmit = document.querySelector('#formUsuario button[type="submit"]');
    if (btnSubmit) btnSubmit.textContent = "ACTUALIZAR USUARIO";
};

window.eliminarUsuario = function(index) {
    if (confirm("¿Estás seguro de que deseas eliminar este usuario?")) {
        usuariosRegistrados.splice(index, 1);
        localStorage.setItem('usuarios', JSON.stringify(usuariosRegistrados));
        actualizarTablaUsuarios();
    }
};

document.addEventListener('DOMContentLoaded', () => {
    actualizarTablaUsuarios();

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

                if (editIndex !== null) {
                    usuariosRegistrados[editIndex] = usuarioData;
                    editIndex = null;
                    
                    const btnSubmit = document.querySelector('#formUsuario button[type="submit"]');
                    if (btnSubmit) btnSubmit.textContent = "REGISTRAR";
                    
                    alert("Usuario actualizado exitosamente");
                } else {
                    usuariosRegistrados.push(usuarioData);
                    alert("Usuario registrado");
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