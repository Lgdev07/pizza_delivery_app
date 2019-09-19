let pesquisa = document.querySelector('#filtro')

pesquisa.addEventListener('input', function(){
    let resultado = document.querySelectorAll('.info-nome')

    resultado.forEach(nome =>{
        if (!nome.innerHTML.toLowerCase().includes(this.value.toLowerCase())){
            nome.closest('tr').style.display='none'
    }else{
        nome.closest('tr').style.display=''
    }})

})

