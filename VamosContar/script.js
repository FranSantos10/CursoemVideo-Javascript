
function contar(){

    let ini = document.getElementById('txtini')
    let fim = document.getElementById('txtfim')
    let passo = document.getElementById('txtpasso')
    let res = document.getElementById('res')

    if (ini.value.length == 0 || fim.value.length == 0  || passo.value.length == 0 ) {
        window.alert('Erro!!! Faltam dados!!!')
    } else {
        res.innerHTML = 'Contando: '
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)

       for (let c = i; c <= f ; c+=p){
            res.innerHTML += ` ${c}  \u{1F449}`
        
        }
        res.innerHTML += ` \u{1f3c1}`
    }
}