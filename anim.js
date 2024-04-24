/* Window transition animating function */
window.animatetransition = function() {
    /* Transition menu first animation */
    if(Transition.type == 1) {
        /* Set default position of transition object */
        if(Transition.timer == 0) {
            Transition.y = 0;
        }

        /* Things todo on scene start */
        Transition.timer += 1;

        /* Start transition object animation */
        if(Transition.timer >= 30) {
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
                    Transition.timer = 0;
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
        /* Gravity and physics generally */
        Player.x = Board.w / 2 - 64;
        Player.y = Board.h - 128 - 128;
        Player.vy = 0;
        Player.vx = 0;

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
                /* Start ingame hud animation */
                StatusTransparent.type = 1;
                window.animateingamehud();

                /* End ingame hud animation */
                if(StatusTransparent.type == 0) {
                    /* End scene start */
                    Transition.timer = 0;
                    Transition.type = 0;
                    SceneStart = true;
                }
            }
        }
    }

    /* Transition ingame last animation */
    if(Transition.type == 4) {
        /* Move transition object */
        if(Transition.y > 0) {
            Transition.y -= Transition.vx;
        }
        /* End animation */
        else if(Transition.y <= 0) {
            /* Hide menu hud */
            MenuTransparent.type = 12;
            window.animatehud();

            /* Start transition animation */
            if(MenuTransparent.type == 0) {
                /* End scene */
                Transition.timer = 0;
                SceneChange = false;
                SceneStart = false;
                Scene = 1;
                Transition.type = 0;
            }
        }
    }

    /* Transition ingame restart animation */
    if(Transition.type == 5) {
        /* Move transition object */
        if(Transition.y > 0) {
            Transition.y -= Transition.vx;
        }
        /* End animation */
        else if(Transition.y <= 0) {
            /* Hide menu hud */
            MenuTransparent.type = 12;
            window.animatehud();

            /* Start transition animation */
            if(MenuTransparent.type == 0) {
                /* End scene start */
                Transition.timer = 0;
                SceneRestart = false;
                SceneStart = false;
                Transition.type = 0;
            }
        }
    }
}

/* Window ingame hud animating function */
window.animateingamehud = function() {
    /* Show statustransparent section */
    if(StatusTransparent.type == 1) {
        if(StatusTransparent.y > 0) {
            /* Move objects */
            StatusTransparent.y += StatusTransparent.vy;
        }
        else if(StatusTransparent.y <= 0) {
            /* Change loop value */
            StatusTransparent.type = 0;
        }
    }

    /* Hide statustransparent section */
    if(StatusTransparent.type == 2) {
        if(StatusTransparent.y < 0) {
            /* Move objects */
            StatusTransparent.y -= StatusTransparent.vy;
        }
        else if(StatusTransparent.y >= 0) {
            /* Change loop value */
            StatusTransparen.type = 0;
        }
    }
}

