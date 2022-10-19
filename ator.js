//código do ator

let xAtor = 85;
let yAtor = 375;
let colisao = false;
let meusPontos = 0;

function mostraAtor(){
  image(imagemDoAtor, xAtor, yAtor, 20, 50);
}

function movimentaAtor(){
  if (keyIsDown(UP_ARROW)){
    yAtor -=3;
  }
  if (keyIsDown(DOWN_ARROW)){
    if(podeSeMover()){
    yAtor +=3;
    }
  }
}

function verificaColisao(){
  //collideRectCircle(x1, y1 , width1, heigth1, cx, cy, diameter)
  for (let i = 0; i < imagemCarros.length; i ++){
    colisao = collideRectCircle(xCarros[i], yCarros[i], comprimentoCarro, alturaCarro, xAtor, yAtor, 15)
    if (colisao){
        voltaAtorParaPosicaoInicial();
        somDaColisao.play();
      if (pontosMaiorQueZero()){
        meusPontos -= 1;
      }    
    }
  }
}

function voltaAtorParaPosicaoInicial(){
  yAtor = 375;
}

function incluiPontos(){
  textAlign(CENTER);
  textSize(25);
  fill(color(0,0,255));
  text(meusPontos, width / 6, 20);
}

function marcaPonto(){
  if (yAtor < 15){
    meusPontos += 1;
    somDoPonto.play();
    voltaAtorParaPosicaoInicial();
  }
}

function pontosMaiorQueZero(){
  return meusPontos > 0;
}

function podeSeMover(){
  return yAtor < 375;
}