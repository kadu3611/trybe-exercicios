window.onload = function(){

    let en = document.querySelector('#enviar')
    let inpt = document.querySelector('#input-name')
    let name = document.querySelector('#nameUser')
    en.addEventListener('click',envia)

        function envia(event){
            /* event.preventDefault(); */ //retirar o comportamento padrão

        }

    let apaga = document.querySelector('#apagar')
    apaga.addEventListener('click', apagando)
        function apagando(){
            document.location.reload(true)

        }

}