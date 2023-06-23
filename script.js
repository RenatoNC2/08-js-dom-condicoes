function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    //var hora = data.getHours()
    var hora = 7
    msg.innerHTML = `agora são ${hora} horas.`
    if (hora >= 0 && hora < 12){
        //bom dia
        img.src ='fotoManha.png'
    }else if (hora >= 12 && hora <=18){
        //boa tarde
        img.src ='fotoTarde.png'
    }else{
        //boa noite
        img.src ='fotodaNoite.png'
    }
}  
