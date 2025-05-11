let salideIndex = 0;
const salides = document.getElementsByClassName("salide");
const dots = document.getElementsByClassName("dot");

function showSalides() {
  for (let i = 0; i < salides.length; i++) {
    salides[i].style.display = "none";
  }

  salideIndex++;
  if (salideIndex > salides.length) salideIndex = 1;

  for (let i = 0; i < dots.length; i++) {
    dots[i].classList.remove("active");
  }

  salides[salideIndex - 1].style.display = "block";
  dots[salideIndex - 1].classList.add("active");

  setTimeout(showSalides, 3000); // Change salide every 3 seconds
}

showSalides();
