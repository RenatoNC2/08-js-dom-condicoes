var msg =window.document.getElementById('msg')
var img =window.document.getElementById('foto')
var data = new Date()
var hora = data.getHours()

msg.innerHTML ='agora são ${hora} hora.'
if (hora >= 0 && hora < 12){
    //bom dia
    Image.src ='fotoManhã.png'
}else if (hora >= 12 && hora <18){
    //boa tarde
    Image.src ='fotoTade.png'
}else{
    //boa noite
    Image.src ='fotoNoite.png'
}
