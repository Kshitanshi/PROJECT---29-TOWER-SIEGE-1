class Projectile{
    constructor(bodyA,pointB){
        var options = {
            bodyA:bodyA,
            pointB:pointB,
            stiffness:0.04,
            length:10,
        }
        this.pointB = pointB;
        this.body = Constraint.create(options);
        world.add(world,this.body);
    }

    release(){
        this.bnody.bodyA = null;
    }

    display(){
        if(this.body.bodyA){
            var pointA = this.body.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(1);
            stroke("grey");
            line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
    }
} 