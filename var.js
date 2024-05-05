/* Uncreative Platformer made by CiupagaPL
 * GPL 3.0 (C) 2024 CiupagaPL */

/* Variables */

/* Create global variables */
let Scene = 1, SceneStart = false, SceneChange = false, SceneRestart = false;
let Sfx = true, Music = false, NormalMode = false;
let AboutTransition = 0, SettingsTransition = 0, KeybindsTransition = 0;
let PauseTransition = 0, Score = 0, Coins = 0;

/* Objects */

/* Create global objects */
let Context;
let CurrentPlatform, CurrentCoin, CurrentSpike;

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

/* Create timemusic object */
let TimeMusic = {
    menu: new Audio("Sounds/Menu.wav"),
    game: new Audio("Sounds/Game.wav"),
    timer: 0,
};

/* Create timesfx object */
let TimeSfx = {
    coin: new Audio("Sounds/Coin.wav"),
    hit: new Audio("Sounds/Hit.wav"),
    jump: new Audio("Sounds/Jump.wav"),
    select: new Audio("Sounds/Select.wav"),
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
    type: 0,
    started: false,
};

/* Create background object */
let Background = {
    w: Board.w,
    h: Board.h,
    x: 0,
    y: 0,
    fx: 0,
    fy: 0,
    color: "rgb(102, 255, 102)",
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

/* Create up object */
let UP = {
    w: 256,
    h: 256,
    x: Board.w - 224,
    y: Board.h - 256,
    fx: 0,
    fy: 0,
    img0: new Image(),
    img1: new Image(),
    img2: new Image(),
    img3: new Image(),
    img4: new Image(),
    img5: new Image(),
    img6: new Image(),
    img7: new Image(),
    img8: new Image(),
    img9: new Image(),
    img10: new Image(),
    timer: 0,
    type: 0,
};

/* Create uptext object */
let UPText = {
    color: "rgba(255, 255, 255, 0)",
    font: "96px Orange_Kid",
    value: "Main Menu",
    x: 42,
    y: 96,
    fx: 0,
    fy: 0,
};

/* Create versiontext object */
let VersionText = {
    color: "white",
    font: "32px Orange_Kid",
    value: "Public Build 6",
    x: -192,
    y: Board.h - 12,
    fx: 4,
    fy: -24,
    w: 142,
    h: 24,
    vx: 10.0,
    used: true,
};

/* Create authortext object */
let AuthorText = {
    color: "white",
    font: "32px Orange_Kid",
    value: "Made By CiupagaPL",
    x: -256,
    y: Board.h - 12,
    fx: 4,
    fy: -24,
    w: 208,
    h: 24,
    vx: 41.5,
    used: true,
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
    used: true,
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
    used: true,
};

/* Create keybindstext object */
let KeybindsText = {
    color: "white",
    font: "84px Orange_Kid",
    value: "Keybinds",
    x: -384,
    y: HardModeText.y + 108,
    fx: 0,
    fy: NormalModeText.fy,
    vx: NormalModeText.vx,
    w: 244,
    h: NormalModeText.h,
    used: true,
};

/* Create settingstext object */
let SettingsText = {
    color: "white",
    font: "84px Orange_Kid",
    value: "Settings",
    x: -384,
    y: KeybindsText.y + 108,
    fx: 0,
    fy: NormalModeText.fy,
    vx: NormalModeText.vx,
    w: 232,
    h: NormalModeText.h,
    used: true,
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
    used: true,
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
    used: true,
};

/* Create musictext object */
let MusicText = {
    color: "white",
    font: "84px Orange_Kid",
    value: "Music: Off",
    x: -444,
    y: HardModeText.y,
    fx: 0,
    fy: NormalModeText.fy,
    vx: NormalModeText.vx,
    w: 284,
    h: NormalModeText.h,
    used: true,
};

/* Create descriptiontext1 object */
let DescriptionText1 = {
    color: "white",
    font: "48px Orange_Kid",
    value: "The Uncreative Platformer is a semester",
    x: -750,
    y: NormalModeText.y - 20,
    vx: 35,
    fx: 0,
    fy: 0,
};

/* Create descriptiontext2 object */
let DescriptionText2 = {
    color: "white",
    font: "48px Orange_Kid",
    value: "project created by CiupagaPL. It's a simple",
    x: -750,
    y: DescriptionText1.y + 60,
    vx: DescriptionText1.vx,
    fx: 0,
    fy: 0,
};

/* Create descriptiontext3 object */
let DescriptionText3 = {
    color: "white",
    font: "48px Orange_Kid",
    value: "platformer that incorporates and combines",
    x: -750,
    y: DescriptionText2.y + 60,
    vx: DescriptionText1.vx,
    fx: 0,
    fy: 0,
};

/* Create descriptiontext4 object */
let DescriptionText4 = {
    color: "white",
    font: "48px Orange_Kid",
    value: "ideas from other platformers. For more",
    x: -750,
    y: DescriptionText3.y + 60,
    vx: DescriptionText1.vx,
    fx: 0,
    fy: 0,
};

/* Create descriptiontext5 object */
let DescriptionText5 = {
    color: "white",
    font: "48px Orange_Kid",
    value: "information, check out this git repo ->",
    x: -750,
    y: DescriptionText4.y + 60,
    vx: DescriptionText1.vx,
    fx: 0,
    fy: 0,
};

/* Create descriptiontext6 object */
let DescriptionText6 = {
    color: "white",
    font: "48px Orange_Kid",
    value: "CiupagaPL/Uncreative_Platformer",
    x: -750,
    y: DescriptionText5.y + 60,
    vx: DescriptionText1.vx,
    fx: 0,
    fy: 0,
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
    used: true,
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
    used: true,
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
    used: true,
};

/* Create mainmenutext object */
let MainMenuText = {
    color: "white",
    font: "84px Orange_Kid",
    value: "Main Menu",
    x: -444,
    y: KeybindsText.y,
    fx: 0,
    fy: NormalModeText.fy,
    vx: NormalModeText.vx,
    w: 302,
    h: NormalModeText.h,
    used: true,
};

/* Create pausetext object */
let PauseText = {
    color: "white",
    font: "92px Orange_Kid",
    value: "II",
    x: 40,
    y: 0,
    fx: 0,
    fy: -54,
    w: 36,
    h: 60,
    vy: 4.9,
    used: true,
};

/* Create scoretext object */
let ScoreText = {
    color: "white",
    font: "92px Orange_Kid",
    value: "Score: 0",
    x: 128,
    y: PauseText.y,
    fx: 0,
    fy: 0,
    vy: PauseText.vy,
};

/* Create coinstext object */
let CoinsText = {
    color: "white",
    font: "92px Orange_Kid",
    value: "Coins: 0",
    x: Board.w - 256,
    y: PauseText.y,
    fx: 0,
    fy: 0,
    vy: PauseText.vy,
    char: 0,
    lastchar: 1,
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
    imgafk1: new Image(),
    imgafk2: new Image(),
    imgafk3: new Image(),
    imgafk4: new Image(),
    imgdead1: new Image(),
    imgdead2: new Image(),
    imgdead3: new Image(),
    imgdead4: new Image(),
    imgfall1: new Image(),
    imgfall2: new Image(),
    imgfall3: new Image(),
    imgfall4: new Image(),
    imgfallleft1: new Image(),
    imgfallleft2: new Image(),
    imgfallleft3: new Image(),
    imgfallleft4: new Image(),
    imgfallright1: new Image(),
    imgfallright2: new Image(),
    imgfallright3: new Image(),
    imgfallright4: new Image(),
    imgjump1: new Image(),
    imgjump2: new Image(),
    imgjump3: new Image(),
    imgjump4: new Image(),
    imgjumpleft1: new Image(),
    imgjumpleft2: new Image(),
    imgjumpleft3: new Image(),
    imgjumpleft4: new Image(),
    imgjumpright1: new Image(),
    imgjumpright2: new Image(),
    imgjumpright3: new Image(),
    imgjumpright4: new Image(),
    imgleft1: new Image(),
    imgleft2: new Image(),
    imgleft3: new Image(),
    imgleft4: new Image(),
    imgpause1: new Image(),
    imgpause2: new Image(),
    imgpause3: new Image(),
    imgpause4: new Image(),
    imgright1: new Image(),
    imgright2: new Image(),
    imgright3: new Image(),
    imgright4: new Image(),
    initvy: -24,
    gravity: 1,
    side: 0,
    touched: false,
    isgrounded: false,
    isdead: false,
    timer: 0,
    checked: false,
    checktimer: false,
    jumped: false,
};

/* Create groundchecktop object */
let GroundCheckTop = {
    w: 96,
    h: 16,
    x: Player.x + 16 + Player.vx,
    y: Player.y + Player.vy,
    fx: 0,
    fy: 0,
    color: "rgba(0, 0, 0, 0)",
};

/* Create groundcheckbottom object */
let GroundCheckBottom = {
    w: 96,
    h: 16,
    x: Player.x + 16 + Player.vx,
    y: Player.y + 112 + Player.vy,
    fx: 0,
    fy: 0,
    color: "rgba(0, 0, 0, 0)",
};

/* Create groundcheckleft object */
let GroundCheckLeft = {
    w: 16,
    h: 128,
    x: Player.x + Player.vx,
    y: Player.y + Player.vy,
    fx: 0,
    fy: 0,
    color: "rgba(0, 0, 0, 0)",
};

/* Create groundcheckright object */
let GroundCheckRight = {
    w: 16,
    h: 128,
    x: Player.x + 112 + Player.vx,
    y: Player.y + Player.vy,
    fx: 0,
    fy: 0,
    color: "rgba(0, 0, 0, 0)",
};

/* Create platform object */
let Platform = {
    array: [],
    w: 256,
    h: 32,
    x: 0,
    y: 0,
    fx: 0,
    fy: 0,
    color: "blue",
    lenght: -1,
    currentlenght: 0,
    load: 0,
    currentload: 0,
    count: 0,
    randomx1: 0,
    randomx2: 0,
    level: 0,
    lastlevel: 0,
    disabled: false,
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
    array: [],
    w: 64,
    h: 64,
    x: 0,
    y: 0,
    fx: 0,
    fy: 0,
    img: new Image(),
    lenght: -1,
    currentlenght: 0,
};

/* Create coin object */
let Coin = {
    array: [],
    w: 64,
    h: 64,
    x: 0,
    y: 0,
    fx: 0,
    fy: 0,
    img: new Image(),
    used: false,
    lenght: -1,
    currentlenght: 0,
    calc: 0,
};

/* Textures */

/* Set source of title image */
Title.img.src = "Sprites/Title.png";

/* Set source of up image */
UP.img0.src = "Sprites/UP/0.png";
UP.img1.src = "Sprites/UP/1.png";
UP.img2.src = "Sprites/UP/2.png";
UP.img3.src = "Sprites/UP/3.png";
UP.img4.src = "Sprites/UP/4.png";
UP.img5.src = "Sprites/UP/5.png";
UP.img6.src = "Sprites/UP/6.png";
UP.img7.src = "Sprites/UP/7.png";
UP.img8.src = "Sprites/UP/8.png";
UP.img9.src = "Sprites/UP/9.png";
UP.img10.src = "Sprites/UP/10.png";

/* Set source of player image */
Player.imgafk1.src = "Sprites/Player/Afk1.png";
Player.imgafk2.src = "Sprites/Player/Afk2.png";
Player.imgafk3.src = "Sprites/Player/Afk3.png";
Player.imgafk4.src = "Sprites/Player/Afk4.png";

Player.imgdead1.src = "Sprites/Player/Dead1.png";
Player.imgdead2.src = "Sprites/Player/Dead2.png";
Player.imgdead3.src = "Sprites/Player/Dead3.png";
Player.imgdead4.src = "Sprites/Player/Dead4.png";

Player.imgfall1.src = "Sprites/Player/Fall1.png";
Player.imgfall2.src = "Sprites/Player/Fall2.png";
Player.imgfall3.src = "Sprites/Player/Fall3.png";
Player.imgfall4.src = "Sprites/Player/Fall4.png";

Player.imgfallleft1.src = "Sprites/Player/FallLeft1.png";
Player.imgfallleft2.src = "Sprites/Player/FallLeft2.png";
Player.imgfallleft3.src = "Sprites/Player/FallLeft3.png";
Player.imgfallleft4.src = "Sprites/Player/FallLeft4.png";

Player.imgfallright1.src = "Sprites/Player/FallRight1.png";
Player.imgfallright2.src = "Sprites/Player/FallRight2.png";
Player.imgfallright3.src = "Sprites/Player/FallRight3.png";
Player.imgfallright4.src = "Sprites/Player/FallRight4.png";

Player.imgjump1.src = "Sprites/Player/Jump1.png";
Player.imgjump2.src = "Sprites/Player/Jump2.png";
Player.imgjump3.src = "Sprites/Player/Jump3.png";
Player.imgjump4.src = "Sprites/Player/Jump4.png";

Player.imgjumpleft1.src = "Sprites/Player/JumpLeft1.png";
Player.imgjumpleft2.src = "Sprites/Player/JumpLeft2.png";
Player.imgjumpleft3.src = "Sprites/Player/JumpLeft3.png";
Player.imgjumpleft4.src = "Sprites/Player/JumpLeft4.png";

Player.imgjumpright1.src = "Sprites/Player/JumpRight1.png";
Player.imgjumpright2.src = "Sprites/Player/JumpRight2.png";
Player.imgjumpright3.src = "Sprites/Player/JumpRight3.png";
Player.imgjumpright4.src = "Sprites/Player/JumpRight4.png";

Player.imgleft1.src = "Sprites/Player/Left1.png";
Player.imgleft2.src = "Sprites/Player/Left2.png";
Player.imgleft3.src = "Sprites/Player/Left3.png";
Player.imgleft4.src = "Sprites/Player/Left4.png";

Player.imgpause1.src = "Sprites/Player/Pause1.png";
Player.imgpause2.src = "Sprites/Player/Pause2.png";
Player.imgpause3.src = "Sprites/Player/Pause3.png";
Player.imgpause4.src = "Sprites/Player/Pause4.png";

Player.imgright1.src = "Sprites/Player/Right1.png";
Player.imgright2.src = "Sprites/Player/Right2.png";
Player.imgright3.src = "Sprites/Player/Right3.png";
Player.imgright4.src = "Sprites/Player/Right4.png";

/* Set source of coin image */
Coin.img.src = "Sprites/Coin.png";

/* Set source of spike image */
Spike.img.src = "Sprites/Spike.png";

