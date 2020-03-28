$('#body').ready(function(){
	$('#gamename').css({'display':'block'});
})
var windowW=$(window).width();
var windowH=$(window).height();
var tableW=windowW/2;
var tableH=windowH;
var mar=1
														//TABLE WIDTH AND HEIGHT PARAMETRES
$('#mytable').css({'width':tableW,'height':tableH});


														//MARGAT
function margat(){
	if(mar==1){
		$('#clicktoplay').css({'opacity':'0',});
		// 'text-shadow':'none'
		mar=2;
	}else if(mar==2){
		$('#clicktoplay').fadeTo('1000',1);
		// 'text-shadow':'2px 2px green'
		mar=1;
	}
}
setInterval(margat,1000);
var bar=$('#mytable').offset().top
														//Slide UP
$('#header').click(function(){
	$('#header').slideUp();
	$('#gamename,#clicktoplay').fadeOut();
});
$('#header').click(function(){
	if(backreset==2){
		$('td').css({'background-image':'url("Images/paper.jpg")'});
		$('td').attr('class',"images");
		tiv=1
	}
});
	var backreset=1;													//Back button
$('#back').click(function(){
	$('#header').slideDown();
	$('#gamename,#clicktoplay').fadeIn();
	backreset=2
})
$('#reset').click(function(){
	$('td').css({'background-image':'url("Images/paper.jpg")'});
	$('td').attr('class',"images");
	tiv=1

})
var	tiv=1;													//X-ik 0-ik placement
$('td').click(function(){
if(tiv==1){
	if($(this).attr('class')=='images'){
		$(this).css({'background-image':'url("Images/xik.png")','background-size':'100% 100%'});
		tiv=2;
		$(this).attr('class',"xik");
		
	}
}else if(tiv==2){
	if($(this).attr('class')=='images'){
		$(this).css({'background-image':'url("Images/nolik.png")','background-size':'100% 100%'});
		tiv=1;
		$(this).attr('class',"nolik");
	}
		}
});

													//If Else
if($('#one,#two,#three').hasClass('xik') || $('#four,#five,#six').hasClass('xik') || $('#seven,#eight,#nine').hasClass('xik') || $('#one,#four,#seven').hasClass('xik') || $('#two,#five,#eight').hasClass('xik') || $('#three,#six,#nine').hasClass('xik') || $('#one,#five,#nine').hasClass('xik') || $('#three,#five,#seven').hasClass('xik')){
	alert('X WON');
}else if($('#one,#two,#three').hasClass('nolik') || $('#four,#five,#six').hasClass('nolik') || $('#seven,#eight,#nine').hasClass('nolik') || $('#one,#four,#seven').hasClass('nolik') || $('#two,#five,#eight').hasClass('nolik') || $('#three,#six,#nine').hasClass('nolik') || $('#one,#five,#nine').hasClass('nolik') || $('#three,#five,#seven').hasClass('nolik')){
	alert('O WON')
}