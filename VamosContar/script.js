
function contar(){

    let ini = document.getElementById('txtini')
    let fim = document.getElementById('txtfim')
    let passo = document.getElementById('txtpasso')
    let res = document.getElementById('res')
    //validação se os campos estão vazios
    if (ini.value.length == 0 || fim.value.length == 0  || passo.value.length == 0 ) {
        window.alert('Erro!!! Faltam dados!!!')
    } else {
        res.innerHTML = 'Contando: <br>'
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if(p<=0){
            window.alert('Passo inválido! O valor do passo deve ser no míinimo 1')
            p = 1
            res.innerHTML = 'Impossivel contar!'
        }   
        //condição de o valor do inicio for menor que o fimm
        else if (i < f) {
            //contagem  crescente
            for (let c = i; c <= f ; c+=p){
                //contador e emoji
                res.innerHTML += ` ${c}  \u{27A1}` 
            }
        } else {
            //contagem regressiva
            for (let c = i; c >= f ; c-=p){
                //contador e emoji
                res.innerHTML += ` ${c}  \u{27A1}`
            }
        }
        //emoji da bandeirinha de chegada
        res.innerHTML += ` \u{1f3c1}` 
    }
}