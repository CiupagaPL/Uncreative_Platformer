/* Uncreative Platformer made by CiupagaPL; Simple platformer made in JS.
 * GPL 3.0 (C) 2024 CiupagaPL */

/* Window create function */
window.onload = function() {
    /* Create game board */
    Board = document.getElementById("Board");
    Board.width = BoardWidth;
    Board.height = BoardHeight;
    Context = Board.getContext("2d");

    /* Start update function */
    window.onupdate();
}

/* Window resize function */
window.onresize = function() {
    /* Change board resolution */
    BoardWidth = window.innerWidth * 0.9;
    BoardHeight = window.innerHeight * 0.9;
}

/* Update function */
window.onupdate = function() {
    /* Limit fps */
    setTimeout(() => {
        requestAnimationFrame(window.onupdate);
    }, 1000 / 120);

    /* Clear screen */
    Context.clearRect(0, 0, BoardWidth, BoardHeight);

    /* Draw public objects */
    
    /* Menu scene */
    if(Scene == 1) {
        /* Draw scene objects */
        Context.fillStyle = PlayerColor;
        Context.fillRect(PlayerX, PlayerY, PlayerWidth, PlayerHeight);

        Context.fillStyle = PlatformColor;
        Context.fillRect(PlatformX, PlatformY, PlatformWidth, PlatformHeight);

        /* Key input handler */
        document.addEventListener("keyup", function(Event) {
            if(Event.key == "1" && !hasPlayerJumped) {
                hasPlayerJumped = true;
            }
        });

        /* Player jump function */
        if(hasPlayerJumped) {
            alert("Hi!");
            hasPlayerJumped = false;
        }
    }

    /* Test scene */
    if(Scene == 2) {
    
    }
}

