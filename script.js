
function carregar(){
    //pega a div mensagem
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')

    //pega data atual e depois somente a hora
    var data = new Date()
    var hora = data.getHours()
    var min = data.getMinutes()
    //var hora = 19

    //exibe a mensagem para user
    msg.innerHTML = `<p>Agora são ${hora} horas e ${min} minutos!</p>`

    if(hora >= 0 && hora < 12){
       msg.innerHTML += '<p>Bom dia!<p>'
       img.src= ('../img/manha.png')
       document.body.style.background ='#ffb469'

    } else if (hora >= 12 && hora <18){
        msg.innerHTML += '<p>Boa Tarde!<p>'
        img.src = ('../img/tarde.png')
        document.body.style.background = '#bb3e3c'

    }else{
        msg.innerHTML += '<p>Boa noite!<p>'
        img.src = ('../img/noite.png')
        document.body.style.background = '#2d2a5c'
    }

}