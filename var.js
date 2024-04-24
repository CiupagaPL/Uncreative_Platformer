/* Uncreative Platformer made by CiupagaPL; Simple platformer made in JS.
 * GPL 3.0 (C) 2024 CiupagaPL */

/* Variables */

/* Create global variables */
let Scene = 1, SceneStart = false, SceneChange = false, SceneRestart = false;
let Sfx = true, Music = true;
let AboutTransition = 0, SettingsTransition = 0;
let Pause = 0, Mode = 0, Score = 0, Points = 0, Hp = 3;

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

/* Create warning object */
let Warning = {
    w: Board.w,
    h: Board.h,
    x: 0,
    y: 0,
    fx: 0,
    fy: 0,
    color: "black",
};

/* Create warningtext */
let WarningText = {
    color: "white",
    font: "48px Orange_Kid",
    value: "Resize Window and/or Refresh Page to Continue!",
    x: 32,
    y: 64,
    fx: 0,
    fy: 0,
};

/* Create transition object */
let Transition = {
    w: Board.w,
    h: Board.h,
    x: 0,
    y: 0,
    fx: 0,
    fy: 0,
    vx: 40,
    color: "black",
    timer: 0,
    type: 0,
};

/* Create background object */
let Background = {
    w: Board.w,
    h: Board.h,
    x: 0,
    y: 0,
    fx: 0,
    fy: 0,
    img: new Image(),
};

/* Create menutransparent object */
let MenuTransparent = {
    w: 790,
    h: Board.h,
    x: -790,
    y: 0,
    fx: 0,
    fy: 0,
    vx: 39.5,
    color: "rgba(0, 0, 0, 0.85)",
    type: 0,
};

/* Create title object */
let Title = {
    w: 1000,
    h: 250,
    x: -1160,
    y: 16,
    fx: 0,
    fy: 0,
    vx: 52.5,
    img: new Image(),
};

/* Create versiontext object */
let VersionText = {
    color: "white",
    font: "32px Orange_Kid",
    value: "Build 17 Made By CiupagaPL",
    x: -362,
    y: Board.h - 12,
    fx: 0,
    fy: 0,
    vx: 18.4,
};

/* Create normalmodetext object */
let NormalModeText = {
    color: "white",
    font: "84px Orange_Kid",
    value: "Normal Mode",
    x: -384,
    y: Board.h * 1.2 / 3,
    fx: 0,
    fy: -52,
    vx: 21.7,
    w: 368,
    h: 52,
};

/* Create hardmodetext object */
let HardModeText = {
    color: "white",
    font: "84px Orange_Kid",
    value: "Hard Mode",
    x: -384,
    y: NormalModeText.y + 108,
    fx: 0,
    fy: NormalModeText.fy,
    vx: NormalModeText.vx,
    w: 308,
    h: NormalModeText.h,
};

/* Create tutorialtext object */
let TutorialText = {
    color: "white",
    font: "84px Orange_Kid",
    value: "Tutorial",
    x: -384,
    y: HardModeText.y + 108,
    fx: 0,
    fy: NormalModeText.fy,
    vx: NormalModeText.vx,
    w: 224,
    h: NormalModeText.h,
};

/* Create settingstext object */
let SettingsText = {
    color: "white",
    font: "84px Orange_Kid",
    value: "Settings",
    x: -384,
    y: TutorialText.y + 108,
    fx: 0,
    fy: NormalModeText.fy,
    vx: NormalModeText.vx,
    w: 232,
    h: NormalModeText.h,
};

/* Create abouttext object */
let AboutText = {
    color: "white",
    font: "84px Orange_Kid",
    value: "About",
    x: -384,
    y: SettingsText.y + 108,
    fx: 0,
    fy: NormalModeText.fy,
    vx: NormalModeText.vx,
    w: 172,
    h: NormalModeText.h,
};

/* Create sfxtext object */
let SfxText = {
    color: "white",
    font: "84px Orange_Kid",
    value: "Sfx: On",
    x: -444,
    y: NormalModeText.y,
    fx: 0,
    fy: NormalModeText.fy,
    vx: NormalModeText.vx,
    w: 218,
    h: NormalModeText.h,
};

