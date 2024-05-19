/* Uncreative Platformer made by CiupagaPL
 * GPL 3.0 (C) 2024 CiupagaPL */

/* Document key input handler */
document.addEventListener("keyup", function(Event) {
    /* Menu scene keys */
    if(Scene == 1) {
        switch(Event.key) {
            /* Hide sections */
            case "Escape":
                /* Turn off about, settings, keybinds and statistics section */
                if(SettingsTransition == 3) {
                    /* Change loop value */
                    SettingsTransition = 4;

                    /* Play select sfx */
                    if(Sfx) {
                        TimeSfx.select.load();
                        TimeSfx.select.play();
                    }
                }
                if(AboutTransition == 3) {
                    /* Change loop value */
                    AboutTransition = 4;

                    /* Play select sfx */
                    if(Sfx) {
                        TimeSfx.select.load();
                        TimeSfx.select.play();
                    }
                }
                if(KeybindsTransition == 3) {
                    /* Change loop value */
                    KeybindsTransition = 4;

                    /* Play select sfx */
                    if(Sfx) {
                        TimeSfx.select.load();
                        TimeSfx.select.play();
                    }
                }
                if(StatisticsTransition == 3) {
                    /* Change loop value */
                    StatisticsTransition = 4;

                    /* Play select sfx */
                    if(Sfx) {
                        timeSfx.select.load();
                        TimeSfx.select.play();
                    }
                }

            /* Default */
            default:
                break;
        }
    }

    /* Game scene keys */
    if(Scene == 2) {
        switch(Event.key) {
            /* Pause and unpause game */
            case "Escape":
                if(Instruction) {
                    /* Disable instruction */
                    Instruction = false;

                    /* Play select sfx */
                    if(Sfx) {
                        TimeSfx.select.load();
                        TimeSfx.select.play();
                    }
                }
                if(PauseTransition == 0 && MenuTransparent.type == 0 && SceneStart && !Player.dead) {
                    PauseTransition = 1;

                    /* Play select sfx */
                    if(Sfx) {
                        TimeSfx.select.load();
                        TimeSfx.select.play();
                    }
                }
                if(PauseTransition == 2 && MenuTransparent.type == 0 && SceneStart && !Player.dead) {
                    PauseTransition = 3;

                    /* Play select sfx */
                    if(Sfx) {
                        TimeSfx.select.load();
                        TimeSfx.select.play();
                    }
                }

                break;

            /* Rotate player object */
            case " ":
                if(Player.grounded && !Player.dead && PauseTransition == 0 && SceneStart) {
                    /* Rotate player */
                    if(!Player.rotated) {
                        Player.rotated = true;
                        Player.fallen = false;
                    }
                    else if(Player.rotated) {
                        Player.rotated = false;
                        Player.fallen = false;
                    }

                    /* Play rotating sound */
                    if(Sfx) {
                        TimeSfx.rotate.load();
                        TimeSfx.rotate.play();
                    }
                }

                break;

            /* Rotate player object and stop it from moving */
            case "w":
                if(Player.grounded && !Player.dead && PauseTransition == 0 && SceneStart) {
                    /* Rotate player */
                    if(!Player.rotated) {
                        Player.rotated = true;
                        Player.fallen = false;

                        /* Play rotating sound */
                        if(Sfx) {
                            TimeSfx.rotate.load();
                            TimeSfx.rotate.play();
                        }
                    }
                    else if(Player.rotated) {
                        Player.side = 0;
                    }
                }

                break;
            case "ArrowUp":
                if(Player.grounded && !Player.dead && PauseTransition == 0 && SceneStart) {
                    /* Rotate player */
                    if(!Player.rotated) {
                        Player.rotated = true;
                        Player.fallen = false;

                        /* Play rotating sound */
                        if(Sfx) {
                            TimeSfx.rotate.load();
                            TimeSfx.rotate.play();
                        }
                    }
                    else if(Player.rotated) {
                        Player.side = 0;
                    }
                }

                break;
            case "s":
                if(Player.grounded && !Player.dead && PauseTransition == 0 && SceneStart) {
                    /* Rotate player */
                    if(Player.rotated) {
                        Player.rotated = false;
                        Player.fallen = false;

                        /* Play rotating sound */
                        if(Sfx) {
                            TimeSfx.rotate.load();
                            TimeSfx.rotate.play();
                        }
                    }
                    else if(!Player.rotated) {
                        Player.side = 0;
                    }
                }

                break;
            case "ArrowDown":
                if(Player.grounded && !Player.dead && PauseTransition == 0 && SceneStart) {
                    /* Rotate player */
                    if(Player.rotated) {
                        Player.rotated = false;
                        Player.fallen = false;
                    }
                    else if(!Player.rotated) {
                        Player.side = 0;
                    }

                    /* Play rotating sound */
                    if(Sfx) {
                        TimeSfx.rotate.load();
                        TimeSfx.rotate.play();
                    }
                }

                break;

            /* Move player object left-right */
            case "d":
                /* Change side to right */
                if(Player.grounded && !Player.dead && PauseTransition == 0 && SceneStart && Player.fallen) {
                    Player.side = 1;
                }

                break;
            case "a":
                /* Change side to left */
                if(Player.grounded && !Player.dead && PauseTransition == 0 && SceneStart && Player.fallen) {
                    Player.side = 2;
                }

                break;
            case "ArrowRight":
                /* Change side to right */
                if(Player.grounded && !Player.dead && PauseTransition == 0 && SceneStart && Player.fallen) {
                    Player.side = 1;
                }

                break;
            case "ArrowLeft":
                /* Change side to left */
                if(Player.grounded && !Player.dead && PauseTransition == 0 && SceneStart && Player.fallen) {
                    Player.side = 2;
                }

                break;

            /* Default */
            default:
                break;
        }
    }
});

