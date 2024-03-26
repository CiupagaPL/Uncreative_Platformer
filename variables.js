/* Uncreative Platformer made by Ciupaga; Simple game made in JS.
 * GPL 3.0 (C) 2024 Ciupaga */

/* Create global variables */
let Scene = 1, Fps = 120;

/* Create screen object */
let Screen = {
    x: window.innerWidth, 
    y: window.innerHeight,
    ax: window.screen.width,
    ay: window.screen.height,
};

/* Create scale variable */
let Scale = {
    x: Screen.x / 1920,
    y: Screen.y / 1080,
};

/* Create global objects variables */
let PlayerSpeed = 18;
let TransitionFpsTimer = 0, TransitionSpeed = Screen.y/30, isTransition = false;

/* Create global objects */
let Board, Context;

/* Create transition object */
let Transition = {
    x: 0,
    y: 0,
    width: 1920 * Scale.x,
    height: 1080 * Scale.y,
    color: "green",
};

/* Create cube object */
let Player = {
    x: 128 * Scale.x,
    y: 128 * Scale.y,
    width: 128 * Scale.x,
    height: 128 * Scale.y,
    color: "red",
};

/* Create logo object */
let Logo = {
    x: 128 * Scale.x,
    y: 128 * Scale.y,
    width: 800 * Scale.x,
    height: 400 * Scale.y,
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

