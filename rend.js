/* Uncreative Platformer made by CiupagaPL
 * GPL 3.0 (C) 2024 CiupagaPL */

/* Window corners generator update function */
window.updatecorners = function() {
    /* Disable currentcorner object from rendering */
    if(CurrentCorner.y >= Board.h) {
        CurrentCorner.disabled = true;
    }
}

/* Window spikes generator update function */
window.updatespikes = function() {
    /* Disable currentspike object from rendering */
    if(CurrentSpike.y >= Board.h) {
        CurrentSpike.disabled = true;
    }
}

/* Window coins generator update function */
window.updatecoins = function() {
    /* Disable currentcoin object from rendering */
    if(CurrentCoin.y >= Board.h) {
        CurrentCoin.disabled = true;
    }
}

/* Window dispenser generator update function */
window.updatedispensers = function() {
    /* Generate next dispenser */
    if(CurrentDispenser.y >= Board.h && !CurrentDispenser.disabled) {
        /* Calculate dispenser h */
        CurrentDispenser.y = Wall.highestposition + 384;

        /* Disable dispenser */
        CurrentDispenser.disabled = true;
    }
    else if(CurrentDispenser.y < Board.h) {
        /* Enable dispenser */
        CurrentDispenser.disabled = false;
    }
}

/* Window dispenserspike generator update function */
window.updatedispensersspikes = function() {
    /* Disable currentdispenserspike object from rendering */
    if(CurrentDispenserSpike.y >= Board.h) {
        CurrentDispenserSpike.disabled = true;
    }
}

/* Window dispensercoins generator update function */
window.updatedispensercoins = function() {
    /* Disable currentdispensercoin object from rendering */
    if(CurrentDispenserCoin.y >= Board.h) {
        CurrentDispenserCoin.disabled = true;
    }
}

/* Window lasers generator update function */
window.updatelasers = function() {
    /* Disable currentlaser object from rendering */
    if(CurrentLaser.y >= Board.h) {
        CurrentLaser.disabled = true;
    }
}

/* Window laserspikes generator update function */
window.updatelaserspikes = function() {
    /* Disable currentlaser object from rendering */
    if(CurrentLaserSpike.y >= Board.h) {
        CurrentLaserSpike.disabled = true;
    }
}

/* Window lasercoins generator update function */
window.updatelasercoins = function() {
    /* Disable currentlaser object from rendering */
    if(CurrentLaserCoin.y >= Board.h) {
        CurrentLaserCoin.disabled = true;
    }
}

/* Window walls generator update function */
window.updatewalls = function() {
    /* Generate next wall */
    if(CurrentWall.y >= Board.h && !CurrentWall.disabled) {
        /* Calculate wall h */
        CurrentWall.y = Wall.highestposition + 384;

        /* Disable wall */
        CurrentWall.disabled = true;
    }
    else if(CurrentWall.y < Board.h) {
        /* Enable wall */
        CurrentWall.disabled = false;
    }
}

