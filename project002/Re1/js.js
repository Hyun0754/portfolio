$(document).ready(function(){
    let of = $('.main4Box').offset().top;
    let wd = $(window).width(); // 화면의 가로값
    let ht = $(window).height();// 화면의 세로값
    $('section').width(wd);
    $('section').height(ht);
    $('.ul>article').width(wd);
    $('.ul>article').height(ht);

    $(window).resize(function(){
        let wd = $(window).width(); // 화면의 가로값
        let ht = $(window).height();// 화면의 세로값
        $("body").smoothWheel()
        $('section').width(wd);
        $('section').height(ht);
        $('.ul>article').width(wd);
        $('.ul>article').height(ht);
        })
$(window).scroll(function(e){
    e.preventDefault()
    let sc = $(this).scrollTop();
    let ht = $(window).height()
    let wd = $('.ul').width()
    $('body').height((ht*1)+wd);
    if (sc >= of){
    $('#wrap').addClass('on');
    $('.ul').css({'left':of-sc});
    }
    if(sc<of){
    $('#wrap').removeClass('on');
    }
    });
});