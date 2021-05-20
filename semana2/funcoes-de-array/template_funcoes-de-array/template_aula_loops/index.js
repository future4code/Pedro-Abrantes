
//console.log('Bom dia!!!')

//--------------------------------EXERCÍCIO 1---------------------------------------

/*
1.  Leia o código abaixo
   
    const usuarios = [
      { nome: "Amanda Rangel", apelido: "Mandi" },
      { nome: "Laís Petra", apelido: "Laura" },
      { nome: "Letícia Chijo", apelido: "Chijo" }
    ]

    const novoArrayA = usuarios.map((item, index, array) => {
       console.log(item, index, array)
    })
   

    a) O que vai ser impresso no console?

    
    RESPOSTA: a) O apelido e o nome das pessoas, porem o apelido vindo primeiro.
              apelido: "Mandi"
              nome: "Amanda Rangel"
              apelido: "Laura"
              nome: "Laís Petra"
              apelido: "Chijo"
              nome: "Letícia Chijo"

*/

//--------------------------------EXERCÍCIO 1---------------------------------------

/*
2. Leia o código abaixo

    const usuarios = [
      { nome: "Amanda Rangel", apelido: "Mandi" },
      { nome: "Laís Petra", apelido: "Laura" },
      { nome: "Letícia Chijo", apelido: "Chijo" },
    ]

    const novoArrayB = usuarios.map((item, index, array) => {
       return item.nome
    })

    console.log(novoArrayB)


    a) O que vai ser impresso no console?


    RESPOSTA: a) As Strings "nome" em ordem.
              ["Amanda Rangel", "Laís Petra", "Letícia Chijo"]
              0: "Amanda Rangel"
              1: "Laís Petra"
              2: "Letícia Chijo"

*/

//--------------------------------EXERCÍCIO 2---------------------------------------

/*
3. Leia o código abaixo

    const usuarios = [
      { nome: "Amanda Rangel", apelido: "Mandi" },
      { nome: "Laís Petra", apelido: "Laura" },
      { nome: "Letícia Chijo", apelido: "Chijo" },
    ]

    const novoArrayC = usuarios.filter((item, index, array) => {
       return item.apelido !== "Chijo"
    })

    console.log(novoArrayC)
    

    a) O que vai ser impresso no console?


    RESPOSTA: a) As pessoas que náo tenhão o apelido "Chijo"
              apelido: "Mandi"
              nome: "Amanda Rangel"
              apelido: "Laura"
              nome: "Laís Petra"

*/

//--------------------------------EXERCÍCIO 3---------------------------------------

/*
1. Dado o seguinte array de cachorrinhos que são clientes de um pet shop, realize as operações pedidas nos itens abaixo utilizando as funções de array **map** e **filter:**

    const pets = [
       { nome: "Lupin", raca: "Salsicha"},
       { nome: "Polly", raca: "Lhasa Apso"},
       { nome: "Madame", raca: "Poodle"},
       { nome: "Quentinho", raca: "Salsicha"},
       { nome: "Fluffy", raca: "Poodle"},
       { nome: "Caramelo", raca: "Vira-lata"},
    ]
    
    a) Crie um novo array que contenha apenas o nome dos doguinhos

    b) Crie um novo array apenas com os cachorros salsicha

    c) Crie um novo array que possuirá mensagens para enviar para todos os clientes que são poodles. A mensagem deve ser: "Você ganhou um cupom de desconto de 10% para tosar o/a `[NOME]`!"
*/

const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
 ]

 const listaDeNomes = pets.map ((nomes) => {
     return nomes.nome
 })
 console.log(listaDeNomes)

 const listaDeSalsicha = pets.filter ((soSalsicha) => {
    return soSalsicha.raca === "Salsicha"
})
console.log(listaDeSalsicha)

