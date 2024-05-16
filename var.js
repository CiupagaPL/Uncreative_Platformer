/* Uncreative Platformer made by CiupagaPL
 * GPL 3.0 (C) 2024 CiupagaPL */

/* Variables */

/* Create global variables */
let Scene = 1, SceneStart = false, SceneChange = false, SceneRestart = false;
let Sfx = true, Music = false, NormalMode = false, Generated = false;
let AboutTransition = 0, SettingsTransition = 0, KeybindsTransition = 0, StatisticsTransition = 0, PauseTransition = 0;
let FPS = 120, Score = 0, BestScore = 0, Coins = 0, Deaths = 0, GlobalMovement = 0;

/* Objects */

/* Create global objects */
let Context;
let CurrentPlatform, CurrentWall;
let CurrentCoin, CurrentSpike, CurrentCorner;
let CurrentDispenser, CurrentDispenserSpike, CurrentDispenserCoin;
let CurrentLaser, CurrentLaserSpike, CurrentLaserCoin;

/* Create mouse object */
let Mouse = {
    w: 32,
    h: 32,
    x: Event.clientX,
    y: Event.clientY,
    fx: 0,
    fy: 0,
    img: new Image(),
};

/* Create board object */
let Board = {
    base: document.getElementById("Board"),
    w: window.innerWidth,
    h: window.innerHeight,
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
    rotate: new Audio("Sounds/Rotate.wav"),
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
    vy: 40,
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
    color: "rgb(255, 255, 100)",
    randomcolor: "rgb(255, 255, 100)",
    random1: 0,
    random2: 0,
    random3: 0,
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
    color: "rgb(255, 255, 255)",
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
    value: "Public Presentation Type B",
    x: -272,
    y: Board.h - 12,
    fx: 4,
    fy: -24,
    w: 272,
    h: 24,
    vx: 13.8,
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
    value: "Uncreative Platformer is a semester",
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
    value: "project that I made using JavaScript.",
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
    value: "It's a simple platformer that",
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
    value: "incorporates and combines ideas",
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
    value: "from other platformers.",
    x: -750,
    y: DescriptionText4.y + 60,
    vx: DescriptionText1.vx,
    fx: 0,
    fy: 0,
};

/* Create instructiontext1 object */
let InstructionText1 = {
    color: "white",
    font: "48px Orange_Kid",
    value: "A, ←, D, → - Move Player",
    x: -750,
    y: DescriptionText1.y,
    vx: DescriptionText1.vx,
    fx: 0,
    fy: 0,
};

/* Create instructiontext2 object */
let InstructionText2 = {
    color: "white",
    font: "48px Orange_Kid",
    value: "Space - Change Gravity",
    x: -750,
    y: DescriptionText2.y,
    vx: DescriptionText1.vx,
    fx: 0,
    fy: 0,
};

/* Create instructiontext3 object */
let InstructionText3 = {
    color: "white",
    font: "48px Orange_Kid",
    value: "W, ↑ - Change Gravity Up",
    fx: 0,
    fy: 0,
    x: -750,
    y: DescriptionText3.y,
    vx: DescriptionText1.vx,
    fx: 0,
    fy: 0,
};

/* Create instructiontext4 object */
let InstructionText4 = {
    color: "white",
    font: "48px Orange_Kid",
    value: "S, ↓ - Change Gravity Down",
    x: -750,
    y: DescriptionText4.y,
    vx: DescriptionText1.vx,
    fx: 0,
    fy: 0,
};

/* Create instructiontext5 object */
let InstructionText5 = {
    color: "white",
    font: "48px Orange_Kid",
    value: "W, ↑, S, ↓ - Stop Player",
    x: -750,
    y: DescriptionText5.y,
    vx: DescriptionText1.vx,
    fx: 0,
    fy: 0,
};

/* Create informationtext1 object */
let InformationText1 = {
    color: "white",
    font: "48px Orange_Kid",
    value: "Current Score: ",
    x: -750,
    y: DescriptionText1.y,
    vx: DescriptionText1.vx,
    fx: 0,
    fy: 0,
};

