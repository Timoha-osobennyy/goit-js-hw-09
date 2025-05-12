import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const images = [
  { preview: 'img/logo.svg', original: 'img/logo.svg', description: 'Logo' },
  { preview: 'img/javascript.svg', original: 'img/javascript.svg', description: 'JavaScript Logo' },
  { preview: 'img/sprite.svg', original: 'img/sprite.svg', description: 'Sprite Icon' },
  { preview: 'img/vite-logo.png', original: 'img/vite-logo.png', description: 'Vite Logo' },
];

const galleryList = document.querySelector('.gallery');

if (galleryList) {
  const galleryMarkup = images.map(({ preview, original, description }) => `
    <li class="gallery-item">
      <a class="gallery-link" href="${original}">
        <img class="gallery-image" src="${preview}" alt="${description}" />
      </a>
    </li>
  `).join('');

  galleryList.innerHTML = galleryMarkup;

  const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionPosition: 'bottom',
    captionDelay: 250,
  });
}
