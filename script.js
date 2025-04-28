// Set your anniversary date here
const anniversaryDate = new Date('2024-05-14T00:00:00');

function updateTimer() {
  const now = new Date();
  let years = now.getFullYear() - anniversaryDate.getFullYear();
  let months = now.getMonth() - anniversaryDate.getMonth();
  let days = now.getDate() - anniversaryDate.getDate();
  let hours = now.getHours() - anniversaryDate.getHours();
  let minutes = now.getMinutes() - anniversaryDate.getMinutes();
  let seconds = now.getSeconds() - anniversaryDate.getSeconds();

  if (seconds < 0) {
    seconds += 60;
    minutes--;
  }
  if (minutes < 0) {
    minutes += 60;
    hours--;
  }
  if (hours < 0) {
    hours += 24;
    days--;
  }
  if (days < 0) {
    months--;
    const lastMonth = new Date(now.getFullYear(), now.getMonth(), 0);
    days += lastMonth.getDate();
  }
  if (months < 0) {
    months += 12;
    years--;
  }

  document.getElementById('timer').innerHTML = `
    ${years} Years, ${months} Months, ${days} Days, 
    ${hours} Hours, ${minutes} Minutes, ${seconds} Seconds
  `;
}

setInterval(updateTimer, 1000);
updateTimer();

// Function to create flying hearts
function createHeart() {
  const heart = document.createElement('div');
  heart.classList.add('heart');
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.top = "100vh";
  heart.style.fontSize = Math.random() * 20 + 10 + "px";
  heart.innerHTML = '❤️';
  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 4000);
}

setInterval(createHeart, 300);
