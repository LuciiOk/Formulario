let formulario:any = document.getElementById("formulario");
const nombre = formulario.elements[0]
const apellidos = formulario.elements[1]
const rut = formulario.elements[2]
const email = formulario.elements[3]
const telefono = formulario.elements[4]

formulario.addEventListener("submit", (event:any) => {
    let errorT:any = document.getElementById('errorRut');
    errorT.style.display = 'none';
    let errorR:any = document.getElementById('errorTelefono');
    errorR.style.display = 'none';

    if (validarNumero(telefono.value) && validarRut(rut.value)) {
        let mensaje:any = document.getElementById("mensaje-exito")
        formulario.style.display = "none";
        mensaje.style.display = "flex";
    }
    event.preventDefault();
});

const validarNumero = (telefono:string):boolean => {
    if (telefono.length != 9) {
        let error:any = document.getElementById('errorTelefono');
        error.style.display = 'block';
        return false;
    }
    return true;
} 

const validarRut = (rut:string):boolean => {
    if (rut.slice(0,-2).length != 7) {
        let error:any = document.getElementById('errorRut');
        error.style.display = 'block';
        return false;
    }
    return true;
}
