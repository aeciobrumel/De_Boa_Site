let areas = {
  a: null,
  b: null,
  c: null
};

document.querySelectorAll('.item').forEach(item => {
  item.addEventListener('dragstart', dragStart);
  item.addEventListener('dragend', dragEnd);
});

document.querySelectorAll('.area').forEach(area => {
  area.addEventListener('dragover', dragOver);
  area.addEventListener('dragleave', dragLeave);
  area.addEventListener('drop', drop);
});

document.querySelector('.neutralArea').addEventListener('dragover', dragOverNeutral);
document.querySelector('.neutralArea').addEventListener('dragleave', dragLeaveNeutral);
document.querySelector('.neutralArea').addEventListener('drop', dropNeutral);

//document.querySelector('#imagem').addEventListener('change', handleImagePreview);

function dragStart(e) {
  e.currentTarget.classList.add('dragging');
  handleImagePreview;
  
}

function dragEnd(e) {
  let dboa = e.currentTarget.src;
  //alert(dboa.search("c1"));
  //teste();

  if(dboa.search("c1")>-1){
    teste("img/img/c1.jpeg");
  } else if(dboa.search("c2")>-1){
    teste("img/img/c2.jpeg");
  } else {
    teste("img/img/c3.jpeg");
  }

  e.currentTarget.classList.remove('dragging');


  
}

function dragOver(e) {

  
  if (e.currentTarget.querySelector('.item') === null) {
    e.preventDefault();
    e.currentTarget.classList.add('hover');
  }
}

function dragLeave(e) {
  e.currentTarget.classList.remove('hover');
}

function drop(e) {
  e.currentTarget.classList.remove('hover');

  if (e.currentTarget.querySelector('.item') === null) {
    let dragItem = document.querySelector('.item.dragging');
    e.currentTarget.appendChild(dragItem);
    updateAreas();
  }
}

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
  e.currentTarget.appendChild(dragItem);
  updateAreas();
}

function updateAreas() {
  document.querySelectorAll('.area').forEach(area => {
    let name = area.getAttribute('data-name');

    if (area.querySelector('.item') !== null) {
      areas[name] = area.querySelector('.item').src;
    } else {
      areas[name] = null;
    }
  });

  if (areas.a === 'imagem1.jpg' && areas.b === 'imagem2.jpg' && areas.c === 'imagem3.jpg') {
    document.querySelector('.areas').classList.add('correct');
  } else {
    document.querySelector('.areas').classList.remove('correct');
  }
}

function teste(imagem){
  document.getElementById('podeser').src = imagem;
}

/*
document.querySelector('#imagem').addEventListener('change', handleImagePreview);

*/
/*function handleImagePreview(e) {
  const imageInput = e.target;
  const pictureImage = document.querySelector('.pictureImage');

  if (imageInput.files && imageInput.files[0]) {
    const reader = new FileReader();

    reader.onload = function (e) {
      pictureImage.src = e.target.result;
    };

    reader.readAsDataURL(imageInput.files[0]);
  }
}




const imagem = document.getElementById('img1');
const imagemAmpliada = document.getElementById('imagem-ampliada');
const imagemAmpliadaSrc = document.getElementById('imagem-ampliada-src');


imagem.addEventListener('click', () => {
  imagemAmpliada.style.display = 'block'; // Mostra a imagem ampliada
  imagemAmpliadaSrc.src = imagem.src; // Define a imagem ampliada
});

imagemAmpliada.addEventListener('click', () => {
  imagemAmpliada.style.display = 'none'; // Fecha a imagem ampliada
});
*/
