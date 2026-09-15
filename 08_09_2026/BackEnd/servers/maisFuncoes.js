const log = console.log

let umaFuncao = function (){
    log("Função armazenada em uma variavel")
}

umaFuncao()

function f1 (qualquerCoisa){
    if(typeof qualquerCoisa != 'function'){
        return log(`Erro isso é um ${typeof qualquerCoisa} não uma function`)
    }
    qualquerCoisa()
}

f1(umaFuncao)

function f2(){
    function f3(){
        log("Fui definida dentro da f3")
    }
    return f3()
}

const resF2 = f2()

// f1(f2())
// //f1(f2()())
// f1(3)

function f5(){
    let nome = "Zioles"
    function f6(){
        log(nome)
    }
    f6()
}
f5()


function g1(){
    let nome = "Mucilone"
    return function(){
        log(`Ola, ${nome}`)
    } 
}

const resg1 = g1()
resg1()