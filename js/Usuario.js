class Usuario {
    constructor(run, nombre, apellidos, correo, tipoUsuario) {
        this.run = this.validarRun(run);
        this.nombre = this.validarLargo(nombre);
        this.apellidos = this.validarLargo(apellidos);
        this.correo = this.validarCorreo(correo);
        this.tipoUsuario = tipoUsuario;
    }

    validarRun(run) {
        if (run.length < 7 || run.length > 9 || run.includes('-') || run.includes('.')) {
            throw new Error("Error: el run debe tener minimo 7 caracteres, maximo 9 y no debe contener puntos ni guion");   
        }
        return run;
    }

    validarLargo(texto, maximo) {
        if (texto.length > maximo) {
            throw new Error(`El texto excede el maximo de caracteres que son: ${maximo}`);
        }
        return texto;
    }

    validarCorreo(correo) {
        const dominiosValidos = ["@duoc.cl", "@profesor.duoc.cl", "@gmail.com"];
        // arrow function de dominio, pasa el correo a minusculas y ve si termina con lo que recorre de la lista
        // de dominios
        const esValido = dominiosValidos.some(dominio => correo.toLowerCase().endsWith(dominio))
        if (!esValido) {
            throw new Error("Error: el dominio debe ser: '@duoc.cl', '@profesor.duoc.cl', '@gmail.com'");
        }
        return correo;
    }
}

const formulario = document.getElementById('formulario');

formulario.addEventListener('submit', function(event) {
    event.preventDefault();

    const nombre = document.getElementById('regNombre').value;
    const correo = document.getElementById('regCorreo').value;
    const confirmarCorreo = document.getElementById('regConfirmarCorreo').value;
    const contraseña = document.getElementById('regContraseña').value;
    const confirmarContra = document.getElementById('regConfirmContraseña').value;
    const telefono = document.getElementById('regTelefono').value;

    if (correo != confirmarCorreo) {
        alert("Los correos no coinciden");
        return;
    }

    if (contraseña != confirmarContra) {
        alert("Las contraseñas no coinciden");
        return;
    }

   try {
        
   } catch (error) {
    
   }
});