function validarFormulario(event) {
    event.preventDefault(); // Previene el envío del formulario

    var especialidad = document.getElementById('especialidad').value;
    var medico = document.getElementById('medico').value;
    var fecha = document.getElementById('fecha').value;
    var hora = document.getElementById('hora').value;
    var email = document.getElementById('email').value;
    var observaciones = document.getElementById('observaciones').value;

    if (especialidad !== "" && medico !== "" && fecha !== "" && hora !== "" && email !== "" && observaciones !== "") {
        alert('Turno reservado correctamente');
        return true; // Envía el formulario
    } else {
        alert('Verifique los datos del turno');
        return false; // Detiene el envío del formulario
    }
}