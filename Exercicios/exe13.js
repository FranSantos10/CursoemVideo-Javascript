/**
 * 13) ​Crie um programa que exibe se um dia é dia útil, fim de semana ou dia inválido dado o número referente ao dia. 
 * Considere que domingo é o dia 1 e sábado é o dia 7. 
 * Utilize a estrutura Switch
 */
dia = 8
function DiaSemana(){

    switch (dia){
        case 1: return 'Domingo'
        break;
        case 2: return 'Segunda feira'
        break;
        case 3: return 'Terça feira'
        break;
        case 4: return 'Quarta feira'
        break;
        case 5: return 'Quinta feira'
        break;
        case 6: return 'Sexta feira'
        break;
        case 7: return 'Sábado'
        break;
        default: return `Dia ${dia} é inválido, não corresponde ao dia da semana`
    }
}
console.log(DiaSemana())