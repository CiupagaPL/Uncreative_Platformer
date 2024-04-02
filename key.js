/* Uncreative Platformer made by CiupagaPL; Simple platformer made in JS.
 * GPL 3.0 (C) 2024 CiupagaPL */

/* Key input handler */
document.addEventListener("keyup", function(Event) {
    /* Menu scene keys */
    if(Scene == 1) {
        switch(Event.key) {
            /* Change scene */
            case "1":
                if(SceneStart != 0) {
                    SceneChange = 1;
                    break;
                }

            /* Default */
            default:
                break;
        }
    }

    /* Test scene keys */
    if(Scene == 2) {
        switch(Event.key) {
            /* Make player object jump */
            case " ":
                /* Count player jumps */
                switch(Player.jumpcount) {
                    case 0:
                        /* Change value */
                        Player.vy = Player.initvy;
                        Player.jumpcount = 1;
                        break;
                    case 1:
                        /* Change value */
                        Player.vy = Player.initvy * 3/4;
                        Player.jumpcount = 2;
                        break;
                    case 2:
                        /* Change value */
                        Player.vy = Player.initvy * 2/3;
                        Player.jumpcount = 3;
                        break;

                    /* Default */
                    default:
                        break;
                }
                break;

            /* Move player object left-right */
            case "d":
                /* Change side to right */
                Player.vx = 8;
                Player.side = 0;
                break;
            case "a":
                /* Change side to left */
                Player.vx = -8;
                Player.side = 1;
                break;
            case "ArrowRight":
                /* Change side to right*/
                Player.vx = 8;
                Player.side = 0;
                break;
            case "ArrowLeft":
                /* Change side to left*/
                Player.vx = -8;
                Player.side = 1;
                break;

            /* Come back to menu scene */
            case "1":
                if(SceneStart != 0) {
                    SceneChange = 1;
                    break;
                }

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
        Button1.color = "blue";
    }
    else if(!window.detectcollision(Button1, Mouse)) {
        Button1.color = "red";
    }

    /* Check collision between cursor and button2 object */
    if(window.detectcollision(Button2, Mouse)) {
        Button2.color = "blue";
    }
    else if(!window.detectcollision(Button2, Mouse)) {
        Button2.color = "red";
    }

    /* Check collision between cursor and button3 object */
    if(window.detectcollision(Button3, Mouse)) {
        Button3.color = "blue";
    }
    else if(!window.detectcollision(Button3, Mouse)) {
        Button3.color = "red";
    }

    /* Check collision between cursor and button4 object */
    if(window.detectcollision(Button4, Mouse)) {
        Button4.color = "blue";
    }
    else if(!window.detectcollision(Button4, Mouse)) {
        Button4.color = "red";
    }

    /* Check collision between cursor and button5 object */
    if(window.detectcollision(Button5, Mouse)) {
        Button5.color = "blue";
    }
    else if(!window.detectcollision(Button5, Mouse)) {
        Button5.color = "red";
    }
});

/* Mouse input handler */
window.addEventListener("click", function(Event) {
    /* Button1 function */
    if(window.detectcollision(Button1, Mouse)) {
        if(SceneStart != 0) {
            SceneChange = 1;
        }
    }

    /* Button2 function */
    if(window.detectcollision(Button2, Mouse)) {
        if(SceneStart != 0) {
            SceneChange = 1;
        }
    }

    /* Button3 function */
    if(window.detectcollision(Button3, Mouse)) {
        if(SceneStart != 0) {
            SceneChange = 1;
        }
    }
});
