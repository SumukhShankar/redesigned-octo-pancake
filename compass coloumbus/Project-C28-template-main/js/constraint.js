class Sling {
    constructor(body1,point2){
        var options = {
        bodyA : body1,
        pointB : point2,
        stiffness : 0.004,
        length : 20,
    }
    this.body = Constraint.create(options);
    World.add(world,this.body);
    }
    fly(){
        this.body.bodyA = null;
    }
    attach(bodyA){
        this.body.bodyA = bodyA;
    }
    display(){
    if(this.body.bodyA){
       var pointA = this.body.bodyA.position;
       var pointB = this.body.pointB;
       strokeWeight(4);
       line(pointA.x,pointA.y,pointB.x,pointB.y);
    }
    }
}