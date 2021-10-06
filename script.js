document.querySelectorAll('.item').forEach(item => {
  item.addEventListener('dragstart', dragStart);// Arrasta
  item.addEventListener('dragend', dragEnd);// Solta
});

document.querySelectorAll('.area').forEach(area => {
  area.addEventListener('dragover', dragOver);// arrastando em cima da area
  area.addEventListener('dragleave', dragLeave);//
  area.addEventListener('drop', drop);// 
});

// Functions Item
function dragStart(e) {// transparencia qdo arrasta
  e.currentTarget.classList.add('dragging');
}
function dragEnd(e) {// tira transparencia
  e.currentTarget.classList.remove('dragging');
}

// Functions Area
function dragOver(e) {
  //console.log("Passou por cima");
  e.preventDefault();//Libera o drop
  e.currentTarget.classList.add('hover');//Qdo entra opacity
}
function dragLeave(e) {
  //console.log("SAIU de uma area DROPAVEL");
  e.currentTarget.classList.remove('hover');// Qdo sai normal
}
function drop(e) {
  //console.log("LIBEROU");
  e.currentTarget.classList.remove('hover');// Remove transparencia

  

  // Se não tiver item na area
  if(e.currentTarget.querySelector('.item') === null) {
    // Identifica qual item está sendo arrastado
    let dragItem = document.querySelector('.item.dragging');
    //console.log(dragItem);
    //console.log(e.currentTarget);// Área que esta o item
    e.currentTarget.appendChild(dragItem);// Adiciona o item na area
  }
}


/*
// Função clique na área neutra
document.querySelector('.neutralArea').addEventListener('click', (e) => {
  //console.log("TARGET", e.target);
  //e.target.style.border = '1px solid #00FF00';
  console.log("TARGET", e.target);// Pega o item
  console.log("CURRENT TARGET", e.currentTarget);
});
*/