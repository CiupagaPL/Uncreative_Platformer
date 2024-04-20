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
        if(SceneStart == false) {
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
                /* End transition animation */
                else if(Transition.y <= -Board.h) {
                    /* Animate menu start */
                    MenuTransparent.type = 1;
                    window.animatemenu();

                    /* End scene start */
                    if(MenuTransparent.type == 0) {
                        Transition.timer = 0;
                        SceneStart = true;
                    }
                }
            }
        }

        /* Things todo on scene change */
        if(SceneChange == true) {
            MenuTransparent.type = 2;
            window.animatemenu();

            /* Animate menu end */
            if(MenuTransparent.type == 0) {
                /* Start transition animation */
                if(Transition.y < 0) {
                    Transition.y += Transition.vx;
                }
                /* End animation */
                else if(Transition.y >= 0) {
                    /* End scene */
                    Transition.timer = 0;
                    SceneChange = false;
                    SceneStart = false;
                    Scene = 2;
                }
            }
        }

        /* Draw background object */
        Background.img.src = "Sprites/Background1.png";
        Context.drawImage(Background.img, Background.x, Background.y, Background.w, Background.h);

        /* Draw menutransparent object */
        Context.fillStyle = MenuTransparent.color;
        Context.fillRect(MenuTransparent.x, MenuTransparent.y, MenuTransparent.w, MenuTransparent.h);

        /* Draw logo object */
        Logo.img.src = "Sprites/Logo1.png";
        Context.drawImage(Logo.img, Logo.x, Logo.y, Logo.w, Logo.h);

        /* Draw versiontext object */
        Context.fillStyle = VersionText.color;
        Context.font = VersionText.font;
        Context.fillText(VersionText.value, VersionText.x, VersionText.y);

        /* Draw normalmodetext object */
        Context.fillStyle = NormalModeText.color;
        Context.font = NormalModeText.font;
        Context.fillText(NormalModeText.value, NormalModeText.x, NormalModeText.y);

        /* Draw hardmodetext object */
        Context.fillStyle = HardModeText.color;
        Context.font = HardModeText.font;
        Context.fillText(HardModeText.value, HardModeText.x, HardModeText.y);

        /* Draw tutorialtext object */
        Context.fillStyle = TutorialText.color;
        Context.font = NormalModeText.font;
        Context.fillText(TutorialText.value, TutorialText.x, TutorialText.y);

        /* Draw settingstext object */
        Context.fillStyle = SettingsText.color;
        Context.font = SettingsText.font;
        Context.fillText(SettingsText.value, SettingsText.x, SettingsText.y);

        /* Draw abouttext object */
        Context.fillStyle = AboutText.color;
        Context.font = AboutText.font;
        Context.fillText(AboutText.value, AboutText.x, AboutText.y);

        /* Draw sfxtext object */
        Context.fillStyle = SfxText.color;
        Context.font = SfxText.font;
        Context.fillText(SfxText.value, SfxText.x, SfxText.y);

        /* Draw musictext object */
        Context.fillStyle = MusicText.color;
        Context.font = MusicText.font;
        Context.fillText(MusicText.value, MusicText.x, MusicText.y);

        /* Draw returntext object */
        Context.fillStyle = ReturnText.color;
        Context.font = ReturnText.font;
        Context.fillText(ReturnText.value, ReturnText.x, ReturnText.y);

        /* Draw transition object */
        Context.fillStyle = Transition.color;
        Context.fillRect(Transition.x, Transition.y, Transition.w, Transition.h);

        /* Settings section animation function */
        if(SettingsTransition == 1) {
            MenuTransparent.type = 3;
            window.animatemenu();
        }
        if(SettingsTransition == 2) {
            MenuTransparent.type = 4;
            window.animatemenu();
        }
        if(SettingsTransition == 4) {
            MenuTransparent.type = 5;
            window.animatemenu();
        }
        if(SettingsTransition == 5) {
            MenuTransparent.type = 6;
            window.animatemenu();
        }

        /* About section animation function */
        if(AboutTransition == 1) {
            MenuTransparent.type = 7;
            window.animatemenu();
        }
        if(AboutTransition == 2) {
            MenuTransparent.type = 8;
            window.animatemenu();
        }
        if(AboutTransition == 4) {
            MenuTransparent.type = 9;
            window.animatemenu();
        }
        if(AboutTransition == 5) {
            MenuTransparent.type = 10;
            window.animatemenu();
        }
    }

    /* Game scene */
    if(Scene == 2) {
        /* Things todo on scene start */
        if(SceneStart == false) {
            /* Gravity and physics generally */
            if(!isPaused) {
                Player.x = Board.w / 2 - 64;
                Player.y = Board.h - 96 - 64;
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
                    SceneStart = true;
                }
            }
        }

        /* Things todo on scene change */
        if(SceneChange == true) {
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
                    SceneChange = false;
                    SceneStart = false;
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
        if(!isPaused) { 
            Player.x += Player.vx;
            Player.y += Player.vy;
            Player.vy += Player.gravity;
        }

        /* Draw player object */
        Context.fillStyle = Player.color;
        Context.fillRect(Player.x, Player.y, Player.w, Player.h);

        /* Draw groundchecktop object */
        Context.fillStyle = GroundCheckTop.color;
        Context.fillRect(GroundCheckTop.x, GroundCheckTop.y, GroundCheckTop.w, GroundCheckTop.h);

        /* Draw groundcheckbottom object */
        Context.fillStyle = GroundCheckBottom.color;
        Context.fillRect(GroundCheckBottom.x, GroundCheckBottom.y, GroundCheckBottom.w, GroundCheckBottom.h);

        /* Draw groundcheckleft object */
        Context.fillStyle = GroundCheckLeft.color;
        Context.fillRect(GroundCheckLeft.x, GroundCheckLeft.y, GroundCheckLeft.w, GroundCheckLeft.h);

        /* Draw groundcheckright object */
        Context.fillStyle = GroundCheckRight.color;
        Context.fillRect(GroundCheckRight.x, GroundCheckRight.y, GroundCheckRight.w, GroundCheckRight.h);

        /* Refresh groundchecktop position */
        GroundCheckTop.x = Player.x + Player.vx;
        GroundCheckTop.y = Player.y + Player.vy;

        /* Refresh groundcheckbottom position */
        GroundCheckBottom.x = Player.x + Player.vx;
        GroundCheckBottom.y = Player.y + 94 + Player.vy;

        /* Refresh groundcheckleft position */
        GroundCheckLeft.x = Player.x + 2 + Player.vx;
        GroundCheckLeft.y = Player.y + 12 + Player.vy;

        /* Refresh groundcheckright position */
        GroundCheckRight.x = Player.x + 92 + Player.vx;
        GroundCheckRight.y = Player.y + 12 + Player.vy;

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

            /* Detect collisions between groundchecktop and platform object */
            if(window.detectcollision(CurrentPlatform, GroundCheckTop) && Player.touch == 0) {
                /* Change y velocity of Player object */
                Player.vy = 8;
                Player.touch = 1;
            }
            /* Detect collisions between groundcheckbottom and platform object */
            if(window.detectcollision(CurrentPlatform, GroundCheckBottom) && Player.touch == 0) {
                /* Change y velocity of Player object */
                Player.vy = 0;

                /* End jumping function */
                Player.jump = 0;
                Player.touch = 1;
            }
            /* Detect collisions between groundcheckleft and platform object */
            if(window.detectcollision(CurrentPlatform, GroundCheckLeft) && Player.touch == 0) {
                /* Change x velocity of Player object */
                Player.side = 1;
                Player.touch = 1;
            }
            /* Detect collisions between groundcheckright and platform object */
            if(window.detectcollision(CurrentPlatform, GroundCheckRight) && Player.touch == 0) {
                /* Change x velocity of Player object */
                Player.side = 2;
                Player.touch = 1;
            }

            /* Update level */
            window.updatelevel(CurrentPlatform);

            /* Change loop value */
            Platform.currentlenght += 1;
            Player.touch = 0;
            CurrentPlatform.y += 0.25;

        }

        /* Draw scoretext object */
        Context.fillStyle = ScoreText.color;
        Context.font = ScoreText.font;
        Context.fillText(ScoreText.value, ScoreText.x, ScoreText.y);

        /* Draw transition object */
        Context.fillStyle = Transition.color;
        Context.fillRect(Transition.x, Transition.y, Transition.w, Transition.h);
    }
}

