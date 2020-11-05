var array=[[2000,7476,5596,1444,11.30,65.14,59.34],
			[2120,7549,5560,1554,11.32,65.17,60.73],
			[2125,7594,5547,1448,11.38,66.15,61.48],
			[2110,7440,5546,1454,11.35,65.28,60.75],
			[2114,7564,5580,1554,11.48,66.44,63.35],
			[2146,7441,5520,1460,11.99,67.95,62.71],
			[2143,7425,2210,1410,12.75,68.30,62.22]];
var randomNum = Math.floor(Math.random() * (7 - 0) + 0);

function navNext()
{
  for (temp = 0; temp <= 6; temp++) 
  { 
      document.getElementById('canvas'+temp).style.visibility="hidden";
  }

 simsubscreennum+=1;
 document.getElementById('canvas'+(simsubscreennum)).style.visibility="visible";
 document.getElementById('nextButton').style.visibility="hidden";
 magic();
}
//-----------------------------------------blink arrow on the next step---------------------------------------------
//blink arrow on the next step
function animatearrow()
{
   if (document.getElementById('arrow1').style.visibility=="hidden")
       document.getElementById('arrow1').style.visibility="visible";
   else
       document.getElementById('arrow1').style.visibility="hidden";
    
}
//stop blinking arrow
function myStopFunction() 
{
clearInterval(myInt);
document.getElementById('arrow1').style.visibility="hidden";
}


//-------------------------------------function magic starts here----------------------------------------------------
function magic()
{
	
	if (simsubscreennum==1)
	{
		document.getElementById('canV').style.visibility="hidden";
		document.getElementById('canh').style.visibility="hidden";
		document.getElementById('cand').style.visibility="hidden";
		
		myInt = setInterval(function(){ animatearrow(); },500 );
		document.getElementById('arrow1').style="visibility:visible ;position:absolute; left: 490px; top: 250px; height: 40px; z-index: 10;";	
		document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)"; 		
		document.getElementById("arrow1").style.msTransform = "rotate(180deg)"; 		
		document.getElementById("arrow1").style.transform = "rotate(180deg)";
		document.getElementById('a2').onclick=function() { step1(); };
	}
	else if(simsubscreennum==2)
	{
		document.getElementById('cal').style.visibility="hidden";
		document.getElementById('value').style.visibility="hidden";		
		document.getElementById('formula').style.visibility="hidden";
		document.getElementById('canV').style.visibility="hidden";
		document.getElementById('canh').style.visibility="hidden";
		document.getElementById('cand').style.visibility="hidden";
		
		myInt = setInterval(function(){ animatearrow(); },500 );
		document.getElementById('arrow1').style="visibility:visible ;position:absolute; left: 250px; top: 380px; height: 40px; z-index: 10;";			
		document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)"; 		
		document.getElementById("arrow1").style.msTransform = "rotate(180deg)"; 		
		document.getElementById("arrow1").style.transform = "rotate(180deg)";
		document.getElementById('b2').onclick=function() { step2(); };
	}
	else if(simsubscreennum==3)
	{
		document.getElementById('b7').style.visibility="hidden";
		document.getElementById('ba').style.visibility="hidden";
		document.getElementById('bb').style.visibility="hidden";
		document.getElementById('b1').style.visibility="hidden";
		
		myInt = setInterval(function(){ animatearrow(); },500 );
		document.getElementById('arrow1').style="visibility:visible ;position:absolute; left: 180px; top: 250px; height: 40px; z-index: 10;";	
		document.getElementById("arrow1").style.WebkitTransform = "rotate(0deg)"; 	
		document.getElementById("arrow1").style.msTransform = "rotate(0deg)"; 		
		document.getElementById("arrow1").style.transform = "rotate(0deg)";		
		document.getElementById('c2').onclick=function() { step3(); };
		
	}
	else if(simsubscreennum==4)
	{
		document.getElementById('c15').style.visibility="hidden";
		document.getElementById('can4').style.visibility="hidden";
		document.getElementById('v4').style.visibility="hidden";
		document.getElementById('can41').style.visibility="hidden";

		myInt = setInterval(function(){ animatearrow(); },500 );
		document.getElementById('arrow1').style="visibility:visible ;position:absolute; left: 300px; top: 290px; height: 40px; z-index: 10;";	
		document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)"; 
		document.getElementById("arrow1").style.msTransform = "rotate(180deg)"; 
		document.getElementById("arrow1").style.transform = "rotate(180deg)";
		document.getElementById('d2').onclick=function() { step4(); };
		
	}
	else if(simsubscreennum==5)
	{		document.getElementById('da').style.visibility="hidden";
		document.getElementById('db').style.visibility="hidden";
			document.getElementById('d18').style.visibility="hidden";
			document.getElementById('d19').style.visibility="hidden";
			document.getElementById('can5').style.visibility="hidden";
			document.getElementById('v5').style.visibility="hidden";
			document.getElementById('e1').style.visibility="hidden";
			document.getElementById('e3').style.visibility="visible";
			document.getElementById('e4').style.visibility="visible";
			document.getElementById('e5').style.visibility="visible";
			document.getElementById('e6').style.visibility="visible";
			document.getElementById('e10').style.visibility="visible";
			document.getElementById('ea').style.visibility="hidden";
			document.getElementById('eb').style.visibility="hidden";
			
		myInt = setInterval(function(){ animatearrow(); },1000 );
		document.getElementById('arrow1').style="visibility:visible ;position:absolute; left: 500px; top: 300px; height: 40px; z-index: 10;";	
		document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)"; 
		document.getElementById("arrow1").style.msTransform = "rotate(180deg)"; 
		document.getElementById("arrow1").style.transform = "rotate(180deg)";
		document.getElementById('e2').onclick=function() { step5(); };	
	}
	 else (simsubscreennum==6)
	 {
		document.getElementById('e1').style.visibility="hidden";
		document.getElementById('ea').style.visibility="hidden";
		document.getElementById('eb').style.visibility="hidden";
		document.getElementById('v9').style.visibility="hidden";
		document.getElementById('can9').style.visibility="hidden";
		document.getElementById('e20').style.visibility="hidden";

	document.getElementById('a01').innerHTML=array[randomNum][0];
	document.getElementById('a02').innerHTML=array[randomNum][1];
	document.getElementById('a03').innerHTML=array[randomNum][2];
	document.getElementById('a04').innerHTML=array[randomNum][3];
	document.getElementById('a05').innerHTML=array[randomNum][4];
	document.getElementById('a06').innerHTML=array[randomNum][5];
	document.getElementById('a07').innerHTML=array[randomNum][6];
	
	
}	
	document.getElementById('check1').onclick=function() { step001(); };
    document.getElementById('check2').onclick=function() { step002(); };
	document.getElementById('check3').onclick=function() { step003(); };
	
	function step001()
	{
		var num=1444;
		if(document.getElementById('t1').value==num)
	{
	document.getElementById('value1').style.visibility="visible";
	document.getElementById('t1').style.visibility="hidden";
	document.getElementById('check1').style.visibility="hidden";
	document.getElementById('f1').style.visibility="visible";
	}
	else
	{	
	document.getElementById('r1').style.visibility="visible";
	document.getElementById('bca').style.visibility="visible";
	document.getElementById('abc').style.visibility="hidden";
	document.getElementById('f1').style.visibility="visible";
	}
	document.getElementById('r1').onclick=function() { step0001(); };
	}
	function step0001(){
		document.getElementById('bca').style.visibility="hidden";
		document.getElementById('value1').style.visibility="visible";
		document.getElementById('t1').style.visibility="hidden";
		document.getElementById('check1').style.visibility="hidden";
		document.getElementById('r1').style.visibility="hidden";
		document.getElementById('cal').style.visibility="hidden";
		document.getElementById('f1').style.visibility="visible";	
	}
	function step002()
	{
		var num=1.4708;
		if(document.getElementById('t2').value==num)
	{
	// document.getElementById('abc11').style.visibility="visible";
	document.getElementById('value2').style.visibility="visible";
	document.getElementById('t2').style.visibility="hidden";
	document.getElementById('check2').style.visibility="hidden";
	document.getElementById('f2').style.visibility="visible";
	}
	else
	{	
	document.getElementById('r2').style.visibility="visible";
	document.getElementById('bca11').style.visibility="visible";
	document.getElementById('abc11').style.visibility="hidden";
	document.getElementById('f2').style.visibility="visible";
	}
	document.getElementById('r2').onclick=function() { step0002(); };
	}
	function step0002(){
		document.getElementById('bca11').style.visibility="hidden";
		document.getElementById('abc11').style.visibility="hidden";
		document.getElementById('value2').style.visibility="visible";
		document.getElementById('t2').style.visibility="hidden";
		document.getElementById('check2').style.visibility="hidden";
		document.getElementById('r2').style.visibility="hidden";
		document.getElementById('ca2').style.visibility="hidden";
		document.getElementById('f2').style.visibility="visible";	
	}
	function step003()
	{
		var num=12.027;
		if(document.getElementById('t3').value==num)
	{
	document.getElementById('value3').style.visibility="visible";
	document.getElementById('t3').style.visibility="hidden";
	document.getElementById('check3').style.visibility="hidden";
	document.getElementById('f3').style.visibility="visible";
	}
	else
	{	
	document.getElementById('r3').style.visibility="visible";
	document.getElementById('bca22').style.visibility="visible";
	document.getElementById('abc22').style.visibility="hidden";
	document.getElementById('f3').style.visibility="visible";
	}
	document.getElementById('r3').onclick=function() { step0003(); };
	}
	function step0003(){
		document.getElementById('bca22').style.visibility="hidden";
		document.getElementById('abc22').style.visibility="hidden";
		document.getElementById('value3').style.visibility="visible";
		document.getElementById('t3').style.visibility="hidden";
		document.getElementById('check3').style.visibility="hidden";
		document.getElementById('r3').style.visibility="hidden";
		document.getElementById('ca3').style.visibility="hidden";
		document.getElementById('f3').style.visibility="visible";	
	}
	
	
}


