/* Uncreative Platformer made by CiupagaPL
 * GPL 3.0 (C) 2024 CiupagaPL */

/* Window corners generator update function */
window.updatecorners = function() {
    /* Generate next corner */
    if(CurrentCorner.y >= Board.h && !CurrentCorner.disabled) {
        /* Calculate corner h */
        CurrentCorner.y = Platform.highestposition;

        /* Disable corner */
        CurrentCorner.disabled = true;
    }
    else if(CurrentCorner.y < Board.h) {
        /* Enable corner */
        CurrentCorner.disabled = false;
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
        CurrentDispenser.y = Wall.highestposition + 364;

        /* Disable dispenser */
        CurrentDispenser.disabled = true;
    }
    else if(CurrentDispenser.y < Board.h) {
        /* Enable dispenser */
        CurrentDispenser.disabled = false;
    }
}

/* Window dispenserspike generator update function */
window.updatedispenserspikes = function() {
    /* Disable currentdispenserspike object from rendering */
    if(CurrentDispenserSpike.x >= Board.w || CurrentDispenserSpike.x + CurrentDispenserSpike.w <= 0) {
        CurrentDispenserSpike.used = true;
    }
    /* Generate next dispenserspike */
    if(CurrentDispenserSpike.y >= Board.h && !CurrentDispenserSpike.disabled) {
        /* Calculate dispenserspike h */
        CurrentDispenserSpike.y = Wall.highestposition + 364;

        /* Disable dispenserspike */
        CurrentDispenserSpike.disabled = true;
    }
    else if(CurrentWall.y < Board.h) {
        /* Enable dispenserspike */
        CurrentDispenserSpike.disabled = false;
    }
}

/* Window dispensercoins generator update function */
window.updatedispensercoins = function() {
    /* Disable currentdispensercoin object from rendering */
    if(CurrentDispenserCoin.x >= Board.w || CurrentDispenserCoin.x + CurrentDispenserCoin.w <= 0) {
        CurrentDispenserCoin.used = true;
    }
    /* Generate next dispensercoin */
    if(CurrentDispenserCoin.y >= Board.h && !CurrentDispenserCoin.disabled) {
        /* Calculate dispensercoin h */
        CurrentDispenserCoin.y = Wall.highestposition + 364;

        /* Disable dispensercoin */
        CurrentDispenserCoin.disabled = true;
    }
    else if(CurrentWall.y < Board.h) {
        /* Enable dispensercoin */
        CurrentDispenserCoin.disabled = false;
    }
}

/* Window lasers generator update function */
window.updatelasers = function() {
    /* Generate next laser */
    if(CurrentLaser.y >= Board.h && !CurrentLaser.disabled) {
        /* Calculate laser h */
        CurrentLaser.y = Platform.highestposition;

        /* Disable laser */
        CurrentLaser.disabled = true;
    }
    else if(CurrentLaser.y < Board.h) {
        /* Enable laser */
        CurrentLaser.disabled = false;
    }
}

/* Window laserspikes generator update function */
window.updatelaserspikes = function() {
    /* Generate next laserspike */
    if(CurrentLaserSpike.y >= Board.h && !CurrentLaserSpike.disabled) {
        /* Calculate laserspike h */
        CurrentLaserSpike.y = Platform.highestposition;

        /* Disable laser */
        CurrentLaserSpike.disabled = true;
    }
    else if(CurrentLaserSpike.y < Board.h) {
        /* Enable laserspike */
        CurrentLaserSpike.disabled = false;
    }
}

/* Window lasercoins generator update function */
window.updatelasercoins = function() {
    /* Generate next lasercoin */
    if(CurrentLaserCoin.y >= Board.h && !CurrentLaserCoin.disabled) {
        /* Calculate lasercoin h */
        CurrentLaserCoin.y = Platform.highestposition;

        /* Disable laser */
        CurrentLaser.disabled = true;
    }
    else if(CurrentLaserCoin.y < Board.h) {
        /* Enable lasercoin */
        CurrentLaserCoin.disabled = false;
    }
}

