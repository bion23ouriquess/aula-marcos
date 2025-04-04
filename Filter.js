// const vendas = [1780, 1895, 1900, 2100, 2765, 3910, 1599, 2400];

// const resultado = vendas.filter((venda) => {
//   return venda >= 1900;
// });

// console.log("vendas", vendas);
// console.log("resultado", resultado);

// // 3) Apresente uma mensagem com as medias dos alunos que foram aprovados e uma outra mensagem com os alunos que ficaram de recuperação. Nota minima para ser aprovado e 7.
// const medias = [
//   { nome: "Joao", nota: 7 },
//   { nome: "Marcos", nota: 5 },
//   { nome: "Maria", nota: 8 },
//   { nome: "Bruno", nota: 10 },
//   { nome: "Kleber", nota: 4 },
//   { nome: "Josue", nota: 6 },
//   { nome: "Julia", nota: 7 },
//   { nome: "Pilar", nota: 10 },
//   { nome: "Robert", nota: 2 },
//   { nome: "Glauber", nota: 6 },
// ];  

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


// const semParametros = () => {};

// const comUmParametro = (teste) => {}; // parenteses opcional

// const comDoisParametros = (numero1, numero2) => {}; //obrigatorio parenteses

// const comReturn = () => {
//     return 1==1;
// };

// const pacientesComAlta = (paciente) => (
//     console.log("teste")
//     return paciente.status === "alta"
// )


// console.log("resultado", pacientes.filter(pacientesComAlta));