/* Uncreative Platformer made by Ciupaga; Simple game made in JS.
 * GPL 3.0 (C) 2024 Ciupaga */

/* Create global variables */
let Scene = 1, Fps = 60, PlayerSpeed = 18, TransitionSpeed = 36, isTransition = false;

/* Create global objects */
let Board, Context;

/* Create screen object */
let Screen = {
    x: window.innerWidth, 
    y: window.innerHeight,
    ax: window.screen.width,
    ay: window.screen.height,
};

/* Create transition object */
let Transition = {
    x: 0,
    y: 0,
    width: Screen.x,
    height: Screen.y,
    color: "green",
};

/* Create cube object */
let Player = {
    x: 128,
    y: 128,
    width: 128,
    height: 128,
    color: "red",
};

/* Create logo object */
let Logo = {
    x: 256,
    y: 256,
    width: 1600,
    height: 400,
    img: new Image(),
};

window.onload = function() {
    /* Create board and context object */
    Board = document.getElementById("Board");
    Board.width = Screen.x;
    Board.height = Screen.y;
    Context = Board.getContext("2d");

    /* Set textures of objects */
    Logo.img.src = "Sprites/Logo.png";

    /* Start update function */
    requestAnimationFrame(window.update);
}

