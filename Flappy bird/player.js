function moveplayervrt() {
    player.y += player.ys;
    player.ys += player.a;
    if (player.y + 64 > cnv.height || player.y < 0) {
        player.ys = 0;
        player.y = 200;
        dead();
    }
}