// step1
function step1()
{
	myStopFunction();
	document.getElementById('a2').style.animation= "move1 1s forwards";
	setTimeout(function()
	{
		document.getElementById('can1').innerHTML="Height of cylinder=12.5cm";
		setTimeout(function(){
			
			document.getElementById('a2').style.visibility="hidden";
			document.getElementById('a8').style.visibility="visible";
			document.getElementById('a9').style.visibility="visible";
			
			myInt = setInterval(function(){ animatearrow(); },500 );
			document.getElementById('arrow1').style="visibility:visible ;position:absolute; left: 350px; top: 100px; height: 40px; z-index: 10;";
			document.getElementById("arrow1").style.WebkitTransform = "rotate(270deg)"; 
			document.getElementById("arrow1").style.msTransform = "rotate(270deg)"; 
			document.getElementById("arrow1").style.transform = "rotate(270deg)";
			document.getElementById('a8').onclick = function(){ step1a();}
			document.getElementById('a9').onclick = function(){ step1a();}
		},500);
	}, 1400);
}
function step1a(){
	myStopFunction();
	document.getElementById('a8').onclick =" ";
	document.getElementById('a9').onclick =" ";
	document.getElementById('a8').style.animation= "move2 1s  forwards";
	document.getElementById('a9').style.animation= "move3 1s  forwards";
	setTimeout(function(){
	document.getElementById('can2').innerHTML="Diameter of Cylinder=10cm";
	},1000);
	setTimeout(function(){
		document.getElementById('a8').style.visibility="hidden";
		document.getElementById('a9').style.visibility="hidden";
		document.getElementById('can1').style.visibility="hidden";
		document.getElementById('can2').style.visibility="hidden";
		document.getElementById('a1').style.visibility="hidden";
		 document.getElementById('cal').style.visibility="visible";
		document.getElementById('canh').style.visibility="visible";
		document.getElementById('cand').style.visibility="visible";
		document.getElementById('txt').style.visibility="visible";
		document.getElementById('check0').style.visibility="visible";
		document.getElementById('formula').style.visibility="visible";
	},1500);
	 document.getElementById('check0').onclick=function() { step003(); };
}

	function step003()
	{
		var num=981;
		if(document.getElementById('txt').value==num)
	{
	document.getElementById('value').style.visibility="visible";
	document.getElementById('txt').style.visibility="hidden";
	document.getElementById('check0').style.visibility="hidden";
	document.getElementById('nextButton').style.visibility="visible";		

	}
	else
	{	
	document.getElementById('res').style.visibility="visible";
	document.getElementById('bca1').style.visibility="visible";
	document.getElementById('abc1').style.visibility="hidden";
	}
	document.getElementById('res').onclick=function() { step0001(); };
	}
	function step0001(){
		document.getElementById('bca1').style.visibility="hidden";
		document.getElementById('value').style.visibility="visible";
		document.getElementById('txt').style.visibility="hidden";
		document.getElementById('check0').style.visibility="hidden";
		document.getElementById('res').style.visibility="hidden";
		document.getElementById('cal').style.visibility="visible";
		document.getElementById('nextButton').style.visibility="visible";		
	}
	
	function text() {

     document.getElementById("text").value = "";
     // document.getElementById("textfield2").value = "";
}
	
