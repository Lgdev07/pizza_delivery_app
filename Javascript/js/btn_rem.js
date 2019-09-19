
let tabela = document.querySelector('#tabela-pacientes')


tabela.addEventListener('click', function(event){
    if (event.target.getAttribute('id') == ('remover')){
        event.target.closest('tr').classList.add('fadeOut')

        setTimeout(function(){
            event.target.closest('tr').remove()
        }, 500)
    }
})

// tabela.forEach(event => {
//     console.log(event)
//     // if (event ==) 
//     // btn_remover.addEventListener('click', () =>{
//     //     btn_remover.closest('tr').remove()
//     // })

// })

