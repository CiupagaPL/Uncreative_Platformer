/* Uncreative Platformer made by CiupagaPL
 * GPL 3.0 (C) 2024 CiupagaPL */

/* Window transition animating function */
window.animatetransition = function() {
    /* Transition menu first animation */
    if(Transition.type == 1) {
        /* Set default position of transition object */
        if(!Transition.started) {
            /* Things todo on scene start */
            Transition.y = 0;

            /* Animate up */
            UP.type = 1;
            window.animateaddons();
            if(UP.type == 0) {
                Transition.started = true;
            }
        }

        /* Start transition object animation */
        if(Transition.started) {
            /* Move transition object */
            if(Transition.y > -Board.h) {
                Transition.y -= Transition.vx;
            }
            
            /* End transition animation */
            else if(Transition.y <= -Board.h) {
                /* Animate menu start */
                MenuTransparent.type = 1;
                animatehud();

                /* End scene start */
                if(MenuTransparent.type == 0) {
                    Transition.started = false;
                    Transition.type = 0;
                    SceneStart = true;
                }
            }
        }
    }

    /* Transition menu last animation */
    if(Transition.type == 2) {
        /* Start transparent hiding animation */
        MenuTransparent.type = 2;
        window.animatehud();

        /* Animate menu end */
        if(MenuTransparent.type == 0) {
            /* Start transition animation */
            if(Transition.y < 0) {
                Transition.y += Transition.vx;
            }
            /* End transition object animation */
            else if(Transition.y >= 0) {
                /* End scene */
                Transition.timer = 0;
                SceneChange = false;
                SceneStart = false;
                Scene = 2;
                Transition.type = 0;
            }
        }
    }

    /* Transition ingame first animation */
    if(Transition.type == 3) {
        /* Reset level */
        if(!Transition.started) {
            window.resetlevel();
            Player.x = Board.w / 2 - 64;
            Player.y = Board.h - 128 - 128;
            Player.side = 0;
            Player.timer = 0;
            Player.isdead = false;
            MainPlatform.y = Board.h - 128;
            Score = 0;
            TimeMusic.timer = 0;
            TimeMusic.game.load();
            TimeMusic.menu.load();

            /* Animate up */
            if(Scene == 1) {
                UP.type = 1;
            }
            else if(NormalMode) {
                UP.type = 2;
            }
            else if(!NormalMode) {
                UP.type = 3;
            }
            
            window.animateaddons();

            if(UP.type == 0) {
                Transition.started = true;
            }
        }

        /* Start transition animation */
        if(Transition.started) {
            /* Move transition object */
            if(Transition.y < Board.h) {
                Transition.y += Transition.vx;
            }
            /* End animation */
            else if(Transition.y >= Board.h) {
                /* Start ingame hud animation */
                StatusTransparent.type = 1;
                window.animateingamehud();

                /* End ingame hud animation */
                if(StatusTransparent.type == 0) {

                    /* End scene start */
                    Transition.started = false;
                    Transition.type = 0;
                    SceneStart = true;
                }
            }
        }
    }

    /* Transition ingame last animation */
    if(Transition.type == 4) {
        /* Animate hud object */
        MenuTransparent.type = 16;
        window.animatehud();

        if(MenuTransparent.type == 0) {
            /* Move transition object */
            if(Transition.y > 0) {
                Transition.y -= Transition.vx;
            }
            /* End animation */
            else if(Transition.y <= 0) {
                /* End scene */
                SceneChange = false;
                SceneStart = false;
                Scene = 1;
                Transition.type = 0;
            }
        }
    }

    /* Transition ingame restart animation */
    if(Transition.type == 5) {
        /* Animate ingame hud */
        if(PauseTransition == 0) {
            StatusTransparent.type = 2;
            window.animateingamehud();
        }
        /* Hide menu hud */
        if(PauseTransition != 0) {
            MenuTransparent.type = 16;
            window.animatehud();
        }

        if(StatusTransparent.type == 0 && MenuTransparent.type == 0) {
            /* Move transition object */
            if(Transition.y > 0) {
                Transition.y -= Transition.vx;
            }
            /* End animation */
            else if(Transition.y <= 0) {
                /* End scene start */
                Transition.timer = 0;
                SceneRestart = false;
                SceneStart = false;
                Transition.type = 0;
            }
        }
    }
}

/* Window addons animating function */
window.animateaddons = function() {
    /* Menu transition animation */
    if(UP.type == 1) {
        /* Start timer */
        UP.timer += 1;

        UPText.value = "Main Menu";

        if(UP.timer >= 130) {
            /* Change loop value */
            UP.type = 0;
            UP.timer = 0;
        }
    }

    /* Normal mode transition animation */
    if(UP.type == 2) {
        /* Start timer */
        UP.timer += 1;

        UPText.value = "Normal Mode";

        if(UP.timer >= 130) {
            /* Change loop value */
            UP.type = 0;
            UP.timer = 0;
        }
    }

    /* Hard mode transition animation */
    if(UP.type == 3) {
        /* Start timer */
        UP.timer += 1;

        UPText.value = "Hard Mode";

        if(UP.timer >= 130) {
            /* Change loop value */
            UP.type = 0;
            UP.timer = 0;
        }
    }
}

/* Window ingame hud animating function */
window.animateingamehud = function() {
    /* Show statustransparent section */
    if(StatusTransparent.type == 1) {
        if(StatusTransparent.y < 0) {
            /* Move objects */
            StatusTransparent.y += StatusTransparent.vy;
            PauseText.y += PauseText.vy;
            ScoreText.y += ScoreText.vy;
            CoinsText.y += CoinsText.vy;
        }
        else if(StatusTransparent.y >= 0) {
            /* Change loop value */
            PauseTransition = 0;
            PauseText.used = false;
            StatusTransparent.type = 0;
        }
    }

    /* Hide statustransparent section */
    if(StatusTransparent.type == 2) {
        if(StatusTransparent.y > -96) {
            /* Make objects unusable */
            PauseText.used = true;

            /* Move objects */
            StatusTransparent.y -= StatusTransparent.vy;
            PauseText.y -= PauseText.vy;
            ScoreText.y -= ScoreText.vy;
            CoinsText.y -= CoinsText.vy;
        }
        else if(StatusTransparent.y <= -96) {
            /* Change loop value */
            StatusTransparent.type = 0;
        }
    }
}

