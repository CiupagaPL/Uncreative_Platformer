/* Uncreative Platformer made by Ciupaga; Simple game made in JS.
 * GPL 3.0 (C) 2024 Ciupaga */

/* Update function */
window.update = function() {
    /* Limit fps */
    setTimeout(() => {
        /* Continue update */
        requestAnimationFrame(window.update);
    }, 1000 / Fps);

    /* Clear screen */
    Context.clearRect(0, 0, Board.width, Board.height);

    /* Menu scene */
    if(Scene == 1) {
        menuScene(isTransition);
    }

    /* Test scene */
    if(Scene == 2) {
        testScene(isTransition);
    }

    /* Draw public objects */
    Context.fillStyle = Transition.color;
    Context.fillRect(Transition.x, Transition.y, Transition.width, Transition.height);
}

/* Menu scene */
function menuScene(isTransition) {
    /* Start timer */
    if(TransitionFpsTimer < 30) {
        TransitionFpsTimer = TransitionFpsTimer + 1;
    }
    /* End timer and start function */
    else if(TransitionFpsTimer >= 30) {
        /* Transition animation function */
        if(Transition.y < Screen.y) {
            Transition.y = Transition.y + TransitionSpeed * Scale.y;
        }
    }

    /* Draw objects */
    Context.drawImage(Logo.img, Logo.x, Logo.y, Logo.width, Logo.height);
}

/* Test scene */
function testScene(isTransition) {
    /* Draw objects */
    Context.fillStyle = Player.color;
    Context.fillRect(Player.x, Player.y, Player.width, Player.height);
}

