/* Uncreative Platformer made by CiupagaPL; Simple platformer made in JS.
 * GPL 3.0 (C) 2024 CiupagaPL */

/* Window create function */
window.onload = function() {
    /* Create game board */
    Board.base.width = Board.w;
    Board.base.height = Board.h;
    Context = Board.base.getContext("2d");

    /* Start update function */
    window.onupdate();
}

/* Window resize function */
window.onresize = function() {
    /* Refresh screen resolution */
    Screen.w = window.innerWidth;
    Screen.h = window.innerHeight;

    Board.w = Screen.w;
    Board.h = Screen.h;

    /* Change board resolution */
    Board.base.width = Board.w;
    Board.base.height = Board.h;
}

/* Window update function */
window.onupdate = function() {
    /* Limit fps */
    setTimeout(() => {
        requestAnimationFrame(window.onupdate);
    }, 1000 / 120);

    /* Clear screen */
    Context.clearRect(0, 0, Board.w, Board.h);
    
    /* Menu scene */
    if(Scene == 1) {
        /* Draw background object */
        Background.img.src = "Sprites/Background1.png";
        Context.drawImage(Background.img, Background.x, Background.y, Background.w, Background.h);

        /* Draw logo object */
        Logo.img.src = "Sprites/Logo1.png";
        Context.drawImage(Logo.img, Logo.x, Logo.y, Logo.w, Logo.h);

        /* Draw button1 object */
        Context.fillStyle = Button1.color;
        Context.fillRect(Button1.x, Button1.y, Button1.w, Button1.h);

        /* Draw button2 object */
        Context.fillStyle = Button2.color;
        Context.fillRect(Button2.x, Button2.y, Button2.w, Button2.h);

        /* Draw button3 object */
        Context.fillStyle = Button3.color;
        Context.fillRect(Button3.x, Button3.y, Button3.w, Button3.h);

        /* Draw button4 object */
        Context.fillStyle = Button4.color;
        Context.fillRect(Button4.x, Button4.y, Button4.w, Button4.h);

        /* Draw button5 object */
        Context.fillStyle = Button5.color;
        Context.fillRect(Button5.x, Button5.y, Button5.w, Button5.h);

        /* Draw transition object */
        Context.fillStyle = Transition.color;
        Context.fillRect(Transition.x, Transition.y, Transition.w, Transition.h);

        /* Things todo on scene start */
        if(SceneStart == 0) {
            /* Set default position of transition object */
            if(Transition.timer == 0) {
                Transition.y = 0;
            }
            
            /* Start transition timer */ 
            Transition.timer += 1;
            /* Start transition animation */
            if(Transition.timer >= 30) {
                /* Move transition object */
                if(Transition.y > -Board.h) {
                    Transition.y -= Transition.vx;
                }
                /* End animation */
                else if(Transition.y <= -Board.h) {
                    /* End scene start */
                    Transition.timer = 0;
                    SceneStart = 1;
                }
            }
        }

        /* Things todo on scene change */
        if(SceneChange == 1) {
            /* Start transition timer */
            Transition.timer += 1;
            /* Start transition animation */
            if(Transition.timer >= 30) {
                /* Move transition object */
                if(Transition.y < 0) {
                    Transition.y += Transition.vx;
                }
                /* End animation */
                else if(Transition.y >= 0) {
                    /* End scene */
                    Transition.timer = 0;
                    SceneChange = 0;
                    SceneStart = 0;
                    Scene = 2;
                }
            }
        }

        /* Check collision between cursor and button1 object */
        if(window.detectcollision(Button1, Mouse)) {
            Button1.color = "blue";
        }
        else if(!window.detectcollision(Button1, Mouse)) {
            Button1.color = "red";
        }

        /* Check collision between cursor and button2 object */
        if(window.detectcollision(Button2, Mouse)) {
            Button2.color = "blue";
        }
        else if(!window.detectcollision(Button2, Mouse)) {
            Button2.color = "red";
        }

        /* Check collision between cursor and button3 object */
        if(window.detectcollision(Button3, Mouse)) {
            Button3.color = "blue";
        }
        else if(!window.detectcollision(Button3, Mouse)) {
            Button3.color = "red";
        }

        /* Check collision between cursor and button4 object */
        if(window.detectcollision(Button4, Mouse)) {
            Button4.color = "blue";
        }
        else if(!window.detectcollision(Button4, Mouse)) {
            Button4.color = "red";
        }

        /* Check collision between cursor and button5 object */
        if(window.detectcollision(Button5, Mouse)) {
            Button5.color = "blue";
        }
        else if(!window.detectcollision(Button5, Mouse)) {
            Button5.color = "red";
        }
    }

    /* Test scene */
    if(Scene == 2) {
        /* Draw background object */
        Background.img = new Image();
        Background.img.src = "Sprites/Background1.png";
        Context.drawImage(Background.img, Background.x, Background.y, Background.w, Background.h);

        /* Draw player object */
        Context.fillStyle = Player.color;
        Context.fillRect(Player.x, Player.y, Player.w, Player.h);

        /* Draw platform2 object */
        Context.fillStyle = Platform2.color;
        Context.fillRect(Platform2.x, Platform2.y, Platform2.w, Platform2.h);

        /* Draw transition object */
        Context.fillStyle = Transition.color;
        Context.fillRect(Transition.x, Transition.y, Transition.w, Transition.h);

        /* Things todo on scene start */
        if(SceneStart == 0) {
            /* Set default position of player object */
            Player.x = 750;
            Player.y = 1000;

            /* Set default gravity value */
            Player.vy = 0;

            /* Generate level */
            //window.generatelevel();

            /* Set default position of transition object */
            if(Transition.timer == 0) {
                Transition.y = 0;
            }

            /* Start transition timer */ 
            Transition.timer += 1;
            /* Start transition animation */
            if(Transition.timer >= 30) {
                /* Move transition object */
                if(Transition.y < Board.h) {
                    Transition.y += Transition.vx;
                }
                /* End animation */
                else if(Transition.y >= Board.h) {
                    /* End scene start */
                    Transition.timer = 0;
                    SceneStart = 1;
                } 
            }
        }

        /* Things todo on scene change */
        if(SceneChange == 1) {
            /* Start transition timer */
            Transition.timer += 1;
            /* Start transition animation */
            if(Transition.timer >= 30) {
                /* Move transition object */
                if(Transition.y > 0) {
                    Transition.y -= Transition.vx;
                }
                /* End animation */
                else if(Transition.y <= 0) {
                    /* End scene */
                    Transition.timer = 0;
                    SceneChange = 0;
                    SceneStart = 0;
                    Scene = 1;
                }
            }
        }

        /* Move player object */
        Player.x += Player.vx;
        Player.y += Player.vy;
        //Player.vy += Player.gravity;

        /* Bounce player object from walls */
        if(Player.x <= 0) {
            /* Change player side */
            Player.vx = 8;
            Player.side = 0;
        }
        if(Player.x >= Board.w - Player.w) {
            /* Change player side */
            Player.vx = -8;
            Player.side = 1;
        }

        /* Detect collisions between player and platform2 object */
        if(window.detectcollision(Player, Platform2)) {
            /* Stop gravity */
            player.vy = 0;
            Player.jumpcount = 0;
        }

        /* Detect collition between player and platform object */
        //if(window.detectcollision(PlayerX, PlayerY, PlayerWidth, PlayerHeight, PlatformX, PlatformY, PlatformWidth, PlatformHeight)) {
            /* Set player object movement */
            //if(PlayerY <= PlatformY - PlatformHeight) {
                //PlayerVelocityY = 0;
                //PlayerJumpCount = 0;
            //}
            //else {
                //PlayerVelocityY = -initPlayerVelocityY*1/4;
            //}
        //}
    }
}

/* Window collision function */
window.detectcollision = function(First, Second) {
    /* Calculate and return collision */
    return First.x < Second.x + Second.w &&
           First.x + First.w > Second.x &&
           First.y < Second.y + Second.h &&
           First.y + First.h > Second.y;
}

/* Window level generator function */
//window.generatelevel = function() {
    /* Recreate array */
    //PlatformArray = [];

    /* Starting platform */
    //let FirstPlatformX = BoardWidth / 2;
    //let FirstPlatformY = BoardHeight/2 + PlatformHeight*4;
    //let FirstPlatformWidth = PlatformWidth;
    //let FirstPlatformHeight = PlatformHeight;
    //let FirstPlatformColor = PlatformColor;

    /* Finalize first platform */
    //PlatformArray.push(FirstPlatform);
//}*/