/* Window hud animating function */
window.animatehud = function() {
    /* Menu start animation */
    if(MenuTransparent.type == 1) {
        if(MenuTransparent.x < 0) {
            /* Move objects */
            MenuTransparent.x += MenuTransparent.vx;
            Title.x += Title.vx;
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
            Title.x -= Title.vx;
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
            Title.x -= Title.vx;
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
            Title.x += Title.vx;
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
            Title.x -= Title.vx;
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
            Title.x += Title.vx;
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
            Title.x -= Title.vx;
            VersionText.x -= VersionText.vx;
            NormalModeText.x -= NormalModeText.vx;
            HardModeText.x -= HardModeText.vx;
            TutorialText.x -= TutorialText.vx;
            SettingsText.x -= SettingsText.vx;
            AboutText.x -= AboutText.vx;
        }
        else if(MenuTransparent.x <= -900) {
            /* Change loop value */
            AboutTransition = 2;
            MenuTransparent.type = 0;
        }
    }

    /* Show about section */
    if(MenuTransparent.type == 8) {
        if(MenuTransparent.x < 0) {
            /* Move objects */
            MenuTransparent.x += MenuTransparent.vx;
            Title.x += Title.vx;
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
            Title.x -= Title.vx;
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
            Title.x += Title.vx;
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
         /* Show statustransparent section */
    if(StatusTransparent.type == 1) {
        if(StatusTransparent.y > 0) {
            /* Move objects */
            StatusTransparent.y += StatusTransparent.vy;
        }
        else if(StatusTransparent <= 0) {
            /* Change loop value */
            StatusTransparent = 0;
        }
    }

    /* Hide statustransparent section */
    if(StatusTransparent.type == 2) {
        if(StatusTransparent.y < 0) {
            /* Move objects */
            StatusTransparent.y -= StatusTransparent.vy;
        }
        else if(StatusTransparent >= 0) {
            /* Change loop value */
            StatusTransparent = 0;
        }
    }       MenuTransparent.type = 0;
        }
    }

    //ta
    /* Menu ingame start animation */
    if(MenuTransparent.type == 11) {
        if(MenuTransparent.x < 0) {
            /* Move objects */
            MenuTransparent.x += MenuTransparent.vx;
            Title.x += Title.vx;
            VersionText.x += VersionText.vx;
            ResumeText.x += ResumeText.vx;
            RestartText.x += RestartText.vx;
            MainMenuText.x += MainMenuText.vx;
            SettingsText.x += SettingsText.vx;
            AboutText.x += AboutText.vx;
        }
        else if(MenuTransparent.x >= 0) {
            /* Change loop value */
            Pause = 2;
            MenuTransparent.type = 0;
        }
    }

    /* Menu ingame end animation */
    if(MenuTransparent.type == 12) {
        if(MenuTransparent.x > -900) {
            /* Move objects */
            MenuTransparent.x -= MenuTransparent.vx;
            Title.x -= Title.vx;
            VersionText.x -= VersionText.vx;
            ResumeText.x -= ResumeText.vx;
            RestartText.x -= RestartText.vx;
            MainMenuText.x -= MainMenuText.vx;
            SettingsText.x -= SettingsText.vx;
            AboutText.x -= AboutText.vx;
        }
        else if(MenuTransparent.x <= -900) {
            /* Change loop value */
            Pause = 0;
            MenuTransparent.type = 0;
        }
    }

    /* Hide ingame main section */
    if(MenuTransparent.type == 13) {
        if(MenuTransparent.x > -900) {
            /* Move objects */
            MenuTransparent.x -= MenuTransparent.vx;
            Title.x -= Title.vx;
            VersionText.x -= VersionText.vx;
            ResumeText.x -= ResumeText.vx;
            RestartText.x -= RestartText.vx;
            MainMenuText.x -= MainMenuText.vx;
            SettingsText.x -= SettingsText.vx;
            AboutText.x -= AboutText.vx;
        }
        else if(MenuTransparent.x <= -900) {
            /* Change loop value */
            SettingsTransition = 2;
            MenuTransparent.type = 0;
        }
    }

    /* Show ingame settings section */
    if(MenuTransparent.type == 14) {
        if(MenuTransparent.x < 0) {
            /* Move objects */
            MenuTransparent.x += MenuTransparent.vx;
            Title.x += Title.vx;
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

    /* Hide ingame settings section */
    if(MenuTransparent.type == 15) {
        if(MenuTransparent.x > -900) {
            /* Move objects */
            MenuTransparent.x -= MenuTransparent.vx;
            Title.x -= Title.vx;
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

    /* Show ingame main section */
    if(MenuTransparent.type == 16) {
        if(MenuTransparent.x < 0) {
            /* Move objects */
            MenuTransparent.x += MenuTransparent.vx;
            Title.x += Title.vx;
            VersionText.x += VersionText.vx;
            ResumeText.x += ResumeText.vx;
            RestartText.x -= RestartText.vx;
            MainMenuText.x += MainMenuText.vx;
            SettingsText.x += SettingsText.vx;
            AboutText.x += AboutText.vx;
        }
        else if(MenuTransparent.x >= 0) {
            /* Change loop value */
            SettingsTransition = 0;
            MenuTransparent.type = 0;
        }
    }

    /* Hide ingame main section */
    if(MenuTransparent.type == 17) {
        if(MenuTransparent.x > -900) {
            /* Move objects */
            MenuTransparent.x -= MenuTransparent.vx;
            Title.x -= Title.vx;
            VersionText.x -= VersionText.vx;
            ResumeText.x -= ResumeText.vx;
            RestartText.x -= RestartText.vx;
            MainMenuText.x -= MainMenuText.vx;
            SettingsText.x -= SettingsText.vx;
            AboutText.x -= AboutText.vx;
        }
        else if(MenuTransparent.x <= -900) {
            /* Change loop value */
            AboutTransition = 2;
            MenuTransparent.type = 0;
        }
    }

    /* Show ingame about section */
    if(MenuTransparent.type == 18) {
        if(MenuTransparent.x < 0) {
            /* Move objects */
            MenuTransparent.x += MenuTransparent.vx;
            Title.x += Title.vx;
            VersionText.x += VersionText.vx;
            ReturnText.x += ReturnText.vx;
        }
        else if(MenuTransparent.x >= 0) {
            /* Change loop value */
            AboutTransition = 3;
            MenuTransparent.type = 0;
        }
    }

    /* Hide ingame about section */
    if(MenuTransparent.type == 19) {
        if(MenuTransparent.x > -900) {
            /* Move objects */
            MenuTransparent.x -= MenuTransparent.vx;
            Title.x -= Title.vx;
            VersionText.x -= VersionText.vx;
            ReturnText.x -= ReturnText.vx;
        }
        else if(MenuTransparent.x <= -900) {
            /* Change loop value */
            AboutTransition = 5;
            MenuTransparent.type = 0;
        }
    }

    /* Show ingame main section */
    if(MenuTransparent.type == 20) {
        if(MenuTransparent.x < 0) {
            /* Move objects */
            MenuTransparent.x += MenuTransparent.vx;
            Title.x += Title.vx;
            VersionText.x += VersionText.vx;
            ResumeText.x += ResumeText.vx;
            RestartText.x += RestartText.vx;
            MainMenuText.x += MainMenuText.vx;
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

