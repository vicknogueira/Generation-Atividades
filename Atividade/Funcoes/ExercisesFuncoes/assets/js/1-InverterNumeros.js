
// 1 -------------------------------Terminar

function ex1(){
    for(var i = 0; i <= 3; i++){
        var antes = document.getElementById('digitado')
        var pergunta = prompt("Digite um número:");
        var inverso = pergunta.split("").reverse().join('');
        parseInt(pergunta)
        antes.innerHTML = pergunta[i]
        // var contrario = document.write(inverso);
        // digitado.innerHTML = document.write(pergunta);
    }
    revertendo:
    var numeros = '2345';
    var inverso = numeros.substring(3,4) + numeros.substring(2,3) + numeros.substring(1,2) + numeros.substring(0,1);
    alert("numeros na ordem: " + numeros +"\nNumeros invertidos: " + inverso)
    
    // split() retira caracteres que esta entre aspas
    //reverse() inverte array
    //join() transforma um array em string
    var n = "1 2 3 4"
    var inverte = n.split('').reverse().join('');
    alert("Antes: "+ n + "\nAgora: "+ inverte)
}