/* Window platforms generator update function */
window.updateplatforms = function() {
    /* Check if currentplatform is main one */
    if(!CurrentPlatform.main) {
        /* Generate next platform */
        if(CurrentPlatform.y >= Board.h && !CurrentPlatform.disabled) {
            /* Calculate platform h */
            CurrentPlatform.y = Platform.highestposition;

            /* Calculate platform score */
            CurrentPlatform.level = Platform.lastlevel + 1;

            /* Generate corners */
            window.cornersgenerator();

            /* Generate coins (and spikes) */
            window.coinsgenerator();

            /* Disable platform */
            CurrentPlatform.disabled = true;
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

        /* Generate rest platforms */
        window.platformsgenerator();

        /* Change loop value */
        Platform.currentload += 1;
    }
}

/* Window reset level function */
window.resetlevel = function() {
    /* Reset platform array */
    Platform.array = [];

    /* Reset wall array */
    Wall.array = [];

    /* Reset corner array */
    Corner.array = [];

    /* Reset spike array */
    Spike.array = [];

    /* Reset coin array */
    Coin.array = [];

    /* Reset dispenser array */
    Dispenser.array = [];

    /* Reset dispenserspike array */
    DispenserSpike.array = [];

    /* Reset dispensercoin array */
    DispenserCoin.array = [];

    /* Reset laser array */
    Laser.array = [];

    /* Reset laserspike array */
    LaserSpike.array = [];

    /* Reset lasercoin array */
    LaserCoin.array = [];

    /* Reset platform values */
    Platform.lenght = -1;
    Platform.currentload = 0;

    /* Reset wall values */
    Wall.lenght = -1;
    Wall.currentload = 0;

    /* Reset corner values */
    Corner.lenght = -1;
    Corner.currentload = 0;

    /* Reset spike values */
    Spike.lenght = -1;
    Spike.currentload = 0;

    /* Reset coin values */
    Coin.lenght = -1;
    Coin.currentload = 0;

    /* Reset dispenser values */
    Dispenser.lenght = -1;
    Dispenser.currentload = 0;

    /* Reset dispenserspike values */
    DispenserSpike.lenght = -1;
    DispenserSpike.currentload = 0;

    /* Reset dispensercoin values */
    DispenserCoin.lenght = -1;
    DispenserCoin.currentload = 0;

    /* Reset laser values */
    Laser.lenght = -1;
    Laser.currentload = 0;

    /* Reset laserspike values */
    LaserSpike.lenght = -1;
    LaserSpike.currentload = 0;

    /* Reset lasercoin values */
    LaserCoin.lenght = -1;
    LaserCoin.currentload = 0;
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
        level: 0,
    };

    /* Push currentplatform into array */
    Platform.array.push(CurrentPlatform);

    /* Generate walls */
    window.wallsgenerator();

    /* Change loop value */
    Platform.lenght += 1;
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

        /* Push currentcorner into array */
        Corner.array.push(CurrentCorner);

        /* Change lenght */
        Corner.lenght += 1;

        /* Generate lasers */
        // window.lasersgenerator();
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

        /* Push currentcorner into array */
        Corner.array.push(CurrentCorner);

        /* Change lenght */
        Corner.lenght += 1;

        /* Generate lasers */
        // window.lasersgenerator();
    }
}

/* Window spikes generator function */
window.spikesgenerator = function() {
    /* Check coin count */
    if(Coin.count1 >= 1) {
        /* Create currentspike object */
        CurrentSpike = {
            x: CurrentPlatform.x + (432 * Coin.count1) + 96,
            y: CurrentPlatform.y - Spike.h - 32,
            fx: 0,
            fy: 0,
            w: Spike.w,
            h: Spike.h,
            img: Spike.img1,
            disabled: false,
            rotated: false,
        };

        /* Push currentspike into array */
        Spike.array.push(CurrentSpike);

        /* Change value of loop */
        Spike.lenght += 1;
        Coin.count1 -= 1;
    }
    else if(Coin.count2 >= 1 && CurrentPlatform.level != 1) {
        /* Create currentspike object */
        CurrentSpike = {
            x: CurrentPlatform.x + (432 * Coin.count2) + 96,
            y: CurrentPlatform.y + Spike.h + 32,
            fx: 0,
            fy: 0,
            w: Spike.w,
            h: Spike.h,
            img: Spike.img4,
            disabled: false,
            rotated: true,
        };

        /* Push currentspike into array */
        Spike.array.push(CurrentSpike);

        /* Change value of loop */
        Spike.lenght += 1;
        Coin.count2 -= 1;
    }
}

