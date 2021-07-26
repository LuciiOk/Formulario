"use strict";
var formulario = document.getElementById("formulario");
var nombre = formulario.elements[0];
var apellidos = formulario.elements[1];
var rut = formulario.elements[2];
var email = formulario.elements[3];
var telefono = formulario.elements[4];
formulario.addEventListener("submit", function (event) {
    var errorT = document.getElementById('errorRut');
    errorT.style.display = 'none';
    var errorR = document.getElementById('errorTelefono');
    errorR.style.display = 'none';
    if (validarNumero(telefono.value) && validarRut(rut.value)) {
        var mensaje = document.getElementById("mensaje-exito");
        formulario.style.display = "none";
        mensaje.style.display = "flex";
    }
    event.preventDefault();
});
var validarNumero = function (telefono) {
    if (telefono.length != 9) {
        var error = document.getElementById('errorTelefono');
        error.style.display = 'block';
        return false;
    }
    return true;
};
var validarRut = function (rut) {
    if (rut.slice(0, -2).length != 7) {
        var error = document.getElementById('errorRut');
        error.style.display = 'block';
        return false;
    }
    return true;
};
