programa
{
	inclua biblioteca Matematica
	funcao inicio(){
		real salario = 0.0, totalSalario = 0.0
		inteiro media, cont = 1
		
		enquanto(cont <= 3){
			
			escreva("Informe o seu salario: R$")
			leia(salario)
			totalSalario += salario
			cont++
			
		}
		media = totalSalario/3
		totalSalario = Matematica.arredondar(totalSalario, 2)
		escreva("--------------------------------\nA soma dos salarios dão:" + totalSalario + " e a média dos salários dão: R$" + media)
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 282; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = {salario, 5, 7, 7}-{totalSalario, 5, 22, 12}-{media, 6, 10, 5};
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */