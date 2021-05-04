var video
function setup() {
  let canvas = createCanvas(640, 480);
  canvas.parent("#sketch-parent");
  background(51);
  video = createCapture(VIDEO);
  video.size(640, 480);
}

function draw() {
  background(220);
}