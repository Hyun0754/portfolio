$(document).ready(function(){
    let of = $('.scroll').offset().top;
    let ht = $(window).height()
    let wd =$(window).width()
    $(window).resize(function(){
        $("body").smoothWheel()
        let ht = $(window).height()
        });
        // $(window).scroll(function(e){
        //     e.preventDefault()
        //     let ht = $(window).height()
        //     let sc = $(this).scrollTop();
        //     let uwd = $('ul').width();
            
        //     $('h1').text(sc);
        //     $('h2>span').text(uwd)
        //     $('h4>span').text(of)
        //     $('body').height((ht*2.33)+uwd);
        //     if(sc>=of){
        //     $('#wrap').addClass('on');
        //     $('ul').css({'left':of-sc})
        //     }
        //     if(sc<of){
        //     $('#wrap').removeClass('on');
        //     }
        // })
    })