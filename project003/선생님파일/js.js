$(document).ready(function(){
        let wd = $(window).width();
        let sNo = $('section').size();
        let ht = $(window).height()

        //$('.box').height(ht)
        //$('.box2').width(wd)
        //$('.box2').height(ht)
        $('section').width(wd)
        $('#wrap').height(ht)
        $('#wrap').width(wd*sNo)
        $('body').height(wd*sNo)
        
    $('header li').click(function(){
        let a= $(this).index()
        $('#wrap').css({'left':-wd*a})
    });
    for(var i=0; i<31; i++){
        $('.box div').eq(i).css({'transform':'rotate('+12*i+'deg)'})
        }
    });
    $(window).scroll(function(){
        let sc = $(window).scrollTop()
        let bht = $('body').height()
        let scNum = sc/bht*360
        let scCNum = scNum/i
        let sNum = Math.floor(scCNum)
        $('.box').css({'transform':'rotate('+scNum+'deg)'})
        $('.box>div').eq(sNum).css({'transform':'rotate('+-scNum/2+'deg)'})
    });