//2 --------------------------------------------------------
function ex2(){
    var pergunta = prompt("Digite: ")
    var inverso = pergunta.split('').reverse().join('');
    if(inverso == pergunta){
        alert("é um palindrome")
    }else{
        alert("não é um palindrome")
    }
}
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