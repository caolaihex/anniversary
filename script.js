const intro = document.getElementById("intro");

intro.addEventListener("click", () => {
  intro.classList.add("hide");
});

function createHeart(){
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.innerHTML = "💖";

  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = (Math.random() * 20 + 15) + "px";
  heart.style.animationDuration = (Math.random() * 3 + 3) + "s";

  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 6000);
}

setInterval(createHeart, 500);
body{
  margin:0;
  font-family: 'Poppins', sans-serif;
  text-align:center;
  color:#d63384;
  background: linear-gradient(135deg,#ffc0cb,#ffd6e7,#ffe4ec,#fff0f5);
  min-height:100vh;
}
