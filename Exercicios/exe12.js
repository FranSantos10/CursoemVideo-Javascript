/**
 *  Faça um algoritmo que calcule o fatorial de um número.
 */

let num =4
let fat =1

function fatorial() {
    if( num === 0 || num === 1){
        return num = 1
    } else{
        for( cont = num; cont > 1; cont -- ){
            console.log(`${cont} x ${fat}`)
            fat = fat * cont
            console.log(fat)
        }
       return fat
    }
   
}
console.log(`Fatorial de ${num} é `+fatorial())