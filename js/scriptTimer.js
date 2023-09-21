const targetTime = new Date("2023-12-31T23:59:59").getTime();

// Получаем элементы таймера
const hoursElement = document.querySelector(".timer__hours");
const minutesElement = document.querySelector(".timer__minutes");
const secondsElement = document.querySelector(".timer__seconds");

// Обновление таймера каждую секунду
const timerInterval = setInterval(updateTimer, 1000);

function updateTimer() {
  const currentTime = new Date().getTime();
  const timeLeft = targetTime - currentTime;

  if (timeLeft <= 0) {
    clearInterval(timerInterval);
    document.getElementById("timer").innerHTML = "Время истекло!";
  } else {
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    // Обновляем значения элементов таймера
    hoursElement.textContent = padZero(hours);
    minutesElement.textContent = padZero(minutes);
    secondsElement.textContent = padZero(seconds);
  }
}

// Функция для добавления нуля перед числами < 10
function padZero(number) {
  return (number < 10) ? `0${number}` : number;
}

// Инициализация таймера при загрузке страницы
updateTimer();