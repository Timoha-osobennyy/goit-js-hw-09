import './css/styles.css';
import 'simplelightbox/dist/simple-lightbox.min.css';

async function loadPartials() {
    const loadElements = document.querySelectorAll('load[src]');
  
    for (const el of loadElements) {
      const src = el.getAttribute('src');
      if (src) {
        try {
          const response = await fetch(src);
          if (response.ok) {
            const text = await response.text();
            el.innerHTML = text;
          } else {
            el.innerHTML = `<p style="color:red">Ошибка загрузки: ${response.status}</p>`;
          }
        } catch (err) {
          el.innerHTML = `<p style="color:red">Ошибка загрузки: ${err.message}</p>`;
        }
      }
    }
  }
  

  document.addEventListener('DOMContentLoaded', loadPartials);
  import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';


const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
