const log = console.log
function hello(nome = "Desonhecido") {
    log(`Hello, ${nome}`)
}

hello("Alex")

function soma(valores) {
    return valores.reduce((ac, num) => ac + num)
}

const res1 = soma([2, 3])
log(res1)

const res2 = soma(['ab', 'cd'])
log(res2)

const res3 = soma(['a', true])
log(res3)

const dobro = function (n) {
    return 2 * n
}
log(dobro(5))

const resultado = dobro(2)
log(resultado)

const quadrado = function (n = 1) {
    return n * n
}

log(`Quadrado sem parametro: ${quadrado()}`)
log(`3 ao quadrado: ${quadrado(3)}`)

const oi = () => log('Oi, Mundo!')
oi()

const triplo = (num) => {
    return log(`O triplo de ${num} é ${num * 3}`)
}
triplo(5)

const ePar = (num) => {
    const pares = ['0', '2', '4', '6', '8']
    if (pares.includes(String(num).at(-1))) {
        return 'é par'
    } else {
        return 'é impar'
    }
}
log(ePar(2.2))