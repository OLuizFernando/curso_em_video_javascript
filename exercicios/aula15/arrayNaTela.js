let valores = [4, 6, 1, 8, 9]

console.log(valores) // sem formatação: [ n1, n2, n3, ... ]
console.log(`${valores}`) // com formatação n1,n2,n3,...

for (let pos = 0; pos < valores.length; pos++) { // for antigo
    console.log(`A posição ${pos} tem valor ${valores[pos]}`)
}

for (let pos in valores) { // for ES15
    console.log(`A posição ${pos} tem valor ${valores[pos]}`)
}