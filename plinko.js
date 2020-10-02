class Plinko {
    constructor(x, y,radius){
        var options={
            isStatic:true
        }
        this.body = Bodies.circle(x, y, radius, options);
        this.radius =10;
        World.add(world, this.body);
    }

    display(){
        var angle = this.body.angle;
        var pos = this.body.position;
        push();
        strokeWeight(4);
        stroke(255);
        fill(255);
        translate(pos.x, pos.y);
        rotate(angle);
        ellipseMode(RADIUS);
        ellipse(0,0,this.radius);
        pop();
    }
}