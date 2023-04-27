// Define a function called "sketch" which takes in a "p" parameter
const sketch = function (p) {
  // Define the "setup" function which is called once at the start of the program
  p.setup = function () {
      // Create a canvas with dimensions 700x700
      p.createCanvas(700, 700);
      // Set the background color to black
      p.background(0,0,0);
  }
  // Define the "draw" function which is called repeatedly to update the canvas
  p.draw = function () {
      // Generate random x and y coordinates within the range [0, 900)
      let x = p.random(900)
      let y = p.random(900)
      // Map the x and y coordinates to colors between [0, 255]
      let colorX = p.map(x, 0, p.width, 0, 255);
      let colorY = p.map(y, 0, p.height, 0, 255);
      // Fill the shape with a random color
      p.fill(p.random(255), p.random(255), p.random(255)); 
      // Begin drawing a shape
      p.beginShape();
      // Define vertices for the shape with some randomness applied to the coordinates
      p.vertex(x + p.random(-40, 20), y + p.random(-40, 20));
      p.vertex(x + p.random(-40, 20), y + p.random(-40, 20));
      p.vertex(x + p.random(-40, 20), y + p.random(-40, 20));
      p.vertex(x + p.random(-40, 20), y + p.random(-40, 20));
      // Draw 100 rectangles with random colors at the current x and y position
      for (let i = 0; i < 100; i++) {
          p.fill(p.random(255), p.random(255), p.random(255));
          p.rect(x, y, 100, 100);
      }
      // End the shape and close it
      p.endShape(p.CLOSE);
      // Stop the program from looping after a certain number of frames
      if (p.frameCount >= 100000) {
          p.noLoop();
      }
  };
  // Define a function that changes the background color when the mouse is clicked
  p.mouseClicked = function() {
      p.background(p.random(255), p.random(255), p.random(255));
  }
};
let container = document.getElementById("sketch-container");
let myP5 = new p5(sketch, container);
