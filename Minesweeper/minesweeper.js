document.write("<table align='center' border='1' cellpadding='0' cellspacing='0'>");

for(var i=1; i<=9; i++){
	document.write("<tr>");
	for(var j=1; j<=9; j++){
	var thisid = "_"+j+"_"+i;
	document.write("<td background='facingdown.png' id='"+thisid+"'></td>");	
	}
	document.write("</tr>");
}
document.write("<tr ><td  colspan='9' background='facingdown.png' ><center><a style='font-size:10px !important' href='minesweeper.html'><img id='asd' style=' display:inline;height:100%;' src='smile.png'></a></center></td></tr>");
document.write("</table>");
var w = $(window).width();
var h = $(window).height();

if(w<h){
	var size=w-22;
} else {
	var size = h-50;
}

var tdSize=Math.floor(size/10)+"px";
var fontSize=Math.floor(size/14)+"px";
$('td, #asd').css({'height':tdSize,'width':tdSize,'font-size':fontSize});

var count=0;
function generate(){
	
var randX=Math.ceil(Math.random()*9);
var randY=Math.ceil(Math.random()*9);
var randID = "_"+randX+"_"+randY;

if($("#"+randID).html()=="" || $("#"+randID).html()>0){
count++;
$("#"+randID).html("<img src='bomb.png'>");
var id1="_"+(randX-1)+"_"+randY;
if($("#"+id1).html()==""){
	$("#"+id1).html("1");
} else if($("#"+id1).html()>0){
	$("#"+id1).html($("#"+id1).html()-1+2);
}
var id2="_"+(randX-1)+"_"+(randY-1);
if($("#"+id2).html()==""){
	$("#"+id2).html("1");
}
else if($("#"+id2).html()>0){
	$("#"+id2).html($("#"+id2).html()-1+2);
}
var id3="_"+(randX-1)+"_"+(randY-1+2);
if($("#"+id3).html()==""){
	$("#"+id3).html("1");
}
else if($("#"+id3).html()>0){
	$("#"+id3).html($("#"+id3).html()-1+2);
}
var id4="_"+randX+"_"+(randY-1+2);
if($("#"+id4).html()==""){
	$("#"+id4).html("1");
}
else if($("#"+id4).html()>0){
	$("#"+id4).html($("#"+id4).html()-1+2);
}
var id5="_"+randX+"_"+(randY-1);
if($("#"+id5).html()==""){
	$("#"+id5).html("1");
}
else if($("#"+id5).html()>0){
	$("#"+id5).html($("#"+id5).html()-1+2);
}
var id6="_"+(randX-1+2)+"_"+randY;
if($("#"+id6).html()==""){
	$("#"+id6).html("1");
}
else if($("#"+id6).html()>0){
	$("#"+id6).html($("#"+id6).html()-1+2);
}
var id7="_"+(randX-1+2)+"_"+(randY-1);
if($("#"+id7).html()==""){
	$("#"+id7).html("1");
}
else if($("#"+id7).html()>0){
	$("#"+id7).html($("#"+id7).html()-1+2);
}
var id8="_"+(randX-1+2)+"_"+(randY-1+2);
if($("#"+id8).html()==""){
	$("#"+id8).html("1");
}
else if($("#"+id8).html()>0){
	$("#"+id8).html($("#"+id8).html()-1+2);
}
	
}
if(count<10){
		generate();
	}
}
generate();


$('td').click(function(){
	
var xy = $(this).attr('id');
var arrxy = xy.split('_');
var cordX = arrxy[1];
var cordY = arrxy[2];
guyn(cordX,cordY);
	function rightclick() {
	    var rightclick;
	    var e = window.event;
	    if (e.which) rightclick = (e.which == 3);
	    else if (e.button) rightclick = (e.button == 2);
	}
});

var cordX2;
var cordY2;
function guyn(cordX,cordY){
		cordX2 = cordX;
		cordY2 = cordY;
	var thisid = "_"+cordX+"_"+cordY;
	$("#"+thisid).children().css({'opacity':1});
	$("#"+thisid).css({'background':'white'});
	if($("#"+thisid).html()=='1'){
	$("#"+thisid).css({'color':'#2435B5'});
	}
	if($("#"+thisid).html()=='2'){
	$("#"+thisid).css({'color':'green'});
	}
	if($("#"+thisid).html()=='3'){
	$("#"+thisid).css({'color':'darkred'});
	}
	if($("#"+thisid).html()=='4'){
	$("#"+thisid).css({'color':'darkblue'});
	}
	if($("#"+thisid).html()=='5'){
	$("#"+thisid).css({'color':'lime'});
	}
	if($("#"+thisid).html()=='6'){
	$("#"+thisid).css({'color':'purple'});
	}
	if($("#"+thisid).html()=='7'){
	$("#"+thisid).css({'color':'pink'});
	}
	if($("#"+thisid).html()=='8'){
	$("#"+thisid).css({'color':'#333'});
	}
// if bomb or datark start
if($("#"+thisid).children().attr('src')=="bomb.png"){
	$('#asd').attr('src',"sad.png")
	alert("Game Over!");
	$('img').css({'opacity':'1','background-color':'red'})
	$('')
	$('img').attr('src')="sad.png"
} else if($("#"+thisid).html()==''){
	datark(cordX,cordY);
}
// if bomb or datark end
}
var id1,id2,id3,id4,id5,id6,id7,id8;
var id11,id12,id21,id22,id31,id32,id41,id42,id51,id52,id61,id62,id71,id72,id81,id82;

function datark(x,y){
	var randX=parseInt(x);
	var randY=parseInt(y);
	id1="_"+(randX-1)+"_"+randY
	id2="_"+(randX-1)+"_"+(randY-1);
	id3="_"+(randX-1)+"_"+(randY-1+2);
	id4="_"+randX+"_"+(randY-1+2);
	id5="_"+randX+"_"+(randY-1);
	id6="_"+(randX-1+2)+"_"+randY;
	id7="_"+(randX-1+2)+"_"+(randY-1);
	id8="_"+(randX-1+2)+"_"+(randY-1+2);
		id11=(randX-1)
		id12=(randY)
		if($('#'+id1).html()=='' ){
		setTimeout(function(){ guyn(id11,id12)});
		}
		id21=(randX-1)
		id22=(randY-1)
		if($('#'+id2).html()=='' ){
		setTimeout(function(){ guyn(id21,id22)});
		}
		id31=(randX-1)
		id32=(randY-1+2)
		if($('#'+id3).html()=='' ){
		setTimeout(function(){ guyn(id31,id32)});

		}
		id41=(randX)
		id42=(randY-1+2)
		if($('#'+id4).html()=='' ){
		setTimeout(function(){ guyn(id41,id42)});

		}
		id51=(randX)
		id52=(randY-1)
		if($('#'+id5).html()=='' ){
		setTimeout(function(){ guyn(id51,id52)});
		}
		id61=(randX-1+2)
		id62=(randY)
		if($('#'+id6).html()=='' ){
		setTimeout(function(){ guyn(id61,id62)});
		}
		id71=(randX-1+2)
		id72=(randY-1)
		if($('#'+id7).html()=='' ){
		setTimeout(function(){ guyn(id71,id72)});
		}
		id81=(randX-1+2)
		id82=(randY-1+2)
		if($('#'+id8).html()=='' ){
		setTimeout(function(){ guyn(id81,id82)});

		}
}
var rightC;
$('td').addEventListener('contextMenu',function(rightC){
rightC.preventDefault();
alert('Success');
return false;
},false);
