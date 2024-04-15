/* Uncreative Platformer made by CiupagaPL; Simple platformer made in JS.
 * GPL 3.0 (C) 2024 CiupagaPL */

/* Variables */

/* Create global variables */
let Scene = 1, SceneStart = 0, SceneChange = 0;
let About = 0, Settings = 0, Pause = 0, Help = 0, Mode = 0;
let Score = 0;

/* Objects */

/* Create global objects */
let Context, CurrentPlatform;

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

/* Create background object */
let Background = {
    w: Board.w,
    h: Board.h,
    x: 0,
    y: 0,
    img: new Image(),
};

/* Create foreground object */
let Foreground = {
    w: 1200,
    h: 800,
    x: Board.w / 2 - 600,
    y: Board.h / 2 - 400,
    color: "yellow",
};

/* Create foreback object */
let ForeBack = {
    w: Board.w,
    h: Board.h,
    x: 0,
    y: 0,
    color: "rgba(0, 0, 0, 0.75)",
};

/* Create logo object */
let Logo = {
    w: 1200,
    h: 300,
    x: Board.w / 2 - 600,
    y: Board.h * 1/3 - 150,
    img: new Image(),
};

/* Create button1 object */
let Button1 = {
    w: 620,
    h: 80,
    x: Board.w / 2 - 310,
    y: Board.h * 1.5/3 - 40,
    color: "red",
};

/* Create button2 object */
let Button2 = {
    w: 300,
    h: 80,
    x: Button1.x,
    y: Button1.y + 100,
    color: "red",
};

/* Create button3 object */
let Button3 = {
    w: 300,
    h: 80,
    x: Button1.x + 320,
    y: Button1.y + 100,
    color: "red",
};

/* Create button4 object */
let Button4 = {
    w: 300,
    h: 80,
    x: Button2.x,
    y: Button2.y + 100,
    color: "red",
};

/* Create button5 object */
let Button5 = {
    w: 300,
    h: 80,
    x: Button2.x + 320,
    y: Button2.y + 100,
    color: "red",
};

/* Create buttonX object */
let ButtonX = {
    w: 48,
    h: 48,
    x: Board.w / 2 + 600 - 48 - 16,
    y: Foreground.y + 16,
    color: "red",
};

/* Create buttonpause object */
let ButtonPause = {
    w: 48,
    h: 48,
    x: 16,
    y: 16,
    color: "yellow",
};

/* Create buttonhelp object */
let ButtonHelp = {
    w: 48,
    h: 48,
    x: 48 + 16,
    y: 16,
    color: "red",
};

/* Create player object */
let Player = {
    w: 128,
    h: 128,
    x: Board.w / 2 - 64,
    y: Board.h - 72 - 64,
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
    x: 0,
    y: 0,
    color: "red",
    lenght: 100,
    currentlenght: 0,
    load: 8,
    currentload: 0,
    randomx: 0,
    randomw: 0,
    touched: 0,
};

/* Create scoretext object */
let ScoreText = {
    color: "black",
    font: "64px Fira_Mono",
    value: "0",
    x: 128,
    y: 128,
};

