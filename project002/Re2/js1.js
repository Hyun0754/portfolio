$(document).ready(function(){
    $(document).ready(function(){
        let wd = $(window).width(); // 화면의 가로값
        let ht = $(window).height();// 화면의 세로값
        $('section').width(wd);
        $('section').height(ht);
        $('.main4Box>article').width(wd);
        $('.main4Box>article').height(ht);
    })
    $(window).resize(function(){
        let wd = $(window).width(); // 화면의 가로값
        let ht = $(window).height();// 화면의 세로값
        $('section').width(wd);
        $('section').height(ht);
        $('.main4Box>article').width(wd);
        $('.main4Box>article').height(ht);
        })
    let elm = ".main4Box>article";
        $(elm).each(function (index) {
            // 개별적으로 Wheel 이벤트 적용
            $(this).on("mousewheel", function(e){
                let delta = 0;
                e.preventDefault();
                if (event.wheelDelta) {
                    delta = event.wheelDelta / 120;
                } 
                else if (event.detail)
                    delta = -event.detail / 3;
                let moveTop = $(window).scrollLeft();
                let elmSelecter = $(elm).eq(index);
                // 마우스휠을 위에서 아래로
                if (delta < 0) {
                    if ($(elmSelecter).next() != undefined) {
                        try{
                            moveTop = $(elmSelecter).next().offset().left;
                        }catch(e){}
                    }
                // 마우스휠을 아래에서 위로
                } else {
                    if ($(elmSelecter).prev() != undefined) {
                        try{
                            moveTop = $(elmSelecter).prev().offset().left;
                        }catch(e){}
                    }
                }
                // 화면 이동 0.8초(800)
                $("html,body").stop().animate({
                    scrollLeft: moveTop + 'px'
                }, {
                    duration: 1000, complete: function () {
                    }
                });
            });
        });
});