/**26)​ Fazer um programa para encontrar todos os pares entre 1 e 100 */

let cont = 1
console.log('Os número pares de 1 a 100 são: ')

while (cont <= 100){
    let div = cont % 2
    if (div == 0){
        console.log(cont)
    }
    cont++
}