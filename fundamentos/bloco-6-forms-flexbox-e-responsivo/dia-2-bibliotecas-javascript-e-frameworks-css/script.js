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
        
    let picker = document.querySelector('#datepicker')
    /* picker = new Pikaday({
    field: document.getElementById('datepicker'),
    format: 'DD MM YYYY',
    onSelect: function() {
        console.log(this.getMoment().format('DD MM YY'));
    }
}); */

}