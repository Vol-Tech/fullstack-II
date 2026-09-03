class Usuario {
    constructor(run, nombre, apellidos, correo, tipoUsuario) {
        this.run = this.validarRun(run);
        this.nombre = this.validarLargo(nombre);
        this.apellidos = this.validarLargo(apellidos);
        this.correo = this.validarCorreo(correo);
        this.tipoUsuario = tipoUsuario;
    }

    validarRun(run) {
        if (run.lenght < 7 || run.lenght > 9 || run.includes('-') || run.includes('.')) {
            throw new Error("Error: el run debe tener minimo 7 caracteres, maximo 9 y no debe contener puntos ni guion");   
        }
        return run;
    }

    validarLargo(texto, maximo) {
        if (texto.lenght > maximo) {
            throw new Error(`El texto excede el maximo de caracteres que son: ${maximo}`);
        }
        return texto;
    }

    validarCorreo(correo) {
        const dominiosValidos = ["@duoc.cl", "@profesor.duoc.cl", "@gmail.com"]
        // const esValido
        if (!esValido) {
            throw new Error("Error: el dominio debe ser: '@duoc.cl', '@profesor.duoc.cl', '@gmail.com'");
        }
        return correo;
    }
}