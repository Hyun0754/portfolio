$(document).ready(function(){
    //윈도우의 넓이, 높이 
    let wd = $(window).width() //1425
    let ht = $(window).height() 
    //box의 넓이, 높이
    let bht = wd*0.618 //880
    let area1 = bht/2 //440
    //메인2의 넓이와 높이
    let main2wd = wd-bht //555
    //area3의 높이
    let area3ht = bht*0.618
    //area3Box1의 높이
    let area3Boxht = area3ht/2
    //area4의 높이
    let area4ht = bht-main2wd
    let mokupLineWd= bht*0.618
    let mokupBox = bht-mokupLineWd
    ////////////////////////////////////////
    //스크롤시 변화되는 변수
    let area2htCh = bht-area3Boxht
    //명함
    $('.box').width(wd) //1425
    //박스의 높이는 박스의 넓이 * 0.618과 같다
    $('.box').height(bht) //870
    //www의 넓이
    $('.www').width(wd)
    //메인1의 넓이,높이
    //메인1의 넓이는 박스의 높이와 같다
    $('.main1').width(bht) //870
    $('.main1').height(bht) //870
    //area1의 넓이와 높이
    $('.area1').width()
    $('.area1').height(area1) //435
    //area2의 넓이와 높이
    $('.area2').width()
    $('.area2').height(area1) //435
    //mokupLine의 넓이
    $('.mokupLine').width(mokupLineWd)
    $('.mokupBox').width(mokupBox)
    //메인2의 넓이와 높이
    $('.main2').width(main2wd)
    $('.main2').height(main2wd)
    //area3의 넓이와 높이
    $('.area3').width()
    $('.area3').height(main2wd)
    //area3Box1 넓이와 높이
    $('.area3Box1').height(area3Boxht)
    //area3Box2 넓이와 높이
    $('.area3Box2').height(area3Boxht)
    //area4의 넓이와 높이
    $('.area4').width()
    $('.area4').height(area4ht)
    
    
    //메뉴호버효과 
    $('.menu li a').click(function(){
        let click = $(this).index()
        console.log(click)
        $('.menu li a').removeClass('on')
        $(this).addClass('on')
    })
    //메뉴 클릭시 이동
    $(".menu li:nth-child(1)").click(function() {
        $('html,body').animate({scrollTop: 0},'slow');});
    $(".menu li:nth-child(2)").click(function() {
        $('html,body').animate({scrollTop: 601},'slow');});
    $(".menu li:nth-child(3)").click(function() {
        $('html,body').animate({scrollTop: 2701},'slow');});
    $(".menu li:nth-child(4)").click(function() {
        $('html,body').animate({scrollTop: 4001},'slow');});


    //스크롤 인터랙션
    $('body,html').stop().animate({'scrollTop':0},800)
    $(window).scroll(function(){
        let sc = $(window).scrollTop()
        $('.scroll').text(sc)
        if(sc>0){
            $('.box').css({'top':'0'})
            $('.box').css({'transform':'translateZ(0px)'})
            $('.etc').show()
            $('.wrap').css({'perspective':'none'})
            $('.box').css({'position':'fixed'})
            $('.area1>div').removeClass('on')
            $('.area1>div:nth-child(1)').addClass('on')
        }else if(sc<100){
            $('.box').css({'top':'-200px'})
            $('.box').css({'transform':'translateZ(-300px)'})
            $('.etc').hide()
            $('.wrap').css({'perspective':'3000px'})
            $('.box').css({'position':'absolute'})
            
            }
        if(sc>150){
            $('.mainTxt').css({'top':100})
            $('.area1').height(area3Boxht)
            $('.area2').height(area2htCh)
            }else{
            $('.mainTxt').css({'top':100})
            $('.area1').height(area1) 
            $('.area2').height(area1)
            };
        if(sc>200){
            //area2 내부라인 효과
            $('.area3Box1>p').css({'opacity':1})
            }else{
            $('.area3Box1>p').css({'opacity':0})
            $('.mokupLine').width(0)};
            // works1번 한라산 영역
        if(sc>600){
            $('.menu li a').removeClass('on')
            $('.menu li:nth-child(2) a').addClass('on')
            $('.area1>div').removeClass('on')
            $('.area1>div:nth-child(2)').addClass('on')
            $('.works').removeClass('on')
            $('.works:nth-child(1)').addClass('on')
            $('.mokupBox>ul').removeClass('on')
            $('.mokupBox>ul:nth-child(1)').addClass('on')
            $('.area3Box1 p').css({'opacity':0})
            $('.mokupLine').width(mokupLineWd)
            $('.mokupBox').width(mokupBox)
            $('.mokupLine>div').removeClass('on')
            $('.mokupLine>div:nth-child(1)').addClass('on')
            $('.h2Box>h2').removeClass('on')
            $('.h2Box>h2:nth-child(1)').addClass('on')
            $('.area3Txtbox>p').removeClass('on')
            $('.area3Txtbox>p:nth-child(1)').addClass('on')
            }else{
                $('.menu li a').removeClass('on')
                $('.menu li:nth-child(1) a').addClass('on')
                $('.mokupBox>ul').removeClass('on')
                $('.mokupLine').width(0)
                $('.mokupBox').width(bht)
                $('.h2Box>h2').removeClass('on')
                $('.area3Txtbox>p').removeClass('on')
            }
        // works2번 대니멕켄지 영역
        if(sc>1300){
            $('.works').removeClass('on')
            $('.works:nth-child(2)').addClass('on')
            $('.mokupBox>ul').removeClass('on')
            $('.mokupBox>ul:nth-child(2)').addClass('on')
            $('.mokupLine>div').removeClass('on')
            $('.mokupLine>div:nth-child(2)').addClass('on')
            $('.h2Box>h2').removeClass('on')
            $('.h2Box>h2:nth-child(2)').addClass('on')
            $('.area3Txtbox>p').removeClass('on')
            $('.area3Txtbox>p:nth-child(2)').addClass('on')
            }
        // works3번 루엘 영역
        if(sc>2000){
            $('.works').removeClass('on')
            $('.works:nth-child(3)').addClass('on')
            $('.mokupBox>ul').removeClass('on')
            $('.mokupBox>ul:nth-child(3)').addClass('on')
            $('.mokupLine>div').removeClass('on')
            $('.mokupLine>div:nth-child(3)').addClass('on')
            $('.h2Box>h2').removeClass('on')
            $('.h2Box>h2:nth-child(3)').addClass('on')
            $('.area3Txtbox>p').removeClass('on')
            $('.area3Txtbox>p:nth-child(3)').addClass('on')
            }
        //SKILL영역 시작
        if(sc>2700){
            $('.menu li a').removeClass('on')
            $('.menu li:nth-child(3) a').addClass('on')
            $('.h2Box>h2').removeClass('on')
            $('.area3Txtbox>p').removeClass('on')
            $('.area1>div').removeClass('on')
            $('.area1>div:nth-child(3)').addClass('on')
            $('.mokupBox>ul').removeClass('on')
            $('.mokupLine').width(0)
            $('.main1').width(main2wd)
            $('.main2').width(bht)
            $('.box:before').addClass('on')
            $('.area2').width(main2wd)
            $('.mokupBox').width(main2wd)
        }else{
            $('.area2').width(bht)
            $('.mokupBox').width(mokupBox)
            $('.main1').width(bht)
            }
        if(sc>2900 && sc<3700){
            draw(80, '.html', '#DE5026');
            draw(80, '.css', '#E09D26');
            draw(60, '.js','#1170B3');
            draw(70, '.ps', '#29A4DD');
            draw(70, '.ai', '#F39320');
            draw(70, '.fg', '#323333');
            function draw(max, classname, colorname){
            let i=1;
            let func1 = setInterval(function(){
            if(i<max){
                color1(i,classname,colorname);
                i++;} 
            else{clearInterval(func1);}},10);
            }
            function color1(i, classname,colorname){
            $(classname).css({
            "background":"conic-gradient("+colorname+" 0% "+i+"%, #fff "+i+"% 100%)"
            });
            }
            $('.skillBox').css({'display':'block'})
            $('.area2').width(main2wd)
            $('.area2 .licen').fadeIn(500)
        }else{
            $('.skillBox').css({'display':'none'})
            $('.area2 .licen').fadeOut('fast')}
        if(sc>3800){
            $('.skillBox').css({'display':'none'})
            $('.menu li a').removeClass('on')
            $('.menu li:nth-child(4) a').addClass('on')
            $('.area2 .licen').hide()
            $('.area1').css({'border-bottom':'none'})
            $('.box').css({'transform':'scale(0.7)'})
            $('.box').css({'top':-30})
            $('.mainTxt').css({'top':80})
            $('.mokupLine').css({'border-right':'none'})
            $('.area1>div').removeClass('on')
            $('.area1>div:nth-child(4)').addClass('on')
            $('.box').css({'background-image':'none'})
            $('.etc').hide()
        }else{
            $('.area1').css({'border-bottom':'1px solid #222'})
            $('.mokupLine').css({'border-right':'1px solid #222'})
            $('.box').css({'background-image':'var(--bg)'})
            $('.www').css({'background-color': 'rgba(0,0,0, 0)'})
        }
        if(sc>4300){
            $('.aboutBox').height(bht)
            $('.aboutBox').css({'display':'block'})
            $('.nameTitle').fadeIn('slow')
            $('.aboutED').fadeIn('slow')
        }else{
            $('.aboutBox').css({'display':'none'})
            $('.nameTitle').fadeOut('slow')
            $('.aboutED').fadeOut('fast')
            }
        if(sc>5000){
            $('.box').css({'transform':'scale(0.4)'})
            $('.www span:nth-child(1)').text('2023')
            $('.www span').css({'font-size':36})
            $('.www .pot').css({'display':'inline-block'})
            $('.main1').css({'display':'none'})
            $('.main2').css({'display':'none'})
            $('.www').height(70)
            $('.cardTxt').fadeIn('slow')
            $('.cardTxt2').fadeIn('slow')
                $('.box').mouseenter(function(){
                $(this).css({'box-shadow':'none'})
                $(this).css({'background-color':'#fff'})
                $(this).css({'border':'none'})
                $('.www').css({'display':'none'})
                $('.cardTxt').hide()
                $('.cardTxt2').text('감사합니다.')
                $('.cardTxt3').show()
                })
                $('.box').mouseleave(function(){
                $(this).css({'box-shadow':'0 -5px 30px 5px rgb(51, 51, 51)'})
                $(this).css({'background-color':'#f6f6f6'})
                $(this).css({'border': '1px solid #222'})
                $('.www').css({'display': 'block'})  
                $('.cardTxt').show()
                $('.cardTxt2').text('~~~~한 전병현입니다.')
                $('.cardTxt3').hide()
            })
        }else{
            $('.box').unbind('mouseenter mouseleave')
            $('.cardTxt').hide(100)
            $('.cardTxt3').hide()
            $('.www span:nth-child(1)').text('http://heyo96.dothome.co.kr')
            $('.www span').css({'font-size':16})
            $('.main1').css({'display':'block'})
            $('.main2').css({'display':'block'})
            $('.www .pot').css({'display':'none'})
            $('.www').height(30)
            $('.cardTxt').fadeOut('fast')
            $('.cardTxt2').fadeOut('fast')
            }

    });
    

    console.log(wd)
    console.log(bht)
    console.log(area1)
    console.log(main2wd)
    console.log(area3ht)
    console.log(area4ht)
    console.log(mokupLineWd)
    console.log(mokupBox)
    
});