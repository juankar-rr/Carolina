// Generar corazones flotantes
for (let i = 0; i < 20; i++) {
  let heart = document.createElement("div");
  heart.className = "floating-heart";
  heart.innerHTML = "❤";
  heart.style.left = Math.random() * window.innerWidth + "px";
  heart.style.top = window.innerHeight + "px";
  heart.style.animationDuration = (3 + Math.random() * 3) + "s";
  document.body.appendChild(heart);
}

// Cuenta regresiva
function countdown() {
  const targetDate = new Date("nov 16, 2024 00:00:00").getTime();
  const now = new Date().getTime();
  const distance = targetDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("countdown").innerHTML =
    days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

  if (distance < 0) {
    document.getElementById("countdown").innerHTML = "¡Llegó San Valentín!";
  }
}
setInterval(countdown, 1000);