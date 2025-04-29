//Crie um programa que solicite o valor total de uma compra. Se o valor for maior que R$100, aplique um desconto de 10%. Exiba o valor final da compra com ou sem desconto.

// const valorTotal = Number(prompt('Digite o valor total da compra'))

// if (valorTotal > 100) {
//     // valorTotal - (valorTotal * 0.1)
//     const valorDesconto = valorTotal * 0.9
//     // alert('O valor total com desconto é ' + valorDesconto)
//     alert(`O valor total com desconto é R$ ${valorDesconto}`)

// } else {
//     const valorFalta = 100 - valorTotal 
//     alert(`Falta R$ ${valorFalta} para receber o seu desconto`)
// }

//Crie um programa para verificar se a pessoa tem mais de 18 anos e possui habilitação, caso contrário, não poderá dirigir.

// const idade = Number(prompt('Digite sua idade'))
// const possuiHabilitacao = Number(prompt('Possui habilitação? coloque 1 para sim ou 2 para não.')) 

// if (idade >= 18 && possuiHabilitacao === 1) {
//     alert('Pode dirigir')
// } else {
//     alert('Não pode dirigir')
// }

//Desenvolva um programa em JavaScript que receba 3 notas de um aluno (nota 1 e nota 2 e nota 3). O programa deverá calcular a média dessas três notas. Com base na média, o programa deve exibir uma mensagem informando se o aluno foi "Aprovado" (média maior ou igual a 7) ou "Reprovado" (média menor que 7).

// **Requisitos:**

// 1. O programa deve solicitar ao usuário que insira as três notas do aluno.
// 2. As notas inseridas devem ser armazenadas em variáveis.
let nota1 = Number(prompt('Digite a primeira nota'))
let nota2 = Number(prompt('Digite a segunda nota'))
let nota3 = Number(prompt('Digite a terceira nota'))
// 3. O programa deve calcular a média das três notas.
let media = (nota1 + nota2 + nota3) / 3
// 4. Utilize uma estrutura condicional para verificar se a média é maior ou igual a 7.
// 5. Se a média for maior ou igual a 7, exiba a mensagem: "Aprovado".
// 6. Caso contrário (média menor que 7), exiba a mensagem: "Reprovado".
// 7. O programa deve exibir a média calculada junto com a mensagem de aprovação ou reprovação.

if (media >= 7 && media <= 10) {
    alert('Aprovado')
} else if ( media < 7 && media >=4 ){
    alert('Recuperação')
} else if (media < 4){
    alert('Reprovado')
} else {
    alert('Digite um número válido')
}

//Utilize uma estrutura de condição para receber um número de 1 a 7 e exibir o dia da semana correspondente (1 para Domingo, 2 para Segunda, etc.). Inclua um caso default para números inválidos.

let dia = Number(prompt('Digite um número de 1 a 7'))

switch (dia) {
    case 1: 
        alert('Domingou')
        break
    case 2:
        alert('Segundou')
        break
    case 3:
        alert('Terçou')
        break
    case 4:
        alert('Quartou')
        break
    case 5:
        alert('Quintou')
        break
    case 6:
        alert('Sextou')
        break
    case 7:
        alert('Sabadou')
        break
    default:
        alert('Digite um número válido')
}

// Um jogo classifica os jogadores com base em um número de 1 a 4. Faça uma construção de condição que exiba a classificação:

// - 1: "Iniciante"
// - 2: "Intermediário"
// - 3: "Avançado"
// - 4: "Mestre"
// - Qualquer outro número: "Nível inválido"


let nivel = Number(prompt('Descubra seu nível. Digite um número de 1 a 4'))

if (nivel === 1) {
    alert('Iniciante')
} else if (nivel === 2) {
    alert('Intermediário')
} else if (nivel === 3) {
    alert('Avançado')
} else if (nivel === 4) {
    alert('Mestre')
} else {
    alert('Nivel inválido')
}

//Crie um programa que receba o nome de uma bebida ("suco", "refrigerante", "água", "café") e exiba uma mensagem diferente para cada uma. Se a bebida não estiver no cardápio, mostre "Opção indisponível".

let bebida = prompt('Escolha sua bebida: opções (suco, refrigerante, água ou café)')

switch (bebida) {
    case 'suco':
        alert('parabéns você escolheu um suco')
        break
    case 'refrigerante':
        alert('parabéns você escolheu um refri')
        break
    case 'água':
        alert('parabéns você escolheu uma água')
        break
    case 'café':
        alert('parabéns você escolheu uma café')
        break
    default:
        alert('Opção indisponível')
}

