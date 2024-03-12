let nums = [5, 8, 7, 9, 2]

nums.sort() // coloca em ordem

nums.push(1) // == append

console.log(nums)
console.log(`O array tem ${nums.length} elementos`)
console.log(`O primeiro elemento do array é ${nums[0]}`)

let posOito = nums.indexOf(8)
console.log(`O valor 8 se encontra na posição ${posOito}`)

let posTres = nums.indexOf(3) // Se não for encontrado = -1
if (posTres == -1) {
    console.log('O valor 3 não foi encontrado')
}