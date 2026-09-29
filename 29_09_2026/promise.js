const log = console.log
function queDemora(num){
    return new Promise((resolve, reject) =>{
        let res = 0
        for (let i = 1; i <= num; i++){
            res += i
        }
        resolve(res)
    })
}
function queVaiRapido(num){
    return num > 0 
    ?Promise.resolve(num * (num + 1)/2)
    :Promise.reject("Parâmetros devem ser positivos")
}
queDemora(100).then((res) => {log(`Demorado: ${res}`)})
queVaiRapido(100)
.then((res) => {log(`Rapido: ${res}`)})
.catch((err) => {log(err)})

queVaiRapido(-1)
.then((res) => {log(`Rapido: ${res}`)})
.catch((err) => {log(err)})

// try{
//     log(await queVaiRapido(-100))
// }catch (err){
//     log(err)
// }

log("vou primeiro, sempre...")