// step2

function step2()
{
	myStopFunction();
	document.getElementById('b2').style.animation= "move4 1s  forwards";
		setTimeout(function(){
			
			document.getElementById('b2').style.visibility="hidden";
			document.getElementById('b5').style.visibility="visible";
			document.getElementById('b6').style.visibility="visible";
		setTimeout(function(){
			document.getElementById('b5').style.visibility="hidden";
			document.getElementById('b6').style.visibility="hidden";
			document.getElementById('b1').style.visibility="hidden";
			document.getElementById('b8').style.visibility="visible";
			},500);
		},900);
		setTimeout(function()
		{
			myInt = setInterval(function(){ animatearrow(); },500 );
			document.getElementById('arrow1').style="visibility:visible ;position:absolute; left: 490px; top: 500px; height: 40px; z-index: 10;";	
			document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)"; 
			document.getElementById("arrow1").style.msTransform = "rotate(180deg)"; 
			document.getElementById("arrow1").style.transform = "rotate(180deg)";
			document.getElementById('ba').onclick=function() { step2on(); };
		},1100);
	}
	
function step2on()
{
	myStopFunction();
	document.getElementById('ba').onclick =" ";
	document.getElementById('v3').innerHTML="0.003";
	
	setTimeout(function()
		{
			myInt = setInterval(function(){ animatearrow(); },500 );
			document.getElementById('arrow1').style="visibility:visible ;position:absolute; left: 680px; top: 500px; height: 40px; z-index: 10;";	
			document.getElementById("arrow1").style.WebkitTransform = "rotate(360deg)"; 		
			document.getElementById("arrow1").style.msTransform = "rotate(360deg)"; 			
			document.getElementById("arrow1").style.transform = "rotate(360deg)";
			document.getElementById('bb').onclick=function() { step2tare(); };
		},500);
}

function step2tare()
{
	myStopFunction();
	document.getElementById('bb').onclick =" ";
	document.getElementById('v3').innerHTML="00.00";

	setTimeout(function()
		{
			myInt = setInterval(function(){ animatearrow(); },500 );
			document.getElementById('arrow1').style="visibility:visible ;position:absolute; left: 50px; top: 300px; height: 40px; z-index: 10;";				
			document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)"; 		
			document.getElementById("arrow1").style.msTransform = "rotate(180deg)"; 
			document.getElementById("arrow1").style.transform = "rotate(180deg)";
			document.getElementById('b8').onclick=function() { step2a(); };			
		},500);
}

function step2a()
{
	myStopFunction();
	document.getElementById('b8').style.animation= "move5 2s  forwards";
	setTimeout(function()
		{
		document.getElementById('ba').style.visibility="hidden";
		document.getElementById('b8').style.visibility="hidden";
		document.getElementById('b7').style.visibility="visible";
		document.getElementById('can3').innerHTML="Weight of sand pouring cylinder with sand(W<sub>1</sub>)=<u>7476gm</u>";
		document.getElementById('v3').innerHTML="7476";
		document.getElementById('nextButton').style.visibility="visible";
		}, 500);	
}	





// step3
function step3()
{
	myStopFunction();
	document.getElementById('c2').style.animation= "move6 1s  forwards";
	setTimeout(function()
	{	
		document.getElementById('c1').style.visibility="visible";
		document.getElementById('c2').style.visibility="visible"				
	}, 500);
	setTimeout(function()
	{
		document.getElementById('c1').style.visibility="hidden";
		document.getElementById('c2').style.visibility="hidden";
		document.getElementById('c3').style.visibility="visible";
		document.getElementById('c5').style.visibility="visible";
	},1100);
	setTimeout(function()
	{
		myInt = setInterval(function(){ animatearrow(); },500 );
		document.getElementById('arrow1').style="visibility:visible ;position:absolute; left: 10px; top: 350px; height: 40px; z-index: 10;";				
		document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)"; 		
		document.getElementById("arrow1").style.msTransform = "rotate(180deg)"; 			
		document.getElementById("arrow1").style.transform = "rotate(180deg)";
		document.getElementById('c5').onclick=function() { step3a(); };
	},1500);					
}

function step3a()
{
	myStopFunction();
	document.getElementById('c5').style.animation= "move7 3s  forwards";
	setTimeout(function()
	{
		document.getElementById('def').style.visibility="visible"
		document.getElementById('c5').style.visibility="visible";
	},500);
	setTimeout(function()
	{
		myInt = setInterval(function(){ animatearrow(); },500 );
		document.getElementById('arrow1').style="visibility:visible ;position:absolute; left: 10px; top: 350px; height: 40px; z-index: 10;";	
		document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)"; 
		document.getElementById("arrow1").style.msTransform = "rotate(180deg)"; 
		document.getElementById("arrow1").style.transform = "rotate(180deg)";
		document.getElementById('c5').onclick=function() { step3b(); };
	},1100);
}

function step3b()
{
	myStopFunction();
	document.getElementById('c5').style.animation= "move8 1s  forwards";
	document.getElementById('c2').onclick =" ";
	document.getElementById('c7').onclick =" ";
	setTimeout(function()
	{
		document.getElementById('c3').style.visibility="hidden";
		document.getElementById('c5').style.visibility="hidden";
		document.getElementById('c2').style.visibility="visible";
		document.getElementById('c7').style.visibility="visible";
	}, 500);
			
	setTimeout(function()
	{
		myInt = setInterval(function(){ animatearrow(); },500 );
		document.getElementById('arrow1').style="visibility:visible ;position:absolute; left: 490px; top: 500px; height: 40px; z-index: 10;";				
		document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)"; 		
		document.getElementById("arrow1").style.msTransform = "rotate(180deg)"; 			
		document.getElementById("arrow1").style.transform = "rotate(180deg)";
		document.getElementById('ca').onclick=function() { step3on(); };
	},1100);
		
}

