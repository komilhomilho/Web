const log = console.log

function contador(){
    let cont = 1
    function f1(){
        log(cont)
    }
    cont++
    function f2(){
        log(cont)
    }
    return {f1, f2}//json contendo as duas funções
}

let result = contador()
result.f1()
result.f2()


