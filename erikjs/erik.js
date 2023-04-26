// Define the sketch using instance mode
let sketch = function (p) {

    p.setup = function () {
        p.createCanvas(700, 700);
        p.x = p.width / 2;
        p.y = p.height / 2;
        p.background(220);
    }

    p.draw = function () {
        p.x = p.random(0, p.width);
        p.y = p.random(0, p.height);
        p.d = p.random(10, 50);
        let colorX = p.map(p.x, 0, p.width, 0, 255);
        let colorY = p.map(p.y, 0, p.height, 0, 255);
        p.fill(colorX, colorY, 0);
        p.rect(p.x, p.y, p.d, p.d);
    }
};

// Create a new p5 instance with the sketch and attach it to a container element
let container = document.getElementById("sketch-container");
let myP5 = new p5(sketch, container);