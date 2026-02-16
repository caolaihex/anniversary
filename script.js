document.addEventListener("DOMContentLoaded", () => {

  const intro = document.getElementById("intro");

  function openSite() {
    intro.classList.add("hide");
  }

  intro.addEventListener("click", openSite);
  intro.addEventListener("touchstart", openSite);

  function createHeart(){
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "💖";

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = (Math.random() * 20 + 15) + "px";
    heart.style.animationDuration = (Math.random() * 3 + 3) + "s";

    document.body.appendChild(heart);

    setTimeout(() => heart.remove(), 6000);
  }

  setInterval(createHeart, 500);

});
