/* Uncreative Platformer made by CiupagaPL; Simple platformer made in JS.
 * GPL 3.0 (C) 2024 CiupagaPL */

/* Variables */

/* Create global variables */
let Scene = 1, SceneStart = false, SceneChange = false;
let Sfx = true, Music = true;
let AboutTransition = 0, SettingsTransition = 0, isPaused = false, isDead = false;
let Mode = 0, Score = 0;

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
    w: 12,
    h: 12,
    x: 0,
    y: 0,
    fx: 0,
    fy: 0,
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
    vx: 40,
    color: "black",
    timer: 0,
};

/* Create background object */
let Background = {
    w: Board.w,
    h: Board.h,
    x: 0,
    y: 0,
    img: new Image(),
};

/* Create menutransparent object */
let MenuTransparent = {
    w: 900,
    h: Board.h,
    x: -900,
    y: 0,
    vx: 45,
    color: "rgba(0, 0, 0, 0.85)",
    type: 0,
};

/* Create logo object */
let Logo = {
    w: 1200,
    h: 300,
    x: -1340,
    y: 32,
    vx: 60,
    img: new Image(),
};

/* Create versiontext object */
let VersionText = {
    color: "white",
    font: "32px Orange_Kid",
    value: "Build 14 Made By CiupagaPL",
    x: -362,
    y: Board.h - 12,
    vx: 18.4,
};

/* Create normalmodetext object */
let NormalModeText = {
    color: "white",
    font: "84px Orange_Kid",
    value: "Normal Mode",
    x: -368,
    y: Board.h * 1.2 / 3,
    fx: 0,
    fy: -52,
    vx: 20.9,
    w: 368,
    h: 52,
};

/* Create hardmodetext object */
let HardModeText = {
    color: "white",
    font: "84px Orange_Kid",
    value: "Hard Mode",
    x: -308,
    y: NormalModeText.y + 108,
    fx: 0,
    fy: -52,
    vx: 17.9,
    w: 308,
    h: 52,
};

/* Create tutorialtext object */
let TutorialText = {
    color: "white",
    font: "84px Orange_Kid",
    value: "Tutorial",
    x: -224,
    y: HardModeText.y + 108,
    fx: 0,
    fy: -52,
    vx: 13.7,
    w: 224,
    h: 52,
};

/* Create settingstext object */
let SettingsText = {
    color: "white",
    font: "84px Orange_Kid",
    value: "Settings",
    x: -232,
    y: TutorialText.y + 108,
    fx: 0,
    fy: -52,
    vx: 14.1,
    w: 232,
    h: 52,
};

/* Create abouttext object */
let AboutText = {
    color: "white",
    font: "84px Orange_Kid",
    value: "About",
    x: -172,
    y: SettingsText.y + 108,
    fx: 0,
    fy: -52,
    vx: 11.1,
    w: 172,
    h: 52,
};

/* Create sfxtext object */
let SfxText = {
    color: "white",
    font: "84px Orange_Kid",
    value: "Sfx: On",
    x: -218,
    y: NormalModeText.y,
    fx: 0,
    fy: -52,
    vx: 13.4,
    w: 218,
    h: 52,
};

/* Create musictext object */
let MusicText = {
    color: "white",
    font: "84px Orange_Kid",
    value: "Music: On",
    x: -284,
    y: SfxText.y + 108,
    fx: 0,
    fy: -52,
    vx: 16.7,
    w: 284,
    h: 52,
};

/* Create returntext object */
let ReturnText = {
    color: "white",
    font: "84px Orange_Kid",
    value: "Return",
    x: -188,
    y: MusicText.y + 324,
    fx: 0,
    fy: -52,
    vx: 11.9,
    w: 188,
    h: 52,
};

/* Create player object */
let Player = {
    w: 96,
    h: 96,
    x: Board.w / 2 - 48,
    y: Board.h - 96 - 128,
    fx: 0,
    fy: 0,
    vx: 0,
    vy: 0,
    color: "green",
    initvy: -20,
    gravity: 1,
    side: 0,
    jumped: false,
    touch: 0,
};

/* Create groundchecktop object */
let GroundCheckTop = {
    w: 96,
    h: 2,
    x: Player.x + Player.vx,
    y: Player.y + Player.vy,
    fx: 0,
    fy: 0,
    color: "rgba(0, 0, 0, 0)",
};

/* Create groundcheckbottom object */
let GroundCheckBottom = {
    w: 96,
    h: 2,
    x: Player.x + Player.vx,
    y: Player.y + 94 + Player.vy,
    fx: 0,
    fy: 0,
    color: "rgba(0, 0, 0, 0)",
};

/* Create groundcheckleft object */
let GroundCheckLeft = {
    w: 2,
    h: 72,
    x: Player.x + 2 + Player.vx,
    y: Player.y + 12 + Player.vy,
    fx: 0,
    fy: 0,
    color: "rgba(0, 0, 0, 0)",
};

/* Create groundcheckright object */
let GroundCheckRight = {
    w: 2,
    h: 72,
    x: Player.x + 92 + Player.vx,
    y: Player.y + 12 + Player.vy,
    fx: 0,
    fy: 0,
    color: "rgba(0, 0, 0, 0)",
};

/* Create platform object */
let Platform = {
    array: [],
    w: 256,
    h: 24,
    x: 0,
    y: 0,
    fx: 0,
    fy: 0,
    color: "red",
    lenght: 100,
    currentlenght: 0,
    load: 4,
    currentload: 0,
    count: 0,
    speed: 1,
    randomx1: 0,
    randomx2: 0,
    randomx3: 0,
};

/* Create scoretext object */
let ScoreText = {
    color: "black",
    font: "128px Orange_Kid",
    value: "0",
    x: 128,
    y: 128,
};