function step3on()
{
	myStopFunction();
	document.getElementById('ca').onclick =" ";
	document.getElementById('v4').innerHTML="0.0005";
	setTimeout(function()
	{
		myInt = setInterval(function(){ animatearrow(); },500 );
		document.getElementById('arrow1').style="visibility:visible ;position:absolute; left: 680px; top: 500px; height: 40px; z-index: 10;";				
		document.getElementById("arrow1").style.WebkitTransform = "rotate(360deg)"; 		
		document.getElementById("arrow1").style.msTransform = "rotate(360deg)"; 			
		document.getElementById("arrow1").style.transform = "rotate(360deg)";
		document.getElementById('cb').onclick=function() { step3tare(); };
	},500);
}

function step3tare()
{
	myStopFunction();
	document.getElementById('cb').onclick =" ";
	document.getElementById('v4').innerHTML="00.00";
	setTimeout(function()
	{
		myInt = setInterval(function(){ animatearrow(); },500 );
		document.getElementById('arrow1').style="visibility:visible ;position:absolute; left: 100px; top: 280px; height: 40px; z-index: 10;";			
		document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)"; 
		document.getElementById("arrow1").style.msTransform = "rotate(180deg)"; 	
		document.getElementById("arrow1").style.transform = "rotate(180deg)";
		document.getElementById('c2').onclick=function() { step3c(); };
	},1000);
}

function step3c()
{
	myStopFunction();
	document.getElementById('c2').style.animation= "move9 1s  forwards";
	setTimeout(function()
	{
		document.getElementById('c7').style.visibility="hidden";
		document.getElementById('c2').style.visibility="hidden";
		document.getElementById('c10').style.visibility="visible";
		document.getElementById('can4').innerHTML="Weight of sand in conical portion,(W<sub>2</sub>)=<u>5596gm</u>";
		document.getElementById('v4').innerHTML="5596";
	},500)
	setTimeout(function()
	{
		document.getElementById('can4').style.visibility="hidden";
		document.getElementById('v4').style.visibility="hidden";
		document.getElementById('c10').style.visibility="hidden";
		document.getElementById('c2').style.visibility="visible";
	},5000);	
	setTimeout(function()
	{	
		myInt = setInterval(function(){ animatearrow(); },500 );
		document.getElementById('arrow1').style="visibility:visible ;position:absolute; left: 650px; top: 300px; height: 40px; z-index: 10;";		
		document.getElementById("arrow1").style.WebkitTransform = "rotate(0deg)"; 
		document.getElementById("arrow1").style.msTransform = "rotate(0deg)"; 	
		document.getElementById("arrow1").style.transform = "rotate(0deg)";
		document.getElementById('c2').onclick=function() { step3d(); };
	},5100);		
}

function step3d()
{
	myStopFunction();
	document.getElementById('c2').style.animation= "move10 1s  forwards";
	setTimeout(function()
	{
		document.getElementById('c8').style.visibility="visible";
		document.getElementById('c11').style.visibility="visible";
		document.getElementById('c2').style.visibility="hidden";
		document.getElementById('c5').style.visibility="visible";
	},500);
	setTimeout(function()
	{	
		myInt = setInterval(function(){ animatearrow(); },500 );
		document.getElementById('arrow1').style="visibility:visible ;position:absolute; left: 30px; top: 350px; height: 40px; z-index: 10;";	
		document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)"; 
		document.getElementById("arrow1").style.msTransform = "rotate(180deg)"; 
		document.getElementById("arrow1").style.transform = "rotate(180deg)";
		document.getElementById('c5').onclick=function() { step3e(); };
	},1100);
}

function step3e()
{
	myStopFunction();
	document.getElementById('c5').style.animation= "move11 1s  forwards";
	setTimeout(function()
	{
		document.getElementById('c5').style.visibility="visible";	
	},500);	
	setTimeout(function()
	{
		myInt = setInterval(function(){ animatearrow(); },500 );
		document.getElementById('arrow1').style="visibility:visible ;position:absolute; left: 30px; top: 350px; height: 40px; z-index: 10;";	
		document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)"; 
		document.getElementById("arrow1").style.msTransform = "rotate(180deg)"; 
		document.getElementById("arrow1").style.transform = "rotate(180deg)";
		document.getElementById('c5').onclick=function() { step3f(); };
	},1100);
}

function step3f()
{
	myStopFunction();
	document.getElementById('c5').style.animation= "move12 1s  forwards";
	setTimeout(function()
	{
		document.getElementById('c5').style.visibility="hidden";
		document.getElementById('c11').style.visibility="hidden";	
		document.getElementById('c9').style.visibility="visible";	
		document.getElementById('c2').style.visibility="visible";	
	},500);
	setTimeout(function()
	{
		document.getElementById('c8').style.visibility="hidden";
		document.getElementById('c2').style.visibility="hidden";	
	},1100);		
	setTimeout(function()
	{
		myInt = setInterval(function(){ animatearrow(); },500 );
		document.getElementById('arrow1').style="visibility:visible ;position:absolute; left: 490px; top: 500px; height: 40px; z-index: 10;";		
		document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)"; 
		document.getElementById("arrow1").style.msTransform = "rotate(180deg)"; 	
		document.getElementById("arrow1").style.transform = "rotate(180deg)";
		document.getElementById('ca').onclick=function() { step3on1(); };
	},1500);		
}
function step3on1()
{
	myStopFunction();
	document.getElementById('ca').onclick =" ";
	document.getElementById('v41').innerHTML="0.003";
	setTimeout(function()
	{
		myInt = setInterval(function(){ animatearrow(); },500 );
		document.getElementById('arrow1').style="visibility:visible ;position:absolute; left: 680px; top: 500px; height: 40px; z-index: 10;";		
		document.getElementById("arrow1").style.WebkitTransform = "rotate(360deg)"; 
		document.getElementById("arrow1").style.msTransform = "rotate(360deg)"; 	
		document.getElementById("arrow1").style.transform = "rotate(360deg)";
		document.getElementById('cb').onclick=function() { step3tare1(); };
	},500);
}
function step3tare1()
{
	myStopFunction();
	document.getElementById('cb').onclick =" ";
	document.getElementById('v41').innerHTML="00.00";
	setTimeout(function()
	{
		myInt = setInterval(function(){ animatearrow(); },500 );
		document.getElementById('arrow1').style="visibility:visible ;position:absolute; left: 50px; top: 360px; height: 40px; z-index: 10;";	
		document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)"; 
		document.getElementById("arrow1").style.msTransform = "rotate(180deg)"; 
		document.getElementById("arrow1").style.transform = "rotate(180deg)";
		document.getElementById('c9').onclick=function() { step3g(); };
	},500);		
}

