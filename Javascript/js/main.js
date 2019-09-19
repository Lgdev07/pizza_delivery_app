let pacientes = document.querySelectorAll('.paciente');

// Calcula Imc

pacientes.forEach(paciente => {
    paciente.querySelector('.info-imc').innerHTML = 
    (paciente.querySelector('td.info-peso').innerHTML / 
    (paciente.querySelector('td.info-altura').innerHTML * 2)).toFixed(2) 
})