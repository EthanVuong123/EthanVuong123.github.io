const text = "Hi, I'm Ethan — a passionate event planner and creative builder.";
const speed = 50;
let i = 0;

function typeWriter() {
  if (i < text.length) {
    document.getElementById("typewriter").innerHTML += text.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

window.onload = typeWriter;

let currentSlideIndex = {
  gaming: 0,
  con: 0
};

function moveSlide(direction, section) {
  const slides = document.querySelectorAll(`.${section}-track .carousel-slide`);
  currentSlideIndex[section] += direction;

  if (currentSlideIndex[section] < 0) {
    currentSlideIndex[section] = slides.length - 1;
  } else if (currentSlideIndex[section] >= slides.length) {
    currentSlideIndex[section] = 0;
  }

  const offset = -currentSlideIndex[section] * 100;
  document.querySelector(`.${section}-track`).style.transform = `translateX(${offset}%)`;
}

function showHighlanderCon() {
  document.getElementById("highlander-gaming").style.display = "none";
  document.getElementById("highlander-con").style.display = "block";
}

function showHighlanderGaming() {
  document.getElementById("highlander-con").style.display = "none";
  document.getElementById("highlander-gaming").style.display = "block";
}
