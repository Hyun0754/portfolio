// 제이쿼리 시작

$(document).ready(function(){
    // container 안에 li를 클릭했을 때 각 순번 찾기
    $('.container li').click(function(){
        let i= $(this).index()
        console.log(i)
    // 변환받은 i값을 gallery img의 p값에 부여해라
    // 변환받은 p값은 보여라
    $('.box_img p').fadeOut('slow')
    $('.box_img p').eq(i).fadeIn('fast') //fadeIn은 서서히보여라, fadeOut은 서서히사라져라(속도)
    });

    // left를 클릭하면 일정거리만큼 container를 움직여라.
    let a = 0;
    $('.left').click(function(){
        if(a<14)a++;
        let wd = $('.container li').width()
        console.log (a)
        $('.container ul').css({'left':(-wd)*a});
        $('.box_img p').fadeOut('slow')
        $('.box_img p').eq(a).fadeIn('fast')
    });

    $('.right').click(function(){
        if(a>0)a--;
        console.log(a)
        let wd = $('.container li').width()
        $('.container ul').css({'left':(-wd-1.7)*a})
        $('.box_img p').fadeOut('slow')
        $('.box_img p').eq(a).fadeIn('fast')
    });

    // 자동으로 box_img p가 순차적으로 보여라.
    // setInterval(함수,지연시간)

    let b = 0
    setInterval(function(){
        if(b<18)b++;
        if(b==18)b=0;
        console.log(b)
        $('.box_img p').fadeOut('fast')
        $('.box_img p').eq(b).fadeIn('slow')
        
    },2000)

})