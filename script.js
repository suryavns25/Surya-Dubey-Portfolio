document.addEventListener("DOMContentLoaded", function() {
  const heroText = document.querySelector(".hero-text");
  if(heroText){
    heroText.style.opacity = "0";
    setTimeout(() => {
      heroText.style.transition = "opacity 2s";
      heroText.style.opacity = "1";
    }, 500);
  }
});
