const usuariosRegistrados = JSON.parse(localStorage.getItem('usuarios')) || [];

const formularioLogin = document.getElementById('formulario');

formularioLogin.addEventListener('submit', function(event) {
    event.preventDefault(); 

    const correoIngresado = document.getElementById('regCorreo').value;
    const contraseñaIngresada = document.getElementById('regContraseña').value;

    const usuarioValido = usuariosRegistrados.find(
        (usuario) => usuario.correo === correoIngresado && usuario.contraseña === contraseñaIngresada
    );

    if (usuarioValido) {
        alert(`¡Bienvenido/a , ${usuarioValido.nombre}!`);
        
        sessionStorage.setItem('usuarioActivo', JSON.stringify(usuarioValido));
         
        formularioLogin.reset();
    } else {
        alert("Correo o contraseña incorrectos. Por favor, inténtelo de nuevo.");
    }
});