function step3g()
{
	myStopFunction();
	document.getElementById('c9').style.animation= "move13 2s  forwards";
	document.getElementById('c11').style.visibility="hidden";
	setTimeout(function()
	{
		document.getElementById('c9').style.visibility="hidden";
		document.getElementById('c13').style.visibility="visible";
		document.getElementById('c14').style.visibility="visible";
	},500);
	setTimeout(function(){
		document.getElementById('c13').style.visibility="hidden";
		document.getElementById('c14').style.visibility="hidden";
		document.getElementById('c15').style.visibility="visible";
		// document.getElementById('can4').style.visibility="visible";
		document.getElementById('can41').innerHTML="Weight of sand pouring cylinder(W<sub>3</sub>)=<u>436gm</u>";
		document.getElementById('v41').innerHTML="436";
		document.getElementById('nextButton').style.visibility="visible";
	},1100);
}	

// STEP4
function step4()
{
	myStopFunction();
	document.getElementById('d2').style.animation= "move21 1s 2 forwards";
	
	setTimeout(function()
	{
		document.getElementById('d1').style.visibility="visible";	
		document.getElementById('d2').style.visibility="visible";
	},500);		
	setTimeout(function()
	{
		document.getElementById('d3').style.visibility="visible";
		document.getElementById('d1').style.visibility="hidden";
	},600);
	setTimeout(function()
	{
		document.getElementById('d4').style.visibility="visible";
		document.getElementById('d3').style.visibility="hidden";
		document.getElementById('d6').style.visibility="visible";
	},1100);
	setTimeout(function()
	{
		myInt = setInterval(function(){ animatearrow(); },500 );
		document.getElementById('arrow1').style="visibility:visible ;position:absolute; left: 430px; top: 350px; height: 40px; z-index: 10;";	
	    document.getElementById("arrow1").style.WebkitTransform = "rotate(360deg)"; 
		document.getElementById("arrow1").style.msTransform = "rotate(360deg)"; 
		document.getElementById("arrow1").style.transform = "rotate(360deg)";
		document.getElementById('d6').onclick=function() { step4c(); };
	},1100);
}
	
function step4c()
{
	 myStopFunction();
	document.getElementById('d6').style.animation= "move24 1s  forwards";
	document.getElementById('d6').onclick =" ";
	document.getElementById('d7').onclick =" ";
	
	setTimeout(function()
	{
		document.getElementById('d6').style.visibility="visible";	
	},500);
	setTimeout(function()
	{
		document.getElementById('d7').style.visibility="visible";
	},1000);
	setTimeout(function()
	{
		document.getElementById('d5').style.visibility="visible";	
		document.getElementById('d7').style.visibility="hidden";			
	},2000);
	setTimeout(function()
	{
		document.getElementById('d5').style.visibility="hidden";
		document.getElementById('d8').style.visibility="visible";	
		document.getElementById('d7').style.visibility="visible";
	},3000);
	setTimeout(function()
	{
		document.getElementById('d7').style.visibility="hidden";	
		document.getElementById('d5').style.visibility="visible";
	},4000);
	setTimeout(function(){
		document.getElementById('d5').style.visibility="hidden";
		document.getElementById('d9').style.visibility="visible";
	},5000);
	setTimeout(function()
	{
		document.getElementById('d7').style.visibility="visible";
		document.getElementById('d5').style.visibility="hidden";
	},6000);
	setTimeout(function()
	{
		document.getElementById('d7').style.visibility="hidden";
		document.getElementById('d5').style.visibility="visible";
	},7000);
	setTimeout(function()
	{
		document.getElementById('d5').style.visibility="hidden";
		document.getElementById('d10').style.visibility="visible";
		document.getElementById('d13').style.visibility="visible";
		document.getElementById('d17').style.visibility="visible";
	},8000);
	setTimeout(function()
	{
		document.getElementById('d12').style.visibility="visible";
		myInt = setInterval(function(){ animatearrow(); },500 );
		document.getElementById('arrow1').style="visibility:visible ;position:absolute; left: 350px; top: 290px; height: 40px; z-index: 10;";	
		document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)"; 
		document.getElementById("arrow1").style.msTransform = "rotate(180deg)"; 
		document.getElementById("arrow1").style.transform = "rotate(180deg)";
		document.getElementById('d13').onclick=function() { step4a(); };
	},9000);
}

function step4a()
{
	myStopFunction();
	document.getElementById('d13').style.animation= "move22 2s  forwards";
	setTimeout(function()
	{
		document.getElementById('d10').style.visibility="hidden";
		document.getElementById('d13').style.visibility="hidden";
		document.getElementById('d5').style.visibility="visible";
		document.getElementById('d17').style.visibility="hidden";	
	},500);		
	setTimeout(function()
	{
	myInt = setInterval(function(){ animatearrow(); },500 );
	document.getElementById('arrow1').style="visibility:visible ;position:absolute; left: 300px; top: 290px; height: 40px; z-index: 10;";	
	document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)"; 
	document.getElementById("arrow1").style.msTransform = "rotate(180deg)"; 
	document.getElementById("arrow1").style.transform = "rotate(180deg)";
	document.getElementById('d5').onclick=function() { step4b(); };
	},1100);
}

 function step4b()
{
	myStopFunction();
	document.getElementById('d5').style.animation= "move23 2s  forwards";
	setTimeout(function()
	{
		document.getElementById('d5').style.visibility="hidden";
		document.getElementById('d14').style.visibility="visible";
		document.getElementById('d13').style.visibility="visible";	
	},500);
	setTimeout(function(){
	myInt = setInterval(function(){ animatearrow(); },500 );
		
		document.getElementById('arrow1').style="visibility:visible ;position:absolute; left: 450px; top: 380px; height: 40px; z-index: 10;";
			
		document.getElementById("arrow1").style.WebkitTransform = "rotate(0deg)"; 
	
		document.getElementById("arrow1").style.msTransform = "rotate(0deg)"; 
		
		document.getElementById("arrow1").style.transform = "rotate(0deg)";
		document.getElementById('d13').onclick=function() { step4d(); };
	},1100);
}


 function step4d()
{
	myStopFunction();
	document.getElementById('d13').style.animation= "move25 2s  forwards";
	setTimeout(function()
	{
		document.getElementById('d8').style.visibility="hidden";
		document.getElementById('d13').style.visibility="hidden";
		document.getElementById('d5').style.visibility="visible";
	},500);
	setTimeout(function()
	{
		document.getElementById('d5').style.visibility="hidden";
		document.getElementById('d16').style.visibility="visible";
		document.getElementById('d13').style.visibility="visible";	
	},1100);
	setTimeout(function()
	{
		myInt = setInterval(function(){ animatearrow(); },500 );
		document.getElementById('arrow1').style="visibility:visible ;position:absolute; left: 400px; top: 380px;  height: 40px; z-index: 10;";	
		document.getElementById("arrow1").style.WebkitTransform = "rotate(0deg)"; 
		document.getElementById("arrow1").style.msTransform = "rotate(0deg)"; 
		document.getElementById("arrow1").style.transform = "rotate(0deg)";
		document.getElementById('d13').onclick=function() { step4e(); };
	},1500);
}

