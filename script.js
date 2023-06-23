function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `agora são ${hora} horas.`
    if (hora >= 0 && hora < 12){
        //bom dia
        img.src ='fotoManha.png'
        document.body.style.background = '#e2cd9f'
    }else if (hora >= 12 && hora <=18){
        //boa tarde
        img.src ='fotoTarde.png'
        document.body.style.background = '#b9846f'
    }else{
        //boa noite
        img.src ='fotodaNoite.png'
        document.body.style.background = '#515154'
    }
}  
