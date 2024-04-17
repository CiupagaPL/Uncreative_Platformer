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
                if(!Pause == 1) {
                    Player.side = 0;
                }

                break;
            /* Move player object left-right */
            case "d":
                /* Change side to right */
                if(!Pause == 1) {
                    Player.side = 1;
                }

                break;
            case "a":
                /* Change side to left */
                if(!Pause == 1) {
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

    /* Check collision between cursor and button1 object */
    if(window.detectcollision(Button1, Mouse)) {
        /* Change object color */
        Button1.color = "blue";
    }
    else if(!window.detectcollision(Button1, Mouse)) {
        /* Change object color */
        Button1.color = "red";
    }

    /* Check collision between cursor and button2 object */
    if(window.detectcollision(Button2, Mouse)) {
        /* Change object color */
        Button2.color = "blue";
    }
    else if(!window.detectcollision(Button2, Mouse)) {
        /* Change object color */
        Button2.color = "red";
    }

    /* Check collision between cursor and button3 object */
    if(window.detectcollision(Button3, Mouse)) {
        /* Change object color */
        Button3.color = "blue";
    }
    else if(!window.detectcollision(Button3, Mouse)) {
        /* Change object color */
        Button3.color = "red";
    }

    /* Check collision between cursor and button4 object */
    if(window.detectcollision(Button4, Mouse)) {
        /* Change object color */
        Button4.color = "blue";
    }
    else if(!window.detectcollision(Button4, Mouse)) {
        /* Change object color */
        Button4.color = "red";
    }

    /* Check collision between cursor and button5 object */
    if(window.detectcollision(Button5, Mouse)) {
        /* Change object color */
        Button5.color = "blue";
    }
    else if(!window.detectcollision(Button5, Mouse)) {
        /* Change object color */
        Button5.color = "red";
    }

    /* Check collision between cursor and buttonx object */
    if(window.detectcollision(ButtonX, Mouse)) {
        /* Change object color */
        ButtonX.color = "blue";
    }
    else if(!window.detectcollision(ButtonX, Mouse)) {
        /* Change object color */
        ButtonX.color = "red";
    }

    /* Check collision between cursor and buttonpause object */
    if(window.detectcollision(ButtonPause, Mouse)) {
        /* Change object color */
        ButtonPause.color = "blue";
    }
    else if(!window.detectcollision(ButtonPause, Mouse)) {
        /* Change object color */
        ButtonPause.color = "red";
    }
});

/* Mouse input handler */
window.addEventListener("click", function(Event) {
    /* Button1 object function */
    if(window.detectcollision(Button1, Mouse)) {
        /* Set mode and change scene */
        if(SceneStart != 0) {
            Mode = 1;
            SceneChange = 1;
        }
    }

    /* Button2 object function */
    if(window.detectcollision(Button2, Mouse)) {
        /* Set mode and change scene */
        if(SceneStart != 0) {
            Mode = 2;
            SceneChange = 1;
        }
    }

    /* Button3 object function */
    if(window.detectcollision(Button3, Mouse)) {
        /* Set mode and change scene */
        if(SceneStart != 0) {
            Mode = 3;
            SceneChange = 1;
        }
    }

    /* Button4 object function */
    if(window.detectcollision(Button4, Mouse)) {
        /* Turn on settings */
        if(SceneStart != 0) {
            Settings = 1;
        }
    }

    /* Button5 object function */
    if(window.detectcollision(Button5, Mouse)) {
        /* Turn on about */
        if(SceneStart != 0) {
            About = 1;
        }
    }

    /* Buttonx object function */
    if(window.detectcollision(ButtonX, Mouse)) {
        if(SceneStart != 0) {
            /* Turn off foreground */
            About = 0;
            Settings = 0;
            Pause = 0;
            Help = 0;
        }
    }

    /* Buttonpause object function */
    if(window.detectcollision(ButtonPause, Mouse)) {
        if(SceneStart != 0) {
            /* Turn on pause */
            Pause = 1;
            Help = 0;
        }
    }
});

