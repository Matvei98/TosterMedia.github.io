document.getElementById("product1OldPrice").textContent = "R 250.00";
document.getElementById("product1NewPrice").textContent = "R 160.00";

const galleryImages = document.querySelectorAll('.gallery-image');
const previewImage = document.querySelector('.preview-image');
const previewContainer = document.querySelector('.preview');

// Добавляем обработчик события клика для каждой картинки
galleryImages.forEach((image) => {
    image.addEventListener('click', () => {
        // Получаем значение атрибута data-src для текущей картинки
        const dataSrc = image.getAttribute('data-src');
        if (dataSrc) {
            // Устанавливаем src превью равным значению data-src
            previewImage.src = dataSrc;
            previewContainer.style.display = 'block';
        }
    });
});
previewImage.addEventListener('click', () => {
    previewContainer.style.display = 'none';
});


const buyButton = document.getElementById("buyButton");

// Устанавливаем обработчик события на клик по кнопке
buyButton.addEventListener("click", function() {
  // Переходим по ссылке на youtube.com
  window.location.href = "https://www.youtube.com";
});




