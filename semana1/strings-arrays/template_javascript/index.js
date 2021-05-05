/* 
1.  Indique todas as mensagens impressas no console, **SEM EXECUTAR o programa**.


    let array
    console.log('a. ', array)

    array = null
    console.log('b. ', array)

    array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
    console.log('c. ', array.length)

    let i = 0
    console.log('d. ', array[i])

    array[i+1] = 19
    console.log('e. ', array)

    const valor = array[i+6]
    console.log('f. ', valor)
    
    Resposta: Primeiro vai dar null que é nulo, depois vai contar o comprimento do codigo que da 11, depois mostrar o valor 3 e no ultimo vai dar 9
    */
    
/*
2. Leia o código abaixo com atenção 


    const frase = prompt("Digite uma frase")

    console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length)


    Qual será o valor impresso no console se a entrada do usuário for: "Subi num ônibus em Marrocos"?

    Resposta: SUBI NUM ÔNIBUS EM MIRROCOS 27, pois está colocando todas em maiusculo e trocando o A por I e depois eta pedindo o tamanho do codigo que da 27
*/
/*
1. Faça um programa que pergunte ao usuário seu nome e seu e-mail. Em seguida, imprima na tela a seguinte mensagem:

    O e-mail `emailDoUsuario` foi cadastrado com sucesso. Seja bem-vinda(o), `nomeDoUsuario`!
*/

const nomeDousuario = prompt('Qual seu nome ?')
const emailDoUsuario = prompt('Qual o seu emai-l ?')
const fraseEmail = `O e-mail ${emailDoUsuario} foi cadastrado com sucesso. Seja bem-vinda(o), ${nomeDousuario} !`

console.log(fraseEmail)

/*
2. Faça um programa que contenha um array com 5 das suas comidas preferidas, armazenado em uma variável. Em seguida, siga os passos:

    a) Imprima na tela o array completo

    b) Imprima na tela a mensagem "Essas são as minhas comidas preferidas: ", seguida por cada uma das comidas, **uma embaixo da outra**.

    c) Aqui vai um desafio: pergunte ao usuário uma comida preferida. Troque a segunda comida da sua lista pela inserida pelo usuário. Imprima na tela a nova lista
*/

const comidasPreferidas = [
"carne",
"salmao",
"hamburguer", 
"pizza", 
"sushi"
]
const fraseComidasPreferidas = `Essas são minhas comidas preferidas ${comidasPreferidas}.`

console.log(fraseComidasPreferidas)

const comidaDousuario = prompt('Qual sua comida preferida ?')

//console.log(comidasPreferidas.replaceAll("salmão", comidaDousuario))


/*
3. Faça um programa, seguindo os passos:

    a) Crie um array vazio e guarde-o em uma variável, chamada `listaDeTarefas`

    b) Pergunte ao usuário 3 tarefas que ele precise realizar no dia e armazene-as, uma por uma, no array

    c) Imprima o array na tela

    d) Peça ao usuário que digite o **índice** de uma tarefa que ele já realizou: 0, 1 ou 2 

    e) Remova da lista o item de índice que o usuário escolheu.

    f) Imprima o array na tela
*/



const tarefasDoDiaUm = prompt('Me diga primeira tarefa que precisa realizar ?')

const tarefasDoDiadois = prompt('Me diga segunda tarefa que precisa realizar ?')

const tarefasDoDiatres = prompt('Me diga terceira tarefa que precisa realizar ?')

const listaDeTarefas = [tarefasDoDiaUm, tarefasDoDiadois, tarefasDoDiatres]

console.log(listaDeTarefas)

const tarefasFeitas = prompt ('Tarefa que ja realizou ?')

console.log (listaDeTarefas.splice(2, 1))