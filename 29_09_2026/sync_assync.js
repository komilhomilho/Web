const log = console.log

// log("um")
// log("dois")
// log("tres")

// const a = 5+6
// const b = 34
// log(`a + b = ${a+b}`)

function queDemora(tempo){
    log(`demorando ${tempo}`)
    const atual_mais_dois = new Date().getTime() + tempo
    while (new Date().getTime() <= atual_mais_dois);
    const d = 8 + 4
    return d
}

// const a = 1 + 2
// const b = 5 * 2
// // const d = queDemora() //modelo sincrono = bloquante
// setTimeout(() => {
//     const d = queDemora()
//     log(`d = ${d}`)
// }, 0);

// const c = 10 + a + b
// log(`c = ${c}`)

setTimeout(() => {queDemora(2000)}, 2000);
setTimeout(() => {queDemora(1000)}, 1000);
log("Corpo Principal")

