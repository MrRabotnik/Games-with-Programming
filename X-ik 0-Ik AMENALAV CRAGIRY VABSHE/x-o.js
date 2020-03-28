
var n,p1,p2;
var w = window.innerWidth;
var h = window.innerHeight;
if(w>h){
	var size = h-16;
} else {
	var size = w-16;
}

var pat = 0;
var haxtakan = []; //haxtoxi koordinatner


var squaresize;
function start(){
	n = document.getElementById('number').value;
	p1 = document.getElementById('player1').value;
	p2 = document.getElementById('player2').value;
	squaresize = size/n;
	if(p1==''){p1='X'};
	if(p2==''){p2='O'};

	if(n<3 || n>20){
		document.getElementById('text').innerHTML = 'Vandakneri qanak@ petq e mec lini 3-ic ev poqr 21-ic';
	} else {
		document.getElementById('forma').style.display='none';
		tpel();
	}	
}

function tpel(){

	document.write('<table align="center" cellpadding="0" cellspacing ="0" border="5" bordercolor="#2D025E" width="'+size+'px" height="'+size+'px">');
	for(var i=1; i<=n; i++){
		document.write('<tr height="'+squaresize+'px">');
			for(var j=1; j<=n; j++){
				var id= '_'+i+'_'+j;
			document.write('<td onclick="pic(id)" id="'+id+'" width="'+squaresize+'px"></td>');
		}
		document.write('</tr>');
	}

	document.write('</table><audio src="Windows Battery Critical.wav" id="audio1"></audio><audio src="victory.mp3" id="audio3"></audio><audio src="Windows Battery Low.wav" id="audio2"></audio>');
	var body =document.getElementsByTagName('body');
	body[0].style.background='purple';
	document.write('<div id="winner"></div>');
	var winner2 = document.getElementById('winner');
	winner2.style.width="300px";
	winner2.style.height="100px";
	winner2.style.background="white";
	winner2.style.position="absolute";
	winner2.style.top="50%";
	winner2.style.left="50%";
	winner2.style.display="none";
	winner2.style.transform="translate(-50%,-50%)";

}

var arrx = [];
var arro = [];

var xo='x';
var avart = 0;

function pic(id){
	if(document.getElementById(id).innerHTML=='' && avart==0){
		pat ++;

		if (xo =='x'){
			arrx.push(id);

			document.getElementById(id).innerHTML='<img src="iksik.png" width="80%" style="margin-left: 10%">';
			xo = 'o';
			document.getElementById('audio1').play();			

			} else  if(xo =='o'){
			arro[arro.length]=id;
			document.getElementById(id).innerHTML='<img src="nolik1.png" width="80%" style="margin-left: 10%">';
			xo = 'x';
			document.getElementById('audio2').play();			
		}
	}
	winner(id,xo);
}

var win;


