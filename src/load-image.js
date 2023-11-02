import image from './steve-after-a-workshop.jpg?h=400&format=webp';

const content = document.querySelector('#content');

console.log('image', image);

export default function loadImage() {
  const imageElement = document.createElement('img');
  imageElement.src = image;
  content.appendChild(imageElement);
}
