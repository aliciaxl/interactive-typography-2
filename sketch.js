let font;
let points = [];
let x = 40;
let y = 380;

function preload() {
  font = loadFont("font/CaveatBrush-Regular.ttf");
}

function setup() {
  createCanvas(600, 600);
  frameRate(10);
  fill("red");

  points = font.textToPoints("AXL", x, y, 350, {
    sampleFactor: 0.5,
    simplifyThreshold: 0,
  });
}

function draw() {
  background("lightgreen");

  points.forEach((point) => {
    const distance = createVector(point.x - mouseX, point.y - mouseY);
    const distortion = distance.mult(30 / distance.mag());

    rect(point.x + distortion.x, point.y + distortion.y, 5);
  });

//    beginShape()
//     points.forEach((point)=> {
//         const distance = createVector(point.x - mouseX, point.y - mouseY);
//     const distortion = distance.mult(30 / distance.mag());
//       vertex(point.x + distortion.x, point.y + distortion.y)
//     })
//     endShape();
}
