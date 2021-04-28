function cronometro() {
  let ent = document.getElementById(`entrada`);
  let entrada = Number(ent.value);
  let resultado = document.getElementById(`res`);
  const ttotal = entrada;
  let tempo = 0;
  //<imagem do ronaldinho>
  let img = document.createElement(`img`)
  img.src = `ronaldinho .gif`;
  document.getElementById(`imagemRonaldinho`).appendChild(img)
  // </imagem>
  if(ent.value.length == 0){
    window.alert(`Tempo invalido!`)
    window.location.reload()
  }
  else if (entrada > 0) {
    document.getElementById(`input`).remove();

    let myTimer = setInterval(function() {
      entrada--;
      resultado.innerHTML = entrada;
      tempo++;
      const color = 255 + (-255 / ttotal) * tempo;
      document.body.style.backgroundColor = `rgb(${color},255,${color})`;
      if (entrada == 0) {
        clearInterval(myTimer);
      resultado.remove();
      img.remove()
      let imgPele = document.createElement(`img`)
      imgPele.src = `pele.gif`;
      document.getElementById(`imagenPele`).appendChild(imgPele)
      let button = document.createElement(`input`);
      button.type = `button`;
      button.value = `Reiniciar`
      button.id = `button`
      button.onclick = function(){
        window.location.reload()
      }
      document.getElementById(`btn`).appendChild(button)
      }
    }, 1000);
  }
}

/*
  inicio 255,255,255
    final 0,255,0

    x = t
    v = x/t
    color = color0 + v.t


    v.t = color - color0
    v = (color - color0) / ttotal

    v = (0 - 255 ) / ttotal
    v = -255 / ttotal

    color = 255 + (-255/ttotal).t

    color = color0 + v.t

    color = 255 + (-255/ttotal).t

    ttotal = 10
    t = 0 , color = 255
    color = 255 + (-255/10).0

    t = 1 , color = 230
    color = 255 -255/10.1

    t = 2 , color = 205
    color = 255 (-25).2
    color = 255 - 50

    t =  3, color = 180
    color = 255 (-25).3
    color = 255 - 75

    t =  4, color = 155
    color = 255 (-25).4
    color = 255 - 100

    t =  5, color = 130
    color = 255 (-25).5
    color = 255 - 125

    t =  6, color = 105
    color = 255 (-25).6
    color = 255 - 150

    t =  7, color = 80
    color = 255 (-25).7
    color = 255 - 175

    t =  8, color = 55
    color = 255 (-25).8
    

    t =  9, color = 30
    color = 255 (-25).9

    t =  10, color = 5
    color = 255 (-25).10
    
 */
