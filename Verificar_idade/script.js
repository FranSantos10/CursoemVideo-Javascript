function verificar(){
    var data = new Date()
    // ano atual
    var ano = data.getFullYear()
    //ano do user
    var anouser = document.getElementById('txtano')
    //resposta user
    var res = document.querySelector('div#res')
    
    if (anouser.value.length == 0 || anouser > ano ) {
        window.alert('Erro! Verifique os dados informados')
    }else{
        var sex = document.getElementsByName('rdsex')
        var idade = ano - Number(anouser.value)
        var genero = ''
        var img =document.createElement('img')
        img.setAttribute('id', 'foto')
        
        if (sex[0].checked) {
            genero = 'homem'            
        }else if(sex[1].checked){
            genero ='mulher'
        }
        res.style.textAlign= 'center'
        res.innerHTML = `${genero} e idade ${idade} anos` 
    }
}