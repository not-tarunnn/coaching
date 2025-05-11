gsap.registerPlugin(ScrollTrigger);

document.addEventListener("DOMContentLoaded", () => {
  const scrollSlideshow = document.querySelector(".scroll-slideshow");
  const slides = scrollSlideshow.querySelectorAll(".slide");

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.toggle("active", i === index);
    });
  }

  // Set the first image visible immediately
  showSlide(0);

  const totalSlides = slides.length;
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: scrollSlideshow,
      start: "top top",
      end: `+=${(totalSlides - 1) * 100}%`,
      scrub: true,
      pin: true,
      onUpdate: (self) => {
        const progress = self.progress;
        const slideIndex = Math.round(progress * (totalSlides - 1));
        showSlide(slideIndex);
      }
    }
  });
});
