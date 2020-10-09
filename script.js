function cantCatchMe() {
  el.setAttribute('style', 'top:' + Math.floor(Math.random() * 85) + 'vh;' + 'left:' + Math.floor(Math.random() * 85) + 'vw;');
}

var el = document.querySelector('#ghost');
el.onmouseover = cantCatchMe;