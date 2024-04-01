/* Uncreative Platformer made by CiupagaPL; Simple platformer made in JS.
 * GPL 3.0 (C) 2024 CiupagaPL */

/* Variables */

/* Create global variables */
let Scene = 1, SceneStart = 0, SceneChange = 0;

/* Objects */

/* Create global objects */
let Context;

/* Create screen object */
let Screen = {
    w: window.innerWidth,
    h: window.innerHeight,
};

/* Create mouse object */
let Mouse = {
    w: 10,
    h: 10,
    x: 0,
    y: 0,
};

/* Create board object */
let Board = {
    base: document.getElementById("Board"),
    w: Screen.w,
    h: Screen.h,
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

/* Create logo object */
let Logo = {
    w: Board.w / 2,
    h: Board.h / 4,
    x: Board.w / 2 - Board.w / 2 / 2,
    y: Board.h / 2 - Board.h / 4,
    img: new Image(),
};

/* Create button1 object */
let Button1 = {
    w: Board.w / 3,
    h: Board.h / 16,
    x: Board.w / 2 - Board.w / 3 / 1.95,
    y: Board.h * 3 / 5 - Board.h / 16,
    color: "red",
};

/* Create button2 object */
let Button2 = {
    w: Board.w / 6,
    h: Board.h / 16,
    x: Board.w / 2 - Board.w / 3 / 1.9,
    y: Board.h * 3.35 / 5 - Board.h / 16,
    color: "red",
};

/* Create button3 object */
let Button3 = {
    w: Board.w / 6,
    h: Board.h / 16,
    x: Board.w / 2,
    y: Board.h * 3.35 / 5 - Board.h / 16,
    color: "red",
};

/* Create button4 object */
let Button4 = {
    w: Board.w / 6,
    h: Board.h / 16,
    x: Board.w / 2 - Board.w / 3 / 1.9,
    y: Board.h * 3.7 / 5 - Board.h / 16,
    color: "red",
};

/* Create button5 object */
let Button5 = {
    w: Board.w / 6,
    h: Board.h / 16,
    x: Board.w / 2,
    y: Board.h * 3.7 / 5 - Board.h / 16,
    color: "red",
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
