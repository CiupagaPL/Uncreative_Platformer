/* Uncreative Platformer made by Ciupaga; Simple game made in JS.
* GPL 3.0 (C) 2024 Ciupaga */

/* Key input function */
document.addEventListener("keydown", function(Event) {
    /* Menu scene */
    if(Scene == 1) {
        switch(Event.key) {
            case "Enter":
                /* Change scene */
                Scene = 2;
                break;
        }
    }

    /* Test scene */
    if(Scene == 2) {
        switch(Event.key) {
            case "w":
                /* Move object -y */
                Player.y = Player.y - PlayerSpeed * Scale.y;
                break;
            default:
                break;
        }
    }
});

