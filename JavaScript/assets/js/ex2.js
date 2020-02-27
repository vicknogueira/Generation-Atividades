// função é um conjunto de comandos que irá ocorrer após um evento
var nome = document.querySelector('#nome');
var sobrenome = document.querySelector('#sobrenome');
function mostrar(){
    var nomeCompleto = `${nome.value} ${sobrenome.value}`;
    alert(nomeCompleto);
}