function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if(fano.value.length == 0 || Number(fano.value) > ano){
        window.alert('[ERRO] verifi que se os espaços a baixo foram devidadmente prenxidos')
    }else{
        var fsex = document.getElementByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        if (fsex[0].checked){
            genero = 'Homem'
        }else if (fsex[1].checked){
            genero = 'Mulher'
        }
        res.Style.textAlign ='center'
        res.innerHTML = `Detectamos ${genero} com ${idade}anos.`
    }
}