const usuario = {
    nome: 'Diego',
    empresa: {
        nome: "Rockseat",
        cor: "roxo",
        foco: "programaçao",
        endereco: {
            rua: "Rua guilherme Gembala",
            numero: 260
        }


     }
}

console.log(`A empresa ${usuario.empresa.nome} no endereço ${usuario.empresa.endereco.rua}, ${usuario.empresa.endereco.numero}, ${usuario.empresa.cor}, ${usuario.empresa.foco}`)