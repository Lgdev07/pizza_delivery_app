function valida_formulario(nome, peso, altura, gc){
    lista = []
    valida_nome(nome, lista)
    valida_peso(peso, lista)
    valida_altura(altura, lista)
    valida_gc(gc, lista)

    return lista
}

function cria_aviso(lista){
    let ul_validacao = document.getElementById('validacao')

    lista.forEach(element => {
        let novo_li = document.createElement('li')
        novo_li.innerHTML = element
        ul_validacao.appendChild(novo_li)
    });

}

function limpa_aviso(){
    let ul_validacao = document.getElementById('validacao')

    while (ul_validacao.firstChild) {
        ul_validacao.firstChild.remove();
    }
}

function valida_nome(nome, lista){
    if (!nome){
        return lista.push("Você Precisa preencher um nome")
    }
}

function valida_peso(peso, lista){
    if (!peso || peso > 300){
        return lista.push("Verifique as informações do peso")
    }
}

function valida_altura(altura, lista){
    if (!altura || altura > 2){
        return lista.push("Verifique as informações da altura")
    }
}

function valida_gc(gc, lista){
    if (!gc){
        return lista.push("Você precisa preencher a gordura corporal")
    }
}