function step4e()
{
	myStopFunction();
	document.getElementById('d13').style.animation= "move26 2s  forwards";
	setTimeout(function()
	{
		document.getElementById('d10').style.visibility="hidden";
		document.getElementById('d9').style.visibility="hidden";
		document.getElementById('d13').style.visibility="hidden";
		document.getElementById('d5').style.visibility="visible";
		document.getElementById('d16').style.visibility="visible";
		document.getElementById('d15').style.visibility="visible";
	setTimeout(function()
	{
		document.getElementById('d5').style.visibility="hidden";	
		document.getElementById('d24').style.visibility="visible";
		document.getElementById('d25').style.visibility="visible";
		document.getElementById('d6').style.visibility="visible";			
	},500);
},1100);
	setTimeout(function()
	{
		myInt = setInterval(function(){ animatearrow(); },500 );
		document.getElementById('arrow1').style="visibility:visible ;position:absolute; left: 100px; top: 290px; height: 40px; z-index: 10;";	
		document.getElementById("arrow1").style.WebkitTransform = "rotate(-90deg)"; 
		document.getElementById("arrow1").style.msTransform = "rotate(-90deg)"; 
		document.getElementById("arrow1").style.transform = "rotate(-90deg)";
		document.getElementById('d25').onclick=function() { step4f(); };
	},1500);
}

function step4f()
{
	myStopFunction();
	document.getElementById('d25').style.animation= "move27 2s  forwards";
	setTimeout(function()
	{
		document.getElementById('d25').style.visibility="visible";
	},500);
	setTimeout(function(){
		document.getElementById('d26').style.visibility="visible";
		document.getElementById('d25').style.visibility="hidden";
		document.getElementById('d29').style.visibility="visible";
	},1100);

		setTimeout(function(){
		myInt = setInterval(function(){ animatearrow(); },500 );
		document.getElementById('arrow1').style="visibility:visible ;position:absolute; left: 100px; top: 290px; height: 40px; z-index: 10;";	
		document.getElementById("arrow1").style.WebkitTransform = "rotate(-90deg)"; 
		document.getElementById("arrow1").style.msTransform = "rotate(-90deg)"; 
		document.getElementById("arrow1").style.transform = "rotate(-90deg)";
		document.getElementById('d26').onclick=function() { step4g(); };
	},1500);
}


function step4g()
{
	myStopFunction();
	document.getElementById('d26').style.animation= "move28 2s  forwards";
	setTimeout(function()
	{
		document.getElementById('d29').style.visibility="hidden";
		document.getElementById('d26').style.visibility="visible";
	},500);
	setTimeout(function(){
		document.getElementById('d18').style.visibility="visible";
		document.getElementById('d27').style.visibility="visible";
		document.getElementById('d24').style.visibility="hidden";
		document.getElementById('d4').style.visibility="hidden";
		document.getElementById('d6').style.visibility="hidden";
		document.getElementById('d26').style.visibility="hidden";
		document.getElementById('d12').style.visibility="hidden";
		document.getElementById('d2').style.visibility="hidden";	
		document.getElementById('d14').style.visibility="hidden";
		document.getElementById('d15').style.visibility="hidden";
		document.getElementById('d16').style.visibility="hidden";
		document.getElementById('da').style.visibility="visible";
		document.getElementById('db').style.visibility="visible";
},1100);
	
	setTimeout(function()
		{
			myInt = setInterval(function(){ animatearrow(); },500 );
			document.getElementById('arrow1').style="visibility:visible ;position:absolute; left: 490px; top: 500px; height: 40px; z-index: 10;";	
			document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)"; 
			document.getElementById("arrow1").style.msTransform = "rotate(180deg)"; 		
			document.getElementById("arrow1").style.transform = "rotate(180deg)";
			document.getElementById('da').onclick=function() { step4on(); };
		},1100);
		
}
function step4on()
{
	myStopFunction();
	document.getElementById('da').onclick =" ";
	document.getElementById('v5').innerHTML="0.003";
	setTimeout(function()
		{
			myInt = setInterval(function(){ animatearrow(); },500 );
			document.getElementById('arrow1').style="visibility:visible ;position:absolute; left: 680px; top: 500px; height: 40px; z-index: 10;";				
			document.getElementById("arrow1").style.WebkitTransform = "rotate(360deg)"; 		
			document.getElementById("arrow1").style.msTransform = "rotate(360deg)"; 		
			document.getElementById("arrow1").style.transform = "rotate(360deg)";
			document.getElementById('db').onclick=function() { step4tare(); };
		},1100);
}
function step4tare()
{
	myStopFunction();
	document.getElementById('db').onclick =" ";
	document.getElementById('v5').innerHTML="00.00";

	setTimeout(function(){
	myInt = setInterval(function(){ animatearrow(); },500 );
		
		document.getElementById('arrow1').style="visibility:visible ;position:absolute; left: 100px; top: 290px; height: 40px; z-index: 10;";			
		document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)"; 	
		document.getElementById("arrow1").style.msTransform = "rotate(180deg)"; 		
		document.getElementById("arrow1").style.transform = "rotate(180deg)";
		document.getElementById('d27').onclick=function() { step4h(); };
	},1500);
}

