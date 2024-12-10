window.addEventListener("scroll", () => {
    const navbar = document.getElementById("navbar");
    if (window.scrollY > 50) {
      navbar.classList.add("shrink");
    } else {
      navbar.classList.remove("shrink");
    }
  });
  

//   const carouselContainer = document.querySelector('.carousel-container');
//   const indicators = document.querySelectorAll('.indicator');
//   const itemsPerSlide = 4;
//   let currentIndex = 0;
  
//   function updateCarousel() {
//     const offset = currentIndex * -308 * itemsPerSlide; // Har bir slaydning kengligi: 308px
//     carouselContainer.style.transform = `translateX(${offset}px)`;
  
//     // Indikatorlarni yangilash
//     indicators.forEach((indicator, index) => {
//       indicator.classList.toggle('active', index === currentIndex);
//     });
//   }
  
//   // Indikatorlarni bosganda slaydni o'zgartirish
//   indicators.forEach((indicator) => {
//     indicator.addEventListener('click', () => {
//       currentIndex = parseInt(indicator.getAttribute('data-index'), 10);
//       updateCarousel();
//     });
//   });
  
//   // Boshlang'ich holatni yangilash
//   updateCarousel();
  
const heroSection = document.querySelector(".hero");
const paginationDots = document.querySelectorAll(".dot");
const num = document.querySelectorAll(".num");

// Rasm ro'yxati
const backgrounds = [
  " url(../../assets/images/box.png)",
  " url(../../assets/images/box2.png)",
  " url(../../assets/images/box3.png)"
];

let currentIndex = 0;
let startX = 0;
let endX = 0;

// Ekranda swiping hodisalarini boshqarish
heroSection.addEventListener("mousedown", (e) => {
  startX = e.clientX;
});

heroSection.addEventListener("mouseup", (e) => {
  endX = e.clientX;
  handleSwipe();
});

heroSection.addEventListener("touchstart", (e) => {
  startX = e.touches[0].clientX;
});

heroSection.addEventListener("touchend", (e) => {
  endX = e.changedTouches[0].clientX;
  handleSwipe();
});

function handleSwipe() {
  if (startX > endX + 50) {
    // Chapga siljish
    currentIndex = (currentIndex + 1) % backgrounds.length;
  } else if (startX < endX - 50) {
    // O'ngga siljish
    currentIndex = (currentIndex - 1 + backgrounds.length) % backgrounds.length;
  }

  updateBackground();
}

function updateBackground() {
  heroSection.style.backgroundImage = backgrounds[currentIndex];
  paginationDots.forEach((dot, i) => {
    dot.classList.toggle("active", i === currentIndex);
  });
}


const steps = document.querySelectorAll(".step");
let currentStep = 0;

function changeStep(index) {
  steps.forEach((step, i) => {
    if (i === index) {
      step.classList.add("active");
    } else {
      step.classList.remove("active");
    }
  });
}
dots.forEach((num, index) => {
  if (index === currentIndex) {
    dot.classList.add("active");
  } else {
    dot.classList.remove("active");
  }
});


// Step-larni scroll orqali boshqarish
window.addEventListener("scroll", () => {
  const scrollPosition = window.scrollY;
  const newStep = Math.floor(scrollPosition / window.innerHeight);

  if (newStep !== currentStep) {
    currentStep = newStep;
    changeStep(currentStep);
  }
});

// Yoki faqat step-larni bosganda o'zgarishi uchun
steps.forEach((step, index) => {
  step.addEventListener("click", () => changeStep(index));
});
