let kymani1 = function (p) {
  let x = 75; // x-coordinate of circle
  let y = 40; // y-coordinate of circle
  let u = 40;
  let vx = 5; // x-velocity of circle CHANGE THE SPEED
  let vy = 10; // y-velocity of circle CHANGE THE SPEED
  let diameter = 100; // diameter of circle
  let r = 255; // red component of circle color
  let g = 80; // green component of circle color
  let b = 80; // blue component of circle color
  p.setup = function () {
    p.createCanvas(700, 700);
    p.frameRate(30);
    p.background(255, 204, 0);
  };
  p.draw = function () {
    // Update circle position
    x += vx;
    y += vy;
    u += vx;

    // DEFINE BORDER
    if (x + diameter / 2 > p.width || x - diameter / 2 < 0) {
      vx = -vx;
    }
    
    if (y + diameter / 2 > p.height || y - diameter / 2 < 0) {
      vy = -vy;
    }

    // Update circle color when mouse is clicked
    if (p.mouseIsPressed) {
      // Generate random values for the red, green, and blue components
      r = p.random(255);
      g = p.random(255);
      b = p.random(255);
      vx++;
    }

    // Draw circle with updated position and color
    p.fill(r, 0, 0);
    p.strokeWeight(3);
    p.ellipse(x, y, diameter, diameter);
  };
};

// Create a new p5 instance with the sketch and attach it to a container element
let kymani1_div = document.getElementById("kymani1");
let p5_kymani1 = new p5(kymani1, kymani1_div);




// NEW SKETCH
let kymani2 = function (p) {
  let cubes = []; // ARRAY WILL STORE POSITION COLOR AND SIZES OF EACH CUBE

  p.setup = function () {
    p.createCanvas(700, 700, p.WEBGL);
  };

  p.draw = function () {
    p.background('#abdbff');
    p.stroke(0);
    p.strokeWeight(1);
    // DRAW ALL PREVIOUS CUBES
    for (let i = 0; i < cubes.length; i++) {
      let cube = cubes[i];
      p.push();
      p.translate(cube.x, cube.y, cube.z);
      p.rotateX(cube.angle.x);
      p.rotateY(cube.angle.y);
      p.rotateZ(cube.angle.z);
      p.fill(cube.color);
      p.box(cube.size);
      p.pop();
      // UPDATE ANGLE OF CUBE FOR FRAMES
      cube.angle.x += p.random(0.01, 0.01);
      cube.angle.y += p.random(0.01, 0.01);
      cube.angle.z += p.random(0.01, 0.1);
    }
  };

  p.mousePressed = function () {
    // GENERATE NEW CUBES WITH VARIABLES AND ADD TO ARRAY
    let x = p.random(-p.width / 2, p.width / 2);
    let y = p.random(-p.height / 2, p.height / 2);
    let z = p.random(-p.width / 2, p.width / 2);
    let color = p.color(p.random(255), p.random(255), p.random(255));
    let size = p.random(50, 100);
    let angle = { x: p.random(p.TWO_PI), y: p.random(p.TWO_PI), z: p.random(p.TWO_PI) };
    cubes.push({ x: x, y: y, z: z, color: color, size: size, angle: angle });
  };
};

// Create a new p5 instance with the sketch and attach it to a container element
let kymani2_div = document.getElementById('kymani2');
let p5_kymani2 = new p5(kymani2, kymani2_div);


