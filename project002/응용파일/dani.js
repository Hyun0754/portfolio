// $(document).ready(function(){
//   let wd = $(window).width(); // 화면의 가로값
//   let ht = $(window).height(); // 화면의 세로값
//   let of = $('.main4').offset().top; //메인4의 오프셋값
//   // $('.box').maxwidth(wd)
//   // $('.box').height(ht)
//   // $('.main4>article').width(wd)
  
// $(window).scroll(function(){
//   let sc= $(window).scrollTop();
//   $('.bg').width(wd)
//   $('.bg').height(ht)
//   $('.h1').text(sc)
//   $('.h2').text(wd)
//   $('.h3').text(mht)
//   $('.h4').text(of)
//   })
// //  2뎁스 메뉴 슬라이드
// $('.navMenu li').mouseenter(function(){
//   let i=$(this).index()
//   console.log(i)
//   $('.none').stop().slideUp()
//   $('.none').stop().slideDown()
//   $('.submenu ul').removeClass('on')
//   $('.submenu ul').eq(i).addClass('on')
//   })
//   $('header').mouseleave(function(){
//   $('.none').stop().slideUp()
//   $('.submenu ul').removeClass('on')
//   $('.submenu ul').eq(i).addClass('on')
//   })
// // 메뉴바 사라지기
// $('header').mouseleave(function(){
//   $(this).css({'opacity':0.8})
//   });
// $('header').mouseenter(function(){
//   $(this).css({'opacity':1})
//   });
// $(window).scroll(function(){
//   $('.main1Box1').css({'top':600})
//   });
//   ////////////////////////////////////////////////////////////////////////////////
// });
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
});

////////////////////////////////////
////////////////////////////////////
window.addEventListener("load", function () {
  // let pinBoxes = document.querySelectorAll(".pin-wrap > *");
  let pinWrap = document.querySelector(".pin-wrap");
  let pinWrapWidth = pinWrap.offsetWidth;
  let hoz = pinWrapWidth - window.innerWidth;

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
});

