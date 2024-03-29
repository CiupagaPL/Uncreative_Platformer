/* Uncreative Platformer made by CiupagaPL; Simple platformer made in JS.
 * GPL 3.0 (C) 2024 CiupagaPL */

/* Window create function */
window.onload = function() {
    /* Create game board */
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

    }

    /* Test scene */
    if(Scene == 2) {
        /* Draw player object */
        Context.fillStyle = PlayerColor;
        Context.fillRect(PlayerX, PlayerY, PlayerWidth, PlayerHeight);

        /* Draw platform object */
        Context.fillStyle = PlatformColor;
        Context.fillRect(PlatformX, PlatformY, PlatformWidth, PlatformHeight);

        /* Draw platform2 object */
        Context.fillStyle = Platform2Color;
        Context.fillRect(Platform2X, Platform2Y, Platform2Width, Platform2Height);

        if(SceneStart == 0) {
            /* Set default position of player object */
            PlayerX = BoardWidth/2 - PlayerWidth/2;
            PlayerY = BoardHeight*7/8 - PlayerHeight/2;

            /* Set default gravity value */
            PlayerVelocityY = 0;

            /* Choose player start side */
            PlayerSide = Math.floor(Math.random() * 2);
            if(PlayerSide == 0) {
                PlayerVelocityX = 8;
            }
            else if(PlayerSide == 1) {
                PlayerVelocityX = -8;
            }

            /* End function */
            SceneStart = 1;
        }

        /* Move player object */
        PlayerX += PlayerVelocityX;
        PlayerY += PlayerVelocityY;
        PlayerVelocityY += PlayerGravity;

        /* Bounce player object from walls */
        if(PlayerX <= 0) {
            PlayerVelocityX = 8;
        }
        if(PlayerX >= BoardWidth - PlayerWidth) {
            PlayerVelocityX = -8;
        }

        /* Detect collisions */
        if(window.detectcollision(PlayerX, PlayerY, PlayerWidth, PlayerHeight, Platform2X, Platform2Y, Platform2Width, Platform2Height)) {
            PlayerVelocityY = 0;
            hasPlayerJumped = false;
        }
    }
}

window.detectcollision = function(FirstX, FirstY, FirstWidth, FirstHeight, SecondX, SecondY, SecondWidth, SecondHeight) {
    return FirstX < SecondX + SecondWidth &&
           FirstX + FirstWidth > SecondX &&
           FirstY < SecondY + SecondHeight &&
           FirstY + FirstHeight > SecondY;
}
