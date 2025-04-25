// const numero = Number(prompt('Digite um número'))

// if (numero % 2 === 0) {
//     alert('É par')
// } else {
//     alert('É ímpar')
// }

// numero % 2 === 0 ? alert('É par') : alert('É ímpar')

// Bom-dia

// const turno = prompt('Digite manhã, tarde ou noite').toLowerCase()

// if (turno === 'manhã') {
//     alert('Bom dia!')
// } else if (turno === 'tarde') {
//     alert('Boa tarde!')
// } else {
//     alert('Boa noite!')
// }

const opcao = prompt('Digite 1 para ver perfil, 2 para editar e 3 para sair')


switch (opcao) {
    case'1':
        alert('Você escolheu ver perfil') //bloco de construção
        break
    case'2':
        alert('Você escolheu editar perfil') //bloco de construção
        break
    case'3':
        alert('Você escolheu sair') //bloco de construção
        break
    default:
        alert('Escolha uma opção válida')
    
}