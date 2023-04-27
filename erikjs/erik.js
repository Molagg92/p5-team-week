let x, y;
let angle = 0.3
let count = 0;

const sketch = function (p) {
    p.setup = function () {
        p.createCanvas(700, 700, p.WEBGL);
        x = p.width / 2;
        y = p.height / 2;
        p.background(0);
    }

    p.draw = function () {
        count += 1;
        if (count === 255) {
            count = 30;
        }
        if (p.mouseIsPressed === true) {
            if (p.mouseButton === p.LEFT) {
                p.fill(count * 2, 0, count * 2);
            }
            if (p.mouseButton === p.CENTER) {
                p.fill(0, count * 2, count * 2);
            }
        } else {
            p.fill(count * 2, 0, 0)
        }

        p.translate(p.mouseX - p.width / 2, p.mouseY - p.height / 2, p.mouseY)
        p.rectMode(p.CENTER);
        p.rotateX(p.frameCount * .02)
        p.rotateY(p.frameCount * .02)
        p.box(50, 50, 50);
    }
}

let container = document.getElementById("sketch-container");
let myP5 = new p5(sketch, container);
