const circles = document.querySelectorAll(".circle");

circles.forEach((circle) => {
  const progress = circle.getAttribute("data-progress");
  const color = circle.getAttribute("data-color");

  circle.style.setProperty("--color", color);

  let count = 0;
  const number = circle.querySelector(".number");

  const interval = setInterval(() => {
    if (count >= progress) {
      clearInterval(interval);
    } else {
      count++;
      number.textContent = count;

      circle.style.background = `conic-gradient(${color} ${count * 3.6}deg, #2a2a3d 0deg)`;
    }
  }, 20);
});

const buttons = document.querySelectorAll(".mbc-buttons");

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    buttons.forEach((b) => {
      b.classList.remove("active");
    });

    btn.classList.add("active");
  });
});

/* =========================
   REVIEWS CAROUSEL
========================= */

const reviewTrack = document.querySelector(".top-reveiws");

const reviewCards = document.querySelectorAll(".top-reveiws-card");

const nextBtn = document.querySelector(".next-btn");

const prevBtn = document.querySelector(".prev-btn");

let currentIndex = 0;

const reviewCardWidth = reviewCards[0].offsetWidth + 20;

function moveCarousel() {
  reviewTrack.style.transform = `translateX(-${currentIndex * reviewCardWidth}px)`;
}

setInterval(() => {
  currentIndex++;

  if (currentIndex >= reviewCards.length - 2) {
    currentIndex = 0;
  }

  moveCarousel();
}, 2500);

if (nextBtn) {
  nextBtn.addEventListener("click", () => {
    currentIndex++;

    if (currentIndex >= reviewCards.length - 2) {
      currentIndex = 0;
    }

    moveCarousel();
  });
}

if (prevBtn) {
  prevBtn.addEventListener("click", () => {
    currentIndex--;

    if (currentIndex < 0) {
      currentIndex = 0;
    }

    moveCarousel();
  });
}
