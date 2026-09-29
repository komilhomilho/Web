const log = console.log

let pessoa = {
    nome: "João",
    idade: 17,
}

log(`Meu nome é: ${pessoa.nome}`)
log(`Tenho ${pessoa["idade"]} anos`)

let pessoaComEndereco = {
    nome: "Maria",
    idade: 20,
    endereco: {
        logradouro: "Avenida Nazare",
        numero: 500,
    },
}

log(`Meu nome é: ${pessoaComEndereco.nome}, tenho ${pessoaComEndereco.idade} anos
e moro na ${pessoaComEndereco.endereco["logradouro"]}, numero ${pessoaComEndereco["endereco"]["numero"]}\n`)

let concessionaria = {
    cnpj: "1121213130001-xx",
    endereco: {
        logradouro: "Rua Borges lagoa",
        numero: 123,
        bairro: "Vila Mariana",
    },
    lista_de_veiculos: [
        {
            marca: "Ford",
            modelo: "K",
            ano_fabricacao: 2015,
        },
        {
            marca: "Honda",
            modelo: "HRV",
            ano_fabricacao: 2018,
        },
        {
            marca: "BYD",
            modelo: "Dolphin",
            ano_fabricacao: 2025
        },
    ],
}

//interação sobre a lista
for (let veiculo of concessionaria.lista_de_veiculos) {
    log(`Marca: ${veiculo.marca} | Modelo: ${veiculo["modelo"]} | Ano de Fabricação: ${veiculo.ano_fabricacao}\n`)
}

let calculadora = {
    soma: function (a, b) {
        return a + b
    },
    subtracao: (a, b) =>{
        return a - b
    },

}
log(`Soma 2 + 3 = ${calculadora.soma(2,3)}`)
log(`Subtração 5 - 2 = ${calculadora["subtracao"](5,2)}`)