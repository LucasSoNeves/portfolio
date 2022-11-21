var images = [];
var slider;
var imgAtual;
var imgMaxima;
var tempoParaTrocarImagem;
var tempoDeImagem;
var tempoDeLoading;
var tempoTroca;
var link = [];

function preCarregamento() {
    var image = 1;
    for (var i = 0; i < 4; i++) {
    images[i] = new Image();
    images[i].src = "../imagens/slides/image" + image + ".png";
    image ++;
    }
}

function carregarImagem(img) {
    slider.style.backgroundImage = "url('" + images[img].src + "')";
}

function iniciar() {
    preCarregamento();
    imgAtual = 0;
    imgMaxima = images.length -1;
    slider = document.getElementById("slider");
    tempoDeLoading = document.getElementById("barraDeLoading");
    carregarImagem(imgAtual);
    tempoTroca = 0;
    animacao();
}

function trocarImagem(dir) {
    tempoTroca = 0;
    imgAtual += dir;
     if( imgAtual > imgMaxima ) {
        imgAtual = 0;
     } else if (imgAtual < 0) {
        imgAtual = imgMaxima;
     }
     carregarImagem(imgAtual);
}

function animacao() {
    tempoTroca++;
    if ( tempoTroca >= 500 ) {
        tempoTroca = 0;
        trocarImagem(1);
    }
    tempoDeImagem = tempoTroca / 5;
    tempoDeLoading.style.width = tempoDeImagem + "%";
    window.requestAnimationFrame(animacao);
}

window.addEventListener("load", iniciar);