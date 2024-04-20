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
                /* End transition animation */
                else if(Transition.y <= -Board.h) {
                    /* Animate menu start */
                    Transparent1.type = 1;
                    window.animatemenu();

                    /* End scene start */
                    if(Transparent1.type == 0) {
                        Transition.timer = 0;
                        SceneStart = 1;
                    }
                }
            }
        }

        /* Things todo on scene change */
        if(SceneChange == 1) {
            Transparent1.type = 2;
            window.animatemenu();

            /* Animate menu end */
            if(Transparent1.type == 0) {
                /* Start transition animation */
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

        /* Draw transparent1 object */
        Context.fillStyle = Transparent1.color;
        Context.fillRect(Transparent1.x, Transparent1.y, Transparent1.w, Transparent1.h);

        /* Draw versiontext object */
        Context.fillStyle = VersionText.color;
        Context.font = VersionText.font;
        Context.fillText(VersionText.value, VersionText.x, VersionText.y);

        /* If settings and about section is off */
        if(Settings == 0 && About == 0) {
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
        }

        /* Draw logo object */
        Logo.img.src = "Sprites/Logo1.png";
        Context.drawImage(Logo.img, Logo.x, Logo.y, Logo.w, Logo.h);

        /* Turn on settings section */
        if(Settings == 1) {
            /* Draw sfxtext object */
            Context.fillStyle = SfxText.color;
            Context.font = SfxText.font;
            Context.fillText(SfxText.value, SfxText.x, SfxText.y);

            /* Draw musictext object */
            Context.fillStyle = MusicText.color;
            Context.font = MusicText.font;
            Context.fillText(MusicText.value, MusicText.x, MusicText.y);

            /* Draw scaletext object */
            Context.fillStyle = ScaleText.color;
            Context.font = ScaleText.font;
            Context.fillText(ScaleText.value, ScaleText.x, ScaleText.y);

            /* Draw returntext object */
            Context.fillStyle = ReturnText.color;
            Context.font = ReturnText.font;
            Context.fillText(ReturnText.value, ReturnText.x, ReturnText.y);
        }

        /* Turn on about section */
        if(About == 1) {
            /* Draw returntext object */
            Context.fillStyle = ReturnText.color;
            Context.font = ReturnText.font;
            Context.fillText(ReturnText.value, ReturnText.x, ReturnText.y);
        }

        /* Draw transition object */
        Context.fillStyle = Transition.color;
        Context.fillRect(Transition.x, Transition.y, Transition.w, Transition.h);
    }

    /* Game scene */
    if(Scene == 2) {
        /* Things todo on scene start */
        if(SceneStart == 0) {
            /* Gravity and physics generally */
            if(Pause != 1) {
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
        GroundCheck1.y = Player.y + 94 + Player.vy;

        /* Refresh groundcheck2 position */
        GroundCheck2.x = Player.x + Player.vx;
        GroundCheck2.y = Player.y + Player.vy;

        /* Refresh groundcheck3 position */
        GroundCheck3.x = Player.x + 2 + Player.vx;
        GroundCheck3.y = Player.y + 12 + Player.vy;

        /* Refresh groundcheck4 position */
        GroundCheck4.x = Player.x + 92 + Player.vx;
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
            if(window.detectcollision(CurrentPlatform, GroundCheck1) && Player.touch == 0) {
                /* Change y velocity of Player object */
                Player.vy = 0;

                /* End jumping function */
                Player.jump = 0;
                Player.touch = 1;
            }
            /* Detect collisions between groundcheck2 and platform object */
            if(window.detectcollision(CurrentPlatform, GroundCheck2) && Player.touch == 0) {
                /* Change y velocity of Player object */
                Player.vy = 8;
                Player.touch = 1;
            }
            /* Detect collisions between groundcheck3 and platform object */
            if(window.detectcollision(CurrentPlatform, GroundCheck3) && Player.touch == 0) {
                /* Change x velocity of Player object */
                Player.side = 1;
                Player.touch = 1;
            }
            /* Detect collisions between groundcheck4 and platform object */
            if(window.detectcollision(CurrentPlatform, GroundCheck4) && Player.touch == 0) {
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

        /* Check if foreground is on */
        if(Pause == 1) {

        }

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
    if(Transparent1.type == 1) {
        if(Transparent1.x < 0) {
            Transparent1.x += Transparent1.vx;
            Logo.x += Logo.vx;
            VersionText.x += VersionText.vx;
            NormalModeText.x += NormalModeText.vx;
            HardModeText.x += HardModeText.vx;
            TutorialText.x += TutorialText.vx;
            SettingsText.x += SettingsText.vx;
            AboutText.x += AboutText.vx;
        }
        else if(Transparent1.x >= 0) {
            Transparent1.type = 0;
        }
    }

    if(Transparent1.type == 2) {
        if(Transparent1.x > -900) {
            Transparent1.x -= Transparent1.vx;
            Logo.x -= Logo.vx;
            VersionText.x -= VersionText.vx;
            NormalModeText.x -= NormalModeText.vx;
            HardModeText.x -= HardModeText.vx;
            TutorialText.x -= TutorialText.vx;
            SettingsText.x -= SettingsText.vx;
            AboutText.x -= AboutText.vx;
        }
        else if(Transparent1.x <= -900) {
            Transparent1.type = 0;
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

