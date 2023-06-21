function carregar() { 
    var msg =window.document.getElementById('msg')
    var img =window.document.getElementById('ft')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `agora são ${hora} horas.`
    if (hora >= 0 && hora < 12){
        //bom dia
        img.src ='fotoManhã.png'
    }else if (hora >= 12 && hora <=18){
        //boa tarde
        img.src ='fotoTade.png'
    }else{
        //boa noite
        img.src ='fotoNoite.png'
    }
}    