function step4h()
{
	myStopFunction();
	document.getElementById('d27').style.animation= "move29 2s  forwards";
	setTimeout(function(){
			document.getElementById('d28').style.visibility="visible";
			document.getElementById('d29').style.visibility="visible";
			document.getElementById('d27').style.visibility="hidden";
			document.getElementById('d29').style.visibility="hidden";
	},500);
	setTimeout(function(){
		document.getElementById('can5').innerHTML="Total weight of exacting soil=867gm";
		document.getElementById('v5').innerHTML="867.6";	
	},1100);
	setTimeout(function(){
		document.getElementById('d28').style.visibility="hidden";
		document.getElementById('d19').style.visibility="visible";
		document.getElementById('can5').style.visibility="hidden";
		document.getElementById('v5').style.visibility="hidden";
	},3500);

	setTimeout(function()
		{
			myInt = setInterval(function(){ animatearrow(); },500 );
			document.getElementById('arrow1').style="visibility:visible ;position:absolute; left: 490px; top: 500px; height: 40px; z-index: 10;";				
			document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)"; 		
			document.getElementById("arrow1").style.msTransform = "rotate(180deg)"; 			
			document.getElementById("arrow1").style.transform = "rotate(180deg)";
			document.getElementById('da').onclick=function() { step4on1(); };
		},3600);
		
}
	function step4on1()
{
	myStopFunction();
	document.getElementById('da').onclick =" ";
	document.getElementById('v51').innerHTML="0.003";
	setTimeout(function()
		{
			myInt = setInterval(function(){ animatearrow(); },500 );
			document.getElementById('arrow1').style="visibility:visible ;position:absolute; left: 680px; top: 500px; height: 40px; z-index: 10;";				
			document.getElementById("arrow1").style.WebkitTransform = "rotate(360deg)"; 		
			document.getElementById("arrow1").style.msTransform = "rotate(360deg)"; 			
			document.getElementById("arrow1").style.transform = "rotate(360deg)";
			document.getElementById('db').onclick=function() { step4tare1(); };
},1100);
}
function step4tare1()
{
	myStopFunction();
	document.getElementById('db').onclick =" ";
	document.getElementById('v51').innerHTML="00.00";

	setTimeout(function(){
	myInt = setInterval(function(){ animatearrow(); },500 );		
		document.getElementById('arrow1').style="visibility:visible ;position:absolute; left: 100px; top: 410px; height: 40px; z-index: 10;";			
		document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)"; 	
		document.getElementById("arrow1").style.msTransform = "rotate(180deg)"; 		
		document.getElementById("arrow1").style.transform = "rotate(180deg)";
		document.getElementById('d19').onclick=function() { step4i(); };
	},1500);
}

function step4i()
{
	myStopFunction();
	document.getElementById('d19').style.animation= "move30 1s  forwards";
	setTimeout(function(){
		document.getElementById('can5').style.visibility="visible";
		document.getElementById('d19').style.visibility="visible";
		document.getElementById('can5').innerHTML="Weight of empty cup,a(gm)=11.30gm";
		document.getElementById('v51').innerHTML="11.30";
		document.getElementById('nextButton').style.visibility="visible";
	},500);
}

//step 5//
function step5()
{
	myStopFunction();
	document.getElementById('e2').style.animation= "move31 2s  forwards";
	setTimeout(function(){
		document.getElementById('e2').style.visibility="visible";
	},500);
	setTimeout(function(){
		document.getElementById('e2').style.visibility="hidden";
		document.getElementById('e3').style.visibility="hidden";
		document.getElementById('e7').style.visibility="visible";
	},1100);
	setTimeout(function(){
	myInt = setInterval(function(){ animatearrow(); },500 );
		
		document.getElementById('arrow1').style="visibility:visible ;position:absolute; left: 500px; top: 200px; height: 40px; z-index: 10;";			
		document.getElementById("arrow1").style.WebkitTransform = "rotate(-90deg)"; 	
		document.getElementById("arrow1").style.msTransform = "rotate(-90deg)"; 		
		document.getElementById("arrow1").style.transform = "rotate(-90deg)";
		document.getElementById('e7').onclick=function() { step5a1(); };
	},2000);
}

function step5a1()
{
	myStopFunction();
	document.getElementById('e7').style.animation= "move37 2s  forwards";
	setTimeout(function(){
		document.getElementById('e7').style.visibility="visible";
	},500);
	setTimeout(function(){
			document.getElementById('e8').style.visibility="visible";
			document.getElementById('e7').style.visibility="hidden";
	},1100);
	setTimeout(function(){
		document.getElementById('e8').style.visibility="hidden";
		document.getElementById('e9').style.visibility="visible";
	},1200);
	setTimeout(function(){
		document.getElementById('e10').style.visibility="hidden";
		document.getElementById('e3').style.visibility="hidden";
		document.getElementById('e4').style.visibility="hidden";
		document.getElementById('e5').style.visibility="hidden";
		document.getElementById('e6').style.visibility="hidden";
		document.getElementById('e1').style.visibility="visible";
		document.getElementById('ea').style.visibility="visible";
		document.getElementById('eb').style.visibility="visible";
		
	setTimeout(function()
		{
			myInt = setInterval(function(){ animatearrow(); },500 );
			document.getElementById('arrow1').style="visibility:visible ;position:absolute; left: 490px; top: 500px; height: 40px; z-index: 10;";				
			document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)"; 		
			document.getElementById("arrow1").style.msTransform = "rotate(180deg)"; 		
			document.getElementById("arrow1").style.transform = "rotate(180deg)";
			document.getElementById('ea').onclick=function() { step5on(); };
		},1500);
	},2000);
		
}
	function step5on()
{
	myStopFunction();
	document.getElementById('ea').onclick =" ";
	document.getElementById('v7').innerHTML="0.003";
	setTimeout(function()
		{
			myInt = setInterval(function(){ animatearrow(); },500 );
			document.getElementById('arrow1').style="visibility:visible ;position:absolute; left: 680px; top: 500px; height: 40px; z-index: 10;";				
			document.getElementById("arrow1").style.WebkitTransform = "rotate(360deg)"; 		
			document.getElementById("arrow1").style.msTransform = "rotate(360deg)"; 			
			document.getElementById("arrow1").style.transform = "rotate(360deg)";
			document.getElementById('eb').onclick=function() { step5tare(); };
		},1100);
}
function step5tare()
{
	myStopFunction();
	document.getElementById('eb').onclick =" ";
	document.getElementById('v7').innerHTML="00.00";
			setTimeout(function(){
				document.getElementById('v7').style.visibility="hidden";
			},500);
			
	setTimeout(function(){
		myInt = setInterval(function(){ animatearrow(); },500 );		
		document.getElementById('arrow1').style="visibility:visible ;position:absolute; left: 100px; top: 410px; height: 40px; z-index: 10;";			
		document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)"; 	
		document.getElementById("arrow1").style.msTransform = "rotate(180deg)"; 		
		document.getElementById("arrow1").style.transform = "rotate(180deg)";
		document.getElementById('e9').onclick=function() { step5a11(); };
	},1100);
}

