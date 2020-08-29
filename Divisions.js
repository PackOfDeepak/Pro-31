class Divisions {
    constructor(x,y,w,h) {
        var options = {
            isStatic:true
        }
        this.body = Bodies.rectangle(x,y,w,h,options);
        World.add(world,this.body);

    }
    display(){
        var pos = this.body.positon;
        rectMode(CENTER);
        fill("white");
        rect(pos.x,pos.y,this.body.w,this.h);
    }
}