/* Create informationtext2 object */
let InformationText2 = {
    color: "white",
    font: "48px Orange_Kid",
    value: "Current Coins: ",
    x: -750,
    y: DescriptionText2.y,
    vx: DescriptionText1.vx,
    fx: 0,
    fy: 0,
};

/* Create informationtext3 object */
let InformationText3 = {
    color: "white",
    font: "48px Orange_Kid",
    value: "Best Score: ",
    x: -750,
    y: DescriptionText3.y,
    vx: DescriptionText1.vx,
    fx: 0,
    fy: 0,
};

/* Create informationtext4 object */
let InformationText4 = {
    color: "white",
    font: "48px Orange_Kid",
    value: "Deaths: ",
    x: -750,
    y: DescriptionText4.y,
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

/* Create statisticstext object */
let StatisticsText = {
    color: "white",
    font: "84px Orange_Kid",
    value: "Statistics",
    x: -444,
    y: AboutText.y,
    fx: 0,
    fy: NormalModeText.fy,
    vx: NormalModeText.vx,
    w: 284,
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
    value: "Score: ",
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
    value: "Coins: ",
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
    y: Board.h - 128 - 48,
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
    imgrotafk1: new Image(),
    imgrotafk2: new Image(),
    imgrotafk3: new Image(),
    imgrotafk4: new Image(),
    imgrotdead1: new Image(),
    imgrotdead2: new Image(),
    imgrotdead3: new Image(),
    imgrotdead4: new Image(),
    imgrotfall1: new Image(),
    imgrotfall2: new Image(),
    imgrotfall3: new Image(),
    imgrotfall4: new Image(),
    imgrotfallleft1: new Image(),
    imgrotfallleft2: new Image(),
    imgrotfallleft3: new Image(),
    imgrotfallleft4: new Image(),
    imgrotfallright1: new Image(),
    imgrotfallright2: new Image(),
    imgrotfallright3: new Image(),
    imgrotfallright4: new Image(),
    imgrotjump1: new Image(),
    imgrotjump2: new Image(),
    imgrotjump3: new Image(),
    imgrotjump4: new Image(),
    imgrotjumpleft1: new Image(),
    imgrotjumpleft2: new Image(),
    imgrotjumpleft3: new Image(),
    imgrotjumpleft4: new Image(),
    imgrotjumpright1: new Image(),
    imgrotjumpright2: new Image(),
    imgrotjumpright3: new Image(),
    imgrotjumpright4: new Image(),
    imgrotleft1: new Image(),
    imgrotleft2: new Image(),
    imgrotleft3: new Image(),
    imgrotleft4: new Image(),
    imgrotpause1: new Image(),
    imgrotpause2: new Image(),
    imgrotpause3: new Image(),
    imgrotpause4: new Image(),
    imgrotright1: new Image(),
    imgrotright2: new Image(),
    imgrotright3: new Image(),
    imgrotright4: new Image(),
    gravity: 0.75,
    side: 0,
    touched: false,
    grounded: false,
    isdead: false,
    timer: 0,
    checked: false,
    checktimer: false,
    rotated: false,
    fallen: false,
    fallentimer: 0,
    warning: true,
    level: 0,
    slowfalling: false,
    slowtimer: 0,
};

/* Create groundchecktop object */
let GroundCheckTop = {
    w: 96,
    h: 16,
    x: Player.x + 16 + Player.vx,
    y: Player.y + Player.vy,
    fx: 0,
    fy: 0,
};

/* Create groundcheckbottom object */
let GroundCheckBottom = {
    w: 96,
    h: 16,
    x: Player.x + 16 + Player.vx,
    y: Player.y + 112 + Player.vy,
    fx: 0,
    fy: 0,
};

/* Create groundcheckleft object */
let GroundCheckLeft = {
    w: 16,
    h: 128,
    x: Player.x + Player.vx,
    y: Player.y + Player.vy,
    fx: 0,
    fy: 0,
};

/* Create groundcheckright object */
let GroundCheckRight = {
    w: 16,
    h: 128,
    x: Player.x + 112 + Player.vx,
    y: Player.y + Player.vy,
    fx: 0,
    fy: 0,
};

/* Create collisionchecktop object */
let CollisionCheckTop = {
    w: 96,
    h: 16,
    x: Player.x + 16 + Player.vx,
    y: Player.y - 8 + Player.vy,
    fx: 0,
    fy: 0,
}

/* Create collisioncheckbottom object */
let CollisionCheckBottom = {
    w: 96,
    h: 16,
    x: Player.x + 16 + Player.vx,
    y: Player.y - 8 + Player.h + Player.vy,
    fx: 0,
    fy: 0,
}

/* Create platform object */
let Platform = {
    array: [],
    w: 324,
    h: 48,
    x: 0,
    y: 0,
    fx: 0,
    fy: 0,
    img: new Image(),
    lenght: -1,
    currentlenght: 0,
    load: 24,
    currentload: 0,
    disabled: false,
    level: 0,
    lastlevel: 0,
    highestposition: 0,
    count: 0,
    loop: 0,
    currentcount: 0,
    randomcount: 0,
    randomplatform: 0,
    available: 0,
    main: false,
    left: false,
    right: false,
    first: true,
    second: true,
    third: true,
    fourth: true,
    firsttimer: 0,
    secondtimer: 0,
    thirdtimer: 0,
    fourthtimer: 0,
    chance: 0,
    firstchanged: false,
    secondchanged: false,
    thirdchanged: false,
    fourthchanged: false,
};

/* Create wall object */
let Wall = {
    array: [],
    w: 48,
    h: 384,
    x: 0,
    y: 0,
    fx: 0,
    fy: 0,
    img: new Image(),
    lenght: -1,
    currentlenght: 0,
    disabled: false,
    highestposition: 0,
};

/* Create corner object */
let Corner = {
    array: [],
    w: 24,
    h: 48,
    x: 0,
    y: 0,
    fx: 0,
    fy: 0,
    lenght: -1,
    currentlenght: 0,
    imgleft: new Image(),
    imgright: new Image(),
    left: false,
    disabled: false,
};

/* Create spike object */
let Spike = {
    array: [],
    positionarray: [],
    w: 64,
    h: 72,
    x: 0,
    y: 0,
    fx: 0,
    fy: 0,
    img1: new Image(),
    img2: new Image(),
    img3: new Image(),
    img4: new Image(),
    img5: new Image(),
    img6: new Image(),
    lenght: -1,
    currentlenght: 0,
    timer: 0,
    rotated: false,
    disabled: false,
    positionlenght: -1,
    positioncurrentlenght: 0,
    spawn: false,
};

/* Create coin object */
let Coin = {
    array: [],
    w: 64,
    h: 72,
    x: 0,
    y: 0,
    fx: 0,
    fy: 0,
    img1: new Image(),
    img2: new Image(),
    img3: new Image(),
    img4: new Image(),
    img5: new Image(),
    img6: new Image(),
    disabled: false,
    timer: 0,
    lenght: -1,
    currentlenght: 0,
    calc: 0,
    count1: 0,
    count2: 0,
    countgeneral: 0,
    chance: 0,
    rotated: false,
};

/* Create dispenser object */
let Dispenser = {
    array: [],
    w: 20,
    h: 80,
    x: 0,
    y: 0,
    fx: 0,
    fy: 0,
    imgleft1: new Image(),
    imgleft2: new Image(),
    imgright1: new Image(),
    imgright2: new Image(),
    disabled: false,
    lenght: -1,
    currentlenght: 0,
    left: false,
    timer: 0,
    chance: 0,
    side: 0,
};

/* Create dispenserspike object */
let DispenserSpike = {
    array: [],
    w: 64,
    h: 72,
    x: 0,
    y: 0,
    fx: 0,
    fy: 0,
    imgleft1: new Image(),
    imgleft2: new Image(),
    imgleft3: new Image(),
    imgright1: new Image(),
    imgright2: new Image(),
    imgright3: new Image(),
    disabled: false,
    lenght: -1,
    currentlenght: 0,
};

/* Create dispensercoin */
let DispenserCoin = {
    array: [],
    w: 64,
    h: 72,
    x: 0,
    y: 0,
    fx: 0,
    fy: 0,
    imgleft1: new Image(),
    imgleft2: new Image(),
    imgleft3: new Image(),
    imgright1: new Image(),
    imgright2: new Image(),
    imgright3: new Image(),
    disabled: false,
    lenght: -1,
    currentlenght: 0,
};

/* Create laser object */
let Laser = {
    array: [],
    w: 24,
    h: 48,
    x: 0,
    y: 0,
    fx: 0,
    fy: 0,
    imgleft1: new Image(),
    imgleft2: new Image(),
    imgright1: new Image(),
    imgright2: new Image(),
    disabled: false,
    lenght: -1,
    currentlenght: 0,
    left: false,
    timer: 0,
};

/* Create laserspike object */
let LaserSpike = {
    array: [],
    w: 256,
    h: 42,
    x: 0,
    y: 0,
    fx: 0,
    fy: 0,
    img: new Image(),
    disabled: false,
    lenght: -1,
    currentlenght: 0,
};

/* Create lasercoin object */
let LaserCoin = {
    array: [],
    w: 256,
    h: 42,
    x: 0,
    y: 0,
    fx: 0,
    fy: 0,
    img: new Image(),
    disabled: false,
    lenght: -1,
    currentlenght: 0,
};

/* Textures */

/* Set source of mouse image */
Mouse.img.src = "Sprites/Mouse.png";

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
Player.imgafk1.src = "Sprites/Player/Normal/Afk1.png";
Player.imgafk2.src = "Sprites/Player/Normal/Afk2.png";
Player.imgafk3.src = "Sprites/Player/Normal/Afk3.png";
Player.imgafk4.src = "Sprites/Player/Normal/Afk4.png";

Player.imgdead1.src = "Sprites/Player/Normal/Dead1.png";
Player.imgdead2.src = "Sprites/Player/Normal/Dead2.png";
Player.imgdead3.src = "Sprites/Player/Normal/Dead3.png";
Player.imgdead4.src = "Sprites/Player/Normal/Dead4.png";

Player.imgfall1.src = "Sprites/Player/Normal/Fall1.png";
Player.imgfall2.src = "Sprites/Player/Normal/Fall2.png";
Player.imgfall3.src = "Sprites/Player/Normal/Fall3.png";
Player.imgfall4.src = "Sprites/Player/Normal/Fall4.png";

Player.imgfallleft1.src = "Sprites/Player/Normal/FallLeft1.png";
Player.imgfallleft2.src = "Sprites/Player/Normal/FallLeft2.png";
Player.imgfallleft3.src = "Sprites/Player/Normal/FallLeft3.png";
Player.imgfallleft4.src = "Sprites/Player/Normal/FallLeft4.png";

Player.imgfallright1.src = "Sprites/Player/Normal/FallRight1.png";
Player.imgfallright2.src = "Sprites/Player/Normal/FallRight2.png";
Player.imgfallright3.src = "Sprites/Player/Normal/FallRight3.png";
Player.imgfallright4.src = "Sprites/Player/Normal/FallRight4.png";

Player.imgjump1.src = "Sprites/Player/Normal/Jump1.png";
Player.imgjump2.src = "Sprites/Player/Normal/Jump2.png";
Player.imgjump3.src = "Sprites/Player/Normal/Jump3.png";
Player.imgjump4.src = "Sprites/Player/Normal/Jump4.png";

Player.imgjumpleft1.src = "Sprites/Player/Normal/JumpLeft1.png";
Player.imgjumpleft2.src = "Sprites/Player/Normal/JumpLeft2.png";
Player.imgjumpleft3.src = "Sprites/Player/Normal/JumpLeft3.png";
Player.imgjumpleft4.src = "Sprites/Player/Normal/JumpLeft4.png";

Player.imgjumpright1.src = "Sprites/Player/Normal/JumpRight1.png";
Player.imgjumpright2.src = "Sprites/Player/Normal/JumpRight2.png";
Player.imgjumpright3.src = "Sprites/Player/Normal/JumpRight3.png";
Player.imgjumpright4.src = "Sprites/Player/Normal/JumpRight4.png";

Player.imgleft1.src = "Sprites/Player/Normal/Left1.png";
Player.imgleft2.src = "Sprites/Player/Normal/Left2.png";
Player.imgleft3.src = "Sprites/Player/Normal/Left3.png";
Player.imgleft4.src = "Sprites/Player/Normal/Left4.png";

Player.imgpause1.src = "Sprites/Player/Normal/Pause1.png";
Player.imgpause2.src = "Sprites/Player/Normal/Pause2.png";
Player.imgpause3.src = "Sprites/Player/Normal/Pause3.png";
Player.imgpause4.src = "Sprites/Player/Normal/Pause4.png";

Player.imgright1.src = "Sprites/Player/Normal/Right1.png";
Player.imgright2.src = "Sprites/Player/Normal/Right2.png";
Player.imgright3.src = "Sprites/Player/Normal/Right3.png";
Player.imgright4.src = "Sprites/Player/Normal/Right4.png";

Player.imgrotafk1.src = "Sprites/Player/Rotated/Afk1.png";
Player.imgrotafk2.src = "Sprites/Player/Rotated/Afk2.png";
Player.imgrotafk3.src = "Sprites/Player/Rotated/Afk3.png";
Player.imgrotafk4.src = "Sprites/Player/Rotated/Afk4.png";

Player.imgrotdead1.src = "Sprites/Player/Rotated/Dead1.png";
Player.imgrotdead2.src = "Sprites/Player/Rotated/Dead2.png";
Player.imgrotdead3.src = "Sprites/Player/Rotated/Dead3.png";
Player.imgrotdead4.src = "Sprites/Player/Rotated/Dead4.png";

Player.imgrotfall1.src = "Sprites/Player/Rotated/Fall1.png";
Player.imgrotfall2.src = "Sprites/Player/Rotated/Fall2.png";
Player.imgrotfall3.src = "Sprites/Player/Rotated/Fall3.png";
Player.imgrotfall4.src = "Sprites/Player/Rotated/Fall4.png";

Player.imgrotfallleft1.src = "Sprites/Player/Rotated/FallLeft1.png";
Player.imgrotfallleft2.src = "Sprites/Player/Rotated/FallLeft2.png";
Player.imgrotfallleft3.src = "Sprites/Player/Rotated/FallLeft3.png";
Player.imgrotfallleft4.src = "Sprites/Player/Rotated/FallLeft4.png";

Player.imgrotfallright1.src = "Sprites/Player/Rotated/FallRight1.png";
Player.imgrotfallright2.src = "Sprites/Player/Rotated/FallRight2.png";
Player.imgrotfallright3.src = "Sprites/Player/Rotated/FallRight3.png";
Player.imgrotfallright4.src = "Sprites/Player/Rotated/FallRight4.png";

Player.imgrotjump1.src = "Sprites/Player/Rotated/Jump1.png";
Player.imgrotjump2.src = "Sprites/Player/Rotated/Jump2.png";
Player.imgrotjump3.src = "Sprites/Player/Rotated/Jump3.png";
Player.imgrotjump4.src = "Sprites/Player/Rotated/Jump4.png";

Player.imgrotjumpleft1.src = "Sprites/Player/Rotated/JumpLeft1.png";
Player.imgrotjumpleft2.src = "Sprites/Player/Rotated/JumpLeft2.png";
Player.imgrotjumpleft3.src = "Sprites/Player/Rotated/JumpLeft3.png";
Player.imgrotjumpleft4.src = "Sprites/Player/Rotated/JumpLeft4.png";

Player.imgrotjumpright1.src = "Sprites/Player/Rotated/JumpRight1.png";
Player.imgrotjumpright2.src = "Sprites/Player/Rotated/JumpRight2.png";
Player.imgrotjumpright3.src = "Sprites/Player/Rotated/JumpRight3.png";
Player.imgrotjumpright4.src = "Sprites/Player/Rotated/JumpRight4.png";

Player.imgrotleft1.src = "Sprites/Player/Rotated/Left1.png";
Player.imgrotleft2.src = "Sprites/Player/Rotated/Left2.png";
Player.imgrotleft3.src = "Sprites/Player/Rotated/Left3.png";
Player.imgrotleft4.src = "Sprites/Player/Rotated/Left4.png";

Player.imgrotpause1.src = "Sprites/Player/Rotated/Pause1.png";
Player.imgrotpause2.src = "Sprites/Player/Rotated/Pause2.png";
Player.imgrotpause3.src = "Sprites/Player/Rotated/Pause3.png";
Player.imgrotpause4.src = "Sprites/Player/Rotated/Pause4.png";

Player.imgrotright1.src = "Sprites/Player/Rotated/Right1.png";
Player.imgrotright2.src = "Sprites/Player/Rotated/Right2.png";
Player.imgrotright3.src = "Sprites/Player/Rotated/Right3.png";
Player.imgrotright4.src = "Sprites/Player/Rotated/Right4.png";

/* Set source of platform image */
Platform.img.src = "Sprites/Platform/Normal.png";

/* Set source of wall image */
Wall.img.src = "Sprites/Platform/Wall.png";

/* Set source of corner image */
Corner.imgleft.src = "Sprites/Platform/Left.png";
Corner.imgright.src = "Sprites/Platform/Right.png";

/* Set source of coin image */
Coin.img1.src = "Sprites/Coin/Normal/Coin1.png";
Coin.img2.src = "Sprites/Coin/Normal/Coin2.png";
Coin.img3.src = "Sprites/Coin/Normal/Coin3.png";
Coin.img4.src = "Sprites/Coin/Rotated/Coin1.png";
Coin.img5.src = "Sprites/Coin/Rotated/Coin2.png";
Coin.img6.src = "Sprites/Coin/Rotated/Coin3.png";

/* Set source of spike image */
Spike.img1.src = "Sprites/Spike/Normal/Spike1.png";
Spike.img2.src = "Sprites/Spike/Normal/Spike2.png";
Spike.img3.src = "Sprites/Spike/Normal/Spike3.png";
Spike.img4.src = "Sprites/Spike/Rotated/Spike1.png";
Spike.img5.src = "Sprites/Spike/Rotated/Spike2.png";
Spike.img6.src = "Sprites/Spike/Rotated/Spike3.png";

/* Set source of dispenser image */
Dispenser.imgleft1.src = "Sprites/Dispenser/Left/1.png";
Dispenser.imgleft2.src = "Sprites/Dispenser/Left/2.png";
Dispenser.imgright1.src = "Sprites/Dispenser/Right/1.png";
Dispenser.imgright2.src = "Sprites/Dispenser/Right/2.png";

/* Set source of dispenserspike image */
DispenserSpike.imgleft1.src = "Sprites/Dispenser/Spike/Left/1.png";
DispenserSpike.imgleft2.src = "Sprites/Dispenser/Spike/Left/2.png";
DispenserSpike.imgleft3.src = "Sprites/Dispenser/Spike/Left/3.png";
DispenserSpike.imgright1.src = "Sprites/Dispenser/Spike/Right/1.png";
DispenserSpike.imgright2.src = "Sprites/Dispenser/Spike/Right/2.png";
DispenserSpike.imgright3.src = "Sprites/Dispenser/Spike/Right/3.png";

/* Set source of dispensercoin image */
DispenserCoin.imgleft1.src = "Sprites/Dispenser/Coin/Left/1.png";
DispenserCoin.imgleft2.src = "Sprites/Dispenser/Coin/Left/2.png";
DispenserCoin.imgleft3.src = "Sprites/Dispenser/Coin/Left/3.png";
DispenserCoin.imgright1.src = "Sprites/Dispenser/Coin/Right/1.png";
DispenserCoin.imgright2.src = "Sprites/Dispenser/Coin/Right/2.png";
DispenserCoin.imgright3.src = "Sprites/Dispenser/Coin/Right/3.png";

/* Set source of laser image */
Laser.imgleft1.src = "Sprites/Laser/Left/1.png";
Laser.imgleft2.src = "Sprites/Laser/Left/2.png";
Laser.imgright1.src = "Sprites/Laser/Right/1.png";
Laser.imgright2.src = "Sprites/Laser/Right/2.png";

/* Set source of laserspike image */
LaserSpike.img.src = "Sprites/Laser/Spike.png";

/* Set source of lasercoin image */
LaserCoin.img.src = "Sprites/Laser/Coin.png";

