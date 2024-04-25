// Uncreative Platformer made by CiupagaPL; Simple platformer made in JS.
/* GPL 3.0 (C) 2024 CiupagaPL */

/* Window create function */
window.onload = function() {
    /* Create game board */
    Board.base.width = Board.w;
    Board.base.height = Board.h;
    Context = Board.base.getContext("2d");

    /* Turn on warning mode if resolution is too low */
    if(Board.w < 1000 || Board.h < 800) {
        Scene = 0;
    }

    /* Turn on warning mode if resolution is too high */
    if(Board.w > 3840 || Board.h > 2168) {
        Scene = 0;
    }

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

    /* Turn on warning mode */
    Scene = 0;
}

/* Window update function */
window.onupdate = function() {
    /* Limit fps */
    setTimeout(() => {
        requestAnimationFrame(window.onupdate);
    }, 1000 / 120);

    /* Clear screen */
    Context.clearRect(0, 0, Board.w, Board.h);

    /* Warning scene */
    if(Scene == 0) {
        /* Draw warning object */
        Context.fillStyle = Warning.color;
        Context.fillRect(Warning.x, Warning.y, Warning.w, Warning.h);

        /* Draw warningtext object */
        Context.fillStyle = WarningText.color;
        Context.font = WarningText.font;
        Context.fillText(WarningText.value, WarningText.x, WarningText.y);
    }
    
    /* Menu scene */
    if(Scene == 1) {
        /* Things todo on scene start */
        if(SceneStart == false) {
            /* Turn on transition animation */
            Transition.type = 1;
            window.animatetransition();
        }

        /* Things todo on scene change */
        if(SceneChange == true) {
            /* Turn on transition animation */ 
            Transition.type = 2;
            window.animatetransition();
        }

        /* Draw background object */
        Background.img.src = "Sprites/Background1.png";
        Context.drawImage(Background.img, Background.x, Background.y, Background.w, Background.h);

        /* Draw menutransparent object */
        Context.fillStyle = MenuTransparent.color;
        Context.fillRect(MenuTransparent.x, MenuTransparent.y, MenuTransparent.w, MenuTransparent.h);

        /* Draw title object */
        Title.img.src = "Sprites/Title.png";
        Context.drawImage(Title.img, Title.x, Title.y, Title.w, Title.h);

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

        /* Draw descriptiontext1 object */
        Context.fillStyle = DescriptionText1.color;
        Context.font = DescriptionText1.font;
        Context.fillText(DescriptionText1.value, DescriptionText1.x, DescriptionText1.y);

        /* Draw descriptiontext2 object */
        Context.fillStyle = DescriptionText2.color;
        Context.font = DescriptionText2.font;
        Context.fillText(DescriptionText2.value, DescriptionText2.x, DescriptionText2.y);

        /* Draw descriptiontext3 object */
        Context.fillStyle = DescriptionText3.color;
        Context.font = DescriptionText3.font;
        Context.fillText(DescriptionText3.value, DescriptionText3.x, DescriptionText3.y);

        /* Draw descriptiontext4 object */
        Context.fillStyle = DescriptionText4.color;
        Context.font = DescriptionText4.font;
        Context.fillText(DescriptionText4.value, DescriptionText4.x, DescriptionText4.y);

        /* Draw descriptiontext5 object */
        Context.fillStyle = DescriptionText5.color;
        Context.font = DescriptionText5.font;
        Context.fillText(DescriptionText5.value, DescriptionText5.x, DescriptionText5.y);

        /* Draw descriptiontext6 object */
        Context.fillStyle = DescriptionText6.color;
        Context.font = DescriptionText6.font;
        Context.fillText(DescriptionText6.value, DescriptionText6.x, DescriptionText6.y);

        /* Draw returntext object */
        Context.fillStyle = ReturnText.color;
        Context.font = ReturnText.font;
        Context.fillText(ReturnText.value, ReturnText.x, ReturnText.y);

        /* Draw transition object */
        Context.fillStyle = Transition.color;
        Context.fillRect(Transition.x, Transition.y, Transition.w, Transition.h);

        /* Settings section animation function */
        if(SettingsTransition == 1) {
            /* Change loop value and start animating function */
            MenuTransparent.type = 3;
            window.animatehud();
        }
        if(SettingsTransition == 2) {
            /* Change loop value and start animating function */
            MenuTransparent.type = 4;
            window.animatehud();
        }
        if(SettingsTransition == 4) {
            /* Change loop value and start animating function */
            MenuTransparent.type = 5;
            window.animatehud();
        }
        if(SettingsTransition == 5) {
            /* Change loop value and start animating function */
            MenuTransparent.type = 6;
            window.animatehud();
        }

        /* About section animation function */
        if(AboutTransition == 1) {
            /* Change loop value and start animating function */
            MenuTransparent.type = 7;
            window.animatehud();
        }
        if(AboutTransition == 2) {
            /* Change loop value and start animating function */
            MenuTransparent.type = 8;
            window.animatehud();
        }
        if(AboutTransition == 4) {
            /* Change loop value and start animating function */
            MenuTransparent.type = 9;
            window.animatehud();
        }
        if(AboutTransition == 5) {
            /* Change loop value and start animating function */
            MenuTransparent.type = 10;
            window.animatehud();
        }
    }

    /* Game scene */
    if(Scene == 2) {
        /* Things todo on scene start */
        if(SceneStart == false) {
            /* Turn on transition animation */
            Transition.type = 3;
            window.animatetransition();
        }

        /* Things todo on scene change */
        if(SceneChange == true) {
            /* Turn on transition animation */
            Transition.type = 4;
            window.animatetransition();
        }

        /* Things todo on scene restart */
        if(SceneRestart == true) {
            /* Turn on transition animation */
            Transition.type = 5;
            window.animatetransition();
        }

        /* Change hud animation depending on game statement */
        if(Pause == 1) {
            /* Animate ingame hud */
            StatusTransparent.type = 2;
            window.animateingamehud();

            /* Animate hud */
            if(StatusTransparent.type == 0) {
                MenuTransparent.type = 11;
                window.animatehud();
            }
        }
        else if(Pause == 3) {
            /* Animate hud */
            MenuTransparent.type = 12;
            window.animatehud();

            /* Animate ingame hud */
            if(MenuTransparent.type == 0) {
                StatusTransparent.type = 1;
                window.animateingamehud();
            }
        }

        /* Draw background object */
        Background.img = new Image();
        Background.img.src = "Sprites/Background1.png";
        Context.drawImage(Background.img, Background.x, Background.y, Background.w, Background.h);

        /* Refresh groundchecktop position */
        GroundCheckTop.x = Player.x + Player.vx;
        GroundCheckTop.y = Player.y + Player.vy;

        /* Refresh groundcheckbottom position */
        GroundCheckBottom.x = Player.x + Player.vx;
        GroundCheckBottom.y = Player.y + 126 + Player.vy;

        /* Refresh groundcheckleft position */
        GroundCheckLeft.x = Player.x + Player.vx;
        GroundCheckLeft.y = Player.y + 12 + Player.vy;

        /* Refresh groundcheckright position */
        GroundCheckRight.x = Player.x + 128 + Player.vx;
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

        /* Draw mainplatform object */
        Context.fillStyle = MainPlatform.color;
        Context.fillRect(MainPlatform.x, MainPlatform.y, MainPlatform.w, MainPlatform.h);

        /* Draw spike object */
        Context.fillStyle = Spike.color;
        Context.fillRect(Spike.x, Spike.y, Spike.w, Spike.h);

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

            /* Detect collisions between groundcheckbottom and mainplatform object */
            if(window.detectcollision(MainPlatform, GroundCheckBottom) && Player.touch == 0) {
                /* Change y velocity of Player object */
                Player.vy = 0;

                /* End jumping function */
                Player.jump = 0;
                Player.touch = 1;
            }

            /* Check if player is grounded */
            if(Player.vy != 0) {
                Player.isgrounded = false;
            }
            else if(Player.vy == 0) {
                Player.isgrounded = true;
            }
            
            /* Update level */
            // window.updatelevel(CurrentPlatform);

            /* Move platforms */

            // if(Score >= 1) {
            //     CurrentPlatform.y += 0.25;
            // }

            /* Change loop value */
            Platform.currentlenght += 1;
            Player.touch = 0;
        }

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
        if(Pause == 0) {
            Player.y += Player.vy;
            if(!Player.isdead) {
                Player.x += Player.vx;
                Player.vy += Player.gravity;
            }
        }

        /* Detect collisions between player and spike object */
        if(window.detectcollision(Player, Spike) && Player.touch == 0) {
            /* Make player dead */
            Player.isdead = true;
            SceneRestart = true;
        }

        /* Draw player object */
        Context.fillStyle = Player.color;
        Context.fillRect(Player.x, Player.y, Player.w, Player.h);

        /* Draw groundchecktop object */
        Context.fillStyle = Transition.color;
        Context.fillRect(GroundCheckTop.x, GroundCheckTop.y, GroundCheckTop.w, GroundCheckTop.h);

        /* Draw groundcheckbottom object */
        Context.fillStyle = Transition.color;
        Context.fillRect(GroundCheckBottom.x, GroundCheckBottom.y, GroundCheckBottom.w, GroundCheckBottom.h);

        /* Draw groundcheckleft object */
        Context.fillStyle = Transition.color;
        Context.fillRect(GroundCheckLeft.x, GroundCheckLeft.y, GroundCheckLeft.w, GroundCheckLeft.h);

        /* Draw groundcheckright object */
        Context.fillStyle = Transition.color;
        Context.fillRect(GroundCheckRight.x, GroundCheckRight.y, GroundCheckRight.w, GroundCheckRight.h);

        /* Draw statustransparent object */
        Context.fillStyle = StatusTransparent.color;
        Context.fillRect(StatusTransparent.x, StatusTransparent.y, StatusTransparent.w, StatusTransparent.h);

        /* Draw scoretext object */
        Context.fillStyle = ScoreText.color;
        Context.font = ScoreText.font;
        Context.fillText(ScoreText.value, ScoreText.x, ScoreText.y);

        /* Draw menutransparent object */
        Context.fillStyle = MenuTransparent.color;
        Context.fillRect(MenuTransparent.x, MenuTransparent.y, MenuTransparent.w, MenuTransparent.h);

        /* Draw title object */
        Title.img.src = "Sprites/Title.png";
        Context.drawImage(Title.img, Title.x, Title.y, Title.w, Title.h);

        /* Draw resumetext object */
        Context.fillStyle = ResumeText.color;
        Context.font = ResumeText.font;
        Context.fillText(ResumeText.value, ResumeText.x, ResumeText.y);

        /* Draw restarttext object */
        Context.fillStyle = RestartText.color;
        Context.font = RestartText.font;
        Context.fillText(RestartText.value, RestartText.x, RestartText.y);

        /* Draw mainmenutext object */
        Context.fillStyle = MainMenuText.color;
        Context.font = MainMenuText.font;
        Context.fillText(MainMenuText.value, MainMenuText.x, MainMenuText.y);

        /* Draw versiontext object */
        Context.fillStyle = VersionText.color;
        Context.font = VersionText.font;
        Context.fillText(VersionText.value, VersionText.x, VersionText.y);

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

        /* Draw descriptiontext1 object */
        Context.fillStyle = DescriptionText1.color;
        Context.font = DescriptionText1.font;
        Context.fillText(DescriptionText1.value, DescriptionText1.x, DescriptionText1.y);

        /* Draw descriptiontext2 object */
        Context.fillStyle = DescriptionText2.color;
        Context.font = DescriptionText2.font;
        Context.fillText(DescriptionText2.value, DescriptionText2.x, DescriptionText2.y);

        /* Draw descriptiontext3 object */
        Context.fillStyle = DescriptionText3.color;
        Context.font = DescriptionText3.font;
        Context.fillText(DescriptionText3.value, DescriptionText3.x, DescriptionText3.y);

        /* Draw descriptiontext4 object */
        Context.fillStyle = DescriptionText4.color;
        Context.font = DescriptionText4.font;
        Context.fillText(DescriptionText4.value, DescriptionText4.x, DescriptionText4.y);

        /* Draw descriptiontext5 object */
        Context.fillStyle = DescriptionText5.color;
        Context.font = DescriptionText5.font;
        Context.fillText(DescriptionText5.value, DescriptionText5.x, DescriptionText5.y);

        /* Draw descriptiontext6 object */
        Context.fillStyle = DescriptionText6.color;
        Context.font = DescriptionText6.font;
        Context.fillText(DescriptionText6.value, DescriptionText6.x, DescriptionText6.y);

        /* Draw returntext object */
        Context.fillStyle = ReturnText.color;
        Context.font = ReturnText.font;
        Context.fillText(ReturnText.value, ReturnText.x, ReturnText.y);

        /* Draw transition object */
        Context.fillStyle = Transition.color;
        Context.fillRect(Transition.x, Transition.y, Transition.w, Transition.h);

        /* Settings section animation function */
        if(SettingsTransition == 1) {
            /* Change loop value and start animating function */
            MenuTransparent.type = 13;
            window.animatehud();
        }
        if(SettingsTransition == 2) {
            /* Change loop value and start animating function */
            MenuTransparent.type = 14;
            window.animatehud();
        }
        if(SettingsTransition == 4) {
            /* Change loop value and start animating function */
            MenuTransparent.type = 15;
            window.animatehud();
        }
        if(SettingsTransition == 5) {
            /* Change loop value and start animating function */
            MenuTransparent.type = 16;
            window.animatehud();
        }

        /* About section animation function */
        if(AboutTransition == 1) {
            /* Change loop value and start animating function */
            MenuTransparent.type = 17;
            window.animatehud();
        }
        if(AboutTransition == 2) {
            /* Change loop value and start animating function */
            MenuTransparent.type = 18;
            window.animatehud();
        }
        if(AboutTransition == 4) {
            /* Change loop value and start animating function */
            MenuTransparent.type = 19;
            window.animatehud();
        }
        if(AboutTransition == 5) {
            /* Change loop value and start animating function */
            MenuTransparent.type = 20;
            window.animatehud();
        }
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

/* Window generator update function */
window.updatelevel = function(CurrentPlatform) {
    /* Update platform if it is under screen */
    if(CurrentPlatform.y >= Board.h) {
        CurrentPlatform = window.platformgenerator();
    }
}

/* Window platform counter function */
window.currentplatformgenerator = function() {
    Platform.load = Math.round((Board.h - 384) / 256);
}

/* Window platform generator function */
window.platformgenerator = function() {
    /* Generate platform count */
    Platform.count = Math.floor(Math.random() * 2);

    /* Generate all platforms position */
    if(Platform.count == 0) {
        Platform.randomx1 = Math.floor(Math.random() * Board.w * 3/4) + Platform.w / 2;
    }
    if(Platform.count == 1) {
        Platform.randomx1 = Math.floor(Math.random() * Board.w * 1.5/4 + Platform.w / 2);
        Platform.randomx2 = Platform.randomx1 + Math.floor(Math.random() * Board.w * 1.5/4 + Platform.w / 2) + 192;
    }

    /* Create first current platform */
    let CurrentPlatform = {
        x: 0,
        y: Board.h - 256 * Platform.currentload - 384,
        fx: 0,
        fy: 0,
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
            fx: 0,
            fy: 0,
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
            fx: 0,
            fy: 0,
            w: Platform.randomx2 - Platform.randomx1 - Platform.w,
            h: Platform.h,
            color: Platform.color,
        };

        /* Push current platform into array */
        Platform.array.push(CurrentPlatform);

        CurrentPlatform = {
            x: Platform.randomx2 + Platform.w,
            y: CurrentPlatform.y,
            fx: 0,
            fy: 0,
            w: Board.w - Platform.randomx2 - Platform.w,
            h: Platform.h,
            color: Platform.color,
        };
    }

    /* Push current platform into array */
    Platform.array.push(CurrentPlatform);
}

/* Window level generator function */
window.generatelevel = function() {
    /* Generate rest platforms */
    while(Platform.currentload <= Platform.load) {
        /* Count platforms */
        window.currentplatformgenerator();

        /* Start platformgenerator function */
        window.platformgenerator();

        /* Change loop value */
        Platform.currentload += 1;
    }
}

