function cronometro() {
  const ent = document.getElementById(`entrada`);
  let entrada = Number(ent.value);
  const resultado = document.getElementById(`res`);
  const img = document.createElement(`img`)
  img.src = `ronaldinho.gif`;
  document.getElementById(`imagemRonaldinho`).appendChild(img)
  const encrementoAlpha = 0.8 / entrada
  let alpha = 0
  if(entrada <= 0){
    window.alert(`Tempo invalido!`)
    window.location.reload()
  }else{
    document.getElementById(`input`).remove();
    const myTimer = setInterval(function(){
      entrada--;
      resultado.innerHTML = entrada;
      alpha += encrementoAlpha
      document.body.style.backgroundColor = `rgb(0,255,0,${alpha})`;
      if(entrada == 0){
        clearInterval(myTimer);
        resultado.remove();
        img.remove()
        const imgPele = document.createElement(`img`)
        imgPele.src = `pele.gif`;
        document.getElementById(`imagenPele`).appendChild(imgPele)
        const button = document.createElement(`input`);
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
