function setup() {
    createCanvas(522, 583);
    noFill();
    stroke(195, 93, 81); // Adjusted stroke color to slightly more red (RGB: 195, 93, 81)
    strokeWeight(0.7); // Keep stroke weight as .7
    rectMode(CENTER);
    frameRate(8); // Control the speed of the animation
}

function draw() {
    background(237, 236, 231);
    let cols = 14;
    let rows = 16;

    let w = width / cols;
    let h = height / rows;

    // Draw the lines with changing geometry
    for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
            let x = i * w + w / 2;
            let y = j * h + h / 2;

            let points = [];
            let numOfPoints = floor(random(15, 25));

            // Generate new points for each frame to create changing geometry
            for (let n = 0; n < numOfPoints; n++) {
                points.push(createVector(x + random(-w / 2, w / 2), y + random(-h / 2, h / 2)));
            }

            // Connect points with lines within each cell
            for (let p = 0; p < points.length - 1; p++) {
                // Connect the current point to the next to create a continuous line
                line(points[p].x, points[p].y, points[p + 1].x, points[p + 1].y);
            }
        }
    }
}
