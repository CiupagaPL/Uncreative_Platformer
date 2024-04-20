/* Uncreative Platformer made by CiupagaPL; Simple platformer made in JS.
 * GPL 3.0 (C) 2024 CiupagaPL */

/* Key input handler */
document.addEventListener("keyup", function(Event) {
    /* Menu scene keys */
    if(Scene == 1) {
        switch(Event.key) {
            /* Quit from foreground */
            case "q":
                if(SceneStart != 0) {
                    About = 0;
                    Settings = 0;
                }

            /* Default */
            default:
                break;
        }
    }

    /* Test scene keys */
    if(Scene == 2) {
        switch(Event.key) {
            /* Pause game */
            case "Escape":
                Pause = 1;
                break;

            /* Quit from foreground */
            case "q":
                if(SceneStart != 0) {
                    Pause = 0;
                }

                break;

            /* Make player object jump */
            case " ":
                /* Count player jumps */
                switch(Player.jump) {
                    case 0:
                        /* Change value */
                        if(!Pause == 1) {
                            Player.vy = Player.initvy;
                            Player.jump = 1;
                        }

                        break;

                    /* Default */
                    default:
                        break;
                }

                break;

            /* Stop player object */
            case "s":
                /* Change side to none */
                if(!Pause == 1 && Player.jump == 0) {
                    Player.side = 0;
                }

                break;
            /* Move player object left-right */
            case "d":
                /* Change side to right */
                if(!Pause == 1 && Player.jump == 0) {
                    Player.side = 1;
                }

                break;
            case "a":
                /* Change side to left */
                if(!Pause == 1 && Player.jump == 0) {
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

    /* Check collision between cursor and scaletext object */
    if(window.detectcollision(ScaleText, Mouse)) {
        /* Change object color */
        ScaleText.color = "blue";
    }
    else if(!window.detectcollision(ScaleText, Mouse)) {
        /* Change object color */
        ScaleText.color = "white";
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
    if(window.detectcollision(NormalModeText, Mouse)) {
        /* Set mode and change scene */
        if(SceneStart != 0) {
            Mode = 1;
            SceneChange = 1;
        }
    }

    /* Hardmodetext object function */
    if(window.detectcollision(HardModeText, Mouse)) {
        /* Set mode and change scene */
        if(SceneStart != 0) {
            Mode = 2;
            SceneChange = 1;
        }
    }

    /* Tutorialtext object function */
    if(window.detectcollision(TutorialText, Mouse)) {
        /* Set mode and change scene */
        if(SceneStart != 0) {
            Mode = 0;
            SceneChange = 1;
        }
    }

    /* Settingstext object function */
    if(window.detectcollision(SettingsText, Mouse)) {
        /* Turn on settings section */
        if(SceneStart != 0) {
            Settings = 1;
        }
    }

    /* Abouttext object function */
    if(window.detectcollision(AboutText, Mouse)) {
        /* Turn on about section */
        if(SceneStart != 0) {
            About = 1;
        }
    }

    /* Returntext object function */
    if(window.detectcollision(ReturnText, Mouse)) {
        /* Turn off about and settings section */
        if(SceneStart != 0) {
            About = 0;
            Settings = 0;
        }
    }
});

