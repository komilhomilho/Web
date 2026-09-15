const log = console.log
let v1 = []
const nomes = ['Ana maria', 'Antonio','Bia','alex','Caio']
v1[0] = 2.5
v1[1] = 'a'
v1[8] = 7

log(v1.length)

//========================================================================================================
const apenasComA = nomes.filter((nome) => nome.toLowerCase().startsWith('a'))
log(apenasComA)

//========================================================================================================
const iniciais = nomes.map((nome) => {
   return nome.charAt(0)
})
log(iniciais)

//========================================================================================================
const todosComA = nomes.every((nome) => nome.startsWith('A'))
const formatar = nomes.map((nome) => nome.split(' ').join('-'))
log(formatar)
log(todosComA)

//========================================================================================================
const numeros = [10,20,30,40]
const soma = numeros.reduce((ac, num) => ac + num)
log(`soma = ${soma}`)