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


		$('header li').click(function(){
			let wd = $(window).width();
			let i= $(this).index()
			console.log(i)
			$('#wrap').css({'left':-wd*i})
		})
	


    // BestMusic 섹션 설정
	// 마우스 오버시
	$(".contents article").on("mouseover",function(){		
		// 변수 vid에 video파일 참조
		var vid = $(this).find("video").get(0);
		// 동영상의 재생위치를 처음(0)으로 설정
		vid.currentTime=0;
		// 동영상을 재생
		vid.play();	
		
		$(this).stop().animate({"width":"35%"},1000,function(){
			//article이 넓어진 바로 후에 아래 구문이 실행됩니다.
			$(this).find("h3").stop().animate({"right":"15px"},400);
			$(this).find("p").stop().animate({"right":"15px"},800);	
		});
		$(this).find("video").stop().animate({"opacity":"1"},1200);		
	});
	
	// 마우스 아웃시
	$(".contents article").on("mouseout",function(){		
		// 변수 vid에 video파일 참조
		var vid = $(this).find("video").get(0);
		// 동영상을 정지
		vid.pause();
		$(this).stop().animate({"width":"12%"},700);
		$(this).find("video").stop().animate({"opacity":"0"},2000);	
		$(this).find("h3").stop().animate({"right":"-450px"},200);
		$(this).find("p").stop().animate({"right":"-450px"},500);	
	});

});


    
