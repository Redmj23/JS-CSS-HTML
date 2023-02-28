let playOnce = true;
document.addEventListener("scroll", (e) => {
  if (window.scrollY > 1) {
    navbar.style.height = 45 + "px";
  } else {
    navbar.style.height = "90px";
  }
  const popUp = document.querySelector(".pop-up");
  const imgImprovise = document.querySelector("#imgImprovise");
  let scrollValue =
    (window.scrollY + window.innerHeight) / document.body.offsetHeight;

  if (scrollValue > 0.45) {
    imgImprovise.style.opacity = 1;
    imgImprovise.style.transform = "none";
  }

  if (scrollValue > 0.85 && playOnce) {
    popup.style.opacity = 1;
    popup.style.transform = "none";
    playOnce = false;
  }
});

closeBtn.addEventListener("click", () => {
  popup.style.opacity = 0;
  popup.style.transform = "";
});
