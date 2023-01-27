$(document).ready(function(){
    // 버튼 클릭시 box 회전 (45deg)
    let i = 0
    $('.left').click(function(){
        i++;
        $('.box').css({'transform':'rotateY('+i*45+'deg)'})
        });
    $('.right').click(function(){
        i--;
        $('.box').css({'transform':'rotateY('+i*45+'deg)'})
        });
    
        function timer(){
        $('.right').trigger('click')
        };
    let slide = setInterval(timer,1000);
    // 마우스가 inner에 들어갔을 때 setInterval 클리어.
    $('.inner').mouseenter(function(){
        clearInterval(slide)
        });
    // 마우스가 떠났을 때 setInterval 다시 작동
    $('.inner').mouseleave(function(){
        slide = setInterval(timer,1000);
        });
});