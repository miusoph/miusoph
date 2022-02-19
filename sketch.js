let button;
let a = 1;
function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL)
  angleMode(DEGREES)
  button = createButton('do not click');
  button.position(0, 0);
  button.mousePressed(changeA);
}
function changeA() {
   a = random(255);
}
function draw() {
  background(30)
  
  rotateX(a)
  
  noFill()
  stroke(255)
  
  for (var i= 0; i < 20 * a; i++) {
    
    
    beginShape()
    for (var j = 0; j < 360; j += 10) {
      var rad = i * 8
      var x = rad * cos(j)
      var y = rad * sin(j) * a
      var z = sin(frameCount * 2 + i * 10)  
      
      
      vertex(x, y, z)
          }
    endShape(CLOSE)
  }


  
  
  

}
