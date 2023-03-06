// 03006
$(document).ready(function(){  		
	let wd=$(window).width();
	let ht = $(window).height()
	let sNo = $('section').size();

	console.log(wd)
	$('section').width(wd);
	$('body').width(wd*5);
	$('body').height(wd*sNo)
	$('#wrap').height(ht)
	$('#wrap').width(wd*sNo)
	
	//화면이 리사이징 될떄
	$(window).resize(function(){
		let wd=$(window).width();
		let ht = $(window).height()
		let sNo = $('section').size();
		console.log(wd)
	$('section').width(wd);
	$('body').width(wd*5);
	$('body').height(wd*5)
	$('#wrap').height(ht)
	$('#wrap').width(wd*sNo);
	//메뉴 클릭 시 섹션 이동 설정
	$('header li').click(function(){
		let wd = $(window).width();
		let i= $(this).index()
		console.log(i)
		$('#wrap').css({'left':-wd*i})
		});
	// 메뉴 호버 고정 설정
	$('header li').click(function(){
		let i= $(this).index()
		$('header li a').removeClass('on')
		$('header li a').eq(i).addClass('on')
	});
	})
	//헤더설정
	//메뉴 클릭 시 섹션 이동 설정
	$('header li').click(function(){
		let wd = $(window).width();
		let i= $(this).index()
		console.log(i)
		$('#wrap').css({'left':-wd*i})
		});
	// 메뉴 호버 고정 설정
	$('header li').click(function(){
		let i= $(this).index()
		$('header li a').removeClass('on')
		$('header li a').eq(i).addClass('on')
	});

	//섹션1 설정
	// musicBox 나타나기
	$('.angle .left').click(function(){
		$('.musicBox').css({'opacity':1})
		$('.musicBox').css({'right':20})
		$('.musicBox').css({'right':0})
		
		$('.angle .left').removeClass('active')
		$('.angle .right').addClass('active')
	});
	$('.angle .right').click(function(){
		$('.musicBox').css({'opacity':0})
		$('.musicBox').css({'right':'-1300px'})
		
		$('.angle .right').removeClass('active')
		$('.angle .left').addClass('active')
		//$(this).css({'display':'none'})
		//$('.angle .left').css({'dispaly':'block'})
	});
	// 다음재생 클릭시 뮤직플레이어의 앨범 변경
	let alImg =$('.album-img');
	let img_count = alImg.children().length;
	let img_position = 1;
	console.log(img_count);
	
	$('.next').click(function(){
		if(img_count>img_position){
			alImg.animate({left:'-=100px'});
			img_position++;
		}
	});
	$('.prev').click(function(){
		if(1<img_position){
			alImg.animate({left:'+=100px'});
			img_position--;
		}
	});
	//섹션2 프로필 써클라인 설정
	$('.card').mouseenter(function(){
		$('.lineCircle').css({'opacity':0.5})
		$('.lineCircle').css({'border-radius':0})
	})
	$('.card').mouseleave(function(){
		$('.lineCircle').css({'opacity':1})
		$('.lineCircle').css({'border-radius':'50%'})
	})
	//섹션2 앨범 리스트목록 나타나기
	$('.horBox').mouseenter(function(){
		$(this).find('.dot').css({'background-color':'#e6927f'})
	});
	$('.horBox').mouseleave(function(){
		$('.dot').css({'background-color':'#fff'})
	});

	$('.horBox:nth-child(1)').mouseenter(function(){
		$('.albumList ul').css({'opacity':0})
		$('.albumList ul:nth-child(1)').css({'opacity':1})});
	$('.horBox:nth-child(2)').mouseenter(function(){
		$('.albumList ul').css({'opacity':0})
		$('.albumList ul:nth-child(2)').css({'opacity':1})});
	$('.horBox:nth-child(4)').mouseenter(function(){
		$('.albumList ul').css({'opacity':0})
		$('.albumList ul:nth-child(3)').css({'opacity':1})});
	$('.horBox:nth-child(6)').mouseenter(function(){
		$('.albumList ul').css({'opacity':0})
		$('.albumList ul:nth-child(4)').css({'opacity':1})});
	$('.horBox:nth-child(7)').mouseenter(function(){
		$('.albumList ul').css({'opacity':0})
		$('.albumList ul:nth-child(5)').css({'opacity':1})});
		

    // BestMusic 섹션3 설정
	// 마우스 오버시
	$(".contents article").on("mouseover",function(){		
		// 변수 vid에 video파일 참조
		var vid = $(this).find("video").get(0);
		// 동영상의 재생위치를 처음으로 설정
		vid.currentTime=0;
		// 동영상을 재생
		vid.play();	
		$(this).stop().animate({"width":"35%"},1000,function(){
			//article이 넓어진 후 텍스트 나타나기
			$(this).find("h3").stop().animate({"right":"15px"},400);
			$(this).find("p").stop().animate({"right":"15px"},800);	
		});
		$(this).find("video").stop().animate({"opacity":"1"},1200);		
	});
	
	// 마우스 아웃시
	$(".contents article").on("mouseout",function(){		
		// 변수 vid에 video파일 참조
		var vid = $(this).find("video").get(0);
		// 동영상 정지
		vid.pause();
		$(this).stop().animate({"width":"12%"},700);
		$(this).find("video").stop().animate({"opacity":"0"},2000);	
		$(this).find("h3").stop().animate({"right":"-450px"},200);
		$(this).find("p").stop().animate({"right":"-450px"},500);	
	});
	// 섹션 4설정
	// whill_card 클릭시 가사텍스트 변경
	$('.wheel>div').click(function(){
		let aaa = $(this).index()
		console.log(aaa)
		$('.txt_box>div').css({'opacity':0})
		$('.txt_box>div').eq(aaa+1).css({'opacity':1})

	})
	// whill_card 클릭시 가사텍스트 변경
	$('.wheel__card').click(function(){


	})
});
