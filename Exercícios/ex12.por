programa
{
	funcao inicio(){
		// Receber 2 números e colocar em ordem crescente
		/*inteiro n1, n2

		escreva("Digite um número: ")
		leia(n1)
		escreva("Digite outro número: ")
		leia(n2)
		se(n1 < n2){
			escreva("-----------------\n", n1, "\n", n2, "\n-----------------\n")
		}
		senao{
			escreva("-----------------\n", n2, "\n", n1, "\n-----------------\n")
		}*/

		
		// Receber 3 números e falar qual é o maior
		/*inteiro n1, n2, n3, maior


		escreva("Digite um número: ")
		leia(n1)
		escreva("Digite outro número: ")
		leia(n2)
		escreva("Digite outro número: ")
		leia(n3)
		se(n1 < n2 e n2 < n3){
			maior = n3
		}
		senao{
			se(n1 < n2 e n2 > n3){
				maior =  n2
			}
			senao{
				maior = n1
			}
		}
		escreva("O maior número entre ", n1, ", ", n2, " e ", n3, " é o número ", maior)*/

		// receber 5 números, calcular e imprimir a média
		real n1, n2, n3, n4, n5, media

		escreva("Escreva o 1ª número: ")
		leia(n1)
		escreva("Escreva o 2ª número: ")
		leia(n2)
		escreva("Escreva o 3ª número: ")
		leia(n3)
		escreva("Escreva o 4ª número: ")
		leia(n4)
		escreva("Escreva o 5ª número: ")
		leia(n5)

		media = (n1 + n2 + n3 + n4 + n5)/5

		escreva("\nA média entre todos esses números é ", media, "\n")
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 1020; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */