// --- EXERCÍCIO 1 ---------------------------------------------------------------------
/*
1.  Leia o código abaixo

      const filme = {
    	nome: "Auto da Compadecida", 
    	ano: 2000, 
    	elenco: [
    		"Matheus Nachtergaele", "Selton Mello", "Denise Fraga", 
    		"Virginia Cavendish"
    		], 
    	transmissoesHoje: [
    		{canal: "Telecine", horario: "21h"}, 
    		{canal: "Canal Brasil", horario: "19h"}, 
    		{canal: "Globo", horario: "14h"}
    		]
    }

    console.log(filme.elenco[0])
    console.log(filme.elenco[filme.elenco.length - 1])
    console.log(filme.transmissoesHoje[2])
    

    a) O que vai ser impresso no console?
  
    RESPOSTA:a) Vai imprimeir, o ator e atriz, Matheus Nachtergaele Virginia Cavendish, o canal: Globo e horario: 14h.
*/
// --- EXERCÍCIO 2 ------------------------------------------------------------------
/*
2. Leia o código abaixo
    
    const cachorro = {
    	nome: "Juca", 
    	idade: 3, 
    	raca: "SRD"
    }

    const gato = {...cachorro, nome: "Juba"}

    const tartaruga = {...gato, nome: gato.nome.replaceAll("a", "o")}

    console.log(cachorro)
    console.log(gato)
    console.log(tartaruga)

    a) O que vai ser impresso no console?

    b) O que faz a sintaxe dos três pontos antes do nome de um objeto?

    RESPOSTA: a) nome do cachorro Juca, sua idade 3, e sua raça SRD, no segundo nome do gato Juba, sua idade: 3, sua raça SRD
nome da tartatuga Jubo, sua idade 3 e sua raça SRD.
              b) "..." Siguinifica que vai copiar o que está escrito no objeto indetificado após "..."
*/

// --- EXERCÍCIO 3 ------------------------------------------------------------------
/*
3. Leia o código abaixo

    function minhaFuncao(objeto, propriedade) {
    	return objeto[propriedade]
    }

    const pessoa = {
      nome: "Caio", 
      idade: 23, 
      backender: false
    }

    console.log(minhaFuncao(pessoa, "backender"))
    console.log(minhaFuncao(pessoa, "altura"))
    

    a) O que vai ser impresso no console?

    b) Explique o valor impresso no console. Você sabe por que isso aconteceu?

       RESPOSTA: a) A "altura" vai retornar "undefined" e o backender vai retornar "false".
                 b) Porque não teve nem uma denominação do obejto altura por isso ele retorna "undefined".
*/

// --- EXERCÍCIO 4 ------------------------------------------------------------------
/*
1. Resolva os passos a seguir: 

    a) Crie um objeto. Ele deve conter duas propriedades: nome (string) e apelidos (um array que sempre terá exatamente **três apelidos**). Depois, escreva uma função que recebe como entrada um objeto e imprime uma mensagem no modelo abaixo**:** 

    // Exemplo de entrada
    const pessoa = {
       nome: "Amanda", 
       apelidos: ["Amandinha", "Mandinha", "Mandi"]
    }

    // Exemplo de saída
    "Eu sou Amanda, mas pode me chamar de: Amandinha, Mandinha ou Mandi"
    
    b) Agora, usando **o operador spread**, crie um novo objeto mantendo o valor da propriedade nome, mas com uma nova lista de três apelidos. Depois, chame a função feita no item anterior passando como argumento o novo objeto
*/
    const pessoa = {
        nome: "Pedro",
        apelidos: ["Pe", "Pity", "Peter"]
    }
    console.log(`Eu sou ${pessoa.nome}, mas pode me chamar de: ${pessoa.apelidos}.`)
    
    const novoApelidos = {
    ...pessoa,
    apelidos: ['Pedroca', 'Pedrinho', 'Pedrão']
    }
    console.log(`Eu sou ${pessoa.nome}, mas pode me chamar de: ${novoApelidos.apelidos}.`)
// --- EXERCÍCIO 5 ------------------------------------------------------------------


// --- EXERCÍCIO 6 ------------------------------------------------------------------


