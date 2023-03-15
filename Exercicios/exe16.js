/**16)​ Utilizando a estrutura do Switch faça um programa que simule uma calculadora básicaO programa recebe como parâmetros dois valores numéricos e uma string referente à operação e a realize com os valores numéricos na ordem que foram inseridos. 
 * Por exemplo: calculadora (2, ‘+’, 3). 
 * A função efetuará a soma de 2 e 3. Dica: Os sinais das operações são: ‘+’. ‘-’, ‘*’ e ‘/’.  Crie um caso default para operações inválidas. 
  */
function Calculadora(v1,operador,v2){
    switch (operador){
        case '+' : console.log(`A soma dos valores é: ${v1+v2}`)
        break;
        case '-' : console.log(`A subtração dos valores é: ${v1-v2}`)
        break;
        case '/' : console.log(`A divisão dos valores é: ${v1/v2}`)
        break;
        case '*' : console.log(`A multiplicação dos valores é: ${v1*v2}`)
        break;
        default:  console.log('operação inválida')
        }
}

Calculadora(10,'+',4)
Calculadora(10,'-',4)
Calculadora(10,'/',4)
Calculadora(10,'*',4)
Calculadora(10,',',4)