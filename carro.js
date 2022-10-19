//código do carro

let xCarros = [600, 600, 600, 600, 600, 600];
let yCarros = [30, 90, 150, 210, 270, 325];
let velocidadeCarros = [2, 2.5, 3.2, 5, 3.3, 2.3];
let comprimentoCarro = 90;
let alturaCarro = 40

function mostraCarro(){
  for (let i = 0; i < imagemCarros.length; i ++){
    image(imagemCarros[i], xCarros[i], yCarros[i], comprimentoCarro, alturaCarro);   
  }
}

function movimentaCarro(){
  for (let i = 0; i < imagemCarros.length; i ++){
    xCarros[i] -= velocidadeCarros[i];
  }
}

function voltaPosicaoInicialDoCarro(){
  if (xCarros[0] < -100){
    xCarros[0] = 600
  }
  if (xCarros[1] < -100){
    xCarros[1] = 600
  }
  if (xCarros[2] < -100){
    xCarros[2] = 600
  }
  if (xCarros[3] < -100){
    xCarros[3] = 600
  }
  if (xCarros[4] < -100){
    xCarros[4] = 600
  }
  if (xCarros[5] < -100){
    xCarros[5] = 600
  }
}

function passouTodaATela(xCarro){
  return xCarro < -50;
}