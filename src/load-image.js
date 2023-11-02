import image from './favicon-16x16.png';

const content = document.querySelector('#content');

export default function loadImage() {
  const imageElement = document.createElement('img');
  imageElement.src = image;
  content.appendChild(imageElement);
}
