let amigo = {
    nome: 'José',
    sexo: 'M',
    peso: 85.4,
    engordar(p=0) {
        this.peso += p
    }
}

console.log(amigo)

amigo.engordar(10)
console.log(`${amigo.nome} pesa ${amigo.peso}Kg`)