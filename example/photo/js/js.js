$(document).ready(function(){
    // body의 높이값과 section의 가로값 통일시키기
    // article의 갯수 * article의 가로값 (margin) = section의 가로값
    let a = $('article').size();
    let awd = $('article').width();
    $('section').width((a*(awd+20))+600);
    $('body').height(a*(awd+20));

    $('html,body').scrollTop(a*(awd+20))



    $(window).resize(function(){
    // 화면이 리사이즈 될때마다 body의 높이값과 section의 가로값 통일시키기
    // article의 갯수 * article의 가로값 (margin) = section의 가로값
    let a = $('article').size();
    let awd = $('article').width();
    $('section').width((a*(awd+20))+600);
    $('body').height(a*(awd+20));
    });





    // 화면에서 스크롤바가 움직일때 상단의 위치값을 찾아라
    $(window).scroll(function(){
        let sc = $(this).scrollTop();
        // $('h1').text(sc)
        $('section').stop().animate({'left':-sc},800)
        });

    $('.gnb li').click(function(){
        let i =$(this).index()
        $('html,body').scrollTop(1000*i)
        // $('section').stop().animate({'left':-1000*i})
        })
    

    // article을 클릭했을때 내가 클릭한 article에게 addClass 부여하기
    // 모든 article에게 removeClass 먼저하기
        $('article h2').click(function(e){
            e.preventDefault();  //기존에 있던 a의 이벤트값을 없애라.

            // 클릭한 나의 부모자의순번을 찾아라.
            let id = $(this).parent().index();
            // 클릭한 나의 자손인 'a'의 속성값(attr)
            let src = $(this).children('a').attr('href')
            // 이미지 뺴기
            $('article p img').attr({'src':''})
            // 클릭한 나의 형제인 'p'의 자손인  'img'안에 속성명 'src'의 안에 대입해라
            $(this).siblings('p').children('img').attr({'src':src})
            $('article').removeClass('on')
            $(this).parent().addClass('on')

            $('html,body').scrollTop(200*id)
            });

    // span을 클릭했을때 article에 removeClass 해라
        $('article span').click(function(){
            $(this).parent().removeClass('on')
            });
    
})