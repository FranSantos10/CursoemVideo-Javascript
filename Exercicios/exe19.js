/**19) ​O cardápio de uma lanchonete é o seguinte: 
Código  Descrição do Produto  Preço 
100  Cachorro Quente  R$ 3,00 
200  Hambúrguer Simples  R$ 4,00 
300  Cheeseburguer  R$ 5,50 
400  Bauru  R$ 7,50 
500  Refrigerante  R$ 3,50 
600  Suco  R$ 2,80 
Implemente uma  função que receba como parâmetros o código do item pedido, a quantidade e calcule o valor a ser pago por aquele lanche. Considere que a cada execução somente será calculado um item. Use o comando switch. Crie um caso default para produto não existente. */

Pedido (300,20)

function Pedido(cod,qtd=0){
    let valor, total, item
    switch (cod){
        case 100: item = 'Cachorro Quente', valor = 3.00
                  total = valor * qtd
                  console.log(`O Total do pedido do ${item}: R$ ${total}`)   
        break;
        case 200: item = 'Hambúrguer Simples', valor = 4.00
                  total = valor * qtd
                  console.log(`O Total do pedido do ${item}: R$ ${total}`)   
        break;
        case 300: item = 'Cheeseburguer', valor = 5.50
                  total = valor * qtd
                  console.log(`O Total do pedido do ${item}: R$ ${total}`)   
        break;
        case 400: item = 'Bauru', valor = 7.50
                  total = valor * qtd
                  console.log(`O Total do pedido do ${item}: R$ ${total}`)   
        break;
        case 500: item = 'Refrigerante', valor = 3.50
                  total = valor * qtd
                  console.log(`O Total do pedido do ${item}: R$ ${total}`)   
        break;
        case 600: item = 'Suco', valor = 2.80
                  total = valor * qtd
                  console.log(`O Total do pedido do ${item}: R$ ${total}`)   
        break;
        default: console.log('Este produto não existe')           
    }
}