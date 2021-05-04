/* 
1. Seu colega se aproxima de você falando que o código dele não funciona como devia.  Vamos ajudá-lo: consegue perceber algum problema? O que será impresso no console? 

    let primeiroNumero = prompt("Digite um numero!")
    let segundoNumero = prompt("Digite outro numero!")

    const soma = primeiroNumero + segundoNumero

    console.log(soma)
    
   Resposta: tem que trasformar o codigo em number pois o prompt so retorna em string. 
   */
  /*
  2. Para o exercício anterior, sugira ao seu colega uma solução para que o valor impresso no console seja, de fato, a soma dos dois números.
  
  Resposta: então teria que colocar por exemplo let primeiroNumero = Number(prompt("Digite um numero!")), o mesmo exemplo serve para o segundo numero, let segundoNumero = Number(prompt("Digite outro numero!")).
  */
  /*
  1. Faça um programa que:

  a) Pergunte a idade do usuário

  b) Pergunte a idade do seu melhor amigo ou da sua melhor amiga

  c) **Imprima na console** a seguinte mensagem: "Sua idade é maior do que a do seu melhor amigo?", seguido pela resposta (`true` ou `false`)

  d) **Imprima na console** a diferença de idade (não tem problema se sair um número negativo)
*/

let idadeDoUsuario = Number(prompt('Diga sua idade ?'))
let idadeDoamigo = Number(prompt('Diga a iadade do seu amigo ou amiga ?'))

const idadeMaior = idadeDoUsuario > idadeDoamigo
console.log ('Sua idade é maior do que a do seu melhor amigo ou amiga?', idadeMaior)

const soma = idadeDoUsuario - idadeDoamigo
console.log ('Diferença das idade é ?', soma)

/*
2. Faça um programa que:

    a) Peça ao usuário que insira um número **par**

    b) Imprima na console **o resto da divisão** desse número por 2.

    c) Teste o programa com diversos números pares. Você notou um padrão? Escreva em um comentário de código.

    d) O que acontece se o usuário inserir um número ímpar? Escreva em um comentário de código
  */

let insiraNumeroPar = Number(prompt('Digite um numero par'))
const resultadoPar = insiraNumeroPar % 2
//const restoDoPar = resultadoPar % 2
console.log ('Resultado do resto do par é ?', resultadoPar)
// Sempre vai retornar zero pois o par sempre é dividido por inteiro, não sobra restos
// Se o usuario digitar um numero impar inteiro sempre vai retornar 1, pois sobra o resto de 1

/*
3. Faça um programa que pergunte ao usuário sua idade em anos. Depois, imprima no console 

    a) A idade do usuário em meses

    b) A idade do usuário em dias

    c) A idade do usuário em horas
*/

let idadeAnos = Number(prompt('Quantos anos você tem ?'))

const idadeMeses = idadeAnos * 12
console.log('Sua idade em meses é ?', idadeMeses)

const idadeDias = idadeMeses * 30
console.log('Sua idade em dias é ?', idadeDias)

const idadeHoras = idadeDias * 60
console.log('Sua idade em horas é ?', idadeHoras)

/*
4. Faça um programa que pergunte ao usuário dois números. Em seguida, faça as operações e imprima no console as seguintes mensagens:
  
    O primeiro numero é maior que segundo? true
    O primeiro numero é igual ao segundo? false
    O primeiro numero é divisível pelo segundo? true
    O segundo numero é divisível pelo primeiro? true
*/


console.log('O primeiro numero é maior que o segundo ?', 50 > 10)
console.log('O primeiro numero é igual ao segundo ?', 50 == 10)
const numero1 = 50
const numero2 = 10
console.log("O primeiro numero é divisível pelo segundo? ", (numero1%numero2) ===0)
console.log("O segundo numero é divisível pelo primeiro? ", (numero2%numero1) !==0)
