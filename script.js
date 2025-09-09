document.addEventListener("DOMContentLoaded", function () {
  // Código para el menú de hamburguesa
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.getElementById("nav-links");

  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });

  // Código para el carrusel de imágenes
  const slides = document.querySelectorAll(".carousel-slide");
  let currentSlide = 0;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.remove("active");
      if (i === index) {
        slide.classList.add("active");
      }
    });
  }

  function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
  }

  // Iniciar el carrusel
  if (slides.length > 0) {
    showSlide(currentSlide);
    setInterval(nextSlide, 3000); // Cambia la imagen cada 3 segundos
  }
});
