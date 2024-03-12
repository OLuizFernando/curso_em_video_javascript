function fatorial(num) { // a função chama ela mesma dentro dela
    if (num == 1) {
        return 1
    } else {
        return num * fatorial(num - 1)
    }
}

console.log(fatorial(5))