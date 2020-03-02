// 6 --------------------------------------------------------
function ex6(){
    var texto = prompt("Digite uma frase: ");
    var vetor = texto.split(" ");
    var tamanho = vetor[0].length;
    var titulo = document.getElementById('resultado')
    var palavra = '';
    var resultado = document.getElementById('digitado')
    for(var i = 1; i < vetor.length; i++){
        if(tamanho < vetor[i].length){
            tamanho = vetor[i].length;
            vetor[i] = vetor[i].replace(vetor[i].slice(0, 1), vetor[i].slice(0, 1).toUpperCase())
            palavra = vetor[i]
        }
    }
    titulo.innerHTML = 'Exercício 6: Pegar uma frase e detectar qual a maior palavra:'
    resultado.innerHTML = `<br><br>A palavra que você digitou foi "${palavra}" e seu tamanho é ${tamanho}`;
}
