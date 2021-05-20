    /* 
    1. Analise o programa abaixo e diga o que será impresso no console, **SEM EXECUTAR o programa.**
    
    let a = 10
    let b = 10

    console.log(b)

    b = 5
    console.log(a, b)
    
    Resposta: Sera imprimido no cosole.log o valor de 10, 5
    */
    /*
    2. Analise o programa abaixo e diga o que será impresso no console, **SEM EXECUTAR o programa.**

    let a = 10
    let b = 20
    c = a 
    b = c 
    a = b 

    console.log(a, b, c)
    
    Resposta: Sera imprimido no console.log 20, 20 ,20
    */
    /*
    3. Analise o programa abaixo, entenda o que ele faz e **sugira melhores nomes para as variáveis**. Lembre-se que devemos escolher nomes significativos, usar o padrão **camelCase**. Alem disso, os nomes não podem começar com números ou caracteres especiais.

    let p = prompt("Quantas horas você trabalha por dia?")
    let t = prompt("Quanto você recebe por dia?")
    alert(`Voce recebe ${t/p} por hora`)
    
    Resposta: let p, poderia se chamar numeroDeHorasTrabalhadasDia 
              let t, poderia se chamar numeroQueRecebeDia
    */
    /*
    1. Construa um programa, seguindo os seguintes passos:

     a) Declare uma variável para armazenar um nome, sem atribuir um valor.
          
     b) Declare uma variável para armazenar uma idade, sem atribuir um valor.
          
     c) Imprima na tela o tipo dessas variáveis que acabou de criar, usando o comando `typeof`.
          
     d) Reflita: por que esse tipo foi impresso? Escreva a resposta em um comentário de código.
          
     e) Pergunte ao usuário seu nome e sua idade, atribuindo esses dois valores às variáveis que acabou de criar.
          
     f) Novamente, imprima na tela o tipo dessas variáveis. O que você notou? Escreva em um comentário de código.
          
     g) Para finalizar, imprima na tela a mensagem: "Olá `nome`,  você tem `idade` anos". Onde `nome` e `idade` são os valores que o usuário inseriu
    */

const nome   
const idade 
// esta retornando nome não definido porque eu não atribui um valor ao nome e nem a idade.
console.log(typeof nome)
console.log(typeof idade)

const nome = prompt ("Qual seu nome?")
const idade = prompt ("Qual sua idade?")
console.log("Ola", nome, "você tem", idade, "anos") 

    /*
2. Escreva um programa que faça 3 perguntas de Sim ou Não, armazenado em uma variável. Por exemplo: "Você está usando uma roupa azul hoje?". Depois, siga os passos:
    a) Crie três novas variáveis, contendo as respostas
    b) Imprima na tela todas as perguntas seguidas por suas respectivas respostas. Por exemplo:
    Você está usando uma roupa azul hoje? - SIM
    */

let blusaAzul = true 
let calcaPreta = true
let coecaBranca = false 

console.log("Voce esta usando uma blusaAzul ?")
console.log("Voce esta usando uma calcaPreta ?")
console.log("Voce esta usando uma coecaBranca ?")
