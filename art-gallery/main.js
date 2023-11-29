let currentImageIndex = 0;
const images = ["img/image1.jpg", "img/image2.jpg", "img/image3.jpg", "img/image4.jpg", "img/image5.jpg"];
const modalImage = document.getElementById('modalImage');
const modal = document.getElementById('modal');

modal.style.display = 'none';

function openModal(imagePath) {
  modal.style.display = 'flex';
  modal.style.alignItems = 'center';
  modalImage.src = imagePath;
  currentImageIndex = images.indexOf(imagePath);

  modal.addEventListener('click', closeModalOnClickOutside);

  window.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
      closeModal();
    } else if (event.key === 'ArrowLeft') {
      currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
      modalImage.src = images[currentImageIndex];
    } else if (event.key === 'ArrowRight') {
      currentImageIndex = (currentImageIndex + 1) % images.length;
      modalImage.src = images[currentImageIndex];
    }
  });
}

function closeModal() {
  modal.style.display = 'none';
  modal.removeEventListener('click', closeModalOnClickOutside);

  window.removeEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
      closeModal();
    } else if (event.key === 'ArrowLeft') {
      currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
      modalImage.src = images[currentImageIndex];
    } else if (event.key === 'ArrowRight') {
      currentImageIndex = (currentImageIndex + 1) % images.length;
      modalImage.src = images[currentImageIndex];
    }
  });
}

function closeModalOnClickOutside(event) {
  if (event.target === modal) {
    closeModal();
  }
}
