

document.querySelector('button#adicionar').addEventListener('click', clicar_adicionar)

function clicar_adicionar(){
    
    let paciente = obj_novo_paciente()
    let itm = document.querySelector(".paciente")
    let form_add = document.querySelector(".paciente-add")
    let cln = itm.cloneNode(true);
    let lista_retornada = valida_formulario(paciente.nome, paciente.peso, paciente.altura, paciente.gordura)
    
    limpa_aviso()
    cria_aviso(lista_retornada)

    if (lista_retornada.length == 0){
        document.getElementById("tabela-pacientes").appendChild(cln);
        obj_add_values_new_paciente(cln, paciente)
    }
}

function imc(peso, altura){
    return peso / (altura * 2)
}

function obj_novo_paciente(){
    let paciente = {
        nome: document.querySelector('#inicio-nome').value,
        peso: document.querySelector('#inicio-peso').value,
        altura: document.querySelector('#inicio-altura').value,
        gordura: document.querySelector('#inicio-gordura').value,
    }
    return paciente
}

function obj_add_values_new_paciente(clone, objeto){
    clone.querySelector('.info-nome').innerHTML = objeto.nome
    clone.querySelector('.info-peso').innerHTML = objeto.peso
    clone.querySelector('.info-altura').innerHTML = objeto.altura
    clone.querySelector('.info-gordura').innerHTML = objeto.gordura
    clone.querySelector('.info-imc').innerHTML = imc(objeto.peso, objeto.altura).toFixed(2)
}
