programa
{
	funcao inicio(){
		cadeia nome
		real salario, newSalario
		escreva("Nome do funcionário: ")
		leia(nome)
		escreva("Informe seu salário: R$")
		leia(salario)
		se(salario >= 5000){
			newSalario = (salario * 0.05) + salario
		}
		senao{
			newSalario = (salario * 0.10) + salario
		}
			escreva("\n", nome, " seu salário era R$", salario, ", agora com 5% de aumento é R$", newSalario, "\n")
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 292; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */