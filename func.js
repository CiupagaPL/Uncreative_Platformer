// Uncreative Platformer made by CiupagaPL; Simple platformer made in JS.
/* GPL 3.0 (C) 2024 CiupagaPL */

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

    /* Refresh board resolution */
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

        /* Check if foreground is on */
        if(Settings == 1 || About == 1) {
            /* Draw foreback object */
            Context.fillStyle = ForeBack.color;
            Context.fillRect(ForeBack.x, ForeBack.y, ForeBack.w, ForeBack.h);

            /* Draw foreground object */
            Context.fillStyle = Foreground.color;
            Context.fillRect(Foreground.x, Foreground.y, Foreground.w, Foreground.h);

            /* Draw buttonx object */
            Context.fillStyle = ButtonX.color;
            Context.fillRect(ButtonX.x, ButtonX.y, ButtonX.w, ButtonX.h);
        }

        /* Draw transition object */
        Context.fillStyle = Transition.color;
        Context.fillRect(Transition.x, Transition.y, Transition.w, Transition.h);
    }

    /* Test scene */
    if(Scene == 2) {
        /* Things todo on scene start */
        if(SceneStart == 0) {
            /* Gravity and physics generally */
            if(Pause != 1) {
                Player.x = Board.w / 2 - 64;
                Player.y = Board.h - 72 - 128;
                Player.vy = 0;
                Player.vx = 0;
            }

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

        /* Draw background object */
        Background.img = new Image();
        Background.img.src = "Sprites/Background1.png";
        Context.drawImage(Background.img, Background.x, Background.y, Background.w, Background.h);

        /* Bounce player object from walls */
        if(Player.x <= 0) {
            /* Change player side */
            Player.vx = 8;
            Player.side = 1;
        }
        if(Player.x >= Board.w - Player.w) {
            /* Change player side */
            Player.vx = -8;
            Player.side = 2;
        }

        /* Move player object */
        if(Pause != 1) {
            Player.x += Player.vx;
            Player.y += Player.vy;
            Player.vy += Player.gravity;
        }

        /* Draw player object */
        Context.fillStyle = Player.color;
        Context.fillRect(Player.x, Player.y, Player.w, Player.h);

        /* Draw groundcheck1 object */
        Context.fillStyle = GroundCheck1.color;
        Context.fillRect(GroundCheck1.x, GroundCheck1.y, GroundCheck1.w, GroundCheck1.h);

        /* Draw groundcheck2 object */
        Context.fillStyle = GroundCheck2.color;
        Context.fillRect(GroundCheck2.x, GroundCheck2.y, GroundCheck2.w, GroundCheck2.h);

        /* Draw groundcheck3 object */
        Context.fillStyle = GroundCheck3.color;
        Context.fillRect(GroundCheck3.x, GroundCheck3.y, GroundCheck3.w, GroundCheck3.h);

        /* Draw groundcheck4 object */
        Context.fillStyle = GroundCheck4.color;
        Context.fillRect(GroundCheck4.x, GroundCheck4.y, GroundCheck4.w, GroundCheck4.h);

        /* Refresh groundcheck1 position */
        GroundCheck1.x = Player.x + Player.vx;
        GroundCheck1.y = Player.y + 126 + Player.vy;

        /* Refresh groundcheck2 position */
        GroundCheck2.x = Player.x + Player.vx;
        GroundCheck2.y = Player.y + Player.vy;

        /* Refresh groundcheck3 position */
        GroundCheck3.x = Player.x + 2 + Player.vx;
        GroundCheck3.y = Player.y + 12 + Player.vy;

        /* Refresh groundcheck4 position */
        GroundCheck4.x = Player.x + 124 + Player.vx;
        GroundCheck4.y = Player.y + 12 + Player.vy;

        /* Update generate level function */
        window.generatelevel();
        Platform.currentlenght = 0;

        /* Refresh player object movement */
        if(Player.side == 0) {
            /* Stop player object */
            Player.vx = 0;
        }
        if(Player.side == 1) {
            /* Move player object right */
            Player.vx = 8;
        }
        else if(Player.side == 2) {
            /* Move player object left */
            Player.vx = -8;
        }

        /* Generate level */
        while(Platform.lenght >= Platform.currentlenght) { 
            /* Check if array exists */
            if(typeof Platform.array[Platform.currentlenght] !== "undefined") {
                /* Draw current array platform */
                CurrentPlatform = Platform.array[Platform.currentlenght];
                Context.fillStyle = CurrentPlatform.color;
                Context.fillRect(CurrentPlatform.x, CurrentPlatform.y, CurrentPlatform.w, CurrentPlatform.h);
            }

            /* Detect collisions between groundcheck1 and platform object */
            if(window.detectcollision(CurrentPlatform, GroundCheck1)) {
                /* Change y velocity of Player object */
                Player.vy = 0;

                /* End jumping function */
                //if(Player.jump == 1) {
                    //Player.side = 0;
                    Player.jump = 0;
                //}
            }
            /* Detect collisions between groundcheck2 and platform object */
            if(window.detectcollision(CurrentPlatform, GroundCheck2)) {
                /* Change y velocity of Player object */
                Player.vy = 8;
            }
            /* Detect collisions between groundcheck3 and platform object */
            if(window.detectcollision(CurrentPlatform, GroundCheck3)) {
                /* Change x velocity of Player object */
                Player.side = 1;
            }
            /* Detect collisions between groundcheck4 and platform object */
            if(window.detectcollision(CurrentPlatform, GroundCheck4)) {
                /* Change x velocity of Player object */
                Player.side = 2;
            }

            /* Change loop value */
            Platform.currentlenght += 1;
        }

        /* Draw scoretext object */
        Context.fillStyle = ScoreText.color;
        Context.font = ScoreText.font;
        Context.fillText(ScoreText.value, ScoreText.x, ScoreText.y);

        /* Check if foreground is on */
        if(Pause == 1) {
            /* Draw foreback object */
            Context.fillStyle = ForeBack.color;
            Context.fillRect(ForeBack.x, ForeBack.y, ForeBack.w, ForeBack.h);

            /* Draw foreground object */
            Context.fillStyle = Foreground.color;
            Context.fillRect(Foreground.x, Foreground.y, Foreground.w, Foreground.h);

            /* Draw buttonx object */
            Context.fillStyle = ButtonX.color;
            Context.fillRect(ButtonX.x, ButtonX.y, ButtonX.w, ButtonX.h);
        }

        /* Draw buttonpause object */
        Context.fillStyle = ButtonPause.color;
        Context.fillRect(ButtonPause.x, ButtonPause.y, ButtonPause.w, ButtonPause.h);

        /* Draw transition object */
        Context.fillStyle = Transition.color;
        Context.fillRect(Transition.x, Transition.y, Transition.w, Transition.h);
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
window.generatelevel = function() {
    /* Create default platform */
    let MainPlatform = {
        w: Board.w,
        h: 84,
        x: 0,
        y: Board.h - 84,
        color: "brown",
    };

    /* Push main platform into array */
    Platform.array.push(MainPlatform);

    /* Generate rest platforms */
    while(Platform.currentload <= Platform.load) {
        Platform.randomx = Math.floor(Math.random() * Board.w * 3/4);
        Platform.randomw = Math.floor(Math.random() * 256 + 256);

        /* Create first current platform */
        let CurrentPlatform = {
            x: 0,
            y: Board.h - 256 * Platform.currentload - 340,
            w: Platform.randomx,
            h: Platform.h,
            color: Platform.color,
        };

        /* Push current platform into array */
        Platform.array.push(CurrentPlatform);

        /* Create second current platform */
        CurrentPlatform = {
            x: CurrentPlatform.w + Platform.randomw,
            y: CurrentPlatform.y,
            w: Board.w - CurrentPlatform.w + Platform.randomw,
            h: Platform.h,
            color: Platform.color,
        }
        
        /* Push current platform into array */
        Platform.array.push(CurrentPlatform);

        /* Change loop value */
        Platform.currentload += 1;
    }
}

