box_size = 50
rez = 0.003
amount = 400
speed = 0.005
factor = 0.008

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  camera(0,200, (height/2) /(PI/5), 100, 100, 100, 0, 1, 0);
}

function draw() {
  background(250,210,0);
  ambientLight(20);
  directionalLight(0, 0, 0, 1, -1);
  pointLight(255,211,0, -width/2 +100, -height/2 + 100, 300);
  //pointLight(0, 255, 255); 

  for (x=-width; x<=width; x+=box_size) {
    for (y=-height; y<=height; y+=box_size) {
      push()
      translate(x,y,0)
      depth = constrain(noise(x * factor+ frameCount * speed, y * factor + frameCount * speed)*amount,0, 1000)
      console.log(depth)
      box(box_size,box_size,depth)
      pop()
    }
  }
}