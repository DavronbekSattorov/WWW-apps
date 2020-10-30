var canvas = document.querySelector("canvas");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');

//c.fillRect(100,100,100,100);
//c.fillStyle = 'rgba(255,0,0,0.5)';

//c.beginPath();
//c.arc(100,100,30,0,Math.PI *2,false);
//c.fill();

function randomIntFromRange(min,max){
	return Math.floor(Math.random()*(max-min+1)+min);
}
var colorList = [
	'#981117',
	'#050A06',
	'#28DAB1',
	'#FFFEC9',
	'#FEE176',
];

var friction = 0.8;

function Ball(x,y,dy,radius){
	this.x = x;
	this.y = y;
	this.dy = dy;
	this.radius = radius;
	//this.height1 = innerHeight;
	//this.height2 =0;
	this.color = colorList[Math.floor(Math.random() * colorList.length)];
	this.draw = function(){
		c.beginPath();
		c.arc(this.x,this.y,this.radius,0,Math.PI *2,false);
		c.fillStyle = this.color;
		c.fill();
	}

	this.update = function(){
		if (this.y+this.radius + this.dy > canvas.height ){
		//this.height2 = this.height1/2;
        	this.dy = -this.dy * friction ;
		}else{
			this.dy += 0.1;
		}
		this.y += this.dy;	
		/*
		if(this.y < this.height2){
			this.height2 = this.height1-(this.height2/2);
			this.dy =4;
		}

		this.y += this.dy;
		this.dy += 0.1;
*/
		this.draw();
	}


}

var circleArray = [];

for (var i = 0; i < 300 ; i++) {
	var radius = Math.random()*30;
	var x = randomIntFromRange(0,canvas.width);
	var y = randomIntFromRange(0,canvas.height-radius);
	var dy = Math.random()*4;
	circleArray.push(new Ball(x,y,dy,radius));
}

function animate(){
	requestAnimationFrame(animate);
	c.clearRect(0,0,innerWidth,innerHeight);

	for (var i = 0; i < circleArray.length; i++) {
		circleArray[i].update();
	}
}

animate();
/*
var y = 0;
var x = 200;
var radius = 30;
var dy = 4;//(Math.random() - 0.5) *16;
var heih = innerHeight;
var heih2 = 0;
function animate(){
	requestAnimationFrame(animate);
	c.clearRect(0,0, innerWidth,innerHeight);
	
	c.beginPath();
	c.arc(x,y,radius,0,Math.PI *2,false);
	c.fill();
	if (y+radius > heih ){
		heih2 = heih/2;
        dy *= -1 ;
	}

	if(y < heih2){
		heih2 = heih-(heih2/2);
		dy =4;
	}

	y += dy;
	dy += 0.1;
}


animate();
*/
