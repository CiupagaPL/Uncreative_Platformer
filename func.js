/* Uncreative Platformer made by Ciupaga; Simple game made in JS.
 * GPL 3.0 (C) 2024 Ciupaga */

/* Update function */
window.update = function() {
    /* Clear screen */
    Context.clearRect(0, 0, Board.width, Board.height);

    /* Draw objects */
    Context.drawImage(Cube.img, Cube.x, Cube.y, Cube.width, Cube.height);
    Context.drawImage(Test1.img, Test1.x, Test1.y, Test1.width, Test1.height);
    Context.fillStyle = Test2.color;
    Context.fillRect(Test2.x, Test2.y, Test2.width, Test2.height);

    /* Continue update */
    requestAnimationFrame(window.update);
}

/* Key input function */
document.addEventListener("keydown", function(Event) {
    switch(Event.key) {
        case "w":
            /* Move object y */
            Test2.y = Test2.y - 25;

            break;
        case "a":
            /* Move object x */
            Test2.x = Test2.x - 25;

            break;
        case "s":
            /* Move object y */
            Test2.y = Test2.y + 25;

            break;
        case "d":
            /* Move object x */
            Test2.x = Test2.x + 25;

            break;
        default:
            break;
    }
});