/* Window walls generator update function */
window.updatewalls = function() {
    /* Generate next wall */
    if(CurrentWall.y >= Board.h && !CurrentWall.disabled) {
        /* Calculate wall h */
        CurrentWall.y = Wall.highestposition + 364;

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

        /* Limit spawn */
        if(CurrentPlatform.level <= 25) {
            /* Generate lasers */
            window.lasersgenerator();

            /* Generate laserspikes */
            window.laserspikesgenerator();

            /* Generate lasercoins */
            window.lasercoinsgenerator();
        }
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

        /* Limit spawn */
        if(CurrentPlatform.level <= 25) {
            /* Generate lasers */
            window.lasersgenerator();
        }
    }
}

/* Window spikes generator function */
window.spikesgenerator = function() {
    /* Create currentspike object */
    CurrentSpike = {
        x: 384 * Coin.count1 + 64,
        y: CurrentPlatform.y - Spike.h - 32,
        fx: 0,
        fy: 0,
        w: Spike.w,
        h: Spike.h,
        img: Spike.img1,
        disabled: false,
        used: false,
        rotated: false,
    };

    /* Push currentspike into array */
    Spike.array.push(CurrentSpike);

    /* Change value of loop */
    Spike.lenght += 1;
    Coin.positionlenght += 1;
    Coin.count1 -= 1;

    /* Disable currentspike with bad x */
    if(!CurrentPlatform.first && CurrentSpike.x + CurrentSpike.w > Coin.firstcalc - 256 && CurrentSpike.x + CurrentSpike.w < Coin.firstcalc) {
        CurrentSpike.used = true;
    }
    if(!CurrentPlatform.second && CurrentSpike.x + CurrentSpike.w > Coin.secondcalc - 256 && CurrentSpike.x + CurrentSpike.w < Coin.secondcalc) {
        CurrentSpike.used = true;
    }
    if(!CurrentPlatform.third && CurrentSpike.x + CurrentSpike.w > Coin.thirdcalc - 256 && CurrentSpike.x + CurrentSpike.w < Coin.thirdcalc) {
        CurrentSpike.used = true;
    }
    if(!CurrentPlatform.fourth && CurrentSpike.x + CurrentSpike.w > Coin.fourthcalc - 256 && CurrentSpike.x + CurrentSpike.w < Coin.fourthcalc) {
        CurrentSpike.used = true;
    }
}

