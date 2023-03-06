
$(document).ready(function(){
        let wd = $(window).width(); // 화면의 가로값
        let ht = $(window).height(); // 화면의 세로값
        let of = $('.main4').offset().top; //메인4의 오프셋값
        // $('.box').maxwidth(wd)
        // $('.box').height(ht)
        // $('.main4>article').width(wd)
        let os = $('.main4').offset().top; //메인4의 오프셋값
        // $('.box').maxwidth(wd)
        $('.box').height(ht)
        $('.main4>article').width(wd)
        let mht = $('.main4').height(ht)
        //0306
        
    $(window).scroll(function(){
        let sc= $(window).scrollTop();
        $('.bg').width(wd)
        $('.bg').height(ht)
        $('.h1').text(sc)
        $('.h2').text(wd)
        $('.h3').text(mht)
        $('.h4').text(of)
        });
    //  2뎁스 메뉴 슬라이드
    $('.navMenu li').mouseenter(function(){
        let i=$(this).index()
        console.log(i)
        $('.none').stop().slideUp()
        $('.none').stop().slideDown()
        $('.submenu ul').removeClass('on')
        $('.submenu ul').eq(i).addClass('on')
        })
        $('header').mouseleave(function(){
        $('.none').stop().slideUp()
        $('.submenu ul').removeClass('on')
        $('.submenu ul').eq(i).addClass('on')
        })
    // 메뉴바 사라지기
    $('header').mouseleave(function(){
        $(this).css({'opacity':0.8})
        });
    $('header').mouseenter(function(){
        $(this).css({'opacity':1})
        });
    $("body").smoothWheel()
        //////////////////////////////////////////////////////
});

// gsap.registerPlugin(ScrollTrigger);
// let pageContainer = document.querySelector('.wrap');
// /* SMOOTH SCROLL */
// let scroller = new LocomotiveScroll({
//   el: pageContainer,
//   smooth: true});
// scroller.on("scroll", ScrollTrigger.update);
// ScrollTrigger.scrollerProxy(pageContainer, {
//   scrollTop(value) {
//     return arguments.length
//       ? scroller.scrollTo(value, 0, 0)
//       : scroller.scroll.instance.scroll.y;
//   },
// });
// ////////////////////////////////////
// ////////////////////////////////////
// window.addEventListener("load", function () {
//   let pinWrap = document.querySelector(".container");
//   let pinWrapWidth = pinWrap.offsetWidth;
//   let hoz = pinWrapWidth - window.innerWidth;

//   // Pinning and horizontal scrolling

//   gsap.to(".container", {
//     scrollTrigger: {
//       scroller: pageContainer, //locomotive-scroll
//       scrub: true,
//       trigger: ".main4",
//       pin: true,
//       // anticipatePin: 1,
//       start: "top top",
//       end: pinWrapWidth
//     },
//     x: -hoz,
//     ease: "none"
//   });
// });