/* Window collision function */
window.detectcollision = function(First, Second) {
    /* Calculate and return collision */
    return First.x + First.fx < Second.x + Second.fy + Second.w &&
           First.x + First.fx + First.w > Second.x + Second.fx &&
           First.y + First.fy < Second.y + Second.fy + Second.h &&
           First.y + First.fy + First.h > Second.y + Second.fy;
}

/* Window menu animating function */
window.animatemenu = function() {
    /* Menu start animation */
    if(MenuTransparent.type == 1) {
        if(MenuTransparent.x < 0) {
            /* Move objects */
            MenuTransparent.x += MenuTransparent.vx;
            Logo.x += Logo.vx;
            VersionText.x += VersionText.vx;
            NormalModeText.x += NormalModeText.vx;
            HardModeText.x += HardModeText.vx;
            TutorialText.x += TutorialText.vx;
            SettingsText.x += SettingsText.vx;
            AboutText.x += AboutText.vx;
        }
        else if(MenuTransparent.x >= 0) {
            /* Change loop value */
            MenuTransparent.type = 0;
        }
    }

    /* Menu end animation */
    if(MenuTransparent.type == 2) {
        if(MenuTransparent.x > -900) {
            /* Move objects */
            MenuTransparent.x -= MenuTransparent.vx;
            Logo.x -= Logo.vx;
            VersionText.x -= VersionText.vx;
            NormalModeText.x -= NormalModeText.vx;
            HardModeText.x -= HardModeText.vx;
            TutorialText.x -= TutorialText.vx;
            SettingsText.x -= SettingsText.vx;
            AboutText.x -= AboutText.vx;
        }
        else if(MenuTransparent.x <= -900) {
            /* Change loop value */
            MenuTransparent.type = 0;
        }
    }

    /* Hide main section */
    if(MenuTransparent.type == 3) {
        if(MenuTransparent.x > -900) {
            /* Move objects */
            MenuTransparent.x -= MenuTransparent.vx;
            Logo.x -= Logo.vx;
            VersionText.x -= VersionText.vx;
            NormalModeText.x -= NormalModeText.vx;
            HardModeText.x -= HardModeText.vx;
            TutorialText.x -= TutorialText.vx;
            SettingsText.x -= SettingsText.vx;
            AboutText.x -= AboutText.vx;
        }
        else if(MenuTransparent.x <= -900) {
            /* Change loop value */
            SettingsTransition = 2;
            MenuTransparent.type = 0;
        }
    }

    /* Show settings section */
    if(MenuTransparent.type == 4) {
        if(MenuTransparent.x < 0) {
            /* Move objects */
            MenuTransparent.x += MenuTransparent.vx;
            Logo.x += Logo.vx;
            VersionText.x += VersionText.vx;
            SfxText.x += SfxText.vx;
            MusicText.x += MusicText.vx;
            ReturnText.x += ReturnText.vx;
        }
        else if(MenuTransparent.x >= 0) {
            /* Change loop value */
            SettingsTransition = 3;
            MenuTransparent.type = 0;
        }
    }

    /* Hide settings section */
    if(MenuTransparent.type == 5) {
        if(MenuTransparent.x > -900) {
            /* Move objects */
            MenuTransparent.x -= MenuTransparent.vx;
            Logo.x -= Logo.vx;
            VersionText.x -= VersionText.vx;
            SfxText.x -= SfxText.vx;
            MusicText.x -= MusicText.vx;
            ReturnText.x -= ReturnText.vx;
        }
        else if(MenuTransparent.x <= -900) {
            /* Change loop value */
            SettingsTransition = 5;
            MenuTransparent.type = 0;
        }
    }

    /* Show main section */
    if(MenuTransparent.type == 6) {
        if(MenuTransparent.x < 0) {
            /* Move objects */
            MenuTransparent.x += MenuTransparent.vx;
            Logo.x += Logo.vx;
            VersionText.x += VersionText.vx;
            NormalModeText.x += NormalModeText.vx;
            HardModeText.x += HardModeText.vx;
            TutorialText.x += TutorialText.vx;
            SettingsText.x += SettingsText.vx;
            AboutText.x += AboutText.vx;
        }
        else if(MenuTransparent.x >= 0) {
            /* Change loop value */
            SettingsTransition = 0;
            MenuTransparent.type = 0;
        }
    }

    /* Hide main section */
    if(MenuTransparent.type == 7) {
        if(MenuTransparent.x > -900) {
            /* Move objects */
            MenuTransparent.x -= MenuTransparent.vx;
            Logo.x -= Logo.vx;
            VersionText.x -= VersionText.vx;
            NormalModeText.x -= NormalModeText.vx;
            HardModeText.x -= HardModeText.vx;
            TutorialText.x -= TutorialText.vx;
            SettingsText.x -= SettingsText.vx;
            AboutText.x -= AboutText.vx;
        }
        else if(MenuTransparent.x <= -900) {
            AboutTransition = 2;
            MenuTransparent.type = 0;
        }
    }

    /* Show about section */
    if(MenuTransparent.type == 8) {
        if(MenuTransparent.x < 0) {
            /* Move objects */
            MenuTransparent.x += MenuTransparent.vx;
            Logo.x += Logo.vx;
            VersionText.x += VersionText.vx;
            ReturnText.x += ReturnText.vx;
        }
        else if(MenuTransparent.x >= 0) {
            /* Change loop value */
            AboutTransition = 3;
            MenuTransparent.type = 0;
        }
    }

    /* Hide about section */
    if(MenuTransparent.type == 9) {
        if(MenuTransparent.x > -900) {
            /* Move objects */
            MenuTransparent.x -= MenuTransparent.vx;
            Logo.x -= Logo.vx;
            VersionText.x -= VersionText.vx;
            ReturnText.x -= ReturnText.vx;
        }
        else if(MenuTransparent.x <= -900) {
            /* Change loop value */
            AboutTransition = 5;
            MenuTransparent.type = 0;
        }
    }

    /* Show main section */
    if(MenuTransparent.type == 10) {
        if(MenuTransparent.x < 0) {
            /* Move objects */
            MenuTransparent.x += MenuTransparent.vx;
            Logo.x += Logo.vx;
            VersionText.x += VersionText.vx;
            NormalModeText.x += NormalModeText.vx;
            HardModeText.x += HardModeText.vx;
            TutorialText.x += TutorialText.vx;
            SettingsText.x += SettingsText.vx;
            AboutText.x += AboutText.vx;
        }
        else if(MenuTransparent.x >= 0) {
            /* Change loop value */
            AboutTransition = 0;
            MenuTransparent.type = 0;
        }
    }
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
        /* Start platformgenerator function */
        window.platformgenerator();

        /* Change loop value */
        Platform.currentload += 1;
    }
}

