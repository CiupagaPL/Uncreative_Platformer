/* Uncreative Platformer made by CiupagaPL
 * GPL 3.0 (C) 2024 CiupagaPL */

/* Key input handler */
document.addEventListener("keyup", function(Event) {
    /* Menu scene keys */
    if(Scene == 1) {
        switch(Event.key) {
            /* Default */
            default:
                break;
        }
    }

    /* Game scene keys */
    if(Scene == 2) {
        switch(Event.key) {
            /* Pause game */
            case "Escape":
                if(Pause == 0 && MenuTransparent.type == 0 && SceneStart && !Player.isdead) {
                    Pause = 1;
                }
            /* Unpause game */
            case "Escape":
                if(Pause == 2 && MenuTransparent.type == 0 && SceneStart && !Player.isdead) {
                    Pause = 3;
                }

                break;

            /* Make player object jump */
            case " ":
                if(Player.isgrounded && !Player.isdead && Pause == 0 && SceneStart) {
                    /* Change value and jump */
                    Player.vy = Player.initvy;
                }

                break;

            /* Stop player object */
            case "s":
                /* Change side to none */
                if(Player.isgrounded && !Player.isdead && Pause == 0 && SceneStart) {
                    Player.side = 0;
                }

                break;

            /* Move player object left-right */
            case "d":
                /* Change side to right */
                if(Player.isgrounded && !Player.isdead && Pause == 0 && SceneStart) {
                    Player.side = 1;
                }

                break;
            case "a":
                /* Change side to left */
                if(Player.isgrounded && !Player.isdead && Pause == 0 && SceneStart) {
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
    Mouse.x = Event.clientX;
    Mouse.y = Event.clientY;

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

    /* Check collision between cursor and tutorialtext object */
    if(window.detectcollision(TutorialText, Mouse)) {
        /* Change object color */
        TutorialText.color = "blue";
    }
    else if(!window.detectcollision(TutorialText, Mouse)) {
        /* Change object color */
        TutorialText.color = "white";
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

    /* Check collision between cursor and returntext object */
    if(window.detectcollision(ReturnText, Mouse)) {
        /* Change object color */
        ReturnText.color = "yellow";
    }
    else if(!window.detectcollision(ReturnText, Mouse)) {
        /* Change object color */
        ReturnText.color = "white";
    }
});

/* Mouse input handler */
window.addEventListener("click", function(Event) {
    /* Normalmodetext object function */
    if(window.detectcollision(NormalModeText, Mouse) && SceneStart) {
        /* Set mode and change scene */
        Mode = 1;
        SceneChange = true;
    }

    /* Hardmodetext object function */
    if(window.detectcollision(HardModeText, Mouse) && SceneStart) {
        /* Set mode and change scene */
        Mode = 2;
        SceneChange = true;
    }

    /* Tutorialtext object function */
    if(window.detectcollision(TutorialText, Mouse) && SceneStart) {
        /* Set mode and change scene */
        Mode = 0;
        SceneChange = true;
    }

    /* Settingstext object function */
    if(window.detectcollision(SettingsText, Mouse) && SceneStart) {
        /* Turn on settings section */
        SettingsTransition = 1;
    }

    /* Abouttext object function */
    if(window.detectcollision(AboutText, Mouse) && SceneStart) {
        /* Turn on about section */
        AboutTransition = 1;
    }

    /* Sfxtext object function */
    if(window.detectcollision(SfxText, Mouse) && SceneStart) {
        /* Change value of boolen and sfxtext */
        if(Sfx) {
            Sfx = false;
            SfxText.value = "Sfx: Off";
        }
        else if(!Sfx) {
            Sfx = true;
            SfxText.value = "Sfx: On";
        }
    }

    /* Musictext object function */
    if(window.detectcollision(MusicText, Mouse) && SceneStart) {
        /* Change value of boolen and musictext */
        if(Music) {
            Music = false;
            MusicText.value = "Music: Off";
        }
        else if(!Music) {
            Music = true;
            MusicText.value = "Music: On";
        }
    }

    /* Resumetext object function */
    if(window.detectcollision(ResumeText, Mouse) && SceneStart) {
        /* Unpause game */
        Pause = 3;
    }

    /* Restarttext object function */
    if(window.detectcollision(RestartText, Mouse) && SceneStart) {
        /* Restart game */
        SceneRestart = true;
    }

    /* Mainmenutext object function */
    if(window.detectcollision(MainMenuText, Mouse) && SceneStart) {
        /* Start scenechange */
        SceneChange = true;
    }

    /* Returntext object function */
    if(window.detectcollision(ReturnText, Mouse) && SceneStart) {
        /* Turn off about and settings section */
        if(SettingsTransition == 3) {
            SettingsTransition = 4;
        }
        else if(AboutTransition == 3) {
            AboutTransition = 4;
        }
    }
});

