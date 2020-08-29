class Particle {
    constructor(x,y,radius) {
        var options = {
            resititution:0.5
        }
        this.body = Bodies.circle(x,y,radius,options);
        this.color = color(random(0,255), random(0,255), random(0,225));
        World.add(world,this.body);

    }
    display(){
        var pos = this.body.positon;
        rectMode(CENTER);
        fill("white");
        eliplse(pos.x,pos.y,this.body.w,this.h);
    }
}