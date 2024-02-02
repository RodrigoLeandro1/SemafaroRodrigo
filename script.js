
function contagem(a){
  var valor = a;
  setInterval(function(){
    if (valor > 0){
      valor = valor -1
      document.querySelector('.cont').innerHTML= valor;
    }
  },1000)
}

function red(){
  contagem (8)
  var cor = document.querySelector ('.cont');
      cor.style.color = "red"
  var cor = document.getElementById ('red');
      cor.style.backgroundColor = "red"
  var tela = document.querySelector('.tela');
  tela.style.backgroundColor = "rgba(255, 0, 0, 0.144)"


  setTimeout(function(){
    cor.style.backgroundColor = "rgba(255, 0, 0, 0.123)"
    green()
  },8000)
}

function yellow(){
  var cor = document.getElementById ('yellow');
  var amarelo = document.querySelector ('.cont');
  var tela = document.querySelector('.tela');
  var apagar = setInterval(function (){
    cor.style.backgroundColor = "yellow"
    amarelo.style.color = "yellow"
    tela.style.backgroundColor = "rgba(255, 255, 0, 0.11"
    
    setTimeout(function(){
      cor.style.backgroundColor = "rgba(255, 255, 0, 0.11"
      amarelo.style.color = "rgba(255, 255, 0, 0.11"
     
      
    },600)

    },1200)

  setTimeout(function(){
    clearInterval(apagar)
    cor.style.backgroundColor = "rgba(255, 255, 0, 0.11)"
    red()
  },8000)
}

function green(){
  contagem (8)
  
  var cor = document.querySelector ('.cont');
      cor.style.color = "#00FF00"
  var tela = document.querySelector('.tela');
  tela.style.backgroundColor = "#036e086c"

  var cor = document.getElementById ('green');
  cor.style.backgroundColor = "#00FF00"

  setTimeout(function(){
    cor.style.backgroundColor = "rgba(0, 128, 0, 0.144)"
    yellow()
  
  },8000)
}
green()