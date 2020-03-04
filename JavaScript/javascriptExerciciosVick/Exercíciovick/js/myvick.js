function seuNome(){
    var nome = prompt("Digite seu nome");
    var botao = document.getElementById("nome");
    botao.textContent = `Olá, ${nome}, tudo bem?`;
}
function secTextarea(){
    var caixa = document.getElementById('box');
    var txtarea = document.createElement('textarea');
    txtarea.appendChild(document.createTextNode("Deu certooooo"));
    caixa.appendChild(txtarea);
}
function abrePopUp(){
    var data = new Date();
    var hora = data.getHours();
    var min = data.getMinutes();
    var divpop = document.getElementById('popup');
    var criapopup = document.createElement('div');
    var result = '';
    if(hora <= 12){
        result = 'Bom dia';
    }
    else if(hora <= 18){
        result = 'Boa tarde';
    }
    else{
        result = 'Boa noite';
    }
    criapopup.style.width = '300px';
    criapopup.style.height = '220px';
    criapopup.style.backgroundColor = 'green';
    criapopup.style.zIndex = '1000';
    criapopup.style.position = 'fixed';
    criapopup.style.top = '50%';
    criapopup.style.left = '40%';
    criapopup.style.boxShadow = "0 0 19px 5px grey";
    criapopup.style.backgroundColor = '#e3e489';
    criapopup.style.padding = '10px';
    criapopup.appendChild(document.createTextNode(`${result}, são exatamente ${hora} horas e ${min} minutos. Esse é um exemplo de popup utilizando o elemento div. Dessa maneira esse pop-up não será bloqueado.`));
    divpop.appendChild(criapopup);

}
