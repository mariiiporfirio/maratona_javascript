// 2. Escreva uma função que, dada uma lista de objetos "Aluno", retorna a lista de alunos que têm nota acima de 8.

// const filtraAlunosComNotaAlta = () => alunos.filter(aluno => alunos.nota > 8);

let alunos = [
    {nome: "Mariana", nota: 9},
    {nome: "Silvia", nota: 7},
    {nome: "Rosa", nota: 8.5},
    {nome: "Sergio", nota: 6},
];

function filtraAlunosComNotaAlta(alunos) {
    return alunos.filter(aluno => aluno.nota > 8);
};

let alunosComNotaAlta = filtraAlunosComNotaAlta(alunos);
console.log(alunosComNotaAlta);