 // Coloca o texto do h1 do html num alert
var texto_h1 = document.getElementById("titulo");
alert(texto_h1.textContent);
texto_h1.className="vermelho";

// Pega a tag pelo índice
var texto_h2 = document.getElementsByTagName('h2')[0];
alert(texto_h2.textContent);

// Pega pela classe e o índice da classes
// var texto_li = document.getElementsByClassName('verde')[3];
// alert(texto_li.textContent);
/* pega qualquer elemento
var qualquer = document.querySelector('#caixa');*/

// Usando for() para imprimir os elementos da lista um por um, de acordo com 
// o tamanho da lista ou seja usando length
var textoClasseVerde = document.getElementsByClassName('verde');

for(var posicao = 0; posicao <= textoClasseVerde.length; posicao ++){
    alert(` Conteúdo pegando pela classe e usando length\n- `+ textoClasseVerde[posicao].textContent);// pega a lista imprime a cada posicao, cada repetição e coloca como texto num container
}
//Pega todos os li que tem a classe 'verde'
// var texto_liclassVerde = document.querySelectorAll('li.verde')
// for(var posicao = 0; posicao <= textoClasseVerde.length; posicao ++){
//     alert("Conteúdo da lista usando querySelector" + textoClasseVerde[posicao].textContent);
// }