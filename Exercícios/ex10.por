programa
{
	inclua biblioteca Matematica
	funcao inicio(){
		cadeia nome, resultado
		real nota1, nota2, media
		escreva("Nome do aluno: ")
		leia(nome)
		escreva("Digite a sua 1ª nota: ")
		leia(nota1)
		escreva("Digite a sua 2ª nota: ")
		leia(nota2)
		// processamento
		media = (nota1 + nota2)/2
		media = Matematica.arredondar(media, 1)
		// Output
		se(media >= 7){
			resultado = "Aprovado(x)!"
		}
		senao{
			se(media > 5 e media < 7){//Operador lógico && (e)
				resultado = "Exame!"
			}
			senao{
				resultado = "Reprovado(x)!"
			}
		}
		escreva("--------------------------\n", resultado,"\n", nome, " sua média é: ", media, "\n")
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 340; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */