const container = document.querySelector('.container');
const gridButton = document.querySelector('#gridButton');

for (let i = 0; i < 256; i ++) {
  const div = document.createElement('div');
  div.classList.add('block');
  container.appendChild(div);
}