$(document).ready(function(){
        // body의 높이값과 section의 가로값 통일시키기
        // article의 갯수 * article의 가로값 (margin) = section의 가로값
        let wd= $(window).width();
        $('.main1').width(wd);

        $(window).resize(function(){
        // 화면이 리사이즈 될때마다 body의 높이값과 section의 가로값 통일시키기
        // article의 갯수 * article의 가로값 (margin) = section의 가로값
        let wd= $(window).width();
        $('.main1').width(wd);
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
                })
        // 메뉴바 사라지기
        $('header').mouseleave(function(){
            $(this).css({'opacity':0.8})
            })
            $('header').mouseenter(function(){
            $(this).css({'opacity':1})
            });
        // 메인2 이미지 호버시 텍스트 보이기
        $('.infoImg li').mouseenter(function(){
            let li = $(this).index()
            console.log(li)
            $('.infoTxt li').eq(li).fadeIn('fast')
            $('.infoImg li').removeClass('on')
            $('.infoImg li').eq(li).addClass('on')
        });
        $('.infoImg li').mouseleave(function(){
            let li = $(this).index()
            console.log(li)
            $('.infoTxt li').eq(li).fadeOut('fast')
        });
        //아이콘 슬라이드 및 스크롤 효과
        $(window).scroll(function(){
            let sc= $(window).scrollTop()
            let target = $('.main2').offset().top+200;
            console.log(target)
            if(sc>target){
                $('.iconBg').fadeIn('slow')
            }else{$('.iconBg').fadeOut('slow')}
        });
        //슬라이드 호버 1단 정보 변경
        $('.load li').mouseenter(function(){
            let loadcount = $(this).index()
            console.log(loadcount)
            $('.loadInfo>div').removeClass('on')
            $('.loadInfo>div').eq(loadcount).addClass('on')
        });
        //핫알림 버튼 슬라이드
        $('.dot li').click(function(){
            let btncount = $(this).index()
            let itemwd = $('.item').width()
            console.log(btncount)
            $('.items').css({'left':-itemwd*btncount})
            
            $('.dot li').removeClass('on')
            $('.dot li').eq(btncount).addClass('on')})
           
        //핫알림2 슬라이드
            let noti = 0
            $('.container1 .left').click(function(){
                if (noti < 8)noti++;
                    let notwd = $('.items div').width()
                    console.log(notwd)
                    $('.items1').css({"left": (-notwd) * noti});
                  }
                );
            $('.container1 .right').click(function(){
                if (noti > 0) noti--;
                    let notwd = $('.items div').width()
                    console.log(notwd)
                    $('.items1').css({"left": (-notwd) * noti});
                    }
                );
                
        // 지도클릭시 위젯 보이기
            $('.btn3').click(function(){
                $('.popup').fadeIn('1000');
                $('.popup').addClass('on')
            });
            $('.popup span').click(function(){
                $('.popup').fadeOut('fast')
                $('.popup').removeClass('on')
            })
          
        //모바일햄버거
        let target = $(".mobilemenu");
            $('.ham').click(function(){
                $('.mobilemenu').fadeIn('slow')
            })
            $(document).mouseup(function(e){
                if(target.has(e.target).length==0) {
                    target.hide();
                    target.removeClass('on');
                };
            });
})