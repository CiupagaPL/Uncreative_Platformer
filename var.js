/* Uncreative Platformer made by CiupagaPL; Simple platformer made in JS.
 * GPL 3.0 (C) 2024 CiupagaPL */

/* Variables */

/* Create global variables */
let Scene = 1, SceneStart = 0;

/* Objects */

/* Create board object */
let Board = document.getElementById("Board");
let BoardWidth = window.innerWidth * 0.9;
let BoardHeight = window.innerHeight * 0.9;
let Context;

/* Create player object */
let PlayerWidth = 128;
let PlayerHeight = 128;
let PlayerX = BoardWidth/2 - PlayerWidth/2;
let PlayerY = BoardHeight*7/8 - PlayerHeight/2;
let PlayerColor = "green";
let PlayerVelocityX = 0;
let PlayerVelocityY = 0;
let initPlayerVelocityY = -16;
let PlayerGravity = 0.4;
let PlayerSide = 0;
let hasPlayerJumped = false;

/* Create platform object */
let PlatformWidth = 256;
let PlatformHeight = 32;
let PlatformX = BoardWidth*3/4 - PlatformWidth/2;
let PlatformY = BoardHeight/2 - PlatformHeight/2;
let PlatformColor = "red";

/* Create platform2 object */
let Platform2Width = BoardWidth;
let Platform2Height = 128;
let Platform2X = 0;
let Platform2Y = BoardHeight *6.6/8 + PlayerHeight;
let Platform2Color = "blue";
