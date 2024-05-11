/* Uncreative Platformer made by CiupagaPL
 * GPL 3.0 (C) 2024 CiupagaPL */

/* Window generator corners update function */
window.updatecorners = function() {
    /* Disable current corner object from rendering */
    if(CurrentCorner.y >= Board.h) {
        CurrentCorner.disabled = true;
    }
}

/* Window generator spikes update function */
window.updatespikes = function() {
    /* Disable current spike object from rendering */
    if(CurrentSpike.y >= Board.h) {
        CurrentSpike.disabled = true;
    }
}

/* Window generator coins update function */
window.updatecoins = function() {
    /* Disable current coin object from rendering */
    if(CurrentCoin.y >= Board.h) {
        CurrentCoin.disabled = true;
    }
}

/* Window generator platforms update function */
window.updateplatforms = function() {
    /* Check if current platform is main one */
    if(!CurrentPlatform.main) {
        /* Generate next platform */
        if(CurrentPlatform.y >= Board.h) {
            if(!CurrentPlatform.disabled) {
                /* Calculate platform h */
                CurrentPlatform.y = Platform.highestposition + 48;

                /* Calculate platform score */
                CurrentPlatform.level = Platform.lastlevel + 1;

                /* Generate corners */
                window.cornersgenerator();

                /* Generate coins (and spikes) */
                window.coinsgenerator();

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
    else if(CurrentPlatform.main) {
        /* Generate main platform */
        if(CurrentPlatform.y >= Board.h) {
            if(!CurrentPlatform.disabled) {
                /* Disable platform */
                CurrentPlatform.disabled = true;
            }
        }
        /* Check if everything works right */
        else if(CurrentPlatform.y < Board.h) {
            /* Enable platform */
            CurrentPlatform.disabled = false;
        }
    }
}

/* Window level generator function */
window.generatelevel = function() {
    /* Generate rest platforms */
    while(Platform.currentload <= Platform.load) {
        /* Generate main platform */
        window.mainplatformgenerator();

        /* Generate platforms generator function */
        window.platformsgenerator();

        /* Change loop value */
        Platform.currentload += 1;
    }
}

/* Window reset level function */
window.resetlevel = function() {
    /* Reset platform array */
    Platform.array = [];

    /* Reset corner array */
    Corner.array = [];

    /* Reset spike array */
    Spike.array = [];

    /* Reset coin array */
    Coin.array = [];

    /* Reset platform values */
    Platform.lenght = -1;
    Platform.currentload = 0;

    /* Reset corner values */
    Corner.lenght = -1;
    Corner.currentload = 0;

    /* Reset spike values */
    Spike.lenght = -1;
    Spike.currentload = 0;

    /* Reset coin values */
    Coin.lenght = -1;
    Coin.currentload = 0;
}

/* Generate main platform */
window.mainplatformgenerator = function() {
    /* Create main platform */
    CurrentPlatform = {
        x: 0,
        y: Board.h - 48,
        fx: 0,
        fy: 0,
        w: Board.w,
        h: Platform.h,
        img: Platform.img,
        disabled: false,
        main: true,
    };

    /* Push current platform into array */
    Platform.array.push(CurrentPlatform);

    /* Change loop value */
    Platform.lenght += 1;
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
        img: Spike.img1,
        disabled: false,
    };

    /* Push current spike into array */
    Spike.array.push(CurrentSpike);

    /* Change value of loop */
    Spike.lenght += 1;
}

/* Window corners generating function */
window.cornersgenerator = function() {
    /* Create left corner object */
    if(CurrentPlatform.left) {
        CurrentCorner = {
            x: CurrentPlatform.x,
            y: CurrentPlatform.y,
            fx: 0,
            fy: 0,
            w: Corner.w,
            h: Corner.h,
            img: Corner.imgleft,
            left: true,
            disabled: false,
        };

        /* Push current corner into array */
        Corner.array.push(CurrentCorner);

        /* Change lenght */
        Corner.lenght += 1;
    }

    /* Create right corner object */
    if(CurrentPlatform.right) {
        CurrentCorner = {
            x: CurrentPlatform.x + CurrentPlatform.w - Corner.w,
            y: CurrentPlatform.y,
            fx: 0,
            fy: 0,
            w: Corner.w,
            h: Corner.h,
            img: Corner.imgright,
            left: false,
            disabled: false,
        };

        /* Push current corner into array */
        Corner.array.push(CurrentCorner);

        /* Change lenght */
        Corner.lenght += 1;
    }
}

/* Window coins generator function */
window.coinsgenerator = function() {
    /* Calculate coins count */
    Coin.calc1 = (Math.floor(CurrentPlatform.w) / 376);
    Coin.calc2 = Coin.calc1;

    /* Create coin rendering loop */
    while(Coin.calc1 >= 0) {
        /* Create current coin object */
        CurrentCoin = {
            x: CurrentPlatform.x + (376 * Coin.calc1),
            y: CurrentPlatform.y - Coin.h - 32,
            fx: 0,
            fy: 0,
            w: Coin.w,
            h: Coin.h,
            img: Coin.img1,
            disabled: false,
        };

        /* Push current coin into array */
        Coin.array.push(CurrentCoin);

        /* Change loop value */
        Coin.calc1 -= 1;
        Coin.lenght += 1;
    }
    // while(Coin.calc2 >= 0 && CurrentPlatform.level != 0) {
    //     /* Create current coin object */
    //     CurrentCoin = {
    //         x: CurrentPlatform.x + (376 * Coin.calc2),
    //         y: CurrentPlatform.y + Coin.h + 32,
    //         fx: 0,
    //         fy: 0,
    //         w: Coin.w,
    //         h: Coin.h,
    //         img: Coin.img1,
    //     };

    //     /* Push current coin into array */
    //     Coin.array.push(CurrentCoin);

    //     /* Change loop value */
    //     Coin.calc2 -= 1;
    //     Coin.lenght += 1;
    // }
}

/* Window platforms generator function */
window.platformsgenerator = function() {
    /* Calculate max platform count */
    if(Board.w <= 1850) {
        Platform.count = 2;
    }
    if(Board.w >= 1850 && Board.w <= 2450) {
        Platform.count = 3;
    }
    else if(Board.w >= 2450) {
        Platform.count = 4;
    }

    /* Change loop value */
    Platform.loop = 0;
    Platform.currentcount = 0;
    Platform.available = 0;

    /* Reset platform timer */
    if(Platform.firsttimer == 2) {
        Platform.firsttimer = 0;
    }
    if(Platform.secondtimer == 2) {
        Platform.secondtimer = 0;
    }
    if(Platform.thirdtimer == 2) {
        Platform.thirdtimer = 0;
    }
    if(Platform.fourthtimer == 2) {
        Platform.fourthtimer = 0;
    }

    /* Calculate available platforms */
    if(Platform.firsttimer != 1 && Platform.count >= 1) {
        Platform.available += 1;
    }
    if(Platform.secondtimer != 1 && Platform.count >= 2) {
        Platform.available += 1;
    }
    if(Platform.thirdtimer != 1 && Platform.count >= 3) {
        Platform.available += 1;
    }
    if(Platform.fourthtimer != 1 && Platform.count >= 4) {
        Platform.available += 1;
    }

    /* Prevent platforms from repeating */
    if(Platform.firsttimer == 1) {
        Platform.first = true;
        Platform.firstchanged = true;
    }
    if(Platform.secondtimer == 1) {
        Platform.second = true;
        Platform.secondchanged = true;
    }
    if(Platform.thirdtimer == 1) {
        Platform.third = true;
        Platform.thirdchanged = true;
    }
    if(Platform.fourthtimer == 1) {
        Platform.fourth = true;
        Platform.fourthchanged = true;
    }

    /* Randomize platform count */
    Platform.randomcount = Math.floor(Math.random() * (Platform.available));

    while(Platform.randomcount >= 0) {
        /* Randomize platform number */
        if(Platform.count == 2) {
            Platform.randomplatform = Math.floor(Math.random() * 2);
        }
        if(Platform.count == 3) {
            Platform.randomplatform = Math.floor(Math.random() * 3);
        }
        if(Platform.count == 4) {
            Platform.randomplatform = Math.floor(Math.random() * 4);
        }

        /* Check if platform can be changed */
        if(Platform.randomplatform == 0 && Platform.firsttimer != 1) {
            /* Change platform statement */
            Platform.first = false;
        }
        else if(Platform.randomplatform == 0 && Platform.firsttimer == 1) {
            /* Make platform count longer */
            Platform.randomcount += 1;
        }

        /* Check if platform can be changed */
        if(Platform.randomplatform == 1 && Platform.secondtimer != 1) {
            /* Change platform statement */
            Platform.second = false;
        }
        else if(Platform.randomplatform == 1 && Platform.secondtimer == 1) {
            /* Make platform count longer */
            Platform.randomcount += 1;
        }

        /* Check if platform can be changed */
        if(Platform.randomplatform == 2 && Platform.thirdtimer != 1) {
            /* Change platform statement */
            Platform.third = false;
        }
        else if(Platform.randomplatform == 2 && Platform.thirdtimer == 1) {
            /* Make platform count longer */
            Platform.randomcount += 1;
        }

        /* Check if platform can be changed */
        if(Platform.randomplatform == 3 && Platform.fourthtimer != 1) {
            /* Change platform statement */
            Platform.fourth = false;
        }
        else if(Platform.randomplatform == 3 && Platform.fourthtimer == 1) {
            /* Make platform count longer */
            Platform.randomcount += 1;
        }

        /* Change loop value */
        Platform.randomcount -= 1;
    }

    /* Change timer value */
    if(!Platform.first || Platform.firstchanged) {
        Platform.firsttimer += 1;
        Platform.firstchanged = false;
    }
    if(!Platform.second || Platform.secondchanged) {
        Platform.secondtimer += 1;
        Platform.secondchanged = false;
    }
    if(!Platform.third || Platform.thirdchanged) {
        Platform.thirdtimer += 1;
        Platform.thirdchanged = false;
    }
    if(!Platform.fourth || Platform.fourthchanged) {
        Platform.fourthtimer += 1;
        Platform.fourthchanged = false;
    }

    while(Platform.loop <= Platform.count) {
        /* Check current platform count */
        if(Platform.currentcount == 0) {
            if(!Platform.first) {
                /* Create next platform */
                CurrentPlatform = {
                    x: ((Board.w / Platform.count) * Platform.loop) - 288,
                    y: Board.h - 384 * Platform.currentload - 432,
                    fx: 0,
                    fy: 0,
                    w: (Board.w / Platform.count) - Platform.w,
                    h: Platform.h,
                    img: Platform.img,
                    level: Platform.currentload,
                    disabled: false,
                    main: false,
                    left: false,
                    right: true,
                };
            }
            else if(Platform.first) {
                /* Create next platform */
                CurrentPlatform = {
                    x: ((Board.w / Platform.count) * Platform.loop) - 288,
                    y: Board.h - 384 * Platform.currentload - 432,
                    fx: 0,
                    fy: 0,
                    w: (Board.w / Platform.count) + 16,
                    h: Platform.h,
                    img: Platform.img,
                    level: Platform.currentload,
                    disabled: false,
                    main: false,
                    left: false,
                    right: false,
                };
            }
        }
        if(Platform.currentcount == 1) {
            if(!Platform.second) {
                /* Create next platform */
                CurrentPlatform = {
                    x: ((Board.w / Platform.count) * Platform.loop) - 288,
                    y: Board.h - 384 * Platform.currentload - 432,
                    fx: 0,
                    fy: 0,
                    w: (Board.w / Platform.count) - Platform.w,
                    h: Platform.h,
                    img: Platform.img,
                    level: Platform.currentload,
                    disabled: false,
                    main: false,
                    left: true,
                    right: true,
                };
            }
            else if(Platform.second) {
                /* Create next platform */
                CurrentPlatform = {
                    x: ((Board.w / Platform.count) * Platform.loop) - 288,
                    y: Board.h - 384 * Platform.currentload - 432,
                    fx: 0,
                    fy: 0,
                    w: (Board.w / Platform.count) + 16,
                    h: Platform.h,
                    img: Platform.img,
                    level: Platform.currentload,
                    disabled: false,
                    main: false,
                    left: true,
                    right: false,
                };
            }
            if(Platform.first) {
                /* Disable left corner */
                CurrentPlatform.left = false;
            }
        }
        if(Platform.currentcount == 2) {
            if(!Platform.third) {
                /* Create next platform */
                CurrentPlatform = {
                    x: ((Board.w / Platform.count) * Platform.loop) - 288,
                    y: Board.h - 384 * Platform.currentload - 432,
                    fx: 0,
                    fy: 0,
                    w: (Board.w / Platform.count) - Platform.w,
                    h: Platform.h,
                    img: Platform.img,
                    level: Platform.currentload,
                    disabled: false,
                    main: false,
                    left: true,
                    right: true,
                };
            }
            else if(Platform.third) {
                /* Create next platform */
                CurrentPlatform = {
                    x: ((Board.w / Platform.count) * Platform.loop) - 288,
                    y: Board.h - 384 * Platform.currentload - 432,
                    fx: 0,
                    fy: 0,
                    w: (Board.w / Platform.count) + 16,
                    h: Platform.h,
                    img: Platform.img,
                    level: Platform.currentload,
                    disabled: false,
                    main: false,
                    left: true,
                    right: false,
                };
            }
            if(Platform.second) {
                /* Disable left corner */
                CurrentPlatform.left = false;
            }
        }
        if(Platform.currentcount == 3) {
            if(!Platform.fourth) {
                /* Create next platform */
                CurrentPlatform = {
                    x: ((Board.w / Platform.count) * Platform.loop) - 288,
                    y: Board.h - 384 * Platform.currentload - 432,
                    fx: 0,
                    fy: 0,
                    w: (Board.w / Platform.count) - Platform.w,
                    h: Platform.h,
                    img: Platform.img,
                    level: Platform.currentload,
                    disabled: false,
                    main: false,
                    left: true,
                    right: true,
                };
            }
            else if(Platform.fourth) {
                /* Create next platform */
                CurrentPlatform = {
                    x: ((Board.w / Platform.count) * Platform.loop) - 288,
                    y: Board.h - 384 * Platform.currentload - 432,
                    fx: 0,
                    fy: 0,
                    w: (Board.w / Platform.count) + 16,
                    h: Platform.h,
                    img: Platform.img,
                    level: Platform.currentload,
                    disabled: false,
                    main: false,
                    left: true,
                    right: false,
                };
            }
            if(Platform.third) {
                /* Disable left corner */
                CurrentPlatform.left = false;
            }
        }
        if(Platform.currentcount == 4) {
            /* Create next platform */
            CurrentPlatform = {
                x: ((Board.w / Platform.count) * Platform.loop) - 288,
                y: Board.h - 384 * Platform.currentload - 432,
                fx: 0,
                fy: 0,
                w: (Board.w / Platform.count) - Platform.w,
                h: Platform.h,
                img: Platform.img,
                level: Platform.currentload,
                disabled: false,
                main: false,
                left: true,
                right: false,
            };
            if(Platform.fourth) {
                /* Disable left corner */
                CurrentPlatform.left = false;
            }
        }

        /* Check current platform y */
        if(CurrentPlatform.y <= Platform.highestposition) {
            Platform.highestposition = CurrentPlatform.y;
        }

        /* Push current platform into array */
        Platform.array.push(CurrentPlatform);

        /* Generate corners */
        window.cornersgenerator();

        /* Generate coins (and spikes) */
        // window.coinsgenerator();

        /* Change loop value */
        Platform.loop += 1;
        Platform.currentcount += 1;
        Platform.lenght += 1;
    }
}

