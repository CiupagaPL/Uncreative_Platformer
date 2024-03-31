/* Uncreative Platformer made by CiupagaPL; Simple platformer made in JS.
 * GPL 3.0 (C) 2024 CiupagaPL */

/* Variables */

/* Create global variables */
let Scene = 1, SceneStart = 0, SceneChange = 0;

/* Objects */

/* Create global objects */
let Context;

/* Create board object */
let Board = {
    base: document.getElementById("Board"),
    w: window.innerWidth,
    h: window.innerHeight,
};

/* Create transition object */
let Transition = {
    w: Board.w,
    h: Board.h,
    x: 0,
    y: 0,
    color: "black",
    timer: 0,
    vx: 30,
};

/* Create background object */
let Background = {
    w: Board.w,
    h: Board.h,
    x: 0,
    y: 0,
    img: new Image(),
};

/* Create player object */
let Player = {
    w: 128,
    h: 128,
    x: 0,
    y: 0,
    color: "green",
    vx: 0,
    vy: 0,
    initvy: -14,
    gravity: 0.4,
    side: 0,
    jumpcount: 0,
};

/* Create platform object */
let Platform = {
    array: [],
    w: 512,
    h: 32,
    color: "red",
};

/* Create platform2 object */
let Platform2 = {
    w: Board.w,
    h: 128,
    x: 0,
    y: Board.h - 128,
    color: "blue",
};