/* Window hud animating function */
window.animatehud = function() {
    /* Menu start animation */
    if(MenuTransparent.type == 1) {
        if(MenuTransparent.x < 0) {
            /* Make objects unusable */
            VersionText.used = true;
            AuthorText.used = true;
            NormalModeText.used = true;
            HardModeText.used = true;
            KeybindsText.used = true;
            SettingsText.used = true;
            AboutText.used = true;

            /* Reset music */
            TimeMusic.timer = 0;
            TimeMusic.game.load();
            TimeMusic.menu.load();

            /* Move objects */
            MenuTransparent.x += MenuTransparent.vx;
            Title.x += Title.vx;
            VersionText.x += VersionText.vx;
            AuthorText.x += AuthorText.vx;
            NormalModeText.x += NormalModeText.vx;
            HardModeText.x += HardModeText.vx;
            KeybindsText.x += KeybindsText.vx;
            SettingsText.x += SettingsText.vx;
            AboutText.x += AboutText.vx;
        }
        else if(MenuTransparent.x >= 0) {
            /* Change loop value */
            MenuTransparent.type = 0;
            VersionText.used = false;
            AuthorText.used = false;
            NormalModeText.used = false;
            HardModeText.used = false;
            KeybindsText.used = false;
            SettingsText.used = false;
            AboutText.used = false;
        }
    }

    /* Menu end animation */
    if(MenuTransparent.type == 2) {
        if(MenuTransparent.x > -900) {
            /* Make objects unusable */
            VersionText.used = true;
            AuthorText.used = true;
            NormalModeText.used = true;
            HardModeText.used = true;
            KeybindsText.used = true;
            SettingsText.used = true;
            AboutText.used = true;

            /* Move objects */
            MenuTransparent.x -= MenuTransparent.vx;
            Title.x -= Title.vx;
            VersionText.x -= VersionText.vx;
            AuthorText.x -= AuthorText.vx;
            NormalModeText.x -= NormalModeText.vx;
            HardModeText.x -= HardModeText.vx;
            KeybindsText.x -= KeybindsText.vx;
            SettingsText.x -= SettingsText.vx;
            AboutText.x -= AboutText.vx;
        }
        else if(MenuTransparent.x <= -900) {
            /* Change loop value */
            MenuTransparent.type = 0;
            VersionText.used = false;
            AuthorText.used = false;
            NormalModeText.used = false;
            HardModeText.used = false;
            KeybindsText.used = false;
            SettingsText.used = false;
            AboutText.used = false;
        }
    }

    /* Hide main section */
    if(MenuTransparent.type == 3) {
        if(MenuTransparent.x > -900) {
            /* Make objects unusable */
            VersionText.used = true;
            AuthorText.used = true;
            NormalModeText.used = true;
            HardModeText.used = true;
            KeybindsText.used = true;
            SettingsText.used = true;
            AboutText.used = true;

            /* Move objects */
            MenuTransparent.x -= MenuTransparent.vx;
            Title.x -= Title.vx;
            VersionText.x -= VersionText.vx;
            AuthorText.x -= AuthorText.vx;
            NormalModeText.x -= NormalModeText.vx;
            HardModeText.x -= HardModeText.vx;
            KeybindsText.x -= KeybindsText.vx;
            SettingsText.x -= SettingsText.vx;
            AboutText.x -= AboutText.vx;
        }
        else if(MenuTransparent.x <= -900) {
            /* Change loop value */
            SettingsTransition = 2;
            VersionText.used = false;
            AuthorText.used = false;
            NormalModeText.used = false;
            HardModeText.used = false;
            KeybindsText.used = false;
            SettingsText.used = false;
            AboutText.used = false;
            MenuTransparent.type = 0;
        }
    }

    /* Show settings section */
    if(MenuTransparent.type == 4) {
        if(MenuTransparent.x < 0) {
            /* Make objects unusable */
            VersionText.used = true;
            AuthorText.used = true;
            SfxText.used = true;
            MusicText.used = true;
            ReturnText.used = true;

            /* Move objects */
            MenuTransparent.x += MenuTransparent.vx;
            Title.x += Title.vx;
            VersionText.x += VersionText.vx;
            AuthorText.x += AuthorText.vx;
            SfxText.x += SfxText.vx;
            MusicText.x += MusicText.vx;
            ReturnText.x += ReturnText.vx;
        }
        else if(MenuTransparent.x >= 0) {
            /* Change loop value */
            SettingsTransition = 3;
            VersionText.used = false;
            AuthorText.used = false;
            SfxText.used = false;
            MusicText.used = false;
            ReturnText.used = false;
            MenuTransparent.type = 0;
        }
    }

    /* Hide settings section */
    if(MenuTransparent.type == 5) {
        if(MenuTransparent.x > -900) {
            /* Make objects unusable */
            VersionText.used = true;
            AuthorText.used = true;
            SfxText.used = true;
            MusicText.used = true;
            ReturnText.used = true;

            /* Move objects */
            MenuTransparent.x -= MenuTransparent.vx;
            Title.x -= Title.vx;
            VersionText.x -= VersionText.vx;
            AuthorText.x -= AuthorText.vx;
            SfxText.x -= SfxText.vx;
            MusicText.x -= MusicText.vx;
            ReturnText.x -= ReturnText.vx;
        }
        else if(MenuTransparent.x <= -900) {
            /* Change loop value */
            SettingsTransition = 5;
            VersionText.used = false;
            AuthorText.used = false;
            SfxText.used = false;
            MusicText.used = false;
            ReturnText.used = false;
            MenuTransparent.type = 0;
        }
    }

    /* Show main section */
    if(MenuTransparent.type == 6) {
        if(MenuTransparent.x < 0) {
            /* Make objects unusable */
            VersionText.used = true;
            AuthorText.used = true;
            NormalModeText.used = true;
            HardModeText.used = true;
            KeybindsText.used = true;
            SettingsText.used = true;
            AboutText.used = true;

            /* Move objects */
            MenuTransparent.x += MenuTransparent.vx;
            Title.x += Title.vx;
            VersionText.x += VersionText.vx;
            AuthorText.x += AuthorText.vx;
            NormalModeText.x += NormalModeText.vx;
            HardModeText.x += HardModeText.vx;
            KeybindsText.x += KeybindsText.vx;
            SettingsText.x += SettingsText.vx;
            AboutText.x += AboutText.vx;
        }
        else if(MenuTransparent.x >= 0) {
            /* Change loop value */
            SettingsTransition = 0;
            VersionText.used = false;
            AuthorText.used = false;
            NormalModeText.used = false;
            HardModeText.used = false;
            KeybindsText.used = false;
            SettingsText.used = false;
            AboutText.used = false;
            MenuTransparent.type = 0;
        }
    }

    /* Hide main section */
    if(MenuTransparent.type == 7) {
        if(MenuTransparent.x > -900) {
            /* Make objects unusable */
            VersionText.used = true;
            AuthorText.used = true;
            NormalModeText.used = true;
            HardModeText.used = true;
            KeybindsText.used = true;
            SettingsText.used = true;
            AboutText.used = true;

            /* Move objects */
            MenuTransparent.x -= MenuTransparent.vx;
            Title.x -= Title.vx;
            VersionText.x -= VersionText.vx;
            AuthorText.x -= AuthorText.vx;
            NormalModeText.x -= NormalModeText.vx;
            HardModeText.x -= HardModeText.vx;
            KeybindsText.x -= KeybindsText.vx;
            SettingsText.x -= SettingsText.vx;
            AboutText.x -= AboutText.vx;
        }
        else if(MenuTransparent.x <= -900) {
            /* Change loop value */
            AboutTransition = 2;
            VersionText.used = false;
            AuthorText.used = false;
            NormalModeText.used = false;
            HardModeText.used = false;
            KeybindsText.used = false;
            SettingsText.used = false;
            AboutText.used = false;
            MenuTransparent.type = 0;
        }
    }

    /* Show about section */
    if(MenuTransparent.type == 8) {
        if(MenuTransparent.x < 0) {
            /* Make objects unusable */
            VersionText.used = true;
            AuthorText.used = true;
            ReturnText.used = true;

            /* Move objects */
            MenuTransparent.x += MenuTransparent.vx;
            Title.x += Title.vx;
            DescriptionText1.x += DescriptionText1.vx;
            DescriptionText2.x += DescriptionText2.vx;
            DescriptionText3.x += DescriptionText3.vx;
            DescriptionText4.x += DescriptionText4.vx;
            DescriptionText5.x += DescriptionText5.vx;
            DescriptionText6.x += DescriptionText6.vx;
            VersionText.x += VersionText.vx;
            AuthorText.x += AuthorText.vx;
            ReturnText.x += ReturnText.vx;
        }
        else if(MenuTransparent.x >= 0) {
            /* Change loop value */
            AboutTransition = 3;
            VersionText.used = false;
            AuthorText.used = false;
            ReturnText.used = false;
            MenuTransparent.type = 0;
        }
    }

    /* Hide about section */
    if(MenuTransparent.type == 9) {
        if(MenuTransparent.x > -900) {
            /* Make objects unusable */
            VersionText.used = true;
            AuthorText.used = true;
            ReturnText.used = true;

            /* Move objects */
            MenuTransparent.x -= MenuTransparent.vx;
            Title.x -= Title.vx;
            DescriptionText1.x -= DescriptionText1.vx;
            DescriptionText2.x -= DescriptionText2.vx;
            DescriptionText3.x -= DescriptionText3.vx;
            DescriptionText4.x -= DescriptionText4.vx;
            DescriptionText5.x -= DescriptionText5.vx;
            DescriptionText6.x -= DescriptionText6.vx;
            VersionText.x -= VersionText.vx;
            AuthorText.x -= AuthorText.vx;
            ReturnText.x -= ReturnText.vx;
        }
        else if(MenuTransparent.x <= -900) {
            /* Change loop value */
            AboutTransition = 5;
            VersionText.used = false;
            AuthorText.used = false;
            ReturnText.used = false;
            MenuTransparent.type = 0;
        }
    }

    /* Show main section */
    if(MenuTransparent.type == 10) {
        if(MenuTransparent.x < 0) {
            /* Make objects unusable */
            VersionText.used = true;
            AuthorText.used = true;
            NormalModeText.used = true;
            HardModeText.used = true;
            KeybindsText.used = true;
            SettingsText.used = true;
            AboutText.used = true;

            /* Move objects */
            MenuTransparent.x += MenuTransparent.vx;
            Title.x += Title.vx;
            VersionText.x += VersionText.vx;
            AuthorText.x += AuthorText.vx;
            NormalModeText.x += NormalModeText.vx;
            HardModeText.x += HardModeText.vx;
            KeybindsText.x += KeybindsText.vx;
            SettingsText.x += SettingsText.vx;
            AboutText.x += AboutText.vx;
        }
        else if(MenuTransparent.x >= 0) {
            /* Change loop value */
            AboutTransition = 0;
            VersionText.used = false;
            AuthorText.used = false;
            NormalModeText.used = false;
            HardModeText.used = false;
            KeybindsText.used = false;
            SettingsText.used = false;
            AboutText.used = false;
            MenuTransparent.type = 0;
        }
    }

    /* Hide main section */
    if(MenuTransparent.type == 11) {
        if(MenuTransparent.x > -900) {
            /* Make objects unusable */
            VersionText.used = true;
            AuthorText.used = true;
            NormalModeText.used = true;
            HardModeText.used = true;
            KeybindsText.used = true;
            SettingsText.used = true;
            AboutText.used = true;

            /* Move objects */
            MenuTransparent.x -= MenuTransparent.vx;
            Title.x -= Title.vx;
            VersionText.x -= VersionText.vx;
            AuthorText.x -= AuthorText.vx;
            NormalModeText.x -= NormalModeText.vx;
            HardModeText.x -= HardModeText.vx;
            KeybindsText.x -= KeybindsText.vx;
            SettingsText.x -= SettingsText.vx;
            AboutText.x -= AboutText.vx;
        }
        else if(MenuTransparent.x <= -900) {
            /* Change loop value */
            KeybindsTransition = 2;
            VersionText.used = false;
            AuthorText.used = false;
            NormalModeText.used = false;
            HardModeText.used = false;
            KeybindsText.used = false;
            SettingsText.used = false;
            AboutText.used = false;
            MenuTransparent.type = 0;
        }
    }

    /* Show keybinds section */
    if(MenuTransparent.type == 12) {
        if(MenuTransparent.x < 0) {
            /* Make objects unusable */
            VersionText.used = true;
            AuthorText.used = true;
            ReturnText.used = true;

            /* Move objects */
            MenuTransparent.x += MenuTransparent.vx;
            Title.x += Title.vx;
            VersionText.x += VersionText.vx;
            AuthorText.x += AuthorText.vx;
            ReturnText.x += ReturnText.vx;
        }
        else if(MenuTransparent.x >= 0) {
            /* Change loop value */
            KeybindsTransition = 3;
            VersionText.used = false;
            AuthorText.used = false;
            ReturnText.used = false;
            MenuTransparent.type = 0;
        }
    }

    /* Hide keybinds section */
    if(MenuTransparent.type == 13) {
        if(MenuTransparent.x > -900) {
            /* Make objects unusable */
            VersionText.used = true;
            AuthorText.used = true;
            ReturnText.used = true;

            /* Move objects */
            MenuTransparent.x -= MenuTransparent.vx;
            Title.x -= Title.vx;
            VersionText.x -= VersionText.vx;
            AuthorText.x -= AuthorText.vx;
            ReturnText.x -= ReturnText.vx;
        }
        else if(MenuTransparent.x <= -900) {
            /* Change loop value */
            KeybindsTransition = 5;
            VersionText.used = false;
            AuthorText.used = false;
            ReturnText.used = false;
            MenuTransparent.type = 0;
        }
    }

    /* Show main section */
    if(MenuTransparent.type == 14) {
        if(MenuTransparent.x < 0) {
            /* Make objects unusable */
            VersionText.used = true;
            AuthorText.used = true;
            NormalModeText.used = true;
            HardModeText.used = true;
            KeybindsText.used = true;
            SettingsText.used = true;
            AboutText.used = true;

            /* Move objects */
            MenuTransparent.x += MenuTransparent.vx;
            Title.x += Title.vx;
            VersionText.x += VersionText.vx;
            AuthorText.x += AuthorText.vx;
            NormalModeText.x += NormalModeText.vx;
            HardModeText.x += HardModeText.vx;
            KeybindsText.x += KeybindsText.vx;
            SettingsText.x += SettingsText.vx;
            AboutText.x += AboutText.vx;
        }
        else if(MenuTransparent.x >= 0) {
            /* Change loop value */
            KeybindsTransition = 0;
            VersionText.used = false;
            AuthorText.used = false;
            NormalModeText.used = false;
            HardModeText.used = false;
            KeybindsText.used = false;
            SettingsText.used = false;
            AboutText.used = false;
            MenuTransparent.type = 0;
        }
    }

    /* Menu ingame start animation */
    if(MenuTransparent.type == 15) {
        if(MenuTransparent.x < 0) {
            /* Make objects unusable */
            VersionText.used = true;
            AuthorText.used = true;
            ResumeText.used = true;
            RestartText.used = true;
            MainMenuText.used = true;
            SettingsText.used = true;
            AboutText.used = true;

            /* Move objects */
            MenuTransparent.x += MenuTransparent.vx;
            Title.x += Title.vx;
            VersionText.x += VersionText.vx;
            AuthorText.x += AuthorText.vx;
            ResumeText.x += ResumeText.vx;
            RestartText.x += RestartText.vx;
            MainMenuText.x += MainMenuText.vx;
            SettingsText.x += SettingsText.vx;
            AboutText.x += AboutText.vx;
        }
        else if(MenuTransparent.x >= 0) {
            /* Change loop value */
            PauseTransition = 2;
            VersionText.used = false;
            AuthorText.used = false;
            ResumeText.used = false;
            RestartText.used = false;
            MainMenuText.used = false;
            SettingsText.used = false;
            AboutText.used = false;
            MenuTransparent.type = 0;
        }
    }

    /* Menu ingame end animation */
    if(MenuTransparent.type == 16) {
        if(MenuTransparent.x > -900) {
            /* Make objects unusable */
            VersionText.used = true;
            AuthorText.used = true;
            ResumeText.used = true;
            RestartText.used = true;
            MainMenuText.used = true;
            SettingsText.used = true;
            AboutText.used = true;

            /* Move objects */
            MenuTransparent.x -= MenuTransparent.vx;
            Title.x -= Title.vx;
            VersionText.x -= VersionText.vx;
            AuthorText.x -= AuthorText.vx;
            ResumeText.x -= ResumeText.vx;
            RestartText.x -= RestartText.vx;
            MainMenuText.x -= MainMenuText.vx;
            SettingsText.x -= SettingsText.vx;
            AboutText.x -= AboutText.vx;
        }
        else if(MenuTransparent.x <= -900) {
            /* Change loop value */
            MenuTransparent.type = 0;
            VersionText.used = false;
            AuthorText.used = false;
            ResumeText.used = false;
            RestartText.used = false;
            MainMenuText.used = false;
            SettingsText.used = false;
            AboutText.used = false;
        }
    }

    /* Hide ingame main section */
    if(MenuTransparent.type == 17) {
        if(MenuTransparent.x > -900) {
            /* Make objects unusable */
            VersionText.used = true;
            AuthorText.used = true;
            ResumeText.used = true;
            RestartText.used = true;
            MainMenuText.used = true;
            SettingsText.used = true;
            AboutText.used = true;

            /* Move objects */
            MenuTransparent.x -= MenuTransparent.vx;
            Title.x -= Title.vx;
            VersionText.x -= VersionText.vx;
            AuthorText.x -= AuthorText.vx;
            ResumeText.x -= ResumeText.vx;
            RestartText.x -= RestartText.vx;
            MainMenuText.x -= MainMenuText.vx;
            SettingsText.x -= SettingsText.vx;
            AboutText.x -= AboutText.vx;
        }
        else if(MenuTransparent.x <= -900) {
            /* Change loop value */
            SettingsTransition = 2;
            VersionText.used = false;
            AuthorText.used = false;
            ResumeText.used = false;
            RestartText.used = false;
            MainMenuText.used = false;
            SettingsText.used = false;
            AboutText.used = false;
            MenuTransparent.type = 0;
        }
    }

    /* Show ingame settings section */
    if(MenuTransparent.type == 18) {
        if(MenuTransparent.x < 0) {
            /* Make objects unusable */
            VersionText.used = true;
            AuthorText.used = true;
            SfxText.used = true;
            MusicText.used = true;
            ReturnText.used = true;

            /* Move objects */
            MenuTransparent.x += MenuTransparent.vx;
            Title.x += Title.vx;
            VersionText.x += VersionText.vx;
            AuthorText.x += AuthorText.vx;
            SfxText.x += SfxText.vx;
            MusicText.x += MusicText.vx;
            ReturnText.x += ReturnText.vx;
        }
        else if(MenuTransparent.x >= 0) {
            /* Change loop value */
            SettingsTransition = 3;
            VersionText.used = false;
            AuthorText.used = false;
            SfxText.used = false;
            MusicText.used = false;
            ReturnText.used = false;
            MenuTransparent.type = 0;
        }
    }

    /* Hide ingame settings section */
    if(MenuTransparent.type == 19) {
        if(MenuTransparent.x > -900) {
            /* Make objects unusable */
            VersionText.used = true;
            AuthorText.used = true;
            SfxText.used = true;
            MusicText.used = true;
            ReturnText.used = true;

            /* Move objects */
            MenuTransparent.x -= MenuTransparent.vx;
            Title.x -= Title.vx;
            VersionText.x -= VersionText.vx;
            AuthorText.x -= AuthorText.vx;
            SfxText.x -= SfxText.vx;
            MusicText.x -= MusicText.vx;
            ReturnText.x -= ReturnText.vx;
        }
        else if(MenuTransparent.x <= -900) {
            /* Change loop value */
            SettingsTransition = 5;
            VersionText.used = false;
            AuthorText.used = false;
            SfxText.used = false;
            MusicText.used = false;
            ReturnText.used = false;
            MenuTransparent.type = 0;
        }
    }

    /* Show ingame main section */
    if(MenuTransparent.type == 20) {
        if(MenuTransparent.x < 0) {
            /* Make objects unusable */
            VersionText.used = true;
            AuthorText.used = true;
            ResumeText.used = true;
            RestartText.used = true;
            MainMenuText.used = true;
            SettingsText.used = true;
            AboutText.used = true;

            /* Move objects */
            MenuTransparent.x += MenuTransparent.vx;
            Title.x += Title.vx;
            VersionText.x += VersionText.vx;
            AuthorText.x += AuthorText.vx;
            ResumeText.x += ResumeText.vx;
            RestartText.x += RestartText.vx;
            MainMenuText.x += MainMenuText.vx;
            SettingsText.x += SettingsText.vx;
            AboutText.x += AboutText.vx;
        }
        else if(MenuTransparent.x >= 0) {
            /* Change loop value */
            SettingsTransition = 0;
            VersionText.used = false;
            AuthorText.used = false;
            ResumeText.used = false;
            RestartText.used = false;
            MainMenuText.used = false;
            SettingsText.used = false;
            AboutText.used = false;
            MenuTransparent.type = 0;
        }
    }

    /* Hide ingame main section */
    if(MenuTransparent.type == 21) {
        if(MenuTransparent.x > -900) {
            /* Make objects unusable */
            VersionText.used = true;
            AuthorText.used = true;
            ResumeText.used = true;
            RestartText.used = true;
            MainMenuText.used = true;
            SettingsText.used = true;
            AboutText.used = true;

            /* Move objects */
            MenuTransparent.x -= MenuTransparent.vx;
            Title.x -= Title.vx;
            VersionText.x -= VersionText.vx;
            AuthorText.x -= AuthorText.vx;
            ResumeText.x -= ResumeText.vx;
            RestartText.x -= RestartText.vx;
            MainMenuText.x -= MainMenuText.vx;
            SettingsText.x -= SettingsText.vx;
            AboutText.x -= AboutText.vx;
        }
        else if(MenuTransparent.x <= -900) {
            /* Change loop value */
            AboutTransition = 2;
            VersionText.used = false;
            AuthorText.used = false;
            ResumeText.used = false;
            RestartText.used = false;
            MainMenuText.used = false;
            SettingsText.used = false;
            AboutText.used = false;
            MenuTransparent.type = 0;
        }
    }

    /* Show ingame about section */
    if(MenuTransparent.type == 22) {
        if(MenuTransparent.x < 0) {
            /* Make objects unusable */
            VersionText.used = true;
            AuthorText.used = true;
            ReturnText.used = true;

            /* Move objects */
            MenuTransparent.x += MenuTransparent.vx;
            Title.x += Title.vx;
            DescriptionText1.x += DescriptionText1.vx;
            DescriptionText2.x += DescriptionText2.vx;
            DescriptionText3.x += DescriptionText3.vx;
            DescriptionText4.x += DescriptionText4.vx;
            DescriptionText5.x += DescriptionText5.vx;
            DescriptionText6.x += DescriptionText6.vx;
            VersionText.x += VersionText.vx;
            AuthorText.x += AuthorText.vx;
            ReturnText.x += ReturnText.vx;
        }
        else if(MenuTransparent.x >= 0) {
            /* Change loop value */
            AboutTransition = 3;
            VersionText.used = false;
            AuthorText.used = false;
            ReturnText.used = false;
            MenuTransparent.type = 0;
        }
    }

    /* Hide ingame about section */
    if(MenuTransparent.type == 23) {
        if(MenuTransparent.x > -900) {
            /* Make objects unusable */
            VersionText.used = true;
            AuthorText.used = true;
            ReturnText.used = true;

            /* Move objects */
            MenuTransparent.x -= MenuTransparent.vx;
            Title.x -= Title.vx;
            DescriptionText1.x -= DescriptionText1.vx;
            DescriptionText2.x -= DescriptionText2.vx;
            DescriptionText3.x -= DescriptionText3.vx;
            DescriptionText4.x -= DescriptionText4.vx;
            DescriptionText5.x -= DescriptionText5.vx;
            DescriptionText6.x -= DescriptionText6.vx;
            VersionText.x -= VersionText.vx;
            AuthorText.x -= AuthorText.vx;
            ReturnText.x -= ReturnText.vx;
        }
        else if(MenuTransparent.x <= -900) {
            /* Change loop value */
            AboutTransition = 5;
            VersionText.used = false;
            AuthorText.used = false;
            ReturnText.used = false;
            MenuTransparent.type = 0;
        }
    }

    /* Show ingame main section */
    if(MenuTransparent.type == 24) {
        if(MenuTransparent.x < 0) {
            /* Make objects unusable */
            VersionText.used = true;
            AuthorText.used = true;
            ResumeText.used = true;
            RestartText.used = true;
            MainMenuText.used = true;
            SettingsText.used = true;
            AboutText.used = true;

            /* Move objects */
            MenuTransparent.x += MenuTransparent.vx;
            Title.x += Title.vx;
            VersionText.x += VersionText.vx;
            AuthorText.x += AuthorText.vx;
            ResumeText.x += ResumeText.vx;
            RestartText.x += RestartText.vx;
            MainMenuText.x += MainMenuText.vx;
            SettingsText.x += SettingsText.vx;
            AboutText.x += AboutText.vx;
        }
        else if(MenuTransparent.x >= 0) {
            /* Change loop value */
            AboutTransition = 0;
            VersionText.used = false;
            AuthorText.used = false;
            ResumeText.used = false;
            RestartText.used = false;
            MainMenuText.used = false;
            SettingsText.used = false;
            AboutText.used = false;
            MenuTransparent.type = 0;
        }
    }

    /* Show ingame settings section when paused */
    if(MenuTransparent.type == 25) {
        if(MenuTransparent.x > -900) {
            /* Make objects unusable */
            VersionText.used = true;
            AuthorText.used = true;
            SfxText.used = true;
            MusicText.used = true;
            ReturnText.used = true;

            /* Move objects */
            MenuTransparent.x -= MenuTransparent.vx;
            Title.x -= Title.vx;
            VersionText.x -= VersionText.vx;
            AuthorText.x -= AuthorText.vx;
            SfxText.x -= SfxText.vx;
            MusicText.x -= MusicText.vx;
            ReturnText.x -= ReturnText.vx;
        }
        else if(MenuTransparent.x <= -900) {
            /* Change loop value */
            SettingsTransition = 0;
            VersionText.used = false;
            AuthorText.used = false;
            SfxText.used = false;
            MusicText.used = false;
            ReturnText.used = false;
            MenuTransparent.type = 0;
        }
    }

    /* Show ingame about section when paused */
    if(MenuTransparent.type == 26) {
        if(MenuTransparent.x > -900) {
            /* Make objects unusable */
            VersionText.used = true;
            AuthorText.used = true;
            ReturnText.used = true;

            /* Move objects */
            MenuTransparent.x -= MenuTransparent.vx;
            Title.x -= Title.vx;
            DescriptionText1.x -= DescriptionText1.vx;
            DescriptionText2.x -= DescriptionText2.vx;
            DescriptionText3.x -= DescriptionText3.vx;
            DescriptionText4.x -= DescriptionText4.vx;
            DescriptionText5.x -= DescriptionText5.vx;
            DescriptionText6.x -= DescriptionText6.vx;
            VersionText.x -= VersionText.vx;
            AuthorText.x -= AuthorText.vx;
            ReturnText.x -= ReturnText.vx;
        }
        else if(MenuTransparent.x <= -900) {
            /* Change loop value */
            AboutTransition = 0;
            VersionText.used = false;
            AuthorText.used = false;
            ReturnText.used = false;
            MenuTransparent.type = 0;
        }
    }
}

