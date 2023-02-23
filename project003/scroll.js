console.clear();
gsap.registerPlugin("ScrollTrigger");
let wheel = document.querySelector(".wheel");
let images = gsap.utils.toArray(".wheel__card");
gsap.to(".arrow", { y: 5, ease: "power1.inOut", repeat: -1, yoyo: true });
function setup() {
  let radius = wheel.offsetWidth / 2;
  let center = wheel.offsetWidth / 2
  let total = images.length;
  let slice = (2 * Math.PI) / total;
  images.forEach((item, i) => {
    let angle = i * slice;
    let x = center + radius * Math.sin(angle);
    let y = center - radius * Math.cos(angle);
    gsap.set(item, {
      rotation: angle + "_rad",
      xPercent: -50,
      yPercent: -50,
      x: x,
      y: y
    });
  });
}
setup();

window.addEventListener("resize", setup);
gsap.to(".wheel", {
  rotate: () => -360,
  ease: "none",
  duration: images.length,
  scrollTrigger: {
    start: 0,
    end: "max",
    scrub: 1,
    snap: 1 / images.length,
    invalidateOnRefresh: true
  }
});
let cards = gsap.utils.toArray(".wheel__card");
let isFullScreen = false;
// keep track of last clicked card so we can put it back
let lastClickedCard;
cards.forEach((card) => {
  card.addEventListener("click", (e) => {
    if (lastClickedCard) {
      putBack(e);
    }
    flip(e);
  });
});
function putBack(e) {
  let image = header.querySelector("img");
  let state = Flip.getState(image);
  lastClickedCard.appendChild(image);
  Flip.from(state, {
    duration: 0.6,
    ease: "sine.out",
    absolute: true
  });
  lastClickedCard = null;
}
function flip(e) {
  let image = e.target.querySelector("img");
  let state = Flip.getState(image);
  header.appendChild(image);
  Flip.from(state, {
    duration: 0.6,
    ease: "sine.out",
    absolute: true
  });
  lastClickedCard = e.target;
}