/* Mouse position updater */
window.addEventListener("mousemove", function(Event) {
    /* Set proper value */
    Mouse.x = Event.clientX;
    Mouse.y = Event.clientY;

    /* Check collision between cursor and versiontext object */
    if(window.detectcollision(VersionText, Mouse)) {
        /* Change object color */
        VersionText.color = "blue";
    }
    else if(!window.detectcollision(VersionText, Mouse)) {
        /* Change object color */
        VersionText.color = "white";
    }

    /* Check collision between cursor and authortext object */
    if(window.detectcollision(AuthorText, Mouse)) {
        /* Change object color */
        AuthorText.color = "yellow";
    }
    else if(!window.detectcollision(AuthorText, Mouse)) {
        /* Change object color */
        AuthorText.color = "white";
    }

    /* Check collision between cursor and normalmodetext object */
    if(window.detectcollision(NormalModeText, Mouse)) {
        /* Change object color */
        NormalModeText.color = "blue";
    }
    else if(!window.detectcollision(NormalModeText, Mouse)) {
        /* Change object color */
        NormalModeText.color = "white";
    }

    /* Check collision between cursor and hardmodetext object */
    if(window.detectcollision(HardModeText, Mouse)) {
        /* Change object color */
        HardModeText.color = "blue";
    }
    else if(!window.detectcollision(HardModeText, Mouse)) {
        /* Change object color */
        HardModeText.color = "white";
    }

    /* Check collision between cursor and keybindstext object */
    if(window.detectcollision(KeybindsText, Mouse)) {
        /* Change object color */
        KeybindsText.color = "yellow";
    }
    else if(!window.detectcollision(KeybindsText, Mouse)) {
        /* Change object color */
        KeybindsText.color = "white";
    }

    /* Check collision between cursor and settingstext object */
    if(window.detectcollision(SettingsText, Mouse)) {
        /* Change object color */
        SettingsText.color = "yellow";
    }
    else if(!window.detectcollision(SettingsText, Mouse)) {
        /* Change object color */
        SettingsText.color = "white";
    }

    /* Check collision between cursor and abouttext object */
    if(window.detectcollision(AboutText, Mouse)) {
        /* Change object color */
        AboutText.color = "yellow";
    }
    else if(!window.detectcollision(AboutText, Mouse)) {
        /* Change object color */
        AboutText.color = "white";
    }

    /* Check collision between cursor and sfxtext object */
    if(window.detectcollision(SfxText, Mouse)) {
        /* Change object color */
        SfxText.color = "blue";
    }
    else if(!window.detectcollision(SfxText, Mouse)) {
        /* Change object color */
        SfxText.color = "white";
    }

    /* Check collision between cursor and musictext object */
    if(window.detectcollision(MusicText, Mouse)) {
        /* Change object color */
        MusicText.color = "blue";
    }
    else if(!window.detectcollision(MusicText, Mouse)) {
        /* Change object color */
        MusicText.color = "white";
    }

    /* Check collision between cursor and resumetext object */
    if(window.detectcollision(ResumeText, Mouse)) {
        /* Change object color */
        ResumeText.color = "blue";
    }
    else if(!window.detectcollision(ResumeText, Mouse)) {
        /* Change object color */
        ResumeText.color = "white";
    }

    /* Check collision between cursor and restarttext object */
    if(window.detectcollision(RestartText, Mouse)) {
        /* Change object color */
        RestartText.color = "blue";
    }
    else if(!window.detectcollision(RestartText, Mouse)) {
        /* Change object color */
        RestartText.color = "white";
    }

    /* Check collision between cursor and mainmenutext object */
    if(window.detectcollision(MainMenuText, Mouse)) {
        /* Change object color */
        MainMenuText.color = "blue";
    }
    else if(!window.detectcollision(MainMenuText, Mouse)) {
        /* Change object color */
        MainMenuText.color = "white";
    }

    /* Check collision between cursor and statisticstext object */
    if(window.detectcollision(StatisticsText, Mouse)) {
        StatisticsText.color = "yellow";
    }
    else if(!window.detectcollision(StatisticsText, Mouse)) {
        StatisticsText.color = "white";
    }

    /* Check collision between cursor and universaltext object */
    if(window.detectcollision(UniversalText, Mouse)) {
        /* Change object color */
        UniversalText.color = "blue";
    }
    else if(!window.detectcollision(UniversalText, Mouse)) {
        /* Change object color */
        UniversalText.color = "white";
    }

    /* Check collision between cursor and returntext object */
    if(window.detectcollision(ReturnText, Mouse)) {
        /* Change object color */
        ReturnText.color = "yellow";
    }
    else if(!window.detectcollision(ReturnText, Mouse)) {
        /* Change object color */
        ReturnText.color = "white";
    }

    /* Check collision between cursor and pausetext object */
    if(window.detectcollision(PauseText, Mouse)) {
        /* Change object color */
        PauseText.color = "blue";
    }
    else if(!window.detectcollision(PauseText, Mouse)) {
        /* Change object color */
        PauseText.color = "white";
    }
});

