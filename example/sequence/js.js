

$(document).ready(function(){
    let imgs 
    for(let i = 0; i<200; i++){   //이미지를 반복하여 작성
        imgs+='<img src="/img/pic'+i+'.jpg">'
        $('section').html(imgs)
        }

    $(window).mousemove(function(e){  
        let x =e.pageY; //마우스 가로 움직임 찾기
        let wd =$(window).width()
        // 연산식 구하기

        let number = Math.floor((x/wd)*200)//사진의 장수
        $('section img').hide()
        $('section img').eq(number).show()
        $('h1').text(number)
    })



});