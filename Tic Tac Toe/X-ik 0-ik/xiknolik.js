$('#body').ready(function(){
	$('#gamename').css({'display':'block'});
})
var windowW=$(window).width();
var windowH=$(window).height();
var tableW=windowW/2;
var tableH=windowH;
var mar=1
var x1,x2,x3,x4,x5,x6,x7,x8,x9,o1,o2,o3,o4,o5,o6,o7,o8,o9;														//TABLE WIDTH AND HEIGHT PARAMETRES
$('#mytable').css({'width':tableW,'height':tableH});


														//MARGAT
function margat(){
	if(mar==1){
		
		$('#clicktoplay').css({'opacity':'0','text-shadow':'3px 3px green','text-shadow': '4px 4px black'});
		
		mar=2;
	}else if(mar==2){
		$('#clicktoplay').fadeTo('1000',1);
		mar=1;
	}
}
setInterval(margat,1000);
var mar2=1;

function xwonm(){
	if(mar2==1){
		$('#xwonm').css({'opacity':'0','text-shadow':'3px 3px green','text-shadow':' 4px 4px black'});
		// 'text-shadow':'none'
		mar2=2;
	}else if(mar2==2){
		$('#xwonm').fadeTo('1000',1);
		// 'text-shadow':'2px 2px green'
		mar2=1;
	}
}
setInterval(xwonm,1000);
var mar3=1;
function owonm(){
	if(mar3==1){
		$('#owonm').css({'opacity':'0','text-shadow':'3px 3px green','text-shadow': '4px 4px black'});
		
		mar3=2;
	}else if(mar3==2){
		$('#owonm').fadeTo('1000',1);
		// 'text-shadow':'2px 2px green'
		mar3=1;
	}
}
setInterval(owonm,1000);

var mar4=1;
function drew(){
	if(mar4==1){
		$('#drew').css({'opacity':'0',});
		
		mar4=2;
	}else if(mar4==2){
		$('#drew').fadeTo('1000',1);
		// 'text-shadow':'2px 2px green'
		mar4=1;
	}
}
setInterval(drew,1000);
var bar=$('#mytable').offset().top
														//Slide UP
$('#header').click(function(){
	$('#header').slideUp();
	$('#gamename,#clicktoplay').fadeOut();
});
$('#header').click(function(){
	if(backreset==2){
		$('td').css({'background-image':'url("Images/paperp.png")'});
		tiv=1
	}
});
	var backreset=1;													//Back button
$('#back').click(function(){
	$('#header').slideDown();
	$('#gamename,#clicktoplay').fadeIn();
	 x1=0;x2=0;x3=0;x4=0;x5=0;x6=0;x7=0;x8=0;x9=0;o1=0;o2=0;o3=0;o4=0;o5=0;o6=0;o7=0;o8=0;o9=0;
	 $('#leftA').show();
		$('#rightA').hide();
	 caunt=1;
	backreset=2
})

$('#reset').click(function(){
	$('td').css({'background-image':'url("Images/paperp.png")'});
	 x1=0;x2=0;x3=0;x4=0;x5=0;x6=0;x7=0;x8=0;x9=0;o1=0;o2=0;o3=0;o4=0;o5=0;o6=0;o7=0;o8=0;o9=0;
	 $('#leftA').show();
		$('#rightA').hide();
	 caunt=1;
	tiv=1
});
$('body').keypress(function(event){
if(event.which==82){
	$('td').css({'background-image':'url("Images/paperp.png")'});
	 x1=0;x2=0;x3=0;x4=0;x5=0;x6=0;x7=0;x8=0;x9=0;o1=0;o2=0;o3=0;o4=0;o5=0;o6=0;o7=0;o8=0;o9=0;
	 $('#leftA').show();
		$('#rightA').hide();
	 caunt=1;
	tiv=1
}
});

$('#backX').keypress(function(event){
if(event.which==13){
	$('td').css({'background-image':'url("Images/paperp.png")'});
	$('#backX').hide();
	 x1=0;x2=0;x3=0;x4=0;x5=0;x6=0;x7=0;x8=0;x9=0;o1=0;o2=0;o3=0;o4=0;o5=0;o6=0;o7=0;o8=0;o9=0;
	 $('#leftA').show();
		$('#rightA').hide();
	 caunt=1;
	tiv=1
}
});
$('#backX').click(function(){

	$('td').css({'background-image':'url("Images/paperp.png")'});
	$('#backX').hide();
	 x1=0;x2=0;x3=0;x4=0;x5=0;x6=0;x7=0;x8=0;x9=0;o1=0;o2=0;o3=0;o4=0;o5=0;o6=0;o7=0;o8=0;o9=0;
	 $('#leftA').show();
		$('#rightA').hide();
	 caunt=1;
	tiv=1

});

$('#backO').click(function(){
	$('td').css({'background-image':'url("Images/paperp.png")'});
	$('#backO').hide();
	 x1=0;x2=0;x3=0;x4=0;x5=0;x6=0;x7=0;x8=0;x9=0;o1=0;o2=0;o3=0;o4=0;o5=0;o6=0;o7=0;o8=0;o9=0;
	 $('#leftA').show();
		$('#rightA').hide();
	 caunt=1;
	tiv=1
});