/* Window coins generator function */
window.coinsgenerator = function() {
    /* Randomize coins count */
    Coin.count1 = Math.floor((Board.w - 128) / 384);
    Coin.count2 = Coin.count1;

    /* Calculate platform positions for coin */
    Coin.firstcalc = (Board.w / Platform.count) - 220;
    Coin.secondcalc = ((Board.w / Platform.count) * 2) - 220;
    Coin.thirdcalc = ((Board.w / Platform.count) * 3) - 220;
    Coin.fourthcalc = ((Board.w / Platform.count) * 4) - 220;

    /* Check coin count */
    while(Coin.count1 >= 0 && Coin.count2 >= 0) {
        /* Select random number */
        Coin.random = Math.floor(Math.random() * 2);
        if(Coin.break != 0) {
            Coin.random = 1;
            Coin.break += 1;
            if(Coin.break == 2) {
                Coin.break = 0;
            }
        }

        if(Coin.random != 0) {
            /* Create currentcoin object */
            CurrentCoin = {
                x: 384 * Coin.count1 + 64,
                y: CurrentPlatform.y - Coin.h - 32,
                fx: 0,
                fy: 0,
                w: Coin.w,
                h: Coin.h,
                img: Coin.img1,
                disabled: false,
                used: false,
                rotated: false,
            };

            /* Push currentcoin into array */
            Coin.array.push(CurrentCoin);

            /* Change value of loop */
            Coin.lenght += 1;
            Coin.count1 -= 1;

            /* Disable currentcoin with bad x */
            if(!CurrentPlatform.first && CurrentCoin.x + CurrentCoin.w > Coin.firstcalc - 256 && CurrentCoin.x + CurrentCoin.w < Coin.firstcalc) {
                CurrentCoin.used = true;
            }
            if(!CurrentPlatform.second && CurrentCoin.x + CurrentCoin.w > Coin.secondcalc - 256 && CurrentCoin.x + CurrentCoin.w < Coin.secondcalc) {
                CurrentCoin.used = true;
            }
            if(!CurrentPlatform.third && CurrentCoin.x + CurrentCoin.w > Coin.thirdcalc - 256 && CurrentCoin.x + CurrentCoin.w < Coin.thirdcalc) {
                CurrentCoin.used = true;
            }
            if(!CurrentPlatform.fourth && CurrentCoin.x + CurrentCoin.w > Coin.fourthcalc - 256 && CurrentCoin.x + CurrentCoin.w < Coin.fourthcalc) {
                CurrentCoin.used = true;
            }
        }
        else if(Coin.random == 0) {
            window.spikesgenerator();
        }

        if(Coin.loop) {
            /* Create currentcoin object */
            CurrentCoin = {
                x: 384 * Coin.count2 + 64,
                y: CurrentPlatform.y - Coin.h + 32 + 124,
                fx: 0,
                fy: 0,
                w: Coin.w,
                h: Coin.h,
                img: Coin.img4,
                disabled: false,
                used: false,
                rotated: true,
            };

            /* Push currentcoin into array */
            Coin.array.push(CurrentCoin);

            /* Change value of loop */
            Coin.lenght += 1;
            Coin.count2 -= 1;

            /* Disable currentcoin with bad x */
            if(!CurrentPlatform.first && CurrentCoin.x + CurrentCoin.w > Coin.firstcalc - 256 && CurrentCoin.x + CurrentCoin.w < Coin.firstcalc) {
                CurrentCoin.used = true;
            }
            if(!CurrentPlatform.second && CurrentCoin.x + CurrentCoin.w > Coin.secondcalc - 256 && CurrentCoin.x + CurrentCoin.w < Coin.secondcalc) {
                CurrentCoin.used = true;
            }
            if(!CurrentPlatform.third && CurrentCoin.x + CurrentCoin.w > Coin.thirdcalc - 256 && CurrentCoin.x + CurrentCoin.w < Coin.thirdcalc) {
                CurrentCoin.used = true;
            }
            if(!CurrentPlatform.fourth && CurrentCoin.x + CurrentCoin.w > Coin.fourthcalc - 256 && CurrentCoin.x + CurrentCoin.w < Coin.fourthcalc) {
                CurrentCoin.used = true;
            }
        }
    }

    /* Change loop value */
    Coin.loop = true;
}