/* Window coins generator function */
window.coinsgenerator = function() {
    /* Calculate coins */
    Coin.calc = Math.floor(CurrentPlatform.w - 256);

    /* Set coins count */
    Coin.count1 = Math.floor(Coin.calc / 432);
    Coin.count2 = Coin.count1;

    /* Create coin rendering loop */
    while(Coin.count1 >= 0) {
        /* Randomize coin chance */
        if(NormalMode) {
            Coin.chance = Math.floor(Math.random() * 3);
        }
        else if(!NormalMode) {
            Coin.chance = Math.floor(Math.random() * 2);
        }

        /* Check coin chance */
        if(Coin.chance == 0) {
            /* Create currentcoin object */
            CurrentCoin = {
                x: CurrentPlatform.x + (432 * Coin.count1) + 96,
                y: CurrentPlatform.y - Coin.h - 32,
                fx: 0,
                fy: 0,
                w: Coin.w,
                h: Coin.h,
                img: Coin.img1,
                disabled: false,
                rotated: false,
            };

            /* Push currentcoin into array */
            Coin.array.push(CurrentCoin);

            /* Change loop value */
            Coin.count1 -= 1;
            Coin.lenght += 1;
        }
        else if(Coin.chance == 1) {
            /* Geenerate spike */
            window.spikesgenerator();
        }
    }
    while(Coin.count2 >= 0 && CurrentPlatform.level != 1) {
        /* Randomize coin chance */
        Coin.chance = Math.floor(Math.random() * 2);

        /* Check coin chance */
        if(Coin.chance == 0) {
            /* Create currentcoin object */
            CurrentCoin = {
                x: CurrentPlatform.x + (432 * Coin.count2) + 96,
                y: CurrentPlatform.y + Coin.h + 32,
                fx: 0,
                fy: 0,
                w: Coin.w,
                h: Coin.h,
                img: Coin.img4,
                disabled: false,
                rotated: true,
            };

            /* Push currentcoin into array */
            Coin.array.push(CurrentCoin);

            /* Change loop value */
            Coin.count2 -= 1;
            Coin.lenght += 1;
        }
        else if(Coin.chance == 1) {
            /* Geenerate spike */
            window.spikesgenerator();
        }
    }
}

/* Window dispensers generating function */
window.dispensersgenerator = function() {
    /* Randomize dispencer change */
    Dispenser.change = Math.floor(Math.random() * 4);

    /* Check chance rate */
    if(Dispenser.change == 1 || Dispenser.change == 2 || Dispenser.change == 3 || !NormalMode) {
        /* Randomize dispenser site */
        Dispenser.side = Math.floor(Math.random() * 2);

        /* Check side */
        if(Dispenser.side == 0) {
            /* Create left dispenser object */
            CurrentDispenser = {
                x: Wall.w,
                y: CurrentPlatform.y - 192 - (Dispenser.h / 2),
                fx: 0,
                fy: 0,
                w: Dispenser.w,
                h: Dispenser.h,
                img: Dispenser.imgleft1,
                left: true,
                disabled: false,
            };

            /* Push currentdispenser into array */
            Dispenser.array.push(CurrentDispenser);

            /* Change loop value */
            Dispenser.lenght += 1;
        }
        else if(Dispenser.side == 1) {
            /* Create left dispenser object */
            CurrentDispenser = {
                x: Board.w - Dispenser.w - Wall.w,
                y: CurrentPlatform.y - 192 - (Dispenser.h / 2),
                fx: 0,
                fy: 0,
                w: Dispenser.w,
                h: Dispenser.h,
                img: Dispenser.imgright1,
                left: false,
                disabled: false,
            };

            /* Push currentdispenser into array */
            Dispenser.array.push(CurrentDispenser);

            /* Change loop value */
            Dispenser.lenght += 1;
        }
    }
}

/* Window dispenserspikes generator function */
window.dispenserspikesgenerator = function() {
    /* Create currentdispenserspike object */
    CurrentDispenserSpike = {
        x: CurrentDispenser.x + CurrentDispenser.w,
        y: CurrentDispenser.h,
        fx: 0,
        fy: 0,
        w: DispenserSpike.w,
        h: DispenserSpike.h,
        img: DispenserSpike.imgleft1,
        disabled: false,
    };

    /* Push currentdispenserspike into array */
    DispenserSpike.array.push(CurrentDispenserSpike);

    /* Change loop value */
    DispenserSpike.lenght += 1;
}

/* Window dispensercoins generator function */
window.dispensercoinsgenerator = function() {
    /* Create currentdispensercoin object */
    CurrentDispenserCoin = {
        x: CurrentDispenser.x + CurrentDispenser.w,
        y: CurrentDispenser.h,
        fx: 0,
        fy: 0,
        w: DispenserCoin.w,
        h: DispenserCoin.h,
        img: DispenserCoin.imgleft1,
        disabled: false,
    };

    /* Push currentdispensercoin into array */
    DispenserCoin.array.push(CurrentDispenserCoin);

    /* Change loop value */
    DispenserCoin.lenght += 1;
}