/* Mouse input handler */
window.addEventListener("click", function(Event) {
    /* Versiontext object function */
    if(window.detectcollision(VersionText, Mouse) && !VersionText.used) {
        /* Turn on 3-rd party website */
        window.open("https://github.com/CiupagaPL/Uncreative_Platformer", "_blank");

        /* Play select sfx */
        if(Sfx) {
            TimeSfx.select.load();
            TimeSfx.select.play();
        }
    }

    /* Authortext object function */
    if(window.detectcollision(AuthorText, Mouse) && !AuthorText.used) {
        /* Turn on 3-rd party website */
        window.open("https://github.com/CiupagaPL", "_blank");

        /* Play select sfx */
        if(Sfx) {
            TimeSfx.select.load();
            TimeSfx.select.play();
        }
    }

    /* Normalmodetext object function */
    if(window.detectcollision(NormalModeText, Mouse) && !NormalModeText.used) {
        /* Set mode and change scene */
        NormalMode = true;
        SceneChange = true;

        /* Play select sfx */
        if(Sfx) {
            TimeSfx.select.load();
            TimeSfx.select.play();
        }
    }

    /* Hardmodetext object function */
    if(window.detectcollision(HardModeText, Mouse) && !HardModeText.used) {
        /* Set mode and change scene */
        NormalMode = false;
        SceneChange = true;

        /* Play select sfx */
        if(Sfx) {
            TimeSfx.select.load();
            TimeSfx.select.play();
        }
    }

    /* Keybindstext object function */
    if(window.detectcollision(KeybindsText, Mouse) && !KeybindsText.used) {
        /* Turn on keybinds section */
        KeybindsTransition = 1;

        /* Play select sfx */
        if(Sfx) {
            TimeSfx.select.load();
            TimeSfx.select.play();
        }
    }

    /* Settingstext object function */
    if(window.detectcollision(SettingsText, Mouse) && !SettingsText.used) {
        /* Turn on settings section */
        SettingsTransition = 1;

        /* Play select sfx */
        if(Sfx) {
            TimeSfx.select.load();
            TimeSfx.select.play();
        }
    }

    /* Abouttext object function */
    if(window.detectcollision(AboutText, Mouse) && !AboutText.used) {
        /* Turn on about section */
        AboutTransition = 1;

        /* Play select sfx */
        if(Sfx) {
            TimeSfx.select.load();
            TimeSfx.select.play();
        }
    }

    /* Sfxtext object function */
    if(window.detectcollision(SfxText, Mouse) && !SfxText.used) {
        /* Change value of boolen and sfxtext */
        if(Sfx) {
            Sfx = false;
            SfxText.value = "Sfx: Off";
        }
        else if(!Sfx) {
            Sfx = true;
            SfxText.value = "Sfx: On";
        }

        /* Play select sfx */
        if(Sfx) {
            TimeSfx.select.load();
            TimeSfx.select.play();
        }
    }

    /* Musictext object function */
    if(window.detectcollision(MusicText, Mouse) && !MusicText.used) {
        /* Change value of boolen and musictext */
        if(Music) {
            Music = false;
            MusicText.value = "Music: Off";
        }
        else if(!Music) {
            Music = true;
            MusicText.value = "Music: On";
        }

        /* Play select sfx */
        if(Sfx) {
            TimeSfx.select.load();
            TimeSfx.select.play();
        }
    }    /* Statisticstext object function */
    if(window.detectcollision(StatisticsText, Mouse) && !StatisticsText.used) {
        /* Turn on statistics section */
        StatisticsTransition = 1;

        /* Play select sfx */
        if(Sfx) {
            TimeSfx.select.load();
            TimeSfx.select.play();
        }
    }

    /* Resumetext object function */
    if(window.detectcollision(ResumeText, Mouse) && !ResumeText.used) {
        /* Unpause game */
        PauseTransition = 3;

        /* Play select sfx */
        if(Sfx) {
            TimeSfx.select.load();
            TimeSfx.select.play();
        }
    }

    /* Restarttext object function */
    if(window.detectcollision(RestartText, Mouse) && !RestartText.used) {
        /* Restart game */
        SceneRestart = true;

        /* Play select sfx */
        if(Sfx) {
            TimeSfx.select.load();
            TimeSfx.select.play();
        }
    }

    /* Mainmenutext object function */
    if(window.detectcollision(MainMenuText, Mouse) && !MainMenuText.used) {
        /* Start scenechange */
        SceneChange = true;

        /* Play select sfx */
        if(Sfx) {
            TimeSfx.select.load();
            TimeSfx.select.play();
        }
    }

    /* Statisticstext object function */
    if(window.detectcollision(StatisticsText, Mouse) && !StatisticsText.used) {
        /* Turn on statistics section */
        StatisticsTransition = 1;

        /* Play select sfx */
        if(Sfx) {
            TimeSfx.select.load();
            TimeSfx.select.play();
        }
    }

    /* Universaltext object function */
    if(window.detectcollision(UniversalText, Mouse)) {
        /* Turn off instruction */
        Instruction = false;

        /* Play select sfx */
        if(Sfx) {
            TimeSfx.select.load();
            TimeSfx.select.play();
        }
    }

    /* Returntext object function */
    if(window.detectcollision(ReturnText, Mouse) && !ReturnText.used) {
        /* Turn off about, settings, keybinds and statistics section */
        if(SettingsTransition == 3) {
            /* Change loop value */
            SettingsTransition = 4;
        }
        if(AboutTransition == 3) {
            /* Change loop value */
            AboutTransition = 4;
        }
        if(KeybindsTransition == 3) {
            /* Change loop value */
            KeybindsTransition = 4;
        }
        if(StatisticsTransition == 3) {
            /* Change loop value */
            StatisticsTransition = 4;
        }

        /* Play select sfx */
        if(Sfx) {
            TimeSfx.select.load();
            TimeSfx.select.play();
        }
    }

    /* Pausetext object function */
    if(window.detectcollision(PauseText, Mouse) && !PauseText.used) {
        /* Pause game */
        PauseTransition = 1;

        /* Play select sfx */
        if(Sfx) {
            TimeSfx.select.load();
            TimeSfx.select.play();
        }
    }
});

/* Document focus checker */
document.addEventListener("visibilitychange", function(Event) {
    if(document.hidden && Scene == 2) {
        /* Pause game */
        PauseTransition = 1;
    }
})