function winner(id,xo){

if(xo=="o"){
	var arrxo = arrx;
	win = p1;
} else {
	var arrxo= arro;
	win = p2;
}

haxtakan[0]=id;

	var xy=id.split('_');
	var cordX=xy[2];
	var cordY=xy[1];

//horizontal start
//left-2 start
if(p!=2){
	var p = 0;
	for(var key in arrxo){
		if(arrxo[key]=="_"+(cordY)+"_"+(cordX-1)){
			haxtakan[1]="_"+(cordY)+"_"+(cordX-1);
			p++;
		}
	}
	for(var key in arrxo){
		if(arrxo[key]=="_"+(cordY)+"_"+(cordX-2)){
			haxtakan[2]="_"+(cordY)+"_"+(cordX-2);
			p++;
		}
	}

if(p==2){
	congratulations();
} else {p=0;}

}
//left-2 end

//right+2 start
if(p!=2){
	var p = 0;
	for(var key in arrxo){
		if(arrxo[key]=="_"+(cordY)+"_"+(cordX-1+2)){
			haxtakan[1]="_"+(cordY)+"_"+(cordX-1+2);
			p++;
		}
	}
	for(var key in arrxo){
		if(arrxo[key]=="_"+(cordY)+"_"+(cordX-1+3)){
			haxtakan[2]="_"+(cordY)+"_"+(cordX-1+3);
			p++;
		}
	}

if(p==2){
	congratulations();
} else {p=0;}
}
//right+2 end

//right+1  left-1 start
if(p!=2){
	var p = 0;
	for(var key in arrxo){
		if(arrxo[key]=="_"+(cordY)+"_"+(cordX-1)){
			haxtakan[1]="_"+(cordY)+"_"+(cordX-1);
			p++;
		}
	}
	for(var key in arrxo){
		if(arrxo[key]=="_"+(cordY)+"_"+(cordX-1+2)){
			haxtakan[2]="_"+(cordY)+"_"+(cordX-1+2);
			p++;
		}
	}

if(p==2){
	congratulations();
} else {p=0;}
}
//right+1  left-1  end
//horizontal end

//vertical start
//up-2 start
if(p!=2){
	var p = 0;
	for(var key in arrxo){
		if(arrxo[key]=="_"+(cordY-1)+"_"+(cordX)){
			haxtakan[1]="_"+(cordY-1)+"_"+(cordX);
			p++;
		}
	}
	for(var key in arrxo){
		if(arrxo[key]=="_"+(cordY-2)+"_"+(cordX)){
			haxtakan[2]="_"+(cordY-2)+"_"+(cordX);
			p++;
		}
	}

if(p==2){
	congratulations();
} else {p=0;}
}
//up-2 end

//down+2 start
if(p!=2){
	var p = 0;
	for(var key in arrxo){
		if(arrxo[key]=="_"+(cordY-1+2)+"_"+(cordX)){
			haxtakan[1]="_"+(cordY-1+2)+"_"+(cordX);
			p++;
		}
	}
	for(var key in arrxo){
		if(arrxo[key]=="_"+(cordY-1+3)+"_"+(cordX)){
			haxtakan[2]="_"+(cordY-1+3)+"_"+(cordX);
			p++;
		}
	}

if(p==2){
	congratulations();
} else {p=0;}
}
//down+2 end

//down+1  up-1 start
if(p!=2){
	var p = 0;
	for(var key in arrxo){
		if(arrxo[key]=="_"+(cordY-1)+"_"+(cordX)){
			haxtakan[1]="_"+(cordY-1)+"_"+(cordX);
			p++;
		}
	}
	for(var key in arrxo){
		if(arrxo[key]=="_"+(cordY-1+2)+"_"+(cordX)){
			haxtakan[2]="_"+(cordY-1+2)+"_"+(cordX);
			p++;
		}
	}

if(p==2){
	congratulations();
} else {p=0;}
}
//down+1  up-1  end
//vertical end

//diagonal start
//up-2 start
if(p!=2){
	var p = 0;
	for(var key in arrxo){
		if(arrxo[key]=="_"+(cordY-1)+"_"+(cordX-1)){
			haxtakan[1]="_"+(cordY-1)+"_"+(cordX-1);
			p++;
		}
	}
	for(var key in arrxo){
		if(arrxo[key]=="_"+(cordY-2)+"_"+(cordX-2)){
			haxtakan[2]="_"+(cordY-2)+"_"+(cordX-2);
			p++;
		}
	}

if(p==2){
	congratulations();
} else {p=0;}
}
//up-2 end

//down+2 start
if(p!=2){
	var p = 0;
	for(var key in arrxo){
		if(arrxo[key]=="_"+(cordY-1+2)+"_"+(cordX-1+2)){
			haxtakan[1]="_"+(cordY-1+2)+"_"+(cordX-1+2);
			p++;
		}
	}
	for(var key in arrxo){
		if(arrxo[key]=="_"+(cordY-1+3)+"_"+(cordX-1+3)){
			haxtakan[2]="_"+(cordY-1+3)+"_"+(cordX-1+3);
			p++;
		}
	}

if(p==2){
	congratulations();
} else {p=0;}
}
//down+2 end

//down+1  up-1 start
if(p!=2){
	var p = 0;
	for(var key in arrxo){
		if(arrxo[key]=="_"+(cordY-1)+"_"+(cordX-1)){
			haxtakan[1]="_"+(cordY-1)+"_"+(cordX-1);
			p++;
		}
	}
	for(var key in arrxo){
		if(arrxo[key]=="_"+(cordY-1+2)+"_"+(cordX-1+2)){
			haxtakan[2]="_"+(cordY-1+2)+"_"+(cordX-1+2);
			p++;
		}
	}

if(p==2){
	congratulations();
} else {p=0;}
}
//down+1  up-1  end
//diagonal end


//diagonal1 start
//up-2 start
if(p!=2){
	var p = 0;
	for(var key in arrxo){
		if(arrxo[key]=="_"+(cordY-1)+"_"+(cordX-1+2)){
			haxtakan[1]="_"+(cordY-1)+"_"+(cordX-1+2);
			p++;
		}
	}
	for(var key in arrxo){
		if(arrxo[key]=="_"+(cordY-2)+"_"+(cordX-2+4)){
			haxtakan[2]="_"+(cordY-2)+"_"+(cordX-2+4);
			p++;
		}
	}

if(p==2){
	congratulations();
} else {p=0;}
}
//up-2 end

//down+2 start
if(p!=2){
	var p = 0;
	for(var key in arrxo){
		if(arrxo[key]=="_"+(cordY-1+2)+"_"+(cordX-1)){
			haxtakan[1]="_"+(cordY-1+2)+"_"+(cordX-1);
			p++;
		}
	}
	for(var key in arrxo){
		if(arrxo[key]=="_"+(cordY-1+3)+"_"+(cordX-2)){
			haxtakan[2]="_"+(cordY-1+3)+"_"+(cordX-2);
			p++;
		}
	}

if(p==2){
	congratulations();
} else {p=0;}
}
//down+2 end

//down+1  up-1 start
if(p!=2){
	var p = 0;
	for(var key in arrxo){
		if(arrxo[key]=="_"+(cordY-1)+"_"+(cordX-1+2)){
			haxtakan[1]="_"+(cordY-1)+"_"+(cordX-1+2);
			p++;
		}
	}
	for(var key in arrxo){
		if(arrxo[key]=="_"+(cordY-1+2)+"_"+(cordX-1)){
			haxtakan[2]="_"+(cordY-1+2)+"_"+(cordX-1);
			p++;
		}
	}

if(p==2){
	congratulations();
} else {p=0;}
}
//down+1  up-1  end
//diagonal1 end
if (pat==n*n && document.getElementById('winner').innerHTML==''){
	var winner2 = document.getElementById('winner');
	winner2.style.color='purple';
	winner2.style.lineHeight='100px';
	winner2.style.textAlign='center';
	winner2.innerHTML= "nobody is winner";
	winner2.style.display='block';
	winner2.style.fontSize='30px';
}

}

function congratulations(){
	var winner2 = document.getElementById('winner');
	winner2.style.color='purple';
	winner2.style.lineHeight='100px';
	winner2.style.textAlign='center';
	winner2.innerHTML=win+" is winner";
	winner2.style.display='block';
	winner2.style.fontSize='30px';
	document.getElementById('audio3').play();

	setInterval(tartel,500);

	avart = 1;			
}

var t = 0;
function tartel(){
	if(t==0){
	document.getElementById(haxtakan[0]).style.backgroundColor = 'white';
	document.getElementById(haxtakan[1]).style.backgroundColor = 'white';
	document.getElementById(haxtakan[2]).style.backgroundColor = 'white';
	t = 1;
	} else {
	document.getElementById(haxtakan[0]).style.backgroundColor = 'purple';
	document.getElementById(haxtakan[1]).style.backgroundColor = 'purple';
	document.getElementById(haxtakan[2]).style.backgroundColor = 'purple';
	t = 0;
	}
}