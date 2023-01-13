

$(document).ready(function(){
// 갤러리이미지 움직임설정
// 왼쪽버튼 클릭시 이미지 왼쪽 이동
    let i =0
    let a= 0
$('.gallery .left').click(function(){
    if(i<5)i++;
    let gwd = $('.gallery li').width()

    $('.gallery ul').stop().animate({'left':i*-(gwd+5)},200)
    $('.gallery li').removeClass('on')
    $('.gallery li').eq(i).addClass('on')
    $('.gallery li').eq(i-1).animate({'opacity':0},100)
    })

// 오른쪽버튼 클릭시 이미지 오른쪽 이동
$('.gallery .right').click(function(){
    if(i>0) i--;
    let gwd = $('.gallery li').width()

    $('.gallery ul').stop().animate({'left':i*-(gwd+5)},200)
    $('.gallery li').removeClass('on')
    $('.gallery li').eq(i).addClass('on')
    $('.gallery li').eq(i).animate({'opacity':1},100)
    })
// 리뷰영역 버튼
// 왼쪽버튼 클릭시 이미지 왼쪽 이동
$('.review .left').click(function(){
    if(i<2)i++;
    let gwd = $('.review li').width()

    $('.review ul').stop().animate({'left':i*-(gwd+5)},600)
    $('.review li').removeClass('on')
    $('.review li').eq(i).addClass('on')
    $('.review li').eq(i-1).animate({'opacity':0},800)
    })

// 오른쪽버튼 클릭시 이미지 오른쪽 이동
$('.review .right').click(function(){
    if(i>0)i--; 
    let gwd = $('.review li').width()
    
    $('.review ul').stop().animate({'left':i*-(gwd+5)},600)
    $('.review li').removeClass('on')
    $('.review li').eq(i).addClass('on')
    $('.review li').eq(i).animate({'opacity':1},100)
    })



})