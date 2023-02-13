$(document).ready(function(){
    let wd = $(window).width(); // 화면의 가로값
    let ht = $(window).height(); // 화면의 세로값
    
$(window).scroll(function(){
    let sc= $(window).scrollTop();
    $('.bg').width(wd)
    $('.bg').height(ht)
    $('section').width(wd)
    $('section').height(ht)
    $('.h1').text(sc)
    $('.h2').text(wd)
    $('.h3').text(mht)
    $('.h4').text(os)
    })
//  2뎁스 메뉴 슬라이드
$('.nav li').mouseenter(function(){
    let i=$(this).index()
    // console.log(i)
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
$(window).scroll(function(){
    $('.main1Box1').css({'top':600})
    });
    ////////////////////////////////////////////////////////////////////////////////

});