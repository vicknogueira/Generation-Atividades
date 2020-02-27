var nome = document.querySelector("#nome");
var sobrenome = document.querySelector("#sobrenome");
var idade = document.querySelector('#idade');
var estado = document.querySelector('#estado');
var senha = document.querySelector('#senha');

function mostrar(){
    // Ele procura um input com um name "sexo" e ve qual esta checado
    var sexo = document.querySelector('input[name="sexo"]:checked').value;
    var beneficios = document.querySelector('.beneficios').checked;
    var valeTransporte = document.querySelector("#vt").checked;
    var almoco = document.querySelector("#almoco").checked;
    var nascimento = document.querySelector('#nascimento').value;
    var dia = nascimento.substring(8,10);
    var mes = nascimento.substring(5,7);
    var ano = nascimento.substring(0,4);
    nascimento = `${dia}/${mes}/${ano}`
    if(beneficios == true){
        beneficios = "Almoço e Vale-Transporte"
    }else{
        beneficios = ""
    }
    if(valeTransporte == true){
        valeTransporte = "Sim"
    }else{
        valeTransporte = "Não"
    }
    if(almoco == true){
        almoco = "Sim"
    }else{
        almoco = "Não"
    }

    alert(`Nome: ${nome.value} ${sobrenome.value}\nIdade: ${idade.value} anos\nNascimento: ${nascimento}\nEstado: ${estado.value}\nSexo: ${sexo}\n---------------------------------\nSenha: ${senha.value}\n---------------------------------\nBenefício: Almoço (${almoco}) - Vale-Transporte (${valeTransporte})`);
}