$('#backO').keypress(function(event){
if(event.which==13){
	$('td').css({'background-image':'url("Images/paperp.png")'});
	$('#backO').hide();
	 x1=0;x2=0;x3=0;x4=0;x5=0;x6=0;x7=0;x8=0;x9=0;o1=0;o2=0;o3=0;o4=0;o5=0;o6=0;o7=0;o8=0;o9=0;
	 $('#leftA').show();
		$('#rightA').hide();
	 caunt=1;
	tiv=1
}
});

$('#backdraw').click(function(){
	$('td').css({'background-image':'url("Images/paperp.png")'});
	$('#backdraw').hide();
	 x1=0;x2=0;x3=0;x4=0;x5=0;x6=0;x7=0;x8=0;x9=0;o1=0;o2=0;o3=0;o4=0;o5=0;o6=0;o7=0;o8=0;o9=0;
	 $('#leftA').show();
		$('#rightA').hide();
	 caunt=1;

	tiv=1
});

$('#backdraw').keypress(function(event){
if(event.which==13){
	$('td').css({'background-image':'url("Images/paperp.png")'});
	$('#backdraw').hide();
	 x1=0;x2=0;x3=0;x4=0;x5=0;x6=0;x7=0;x8=0;x9=0;o1=0;o2=0;o3=0;o4=0;o5=0;o6=0;o7=0;o8=0;o9=0; 
	 $('#leftA').show();
		$('#rightA').hide();
	 caunt=1;
	tiv=1
}
});
var	tiv=1;		
										//X-ik 0-ik placement
function check(m){
	if($(this).css('background-image').length==0){
if(tiv==1){
	
		if(m=='i1'){x1=1;}
		if(m=='i2'){x2=1;}
		if(m=='i3'){x3=1;}
		if(m=='i4'){x4=1;}
		if(m=='i5'){x5=1;}
		if(m=='i6'){x6=1;}
		if(m=='i7'){x7=1;}
		if(m=='i8'){x8=1;}
		if(m=='i9'){x9=1;}
		$('#'+m).css({'background-image':'url("Images/xik.png")','background-size':'100% 100%'});
		if(tiv==1){
			$('#leftA').hide();
			$('#rightA').show();
		}	
		tiv=2;
		fm();

		
}else if(tiv==2){
		if(m=='i1'){o1=1;}
		if(m=='i2'){o2=1;}
		if(m=='i3'){o3=1;}
		if(m=='i4'){o4=1;}
		if(m=='i5'){o5=1;}
		if(m=='i6'){o6=1;}
		if(m=='i7'){o7=1;}
		if(m=='i8'){o8=1;}
		if(m=='i9'){o9=1;}
		$('#'+m).css({'background-image':'url("Images/nolik.png")','background-size':'100% 100%'});
		if(tiv==2){
		$('#leftA').show();
		$('#rightA').hide();
}		
		fm();
		tiv=1;
		
	}
}
		}


													//If Else
function fm(){													
if((x1==1 && x2==1 && x3==1) || (x4==1 && x5==1 && x6==1)|| (x7==1 && x8==1 && x9==1)|| ( x1==1 && x4==1 && x7==1)|| (x2==1 && x5==1 && x8==1)||(x3==1 && x6==1 && x9==1)|| (x1==1 && x5==1 && x9==1)|| (x3==1 && x5==1 && x7==1)){
	$('#backX').show();
}else if((o1==1 &&o2==1 && o3==1) || (o4==1 && o5==1 && o6==1)|| (o7==1 && o8==1 && o9==1)|| ( o1==1 && o4==1 && o7==1)|| (o2==1 && o5==1 && o8==1)||(o3==1 && o6==1 && o9==1)|| (o1==1 &&o5==5 && o9==1)|| (o3==1 && o5==1 && o7==1)){
	$('#backO').show();
}
}

var bg=1;
var dg=1;
var caunt=1;
													//If Else
function fm(){													
if((x1==1 && x2==1 && x3==1) || (x4==1 && x5==1 && x6==1)|| (x7==1 && x8==1 && x9==1)|| ( x1==1 && x4==1 && x7==1)|| (x2==1 && x5==1 && x8==1)||(x3==1 && x6==1 && x9==1)|| (x1==1 && x5==1 && x9==1)|| (x3==1 && x5==1 && x7==1)){
	if(bg==1){
	if($('#player1').val()==''){
		$('#backX').show();
		bg=0;

	}
}
if(bg==1){
	$('#winnerX').html($('#player1').val()+'&nbsp;Won');
	$('#backX').show();
}
bg=1;
	
}else if((o1==1 &&o2==1 && o3==1) || (o4==1 && o5==1 && o6==1)|| (o7==1 && o8==1 && o9==1)|| ( o1==1 && o4==1 && o7==1)|| (o2==1 && o5==1 && o8==1)||(o3==1 && o6==1 && o9==1)|| (o1==1 &&o5==5 && o9==1)|| (o3==1 && o5==1 && o7==1)){
	if(dg==1){
	if($('#player2').val()==''){
		$('#backO').show();
		dg=0;
	}
}
if(dg==1){
	$('#winnerO').html($('#player2').val()+'&nbsp;Won');
	$('#backO').show();
}
dg=1;
}else{
	caunt++;
	if(caunt==10){
	$('#backdraw').show();
	}
}
}


