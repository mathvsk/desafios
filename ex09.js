/* 
let entrada = 6
let resultado = entrada
let aux = (resultado - 1)

console.log(`Calculando fatorial de ${entrada}`)

while (aux > 1){
  resultado *= aux
  aux -= 1
}

console.log(`O fatorial de ${entrada} é ${resultado}`) */

let entrada = 6
let resultado = 1
let aux = 1

console.log(`Calculando fatorial de ${entrada}`)

while (aux <= entrada){
  resultado *= aux
  aux += 1
}

console.log(`O fatorial de ${entrada} é ${resultado}`)