void setup() {
  size(800, 800);
}


var x = 5;
var y = 351;
var c1 = -60;
var name = "Player";

//level for debugging only
var level = 0;
//working on
var levelSelect = false;
var pause = false;
//done
var jt = 0;
var version = "Alpha 0.1.5";
var titleSize = 20;
var r1 = 0;
var WhatsNew = false;
var optionsScreen = false;
    
    var options = {
sky: true,
FancyGraphics: true,
mobile: false,
cheats: false
};
var functions = [];
var mPressed;
var cheat = false;
var t1 = 0;
//logo var
var x1=6000;
var c1=0;
//40
var x2=800;
var ltime=0;
var b1=0;
var b2=255;
var b3=255;
var functions = [];
var titleT=0;
var tsizeTitle=60;
var tsize2=60;
var herp=0;
var fill1=255;
var fill2=255;
var m =0;
var game = function() {
/*
*for changelog, please see Whats New in menu
*Created by Downpour Games
*/


var PlayerX = 5;
var PlayerY = 351;
var c1 = -60;
var name = "Player";
var gravity = true;
//level for debugging only
var level = 0;
//working on
var levelSelect = false;
var pause = false;
//done
var jt = 0;
var version = "Alpha 0.5.2";
var titleSize = 20;
var r1 = 0;
var WhatsNew = false;
var optionsScreen = false;
    
    var options = {
sky: true,
FancyGraphics: true,
mobile: false,
cheats: false
};
var functions = [];
var mPressed;
var cheat = false;
var t1 = 0;
var platformOn=false;
var switchFlipped=false;
var portal = function(x,y) {
    fill(random(0,255),random(0,255),random(0,255));
    if(options.FancyGraphics===false) {
        fill(random(1,255));
    }
    rect(x,y,50,50,30);
    
    if(PlayerX>x&&PlayerX<x+50&&PlayerY>y&&PlayerY<y+50) {
        level = level+1;
        PlayerX=30;
        PlayerY=340;
    }
};
var lever = function(x,y,l) {
fill(0, 0, 0);
if(switchFlipped===false) {
rect(x+7,y-5,2,5);
} if(switchFlipped===true) {
rect(x+7,y-1,2,5);
}
fill(110, 110, 110);
rect(x,y,15,5);
if(PlayerX>x&&PlayerX<x+15&&PlayerY>y-l&&PlayerY<y) {
    switchFlipped=true;
} else {
    switchFlipped=false;
}

};
var platform = function(x1,y1,l1,w1) {
    fill(0, 0, 0);
rect(x1,y1,l1,w1);
if(PlayerX>x1&&PlayerX<x1+l1&&PlayerY>y1-30&&PlayerY<y1) {
    platformOn=true;
    PlayerY = y1-30;
} else {
    platformOn=false;
}
noStroke();
};
var platform2 = function(x2,y2,l2,w2) {
    fill(0, 0, 0);
rect(x2,y2,l2,w2);
if(PlayerX>x2&&PlayerX<x2+l2&&PlayerY>y2-30&&PlayerY<y2) {
    gravity = false;
    platformOn=true;
} else {
    gravity = true;
    platformOn=false;
}
noStroke();
};
var platform3 = function(x,y,l,w) {
    fill(0, 0, 0);
    if(platformOn===true) {
    //stroke(247, 247, 247);
    }
rect(x,y,l,w);
if(PlayerX>x&&PlayerX<x+l&&PlayerY>y-30&&PlayerY<y) {
    gravity = false;
    platformOn=true;
} else {
    gravity = true;
    platformOn=false;
}
noStroke();
};
var platform4 = function(x,y,l,w) {
    fill(0, 0, 0);
    if(platformOn===true) {
    //stroke(247, 247, 247);
    }
rect(x,y,l,w);
if(PlayerX>x&&PlayerX<x+l&&PlayerY>y-30&&PlayerY<y) {
    gravity = false;
    platformOn=true;
} else {
    gravity = true;
    platformOn=false;
}
noStroke();
};
var levitation = function(x5,y5,l,w) {
    fill(0, 0, 0);
    if(platformOn===true) {
    stroke(247, 247, 247);
    }
rect(x5,y5,l,w);
if(PlayerX>x5&&PlayerX<x5+l&&PlayerY>y5-300&&PlayerY<y5) {
    //gravity = false;
    platformOn=true;
    PlayerY=PlayerY-3.5;
} else{
    //gravity = true;
    platformOn=false;
}
noStroke();
};
     draw = function() {
        var pauseButton = function() {
    fill(181, 181, 181);
    if(mouseX>340&&mouseX<390&&mouseY>5&&mouseY<25) {
        fill(31, 31, 31);
    }
    rect(340,5,50,20);
    if(mouseIsPressed&&mouseX>340&&mouseX<390&&mouseY>5&&mouseY<25) {
        pause = true;
    }
    
    fill(255, 255, 255);
    text("Pause",344,15);
};
    
    //character
    var character = function() {
        if(options.sky===true) {
        fill(255, 217, 0);
        noStroke();
        ellipse(10,10,50,50);
        fill(255, 255, 255);
        c1=c1+1;
        if(c1>400) {
            c1 = -60;
        }
        rect(c1,50,60,20,random(1,10));
        rect(c1+90,50,60,20,random(1,10));
        rect(c1+30,20,60,20,random(1,10));
        }
        if(options.FancyGraphics === true) {
        stroke(0, 0, 0);
        
    noStroke();
    
    fill(230, 242, 126);
    rect(PlayerX,PlayerY,10,10);
    fill(255, 0, 0);
    rect(PlayerX+1,PlayerY+10,8,10);
    fill(0, 98, 255);
    rect(PlayerX+2,PlayerY+20,6,10);
    fill(230, 242, 126);
    rect(PlayerX+3.4,PlayerY+11,3,8);
    
        } else if(options.FancyGraphics === false) {
            background(201, 201, 201);
            if(options.sky===true&&options.FancyGraphics === false) {
                
        fill(219, 219, 219);
        noStroke();
        rect(0,0,50,50);
        fill(245, 245, 245);
        c1=c1+1;
        if(c1>400) {
            c1 = -60;
        }
        rect(c1,50,60,20);
        rect(c1+90,50,60,20);
        rect(c1+30,20,60,20);
        }
        fill(79, 79, 79);
    noStroke();
    rect(-1,370,600,30);
        fill(128, 128, 128);
        rect(PlayerX,PlayerY,20,20);
        
        
    }
    };
    //controls
    if(level>0) {
    if(keyIsPressed&&keyCode===RIGHT) {
        PlayerX=PlayerX+1;

    }
    if(keyIsPressed&&keyCode===LEFT) {
        PlayerX=PlayerX-1;
        
        
    }
    if(level===1&&level>2) {
    if(keyIsPressed&&keyCode===UP) {
        PlayerY=PlayerY-1;
        
        
    } 
    } else if(PlayerY<355&&gravity === true) {
        PlayerY=PlayerY+1;
    }
    var fall = function() {
        
    };
    }
    var message = "Alpha";
    
    //game
    
    //title
    if(level === 0) {
        textAlign(LEFT,CENTER);
        frameRate(60);
        textSize(50);
        background(87, 255, 249);
        fill(106, 255, 61);
        rect(-1,370,600,30);
        character();
        
        fill(random(250,255), random(100,255), random(100,255));
        if(options.FancyGraphics===false) {
            fill(random(1,255));
        }
        text("Puzzle Game",50,83);
        
        
        fill(17, 0, 255);
        if(options.FancyGraphics===false) {
            fill(94, 94, 94);
        }
        //title message
        textSize(titleSize);
        titleSize = titleSize + 0.2;
        if(titleSize > 25) {
            titleSize = 20;
        }
        
        rotate(-15);
        text(message,277,190);
        rotate(15);
        noFill();
        stroke(0, 0, 0);
        textSize(12);
        //play
        if(mouseX>157&&mouseY>179&&mouseY<209&&mouseX<227) {
            fill(86, 60, 252);
            if(options.FancyGraphics===false){
                    fill(82, 82, 82);
                }
        } else {
            fill(255, 255, 255);
        }
        rect(157,179,70,30);
        if(mouseIsPressed&&mouseX>157&&mouseY>179&&mouseY<209&&mouseX<227&&WhatsNew===false&&optionsScreen===false) {
            if(options.cheats===true) {
                cheat=true;
            }
            if(options.cheats===false) {
            level=1;
            PlayerX=5;
            }
        }
        fill(0, 0, 0);
        text("Play",179,199);
        //options
        fill(255, 255, 255);
        
        //
        if(mouseX>157&&mouseY>229&&mouseY<259&&mouseX<227) {
            fill(86, 60, 252);
            if(options.FancyGraphics===false){
                    fill(82, 82, 82);
                }
        }
        rect(157,229,70,30);
        if(mouseIsPressed&&mouseX>157&&mouseY>229&&mouseY<259&&mouseX<227&&WhatsNew===false) {
            optionsScreen = true;
        }
        //whats new
        fill(255, 255, 255);
        if(mouseX>157&&mouseY>280&&mouseY<310&&mouseX<227) {
            fill(86, 60, 252);
            if(options.FancyGraphics===false){
                    fill(82, 82, 82);
                }
        }
        rect(157,280,70,30);
        if(mouseIsPressed&&mouseX>157&&mouseY>280&&mouseY<310&&mouseX<227) {
            WhatsNew = true;
        }
        
        //rest
        fill(0, 0, 0);
        text("Options",172,249);
        text("Whats New",161,300);
        textSize(12);
        //rotate(r1);
        noStroke();
        fill(0, 0, 0);
        text(version,5,390);
        fill(random(0,255),random(0,255),random(0,255));
        if(options.FancyGraphics===false) {
        fill(random(0,255));
        }
    rect(340,337,50,50,30);
    
    rotate(-r1);
    fill(0, 0, 0);
    text(version,5,390);
    if(PlayerX<340) {
    PlayerX=PlayerX+1;
    
    } if(PlayerX>=340) {
        r1=r1+0;
        if(r1 === 0) {
            r1 = 0;
            PlayerX = 5;
        }
    }
    fill(0, 0, 0);
    
    }
    //whats new
    if(WhatsNew === true) {
        background(87, 255, 249);
        fill(106, 255, 61);
        rect(-1,370,600,30);
        character();
        fill(random(0,255),random(0,255),random(0,255));
        if(options.FancyGraphics===false) {
        fill(random(0,255));
        }
    rect(340,337,50,50,30);
        fill(255, 255, 255);
        if(mouseX>170&&mouseX<235&&mouseY>350&&mouseY<397) {
                fill(86, 60, 252);
            if(options.FancyGraphics===false){
                    fill(82, 82, 82);
                }
        }
            stroke(0, 0, 0);
            rect(170,350,60,30);
            fill(0, 0, 0);
            text("Back",188,367);
            if(mouseIsPressed&&mouseX>170&&mouseX<235&&mouseY>350&&mouseY<397) {
            WhatsNew = false;
            
        }
        fill(0, 0, 0);
        textSize(20);
        text("Whats New!",140,20);
        textSize(12);
        text("version : " + version,5,15);
        text("mobile : " + options.mobile,5,25);
        fill(255, 255, 255);
        rect(10,40,380,300);
        fill(0, 0, 0);
        text("-Alpha 0.5.2 \n *Level 4 now has second part(Incomplete)\n-Alpha 0.5.1 \n *Level 3 now passable \n *Game code is much more efficient\n *slightly updated graphics\n *Runs faster on most computers",20,100);
    }
    //whats new
    if(cheat === true) {
        t1 = t1 +1;
        background(0, 0, 0);
        fill(255, 0, 0);
        textSize(30);
        text("Warning: Cheats are enabled",7,200);
        textSize(12);
        fill(255, 255, 255);
        text("Click anywhere to continue",130,240);
        if(mouseIsPressed&& t1 > 20) {
            
            levelSelect=true;
        }
        if(levelSelect === true) {
        background(87, 255, 249);
        fill(106, 255, 61);
        rect(-1,370,600,30);
        character();
        fill(random(0,255),random(0,255),random(0,255));
        if(options.FancyGraphics===false) {
        fill(random(0,255));
        }
    rect(340,337,50,50,30);
        textSize(20);
        fill(0, 0, 0);
        text("Level Select",140,10);
        fill(99, 99, 99);
        rect(30,30,340,300);
        //level 1
        fill(255, 255, 255);
        if(mouseX>75&&mouseX<125&&mouseY>60&&mouseY<110) {
            fill(86, 60, 252);
            if(options.FancyGraphics===false){
                    fill(82, 82, 82);
                }
        }
        if(mouseIsPressed&&mouseX>75&&mouseX<125&&mouseY>60&&mouseY<110) {
            fill(0, 0, 0);
            PlayerX=5;
            level = 1;
           
        }
        rect(75,60,50,50);
        fill(0, 0, 0);
        textSize(12);
        text("Level 1",81,80);
        //level 2
        fill(255, 255, 255);
        if(mouseX>175&&mouseX<225&&mouseY>60&&mouseY<110) {
            fill(86, 60, 252);
            if(options.FancyGraphics===false){
                    fill(82, 82, 82);
                }
        }
        if(mouseIsPressed&&mouseX>175&&mouseX<225&&mouseY>60&&mouseY<110) {
            fill(0, 0, 0);
            PlayerX=5;
            level = 2;
           
        }
        rect(175,60,50,50);
        
        fill(0, 0, 0);
        textSize(12);
        text("Level 2",180,80);
        //level 3
        fill(255, 255, 255);
        if(mouseX>275&&mouseX<325&&mouseY>60&&mouseY<110) {
            fill(86, 60, 252);
            if(options.FancyGraphics===false){
                    fill(82, 82, 82);
                }
        }
        if(mouseIsPressed&&mouseX>275&&mouseX<325&&mouseY>60&&mouseY<110) {
            fill(0, 0, 0);
            PlayerX=5;
            level = 3;
           
        }
        rect(275,60,50,50);
        
        fill(0, 0, 0);
        textSize(12);
        text("Level 3",280,80);
        //level 4
        fill(255, 255, 255);
        if(mouseX>75&&mouseX<125&&mouseY>130&&mouseY<180) {
            fill(86, 60, 252);
            if(options.FancyGraphics===false){
                    fill(82, 82, 82);
                }
        }
        if(mouseIsPressed&&mouseX>75&&mouseX<125&&mouseY>130&&mouseY<180) {
            fill(0, 0, 0);
            PlayerX=5;
            level = 4;
           
        }
        rect(75,130,50,50);
        
        fill(0, 0, 0);
        textSize(12);
        text("Level 4",80,150);
        }
        
    }   
    //completed levels
    if(level === 1) {
        frameRate(60);
    textSize(15);
    background(87, 255, 249);
    fill(106, 255, 61);
    rect(-1,370,600,30);
    character();
    fill(0, 0, 0);
    text("Level 1",5,15);
    portal(340,340);
    pauseButton();
    }
    if(level === 2) {
        background(87, 255, 249);
        textSize(15);
        fill(106, 255, 61);
        rect(-1,370,600,30);
    character();
    fill(0, 0, 0);
    text("Level 2",5,15);
    portal(340,31);
    //1st levitator
    fill(0, 0, 0);
    rect(10,380,40,10);
    if(PlayerX>10&&PlayerX<50&&PlayerY<360) {
        PlayerY=PlayerY-2;
    }
    //2nd levitator
    fill(0, 0, 0);
    rect(165,280,40,10);
    if(PlayerX>165&&PlayerX<205&&PlayerY<280) {
        PlayerY=PlayerY-2;
    }
    //3rd levitator
    fill(0, 0, 0);
    rect(305,200,40,10);
    if(PlayerX>305&&PlayerX<345&&PlayerY<200) {
        PlayerY=PlayerY-2;
    }
    if(keyIsPressed&&keyCode===DOWN) {
        PlayerY=PlayerY+2;
    } //y=370;
    //}
    }
    //working on
    if(level === 3) {
        
        background(87, 255, 249);
        textSize(15);
        fill(106, 255, 61);
        rect(-1,370,600,30);
    character();
    fill(0, 0, 0);
    text("Level 3",5,15);
    frameRate(60);
    portal(5,50);
    platform(250,200,50,10);
    if(PlayerX>250&&PlayerX<300&&PlayerY<50&&PlayerY>21) {
        PlayerY=PlayerY-2;
    }
    levitation(100,330,50,10);
    if(PlayerX>100&&PlayerX<150&&PlayerY<150&&PlayerY>10) {
        PlayerY=PlayerY-2;
    }
    lever(350,385,385);
    if(switchFlipped===true) {
        PlayerY=PlayerY-2.5;
    } else if(switchFlipped&&PlayerY>355) {
        PlayerY=PlayerY+2;
    }
    }
    if(level === 4) {
        background(20, 20, 20);
        options.sky=false;
        fill(17, 51, 0);
        rect(-1,370,600,30);
        //moon
            fill(240, 240, 240);
            ellipse(30,30,50,50);
            fill(99, 99, 99);
            ellipse(40,40,5,5);
            ellipse(20,14,5,5);
            ellipse(30,20,3,3);
            ellipse(20,30,2,2);
            ellipse(46,29,2,2);
            ellipse(32,35,3,3);
            ellipse(26,50,4,4);
        //background
        fill(48, 29, 0);
        rect(300,295,110,90);
        fill(10, 3, 0);
        //door
        rect(340,335,30,50);
        fill(230,255,0,20);
        arc(370,359,10,10,90,270);
        
        arc(370,359,15,15,90,270);
        
        character();
        if(PlayerX>340&&PlayerX<370) {
            level = 4.1;
        }
            //level
                
                
                
    }
    if(level === 4.1) {
        background(48, 29, 0);
        fill(92, 55, 0);
        rect(-1,370,600,30);
        character();
        portal(10,10);
        
        
        
        pauseButton();
    }
    if(pause === true) {
        options.sky = false;
        background(87, 255, 249);
        fill(106, 255, 61);
        rect(-1,370,600,30);
        character();
        PlayerX = 20;
        PlayerY = 355;
        fill(0, 0, 0);
        text("Pause Menu",7,12);
        fill(255, 255, 255);
        if(mouseX>100&&mouseX<300&&mouseY>50&&mouseY<80) {
            fill(204, 204, 204);
        }
        rect(100,50,200,30);
        
        fill(255, 255, 255);
        if(mouseX>100&&mouseX<300&&mouseY>100&&mouseY<130) {
            fill(204, 204, 204);
        }
        rect(100,100,200,30);
        fill(255, 255, 255);
        if(mouseX>100&&mouseX<300&&mouseY>140&&mouseY<180) {
            fill(204, 204, 204);
        }
        rect(100,140,200,30);
        if(mouseIsPressed&&mouseX>100&&mouseX<300&&mouseY>50&&mouseY<80) {
            options.sky = true;
            pause = false;
        }
        if(optionsScreen === false&&mouseIsPressed&&mouseX>100&&mouseX<300&&mouseY>100&&mouseY<130) {
            options.sky = true;
            optionsScreen=true;
            //pause = false;
        }
        if(mouseIsPressed&&mouseX>100&&mouseX<300&&mouseY>100&&mouseY<130) {
            options.sky = true;
            optionsScreen=true;
            //pause = false;
        }
        if(optionsScreen===false&&mouseIsPressed&&mouseX>100&&mouseX<300&&mouseY>140&&mouseY<180) {
            level=0;
            pause = false;
            options.sky=true;
            
        }
        fill(0, 0, 0);
        text("Resume",173,62);
        text("Options",173,120);
        text("Main Menu",173,160);
    }
    //options screen
    if(optionsScreen === true) {
        WhatsNew=false;
            //background(51, 51, 51);
            background(87, 255, 249);
            fill(106, 255, 61);
        rect(-1,370,600,30);
        character();
        fill(random(0,255),random(0,255),random(0,255));
        if(options.FancyGraphics===false) {
        fill(random(0,255));
        }
    rect(340,337,50,50,30);
            fill(0, 0, 0);
            textSize(20);
            textAlign(CENTER,CENTER);
            text("Options",200,15);
            textSize(12);
            textAlign(CENTER,CENTER);
            fill(255, 255, 255);
            //sky
            if(mouseX>140&&mouseX<260&&mouseY>30&&mouseY<60) {
                fill(86, 60, 252);
            if(options.FancyGraphics===false){
                    fill(82, 82, 82);
                }
        }
        if(mouseIsPressed&&mouseX>140&&mouseX<260&&mouseY>30&&mouseY<60) {
                options.sky=options.sky?false:true;
                mouseIsPressed=false;
        }
        stroke(0, 0, 0);
            rect(140,30,120,30);
            //FancyGraphics
            fill(255, 255, 255);
            if(mouseX>140&&mouseX<260&&mouseY>70&&mouseY<100) {
                fill(86, 60, 252);
            if(options.FancyGraphics===false){
                    fill(82, 82, 82);
                }
        }
        if(mouseIsPressed&&mouseX>140&&mouseX<260&&mouseY>70&&mouseY<100) {
                options.FancyGraphics=options.FancyGraphics?false:true;
                mouseIsPressed=false;
        }
        stroke(0, 0, 0);
            rect(140,70,120,30);
        //Mobile mode
            fill(255, 255, 255);
            if(mouseX>140&&mouseX<260&&mouseY>110&&mouseY<140) {
                fill(86, 60, 252);
            if(options.FancyGraphics===false){
                    fill(82, 82, 82);
                }
        }
        if(mouseIsPressed&&mouseX>140&&mouseX<260&&mouseY>110&&mouseY<140) {
                options.mobile=options.mobile?false:true;
                mouseIsPressed=false;
        }
        stroke(0, 0, 0);
            rect(140,110,120,30);
        //cheat mode
            fill(255, 255, 255);
            if(mouseX>140&&mouseX<260&&mouseY>150&&mouseY<180) {
                fill(86, 60, 252);
            if(options.FancyGraphics===false){
                    fill(82, 82, 82);
                }
        }
        if(mouseIsPressed&&mouseX>140&&mouseX<260&&mouseY>150&&mouseY<180) {
                options.cheats=options.cheats?false:true;
                mouseIsPressed=false;
        }
        stroke(0, 0, 0);
            rect(140,150,120,30);
            //rest
        
            fill(0, 0, 0);
            text("Fancy Sky: " + options.sky,200,40);
            text("Fancy Graphics: " + options.FancyGraphics,200,80);
            text("Mobile mode: " + options.mobile,200,120);
            text("Cheats mode: " + options.cheats,200,160);
            fill(255, 255, 255);
            if(mouseX>170&&mouseX<235&&mouseY>350&&mouseY<397) {
                fill(86, 60, 252);
            if(options.FancyGraphics===false){
                    fill(82, 82, 82);
                }
        }
        stroke(0, 0, 0);
            rect(170,350,60,30);
            fill(0, 0, 0);
            text("Back",200,367);
            if(mouseIsPressed&&mouseX>170&&mouseX<235&&mouseY>350&&mouseY<397) {
            optionsScreen = false;
            textAlign("CENTER");
            
        }
        }
};
};
var logo = function() {
        //logo
    ltime=ltime+1;
    
    if(ltime<=350) {
    c1=c1+3;
    if(x1>60) {
    x1=x1-90;
    }
    if(x1<60) {
        x1=x1+5;
    }
    if(x1>50) {
        x1=x1-5;
    }
    background(c1, c1, c1);
  fill(0, 153, 255);
rect(random(1,600),random(1,600),10,20,random(1,15));
rect(random(1,600),random(1,600),10,20,random(1,15));
rect(random(1,600),random(1,600),10,20,random(1,15));
rect(random(1,600),random(1,600),10,20,random(1,15));
rect(random(1,600),random(1,600),10,20,random(1,15));
rect(random(1,600),random(1,600),10,20,random(1,15));
rect(random(1,600),random(1,600),10,20,random(1,15));
rect(random(1,600),random(1,600),10,20,random(1,15));
rect(random(1,600),random(1,600),10,20,random(1,15));
rect(random(1,600),random(1,600),10,20,random(1,15));
rect(random(1,600),random(1,600),10,20,random(1,15));
rect(random(1,600),random(1,600),10,20,random(1,15));
rect(random(1,600),random(1,600),10,20,random(1,15));
rect(random(1,600),random(1,600),10,20,random(1,15));
rect(random(1,600),random(1,600),10,20,random(1,15));
rect(random(1,600),random(1,600),10,20,random(1,15));
rect(random(1,600),random(1,600),10,20,random(1,15));
rect(random(1,600),random(1,600),10,20,random(1,15));
rect(random(1,600),random(1,600),10,20,random(1,15));
rect(random(1,600),random(1,600),10,20,random(1,15));
rect(random(1,600),random(1,600),10,20,random(1,15));
rect(random(1,600),random(1,600),10,20,random(1,15));
rect(random(1,600),random(1,600),10,20,random(1,15));
rect(random(1,600),random(1,600),10,20,random(1,15));
rect(random(1,600),random(1,600),10,20,random(1,15));
rect(random(1,600),random(1,600),10,20,random(1,15));
rect(random(1,600),random(1,600),10,20,random(1,15));
rect(random(1,600),random(1,600),10,20,random(1,15));
rect(random(1,600),random(1,600),10,20,random(1,15));
rect(random(1,600),random(1,600),10,20,random(1,15));
rect(random(1,600),random(1,600),10,20,random(1,15));
rect(random(1,600),random(1,600),10,20,random(1,15));
fill(87, 87, 87);
text("Downpour Games",0,221);
fill(51, 0, 255);
textSize(x1);
text("Downpour Games",1,219);
}
    else if(ltime<400) {
    b1=b1+5;
        fill(0, 0, 0,b1);
        rect(-1,-1,602,602);
    } 
    
    if(ltime>410) {
        ltime=410;
        game();
    }
};

void draw = function() {
    logo();
};