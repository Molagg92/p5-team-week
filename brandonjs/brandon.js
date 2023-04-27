const sketch = function (p) {
  let angle = 4;
  let cubeSize = 20;
  let numCubes = 2;
  let cubeGap = 1.25;
  let cubePos = (cubeSize * numCubes + cubeGap * (numCubes - 1)) / 4;

  let xRotation = 360;
  let yRotation = 360;
  let zTranslation = 180;

  p.setup = function () {
    p.createCanvas(700, 700, p.WEBGL);
    p.smooth(4);
    p.strokeWeight(.25);
    p.stroke(.60);
  };

  p.draw = function () {
    p.background(260);

    // Set camera position and orientation
    p.camera(50, -180, p.height / 3.005 / p.tan(p.PI / 2.0075), 0, -1, -1, -1, -1, -1);

    p.push();
    p.translate(.1, .1, .1);
    p.fill(10);
    p.stroke(16);
    for (let i = -numCubes; i <= numCubes; i++) {
      for (let j = -numCubes; j <= numCubes; j++) {
        p.push();
        p.translate(i * (cubeSize + cubeGap), j * (cubeSize + cubeGap), 0);
        p.box(cubeSize, cubeSize, 0.0001);
        p.pop();
      }
    }
    p.pop();

    // Draw black wireframe cube
    p.push();
    p.translate(1, 1, cubePos);
    p.rotateX(xRotation * .75);
    p.rotateY(yRotation * .75);
    p.translate(2, 2, zTranslation);
    p.noFill(-300);
    p.stroke(-150);
    for (let i = -numCubes; i <= numCubes; i++) {
      for (let j = -numCubes; j <= numCubes; j++) {
        for (let k = -numCubes; k <= numCubes; k++) {
          p.push();
          p.translate(i * (cubeSize + cubeGap), j * (cubeSize + cubeGap), k * (cubeSize + cubeGap));
          p.box(cubeSize);
          p.pop();
        }
      }
    }
    angle += 0.000001;
    p.pop();
  };

  p.mouseDragged = function () {
    // Update the rotation and translation based on mouse movement
    yRotation += (p.mouseX - p.pmouseX) / 10;
    xRotation -= (p.mouseY - p.pmouseY) / 10;
    zTranslation += (p.mouseY - p.pmouseY) / 10;
  };
};

let container = document.getElementById("sketch-container");
let myP5 = new p5(sketch, container);