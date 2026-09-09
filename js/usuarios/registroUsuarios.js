const formulario = document.getElementById('formulario');

formulario.addEventListener('submit', function(event) {
    event.preventDefault();

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

   try {
        if (region === "" || comuna === "") {
            throw new Error("Debe seleccionar una region y una comuna correspondiente...");
        }

        const nuevoUsuario = new Usuario(
            run, nombre, apellidos, correo, contraseña, telefono, region, comuna, "Cliente"
        );

        usuariosRegistrados.push(nuevoUsuario);
        localStorage.setItem('usuarios', JSON.stringify(usuariosRegistrados));
        
        alert("¡Registro exitoso!");
   } catch (error) {
        alert(error.message);
   }
});