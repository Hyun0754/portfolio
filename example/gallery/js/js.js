$(document).ready(function(){

	$('.container li').click(function(){


	var i = $(this).index();

	console.log(i);
	$('#image p').stop().animate({'opacity':0},600)

	$('#image p').eq(i).stop().animate({'opacity':1},600)

});
	var i =0 ;

$('.left').click(function(){

var wid = $('#image p').width();

	
	i--;
	if(i==-4)i=0;
console.log(i)

	wid = wid *i;


	$('.container ul').stop().animate({left:wid},800)

})


$('.right').click(function(){


var wid = $('#image p').width();

	
	if(i>-4 && i<0)i++;
	
	console.log(i)


	
	$('.container ul').stop().animate({left:wid*i},800)
})

	




	
})