class Usuario {
    constructor(run, nombre, apellidos, correo, contraseña, telefono, region, comuna, tipoUsuario) {
        this.run = this.validarRun(run);
        this.nombre = this.validarLargo(nombre, 50);
        this.apellidos = this.validarLargo(apellidos, 50);
        this.correo = this.validarCorreo(correo);
        this.contraseña = contraseña;
        this.telefono = telefono;
        this.region = region;
        this.comuna = comuna;
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
        const esValido = dominiosValidos.some(dominio => correo.toLowerCase().endsWith(dominio));
        if (!esValido) {
            throw new Error("Error: el dominio debe ser: '@duoc.cl', '@profesor.duoc.cl', '@gmail.com'");
        }
        return correo;
    }
}