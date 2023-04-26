let apples = [];
let oranges = [];
let mangos = [];
let fruitCounter = 0;
let changeLeafColor = false; // flag to check if the leaf color needs to be changed

let sketch = function (p) {
  p.setup = function () {
    p.createCanvas(650, 400);
  };

  p.draw = function () {
    if (fruitCounter >= 10) { // check if 10 fruits are on the page
      p.background(300, 100, 100); // change the background color
      p.stroke(255, 220, 100); // change the stroke color of the branches

      if (fruitCounter >= 5) {
        changeLeafColor = true;
      }
    } else {
      p.background(30, 160, 195);
      p.stroke(80, 40, 20);
    }

    if (changeLeafColor) {
      p.fill(255, 255, 0);
    } else {
      p.fill(20, 250, 40);
    }

    p.fill(100, 120, 80);
    p.noStroke();
    p.triangle(-50, 400, 150, 150, 350, 400);
    p.triangle(150, 400, 350, 100, 550, 400);
    p.triangle(350, 400, 550, 250, 700, 400);
    p.stroke(80, 40, 20); // set stroke color to brown
    p.strokeWeight(2); // set stroke weight to  pixels
    drawBranch(325, 400, -90, 80, 21); // draw the main trunk of the tree and position

    for (let apple of apples) {
      drawApple(apple.x, apple.y, apple.size, apple.color);
    }
    for (let orange of oranges) {
      drawOrange(orange.x, orange.y, orange.size, orange.color);
    }
    for (let mango of mangos) {
      drawMango(mango.x, mango.y, mango.size, mango.color);
    }

    function drawBranch(x, y, angle, length, thickness) {
      if (length < 10) {
        if (changeLeafColor) {
          // change the leaf color if the flag is set
          p.fill(255, 255, 0); // set the fill color to yellow
        } else {
          p.fill(20, 250, 40);
        }
        drawLeaf(x, y, 25); // add a green leaf at the end of the branch
        return; // stop drawing when branch is too small
      }

      let endX = x + length * p.cos(p.radians(angle));
      let endY = y + length * p.sin(p.radians(angle));
      p.strokeWeight(thickness); // vary the thickness of the branch
      p.line(x, y, endX, endY); // draw the branch
      drawBranch(endX, endY, angle - 25, length * 0.8, thickness * 0.8); // draw a smaller branch to the left
      drawBranch(endX, endY, angle + 25, length * 0.8, thickness * 0.8); // draw a smaller branch to the right
    }

    function drawLeaf(x, y, size) {
      p.stroke(20);
      p.strokeWeight(1);

      if (changeLeafColor) {
        // change the leaf color if the flag is set
        p.fill(255, 255, 0); // set the fill color to yellow
      } else {
        p.fill(20, 250, 40);
      }

      p.ellipse(x, y - size * 0.1, size, size * 0.4);
    }

    function drawApple(x, y, size, color) {
      p.stroke(20);
      p.strokeWeight(3);
      p.fill(color);
      p.ellipse(x, y - size * 0.3, size, size * 0.7);
    }

    function drawOrange(x, y, size, color) {
      p.stroke(20);
      p.strokeWeight(3);
      p.fill(color);
      p.ellipse(x, y - size * 0.3, size, size * 0.7);
    }

    function drawMango(x, y, size, color) {
      p.stroke(20);
      p.strokeWeight(3);
      p.fill(color);
      p.ellipse(x, y - size * 0.3, size, size * 0.7);
    }

    p.mousePressed = function () {
      if (
        p.mouseX < 0 ||
        p.mouseX > p.width ||
        p.mouseY < 0 ||
        p.mouseY > p.height)
        {
        return;
      }

      if (apples.length + oranges.length + mangos.length >= 15) {
        // Reset the page if there are already 15 fruits on the screen
        apples = [];
        oranges = [];
        mangos = [];
        fruitCounter = 0;
        changeLeafColor = false;
      }

      if (Math.random() < 0.5) {
        apples.push({
          x: p.mouseX,
          y: p.mouseY,
          size: 30,
          color: p.color(255, 0, 0),
        });
      } else if (Math.random() < 0.5) {
        oranges.push({
          x: p.mouseX,
          y: p.mouseY,
          size: 35,
          color: p.color(300, 200, 80),
        });
      } else {
        mangos.push({
          x: p.mouseX,
          y: p.mouseY,
          size: 35,
          color: p.color(950, 100, 280),
        });
      }

      fruitCounter++; // increment the fruit counter
      if (fruitCounter >= 5) {
        changeLeafColor = true;
      } else {
        changeLeafColor = false;
      }
    };
  };
};

// Create a new p5 instance with the sketch and attach it to a container element
let container = document.getElementById("sketch-container");
let myP5 = new p5(sketch, container);