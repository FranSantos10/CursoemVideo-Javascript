/**22)​ Criar uma função para calcular o valor a ser pago de anuidade de uma associação. 
 * A função recebe como parâmetro um inteiro que representa o mês 
 * (1 - janeiro, 2 - fevereiro...) que foi paga e o valor da anuidade. 
 * A anuidade deve ser paga no mês de janeiro. 
 * Por mês, é cobrado 5% de juros (sob o regime de juros compostos). 
 * O retorno deve ser o valor a ser pago para o respectivo mês escolhido. */
mes = 12
valor = 100
juros = 5

function Anuidade(mes, valor){
    if (mes === 1 ){
        console.log(` Valor da anuidade é R$ ${valor}`)
    } else if (mes >=2 && mes <=12 ) {
        let m
        m = valor * Math.pow((1+(juros/100)),mes)
        console.log(` Valor da anuidade é R$ ${m.toFixed(2)}`)
    } else {
        console.log('Mes inválido')
    }
}

Anuidade(mes,valor)