function step5a11()
{
myStopFunction();
document.getElementById('e9').style.animation= "move351 1s  forwards";
	setTimeout(function(){
		document.getElementById('can8').innerHTML="Weight of cup+wet soil,b(gm) =65.14gm";
		document.getElementById('v8').innerHTML="65.14";
},500);
	setTimeout(function(){
		document.getElementById('e9').style.visibility="hidden";
		document.getElementById('ea').style.visibility="hidden";
		document.getElementById('eb').style.visibility="hidden";
		document.getElementById('e1').style.visibility="hidden";
		document.getElementById('can8').style.visibility="hidden";
		document.getElementById('v8').style.visibility="hidden";
		document.getElementById('e11').style.visibility="visible";
		document.getElementById('e12').style.visibility="visible";
		document.getElementById('e20').style.visibility="visible";
	},1500);

 setTimeout(function(){
	myInt = setInterval(function(){ animatearrow(); },500 );
	document.getElementById('arrow1').style="visibility:visible ;position:absolute; left: 100px; top: 410px; height: 40px; z-index: 10;";	
	document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)"; 
	document.getElementById("arrow1").style.msTransform = "rotate(180deg)"; 	
	document.getElementById("arrow1").style.transform = "rotate(180deg)";
	document.getElementById('e20').onclick=function() { step5a(); };
	},2000);
}

function step5a()
{
	myStopFunction();
	document.getElementById('e20').style.animation= "move32 2s  forwards";
	setTimeout(function(){
		document.getElementById('e20').style.visibility="visible";
		document.getElementById('e12').style.visibility="visible";
	},500);
	setTimeout(function(){
		myInt = setInterval(function(){ animatearrow(); },500 );
		document.getElementById('arrow1').style="visibility:visible ;position:absolute; left: 300px; top: 290px; height: 40px; z-index: 10;";	
		document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)"; 
		document.getElementById("arrow1").style.msTransform = "rotate(180deg)"; 
		document.getElementById("arrow1").style.transform = "rotate(180deg)";
		document.getElementById('e12').onclick=function() { step5b(); };
	},1100);
}

function step5b()
{
	myStopFunction();
	document.getElementById('e12').style.animation= "move33 2s  forwards";
	setTimeout(function(){
		document.getElementById('e12').style.visibility="visible";
		document.getElementById('24h').style.visibility="visible";
		document.getElementById('e20').style.visibility="hidden";
		document.getElementById('v6').innerHTML="30";
	},500);
	setTimeout(function(){
		myInt = setInterval(function(){ animatearrow(); },500 );
		document.getElementById('arrow1').style="visibility:visible ;position:absolute; left: 500px; top: 290px; height: 40px; z-index: 10;";	
		document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)"; 
		document.getElementById("arrow1").style.msTransform = "rotate(180deg)"; 
		document.getElementById("arrow1").style.transform = "rotate(180deg)";
		document.getElementById('e12').onclick=function() { step5c(); };
	},7100);
}
function step5c()
{
	myStopFunction();
	document.getElementById('e12').style.animation= "move34 2s  forwards";
	setTimeout(function(){
			document.getElementById('24h').style.visibility="hidden";
			document.getElementById('e12').style.visibility="visible";
			document.getElementById('e20').style.visibility="visible";
	},500);
	setTimeout(function(){
		myInt = setInterval(function(){ animatearrow(); },500 );		
		document.getElementById('arrow1').style="visibility:visible ;position:absolute; left: 530px; top: 290px; height: 40px; z-index: 10;";			
		document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)"; 	
		document.getElementById("arrow1").style.msTransform = "rotate(180deg)"; 		
		document.getElementById("arrow1").style.transform = "rotate(180deg)";
		document.getElementById('e20').onclick=function() { step5d(); };
	},1100);
}
function step5d()
{
	myStopFunction();
	document.getElementById('e20').style.animation= "move35 2s  forwards";
	setTimeout(function(){
		document.getElementById('e20').style.visibility="visible";
		document.getElementById('e11').style.visibility="hidden";
		document.getElementById('e12').style.visibility="hidden";
		document.getElementById('v6').style.visibility="hidden";
		document.getElementById('e1').style.visibility="visible";
		document.getElementById('ea').style.visibility="visible";
		document.getElementById('eb').style.visibility="visible";		 
	},1500);

	setTimeout(function()
	{
		myInt = setInterval(function(){ animatearrow(); },500 );
		document.getElementById('arrow1').style="visibility:visible ;position:absolute; left: 490px; top: 500px; height: 40px; z-index: 10;";	
		document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)"; 
		document.getElementById("arrow1").style.msTransform = "rotate(180deg)"; 
		document.getElementById("arrow1").style.transform = "rotate(180deg)";
		document.getElementById('ea').onclick=function() { step5on1(); };
	},2000);		
}
function step5on1()
{
	myStopFunction();
	document.getElementById('ea').onclick =" ";
	document.getElementById('v9').innerHTML="0.003";
	setTimeout(function()
	{
		myInt = setInterval(function(){ animatearrow(); },500 );
		document.getElementById('arrow1').style="visibility:visible ;position:absolute; left: 680px; top: 500px; height: 40px; z-index: 10;";		
		document.getElementById("arrow1").style.WebkitTransform = "rotate(360deg)"; 
		document.getElementById("arrow1").style.msTransform = "rotate(360deg)"; 	
		document.getElementById("arrow1").style.transform = "rotate(360deg)";
		document.getElementById('eb').onclick=function() { step5tare1(); };
	},500);
}

function step5tare1()
{
	myStopFunction();
	document.getElementById('eb').onclick =" ";
	document.getElementById('v9').innerHTML="00.00";
	
	setTimeout(function(){
		myInt = setInterval(function(){ animatearrow(); },500 );
		document.getElementById('arrow1').style="visibility:visible ;position:absolute; left: 100px; top: 410px; height: 40px; z-index: 10;";	
		document.getElementById("arrow1").style.WebkitTransform = "rotate(180deg)"; 
		document.getElementById("arrow1").style.msTransform = "rotate(180deg)"; 
		document.getElementById("arrow1").style.transform = "rotate(180deg)";
		document.getElementById('e20').onclick=function() { step5e(); };
	},500);
}

function step5e()
{
	myStopFunction();
	document.getElementById('e20').style.animation= "move36 1s  forwards";
	setTimeout(function(){
		document.getElementById('v6').style.visibility="hidden";
		document.getElementById('e20').style.visibility="visible";
		document.getElementById('v10').innerHTML="59.36";
		document.getElementById('can10').innerHTML=" weight of cup + dry soil c(gm) =59.36gm";
		document.getElementById('nextButton').style.visibility="visible";
		
	},500);
		
}



	
	
		