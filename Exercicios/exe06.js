/**
 * 06)​ Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. A primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda retornará o valor da aplicação sob o regime de juros compostos.
 */

function juroSimples(c, i, t){
    let j
    j= c*((i/100)*t)
    console.log(`O montante da aplicação financeira aplicado em juros simples é de R$ ${j}`)
}
function juroComposto(c, i, t){
    let m
    m = c * Math.pow((1+(i/100)),t)
    console.log(`O montante da aplicação financeira aplicado em juros composto é de R$ ${m.toFixed(2)}`)
}
c = 1000
i=5
t=2
juroSimples(c,i,t)
juroComposto(c,i,t)

