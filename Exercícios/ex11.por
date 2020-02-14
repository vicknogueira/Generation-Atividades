programa
{
	funcao inicio(){
		cadeia nome, resultado
		inteiro ano_nascimento, ano_admissao, idade, admissao
		
		escreva("Nome do empregado: ")
		leia(nome)
		escreva("Código do empregado: ")
		leia(codigo)
		escreva("Ano de nascimento: ")
		leia(ano_nascimento)
		escreva("Ano de admissão: ")
		leia(ano_admissao)
		idade = 2020 - ano_nascimento
		admissao = 2020 - ano_admissao

		se(idade >= 65){
			resultado = "Requerer"
		}
		senao{
			se(idade >= 60 e admissao >= 25){
				resultado = "Requer aposentadoria"
			}
			se(admissao >= 30){
				resultado = "Requer aposentadoria"
			}
			senao{
				resultado = "Não requer aposentadoria"
			}
		}
		escreva("----------------------------------------S\n", nome, "\nVocê tem ", idade, " anos e trabalhou ", admissao, " anos portanto \n", resultado, "\n--------------------------------")
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 650; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */