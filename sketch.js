let font;
let points = [];
let startX = 40;
let startY = 40;
let endX = 40;
let endY = 600;
let t = 0;

function preload() {
  font = loadFont("font/CaveatBrush-Regular.ttf");
}

function setup() {
  createCanvas(600, 600);
  frameRate(60);
  fill("red");

}

function draw() {
  background("black");

  // const loopDuration = 1 * 60
  //   const off = map(point.y + point.x, -s, s, 0, 60) // Timing offset by point position
  //   let t = ((frameCount + off) % loopDuration) / loopDuration

  let x = lerp(startX, endX, sin(t * PI));
  let y = lerp(startY, endY, sin(t * PI));

  t += ((1 - t) * .05);

  points = font.textToPoints("AXL", x, y, 350, {
    sampleFactor: 0.5,
    simplifyThreshold: 0,
  });


  points.forEach((point) => {

    const distance = createVector(point.x - mouseX, point.y - mouseY);
    const distortion = distance.mult(30 / distance.mag()); // .mag is magnitude of vector

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
