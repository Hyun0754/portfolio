
$(document).ready(function(){
    let wd = $(window).width(); // 화면의 가로값
    let ht = $(window).height(); // 화면의 세로값
    $('.bg').width(wd);
    $('.bg').height(ht);
    $('.main4Box1>div').width(wd);
    $('.main4Box1>div').height(ht);
    let asz= $('.main4Box1>div').length();
    let awd = $('main4Box1>div').width();
    $('.main4Box4').height(asz*awd);
    
    // body의 높이값과 section의 가로값 통일시키기
    // article의 갯수 * article의 가로값 (margin) = section의 가로값
    $(window).scroll(function(){
        let sc = $(this).scrollTop();
        $('h1').text(sc)
        $('.main4Box1').stop().animate({'left':-sc},100)
        })
    $(window).resize(function(){
    // 화면이 리사이즈 될때마다 body의 높이값과 section의 가로값 통일시키기
    // article의 갯수 * article의 가로값 (margin) = section의 가로값
    let wd = $(window).height();
    let ht= $(window).width();
    $('.bg').width(wd);
    $('.bg').height(ht);
    $('.main4Box1>div').width(wd);
    $('.main4Box1>div').height(ht);
    $(window).scroll(function(){
        let sc = $(this).scrollTop();
        $('h1').text(sc)
        $('.main4Box1').stop().animate({'left':-sc},100)
        })
    });

})