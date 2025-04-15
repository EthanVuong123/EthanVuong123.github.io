// Typewriter intro animation
const text = "Hi, I'm Ethan — a passionate event planner and creative builder.";
const speed = 50;
let index = 0;

function typeWriter() {
  if (index < text.length) {
    document.getElementById("typewriter").innerHTML += text.charAt(index);
    index++;
    setTimeout(typeWriter, 30);
  }
}

window.onload = function () {
  typeWriter();
};

// Carousel tracking
let currentSlideIndex = {
  gaming: 0,
  con: 0,
  corsair: 0,
  tradeshow: 0,
  aspb: 0,
  acc: 0
};

function moveSlide(direction, section) {
  const track = document.querySelector(`.${section}-track`);
  const slides = track.querySelectorAll(".carousel-slide");

  if (!track || slides.length === 0) return;

  currentSlideIndex[section] += direction;

  if (currentSlideIndex[section] < 0) {
    currentSlideIndex[section] = slides.length - 1;
  } else if (currentSlideIndex[section] >= slides.length) {
    currentSlideIndex[section] = 0;
  }

  const offset = -currentSlideIndex[section] * 100;
  track.style.transform = `translateX(${offset}%)`;
}

// Section toggle functions
function showHighlanderCon(event) {
  event.preventDefault();
  document.getElementById("highlander-gaming").style.display = "none";
  document.getElementById("highlander-con").style.display = "block";
}

function showHighlanderGaming(event) {
  event.preventDefault();
  document.getElementById("highlander-con").style.display = "none";
  document.getElementById("highlander-gaming").style.display = "block";
}

function showCorsairTradeShows(event) {
  event.preventDefault();
  document.getElementById("corsair-overview").style.display = "none";
  document.getElementById("corsair-tradeshows").style.display = "block";
}

function showCorsairOverview(event) {
  event.preventDefault();
  document.getElementById("corsair-tradeshows").style.display = "none";
  document.getElementById("corsair-overview").style.display = "block";
}