/* Window player animating function */
window.animateplayer = function() {
    /* Animate player */
    if(!Player.isdead && PauseTransition == 0) {
        /* Afk player object animation */
        if(Player.side == 0 && Player.isgrounded) {
            if(Player.timer < 180) {
                /* Draw player object */
                Context.drawImage(Player.imgafk1, Player.x, Player.y, Player.w, Player.h);
            }
            if(Player.timer >= 180 && Player.timer < 195) {
                /* Draw player object */
                Context.drawImage(Player.imgafk2, Player.x, Player.y, Player.w, Player.h);
            }
            if(Player.timer >= 195 && Player.timer < 210) {
                /* Draw player object */
                Context.drawImage(Player.imgafk3, Player.x, Player.y, Player.w, Player.h);
            }
            if(Player.timer >= 210 && Player.timer < 240) {
                /* Draw player object */
                Context.drawImage(Player.imgafk4, Player.x, Player.y, Player.w, Player.h);
            }
            if(Player.timer >= 240 && Player.timer < 255) {
                /* Draw player object */
                Context.drawImage(Player.imgafk3, Player.x, Player.y, Player.w, Player.h);
            }
            if(Player.timer >= 255 && Player.timer < 270) {
                /* Draw player object */
                Context.drawImage(Player.imgafk2, Player.x, Player.y, Player.w, Player.h);
            }
            if(Player.timer >= 270) {
                /* Draw player object */
                Context.drawImage(Player.imgafk1, Player.x, Player.y, Player.w, Player.h);

                /* Change loop value */
                Player.timer = 0;
            }
        }

        /* Right player object animation */
        if(Player.side == 1 && Player.isgrounded) {
            if(Player.timer < 180) {
                /* Draw player object */
                Context.drawImage(Player.imgright1, Player.x, Player.y, Player.w, Player.h);
            }
            if(Player.timer >= 180 && Player.timer < 195) {
                /* Draw player object */
                Context.drawImage(Player.imgright2, Player.x, Player.y, Player.w, Player.h);
            }
            if(Player.timer >= 195 && Player.timer < 210) {
                /* Draw player object */
                Context.drawImage(Player.imgright3, Player.x, Player.y, Player.w, Player.h);
            }
            if(Player.timer >= 210 && Player.timer < 240) {
                /* Draw player object */
                Context.drawImage(Player.imgright4, Player.x, Player.y, Player.w, Player.h);
            }
            if(Player.timer >= 240 && Player.timer < 255) {
                /* Draw player object */
                Context.drawImage(Player.imgright3, Player.x, Player.y, Player.w, Player.h);
            }
            if(Player.timer >= 255 && Player.timer < 270) {
                /* Draw player object */
                Context.drawImage(Player.imgright2, Player.x, Player.y, Player.w, Player.h);
            }
            if(Player.timer >= 270) {
                /* Draw player object */
                Context.drawImage(Player.imgright1, Player.x, Player.y, Player.w, Player.h);

                /* Change loop value */
                Player.timer = 0;
            }
        }

        /* Left player object animation */
        if(Player.side == 2 && Player.isgrounded) {
            if(Player.timer < 180) {
                /* Draw player object */
                Context.drawImage(Player.imgleft1, Player.x, Player.y, Player.w, Player.h);
            }
            if(Player.timer >= 180 && Player.timer < 195) {
                /* Draw player object */
                Context.drawImage(Player.imgleft2, Player.x, Player.y, Player.w, Player.h);
            }
            if(Player.timer >= 195 && Player.timer < 210) {
                /* Draw player object */
                Context.drawImage(Player.imgleft3, Player.x, Player.y, Player.w, Player.h);
            }
            if(Player.timer >= 210 && Player.timer < 240) {
                /* Draw player object */
                Context.drawImage(Player.imgleft4, Player.x, Player.y, Player.w, Player.h);
            }
            if(Player.timer >= 240 && Player.timer < 255) {
                /* Draw player object */
                Context.drawImage(Player.imgleft3, Player.x, Player.y, Player.w, Player.h);
            }
            if(Player.timer >= 255 && Player.timer < 270) {
                /* Draw player object */
                Context.drawImage(Player.imgleft2, Player.x, Player.y, Player.w, Player.h);
            }
            if(Player.timer >= 270) {
                /* Draw player object */
                Context.drawImage(Player.imgleft1, Player.x, Player.y, Player.w, Player.h);

                /* Change loop value */
                Player.timer = 0;
            }
        }

        /* In air player object animation */
        if(!Player.isgrounded) {
            /* Jump player object animation */
            if(Player.jumped && Player.side == 0) {
                if(Player.timer < 180) {
                    /* Draw player object */
                    Context.drawImage(Player.imgjump1, Player.x, Player.y, Player.w, Player.h);
                }
                if(Player.timer >= 180 && Player.timer < 195) {
                    /* Draw player object */
                    Context.drawImage(Player.imgjump2, Player.x, Player.y, Player.w, Player.h);
                }
                if(Player.timer >= 195 && Player.timer < 210) {
                    /* Draw player object */
                    Context.drawImage(Player.imgjump3, Player.x, Player.y, Player.w, Player.h);
                }
                if(Player.timer >= 210 && Player.timer < 240) {
                    /* Draw player object */
                    Context.drawImage(Player.imgjump4, Player.x, Player.y, Player.w, Player.h);
                }
                if(Player.timer >= 240 && Player.timer < 255) {
                    /* Draw player object */
                    Context.drawImage(Player.imgjump3, Player.x, Player.y, Player.w, Player.h);
                }
                if(Player.timer >= 255 && Player.timer < 270) {
                    /* Draw player object */
                    Context.drawImage(Player.imgjump2, Player.x, Player.y, Player.w, Player.h);
                }
                if(Player.timer >= 270) {
                    /* Draw player object */
                    Context.drawImage(Player.imgjump1, Player.x, Player.y, Player.w, Player.h);

                    /* Change loop value */
                    Player.timer = 0;
                }
            }

            /* Jump right player object animation */
            if(Player.jumped && Player.side == 1) {
                if(Player.timer < 180) {
                    /* Draw player object */
                    Context.drawImage(Player.imgjumpright1, Player.x, Player.y, Player.w, Player.h);
                }
                if(Player.timer >= 180 && Player.timer < 195) {
                    /* Draw player object */
                    Context.drawImage(Player.imgjumpright2, Player.x, Player.y, Player.w, Player.h);
                }
                if(Player.timer >= 195 && Player.timer < 210) {
                    /* Draw player object */
                    Context.drawImage(Player.imgjumpright3, Player.x, Player.y, Player.w, Player.h);
                }
                if(Player.timer >= 210 && Player.timer < 240) {
                    /* Draw player object */
                    Context.drawImage(Player.imgjumpright4, Player.x, Player.y, Player.w, Player.h);
                }
                if(Player.timer >= 240 && Player.timer < 255) {
                    /* Draw player object */
                    Context.drawImage(Player.imgjumpright3, Player.x, Player.y, Player.w, Player.h);
                }
                if(Player.timer >= 255 && Player.timer < 270) {
                    /* Draw player object */
                    Context.drawImage(Player.imgjumpright2, Player.x, Player.y, Player.w, Player.h);
                }
                if(Player.timer >= 270) {
                    /* Draw player object */
                    Context.drawImage(Player.imgjumpright1, Player.x, Player.y, Player.w, Player.h);
                }
            }

            /* Jump left player object animation */
            if(Player.jumped && Player.side == 2) {
                if(Player.timer < 180) {
                    /* Draw player object */
                    Context.drawImage(Player.imgjumpleft1, Player.x, Player.y, Player.w, Player.h);
                }
                if(Player.timer >= 180 && Player.timer < 195) {
                    /* Draw player object */
                    Context.drawImage(Player.imgjumpleft2, Player.x, Player.y, Player.w, Player.h);
                }
                if(Player.timer >= 195 && Player.timer < 210) {
                    /* Draw player object */

                    Context.drawImage(Player.imgjumpleft3, Player.x, Player.y, Player.w, Player.h);
                }
                if(Player.timer >= 210 && Player.timer < 240) {
                    /* Draw player object */
                    Context.drawImage(Player.imgjumpleft4, Player.x, Player.y, Player.w, Player.h);
                }
                if(Player.timer >= 240 && Player.timer < 255) {
                    /* Draw player object */
                    Context.drawImage(Player.imgjumpleft3, Player.x, Player.y, Player.w, Player.h);
                }
                if(Player.timer >= 255 && Player.timer < 270) {
                    /* Draw player object */
                    Context.drawImage(Player.imgjumpleft2, Player.x, Player.y, Player.w, Player.h);
                }
                if(Player.timer >= 270) {
                    /* Draw player object */
                    Context.drawImage(Player.imgjumpleft1, Player.x, Player.y, Player.w, Player.h);

                    /* Change loop value */
                    Player.timer = 0;
                }
            }

            /* Fall player object animation */
            if(!Player.jumped && Player.side == 0) {
                if(Player.timer < 180) {
                    /* Draw player object */
                    Context.drawImage(Player.imgfall1, Player.x, Player.y, Player.w, Player.h);
                }
                if(Player.timer >= 180 && Player.timer < 195) {
                    /* Draw player object */
                    Context.drawImage(Player.imgfall2, Player.x, Player.y, Player.w, Player.h);
                }
                if(Player.timer >= 195 && Player.timer < 210) {
                    /* Draw player object */
                    Context.drawImage(Player.imgfall3, Player.x, Player.y, Player.w, Player.h);
                }
                if(Player.timer >= 210 && Player.timer < 240) {
                    /* Draw player object */
                    Context.drawImage(Player.imgfall4, Player.x, Player.y, Player.w, Player.h);
                }
                if(Player.timer >= 240 && Player.timer < 255) {
                    /* Draw player object */
                    Context.drawImage(Player.imgfall3, Player.x, Player.y, Player.w, Player.h);
                }
                if(Player.timer >= 255 && Player.timer < 270) {
                    /* Draw player object */
                    Context.drawImage(Player.imgfall2, Player.x, Player.y, Player.w, Player.h);
                }
                if(Player.timer >= 270) {
                    /* Draw player object */
                    Context.drawImage(Player.imgfall1, Player.x, Player.y, Player.w, Player.h);

                    /* Change loop value */
                    Player.timer = 0;
                }
            }

            /* Fall right player object animation */
            if(!Player.jumped && Player.side == 1) {
                if(Player.timer < 180) {
                    /* Draw player object */
                    Context.drawImage(Player.imgfallright1, Player.x, Player.y, Player.w, Player.h);
                }
                if(Player.timer >= 180 && Player.timer < 195) {
                    /* Draw player object */
                    Context.drawImage(Player.imgfallright2, Player.x, Player.y, Player.w, Player.h);
                }
                if(Player.timer >= 195 && Player.timer < 210) {
                    /* Draw player object */
                    Context.drawImage(Player.imgfallright3, Player.x, Player.y, Player.w, Player.h);
                }
                if(Player.timer >= 210 && Player.timer < 240) {
                    /* Draw player object */
                    Context.drawImage(Player.imgfallright4, Player.x, Player.y, Player.w, Player.h);
                }
                if(Player.timer >= 240 && Player.timer < 255) {
                    /* Draw player object */
                    Context.drawImage(Player.imgfallright3, Player.x, Player.y, Player.w, Player.h);
                }
                if(Player.timer >= 255 && Player.timer < 270) {
                    /* Draw player object */
                    Context.drawImage(Player.imgfallright2, Player.x, Player.y, Player.w, Player.h);
                }
                if(Player.timer >= 270) {
                    /* Draw player object */
                    Context.drawImage(Player.imgfallright1, Player.x, Player.y, Player.w, Player.h);

                    /* Change loop value */
                    Player.timer = 0;
                }
            }

            /* Fall left player object animation */
            if(!Player.jumped && Player.side == 2) {
                if(Player.timer < 180) {
                    /* Draw player object */
                    Context.drawImage(Player.imgfallleft1, Player.x, Player.y, Player.w, Player.h);
                }
                if(Player.timer >= 180 && Player.timer < 195) {
                    /* Draw player object */
                    Context.drawImage(Player.imgfallleft2, Player.x, Player.y, Player.w, Player.h);
                }
                if(Player.timer >= 195 && Player.timer < 210) {
                    /* Draw player object */
                    Context.drawImage(Player.imgfallleft3, Player.x, Player.y, Player.w, Player.h);
                }
                if(Player.timer >= 210 && Player.timer < 240) {
                    /* Draw player object */
                    Context.drawImage(Player.imgfallleft4, Player.x, Player.y, Player.w, Player.h);
                }
                if(Player.timer >= 240 && Player.timer < 255) {
                    /* Draw player object */
                    Context.drawImage(Player.imgfallleft3, Player.x, Player.y, Player.w, Player.h);
                }
                if(Player.timer >= 255 && Player.timer < 270) {
                    /* Draw player object */

                    Context.drawImage(Player.imgfallleft2, Player.x, Player.y, Player.w, Player.h);
                }
                if(Player.timer >= 270) {
                    /* Draw player object */
                    Context.drawImage(Player.imgfallleft1, Player.x, Player.y, Player.w, Player.h);

                    /* Change loop value */
                    Player.timer = 0;
                }
            }
        }
    }
    /* Animate dead player */
    else if(Player.isdead) {
        if(Player.timer < 180) {
            /* Draw player object */
            Context.drawImage(Player.imgdead1, Player.x, Player.y, Player.w, Player.h);
        }
        if(Player.timer >= 180 && Player.timer < 195) {
            /* Draw player object */
            Context.drawImage(Player.imgdead2, Player.x, Player.y, Player.w, Player.h);
        }
        if(Player.timer >= 195 && Player.timer < 210) {
            /* Draw player object */
            Context.drawImage(Player.imgdead3, Player.x, Player.y, Player.w, Player.h);
        }
        if(Player.timer >= 210 && Player.timer < 240) {
            /* Draw player object */
            Context.drawImage(Player.imgdead4, Player.x, Player.y, Player.w, Player.h);
        }
        if(Player.timer >= 240 && Player.timer < 255) {
            /* Draw player object */
            Context.drawImage(Player.imgdead3, Player.x, Player.y, Player.w, Player.h);
        }
        if(Player.timer >= 255 && Player.timer < 270) {
            /* Draw player object */
            Context.drawImage(Player.imgdead2, Player.x, Player.y, Player.w, Player.h);
        }
        if(Player.timer >= 270) {
            /* Draw player object */
            Context.drawImage(Player.imgdead1, Player.x, Player.y, Player.w, Player.h);

            /* Change loop value */
            Player.timer = 0;
        }
    }
    /* Animate paused player */
    else if(PauseTransition != 0) {
        if(Player.timer < 180) {
            /* Draw player object */
            Context.drawImage(Player.imgpause1, Player.x, Player.y, Player.w, Player.h);
        }
        if(Player.timer >= 180 && Player.timer < 195) {
            /* Draw player object */
            Context.drawImage(Player.imgpause2, Player.x, Player.y, Player.w, Player.h);
        }
        if(Player.timer >= 195 && Player.timer < 210) {
            /* Draw player object */
            Context.drawImage(Player.imgpause3, Player.x, Player.y, Player.w, Player.h);
        }
        if(Player.timer >= 210 && Player.timer < 240) {
            /* Draw player object */
            Context.drawImage(Player.imgpause4, Player.x, Player.y, Player.w, Player.h);
        }
        if(Player.timer >= 240 && Player.timer < 255) {
            /* Draw player object */
            Context.drawImage(Player.imgpause3, Player.x, Player.y, Player.w, Player.h);
        }
        if(Player.timer >= 255 && Player.timer < 270) {
            /* Draw player object */
            Context.drawImage(Player.imgpause2, Player.x, Player.y, Player.w, Player.h);
        }
        if(Player.timer >= 270) {
            /* Draw player object */
            Context.drawImage(Player.imgpause1, Player.x, Player.y, Player.w, Player.h);

            /* Change loop value */
            Player.timer = 0;
        }
    }
}

