/* Uncreative Platformer made by CiupagaPL; Simple platformer made in JS.
 * GPL 3.0 (C) 2024 CiupagaPL */

/* Variables */

/* Create global variables */
let Scene = 1;

/* Objects */

/* Create board object */
let Board, Context;
let BoardWidth = window.innerWidth * 0.9;
let BoardHeight = window.innerHeight * 0.9;

/* Create player object */
let PlayerWidth = 128;
let PlayerHeight = 128;
let PlayerX = BoardWidth/2 - PlayerWidth/2;
let PlayerY = BoardHeight*7/8 - PlayerHeight/2;
let PlayerColor = "green";
let hasPlayerJumped = false;

/* Create platform object */
let PlatformWidth = 256;
let PlatformHeight = 32;
let PlatformX = BoardWidth*3/4 - PlatformWidth/2;
let PlatformY = BoardHeight/2 - PlatformHeight/2;
let PlatformColor = "red";
