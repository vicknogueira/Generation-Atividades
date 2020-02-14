programa
{
	inclua biblioteca Matematica // chamando uma biblioteca
	funcao inicio(){
		cadeia nome, resultado
		real nota1, nota2, nota3, media
		// Input
		escreva("Nome do aluno: ")
		leia(nome)
		escreva("Digite a sua primeira nota: ")
		leia(nota1)
		escreva("Digite a sua segunda nota: ")
		leia(nota2)
		escreva("Digite a sua terceira nota: ")
		leia(nota3)
		// processamento
		media = (nota1 + nota2 + nota3)/3
		media = Matematica.arredondar(media, 1)
		// Output
		se(media >= 5){
			resultado = "Aprovado(x)!"
			escreva("--------------------------\n", resultado,"\n", nome, " sua média é: ", media, "\n")
		}
		senao{
			resultado = "Reprovado(x)!"
			escreva("--------------------------\n", resultado,"\n", nome, " sua média é: ", media, "\n")
		}
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 520; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */