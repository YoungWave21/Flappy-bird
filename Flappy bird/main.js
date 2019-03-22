initGraphics(1250, 600);

requestAnimationFrame(main);
// let platform1

changetheframe();

function main() {
    ctx.clearRect(0, 0, cnv.width, cnv.height);
    relativeY = player.y + 32;
    moveplayervrt();
    for (let n = 0; n < 4; n++) {
        backgrounddrawing(something[n], n);
    }

    ctx.drawImage(whichdrawing, player.x, player.y);

    for (let i = 0; i < 4; i++) {
        ctx.drawImage(pipeOnTop, barsx[i], topbarsy[i], 52, 500);
        barsx[i] -= 2;
        ctx.drawImage(pipeOnBottom, barsx[i], bottombarsy[i], 52, 500);
    }

    if (relativeX >= platform2.x && relativeX <= platform2.x + 52) {
        if (relativeY >= 0 && relativeY <= platform2.y + 600) {
            //this is what should happen when the playerenters between the two pipes
        }
    }

    if (KeyIsPressed["ArrowUp"] || KeyIsPressed["Space"]) {
        player.ys = -5;
    }

    //loop
    requestAnimationFrame(main);
}
let change1 = 0;

function backgrounddrawing(change, index) {
    change--;
    something[index] = change;
    if (change + 449 <= 0) {
        something[index] = cnv.width
    };
    ctx.drawImage(bgimage, change, 0);
}

function changetheframe() {
    setInterval(() => {
        if (whichdrawing == spriteOne) {
            whichdrawing = spriteTwo;
        } else if (whichdrawing == spriteTwo) {
            whichdrawing = spriteThree;
        } else if (whichdrawing == spriteThree) {
            whichdrawing = spriteOne;
        }
    }, 200);
}