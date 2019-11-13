var baixo = 0;

window.onload = function() {
    $('html').bind('mousewheel', function(e){
        if(e.originalEvent.wheelDelta  > 0){
            //console.log('cima');
            baixo = baixo - 1;
            if(baixo == 0){
                scrollarRem();
            } else if(baixo == 8){
                scrollarAdd();
                scrollLojaRem();
            } else if(baixo == -1){
                baixo = 0;
            }
        } else {
            //console.log('baixo');
            baixo = baixo + 1;
            if(baixo == 8){
                scrollarAdd();
            } else if(baixo == 16){
                scrollLojaAdd();
            } else if(baixo == 17){
                baixo = 16;
            }
        }
    });
};

function scrollarAdd(){
    $('.menu').addClass('scrollado');
    $('#logo').addClass('scrollado');
    $('#txtNativo').addClass('scrollado');
    $('#montanhas').addClass('scrollado');
    $('#balls').addClass('scrollado');
    $('#luzBg').addClass('scrollado');
}

function scrollarRem(){
    $('.menu').removeClass('scrollado');
    $('#logo').removeClass('scrollado');
    $('#txtNativo').removeClass('scrollado');
    $('#montanhas').removeClass('scrollado');
    $('#balls').removeClass('scrollado');
    $('#luzBg').removeClass('scrollado');
}

function scrollLojaAdd(){
    $('#loja').addClass('scrollado');
    $('#home').addClass('scrollado');
    $('.menu').addClass('bgBr')
    $('#logo').addClass('bgBr')
}

function scrollLojaRem(){
    $('#loja').removeClass('scrollado');
    $('#home').removeClass('scrollado');
    $('.menu').removeClass('bgBr')
    $('#logo').removeClass('bgBr')
}