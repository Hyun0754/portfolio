



$(document).ready(function(){
    $(window).scroll(function(){
        let sc = $(window).scrollTop()
        $('h1').text(sc);
    // $('section>article').eq(0).css({'transform':'translateZ('+(0+sc)+'px)'})
    // $('section>article').eq(1).css({'transform':'translateZ('+(-5000+sc)+'px)'})
    // $('section>article').eq(2).css({'transform':'translateZ('+(-10000+sc)+'px)'})
    // $('section>article').eq(3).css({'transform':'translateZ('+(-15000+sc)+'px)'})
    // $('section>article').eq(4).css({'transform':'translateZ('+(-20000+sc)+'px)'})
    

    // if(sc>=0 && sc<5000){
    //     $('section>article').removeClass('on')
    //     $('section>article').eq(0).addClass('on')
    //     $('.menu li').removeClass('on')
    //     $('.menu li').eq(0).addClass('on')
    //     }
    // if(sc>=5000 && sc<10000){
    //     $('section>article').removeClass('on')
    //     $('section>article').eq(1).addClass('on')
    //     $('.menu li').removeClass('on')
    //     $('.menu li').eq(1).addClass('on')
    //     }
    // if(sc>=10000 && sc<15000){
    //     $('section>article').removeClass('on')
    //     $('section>article').eq(2).addClass('on')
    //     $('.menu li').removeClass('on')
    //     $('.menu li').eq(2).addClass('on')
    //     }
    // if(sc>=15000 && sc<20000){
    //     $('section>article').removeClass('on')
    //     $('section>article').eq(3).addClass('on')
    //     $('.menu li').removeClass('on')
    //     $('.menu li').eq(3).addClass('on')
    //     }
    // if(sc>=20000){
    //     $('section>article').removeClass('on')
    //     $('section>article').eq(4).addClass('on')
    //     $('.menu li').removeClass('on')
    //     $('.menu li').eq(4).addClass('on')
    //     }

       // 반복문
        for(let a=0; a<5; a++){
        $('section>article').eq(a).css({'transform':'translateZ('+(-5000*a+sc)+'px)'})

        if(sc>=a*5000 && sc<(a+1)*5000){
        $('section>article').removeClass('on')
        $('section>article').eq(a).addClass('on')
        $('.menu li').removeClass('on')
        $('.menu li').eq(a).addClass('on')
        }
        }
        
    })

    $('.menu li').click(function(){
        let i = $(this).index();
        $('html,body').stop().animate({'scrollTop':5000*i},800)
    });

    
    $('body').mousemove(function(e){
        let X = e.pageX;

        let Y = e.pageY;

        $('.mouse').css({'left':X,'top':Y})

        
                
    //  {left: -200px;
    //     bottom: -100px;}
    //     .obj21 {left: -100px;
    //         top: -100px;}
    //     .obj31 {left: 100px;
    //         bottom: 20px;}
    //     .obj41 {left: 350px;
    //         bottom: -150px;}
    //     .obj51 {left: -100px;
    //         bottom: -300px;}


    $('.obj11').css({'left':-200+(X/20)+'px','bottom': -100+(-Y/20)+'px'})
    $('.obj21').css({})
    $('.obj31').css({})
    $('.obj41').css({})
    $('.obj51').css({})






    })

})