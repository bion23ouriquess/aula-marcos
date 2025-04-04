const notas = [0, 5, 8, 6, 9];

const resultado = notas.map(element => {
    console.log("Element:", element)
    let extenso;
    switch (element) {
        case 0:
            extenso = "Zero"
            break;
        case 1:
            extenso = "Um"
            break;
        case 2:
            extenso = "Dois"
            break;
        case 3:
            extenso = "Tres"
            break;
        case 4:
            extenso = "Quatro"
            break;
        case 5:
            extenso = "Cinco"
            break;
        default:
            extenso = "Não mapeado"
            break;

    }
    return {
        "numero": element,
        "extenso": extenso
    }
})
console.log("Resultado:", resultado);

// notas.map(element => {

// })
// notas.reduce(element => {

// })
// notas.filter(element => {

// })

//atividade
//1) Crie uma função que retorna uma comissão  do valor das vendas do seguinte arrray [10000, 5000, 8000, 6000, 9000], sabendo qe a oomissão se da em 10% do valor. Apresente o resultado em um console.log dentro da estrutura.

function fechamentoComissao(vendas) {

    vendas.forEach(element => {
        const comissao = element * 0.10;

        console.log(`O valor da venda é: ${element} e a Comissão: ${comissao} `);

    });
}
const vendas = [10000, 5000, 8000, 6000, 9000];
fechamentoComissao(vendas);


//
//2) Crie uma função que retorna um objeto com a posicao dos corredores de acordo com a ordem de entrada do array deve adcionar a posicao , a medalha (oura, prata, bronze, sem medalhas) e o nome do corredor do obj esses sao os corredores ["jose", "marcos", "maria", "bruno", "Heitor", "joaquina"]

function resultadoCorrida(nomesCorredores) {

    return nomesCorredores.map((nomeCorredor, index) => {
        let medalha;

        switch (index) {
            case 0:
                medalha = "Ouro"
                break;
            case 1:
                medalha = "Prata"
                break;
            case 2:
                medalha = "Bronze"
                break;

            default:
                medalha = "Fora do pódio"
                break;
        }
        return {
            posicao: index + 1,
            nome: nomeCorredor,
            medalha: medalha,
        }
    })


}

const nomesCorredores = ["jose", "marcos", "maria", "bruno", "Heitor", "joaquina"]
console.log(resultadoCorrida(nomesCorredores))


// CODIGO MAIS HIGIENICO, MAIS FACIL DE ARRUMAR BUGS


const nomeCorredores = ["jose", "marcos", "maria", "bruno", "Heitor", "joaquina"];

const corredores = nomeCorredores.map((nomeCorredor, index) => {
    return entregaMedalha(nomeCorredor, index + 1)
});

console.log("Final de corrida", corredores);


function entregaMedalha(nomeCorredor, posicao) {

    switch (posicao) {
        case 1:
            medalha = "Ouro"
            break;
        case 2:
            medalha = "Prata"
            break;
        case 3:
            medalha = "Bronze"
            break;

        default:
            medalha = "Não ganha medalha."
            break;
    }

    return{
        "nome": nomeCorredor,
        "posicao": posicao,
        "medalha": medalha
    }

}