/* Window lasers generator function */
window.lasersgenerator = function() {
    /* Check if corner exists */
    if(CurrentCorner.left) {
        /* Create currentlaser object */
        CurrentLaser = {
            x: CurrentCorner.x + CurrentCorner.w,
            y: CurrentPlatform.y,
            fx: 0,
            fy: 0,
            w: Laser.w,
            h: Laser.h,
            img: Laser.imgleft1,
            disabled: false,
            left: true,
        };

        /* Push currentlaser into array */
        Laser.array.push(CurrentLaser);

        /* Change loop value */
        Laser.lenght += 1;
    }
    if(CurrentCorner.right) {
        /* Create currentlaser object */
        CurrentLaser = {
            x: CurrentCorner.x - Laser.w,
            y: CurrentPlatform.y,
            fx: 0,
            fy: 0,
            w: Laser.w,
            h: Laser.h,
            img: Laser.imgright1,
            disabled: false,
            left: false,
        };

        /* Push currentlaser into array */
        Laser.array.push(CurrentLaser);

        /* Change loop value */
        Laser.lenght += 1;
    }
}

/* Window laserpsikes generator function */
window.laserspikesgenerator = function() {
    /* Create currentlaserspike object */
    CurrentLaserSpike = {
        x: CurrentLaser.x + CurrentLaser.w,
        y: CurrentLaser.h,
        fx: 0,
        fy: 0,
        w: LaserSpike.w,
        h: LaserSpike.h,
        img: LaserSpike.imgleft1,
        disabled: false,
    };

    /* Push currentlaserspike into array */
    LaserSpike.array.push(CurrentLaserSpike);

    /* Change loop value */
    LaserCoin.lenght += 1;
}

/* Window lasercoins generator function */
window.lasercoinsgenerator = function() {
    /* Create currentlasercoin object */
    CurrentLaserCoin = {
        x: CurrentLaser.x + CurrentLaser.w,
        y: CurrentLaser.h,
        fx: 0,
        fy: 0,
        w: LaserCoin.w,
        h: LaserCoin.h,
        img: LaserCoin.imgleft1,
        disabled: false,
    };

    /* Push currentlasercoin into array */
    LaserCoin.array.push(CurrentLaserCoin);

    /* Change loop value */
    LaserCoin.lenght += 1;
}

