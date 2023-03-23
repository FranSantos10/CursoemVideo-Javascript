const form = document.getElementById('form')
form.addEventListener('submit', Submit)

let status = document.getElementById('status')
let attempt = document.getElementById('attempt')
let result = document.getElementById('result')

//objetos
const guess= {
    max:10,
    attemptNumber:0,
    numberDrawn: function randomValue(){
        // round - arredonda
        return Math.round(Math.random() * this.max)
    }
}

let numberDrawn = guess.numberDrawn();

function updateAttempt(attempt,value){
    attempt.innerHTML = 'Tentativa: '+value
}

function Submit(e){
    e.preventDefault()

    let kick = document.getElementById('kick').value

    //validação
    if(!kick){
        alert('Digite um valor!')
        return;
    }
    //chama a função para atualizar as tentativas
    updateAttempt(attempt, ++guess.attemptNumber)

    //verifica se ganhou
    if(numberDrawn == kick){
        playAgain();
        status.innerHTML = 'Parabéns, você acertou!!!'
        result.style.transition = '0.4s';
        result.style.background = '#37c978';
        result.style.color = '#fff';
        status.style.color = '#fff'
        clear();
    }else if(numberDrawn > kick){
        status.innerHTML = 'O número é maior'
        status.style.color = '#de4251'
        clear();
    }else if(numberDrawn < kick){
        status.innerHTML = 'O número é menor'
        status.style.color = '#de4251'
        clear();
    }
}
function playAgain(){
    // exibir botão
    exibir = document.getElementById('btnRestart')
    exibir.style.display = 'flex'
}
function restart(){
    document.location.reload(true)
}
function clear(){
    document.getElementById('kick').value = ''
}