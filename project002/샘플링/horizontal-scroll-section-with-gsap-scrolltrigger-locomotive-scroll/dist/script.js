gsap.registerPlugin(ScrollTrigger);

let pageContainer = document.querySelector(".container");
/* SMOOTH SCROLL */
let scroller = new LocomotiveScroll({
  el: pageContainer,
  smooth: true
});
scroller.on("scroll", ScrollTrigger.update);
ScrollTrigger.scrollerProxy(pageContainer, {
  scrollTop(value) {
    return arguments.length
      ? scroller.scrollTo(value, 0, 0)
      : scroller.scroll.instance.scroll.y;
  },
  // getBoundingClientRect() {
  //   return {
  //     left: 0,
  //     top: 0,
  //     width: window.innerWidth,
  //     height: window.innerHeight
  //   };
  // },
  // pinType: pageContainer.style.transform ? "transform" : "fixed"
});

////////////////////////////////////
////////////////////////////////////
window.addEventListener("load", function () {
  // let pinBoxes = document.querySelectorAll(".pin-wrap > *");
  let pinWrap = document.querySelector(".pin-wrap");
  let pinWrapWidth = pinWrap.offsetWidth;
  let hoz = pinWrapWidth - window.innerWidth;

  // Pinning and horizontal scrolling

  gsap.to(".pin-wrap", {
    scrollTrigger: {
      scroller: pageContainer, //locomotive-scroll
      scrub: true,
      trigger: "#sectionPin",
      pin: true,
      // anticipatePin: 1,
      start: "top top",
      end: pinWrapWidth
    },
    x: -hoz,
    ease: "none"
  });

  // ScrollTrigger.addEventListener("refresh", () => scroller.update()); //locomotive-scroll

  // ScrollTrigger.refresh();
});