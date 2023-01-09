$(document).ready(function(){
    // 실행문
    // 시간정보 찾아오기
    

    setInterval(function(){
    let now =new Date();
    let hr = now.getHours();
    let min = now.getMinutes();
    let sec = now.getSeconds(); 

    let hNum 
    let mNum 
    let sNum

    if(sec>=10){
        sNum = sec
        }else {sNum = '0'+sec}
    
    if(min>=10){
        mNum = min
        }else {mNum = '0'+min}
    
    if(hr>=10){
        hNum = hr
        }else {hNum = '0'+hr}
    
    // if(hr>=8 && hr<12){
    //     $('#wrap').css({"Transition":'0.8s'})
    //     $('#wrap').addClass('morning')
    //     }
    // if(hr>=13 && hr<17){
    //     $('#wrap').css({"Transition":'0.8s'})
    //     $('#wrap').addClass('afternoon')
    //     }
    // if(hr>=17 && hr<22){
    //     $('#wrap').css({"Transition":'0.8s'})
    //     $('#wrap').addClass('evning')
    //     }
    // if(hr>=22 && hr<7){
    //     $('#wrap').css({"Transition":'0.8s'})
    //     $('#wrap').addClass('night')
    //     }


    $('.phone span').eq(0).text(hNum);
    $('.phone span').eq(1).text(mNum);
    $('.phone span').eq(2).text(sNum);
    },1000);

    // q배경이미지 변경
    $('nav li').click(function(){
        let txt = $(this).text()
        console.log(txt)

        $('#wrap').removeClass()
        $('#wrap').css({"Transition":'0.8s'})
        $('#wrap').addClass(txt)
        })


})