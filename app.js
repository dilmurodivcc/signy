window.addEventListener("scroll", () => {
    const navbar = document.getElementById("navbar");
    if (window.scrollY > 50) {
      navbar.classList.add("shrink");
    } else {
      navbar.classList.remove("shrink");
    }
  });
  

  const carouselContainer = document.querySelector('.carousel-container');
  const indicators = document.querySelectorAll('.indicator');
  const itemsPerSlide = 4;
  let currentIndex = 0;
  
  function updateCarousel() {
    const offset = currentIndex * -308 * itemsPerSlide; // Har bir slaydning kengligi: 308px
    carouselContainer.style.transform = `translateX(${offset}px)`;
  
    // Indikatorlarni yangilash
    indicators.forEach((indicator, index) => {
      indicator.classList.toggle('active', index === currentIndex);
    });
  }
  
  // Indikatorlarni bosganda slaydni o'zgartirish
  indicators.forEach((indicator) => {
    indicator.addEventListener('click', () => {
      currentIndex = parseInt(indicator.getAttribute('data-index'), 10);
      updateCarousel();
    });
  });
  
  // Boshlang'ich holatni yangilash
  updateCarousel();
  
