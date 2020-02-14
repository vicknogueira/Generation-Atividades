programa
{
	funcao inicio(){
		cadeia nome, resultado
		real salario
		escreva("Nome do funcionário: ")
		leia(nome)
		escreva("Informe seu salário: R$")
		leia(salario)
		se(salario > 4000){
			escreva("\n", nome, " você ganha mais de R$4000 \n")
		}
		senao{
			escreva("\n", nome, " você ganha menos que R$4000 \n")
		}
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 322; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */