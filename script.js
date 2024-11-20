const container = document.querySelector('.container');
const gridButton = document.querySelector('#gridButton');
const CONTAINER_DIMENSION = 960;

// Create 16x16 grid
for (let i = 0; i < 256; i ++) {
  const div = document.createElement('div');
  div.classList.add('block');
  container.appendChild(div);
}

gridButton.addEventListener('click', resizeGrid);

// Creates grid with size of prompt x prompt 
function resizeGrid() {
  const sideSize = prompt('Squares per side:');
  if (sideSize > 100) {
    alert('Max value is 100');
    return 1;
  }
  const gridSize = sideSize * sideSize;
  container.innerHTML = '';
  for (let i = 0; i < gridSize; i++) {
    const div = document.createElement('div');
    div.classList.add('block');
    div.style.height = `${CONTAINER_DIMENSION / sideSize}px`;
    div.style.width = `${CONTAINER_DIMENSION / sideSize}px`;
    container.appendChild(div);
  }
}
