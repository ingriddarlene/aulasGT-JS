// //1 Leia o preço de um produto e a cor da sua etiqueta. De acordo com a cor da etiqueta aplique um desconto sobre o produto. Verde - 10% | Amarelo - 20% | Azul - 30 % | Vermelho 40%. Para a questão 1 resolva o problema de inserção de uma cor de etiqueta que não existe na loja. Garanta que o usuário só irá digitar Verde, Amarelo, Azul ou Vermelho. Enquanto o usuário não digitar um valor válido para etiqueta, informe que ele digitou um valor inválido e peça novamente a cor da etiqueta.

// let cor;
// let verifyEtiq = true;
// let desconto

// while(verifyEtiq) {
//   cor = prompt('Digite a cor da etiqueta: verde, amarelo, azul ou vermelho');
  
//   switch (cor) {
//     case 'verde':
//         desconto = 0.1
//         verifyEtiq = false;
//         break
//     case 'amarelo':
//         desconto = 0.2
//         verifyEtiq = false;
//         break
//     case 'azul':
//         desconto = 0.3
//         verifyEtiq = false;
//         break
//     case 'vermelho':
//         desconto = 0.4
//         verifyEtiq = false;
//         break

//     default:
//         alert("Opção de cor inválida!, digite novamente!");
// }
// }


// let valor = Number(prompt("Digite o valor do produto!"));



// let valorDescontado = valor * (1 - desconto)
// valorDescontado = valor - (valor * desconto)

// let resposta = alert(`O valor total é ${valor} e com desconto ficou ${valorDescontado}`)

//1. Crie um programa que peça ao usuário para digitar uma senha.
//2. Continue pedindo a senha até que o usuário digite "1234".
//  Use um laço do…while para controlar as tentativas e,
//3. quando a senha correta for inserida, exiba a mensagem "Acesso Permitido".


// let senha
// do {
//     senha = prompt('Digite sua senha')
// } while (senha !== '1234');

// alert('Acesso Permitido!');

//Você precisa criar um programa que ajude a calcular a média de notas de uma turma.
// 1. O programa deve pedir ao usuário a quantidade de alunos na turma e, em seguida,
// 2. solicitar a nota de cada aluno. Utilize um laço for para capturar as notas e acumular a soma.
// 3. Após inserir todas as notas, o programa deve calcular e exibir a média da turma.

// let alunos = parseInt(prompt('Digite a quantidade de alunos')) //7 
// let notas = 0


// for (let index = 1; index <= alunos; index++) {
//  notas += parseFloat(prompt('Digite a nota'))
// }

// const media = notas/alunos 

// alert(`A média dos alunos é ${media}`)

//Você é responsável por calcular o total das vendas do dia para uma pequena loja.
// 1. Escreva um programa que peça ao usuário o valor de cada venda, uma por vez. 
// Use um laço de repetição para capturar esses valores e adicione-os a um total acumulado. O programa deve continuar pedindo valores até que o usuário insira "0" (para finalizar). Ao final, exiba o total de vendas do dia.

let valorVenda = 0
let totalAcumulado = 0

do {
    valorVenda = parseFloat(prompt('Digite o valor da venda ou 0 para sair'))
    totalAcumulado += valorVenda
} while (valorVenda !== 0);

alert(`o total de vendas do dia é R$ ${totalAcumulado}`)