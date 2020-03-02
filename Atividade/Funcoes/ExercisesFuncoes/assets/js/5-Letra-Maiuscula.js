//5 ------------ DEU CERTO ----------------------------------
function ex5(){
    var digite = prompt("Digite algo: ")
    var vetor = digite.split(' '); // transforma string em vetor
    var resultado = '' // Criei uma variável para guardar meu resultado
    for(var i = 0; i < vetor.length; i++){ // vai repetir cada vez que i for menor que o comprimeiro de cada elemento do vetor
        vetor[i] = vetor[i].replace(vetor[i].slice(0,1), vetor[i].slice(0,1).toUpperCase()) // o vetor[i] que seria o primeiro elemento, pega o valor que esta agora com o replace coma posição da primeira letra (slice(0, 1)), depois muda essa primeira letra e coloca uma letra maiuscula
        resultado += " " + vetor[i]; // pego a variável que guardará o resultado e adiciono um espaço + um elemento do vetor
    }// replace (valor atual, novo valor)
    document.write(resultado)// Imprimo na tela o resultado

    var digite = prompt("Digite algo: ");
}