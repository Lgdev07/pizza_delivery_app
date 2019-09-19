let buscar_pacientes = document.querySelector('#buscar-paciente')

buscar_pacientes.addEventListener('click', function(){
    let xhr = new XMLHttpRequest()


    xhr.open('GET', 'https://api-pacientes.herokuapp.com/pacientes')

    xhr.addEventListener('load', function(){
        if (xhr.status == 200){
            let lista_objetos = JSON.parse(xhr.responseText)
            lista_objetos.forEach(objeto => {
                let itm = document.querySelector(".paciente")
                let cln = itm.cloneNode(true);
                document.getElementById("tabela-pacientes").appendChild(cln)
    
                obj_add_values_new_paciente(cln, objeto)
                console.log(objeto)
            })
        } else{
            console.log(xhr.status)
            console.log(xhr.responseText)
            document.querySelector('#erro-ajax').classList.remove('invisivel')
        }
    })
    xhr.send()
})

