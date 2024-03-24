/* Uncreative Platformer made by Ciupaga; Simple game made in JS.
 * GPL 3.0 (C) 2024 Ciupaga */

/* Create global variables */
let Scene = 1;

/* Create global objects */
let Board, Context;

/* Create screen object */
let Screen = {
    x: window.innerWidth, 
    y: window.innerHeight,
};

/* Create cube object */
let Cube = {
    x: 512,
    y: 512,
    width: 128,
    height: 128,
    img: new Image(),
};

/* Create test1 object */
let Test1 = {
    x: 128,
    y: 128,
    width: 256,
    height: 256,
    img: new Image(),
};

/* Create test2 object */
let Test2 = {
    x: 512,
    y: 1024,
    width: 128,
    height: 128,
    color: "green"
};

window.onload = function() {
    /* Create board and context object */
    Board = document.getElementById("Board");
    Board.width = Screen.x;
    Board.height = Screen.y;
    Context = Board.getContext("2d");

    /* Set textures of objects */
    Cube.img.src = "Sprites/Icon_Small.png";
    Test1.img.src = "Sprites/Test1.png"; 

    /* Start update function */
    requestAnimationFrame(window.update);
}
