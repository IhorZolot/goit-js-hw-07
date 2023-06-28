import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryPicturec = document.querySelector(".gallery");

const galleryMarkup = createGalleryMarkup(galleryItems);

function createGalleryMarkup(items) {
  return items.map(({ preview, original, description }) => {
    return `
        <li class="gallery__item">
          <a class="gallery__link" href="${original}">
            <img
              class="gallery__image"
              src="${preview}"
              data-source="${original}"
              alt="${description}"
            />
          </a>
        </li>
      `;
  });
}
galleryPicturec.insertAdjacentHTML("beforeend", galleryMarkup.join(""));

galleryPicturec.addEventListener("click", handleGalleryClick);

function handleGalleryClick(event) {
  event.preventDefault();
  const { target } = event;
  if (target.nodeName !== "IMG") {
    return;
  }
  const instance = basicLightbox.create(`
    <img src="${target.dataset.source}">
  `);
  instance.show();
  document.addEventListener("keydown", handleKeyDown);

  function handleKeyDown(event) {
    if (event.code === "Escape") {
      instance.close();
      document.removeEventListener("keydown", handleKeyDown);
    }
  }
}

console.log(galleryItems);
