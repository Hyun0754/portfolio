$(document).ready(function(){
    let of = $('.main4Box').offset().top;
    let ht = $(window).height()
    let wd = $(window).width()
    $('section').height(ht)
    $('section').width(wd)
    $('.main4Con>article').height(ht)
    $('.main4Con>article').width(wd)
    $('.main4Con').height(ht)
    $('.main4Con').width('article.size')
    $(window).resize(function(){
        $("body").smoothWheel()  
        let ht = $(window).height()
        let wd = $(window).width()
        $('section').height(ht)
        $('section').width(wd)
        $('.main4Con>article').height(ht)
        $('.main4Con>article').width(wd)
        });
        $(window).scroll(function(e){
            e.preventDefault()
            let ht = $(window).height()
            let sc = $(this).scrollTop();
            let uwd = $('.main4Con').width();
            $('body').height((ht*4)+uwd);
            if(sc>=of){
            $('#wrap').addClass('on');
            $('.main4Con').css({'left':of-sc})
            }
            if(sc<of){
            $('#wrap').removeClass('on');
            }
        })
    })