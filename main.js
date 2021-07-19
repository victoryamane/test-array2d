function setup() {
    const canvas = createCanvas(600, 600);
    canvas.position(475, 75);
}

function draw() {
    background("#FFFFFF");
    fillBoard();
    paintBoard();
    setTimeout(() => {
        test();
        paintBoard();
    },5000);
}