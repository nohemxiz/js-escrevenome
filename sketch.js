function setup() {
    createCanvas(400, 400);
  }
  
  function draw() {
    background(220);
  }function setup() {
    createCanvas(400, 400);
    background("black")
  }
  
  function draw() {
    stroke("blue");
    fill("lightblue");
    
    
    if (mouseIsPressed) {
      rect(mouseX, mouseY, 20, 35);
    }
  }
  