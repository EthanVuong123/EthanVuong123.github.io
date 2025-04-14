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
  corsair: 0,
  tradeshow: 0,
  aspb: 0
};

function moveSlide(direction, section) {
  const track = document.querySelector(`.${section}-track`);
  const slides = track.querySelectorAll(".carousel-slide");

  currentSlideIndex[section] += direction;

  if (currentSlideIndex[section] < 0) {
    currentSlideIndex[section] = slides.length - 1;
  } else if (currentSlideIndex[section] >= slides.length) {
    currentSlideIndex[section] = 0;
  }

  const offset = -currentSlideIndex[section] * 100;
  track.style.transform = `translateX(${offset}%)`;
}

function showHighlanderCon(event) {
  event.preventDefault(); //<--prevents scroll to top
  const gaming = document.getElementById("highlander-gaming");
  const con = document.getElementById("highlander-con");

  gaming.classList.remove("experience-block");
  con.classList.remove("experience-block");

  gaming.style.opacity = 0;

  setTimeout(() => {
    gaming.style.display = "none";
    con.style.display = "block";
    con.style.opacity = 0;
    con.classList.add("experience-block");

    setTimeout(() => {
      con.style.opacity = 1;
    }, 50);
  }, 300);
}

function showHighlanderGaming(event) {
  event.preventDefault(); //<--prevents scroll to top
  const gaming = document.getElementById("highlander-gaming");
  const con = document.getElementById("highlander-con");

  con.classList.remove("experience-block");
  gaming.classList.remove("experience-block");

  con.style.opacity = 0;

  setTimeout(() => {
    con.style.display = "none";
    gaming.style.display = "block";
    gaming.style.opacity = 0;
    gaming.classList.add("experience-block");

    setTimeout(() => {
      gaming.style.opacity = 1;
    }, 50);
  }, 300);
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
