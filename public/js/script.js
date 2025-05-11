// Wait until the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.getElementById('menuToggle');
  const navMenu = document.getElementById('navMenu');

  // Toggle menu for mobile
  if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', () => {
      navMenu.classList.toggle('active');
    });
  }

  // Handle delayed closing of dropdowns
  document.querySelectorAll('.dropdown').forEach(dropdown => {
    let timeout;

    dropdown.addEventListener('mouseenter', () => {
      clearTimeout(timeout);
      dropdown.classList.add('open');
    });

    dropdown.addEventListener('mouseleave', () => {
      timeout = setTimeout(() => {
        dropdown.classList.remove('open');
      }, 5000); // Delay in ms before dropdown closes
    });
  });
});

let currentIndex = 0;
const slides = document.getElementsByClassName("slide");
const dots = document.getElementsByClassName("dot");

function showSlide(index) {
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    dots[i].classList.remove("active");
  }
  slides[index].style.display = "block";
  dots[index].classList.add("active");
  currentIndex = index;
}

function autoSlide() {
  currentIndex = (currentIndex + 1) % slides.length;
  showSlide(currentIndex);
}

showSlide(0); // initial
setInterval(autoSlide, 4000); // every 4s

