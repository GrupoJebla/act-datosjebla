const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');

const expresiones = {
    usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	telefono: /^\d{7,14}$/, // 7 a 14 numeros.
    codPostal: /^\d{5}$/, // 5 numeros.
    lugNacimiento: /^[a-zA-ZÀ-ÿ\s.]+,[a-zA-ZÀ-ÿ\s]{1,40}$/,
    tipoSangre: /^[a-zA-Z0-9_.+-]{2,3}/,
    antug: /^[a-zA-Z0-9\s\_\-]{1,2}$/,
    edad: /^\d{1,3}$/, // 1 a 3 numeros.
}
const validarFormulario = (e) => {
    switch (e.target.name){
        case "paterno":
            validarCampo(expresiones.nombre, e.target, 'paterno');
        break;
        case "materno":
            validarCampo(expresiones.nombre, e.target, 'materno');
        break;
        case "nombres":
            validarCampo(expresiones.nombre, e.target, 'nombres');
        break;
        case "domicilio":
            document.getElementById('grupo__domicilio').classList.remove('formulario__grupo-incorrecto');
            document.getElementById('grupo__domicilio').classList.add('formulario__grupo-correcto');
            document.querySelectorA('#grupo__domicilio i').classList.remove('fa-times-circle');
            document.querySelectorA('#grupo__domicilio i').classList.add('fa-check-circle');
        break;
        case "municipio":
            validarCampo(expresiones.nombre, e.target, 'municipio');
        break;
        case "estado":
            validarCampo(expresiones.nombre, e.target, 'estado');
        break;
        case "CP":
            validarCampo(expresiones.codPostal, e.target, 'codigoP');
        break;
        case "nacimiento":
            validarCampo(expresiones.lugNacimiento, e.target, 'nacimiento');
        break;
        case "telefonoFijo":
            validarCampo(expresiones.telefono, e.target, 'telFijo');
        break;
        case "telefonoCel":
            validarCampo(expresiones.telefono, e.target, 'telCel');
        break;
        case "email":
            validarCampo(expresiones.correo, e.target, 'email');
        break;
        case "emergenciaAvisar":
            validarCampo(expresiones.nombre, e.target, 'emergencia');
        break;
        case "telefonoEmergencia":
            validarCampo(expresiones.telefono, e.target, 'telEmergencia');
        break;
        case "parentezco":
            validarCampo(expresiones.nombre, e.target, 'parentezco');
        break;
        case "tipoSangre":
            validarCampo(expresiones.tipoSangre, e.target, 'tipoSangre');
        break;
        case "medicamento":
            validarCampo(expresiones.nombre, e.target, 'medicamento');
        break;
        case "enfermedadExp":
            validarCampo(expresiones.nombre, e.target, 'enfermedad');
        break;
        case "nivAcademico":
            validarCampo(expresiones.nombre, e.target, 'nivAcad');
        break;
        case "institucion":
            validarCampo(expresiones.nombre, e.target, 'institucion');
        break;
        case "nomConcuvina":
            validarCampo(expresiones.nombre, e.target, 'concuvina');
        break;
        case "lugarTrabajo":
            validarCampo(expresiones.nombre, e.target, 'lugTrabajo');
        break;
        case "puesto":
            validarCampo(expresiones.nombre, e.target, 'puesto');
        break;
        case "antiguedad":
            validarCampo(expresiones.antug, e.target, 'antiguedad');
        break;
        case "nombres1":
            validarCampo(expresiones.nombre, e.target, 'hnombres1');
        break;
        case "apellidos1":
            validarCampo(expresiones.nombre, e.target, 'hapellidos1');
        break;
        case "edad1":
            validarCampo(expresiones.edad, e.target, 'hedad1');
        break;
        case "nivAcademico1":
            validarCampo(expresiones.nombre, e.target, 'hnivAcad1');
        break;
        case "grado1":
            validarCampo(expresiones.edad, e.target, 'hgrado1');
        break;
        case "nombres2":
            validarCampo(expresiones.nombre, e.target, 'hnombres2');
        break;
        case "apellidos2":
            validarCampo(expresiones.nombre, e.target, 'hapellidos2');
        break;
        case "edad2":
            validarCampo(expresiones.edad, e.target, 'hedad2');
        break;
        case "nivAcademico2":
            validarCampo(expresiones.nombre, e.target, 'hnivAcad2');
        break;
        case "grado2":
            validarCampo(expresiones.edad, e.target, 'hgrado2');
        break;
        case "nombres3":
            validarCampo(expresiones.nombre, e.target, 'hnombres3');
        break;
        case "apellidos3":
            validarCampo(expresiones.nombre, e.target, 'hapellidos3');
        break;
        case "edad3":
            validarCampo(expresiones.edad, e.target, 'hedad3');
        break;
        case "nivAcademico3":
            validarCampo(expresiones.nombre, e.target, 'hnivAcad3');
        break;
        case "grado3":
            validarCampo(expresiones.edad, e.target, 'hgrado3');
        break;
        case "nombres4":
            validarCampo(expresiones.nombre, e.target, 'hnombres4');
        break;
        case "apellidos4":
            validarCampo(expresiones.nombre, e.target, 'hapellidos4');
        break;
        case "edad4":
            validarCampo(expresiones.edad, e.target, 'hedad4');
        break;
        case "nivAcademico4":
            validarCampo(expresiones.nombre, e.target, 'hnivAcad4');
        break;
        case "grado4":
            validarCampo(expresiones.edad, e.target, 'hgrado4');
        break;
    }
}

const validarCampo = (expresion, input, campo) => {
    if(expresion.test(input.value)){
        document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-incorrecto');
        document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-correcto');
        document.querySelectorA(`#grupo__${campo} i`).classList.remove('fa-times-circle');
        document.querySelectorA(`#grupo__${campo} i`).classList.add('fa-check-circle');
    }else{
        document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-incorrecto');
        document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-correcto');
        document.querySelectorA(`#grupo__${campo} i`).classList.add('fa-times-circle');
        document.querySelectorA(`#grupo__${campo} i`).classList.remove('fa-check-circle');
    }
}
inputs.forEach((input) => {
    input.addEventListener('keyup', validarFormulario);
    input.addEventListener('blur', validarFormulario);
});
formulario.addEventListener('submit', (e) =>{
    e.preventDefault();
});