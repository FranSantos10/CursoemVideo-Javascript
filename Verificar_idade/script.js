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

        //criando imagem e informando id
        var img =document.createElement('img')
        img.setAttribute('id', 'foto')
       
        //genero
        if (sex[0].checked) {
            genero = 'homem'     
            if (idade >=0 && idade <10) {
                //criança
                img.setAttribute('src', '../img/bb_m.png')
            } else if(idade <21){
                //jovem
                img.setAttribute('src', '../img/jovem_m.png')
            } else if(idade <50){
                //adulto 
                img.setAttribute('src', '../img/adulta_m.png')
            } else{
                //idoso 
                img.setAttribute('src', '../img/idoso_m.png')
            }   
        }else if(sex[1].checked){
            genero ='mulher'
            if (idade >=0 && idade <10) {
                //criança
                img.setAttribute('src', '../img/bb_f.png')
            } else if(idade <21){
                //jovem
                img.setAttribute('src', '../img/jovem_f.png')
            } else if(idade <50){
                //adulto 
                img.setAttribute('src', '../img/adulta_f.png')
            } else{
                //idoso 
                img.setAttribute('src', '../img/idoso_f.png')
            } 
        }
        res.style.textAlign= 'center'
        res.innerHTML = `Detectamos o ${genero} e idade ${idade} anos` 
        res.appendChild(img)
    }
}