/* CONDICIONAIS
-------------------

1. Escreva um programa que peça ao usuário um número e informe se ele 
está entre 1 e 100. */

let usuario_numero = prompt('Digite um número:');

switch (true) {
    case (usuario_numero >= 0 && usuario_numero <= 100):
        console.log(`O número ${usuario_numero}, é um número entre 0 e 100.`);
        break;

    default:
        console.log(`O número ${usuario_numero}, não é um número entre 0 e 100.`);
        break;
}       
console.log("___________________________________________________");

/* 2. Implemente uma função que recebe a idade de uma pessoa e retorna uma 
mensagem informando se ela é criança, adolescente ou adulta. */

let idade = prompt('Digite a sua idade:');

switch (true) {
    case (idade > 0 && idade <= 11):
        console.log(`Pessoas com ${idade} anos de idade, são consideradas crianças segundo o ECA (Estatuto da Criança e do Adolescente).`);
        break;
        
    case (idade >= 12 && idade <= 17):
        console.log(`Pessoas com ${idade} anos de idade, são consideradas adolescentes segundo o ECA (Estatuto da Criança e do Adolescente).`);
        break;
        
    case (idade >= 18):
        console.log(`Pessoas com ${idade} anos de idade, são consideradas adultos segundo a lei brasileira.`);
        break;

    default:
        console.log('Está não é uma idade válida.');
        break;
} 
console.log("___________________________________________________");


/* 3. Crie um programa que solicite um mês (de 1 a 12) e informe quantos dias 
esse mês possui. */

let mes = prompt('Informe um mês usando número de 1 até 12:');

 switch (mes) {
    case '1': case '3': case '5': case '7': case '8': case '10': case '12':
        console.log(`O mês ${mes} possui 31 dias.`);
        break;
        
    case '2':
        console.log(`O mês ${mes} possui 28 dias, mas 29 dias em anos bissextos.`);
        break;

    case '4': case '6': case '9': case '11':
        console.log(`O mês ${mes} possui 30 dias.`);
        break;

    default:
        console.log(`O mês ${mes} não existe.`)
        break;
}      
console.log("___________________________________________________");


/* 4. Escreva um programa que peça ao usuário um número e verifique se ele é 
positivo, negativo ou zero. */

let usuario_numero2 = prompt('Digite um número:');
let numero_tipo = Math.sign(usuario_numero2);

switch (true) {
    case (numero_tipo == 0):
        console.log(`O número ${usuario_numero2} não possui valor.`);
        break;

    case (numero_tipo == -1):
        console.log(`O número ${usuario_numero2} é um número negativo.`);
        break;
        
    default:
        console.log(`O número ${usuario_numero2} é um número positivo.`);
        break;
}       
console.log("___________________________________________________");


/* Variáveis e Operações Matemáticas */
// -----------------------------------------

/* 1. Crie um programa que peça ao usuário um valor em graus Celsiuse converta para Fahrenheit. */

let temperatura = prompt('Informe a temperatura em Graus Celsius:');

var resultado = (temperatura * 9 / 5) + 32
console.log(`A temperatura de ${temperatura}°C Graus Celsius é correspondente a ${resultado}°F Graus Fahrenheit.`);
console.log("___________________________________________________");

/* 2. Solicite ao usuário a base e a altura de um triângulo e calcule sua área. */

let base_tri = prompt("Digite a base do triângulo:");
let altura_tri = prompt("Digite a altura do triângulo:");
let area_triangulo = (base_tri * altura_tri) / 2

console.log(`A área do triângulo é ${area_triangulo} !`);
console.log("___________________________________________________");
        
/* 3. Peça ao usuário um número e exiba o seu quadrado e seu cubo.*/

let usuario_numero3 = prompt('Digite um número:');
let numero_quadrado = Math.pow(usuario_numero3,2);
let numero_cubo = Math.pow(usuario_numero3,3);
console.log(`O número ${usuario_numero3} elevado ao quadrado é igual a ${numero_quadrado}, e elevado ao cubo é igual a ${numero_cubo}.`);
console.log("___________________________________________________");

/* 4. Solicite dois números ao usuário e exiba a potência do primeiro número elevado ao segundo.*/        

let usuario_numero4 = prompt('Digite o primeiro número:');
let usuario_numero5 =prompt('Digite o segundo número:');
let numero_potencia = Math.pow(usuario_numero4, usuario_numero5);
console.log(`O potencia de ${usuario_numero4} elevado a ${usuario_numero5} é ${numero_potencia}.`)
console.log("___________________________________________________");


// FUNÇÕES
// --------------

// 1. Crie uma função que aceita dois números e retorna o resultado da divisão do primeiro pelo segundo. Lide com divisões por zero.

let x = parseInt(prompt('Digite um número:'));
let y = parseInt(prompt('Digite um número:'));

const resultado_divisao = () => x / y;

