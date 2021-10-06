let areas = {
  a: null,
  b: null,
  c: null
};

document.querySelectorAll('.item').forEach(item => {
  item.addEventListener('dragstart', dragStart);// Arrasta
  item.addEventListener('dragend', dragEnd);// Solta
});

document.querySelectorAll('.area').forEach(area => {
  area.addEventListener('dragover', dragOver);// arrastando em cima da area
  area.addEventListener('dragleave', dragLeave);//
  area.addEventListener('drop', drop);// 
});

document.querySelector('.neutralArea').addEventListener('dragover', dragOverNeutral);
document.querySelector('.neutralArea').addEventListener('dragleave', dragLeaveNeutral);
document.querySelector('.neutralArea').addEventListener('drop', dropNeutral);

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
  if(e.currentTarget.querySelector('.item') === null) {
    e.preventDefault();//Libera o drop
    e.currentTarget.classList.add('hover');//Qdo entra opacity
  }
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
    updateAreas();
  }
}

// Functions NeutralArea
function dragOverNeutral(e) {
  e.preventDefault();
  e.currentTarget.classList.add('hover');
}
function dragLeaveNeutral(e) {
  e.currentTarget.classList.remove('hover');
}
function dropNeutral(e) {
  e.currentTarget.classList.remove('hover');
  let dragItem = document.querySelector('.item.dragging');  
  e.currentTarget.appendChild(dragItem);// Adiciona o item na area
  updateAreas();
}


// Logic functions
function updateAreas() {
  document.querySelectorAll('.area').forEach(area=>{
    let name = area.getAttribute('data-name');

    if(area.querySelector('.item') !== null) {
      areas[name] = area.querySelector('.item').innerHTML;
    } else {
      areas[name] = null;
    }
  });
  //console.log(areas);
  if(areas.a === '1' && areas.b === '2' && areas.c === '3') {
    document.querySelector('.areas').classList.add('correct');
  } else {
    document.querySelector('.areas').classList.remove('correct');
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