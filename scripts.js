function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if(fano.values.length == 0 || fano.values > ano){

    }else{
        window.alert('sou do caralho')
    }
}