/* Window dispensers generating function */
window.dispensersgenerator = function() {
    /* Randomize dispenser site */
    Dispenser.side = Math.floor(Math.random() * 2);

    /* Check side */
    if(Dispenser.side == 0) {
        /* Create left dispenser object */
        CurrentDispenser = {
            x: Wall.w,
            y: CurrentPlatform.y - 182 - (Dispenser.h / 2),
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
            y: CurrentPlatform.y - 182 - (Dispenser.h / 2),
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

/* Window dispenserspikes generator function */
window.dispenserspikesgenerator = function() {
    /* Check if currentdispenser is left */
    if(CurrentDispenser.left) {
        /* Create currentdispenserspike object */
        CurrentDispenserSpike = {
            x: 0,
            y: CurrentPlatform.y - 182 - (Dispenser.h / 2),
            fx: 0,
            fy: 0,
            w: DispenserSpike.w,
            h: DispenserSpike.h,
            img: DispenserSpike.imgleft1,
            left: true,
            used: true,
            disabled: false,
            chance: 0,
        };

        /* Push currentdispenserspike into array */
        DispenserSpike.array.push(CurrentDispenserSpike);

        /* Change loop value */
        DispenserSpike.lenght += 1;
    }
    else if(!CurrentDispenser.left) {
        /* Create currentdispenserspike object */
        CurrentDispenserSpike = {
            x: Board.w - DispenserSpike.w,
            y: CurrentPlatform.y - 182 - (Dispenser.h / 2),
            fx: 0,
            fy: 0,
            w: DispenserSpike.w,
            h: DispenserSpike.h,
            img: DispenserSpike.imgleft4,
            left: false,
            used: true,
            disabled: false,
            chance: 0,
        };

        /* Push currentdispenserspike into array */
        DispenserSpike.array.push(CurrentDispenserSpike);

        /* Change loop value */
        DispenserSpike.lenght += 1;
    }
}

/* Window dispensercoins generator function */
window.dispensercoinsgenerator = function() {
    /* Check if currentdispenser is left */
    if(CurrentDispenser.left) {
        /* Create currentdispensercoin object */
        CurrentDispenserCoin = {
            x: Wall.w + DispenserCoin.w,
            y: CurrentPlatform.y - 182 - (Dispenser.h / 2),
            fx: 0,
            fy: 0,
            w: DispenserCoin.w,
            h: DispenserCoin.h,
            img: DispenserCoin.imgleft1,
            left: true,
            used: true,
            disabled: false,
        };

        /* Push currentdispensercoin into array */
        DispenserCoin.array.push(CurrentDispenserCoin);

        /* Change loop value */
        DispenserCoin.lenght += 1;
    }
    else if(!CurrentDispenser.left) {
        /* Create currentdispensercoin object */
        CurrentDispenserCoin = {
            x: Board.w - DispenserCoin.w - Wall.w,
            y: CurrentPlatform.y - 182 - (Dispenser.h / 2),
            fx: 0,
            fy: 0,
            w: DispenserCoin.w,
            h: DispenserCoin.h,
            img: DispenserCoin.imgleft4,
            left: false,
            used: true,
            disabled: false,
        };

        /* Push currentdispensercoin into array */
        DispenserCoin.array.push(CurrentDispenserCoin);

        /* Change loop value */
        DispenserCoin.lenght += 1;
    }
}

/* Window lasers generator function */
window.lasersgenerator = function() {
    /* Check if corner exists */
    if(CurrentCorner.left) {
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
    else if(!CurrentCorner.left) {
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
}

/* Window laserpsikes generator function */
window.laserspikesgenerator = function() {
    /* Create currentlaserspike object */
    CurrentLaserSpike = {
        x: CurrentLaser.x - Platform.w + 44,
        y: CurrentLaser.y + 12,
        fx: 0,
        fy: 0,
        w: LaserSpike.w,
        h: LaserSpike.h,
        img: LaserSpike.img1,
        used: true,
        disabled: false,
        chance: 0,
    };

    /* Push currentlaserspike into array */
    LaserSpike.array.push(CurrentLaserSpike);

    /* Change loop value */
    LaserSpike.lenght += 1;
}

/* Window lasercoins generator function */
window.lasercoinsgenerator = function() {
    /* Create currentlasercoin object */
    CurrentLaserCoin = {
        x: CurrentLaser.x - Platform.w + 44,
        y: CurrentLaser.y + 12,
        fx: 0,
        fy: 0,
        w: LaserCoin.w,
        h: LaserCoin.h,
        img: LaserCoin.img1,
        used: true,
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
        y: CurrentPlatform.y - 364,
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
        y: CurrentPlatform.y - 364,
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
    if(Platform.randomcount == Platform.count - 1) {
        Platform.randomcount -= 1;
    }

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
                    x: ((Board.w / Platform.count) * Platform.loop) - 220,
                    y: Board.h - 412 * Platform.currentload - 460,
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
                    first: false,
                    second: false,
                    third: false,
                    fourth: false,
                };
            }
            else if(Platform.first) {
                /* Create next platform */
                CurrentPlatform = {
                    x: ((Board.w / Platform.count) * Platform.loop) - 220,
                    y: Board.h - 412 * Platform.currentload - 460,
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
                    first: true,
                    second: false,
                    third: false,
                    fourth: false,
                };
            }
        }
        if(Platform.currentcount == 1) {
            if(!Platform.second) {
                /* Create next platform */
                CurrentPlatform = {
                    x: ((Board.w / Platform.count) * Platform.loop) - 220,
                    y: Board.h - 412 * Platform.currentload - 460,
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
                    first: false,
                    second: false,
                    third: false,
                    fourth: false,
                };
            }
            else if(Platform.second) {
                /* Create next platform */
                CurrentPlatform = {
                    x: ((Board.w / Platform.count) * Platform.loop) - 220,
                    y: Board.h - 412 * Platform.currentload - 460,
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
                    first: false,
                    second: true,
                    third: false,
                    fourth: false,
                };
            }
            if(Platform.first) {
                /* Disable left corner */
                CurrentPlatform.left = false;
                CurrentPlatform.first = true;
            }
        }
        if(Platform.currentcount == 2) {
            if(!Platform.third) {
                /* Create next platform */
                CurrentPlatform = {
                    x: ((Board.w / Platform.count) * Platform.loop) - 220,
                    y: Board.h - 412 * Platform.currentload - 460,
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
                    first: false,
                    second: false,
                    third: false,
                    fourth: false,
                };
            }
            else if(Platform.third) {
                /* Create next platform */
                CurrentPlatform = {
                    x: ((Board.w / Platform.count) * Platform.loop) - 220,
                    y: Board.h - 412 * Platform.currentload - 460,
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
                    first: false,
                    second: false,
                    third: true,
                    fourth: false,
                };
            }
            if(Platform.second) {
                /* Disable left corner */
                CurrentPlatform.left = false;
                CurrentPlatform.second = true;
            }
            if(Platform.first) {
                CurrentPlatform.first = true;
            }
        }
        if(Platform.currentcount == 3) {
            if(!Platform.fourth) {
                /* Create next platform */
                CurrentPlatform = {
                    x: ((Board.w / Platform.count) * Platform.loop) - 220,
                    y: Board.h - 412 * Platform.currentload - 460,
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
                    first: false,
                    second: false,
                    third: false,
                    fourth: false,
                };
            }
            else if(Platform.fourth) {
                /* Create next platform */
                CurrentPlatform = {
                    x: ((Board.w / Platform.count) * Platform.loop) - 220,
                    y: Board.h - 412 * Platform.currentload - 460,
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
                    first: false,
                    second: false,
                    third: false,
                    fourth: true,
                };
            }
            if(Platform.third) {
                /* Disable left corner */
                CurrentPlatform.left = false;
                CurrentPlatform.third = true;
            }
            if(Platform.second) {
                CurrentPlatform.second = true;
            }
            if(Platform.first) {
                CurrentPlatform.first = true;
            }
        }
        if(Platform.currentcount == 4) {
            /* Create next platform */
            CurrentPlatform = {
                x: ((Board.w / Platform.count) * Platform.loop) - 220,
                y: Board.h - 412 * Platform.currentload - 460,
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
                first: false,
                second: false,
                third: false,
                fourth: false,
            };
            if(Platform.fourth) {
                /* Disable left corner */
                CurrentPlatform.left = false;
                CurrentPlatform.fourth = true;
            }
            if(Platform.third) {
                CurrentPlatform.third = true;
            }
            if(Platform.second) {
                CurrentPlatform.second = true;
            }
            if(Platform.first) {
                CurrentPlatform.first = true;
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

        /* Change loop value */
        Platform.loop += 1;
        Platform.currentcount += 1;
        Platform.lenght += 1;
    }

    /* Generate walls */
    window.wallsgenerator();

    /* Generate coins (and spikes) */
    window.coinsgenerator();

    /* Generate dispensers */
    window.dispensersgenerator();

    /* Generate dispenserspikes */
    window.dispenserspikesgenerator();

    /* Generate dispensercoins */
    window.dispensercoinsgenerator();
}

