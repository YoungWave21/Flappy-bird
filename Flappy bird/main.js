initGraphics(1250, 600);

requestAnimationFrame(main);
changetheframe();

function main() {
    ctx.clearRect(0, 0, cnv.width, cnv.height);
    topRelativeY = player.y;
    bottomRelativeY = player.y + 64;
    relativeY = player.y + 32;
    moveplayervrt();
    for (let n = 0; n < 4; n++) {
        backgrounddrawing(background[n], n);
    }

    ctx.drawImage(whichdrawing, player.x, player.y);

    for (let i = 0; i < barsx.length; i++) {
        ctx.drawImage(pipeOnTop, barsx[i], topbarsy[i], 52, 500);
        barsx[i] -= 2;
        if (barsx[i] + 52 <= -294) {
            barsx[i] = cnv.width;
        }
        ctx.drawImage(pipeOnBottom, barsx[i], bottombarsy[i], 52, 500);
        if (relativeY <= topbarsy[i] + 500 || relativeY >= bottombarsy[i]) {
            if (relativeX >= barsx[i] && relativeX <= barsx[i] + 52) {
                // console.log("touched");
                alert("touched");
            }
        }
        if (topRelativeY <= topbarsy[i] + 500 || bottomRelativeY >= bottombarsy[i]) {
            if (topRelativex >= barsx[i] && topRelativex <= barsx[i] + 52) {
                // console.log("touched");
                alert("touched");
            }
        }
    }

    if (KeyIsPressed["ArrowUp"] || KeyIsPressed["Space"]) {
        player.ys = -5;
    }

    //loop
    requestAnimationFrame(main);
}

function backgrounddrawing(change, index) {
    change--;
    background[index] = change;
    if (change + 449 <= 0) {
        background[index] = cnv.width
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