/* Window generator update function */
window.updatelevel = function(CurrentPlatform) {
    if(CurrentPlatform.y - CurrentPlatform.h >= Board.h) {
        CurrentPlatform = window.platformgenerator();
    }
}

/* Window platform generator function */
window.platformgenerator = function() {
    /* Generate platform count */
    if(Board.h < Board.w) {
        Platform.count = Math.floor(Math.random() * 3);
    }
    else if(Board.h >= Board.w) {
        Platform.count = 0;
    }

    /* Generate all platforms position */
    if(Platform.count == 0) {
        Platform.randomx1 = Math.floor(Math.random() * Board.w * 3/4) + Platform.w / 2;
    }
    if(Platform.count == 1) {
        Platform.randomx1 = Math.floor(Math.random() * Board.w * 1.5/4 + Platform.w / 2);
        Platform.randomx2 = Platform.randomx1 + Platform.w + Math.floor(Math.random() * Board.w * 1.5/4 + Platform.w / 2);
    }
    if(Platform.count == 2) {
        Platform.randomx1 = Math.floor(Math.random() * Board.w * 1/4 + Platform.w / 2);
        Platform.randomx2 = Platform.randomx1 + Platform.w + Math.floor(Math.random() * Board.w * 1/4) + Platform.w / 2;
        Platform.randomx3 = Platform.randomx2 + Platform.w + Math.floor(Math.random() * Board.w * 1/4 + Platform.w / 2);
    }

    /* Create first current platform */
    let CurrentPlatform = {
        x: 0,
        y: Board.h - 192 * Platform.currentload - 288,
        w: Platform.randomx1,
        h: Platform.h,
        color: Platform.color,
    };

    /* Push current platform into array */
    Platform.array.push(CurrentPlatform);

    /* Create second platform */
    if(Platform.count == 0) {
        CurrentPlatform = {
            x: Platform.randomx1 + Platform.w,
            y: CurrentPlatform.y,
            w: Board.w - Platform.randomx1 - Platform.w,
            h: Platform.h,
            color: Platform.color,
        };
    }

    /* Create second and last platform */
    if(Platform.count == 1) {
        CurrentPlatform = {
            x: Platform.randomx1 + Platform.w,
            y: CurrentPlatform.y,
            w: Platform.randomx2 - Platform.randomx1 - Platform.w,
            h: Platform.h,
            color: Platform.color,
        };

        /* Push current platform into array */
        Platform.array.push(CurrentPlatform);

        CurrentPlatform = {
            x: Platform.randomx2 + Platform.w,
            y: CurrentPlatform.y,
            w: Board.w - Platform.randomx2 - Platform.w,
            h: Platform.h,
            color: Platform.color,
        };
    }

    /* Create second, third and last platform */
    else if(Platform.count == 2) {
        CurrentPlatform = {
            x: Platform.randomx1 + Platform.w,
            y: CurrentPlatform.y,
            w: Platform.randomx2 - Platform.randomx1 - Platform.w,
            h: Platform.h,
            color: Platform.color,
        };

        /* Push current platform into array */
        Platform.array.push(CurrentPlatform);

        CurrentPlatform = {
            x: Platform.randomx2 + Platform.w,
            y: CurrentPlatform.y,
            w: Platform.randomx3 - Platform.randomx2 - Platform.w,
            h: Platform.h,
            color: Platform.color,
        };

        /* Push current platform into array */
        Platform.array.push(CurrentPlatform);

        CurrentPlatform = {
            x: Platform.randomx3 + Platform.w,
            y: CurrentPlatform.y,
            w: Board.w - Platform.randomx3 - Platform.w,
            h: Platform.h,
            color: Platform.color,
        };
    }
        
    /* Push current platform into array */
    Platform.array.push(CurrentPlatform);
}

