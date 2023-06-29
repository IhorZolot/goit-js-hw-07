import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryPicturec = document.querySelector(".gallery");

const galleryMarkup = createGalleryMarkup(galleryItems);

function createGalleryMarkup(items) {
  return items.map(({ preview, original, description }) => {
    return `
        <li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img class="gallery__image" src="${preview}" alt="${description}" />
  </a>
</li>`;
  });
}
galleryPicturec.insertAdjacentHTML("beforeend", galleryMarkup.join(""));

const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionsDelay: 250,
});

console.log(galleryItems);

// var lightbox = new SimpleLightbox(".gallery a", {
//   /* options */
// });
