let num = document.querySelector('input#txtn')
let lis = document.getElementById('lista')
let res = document.querySelector('div#res')
let valores = []

// função para verificar se o numero é de 1 a 100
function isNumber(n) {
    if (Number(n) >= 1 && Number(n) <=100 ) {
        return true
    } else{
        return false
    }
}
// função para verificar se o valor já esta na lista
function inLista(n,l){
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else{
        return false
    }
}
function add(){
    
    if (num.value.length == 0) {
        window.alert('O campo esta vazio')
    } else if (isNumber(num.value) && !inLista(num.value, valores)){
       //adiciona a minha lista de vetores 
       valores.push(Number(num.value))
       // criando elemento option
       let item = document.createElement('option')
       //atribuindo um texto
       item.text = `Valor ${num.value}  adicionado`
       //adiciona o valor na lista
       lis.appendChild(item)
       res.innerHTML = ''
    } else {
        window.alert('Valor inválido ou ja encontrado na lista')
    }
    num.value = ''
    num.focus()
}

function finalizar(){
    if (valores.length == 0) {
        window.alert('Adicione valores antes de finalizar!')
    } else {
        let total = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
        for( let cont in valores){
            soma += valores[cont]
            if (valores[cont]> maior)
                maior = valores[cont]
            if (valores[cont]< menor)
                menor = valores[cont]
        } 
        media = soma / total

        res.innerHTML = ''
        res.innerHTML += `<p>Temos ${total} números adicionados</p>`
        res.innerHTML += `<p>O valor maior é ${maior} dos números adicionados</p>`
        res.innerHTML += `<p>O valor menor é ${menor} dos números adicionados</p>`
        res.innerHTML += `<p>A soma dos valores é ${soma}</p>`
        res.innerHTML += `<p>A média dos valores é ${media}</p>`

    }
}


