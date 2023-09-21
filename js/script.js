document.getElementById("product1OldPrice").textContent = "R 250.00";
document.getElementById("product1NewPrice").textContent = "R 160.00";

const galleryImages = document.querySelectorAll('.gallery-image');
const previewImage = document.querySelector('.preview-image');
const previewContainer = document.querySelector('.preview');

galleryImages.forEach((image) => {
    image.addEventListener('click', () => {
        const dataSrc = image.getAttribute('data-src');
        if (dataSrc) {
            previewImage.src = dataSrc;
            previewContainer.style.display = 'block';
        }
    });
});
previewImage.addEventListener('click', () => {
    previewContainer.style.display = 'none';
});


const buyButton = document.getElementById("buyButton");
buyButton.addEventListener("click", function() {
  window.location.href = "https://www.youtube.com";
});




