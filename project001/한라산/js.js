$(document).ready(function(){
        // mianImg txt 나타나기/사라지기 
        $('.mainImg .txt1').addClass('on')
        $('.mainImg .txt2').delay(10000).addClass('on')

        // body의 높이값과 section의 가로값 통일시키기
        // article의 갯수 * article의 가로값 (margin) = section의 가로값
        let a = $(window).height();
        let aa= $(window).width();
        $('.main1').width(aa);
        $('.main1').height(a);
        $('.slide ul').width(aa);
        // $('h1 a').text(aa)

        $(window).resize(function(){
        // 화면이 리사이즈 될때마다 body의 높이값과 section의 가로값 통일시키기
        // article의 갯수 * article의 가로값 (margin) = section의 가로값
        let a = $(window).height();
        let aa= $(window).width();
        $('.main1').width(aa);
        $('.main1').height(a);
        $('.slide ul').width(aa);
        })
        //  2뎁스 메뉴 슬라이드
                $('.nav li').mouseenter(function(){
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
            })
            $('header').mouseenter(function(){
            $(this).css({'opacity':1})
            });
    
         // main3 (스크롤 인터랙션)이미지 슬라이드 설정  -------------실패-------------------
        $(window).scroll(function(){
            let sc=$(this).scrollTop()
            if(sc>=1300){
                $('.txt1 h2').fadeTo(1000,1);}
            if(sc>=1600){ 
                $('.txt1 strong').fadeTo(2500,1);}  //txt 각자 날아오기
            if(sc>=1800){
                $('.txt1 p').fadeTo(2500,1);}
            if(sc>=1300){
                $('.imgBox').fadeIn(2000)} //이미지 각자 날아오기
            if(sc==0){
                $('header').css({'opacity':1})
            }
            });

            // 메인4 이미지 슬라이드
            let i = 0
            $('.left1').click(function(){
                let cwd= $('.container').width()
                let ulwd= $('.container ul').width()
                if((cwd/3)*i<ulwd-1100){
                    i++;
                    $('.container .con1').css({'left':(-cwd/3)*i})
                    $('.container .con2').css({'left':(-cwd/2.5)*i})
                    $('.container .con3').css({'left':(-cwd/3)*i})}
            });
            $('.right1').click(function(){
                let cwd= $('.container').width()
                let ulwd= $('.container ul').width()
                if((cwd/3)*i>0){
                i--;
                $('.container .con1').css({'left':(-cwd/3)*i})
                $('.container .con2').css({'left':(-cwd/2.5)*i})
                $('.container .con3').css({'left':(-cwd/3)*i})}
            });
                
            // main3 이미지 mouseenter시 txt 변경
            $('.main3 figure').eq(0).mouseenter(function(){
                $('.main3 .txt1').css({'opacity':0})
                $('.main3 .txt2').css({'opacity':1})
            })
            $('.main3 figure').eq(0).mouseleave(function(){
                $('.main3 .txt1').css({'opacity':1})
                $('.main3 .txt2').css({'opacity':0})
            })
            $('.main3 figure').eq(1).mouseenter(function(){
                $('.main3 .txt1').css({'opacity':0})
                $('.main3 .txt3').css({'opacity':1})
            })
            $('.main3 figure').eq(1).mouseleave(function(){
                    $('.main3 .txt1').css({'opacity':1})
                    $('.main3 .txt3').css({'opacity':0})
            })   
            $('.main3 figure').eq(2).mouseenter(function(){
                $('.main3 .txt1').css({'opacity':0})
                $('.main3 .txt4').css({'opacity':1})
            })
            $('.main3 figure').eq(2).mouseleave(function(){
                    $('.main3 .txt1').css({'opacity':1})
                    $('.main3 .txt4').css({'opacity':0})
            }) 
            $('.main3 figure').eq(3).mouseenter(function(){
                $('.main3 .txt1').css({'opacity':0})
                $('.main3 .txt5').css({'opacity':1})
            })
            $('.main3 figure').eq(3).mouseleave(function(){
                    $('.main3 .txt1').css({'opacity':1})
                    $('.main3 .txt5').css({'opacity':0})
            });
            // 메인4 마우스호버 시 블러 사라지기
            $('.container li').mouseleave(function(){
                $(this).removeClass('on')})
            $('.container li').mouseenter(function(){
                $(this).addClass('on')
                })
            // 반응형 메뉴버튼
            let target = $(".navClon_box");
            // 버튼을 클릭하면 사이드바 열림
            $(document).on("click", "#openBtn", function(e){
                target.show();
                target.addClass('on');
            });
            // 사이드바 외부를 클릭하면 사이드바 닫힘
            $(document).mouseup(function(e){
                if(target.has(e.target).length==0) {
                    target.hide();
                    target.removeClass('on');
                };
            });

            // 지도클릭시 위젯 보이기
            $('.btn3').click(function(){
                $('.popup').fadeIn('1000');
                $('.popup').addClass('on')
            });
            $('.popup span').click(function(){
                $('.popup').fadeOut('fast')
                $('.popup').removeClass('on')
            })
          
          
            
})