/* Window walls generator function */
window.wallsgenerator = function() {
    /* Create left wall object */
    CurrentWall = {
        x: 0,
        y: CurrentPlatform.y - 384,
        fx: 0,
        fy: 0,
        w: Wall.w,
        h: Wall.h,
        img: Wall.img,
    };

    /* Push currentwall into array */
    Wall.array.push(CurrentWall);

    /* Change loop value */
    Wall.lenght += 1;

    /* Check current wall y */
    if(CurrentWall.y <= Wall.highestposition) {
        Wall.highestposition = CurrentWall.y;
    }

    /* Create right wall object */
    CurrentWall = {
        x: Board.w - Wall.w,
        y: CurrentPlatform.y - 384,
        fx: 0,
        fy: 0,
        w: Wall.w,
        h: Wall.h,
        img: Wall.img,
    };

    /* Push currentwall into array */
    Wall.array.push(CurrentWall);

    /* Change loop value */
    Wall.lenght += 1;

    /* Check current wall y */
    if(CurrentWall.y <= Wall.highestposition) {
        Wall.highestposition = CurrentWall.y;
    }
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
    Platform.randomcount = Math.floor(Math.random() * Platform.available);

    /* Randomize platform chance */
    Platform.change = Math.floor(Math.random() * 4);

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
        if(Platform.randomplatform == 0 && Platform.firsttimer != 1 || Platform.randomplatform == 0 && Player.chance == 0) {
            /* Change platform statement */
            Platform.first = false;
        }
        else if(Platform.randomplatform == 0 && Platform.firsttimer == 1) {
            /* Make platform count longer */
            Platform.randomcount += 1;
        }

        /* Check if platform can be changed */
        if(Platform.randomplatform == 1 && Platform.secondtimer != 1 || Platform.randomplatform == 1 && Player.chance == 0) {
            /* Change platform statement */
            Platform.second = false;
        }
        else if(Platform.randomplatform == 1 && Platform.secondtimer == 1) {
            /* Make platform count longer */
            Platform.randomcount += 1;
        }

        /* Check if platform can be changed */
        if(Platform.randomplatform == 2 && Platform.thirdtimer != 1 || Platform.randomplatform == 2 && Player.chance == 0) {
            /* Change platform statement */
            Platform.third = false;
        }
        else if(Platform.randomplatform == 2 && Platform.thirdtimer == 1) {
            /* Make platform count longer */
            Platform.randomcount += 1;
        }

        /* Check if platform can be changed */
        if(Platform.randomplatform == 3 && Platform.fourthtimer != 1 || Platform.randomplatform == 3 && Player.chance == 0) {
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

    /* Check platform statement */
    if(!Platform.first || Platform.firstchanged) {
        /* Change timer and loop value */
        Platform.firsttimer += 1;
        Platform.firstchanged = false;
    }
    if(!Platform.second || Platform.secondchanged) {
        /* Change timer and loop value */
        Platform.secondtimer += 1;
        Platform.secondchanged = false;
    }
    if(!Platform.third || Platform.thirdchanged) {
        /* Change timer and loop value */
        Platform.thirdtimer += 1;
        Platform.thirdchanged = false;
    }
    if(!Platform.fourth || Platform.fourthchanged) {
        /* Change timer and loop value */
        Platform.fourthtimer += 1;
        Platform.fourthchanged = false;
    }

    while(Platform.loop <= Platform.count) {
        /* Check currentplatform count */
        if(Platform.currentcount == 0) {
            if(!Platform.first) {
                /* Create next platform */
                CurrentPlatform = {
                    x: ((Board.w / Platform.count) * Platform.loop) - 288,
                    y: Board.h - 432 * Platform.currentload - 480,
                    fx: 0,
                    fy: 0,
                    w: (Board.w / Platform.count) - Platform.w,
                    h: Platform.h,
                    img: Platform.img,
                    level: Platform.currentload + 1,
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
                    y: Board.h - 432 * Platform.currentload - 480,
                    fx: 0,
                    fy: 0,
                    w: (Board.w / Platform.count) + 16,
                    h: Platform.h,
                    img: Platform.img,
                    level: Platform.currentload + 1,
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
                    y: Board.h - 432 * Platform.currentload - 480,
                    fx: 0,
                    fy: 0,
                    w: (Board.w / Platform.count) - Platform.w,
                    h: Platform.h,
                    img: Platform.img,
                    level: Platform.currentload + 1,
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
                    y: Board.h - 432 * Platform.currentload - 480,
                    fx: 0,
                    fy: 0,
                    w: (Board.w / Platform.count) + 16,
                    h: Platform.h,
                    img: Platform.img,
                    level: Platform.currentload + 1,
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
                    y: Board.h - 432 * Platform.currentload - 480,
                    fx: 0,
                    fy: 0,
                    w: (Board.w / Platform.count) - Platform.w,
                    h: Platform.h,
                    img: Platform.img,
                    level: Platform.currentload + 1,
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
                    y: Board.h - 432 * Platform.currentload - 480,
                    fx: 0,
                    fy: 0,
                    w: (Board.w / Platform.count) + 16,
                    h: Platform.h,
                    img: Platform.img,
                    level: Platform.currentload + 1,
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
                    y: Board.h - 432 * Platform.currentload - 480,
                    fx: 0,
                    fy: 0,
                    w: (Board.w / Platform.count) - Platform.w,
                    h: Platform.h,
                    img: Platform.img,
                    level: Platform.currentload + 1,
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
                    y: Board.h - 432 * Platform.currentload - 480,
                    fx: 0,
                    fy: 0,
                    w: (Board.w / Platform.count) + 16,
                    h: Platform.h,
                    img: Platform.img,
                    level: Platform.currentload + 1,
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
                y: Board.h - 432 * Platform.currentload - 480,
                fx: 0,
                fy: 0,
                w: (Board.w / Platform.count) - Platform.w,
                h: Platform.h,
                img: Platform.img,
                level: Platform.currentload + 1,
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

        /* Push currentplatform into array */
        Platform.array.push(CurrentPlatform);

        /* Generate corners */
        window.cornersgenerator();

        /* Generate coins (and spikes) */
        window.coinsgenerator();

        /* Change loop value */
        Platform.loop += 1;
        Platform.currentcount += 1;
        Platform.lenght += 1;
    }

    /* Generate walls */
    window.wallsgenerator();

    /* Generate dispensers */
    window.dispensersgenerator();
}

