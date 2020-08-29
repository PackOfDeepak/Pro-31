class Plinko {
    constructor(x,y,radius) {
        var options = {
            isStatic:true
        }
        this.body = Bodies.circle(x,y,radius,options);
        World.add(world,this.body);

    }
    display(){
        var pos = this.body.positon;
        rectMode(CENTER);
        fill("white");
        elipse(pos.x,pos.y,this.body.w,this.h);
    }
}