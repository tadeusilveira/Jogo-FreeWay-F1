// imagens e sons do jogo

let imagemDaEstrada;
let imagemDoAtor;
let imagemCarro;
let imagemCarro2;
let imagemCarro3;
let imagemCarro4;
let imagemCarro5;
let imagemCarro6;

//sons do jogo

let somDaTrilha;
let somDaColisao;
let somDoPonto;

function preload(){
  imagemDaEstrada = loadImage("imagens2/estrada.png");
  imagemDoAtor = loadImage("imagens2/vaca1.png");
  imagemCarro = loadImage("imagens2/F1Amarela.png");
  imagemCarro2 = loadImage("imagens2/F1vermelha.png");
  imagemCarro3 = loadImage("imagens2/F1azul.png");
  imagemCarro4 = loadImage("imagens2/F1preta2.png");
  imagemCarro5 = loadImage("imagens2/F1vermelha2.png");
  imagemCarro6 = loadImage("imagens2/F1PretoeBranco.png");
  
  imagemCarros = [imagemCarro, imagemCarro2, imagemCarro3, imagemCarro4, imagemCarro5, imagemCarro6]

  somDaTrilha = loadSound("sons/trilha.mp3");
  somDaColisao = loadSound("sons/colidiu.mp3");
  somDoPonto = loadSound("sons/pontos.wav");
}