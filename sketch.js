var num;
var cenX, cenY; 
var counter = 10;
var Dist = 5; 
var sign = 1; 
var move = true;
var button; 
var slider
var ang = 50;
var otherslider
var diaNum;
var Diameter = 300;
var Radius =Diameter/2;
 
function setup() {
	createCanvas(2000, 1800);
	cenX = windowWidth/2; 
	cenY = windowHeight/2;
		background(50,148,245)
	button = createButton("stop / go"); 
	button.position(200,50); 
	button.size(80,40);
	button.mousePressed(Pause); 


	JellySlider = createSlider(4, 15, 4); 
  JellySlider.position(30, 150);
  JellySlider.size(500,10);
	
	DiaSlider = createSlider(-400,400,150);
	DiaSlider.position(30,180);
	DiaSlider.size(200,10);
	
		
}

function draw() {
			angleMode(DEGREES); 
	
		if (move) { 
		counter = counter + sign*Dist; 
	}
	
	if (counter>1800 || counter<0) {
		sign = sign*-1; 
	}

	stroke(1);
background(50,148,245);

	fill(255,254,76);
	rect(600,20, 500, 700);
	rect(680,700,30,200);
	rect(980,700,30,200);
	rect(450,500,150,25);
	rect(1100,500,150,25);
	fill(255,255,255);
	strokeWeight(4);
	ellipse(750,150,200,200);
	ellipse(950,150,200,200);
	fill(57,188,232);
	ellipse(750,165,60,60);
	ellipse(950,165,60,60);
	fill(0,0,0);
	ellipse(750,170,20,20);
	ellipse(950,170,20,20);
	strokeWeight(2);
	fill(255,254,97);
	ellipse(850,250,40,80);
	strokeWeight(4);
	//smile
	noFill();
	bezier(630,300,680,400,1000,400,1060,300);
	line(750,50,750,30);
	line(700,60,700,30);
	line(800,60,800,30);
	line(950,50,950,30);
	line(900,60,900,30);
	line(1000,60,1000,30);
	strokeWeight(0);
	fill(214,79,52);
	//dimples
	ellipse(631,290,5,5);
	ellipse(624,280,5,5);
	ellipse(638,280,5,5);
	ellipse(1060,290,5,5);
	ellipse(1053,280,5,5);
	ellipse(1067,280,5,5);
	strokeWeight(2);
	fill(255,255,255);
	rect(790,375,40,60);
	rect(860,375,40,60);
	rect(600,450,500,100);
	fill(212,128,33);
	rect(600,550,500,170);
	strokeWeight(0);
	fill(164,177,58);
	ellipse(700,300,32,75);
	ellipse(1058,54,25,64);
	ellipse(643,62,23,69);
	ellipse(620,93,17,48);
	ellipse(950,405,24,67);
	ellipse(990,420,17,53);
	strokeWeight(1);
	//tie
	fill(247,0,32);
	quad(840,450,860,450,790,580,900,580);
	triangle(790,580,845,630,900,580);
	
	fill(0,0,0);
	rect(620,580,70,30);
	rect(710,580,70,30);
	rect(910,580,70,30);
	rect(1000,580,70,30);
	//shoes
	fill(0,0,0);
	rect(680,870,70,30,0,10,5,0);
	rect(980,870,70,30,0,10,5,0);
	strokeWeight(0);
	fill(255);
	rect(680,800,30,70);
	rect(980,800,30,70);
	fill(63,110,171);
	rect(680,820,30,5);
	rect(980,820,30,5);
	fill(252,48,43);
	rect(680,830,30,5);
	rect(980,830,30,5);
	//net
	fill(145,121,80);
	rect(1230, 250, 10,330,20);
	noFill();
	strokeWeight(1);
	ellipse(1305,265,170,80);
	line(1305,225,1305,305);
	line(1275,227,1275,303);
	line(1335,227,1335,303);
	line(1245,237,1245,293);
	line(1365,237,1365,293);
	line(1220,265,1390,265);
	line(1229,245,1380,245);
	line(1229,285,1380,285);
	//snail
	strokeWeight(0);
	gary(100+counter,800);
	diaNum = DiaSlider.value();
	//println(diaNum);
	frameRate(30);
	var numberOfJelly = JellySlider.value(); //code adopted from "circle slider loops"
	var angleDiff= 360/numberOfJelly;
	for (var i =1; i <=numberOfJelly; i++) {
		jellycircle(i*frameCount%360,diaNum);
	}
	jelly(mouseX, mouseY);
}

function Pause() {
	move = !move;
}


function jelly(X,Y){
strokeWeight(1);
fill(208,122,220);
ellipse(X,Y,120,90);
line(X+25,Y+42,X+25,Y+70);
line(X,Y+45,X,Y+70);
line(X-25,Y+42,X-25,Y+70);
strokeWeight(0);
fill(144,53,159);
ellipse(X-27,Y-12,20,17);
ellipse(X,Y,17,15);
ellipse(X+30,Y+5,17,22);
}

function jellycircle(ang,rad){
	var Xpos = cenX + rad*cos(ang);   //Get the X and Y value of ellipse
	var Ypos = cenY + rad*sin(ang);
	
	jelly(Xpos+400,Ypos-100, 50,50);
}

function gary(X,Y){
	fill(217,128,116);
	ellipse(X,Y,130,125);
	fill(121,181,210);
	ellipse(X,Y+60,170,20);
	ellipse(X+76,Y+5,5,105);
	ellipse(X+66,Y+5,5,105);
	fill(175,210,119);
	ellipse(X+66,Y-40,20,20);
	ellipse(X+76,Y-40,20,20);
	fill(212,34,13);
	ellipse(X+66,Y-37,10,10);
	ellipse(X+76,Y-37,10,10);
	fill(0);
	ellipse(X+66,Y-36,5,5);
	ellipse(X+76,Y-36,5,5);
	fill(104,85,180);
	ellipse(X-45,Y-7,15,30);
	ellipse(X-30,Y-25,15,25);
	ellipse(X-5,Y-45,25,15);
	ellipse(X+30,Y-25,25,15);
	ellipse(X+45,Y,25,15);
	fill(205,4,35);
	ellipse(X+10,Y+10,20,50);
	ellipse(X-3,Y-15,40,15);
	ellipse(X+10,Y-10,15,15);
	ellipse(X-20,Y,10,30);
	ellipse(X+7,Y+25,20,40);
	ellipse(X+2,Y+35,20,30);
}
