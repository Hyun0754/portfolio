$(document).ready(function(){
// 브라우저의 높이값 찾기
let ht=$(window).height();
console.log(ht);

// gnb의 높이를 찾아라
let gnbht=$('#gnb').height();
console.log(gnbht)

// gnbdml 가로값 찾기
let gnbwd=$('#gnb').width();
console.log(gnbwd)

$('section').height(ht)

// 브라우저가 리사이즈 될떄마다, 브라우저의 높이를 찾아
// section 높이값에 대입해라.
$(window).resize(function(){
    let ht=$(window).height();
    $('section').height(ht)
    })

// 마우스움직임 찾아내기
// .p11 {bottom: 20px; right: 20px;}
// .p12 {bottom: -40px; right: 130px;}
// .p13 {top:180px; right: 60px;}

// .p21 {bottom:-480px; right: -180px;}
// .p22 {bottom: -40px; right: 130px;}

// .p31 {bottom: 30px; right: 180px;}
// .p32 {bottom: 270px; right:110px;}
// .p33 {bottom: -130px; right: -70px;}

// .p41 {bottom: -120px; right: 20px;}
// .p42 {bottom: -180px; right: 0px;}

// section에서 마우스가 움직였을때, 이미지의 위치값을 바꾸어라.
$('section').mousemove(function(e){
let posx =e.pageX;
let posy =e.pageY

$('.box h2').eq(0).text(posx)
$('.box h2').eq(1).text(posy)

$('.p11').css({'bottom':20-posy/30, 'right':20-posx/30})
$('.p12').css({'bottom':posy/30, 'right':posx/30})
$('.p13').css({'top':180-posy/5, 'right': 60-posx/5})

$('.p21').css({'top':posy/5, 'left':posx/5})
$('.p22').css({'bottom':40+posy/30, right:130+posx/30})

$('.p31').css({'bottom':30-posy/30, 'right': 180-posx/30})
$('.p32').css({'bottom':270-posy/30, 'right':110-posx/30})
$('.p33').css({'bottom': 130-posy/30, 'right': 70-posx/30})

$('.p41').css({'bottom': 120-posy/30, 'right':20-posx/30})
$('.p42').css({'bottom': 180-posy/5, 'right':posx/5})




})

})