// --- EXERCÍCIO 1 ---------------------------------------------------------------------

/*
1. Leia o código abaixo:

    const respostaDoUsuario = prompt("Digite o número que você quer testar")
    const numero = Number(respostaDoUsuario)

    if (numero % 2 === 0) {
      console.log("Passou no teste.")
    } else {
      console.log("Não passou no teste.")
    }
    

    a) Explique o que o código faz. Qual o teste que ele realiza? 

    b) Para que tipos de números ele imprime no console "Passou no teste"? 

    c) Para que tipos de números a mensagem é "Não passou no teste"?

    RESPOSTA: a) Ele pede um numero para o usuario no qual ele deve informar, qual quer numero, vai imprimir "Passou no teste." se o numero tiver resto igual a zero, se não tiver resto igual a zero ele vai imprimir "Não passou no teste."
              b) Numeros que tenham resto igual a 0.
              c) Numeros com resto não igual a 0.
*/


// --- EXERCÍCIO 2 ------------------------------------------------------------------

/*
2. O código abaixo foi feito por uma pessoa desenvolvedora, contratada para automatizar algumas tarefas de um supermercado:

    let fruta = prompt("Escolha uma fruta")
    let preco
    switch (fruta) {
      case "Laranja":
        preco = 3.5
        break;
      case "Maçã":
        preco = 2.25
        break;
      case "Uva":
        preco = 0.30
        break;
      case "Pêra":
        preco = 5.5
        break; // BREAK PARA O ITEM c.
      default:
        preco = 5
        break;
    }
    console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)

    a) Para que serve o código acima?

    b) Qual será a mensagem impressa no console, se o valor de fruta for `"Maçã"`?

    c) Considere que um usuário queira comprar uma `Pêra`, qual seria a mensagem impressa no console se retirássemos o `break` que está logo acima do `default` (o `break` indicado pelo comentário "BREAK PARA O ITEM c.")?

    RESPOSTA: a) O Usuario escolhe uma fruta cadastrada no sistema, das frutas cadastradas no sistema que ele escolher vai imprimir na tela o preço da fruta.
              b) Vai ser impresso no console a seguinte mensagem "O preço da fruta  Maçã  é  R$  2.25".
              c) Vai ser impresso no console a seguinte mensagem "O preço da fruta  Pêra  é  R$  5".
*/
  

// --- EXERCÍCIO 3 ------------------------------------------------------------------

/*
3. Leia o código abaixo:

    const numero = Number(prompt("Digite o primeiro número."))

    if(numero > 0) {
      console.log("Esse número passou no teste")
    	let mensagem = "Essa mensagem é secreta!!!"
    }

    console.log(mensagem)
    
    a) O que a primeira linha está fazendo?

    b) Considere um usuário digitou o número 10. Qual será a mensagem do terminal? E se fosse o número -10?

    c) Haverá algum erro no console? Justifique usando os conceitos de bloco ou escopo.

    RESPOSTA: a) A primeira linha Pede para o usuario digitar um numero, se o usuario digitar um numero maior que 0, vai imprimir no console "Esse número passou no teste".
              b) Mensagem seria: "Uncaught ReferenceError: mensagem is not defined, at index.js:97, (anonymous) @ index.js:97", pois o codigo esta errado ta puxando a variavel mensagem sendo que deveria puxar a variavel "numero", se trocarmos por variavel "numero", sairia a mensagem "Esse numero passou no teste".
              c) Mensagem de erro seria: "Uncaught ReferenceError: mensagem is not defined, at index.js:97, (anonymous) @ index.js:97", pois o codigo esta errado ta puxando a variavel mensagem sendo que deveria puxar a variavel "numero"

*/

// --- EXERCÍCIO 4 ------------------------------------------------------------------

/*
1. Faça um programa que pergunta ao usuário qual a idade dele e imprima no console se ele/ela pode dirigir (apenas maiores de idade).

    a) Faça um `prompt` para receber a idade do usuário e guarde em uma variável.

    b) Garanta que essa variável é do tipo `Number`, você deve usar o cast para number para isso.

    c) Agora veja se essa idade do usuário corresponde à idade mínima que permite dirigir. Se sim, imprima no console `"Você pode dirigir"`, caso contrário, imprima `"Você não pode dirigir."`
*/

    const podeDirigir = () => {
        
        const qualSuaIdade = Number(prompt("Qual a sua idade senhor ou senhora ?"))
        
        if(qualSuaIdade >=18){
            console.log("Você pode dirigir")
        }else {
            console.log("Você não pode dirigir.")
        }
    }

    podeDirigir()
// --- EXERCÍCIO 5 ------------------------------------------------------------------


// --- EXERCÍCIO 6 ------------------------------------------------------------------


