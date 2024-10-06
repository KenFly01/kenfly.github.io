// Ждём, пока DOM полностью загрузится, прежде чем обращаться к элементам
document.addEventListener('DOMContentLoaded', function() {
    const button = document.getElementById('startGameBtn'); // Получаем элемент кнопки по его ID
  
    if (button) { // Проверяем, существует ли элемент кнопки
      const audio = new Audio('sound/scream.mp3'); // Создаём новый объект Audio, замените 'sound.mp3' на ваш звуковой файл
  
      button.addEventListener('click', function() {
        audio.play(); // Воспроизводим звук при нажатии кнопки
      });
    } else {
      console.error("Кнопка с ID 'startGameBtn' не найдена.");
    }
  });