/* Uncreative Platformer made by CiupagaPL
 * GPL 3.0 (C) 2024 CiupagaPL */

/* Window create function */
window.onload = function() {
    /* Create game board */
    Board.base.width = Board.w;
    Board.base.height = Board.h;
    Context = Board.base.getContext("2d");

    /* Turn on warning mode if resolution is too low */
    if(Board.w < 1280 || Board.h < 800) {
        Scene = 0;
    }

    /* Turn on warning mode if resolution is too high */
    if(Board.w > 3840 || Board.h > 2160) {
        Scene = 0;
    }

    /* Write welcome message */
    console.log("Thank you for playing and have a good one <3");

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
    }, 1000 / FPS);

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

        /* Stop music */
        TimeMusic.game.pause();
        TimeMusic.menu.pause();
    }
    
    /* Menu scene */
    if(Scene == 1){
        /* Things todo on scene start */
        if(!SceneStart) {
            /* Turn on transition animation */
            Transition.type = 1;
            window.animatetransition();
        }

        /* Things todo on scene change */
        if(SceneChange) {
            /* Turn on transition animation */ 
            Transition.type = 2;
            window.animatetransition();
        }

        /* Draw background object */
        Context.fillStyle = Background.color;
        Context.fillRect(Background.x, Background.y, Background.w, Background.h);

        /* Draw menutransparent object */
        Context.fillStyle = MenuTransparent.color;
        Context.fillRect(MenuTransparent.x, MenuTransparent.y, MenuTransparent.w, MenuTransparent.h);

        /* Draw title object */
        Context.drawImage(Title.img, Title.x, Title.y, Title.w, Title.h);

        /* Draw versiontext object */
        Context.fillStyle = VersionText.color;
        Context.font = VersionText.font;
        Context.fillText(VersionText.value, VersionText.x, VersionText.y);

        /* Draw authortext object */
        Context.fillStyle = AuthorText.color;
        Context.font = AuthorText.font;
        Context.fillText(AuthorText.value, AuthorText.x, AuthorText.y);

        /* Draw normalmodetext object */
        Context.fillStyle = NormalModeText.color;
        Context.font = NormalModeText.font;
        Context.fillText(NormalModeText.value, NormalModeText.x, NormalModeText.y);

        /* Draw hardmodetext object */
        Context.fillStyle = HardModeText.color;
        Context.font = HardModeText.font;
        Context.fillText(HardModeText.value, HardModeText.x, HardModeText.y);

        /* Draw keybindstext object */
        Context.fillStyle = KeybindsText.color;
        Context.font = NormalModeText.font;
        Context.fillText(KeybindsText.value, KeybindsText.x, KeybindsText.y);

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

        /* Draw instructiontext1 object */
        Context.fillStyle = InstructionText1.color;
        Context.font = InstructionText1.font;
        Context.fillText(InstructionText1.value, InstructionText1.x, InstructionText1.y);

        /* Draw instructiontext2 object */
        Context.fillStyle = InstructionText2.color;
        Context.font = InstructionText2.font;
        Context.fillText(InstructionText2.value, InstructionText2.x, InstructionText2.y);

        /* Draw instructiontext3 object */
        Context.fillStyle = InstructionText3.color;
        Context.font = InstructionText3.font;
        Context.fillText(InstructionText3.value, InstructionText3.x, InstructionText3.y);

        /* Draw instructiontext4 object */
        Context.fillStyle = InstructionText4.color;
        Context.font = InstructionText4.font;
        Context.fillText(InstructionText4.value, InstructionText4.x, InstructionText4.y);

        /* Draw instructiontext5 object */
        Context.fillStyle = InstructionText5.color;
        Context.font = InstructionText5.font;
        Context.fillText(InstructionText5.value, InstructionText5.x, InstructionText5.y);

        /* Draw returntext object */
        Context.fillStyle = ReturnText.color;
        Context.font = ReturnText.font;
        Context.fillText(ReturnText.value, ReturnText.x, ReturnText.y);

        /* Draw transition object */
        Context.fillStyle = Transition.color;
        Context.fillRect(Transition.x, Transition.y, Transition.w, Transition.h);

        /* Animate up object */
        window.animateup();

        /* Play music */
        if(Music) {
            TimeMusic.timer += 1;
            if(TimeMusic.timer == 10) {
                TimeMusic.menu.volume = 0.35;
                TimeMusic.menu.play();
            }
            if(TimeMusic.timer >= 1650) {
                TimeMusic.menu.load();
                TimeMusic.timer = 0;
            }
        }
        /* Stop music */
        else if(!Music) {
            TimeMusic.menu.load();
            TimeMusic.timer = 0;
        }

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

        /* Keybinds section animation function */
        if(KeybindsTransition == 1) {
            /* Change loop value and start animating function */
            MenuTransparent.type = 11;
            window.animatehud();
        }
        if(KeybindsTransition == 2) {
            /* Change loop value and start animating function */
            MenuTransparent.type = 12;
            window.animatehud();
        }
        if(KeybindsTransition == 4) {
            /* Change loop value and start animating function */
            MenuTransparent.type = 13;
            window.animatehud();
        }
        if(KeybindsTransition == 5) {
            /* Change loop value and start animating function */
            MenuTransparent.type = 14;
            window.animatehud();
        }
    }

    /* Game scene */
    if(Scene == 2) {
        /* Things todo on scene start */
        if(!SceneStart) {
            /* Turn on transition animation */
            Transition.type = 3;
            window.animatetransition();
        }

        /* Things todo on scene change */
        if(SceneChange) {
            /* Turn on transition animation */
            Transition.type = 4;
            window.animatetransition();
        }

        /* Things todo on scene restart */
        if(SceneRestart) {
            /* Turn on transition animation */
            Transition.type = 5;
            window.animatetransition();
        }

        /* Change hud animation depending on game statement */
        if(PauseTransition == 1) {
            /* Animate ingame hud */
            StatusTransparent.type = 2;
            window.animateingamehud();

            /* Animate hud */
            if(StatusTransparent.type == 0) {
                MenuTransparent.type = 15;
                window.animatehud();
            }
        }
        else if(PauseTransition == 3) {
            /* Animate hud */
            if(SettingsTransition != 0) {
                MenuTransparent.type = 25;
                window.animatehud();
            }
            if(StatisticsTransition != 0) {
                MenuTransparent.type = 26;
                window.animatehud();
            }
            else if(SettingsTransition == 0 && StatisticsTransition == 0) {
                MenuTransparent.type = 16;
                window.animatehud();
            }

            /* Animate ingame hud */
            if(MenuTransparent.type == 0) {
                StatusTransparent.type = 1;
                window.animateingamehud();
            }
        }

        /* Draw background object */
        Context.fillStyle = Background.randomcolor;
        Context.fillRect(Background.x, Background.y, Background.w, Background.h);

        /* Animate player */
        window.animateplayer();

        /* Refresh groundchecktop position */
        GroundCheckTop.x = Player.x + 16 + Player.vx;
        GroundCheckTop.y = Player.y + Player.vy;

        /* Refresh groundcheckbottom position */
        GroundCheckBottom.x = Player.x + 16 + Player.vx;
        GroundCheckBottom.y = Player.y + 112 + Player.vy;

        /* Refresh groundcheckleft position */
        GroundCheckLeft.x = Player.x + Player.vx;
        GroundCheckLeft.y = Player.y + Player.vy;

        /* Refresh groundcheckright position */
        GroundCheckRight.x = Player.x + 112 + Player.vx;
        GroundCheckRight.y = Player.y + Player.vy;

        /* Refresh collisionchecktop position */
        CollisionCheckTop.x = Player.x + 16 + Player.vx;
        CollisionCheckTop.y = Player.y - 8 + Player.vy;

        /* Refresh collisioncheckbottom position */
        CollisionCheckBottom.x = Player.x + 16 + Player.vx;
        CollisionCheckBottom.y = Player.y - 8 + Player.h + Player.vy;

        /* Update generate level function */
        window.generatelevel();
        Platform.currentlenght = 0;
        Spike.currentlenght = 0;
        Coin.currentlenght = 0;
        Corner.currentlenght = 0;

        /* Update texts value */
        window.updatetext();

        /* Generate globalmovement number */
        if(PauseTransition == 0 && !Player.isdead && SceneStart && Player.y <= Board.w * 1.25 / 8) {
            GlobalMovement = 12;
        }
        else if(PauseTransition != 0 || !Player.isdead || SceneStart) {
            GlobalMovement = 0;
        }

        /* Start player timer */
        if(PauseTransition == 0 && !Player.isdead) {
            Player.timer += 1;
        }

        /* Start player checktimer */
        if(PauseTransition == 0 && !Player.isdead) {
            Player.checktimer += 1;
        }

        /* Make player checked false */
        if(Player.checktimer >= 4) {
            Player.checked = false;
        }

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

        /* Generate platforms */
        while(Platform.lenght >= Platform.currentlenght) {
            /* Draw current array platform */
            CurrentPlatform = Platform.array[Platform.currentlenght];
            if(!CurrentPlatform.disabled) {
                Context.drawImage(CurrentPlatform.img, CurrentPlatform.x, CurrentPlatform.y, CurrentPlatform.w, CurrentPlatform.h);
            }

            /* Update platforms */
            window.updateplatforms();

            /* Update score and change background color */
            if(Player.y <= CurrentPlatform.y) {
                if(CurrentPlatform.level + 1 > Score) {
                    window.randomizecolor();
                    Score += 1;
                }
            }

            /* Update best score */
            if(Score > BestScore) {
                BestScore = Score;
            }

            /* Detect collisions between groundchecktop and current platform object */
            if(window.detectcollision(CurrentPlatform, GroundCheckTop) && !Player.touched) {
                /* Check if player is rotated */
                if(!Player.rotated) {
                    /* Change y velocity of Player object */
                    Player.vy = GlobalMovement + 8;

                    /* Fix some update problems */
                    Player.touched = true;
                }
                else if(Player.rotated) {
                     /* Change y velocity of Player object */
                    Player.vy = GlobalMovement;

                    /* Fix some update problems */
                    Player.touched = true;
                }
            }

            /* Detect collisions between groundcheckbottom and current platform object */
            if(window.detectcollision(CurrentPlatform, GroundCheckBottom) && !Player.touched) {
                /* Check if player is rotated */
                if(!Player.rotated) {
                    /* Change y velocity of player object */
                    Player.vy = GlobalMovement;

                    /* Fix some update problems */
                    Player.touched = true;

                    /* Change score value */
                    if(CurrentPlatform.level + 1 > Score) {
                        Score += 1;
                    }
                }
                else if(Player.rotated) {
                    /* Change y velocity of player object */
                    Player.vy = GlobalMovement - 8;

                    /* Fix some update problems */
                    Player.touched = true;
                }
            }

            /* Move current platform object */
            CurrentPlatform.y += GlobalMovement;

            /* Change loop value */
            Platform.currentlenght += 1;
            Player.touched = false;

            /* Check if player object is grounded */
            if(Player.checktimer >= 4) {
                /* Check if player is rotated */
                if(!Player.rotated) {
                    if(window.detectcollision(CurrentPlatform, CollisionCheckBottom)) {
                        /* Make player object grounded */
                        Player.grounded = true;
                        Player.checked = true;

                        /* Change loop value */
                        Player.checktimer = 0;
                    }
                    else if(!window.detectcollision(CurrentPlatform, CollisionCheckBottom)) {
                        if(!Player.checked && Platform.lenght == Platform.currentlenght) {
                            /* Make player object ungrounded */
                            Player.grounded = false;
                            Player.checked = false;

                            /* Change loop value */
                            Player.checktimer = 0;
                        }
                    }
                }
                else if(Player.rotated) {
                    if(window.detectcollision(CurrentPlatform, CollisionCheckTop)) {
                        /* Make player object grounded */
                        Player.grounded = true;
                        Player.checked = true;

                        /* Change loop value */
                        Player.checktimer = 0;
                    }
                    else if(!window.detectcollision(CurrentPlatform, CollisionCheckTop)) {
                        if(!Player.checked && Platform.lenght == Platform.currentlenght) {
                            /* Make player object ungrounded */
                            Player.grounded = false;
                            Player.checked = false;

                            /* Change loop value */
                            Player.checktimer = 0;
                        }
                    }
                }
            }
        }

        /* Generate corners */
        while(Corner.lenght >= Corner.currentlenght) {
            /* Draw current corner object */
            CurrentCorner = Corner.array[Corner.currentlenght];
            if(!CurrentCorner.disabled) {
                Context.drawImage(CurrentCorner.img, CurrentCorner.x, CurrentCorner.y, CurrentCorner.w, CurrentCorner.h);
            }

            /* Update corners */
            window.updatecorners();

            /* Detect collisions between groundcheckleft and current corner */
            if(window.detectcollision(CurrentCorner, GroundCheckLeft) && !CurrentCorner.left) {
                /* Change x velocity of Player object */
                Player.side = 1;

                /* Fix some update problems */
                Player.touched = true;
            }

            /* Detect collisions between groundcheckright and current corner */
            if(window.detectcollision(CurrentCorner, GroundCheckRight) && CurrentCorner.left) {
                /* Change x velocity of Player object */
                Player.side = 2;

                /* Fix some update problems */
                Player.touched = true;
            }

            /* Move current corner object */
            CurrentCorner.y += GlobalMovement;

            /* Change loop value */
            Corner.currentlenght += 1;
        }

        /* Generate spikes */
        while(Spike.lenght >= Spike.currentlenght) {
            /* Draw current array spike object */
            CurrentSpike = Spike.array[Spike.currentlenght];
            if(!CurrentSpike.disabled) {
                Context.drawImage(CurrentSpike.img, CurrentSpike.x, CurrentSpike.y, CurrentSpike.w, CurrentSpike.h);
            }

            /* Update spikes */
            window.updatespikes();

            /* Detect collisions between player and currentspike object */
            if(window.detectcollision(Player, CurrentSpike)) {
                /* Play dead sound */
                if(!Player.isdead && Sfx) {
                    TimeSfx.hit.load();
                    TimeSfx.hit.play();
                }

                /* Make player dead */
                Player.isdead = true;
                SceneRestart = true;
            }

            /* Move current spike object */
            CurrentSpike.y += GlobalMovement;

            /* Change loop value */
            Spike.currentlenght += 1;
        }

        /* Generate coins */
        while(Coin.lenght >= Coin.currentlenght) {
            /* Draw current array coin object */
            CurrentCoin = Coin.array[Coin.currentlenght];
            if(!CurrentCoin.disabled) {
                Context.drawImage(CurrentCoin.img, CurrentCoin.x, CurrentCoin.y, CurrentCoin.w, CurrentCoin.h);
            }

            /* Update coins */
            window.updatecoins();

            /* Detect collisions between player and currentcoin object */
            if(window.detectcollision(Player, CurrentCoin)) {
                if(!CurrentCoin.disabled) {
                    /* Add one to coins variable */
                    Coins += 1;

                    /* Play coin sound */
                    if(Sfx) {
                        TimeSfx.coin.load();
                        TimeSfx.coin.play();
                    }
                }

                /* Disable currentcoin */
                CurrentCoin.disabled = true;
            }

            /* Move current coin object */
            CurrentCoin.y += GlobalMovement;

            /* Change loop value */
            Coin.currentlenght += 1;
        }

        /* Make player object focussed */
        if(!Player.fallen) {
            /* Start timer */
            Player.fallentimer += 1;
            
            /* Change player side */
            Player.side = 0;

            if(Player.fallentimer >= 8) {
                if(Player.grounded) {
                    /* End loop */
                    Player.fallen = true;
                }
            }
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
        if(PauseTransition == 0 && !Player.isdead) {
            if(!Player.rotated) {
                Player.y += Player.vy;
                Player.x += Player.vx;
                Player.vy += Player.gravity;
            }
            else if(Player.rotated) {
                Player.y += Player.vy;
                Player.x += Player.vx;
                Player.vy -= Player.gravity;
            }
        }

        /* Kill player object if it is falling */
        if(Player.y + Player.h / 2 >= Board.h) {
            /* Play dead sound */
            if(!Player.isdead && Sfx) {
                TimeSfx.hit.load();
                TimeSfx.hit.play();
            }

            Player.isdead = true;
            SceneRestart = true;
        }

        /* Draw statustransparent object */
        Context.fillStyle = StatusTransparent.color;
        Context.fillRect(StatusTransparent.x, StatusTransparent.y, StatusTransparent.w, StatusTransparent.h);

        /* Draw scoretext object */
        Context.fillStyle = ScoreText.color;
        Context.font = ScoreText.font;
        Context.fillText(ScoreText.value, ScoreText.x, ScoreText.y);

        /* Draw coinstext object */
        Context.fillStyle = CoinsText.color;
        Context.font = CoinsText.font;
        Context.fillText(CoinsText.value, CoinsText.x, CoinsText.y);

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

        /* Draw authortext object */
        Context.fillStyle = AuthorText.color;
        Context.font = AuthorText.font;
        Context.fillText(AuthorText.value, AuthorText.x, AuthorText.y);

        /* Draw settingstext object */
        Context.fillStyle = SettingsText.color;
        Context.font = SettingsText.font;
        Context.fillText(SettingsText.value, SettingsText.x, SettingsText.y);

        /* Draw statisticstext object */
        Context.fillStyle = StatisticsText.color;
        Context.font = StatisticsText.font;
        Context.fillText(StatisticsText.value, StatisticsText.x, StatisticsText.y);

        /* Draw sfxtext object */
        Context.fillStyle = SfxText.color;
        Context.font = SfxText.font;
        Context.fillText(SfxText.value, SfxText.x, SfxText.y);

        /* Draw musictext object */
        Context.fillStyle = MusicText.color;
        Context.font = MusicText.font;
        Context.fillText(MusicText.value, MusicText.x, MusicText.y);

        /* Draw informationtext1 object */
        Context.fillStyle = InformationText1.color;
        Context.font = InformationText1.font;
        Context.fillText(InformationText1.value, InformationText1.x, InformationText1.y);

        /* Draw informationtext2 object */
        Context.fillStyle = InformationText2.color;
        Context.font = InformationText2.font;
        Context.fillText(InformationText2.value, InformationText2.x, InformationText2.y);

        /* Draw informationtext3 object */
        Context.fillStyle = InformationText3.color;
        Context.font = InformationText3.font;
        Context.fillText(InformationText3.value, InformationText3.x, InformationText3.y);

        /* Draw returntext object */
        Context.fillStyle = ReturnText.color;
        Context.font = ReturnText.font;
        Context.fillText(ReturnText.value, ReturnText.x, ReturnText.y);

        /* Draw pausetext object */
        Context.fillStyle = PauseText.color;
        Context.font = PauseText.font;
        Context.fillText(PauseText.value, PauseText.x, PauseText.y);

        /* Draw transition object */
        Context.fillStyle = Transition.color;
        Context.fillRect(Transition.x, Transition.y, Transition.w, Transition.h);

        /* Animate up object */
        window.animateup();

        /* Play music */
        if(Music) {
            TimeMusic.timer += 1;
            if(TimeMusic.timer == 10) {
                TimeMusic.game.volume = 0.35;
                TimeMusic.game.play();
            }
            if(TimeMusic.timer >= 3700) {
                TimeMusic.game.load();
                TimeMusic.timer = 0;
            }
        }
        /* Stop music */
        else if(!Music) {
            TimeMusic.game.load();
            TimeMusic.timer = 0;
        }

        /* Settings section animation function */
        if(SettingsTransition == 1) {
            /* Change loop value and start animating function */
            MenuTransparent.type = 17;
            window.animatehud();
        }
        if(SettingsTransition == 2) {
            /* Change loop value and start animating function */
            MenuTransparent.type = 18;
            window.animatehud();
        }
        if(SettingsTransition == 4) {
            /* Change loop value and start animating function */
            MenuTransparent.type = 19;
            window.animatehud();
        }
        if(SettingsTransition == 5) {
            /* Change loop value and start animating function */
            MenuTransparent.type = 20;
            window.animatehud();
        }

        /* Statistics section animation function */
        if(StatisticsTransition == 1) {
            /* Change loop value and start animating function */
            MenuTransparent.type = 21;
            window.animatehud();
        }
        if(StatisticsTransition == 2) {
            /* Change loop value and start animating function */
            MenuTransparent.type = 22;
            window.animatehud();
        }
        if(StatisticsTransition == 4) {
            /* Change loop value and start animating function */
            MenuTransparent.type = 23;
            window.animatehud();
        }
        if(StatisticsTransition == 5) {
            /* Change loop value and start animating function */
            MenuTransparent.type = 24;
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

/* Window update texts function */
window.updatetext = function() {
    /* Update scoretext value */
    ScoreText.value = "Score: " + Score.toString();

    /* Update coinstext value */
    CoinsText.value = "Coins: " + Coins.toString();
    CoinsText.char = Coins.toString().length;

    /* Update informationtext1 value */
    InformationText1.value = "Current Score: " + Score.toString();

    /* Update informationtext2 value */
    InformationText2.value = "Current Coins: " + Coins.toString();

    /* Update informationtext3 value */
    InformationText3.value = "Best Score: " + BestScore.toString();

    /* Update coinstext position */
    if(CoinsText.lastchar < CoinsText.char) {
        CoinsText.x -= 34;
        CoinsText.lastchar += 1;
    }
}

/* Window randomizing color function */
window.randomizecolor = function() {
    /* Randomize values */
    Background.random1 = Math.floor(Math.random() * 200) + 56;
    Background.random2 = Math.floor(Math.random() * 200) + 56;
    Background.random3 = Math.floor(Math.random() * 200) + 56;

    /* Set proper color */
    Background.randomcolor = "rgb(" + Background.random1.toString() + ", " + Background.random2.toString() + ", " + Background.random3.toString() + ")";
}

