/* Uncreative Platformer made by CiupagaPL; Simple platformer made in JS.
 * GPL 3.0 (C) 2024 CiupagaPL */

/* Key input handler */
document.addEventListener("keyup", function(Event) {
    /* Public project keys */
    switch(Event.key) {
        /* Test */
        case "1":
            console.log("Hi!");
            break;

        /* Default */
        default:
            break;
    }

    /* Menu scene keys */
    if(Scene == 1) {
        switch(Event.key) {
            /* Change scene */
            case " ":
                SceneStart = 0;
                Scene = 2;
                break;

            /* Default */
            default:
                break;
        }
    }

    /* Test scene keys */
    if(Scene == 2) {
        switch(Event.key) {
            /* Jump */
            case " ":
                if(!hasPlayerJumped) {
                    PlayerVelocityY = initPlayerVelocityY;
                    hasPlayerJumped = true;
                }
                break;

            /* Come back to menu scene */
            case "Escape":
                SceneStart = 0;
                Scene = 1;
                break;

            /* Default */
            default:
                break;
        }
    }
});
