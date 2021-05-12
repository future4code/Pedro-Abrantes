
//console.log('Bom dia!!!')

//--------------------------------EXERCÍCIO 1---------------------------------------

/*
1. O que o código abaixo está fazendo? Qual o resultado impresso no console?

    let valor = 0
    for(let i = 0; i < 5; i++) {
      valor += i
    }
    console.log(valor)
  
    RESPOSTA: Está fazendo um loop para o valor de "i" ser uma valor de 0 mais 1 e depois mais o valor do proximo "i", vai execultar esse loop até o valor a quantidades de vezes que o numero for menor que 5 depois de 5 vezes vai parar e vai gerar um valor impreso no console final de 10.
 
*/   

//--------------------------------EXERCÍCIO 1---------------------------------------

/*
2. Leia o código abaixo:

    const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
    for (let numero of lista) {
      if (numero > 18) {
    		console.log(numero)
    	}
    }

    a) O que vai ser impresso no console?

    b) Se eu quisesse acessar o **índice** de cada elemento dessa lista, o `for...of...` é suficiente? Se sim, o que poderia ser usado para fazer isso?

    RESPOSTA: a) Os seguintes valores: 19, 21, 23, 25, 27, 30
              b) const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
                 const array = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
                    for (let numero of lista) {
                        if (numero > 18) {
    	            for(let i = 0; i < array.length; i++){
                    console.log(array[i]) 
                }	
                    console.log(numero)
                }
                }
 
*/

//--------------------------------EXERCÍCIO 2---------------------------------------

/*
3. Qual seria o resultado impresso no console, se o usuário digitasse o número `4` ?

    const quantidadeTotal = Number(prompt("Digite a quantidade de linhas: "))
    let quantidadeAtual = 0
    while(quantidadeAtual < quantidadeTotal){
      let linha = ""
      for(let asteriscos = 0; asteriscos < quantidadeAtual + 1; asteriscos++){
        linha += "*"
      }
      console.log(linha)
      quantidadeAtual++
    }

    RESPOSTA: *, **, ***, ****
              const V = 'Boa Tarde!'
              console.log(V)
*/

//--------------------------------EXERCÍCIO 3---------------------------------------