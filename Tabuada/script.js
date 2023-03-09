function gerarTabuada(){
    let num = document.getElementById('txtn')
    let tab = document.getElementById('seltab')
    
    //verifica se o campo esta vazio
    if (num.value.length == 0){
        window.alert('Por favor, digite um numero')
    } else {
        //converte em numero o valor informado
        let n = Number(num.value)
       // let c = 1 // contador
        tab.innerHTML = ''
       /* while (c <=10 ) {
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            tab.appendChild(item)
            c++
        }*/
        
        for(let c=1; c <= 10; c++){
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            tab.appendChild(item)
        }
    }
    
}