switch (true) {
    case (y == 0):
        console.log(`Não é possível dívidir o número ${x} por zero.`);
        break;

    default:
        console.log(`O número ${x} dividido pelo número ${y} é igual a ${resultado_divisao()}.`);
        break;
}
console.log("___________________________________________________");

// 2. Escreva uma função que recebe uma lista de strings e retorna a lista ordenada em ordem alfabética.

let usuario_strings = prompt('Digite palavras separadas por vírgula:');
let oredem_alfa = usuario_strings.split(',').map(usuario_strings => usuario_strings.trim()).sort();
console.log(oredem_alfa);
// Não foi usada uma funçao
console.log("___________________________________________________")

// 3. Escreva uma função que aceita um array de inteiros e retorna o maior número presente.

let usuario_numeros = prompt('Digite números separados por vírgula:');
let numeros_split = usuario_numeros.split(',').map(usuario_numeros => parseInt(usuario_numeros.trim()));
let maior_numero = Math.max(...numeros_split);
console.log(`O maior número da lista ${numeros_split} é o ${maior_numero}.`);
// Não foi usada uma funçao
console.log("___________________________________________________")

// 4. Implemente uma função que recebe uma string e retorna a mesma string invertida.

let palavra = prompt('Digite uma palavra:');
let palavra_invertida = () => palavra.split('').reverse('').join('');
console.log(`A palavra ${palavra} quando invertida fica da seguinte forma: ${palavra_invertida()}.`);
console.log("___________________________________________________");


// LAÇOS
// -----------

// 1. Escreva um programa que imprima todos os números ímpares de 1 a 100.

for (z = 1; z <= 100; z = z + 2) {
    console.log(`${z} é um número ímpar.`);
}
console.log("___________________________________________________");

// 2. Escreva um programa que imprima todos os números de 1 a 50 e indique quais são múltiplos de 5.

for (let a = 1; a <= 50; a++) {
    switch (true) {
        case (a % 5 == 0):
            console.log(`${a} é múltiplo de 5.`);
            break;
    
        default:
            console.log(a);
            break;
    }
}

// 3. Faça um programa que peça um número ao usuário e calcule a soma de todos os números de 1 até esse número.


// Manipulação de Objetos
// ----------------------------

// 1. Crie um array de objetos "Produto" e escreva uma função que calcule o valor total em estoque.
const produto = [
    {item:'A', quantidade:7},
    {item:'B', quantidade:2},
    {item:'C', quantidade:8},
    {item:'D', quantidade:5}
];

const estoque = produto.map((produto) => produto.quantidade);
console.log(estoque[0] + estoque[1] + estoque[2] + estoque[3]);

console.log(produto.reduce((p, {quantidade}) => p + quantidade, 0)); // a letra p á apenas uma representação e pode ser alterada por qualquer outro valor

// 2. Implemente um método em um objeto "Estudante" que retorna se o estudante está aprovado ou reprovado, com base em suas notas.

const estudantes = [
    {aluno:'Mariana', nota: 8.5},
    {aluno:'Rosa', nota: 6},
    {aluno:'Paulo', nota: 3.5},
    {aluno:'Pedro', nota: 0},
    {aluno:'Carla', nota: -1}
]

const aprovados = (estudantes) => {
    estudantes.forEach(estudante => {
        switch (true) {
            case estudante.nota >= 5 && estudante.nota <= 10:
                console.log(`${estudante.aluno} está aprovada !`);
                break;

            case estudante.nota < 5 && estudante.nota >= 0:
                console.log(`${estudante.aluno} está reprovado !`);
                break;
        
            default:
                console.log('Nota Inválida !');
                break;
        }
    });
}
aprovados(estudantes);

// 3. Crie uma função que, dada uma lista de objetos "Funcionario", calcule a soma dos salários.


// 4. Crie uma lista de objetos "Estudante" e escreva uma função que retorna os estudantes que estão acima da média de notas.



// Funções com Objetos
// ------------------------

// 1. Crie uma função que recebe um array de objetos "Produto" e calcula a média de preços.


// 2. Escreva uma função que, dada uma lista de objetos "Aluno", retorna a lista de alunos que têm nota acima de 8.


// 3. Implemente uma função que aceita um array de objetos "Funcionario" e retorna o funcionário com o maior salário.

const funcionario = [
    {nome:'Mariana', salario: 1500},
    {nome:'Alice', salario: 5000},
    {nome:'João', salario: 1000},
    {nome:'Maria', salario: 10000}
];

const math_maior = Math.max(...funcionario.map(f => f.salario));

const maior_salario = () => {
    return funcionario.filter (f => f.salario )
}

// 4. Escreva uma função que, dada uma lista de objetos "Pessoa", retorne as pessoas que têm mais de 30 anos.

const pessoa = [
    {nome:'Mariana', idade: 29},
    {nome:'Alice', idade: 30},
    {nome:'João', idade: 25},
    {nome:'Maria', idade: 35}
];

const mais_velha = (pessoa) => {
    return pessoa.filter(p => p.idade > 30);
}

console.log(mais_velha(pessoa));
