/* Uncreative Platformer made by Ciupaga; Simple game made in JS.
 * GPL 3.0 (C) 2024 Ciupaga */

/* Create render board and context */
let Board, Context;

/* Create screen object */
let Screen = {
    x: window.innerWidth, 
    y: window.innerHeight,
};

/* Create test object */
let Cube = {
    x: 128,
    y: 128,
    width: 100,
    height: 100,
    pos: {
        x: 256,
        y: 256,
    },
    img: new Image(),
};

/* General project key input function */
document.addEventListener("keydown", function(Event) {
    if(Event.keyCode == 13) {
        alert("Enter was pressed!");
    }
});

/* Function after window is loaded */
window.onload = function() {
    /* Draw board */
    Board = document.getElementById("Board");
    Board.width = Screen.x;
    Board.height = Screen.y;
    Context = Board.getContext("2d");

    /* Draw test object */
    //Context.fillStyle = "green";
    //Context.fillRect(Cube.x, Cube.y, Cube.width, Cube.height);
    Cube.img.src = "Sprites/Icon_Small.png";
    Cube.img.onload = function() {
        Context.drawImage(Cube.img, Cube.x, Cube.y, Cube.width, Cube.height);
    }
}

/* Todo: do screen change resolution function */
/* Todo: write function detecting window.y > window.x and block it */
