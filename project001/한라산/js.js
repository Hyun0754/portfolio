$(document).ready(function(){
        // body의 높이값과 section의 가로값 통일시키기
        // article의 갯수 * article의 가로값 (margin) = section의 가로값

        let a = $(window).height();
        let aa= $(window).width();
       $('h1 a').text(aa)
        $('.main1').width(aa);
        $('.main1').height(a);

        $(window).resize(function(){
        // 화면이 리사이즈 될때마다 body의 높이값과 section의 가로값 통일시키기
        // article의 갯수 * article의 가로값 (margin) = section의 가로값
        let a = $(window).height();
        let aa= $(window).width();
        $('.main1').width(aa);
        $('.main1').height(a);
         })


        
        // slide 안에 li를 클릭했을 때 각 순번 찾기
        $('.slide li').click(function(){
        let i= $(this).index()
        });
       
        let b = 0;
        // left를 클릭했을 때 슬라이드
        $('.left').click(function(){
        if(b<8) b++;
        console.log(b)
        let wd = $('.slide li').width()
        $('.slide .load').css({'left':(-wd)*b});
        })

         // right를 클릭했을 때 슬라이드
         $('.right').click(function(){
                if(b>0) b--;
                console.log(b)
                let wd = $('.slide li').width()
                $('.slide li').css({'left':(-wd)*b});
                })

});