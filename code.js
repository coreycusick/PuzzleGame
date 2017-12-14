
import processing.sound.*;
SoundFile file;
void setup() {
  size(400, 400);
file = new SoundFile(this, "music.mp3");
  file.play();
}
frameRate(120);
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
var version = "Alpha 0.1.0";
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

    void draw() {
frameRate(60);

    //scale(1.5);
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
        fill(106, 255, 61);
    noStroke();
    rect(-1,370,600,30);
    fill(230, 242, 126);
    rect(x,y,10,10);
    fill(255, 0, 0);
    rect(x+1,y+10,8,10);
    fill(0, 98, 255);
    rect(x+2,y+20,6,10);
    fill(230, 242, 126);
    rect(x+3.4,y+11,3,8);
    
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
        rect(x,y,20,20);
        
        
    }
    };
    //controls
    if(level>0) {
    if(keyPressed&&keyCode===RIGHT) {
        x=x+1;

    }
    if(keyPressed&&keyCode===LEFT) {
        x=x-1;
        x=x;
        
    }
    if(level===1&&level>2) {
    if(keyPressed&&keyCode===UP) {
        y=y-1;
        
        
    } 
    } else if(y<355) {
        y=y+1;
    }
    var fall = function() {
        
    };
    }
    var message = "Alpha";
    
    //game
    
    //title
    if(level === 0) {
        textAlign(LEFT,CENTER);
        
        textSize(50);
        background(87, 255, 249);
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
        if(mousePressed&&mouseX>157&&mouseY>179&&mouseY<209&&mouseX<227&&WhatsNew===false&&optionsScreen===false) {
            if(options.cheats===true) {
                cheat=true;
            }
            if(options.cheats===false) {
            level=1;
            x=5;
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
        if(mousePressed&&mouseX>157&&mouseY>229&&mouseY<259&&mouseX<227&&WhatsNew===false) {
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
        if(mousePressed&&mouseX>157&&mouseY>280&&mouseY<310&&mouseX<227) {
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
    if(x<340) {
    x=x+1;
    
    } if(x>=340) {
        r1=r1+0;
        if(r1 === 0) {
            r1 = 0;
            x = 5;
        }
    }
    fill(0, 0, 0);
    //options screen
    if(optionsScreen === true) {
        WhatsNew=false;
            //background(51, 51, 51);
            background(87, 255, 249);
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
        if(mousePressed&&mouseX>140&&mouseX<260&&mouseY>30&&mouseY<60) {
                options.sky=options.sky?false:true;
                mousePressed=false;
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
        if(mousePressed&&mouseX>140&&mouseX<260&&mouseY>70&&mouseY<100) {
                options.FancyGraphics=options.FancyGraphics?false:true;
                mousePressed=false;
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
        if(mousePressed&&mouseX>140&&mouseX<260&&mouseY>110&&mouseY<140) {
                options.mobile=options.mobile?false:true;
                mousePressed=false;
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
        if(mousePressed&&mouseX>140&&mouseX<260&&mouseY>150&&mouseY<180) {
                options.cheats=options.cheats?false:true;
                mousePressed=false;
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
            if(mousePressed&&mouseX>170&&mouseX<235&&mouseY>350&&mouseY<397) {
            optionsScreen = false;
        }
        }
    }
    //whats new
    if(WhatsNew === true) {
        background(87, 255, 249);
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
            if(mousePressed&&mouseX>170&&mouseX<235&&mouseY>350&&mouseY<397) {
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
        text("-Alpha 0.1.0\n*Added cheat screen\n*Fixed bugs\n-Alpha 0.0.9\n" +"*Fixed bugs and fixed options\n-Alpha 0.0.8\n*Added Whats New and Options Menu (Options Menu in Beta)\n*Added mobile mode\n-Alpha 0.0.3 - Alpha 0.0.6\n*Fixed Alot of bugs\n-Alpha 0.0.2\n*Added title screen\n-Alpha 0.0.1\n*Initial Release\n*Added levels 1-3",20,150);
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
        if(mousePressed&& t1 > 20) {
            
            levelSelect=true;
        }
        if(levelSelect === true) {
        background(87, 255, 249);
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
        if(mousePressed&&mouseX>75&&mouseX<125&&mouseY>60&&mouseY<110) {
            fill(0, 0, 0);
            x=5;
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
        if(mousePressed&&mouseX>175&&mouseX<225&&mouseY>60&&mouseY<110) {
            fill(0, 0, 0);
            x=5;
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
        if(mousePressed&&mouseX>275&&mouseX<325&&mouseY>60&&mouseY<110) {
            fill(0, 0, 0);
            x=5;
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
        if(mousePressed&&mouseX>75&&mouseX<125&&mouseY>130&&mouseY<180) {
            fill(0, 0, 0);
            x=5;
            level = 4;
           
        }
        rect(75,130,50,50);
        
        fill(0, 0, 0);
        textSize(12);
        text("Level 4",80,150);
        }
        
    }   
    //completed levels
    if(level===1) {
        
    textSize(15);
    background(87, 255, 249);
    character();
    fill(0, 0, 0);
    text("Level 1",5,15);
    fill(random(0,255),random(0,255),random(0,255));
    if(options.FancyGraphics===false) {
        fill(random(1,255));
    }
    rect(340,337,50,50,30);
    
    if(x>340&&y>340) {
        level = 2;
        x=330;
    }
    }
    if(level === 2) {
        background(87, 255, 249);
        textSize(15);
    character();
    fill(0, 0, 0);
    text("Level 2",5,15);
    fill(random(0,255),random(0,255),random(0,255));
    if(options.FancyGraphics===false) {
        fill(random(1,255));
    }
    rect(340,31,50,50,50);
    //1st levitator
    fill(0, 0, 0);
    rect(10,380,40,10);
    if(x>10&&x<50&&y<360) {
        y=y-2;
    }
    //2nd levitator
    fill(0, 0, 0);
    rect(165,280,40,10);
    if(x>165&&x<205&&y<280) {
        y=y-2;
    }
    //3rd levitator
    fill(0, 0, 0);
    rect(305,200,40,10);
    if(x>305&&x<345&&y<200) {
        y=y-2;
    }
    if(keyPressed&&keyCode===DOWN) {
        y=y+2;
    }
    //complete level
    if(x>340&&y>31&&y<71&&x<390) {
        level = 3;
        x=5;
        y = 355;
    }
    //if(y<340) {
        //y=370;
    //}
    }
    //working on
    if(level === 3) {
        var switchFlipped=false;
        background(87, 255, 249);
        textSize(15);
    character();
    fill(0, 0, 0);
    text("Level 3",5,15);
    
    fill(random(0,255),random(0,255),random(0,255));
    if(options.FancyGraphics===false) {
        fill(random(1,255));
    }
    rect(5,50,50,51,30);
    if(x>5&&x<55&&y>50&&y<80) {
    level = 4;
    x = 5;
    y = 355;
    
    }
    //lever
    fill(84, 84, 84);
    rect(370,380,10,5);
    stroke(0, 0, 0);
    if(x>300) {
        switchFlipped=true;
        
    }
    if(switchFlipped===false) {
    line(370,374,375,380);
    }
    if(switchFlipped===true) {
    line(380,374,375,380);
    y=y-2;
    }
    fill(0, 0, 0);
    rect(250,50,50,10);
    if(x>250&&x<300&&y<50&&y>21) {
        y=y-2;
    }
    rect(100,150,50,10);
    if(x>100&&x<150&&y<150&&y>10) {
        y=y-2;
    }
        
    }
    if(level === 4) {
        background(20, 20, 20);
        options.sky=false;
        character();
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
            
            //level
            fill(130, 130, 130);
            rect(100,380,30,10);
            if(x>100&&x<130&&y<380&&y>265) {
                noFill();
                stroke(26, 0, 255);
                ellipse(115,375,40,3);
                stroke(0, 111, 255);
                ellipse(115,365,40,3);
                stroke(0, 139, 252);
                ellipse(115,355,40,3);
                stroke(0, 128, 255);
                ellipse(115,345,40,3);
                
                y=y-1.5;
                
                
            }
            noStroke();
                fill(255, 255, 255);
                rect(40,340,50,10);
                if(x>35&&x<90&&y<330&&y>308) {
                    y=y-1;
                }
                
                
                
    }
};