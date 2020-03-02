// 7 ---------------------------------------------------------

try{
    function ex7(){
        var texto = prompt('Digite uma palavra: ');
        var vetor = texto.split("");
        var quantidade = 0;
        var resultado = document.getElementById('digitado7')
        var titulo = document.getElementById('resultado7')
        var vogal = ['a','e','i','o','u'];
        for(var i = 0; i < vetor.length; i++){
            if(vogal[0] == vetor[i] || vogal[1] == vetor[i] || vogal[2] == vetor[i] || vogal[3] == vetor[i] || vogal[4] == vetor[i]){
             quantidade = quantidade + 1
            }
        }
        titulo.innerHTML = `A palavra/frase que você digitou foi: <p style="color: #805300;">"${texto}"</p>`
        resultado.innerHTML = `A quantidade de vogais é ${quantidade}`
    }
}catch(erro){
    alert(`erro!\ninfomar o código do problema ao administrador\n'${erro}'`)
}
