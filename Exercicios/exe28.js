/**28) ​Ler um vetor de números inteiros e imprimir quantos são pares e quantos são ímpares.  */

let numeros = [10,20,11,13,22,17] 

function ContarParImpar(numeros){
    let par =0
    let impar= 0
    for(let cont = 0 ; cont < numeros.length; cont++){
        if (numeros[cont]%2 ===0){
            par ++
        }else{
            impar++
        }
        
    }
    console.log(`par ${par} impar ${impar}`)
}

ContarParImpar(numeros)
