function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if(fano.value.length == 0 || Number(fano.value) > ano){
        window.alert('[ERRO] verifi que se os espaços a baixo foram devidadmente prenxidos')
    }else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id','foto')
        if (fsex[0].checked){
            genero = 'Homem'
            if(idade >= 0 && idade <10){
                //criança
                //img.setAttribute('src','nome da foto')
            }else if(idade <21){
                //jovem
            }else if(idade < 50){
                //adulto
            }else{
                //idoso
            }
        }else if (fsex[1].checked){
            genero = 'Mulher'
            if(idade >= 0 && idade <10){
                //criança
            }else if(idade <21){
                //jovem
            }else if(idade < 50){
                //adulto
            }else{
                //idoso
            }
        }
        
        res.innerHTML = `Detectamos ${genero} com ${idade}anos.`
        res.appendChild(img)
    }
}