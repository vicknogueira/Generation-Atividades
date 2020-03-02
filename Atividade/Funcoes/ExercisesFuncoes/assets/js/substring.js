
// 1 -------------------------------Terminar

// for(var i = 0; i <= 3; i++){
//     var antes = document.getElementById('digitado')
//     var pergunta = prompt("Digite um número:");
//     var inverso = pergunta.split("").reverse().join('');
//     parseInt(pergunta)
//     antes.innerHTML = pergunta[i]
//     // var contrario = document.write(inverso);
//     // digitado.innerHTML = document.write(pergunta);
// }
// revertendo:
// var numeros = '2345';
// var inverso = numeros.substring(3,4) + numeros.substring(2,3) + numeros.substring(1,2) + numeros.substring(0,1);
// alert("numeros na ordem: " + numeros +"\nNumeros invertidos: " + inverso)

// // split() retira caracteres que esta entre aspas
// //reverse() inverte array
// //join() transforma um array em string
// var n = "1 2 3 4"
// var inverte = n.split('').reverse().join('');
// alert("Antes: "+ n + "\nAgora: "+ inverte)
//2 --------------------------------------------------------
// var pergunta = prompt("Digite: ")
// var inverso = pergunta.split('').reverse().join('');
// if(inverso == pergunta){
//     alert("é um palindrome")
// }else{
//     alert("não é um palindrome")
// }
/* 
*/ //VOLTA AQUIIII
// var pergunta = prompt("Digite: "); // pergunta = subi no onibus
// var sem_espaco = pergunta.split(' ').join("") // sem_espaco = [subi,no,onibus] ; join = subinoonibus 
// var inverso = sem_espaco.split("").reverse().join("") // inverso = [s,u,b,i,n,o,o,n,i,b,u,s] -- reverse = [s,u,b,i,n,o,o,n,i,b,u,s] -- join = subinoonibus
// alert("Antes: " + sem_espaco + "\nDepois: " + inverso)
// if(inverso == sem_espaco){
//         alert("é um palindrome")
//     }else{
//         alert("não é um palindrome")
//     }
    
// 3 ------------------------------------------------------
// var digite = prompt("Digite uma palavra: ");
// for(var i = 0; i < digite.length){
    //faremos em outro momento
// }
//4 ------------ DEU CERTO ---------------------------------
// var pergunta = prompt("Digite: ");
// alert(pergunta.split('').sort().join(' - '));
//5 ------------ DEU CERTO ----------------------------------
// var digite = prompt("Digite algo: ")
// var vetor = digite.split(' '); // transforma string em vetor
// var resultado = '' // Criei uma variável para guardar meu resultado
// for(var i = 0; i < vetor.length; i++){ // vai repetir cada vez que i for menor que o comprimeiro de cada elemento do vetor
//     vetor[i] = vetor[i].replace(vetor[i].slice(0,1), vetor[i].slice(0,1).toUpperCase()) // o vetor[i] que seria o primeiro elemento, pega o valor que esta agora com o replace coma posição da primeira letra (slice(0, 1)), depois muda essa primeira letra e coloca uma letra maiuscula
//     resultado += " " + vetor[i]; // pego a variável que guardará o resultado e adiciono um espaço + um elemento do vetor
// }// replace (valor atual, novo valor)
// document.write(resultado)// Imprimo na tela o resultado

// var digite = prompt("Digite algo: ");
// 6 --------------------------------------------------------
// var texto = prompt("Digite uma frase: ");
// var vetor = texto.split(" ");
// var tamanho = vetor[0].length;
// var titulo = document.getElementById('resultado')
// var palavra = '';
// var resultado = document.getElementById('digitado')
// for(var i = 1; i < vetor.length; i++){
//     if(tamanho < vetor[i].length){
//         tamanho = vetor[i].length;
//         vetor[i] = vetor[i].replace(vetor[i].slice(0, 1), vetor[i].slice(0, 1).toUpperCase())
//         palavra = vetor[i]
//     }
// }
// titulo.innerHTML = 'Exercício 6: Pegar uma frase e detectar qual a maior palavra:'
// resultado.innerHTML = `<br><br>A palavra que você digitou foi "${palavra}" e seu tamanho é ${tamanho}`;
// 7 ---------------------------------------------------------
var texto = prompt("Digite uma frase: ");
var vetor = texto.split("");
var letras = vetor[0]
var titulo = document.getElementById('resultado')
var palavra = '';
var resultado = document.getElementById('digitado')
var vogal = ['a','e','i','o','u'];
var recebe = vogal[0]
alert(vetor);
for(var i = 1; i < vetor.length; i++){
    if(letras == recebe[i]){
        letras = recebe[i];
    }
}
