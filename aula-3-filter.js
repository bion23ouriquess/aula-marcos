const vendas = [1780, 1895, 1900, 2100, 2765, 3910, 1599, 2400]


//FILTER

// const resultado = vendas.filter(venda => {
//     return venda >= 1900
// })

// console.log("Vendas", vendas);
// console.log("Resultado", resultado);


// //MAP

// const resultadoMap = vendas.map(venda => {
//     if(venda >= 1900){
//         return venda
//     };
// })

// console.log("ResultadoMap", resultadoMap);

//3- Apresente uma mensagem com as medias dos alunos que foram aprovados e uma outra mensagem com os alunos que ficaram em recuperação. Nota mínima para ser aprovado é 7.

const medias = [
    { nome: "João", nota: 7 },
    { nome: "Marcos", nota: 5 },
    { nome: "Maria", nota: 8 },
    { nome: "Bruno", nota: 10 },
    { nome: "Kleber", nota: 4 },
    { nome: "Josue", nota: 6 },
    { nome: "Julia", nota: 7 },
    { nome: "Pilar", nota: 10 },
    { nome: "Robert", nota: 2 },
    { nome: "Glauber", nota: 6 },
];

// const resultadoMedia = medias.filter(media => {
//     if(media.nota >= 7){
//         console.log("Nome: ", media.nome, " Nota: ", media.nota);

//     }else{
//         console.log("RECUPERÇÃO - Nome: ", media.nome, "Nota: ", media.nota);

//     }
   
// });

// console.log(resultadoMedia);


const aprovados = medias.filter(media => media.nota >= 7)
const recuperacao = medias.filter(media => media.nota < 7)

console.log("Aprovados: ");
aprovados.forEach(media => console.log(`${media.nome}, ${media.nota}`));

console.log("\nEm recuperação: ");
recuperacao.forEach(media => console.log(`${media.nome}, ${media.nota}`));



// // 4) Crie uma função que recebe um array e retorne a lista dos pacientes que tenha o status = internado, e para cada um que esta internado, verifique se há o tipo sanguineo em estoque para transfusão e apresente uma mensagem positiva ou negativa.

const pacientes = [
    { nome: "Carlos", tipoSanguineo: "AB", status: "internado" },
    { nome: "Carlota", tipoSanguineo: "A", status: "internado" },
    { nome: "Carlinhos", tipoSanguineo: "B", status: "alta" },
    { nome: "Carlinha", tipoSanguineo: "O", status: "internado" },
    { nome: "Carlao", tipoSanguineo: "B", status: "internado" },
    { nome: "carlzone", tipoSanguineo: "A", status: "internado" },
    { nome: "Carllo", tipoSanguineo: "O", status: "observação" },
    { nome: "Carrilho", tipoSanguineo: "O", status: "internado" },
    { nome: "Carrito", tipoSanguineo: "A", status: "internado" },
    { nome: "Carl", tipoSanguineo: "AB", status: "alta" },
    { nome: "Cars", tipoSanguineo: "AB", status: "observação" },
]
const estoque = { A: 2, B: 1, AB: 0, O: 6 };


function pacientesInternados(pacientes, estoque) {
    const internado = pacientes.filter(paciente => {
        return paciente.status === "internado"
        
    });
    console.log("Internados: ", internado);

    internado.filter(paciente => {
        if(estoque[paciente.tipoSanguineo] > 0){
            console.log(`Paciente: ${paciente.nome}, tipagem ${paciente.tipoSanguineo} disponivel.`);
            estoque[paciente.tipoSanguineo]--
        }else{
            console.log(`Paciente: ${paciente.nome}, tipagem ${paciente.tipoSanguineo} Indisponivel.`);
            
        }
    })
        
}

pacientesInternados(pacientes, estoque);