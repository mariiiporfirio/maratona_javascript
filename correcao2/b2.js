// 2. Escreva uma função que, dada uma lista de objetos "Aluno", retorna a lista de alunos que têm nota acima de 8.

const alunos = [
    {nome: "Mariana", nota: 9},
    {nome: "Silvia", nota: 7},
    {nome: "Rosa", nota: 8.5},
    {nome: "Sergio", nota: 6},
    {nome: "Lucas", nota: 6.5},
    {nome: "Lais", nota:10}
];

// const filtrarAlunos = () => alunos.filter (aluno => aluno.nota > 8);

function filtrarAlunos() {
    return alunos.filter(aluno => aluno.nota > 8);
}

function mostrarAlunos() {
    const alunosFiltrados = filtrarAlunos();
    const listaAlunos = document.getElementById('listaAlunos');
    listaAlunos.innerHTML = '';
    if (alunosFiltrados.length === 0) {
        listaAlunos.innerHTML = '<li>Nenhum aluno encontrado com nota acima de 8.</li>';
    } else {
        alunosFiltrados.forEach(aluno => {
            const li = document.createElement('li');
            li.textContent = `${aluno.nome}: ${aluno.nota}`;
            listaAlunos.appendChild(li);
        });
    }
}