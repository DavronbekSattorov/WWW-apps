var canvas = document.querySelector("canvas");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');

//c.fillRect(100,100,100,100);
c.fillStyle = 'rgba(255,0,0,0.5)';

c.beginPath();
c.arc(100,100,30,0,Math.PI *2,false);
c.fill();



var y = 0;
var x = 200;
var radius = 30;
var dy = 4;//(Math.random() - 0.5) *16;
var h = innerHeight;
var heih = innerHeight;
var heih2 = 0;
function animate(){
	requestAnimationFrame(animate);
	c.clearRect(0,0, innerWidth,innerHeight);
	
	c.beginPath();
	c.arc(x,y,radius,0,Math.PI *2,false);
	c.fill();
	if (y+radius > h ){
		heih2 = heih/2;
		//heih= heih2;
        dy *= -1 ;
	}

	if(y < heih){
		heih= heih2;
		heih = h-(heih2/2);
		dy =4;
	}

	y += dy;
	dy += 0.1;
}


animate();