/* Create musictext object */
let MusicText = {
    color: "white",
    font: "84px Orange_Kid",
    value: "Music: On",
    x: -444,
    y: HardModeText.y,
    fx: 0,
    fy: NormalModeText.fy,
    vx: NormalModeText.vx,
    w: 284,
    h: NormalModeText.h,
};

/* Create returntext object */
let ReturnText = {
    color: "white",
    font: "84px Orange_Kid",
    value: "Return",
    x: -444,
    y: AboutText.y,
    fx: 0,
    fy: NormalModeText.fy,
    vx: NormalModeText.vx,
    w: 188,
    h: NormalModeText.h,
};

/* Create resumetext object */
let ResumeText = {
    color: "white",
    font: "84px Orange_Kid",
    value: "Resume",
    x: -444,
    y: NormalModeText.y,
    fx: 0,
    fy: NormalModeText.fy,
    vx: NormalModeText.vx,
    w: 218,
    h: NormalModeText.h,
};

/* Create restarttext object */
let RestartText = {
    color: "white",
    font: "84px Orange_Kid",
    value: "Restart",
    x: -444,
    y: HardModeText.y,
    fx: 0,
    fy: NormalModeText.fy,
    vx: NormalModeText.vx,
    w: 214,
    h: NormalModeText.h,
};

/* Create mainmenutext object */
let MainMenuText = {
    color: "white",
    font: "84px Orange_Kid",
    value: "Main Menu",
    x: -444,
    y: TutorialText.y,
    fx: 0,
    fy: NormalModeText.fy,
    vx: NormalModeText.vx,
    w: 200,
    h: NormalModeText.h,
};

/* Create scoretext object */
let ScoreText = {
    color: "white",
    font: "92px Orange_Kid",
    value: "0",
    x: 30,
    y: 75,
    fx: 0,
    fy: 0,
};

/* Create statustransparent object */
let StatusTransparent = {
    w: Board.w,
    h: 96,
    x: 0,
    y: -96,
    fx: 0,
    fy: 0,
    vy: 6.4,
    color: "rgba(0, 0, 0, 0.85)",
    type: 0,
};

/* Create player object */
let Player = {
    w: 128,
    h: 128,
    x: Board.w / 2 - 64,
    y: Board.h - 128 - 128,
    fx: 0,
    fy: 0,
    vx: 0,
    vy: 0,
    color: "green",
    initvy: -24,
    gravity: 1,
    side: 0,
    touched: 1,
    isgrounded: false,
    isdead: false,
};

/* Create groundchecktop object */
let GroundCheckTop = {
    w: 128,
    h: 2,
    x: Player.x + Player.vx,
    y: Player.y + Player.vy,
    fx: 0,
    fy: 0,
    color: "rgba(0, 0, 0, 0)",
};

/* Create groundcheckbottom object */
let GroundCheckBottom = {
    w: 128,
    h: 2,
    x: Player.x + Player.vx,
    y: Player.y + 126 + Player.vy,
    fx: 0,
    fy: 0,
    color: "rgba(0, 0, 0, 0)",
};

/* Create groundcheckleft object */
let GroundCheckLeft = {
    w: 2,
    h: 104,
    x: Player.x + Player.vx,
    y: Player.y + 12 + Player.vy,
    fx: 0,
    fy: 0,
    color: "rgba(0, 0, 0, 0)",
};

/* Create groundcheckright object */
let GroundCheckRight = {
    w: 2,
    h: 104,
    x: Player.x + 128 + Player.vx,
    y: Player.y + 12 + Player.vy,
    fx: 0,
    fy: 0,
    color: "rgba(0, 0, 0, 0)",
};

/* Create platform object */
let Platform = {
    array: [],
    w: 256,
    h: 28,
    x: 0,
    y: 0,
    fx: 0,
    fy: 0,
    color: "blue",
    lenght: 100,
    currentlenght: 0,
    load: 4,
    currentload: 0,
    count: 0,
    randomx1: 0,
    randomx2: 0,
};

/* Create main platform object */
let MainPlatform = {
    w: Board.w,
    h: 128,
    x: 0,
    y: Board.h - 128,
    fx: 0,
    fy: 0,
    color: "brown",
};

/* Create spike object */
let Spike = {
    w: 32,
    h: 32,
    x: 0,
    y: 800,
    fx: 0,
    fy: 0,
    color: "red",
};