/* Window up animating function */
window.animateup = function() {
    /* Animate up object */
    if(UP.timer < 5) {
        /* Draw object */
        Context.drawImage(UP.img10, UP.x, UP.y, UP.w, UP.h);
        UPText.color = "rgba(255, 255, 255, 0)";
        Context.fillStyle = UPText.color;
        Context.font = UPText.font;
        Context.fillText(UPText.value, UPText.x, UPText.y);
    }
    if(UP.timer >= 5 && UP.timer < 10) {
        /* Draw object */
        Context.drawImage(UP.img9, UP.x, UP.y, UP.w, UP.h);
        UPText.color = "rgba(255, 255, 255, 0.1)";
        Context.fillStyle = UPText.color;
        Context.font = UPText.font;
        Context.fillText(UPText.value, UPText.x, UPText.y);
    }
    if(UP.timer >= 10 && UP.timer < 15) {
        /* Draw object */
        Context.drawImage(UP.img8, UP.x, UP.y, UP.w, UP.h);
        UPText.color = "rgba(255, 255, 255, 0.2)";
        Context.fillStyle = UPText.color;
        Context.font = UPText.font;
        Context.fillText(UPText.value, UPText.x, UPText.y);
    }
    if(UP.timer >= 15 && UP.timer < 20) {
        /* Draw object */
        Context.drawImage(UP.img7, UP.x, UP.y, UP.w, UP.h);
        UPText.color = "rgba(255, 255, 255, 0.3)";
        Context.fillStyle = UPText.color;
        Context.font = UPText.font;
        Context.fillText(UPText.value, UPText.x, UPText.y);
    }
    if(UP.timer >= 20 && UP.timer < 25) {
        /* Draw object */
        Context.drawImage(UP.img6, UP.x, UP.y, UP.w, UP.h);
        UPText.color = "rgba(255, 255, 255, 0.4)";
        Context.fillStyle = UPText.color;
        Context.font = UPText.font;
        Context.fillText(UPText.value, UPText.x, UPText.y);
    }
    if(UP.timer >= 25 && UP.timer < 30) {
        /* Draw object */
        Context.drawImage(UP.img5, UP.x, UP.y, UP.w, UP.h);
        UPText.color = "rgba(255, 255, 255, 0.5)";
        Context.fillStyle = UPText.color;
        Context.font = UPText.font;
        Context.fillText(UPText.value, UPText.x, UPText.y);
    }
    if(UP.timer >= 30 && UP.timer < 35) {
        /* Draw object */
        Context.drawImage(UP.img4, UP.x, UP.y, UP.w, UP.h);
        UPText.color = "rgba(255, 255, 255, 0.6)";
        Context.fillStyle = UPText.color;
        Context.font = UPText.font;
        Context.fillText(UPText.value, UPText.x, UPText.y);
    }
    if(UP.timer >= 35 && UP.timer < 40) {
        /* Draw object */
        Context.drawImage(UP.img3, UP.x, UP.y, UP.w, UP.h);
        UPText.color = "rgba(255, 255, 255, 0.7)";
        Context.fillStyle = UPText.color;
        Context.font = UPText.font;
        Context.fillText(UPText.value, UPText.x, UPText.y);
    }
    if(UP.timer >= 40 && UP.timer < 45) {
        /* Draw object */
        Context.drawImage(UP.img2, UP.x, UP.y, UP.w, UP.h);
        UPText.color = "rgba(255, 255, 255, 0.8)";
        Context.fillStyle = UPText.color;
        Context.font = UPText.font;
        Context.fillText(UPText.value, UPText.x, UPText.y);
    }
    if(UP.timer >= 45 && UP.timer < 50) {
        /* Draw object */
        Context.drawImage(UP.img1, UP.x, UP.y, UP.w, UP.h);
        UPText.color = "rgba(255, 255, 255, 0.9)";
        Context.fillStyle = UPText.color;
        Context.font = UPText.font;
        Context.fillText(UPText.value, UPText.x, UPText.y);
    }
    if(UP.timer >= 50 && UP.timer < 80) {
        /* Draw object */
        Context.drawImage(UP.img0, UP.x, UP.y, UP.w, UP.h);
        UPText.color = "rgba(255, 255, 255, 1)";
        Context.fillStyle = UPText.color;
        Context.font = UPText.font;
        Context.fillText(UPText.value, UPText.x, UPText.y);
    }
    if(UP.timer >= 80 && UP.timer < 85) {
        /* Draw object */
        Context.drawImage(UP.img1, UP.x, UP.y, UP.w, UP.h);
        UPText.color = "rgba(255, 255, 255, 0.9)";
        Context.fillStyle = UPText.color;
        Context.font = UPText.font;
        Context.fillText(UPText.value, UPText.x, UPText.y);
    }
    if(UP.timer >= 85 && UP.timer < 90) {
        /* Draw object */
        Context.drawImage(UP.img2, UP.x, UP.y, UP.w, UP.h);
        UPText.color = "rgba(255, 255, 255, 0.8)";
        Context.fillStyle = UPText.color;
        Context.font = UPText.font;
        Context.fillText(UPText.value, UPText.x, UPText.y);
    }
    if(UP.timer >= 90 && UP.timer < 95) {
        /* Draw object */
        Context.drawImage(UP.img3, UP.x, UP.y, UP.w, UP.h);
        UPText.color = "rgba(255, 255, 255, 0.7)";
        Context.fillStyle = UPText.color;
        Context.font = UPText.font;
        Context.fillText(UPText.value, UPText.x, UPText.y);
    }
    if(UP.timer >= 95 && UP.timer < 100) {
        /* Draw object */
        Context.drawImage(UP.img4, UP.x, UP.y, UP.w, UP.h);
        UPText.color = "rgba(255, 255, 255, 0.6)";
        Context.fillStyle = UPText.color;
        Context.font = UPText.font;
        Context.fillText(UPText.value, UPText.x, UPText.y);
    }
    if(UP.timer >= 100 && UP.timer < 105) {
        /* Draw object */
        Context.drawImage(UP.img5, UP.x, UP.y, UP.w, UP.h);
        UPText.color = "rgba(255, 255, 255, 0.5)";
        Context.fillStyle = UPText.color;
        Context.font = UPText.font;
        Context.fillText(UPText.value, UPText.x, UPText.y);
    }
    if(UP.timer >= 105 && UP.timer < 110) {
        /* Draw object */
        Context.drawImage(UP.img6, UP.x, UP.y, UP.w, UP.h);
        UPText.color = "rgba(255, 255, 255, 0.4)";
        Context.fillStyle = UPText.color;
        Context.font = UPText.font;
        Context.fillText(UPText.value, UPText.x, UPText.y);
    }
    if(UP.timer >= 110 && UP.timer < 115) {
        /* Draw object */
        Context.drawImage(UP.img7, UP.x, UP.y, UP.w, UP.h);
        UPText.color = "rgba(255, 255, 255, 0.3)";
        Context.fillStyle = UPText.color;
        Context.font = UPText.font;
        Context.fillText(UPText.value, UPText.x, UPText.y);
    }
    if(UP.timer >= 115 && UP.timer < 120) {
        /* Draw object */
        Context.drawImage(UP.img8, UP.x, UP.y, UP.w, UP.h);
        UPText.color = "rgba(255, 255, 255, 0.2)";
        Context.fillStyle = UPText.color;
        Context.font = UPText.font;
        Context.fillText(UPText.value, UPText.x, UPText.y);
    }
    if(UP.timer >= 120 && UP.timer < 125) {
        /* Draw object */
        Context.drawImage(UP.img9, UP.x, UP.y, UP.w, UP.h);
        UPText.color = "rgba(255, 255, 255, 0.1)";
        Context.fillStyle = UPText.color;
        Context.font = UPText.font;
        Context.fillText(UPText.value, UPText.x, UPText.y);
    }
}

