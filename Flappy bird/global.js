let spriteOne = document.getElementById("image");
let spriteTwo = document.getElementById("image2");
let spriteThree = document.getElementById("image3");
let bgimage = document.getElementById("BgImage");
let pipeOnTop = document.getElementById("pipeUp");
let pipeOnBottom = document.getElementById("pipeDown");
let player = {
    x: 150,
    y: 100,
    ys: 0,
    a: 0.7,
}
Math.randomDec = function (low, high) {
    return Math.random() * (high - low) + low;
}
Math.randomInt = function (low, high) {
    return Math.floor(Math.randomDec(low, high));
}
let whichdrawing = spriteOne;
let CutsceneOne = 0;
let CutsceneTwo = 449;
let CutsceneThree = 449 * 2;
let CutsceneFour = 449 * 3;
let background = [CutsceneOne, CutsceneTwo, CutsceneThree, CutsceneFour];
let barsx = [800, 1200, 1600, 2000];
let topbarsy = [Math.randomInt(-450, -150), Math.randomInt(-450, -150), Math.randomInt(-450, -150), Math.randomInt(-450, -150)];
let bottombarsy = [topbarsy[0] + 700, topbarsy[1] + 700, topbarsy[2] + 700, topbarsy[3] + 700];
let relativeY = 0;
let relativeX = player.x + 90;
let topRelativex = player.x + 45;
let topRelativeY = 0;
let bottomRelativeY = 0;