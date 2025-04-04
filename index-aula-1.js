// variaveis

// let var const

const pessoa = {
    nome: "Marcos",
    sobrenome: "Bruno",
    altura: 1.81,
    peso: 105
}

console.log("antes", pessoa);
pessoa.ultimoNome = "Silva";

console.log("depois", pessoa);


// ------------------------------------
// Condicionais

// if - else / switch - case

if (true) {
    console.log("True");
}

if (1 === 1) {
    console.log("True");
} else {
    console.log("False")
}

const mes = "Janeiro"
switch (mes) {
    case "Janeiro":
        console.log("Janeiro");
    case "Fevereiro":
        console.log("Fevereiro");
        break;
    case "Março":
        console.log("Março");
        break;
    default:
        console.log("Nao encontrado!");
        break;
}

// -----------------------------------
// Atividades
// 1) Crie uma funcao para receber um numero e retornar 
// se e positivo, negativo ou zero.
// 2) Crie uma funcao para que escreva os dias da semana 
// a partir do numeral (1 a 7) recebido por parametro.
// 3) Crie uma funcao para realizar a tabuada de um determinado 
// numero que recebe por parametro
// 4) Crie uma funcao para receber um numero e apresentar 
// a contagem regressiva do mesmo.
// 5) Crie uma funcao que realiza a contagem de vogais 
// de uma frase recebida por parametro.
// 6) Crie uma funcao de medias escolares ao qual ira receber 
// um array por parametro onde contera todas as medias dos alunos
// e devera retornar se o aluno esta 
// aprovado (>=7), reprovado (<5) ou de recuperacao (<7 >=5)


function retornarTipo(numero) {
    if (numero === 0) {
        return "Zero";
    }

    if (numero > 0) {
        return "Positivo";
    } else {
        return "Negativo";
    }
}

console.log(retornarTipo("a"));


function diasSemana(diaNumero) {
    switch (diaNumero) {
        case 1:
            console.log("Domingo");
            break;
        case 2:
            console.log("Segunda");
            break;
        case 3:
            console.log("Terca");
            break;
        case 4:
            console.log("Quarta");
            break;
        case 5:
            console.log("Quinta");
            break;
        case 6:
            console.log("Sexta");
            break;
        case 7:
            console.log("Sabado");
            break;
        default:
            console.log("Desconhecido");
            break;
    }
}

diasSemana(5)

function tabuada(numero) {
    for (let index = 0; index <= 10; index++) {        
        const resultado = numero * index
        console.log(`${numero} x ${index} = ${resultado}`)        
    }
}

tabuada(5)

function contagemRegressiva(numero) { 
    for (i = numero; i >= 0; i--) {
        console.log(`Tempo ${i}`);
    }

}

contagemRegressiva(30)

function contaVogais(texto) {
    let contador = 0;
    let vogais = ["a", "e", "i", "o", "u"];

    for (let i = 0; i < texto.length; i++) {
        const temVogal = vogais.includes(texto[i]);
        if (temVogal) {
            contador++;
        }
    }
    console.log(contador);
}

const texto = "Eu sou o milior, posso não ser";
contaVogais(texto);


function conselhoClasse(medias) {
    function calculaSituacao(media) {
        if (media >= 7) {
            return "Aprovado";
        }

        if (media < 5) {
            return "Reprovado";
        }

        return "Recuperacao";
    }
    
    for (let index = 0; index < medias.length; index++) {
        const media = medias[index];

        situacao = calculaSituacao(media);
        
        console.log(`${media} está ${situacao}`)
    }
}

const medias = [8, 4, 5, 7, 10];
conselhoClasse(medias)
