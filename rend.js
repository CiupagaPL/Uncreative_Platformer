/* Uncreative Platformer made by CiupagaPL
 * GPL 3.0 (C) 2024 CiupagaPL */

/* Window generator platforms update function */
window.updateplatforms = function() {
    /* Generate next platform */
    if(CurrentPlatform.y >= Board.h) {
        if(!CurrentPlatform.disabled) {
            /* Calculate platform h */
            CurrentPlatform.y = -Platform.h;

            /* Calculate platform score */
            CurrentPlatform.level = Platform.lastlevel + 1;

            /* Disable platform */
            CurrentPlatform.disabled = true;
        }
    }
    
    /* Actions for rest of the platforms */
    else if(CurrentPlatform.y < Board.h) {
        /* Enable platform */
        CurrentPlatform.disabled = false;

        /* Set lastlevel value */
        Platform.lastlevel = CurrentPlatform.level;
    }
}

/* Window generator spikes update function */
window.updatespikes = function() {

}

/* Window generator coins update function */
window.updatecoins = function() {

}

/* Window objects counter function */
window.currentplatformsgenerator = function() {
    /* Generate number */
    Platform.load = Math.round((Board.h - 384) / 256) + 1;
}

/* Window level generator function */
window.generatelevel = function() {
    /* Generate rest platforms */
    while(Platform.currentload <= Platform.load) {
        /* Count objects */
        window.currentplatformsgenerator();

        /* Start objects generator function */
        window.platformsgenerator();

        /* Change loop value */
        Platform.currentload += 1;
    }
}

/* Window reset level function */
window.resetlevel = function() {
    /* Reset platform array */
    Platform.array = [];

    /* Reset spike array */
    Spike.array = [];

    /* Reset coin array */
    Coin.array = [];

    /* Reset platform values */
    Platform.lenght = -1;
    Platform.currentload = 0;

    /* Reset spike values */
    Spike.lenght = -1;
    Spike.currentload = 0;

    /* Reset coin values */
    Coin.lenght = -1;
    Coin.currentload = 0;
}

/* Window platforms generator function */
window.platformsgenerator = function() {
    /* Generate platform count */
    Platform.count = Math.floor(Math.random() * 2);

    /* Generate all platforms position */
    if(Platform.count == 0) {
        Platform.randomx1 = Math.floor(Math.random() * Board.w * 3/4) + Platform.w / 2;

        /* Change platform lenght */
        Platform.lenght += 2;
    }
    if(Platform.count == 1) {
        Platform.randomx1 = Math.floor(Math.random() * Board.w * 1.25/4 + Platform.w / 2);
        Platform.randomx2 = Platform.randomx1 + Math.floor(Math.random() * Board.w * 1/4 + Platform.w / 2);

        /* Change platform lenght */
        Platform.lenght += 3;
    }

    /* Create first current platform */
    CurrentPlatform = {
        x: 0,
        y: Board.h - 256 * Platform.currentload - 384,
        fx: 0,
        fy: 0,
        w: Platform.randomx1,
        h: Platform.h,
        color: Platform.color,
        level: Platform.currentload,
        disabled: false,
    };

    /* Push current platform into array */
    Platform.array.push(CurrentPlatform);

    /* Generate coins for current platform */
    window.coinsgenerator();

    /* Generate spikes for current platform */
    window.spikesgenerator();

    /* Create second platform */
    if(Platform.count == 0) {
        /* Create current platform object */
        CurrentPlatform = {
            x: Platform.randomx1 + Platform.w,
            y: CurrentPlatform.y,
            fx: 0,
            fy: 0,
            w: Board.w - Platform.randomx1 - Platform.w,
            h: Platform.h,
            color: Platform.color,
            level: Platform.currentload,
            disabled: false,
        };

        /* Update latest level */
        Platform.lastlevel = CurrentPlatform.level + 1;

        /* Generate coins for current platform */
        window.coinsgenerator();

        /* Generate spikes for current platform */
        // window.spikesgenerator();
    }

    /* Create second and last platform */
    if(Platform.count == 1) {
        /* Create current platform object */
        CurrentPlatform = {
            x: Platform.randomx1 + Platform.w,
            y: CurrentPlatform.y,
            fx: 0,
            fy: 0,
            w: Platform.randomx2 - Platform.randomx1 - Platform.w + 256,
            h: Platform.h,
            color: Platform.color,
            level: Platform.currentload,
            disabled: false,
        };

        /* Push current platform into array */
        Platform.array.push(CurrentPlatform);

        /* Generate coins for current platform */
        window.coinsgenerator();

        /* Generate spikes for current platform */
        // window.spikesgenerator();

        /* Create current platform object */
        CurrentPlatform = {
            x: Platform.randomx2 + Platform.w + 256,
            y: CurrentPlatform.y,
            fx: 0,
            fy: 0,
            w: Board.w - Platform.randomx2 - Platform.w - 256,
            h: Platform.h,
            color: Platform.color,
            level: Platform.currentload,
            disabled: false,
        };

        /* Update latest level */
        Platform.lastlevel = CurrentPlatform.level + 1;

        /* Generate coins for current platform */
        window.coinsgenerator();

        /* Generate spikes for current platform */
        // window.spikesgenerator();
    }

    /* Push current platform into array */
    Platform.array.push(CurrentPlatform);
}

/* Window spikes generator function */
window.spikesgenerator = function() {
    /* Create current spike object */
    CurrentSpike = {
        x: CurrentPlatform.x,
        y: CurrentPlatform.y - Spike.h,
        fx: 0,
        fy: 0,
        w: Spike.w,
        h: Spike.h,
        img: Spike.img,
    };

    /* Push current spike into array */
    Spike.array.push(CurrentSpike);

    /* Change value of loop */
    Spike.lenght += 1;
}

/* Window coins generator function */
window.coinsgenerator = function() {
    /* Calculate coins count */
    Coin.calc = (Math.floor(CurrentPlatform.w) / 320) - 1;

    /* Create coin rendering loop */
    while(Coin.calc >= 0) {
        /* Create current coin object */
        CurrentCoin = {
            x: CurrentPlatform.x + (320 * Coin.calc),
            y: CurrentPlatform.y - Coin.h - 32,
            fx: 0,
            fy: 0,
            w: Coin.w,
            h: Coin.h,
            img: Coin.img,
        };

        /* Push current coin into array */
        Coin.array.push(CurrentCoin);

        /* Change loop value */
        Coin.calc -= 1;
        Coin.lenght += 1;
    }
}

