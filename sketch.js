var balls = [];
var total = 100;

function setup() {
 createCanvas(windowWidth, windowHeight);
 for( var i = 0; i < total; i++){
  balls[i] = new Ball(); 
 }
}

function draw() {
  background(0);
  for(var i = 0; i < balls.length; i++){
    balls[i].update();
    balls[i].render();
  }
}

function Ball(){
 this.size = random(1, 15);
 this.speed = 10;  
 
 this.init = function(){
   this.y = random(-height, -20);
   this.x = random(20, width - 20);
 }
 
 this.render = function(){
   fill(0, 0, random(255), random(200));
   noStroke();
   ellipse(this.x, this.y, this.size, this.size);
 }
 
 this.update = function(){
  this.y += this.speed;
  if(this.y + this.size > height){
    this.init(); 
  }
 }
 
 this.init();
}


function mousePressed(){
  var addBal = new Ball();
  balls.push(addBal);
}
