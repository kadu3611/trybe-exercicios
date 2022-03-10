/* 1 - Crie uma função que retorne um objeto no formato { nomeCompleto, email } representando uma nova pessoa contratada. Passe sua função como parâmetro da HOF newEmployees para criar cada pessoa contratada em seu respectivo id . A sua função deve receber como parâmetro o nome completo da pessoa funcionária e a partir dele gerar automaticamente um email no formato nome_da_pessoa@trybe.com .
Copiar

}; */
/* 
    1 -Criar uma função que retorne um objeto no formato { nomeCompleto, email }
    2- A Função acima será como parametro da HOF newEmployees para criar a pessoa contratada nos id's
    3 - função deve receber como parâmetro o nome completo da pessoa funcionária e a partir dele gerar automaticamente um email no formato nome_da_pessoa@trybe.com*/
    function formato (fullName){
        return {
            fullName, email: `${fullName.replace(/ /, '_').toLowerCase()}@email.com`
        }
    }
    const newEmployees = (minhaFuncao) => {
        const employees = {
          id1: minhaFuncao('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
          id2: minhaFuncao('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
          id3: minhaFuncao('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
        }
        return employees;
    }
    console.log(newEmployees(formato))

    /*2 - Desenvolva uma HOF que retorna o resultado de um sorteio. Esta HOF irá gerar um número aleatório entre 1 e 5 recebendo como parâmetros o número apostado e uma função que checa se o número apostado é igual ao número sorteado. O retorno da sua HOF deve ser uma string (Ex: "Tente novamente" ou "Parabéns você ganhou").*/
    /* função que checa se o número apostado é igual ao número sorteado*/

    function sorteado(jogo, resultado) {
        console.log(jogo, resultado)
    return jogo === resultado;
    }    
    function ale (numero, callback){
    let nu = Math.floor(Math.random() * (5 -1)) +1;
    return (callback(numero, nu) === true) ? "Parabéns você ganhou!" : "Tente novamente"
    }
    console.log(ale(2, sorteado));


    /* 3 - Crie uma HOF que receberá três parâmetros. O primeiro será um array de respostas corretas (Gabarito), o segundo será um array de respostas a serem verificadas (respostas da pessoa estudante) e o terceiro é uma função que checa se as respostas estão corretas e faz a contagem da pontuação final recebida pela pessoa estudante. Ao final a HOF deve retornar o total da contagem de respostas certas.
    Quando a resposta for correta a contagem sobe 1 ponto, quando for incorreta desce 0.5 pontos, e quando não houver resposta ("N.A") não altera-se a contagem.
    Copiar
    const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
    const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B']; */