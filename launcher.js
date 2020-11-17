class Launcher {
    constructor(body,anchor) {
      var options = {
           bodyA:body,
           pointB:anchor,
           stiffness:0.004,
           length:1

      }
      this.bodyA=body,
      this.pointB=anchor
     this.Launcher=Constraint.create(options)
      World.add(world, this.launcher);
    }
    attach(bod){
        this.launcher.bodyA=body

    }
    fly(){this.launcher.bodyA=null}
    display(){
if(this.launcher.bodyA)
{
    var pointA=this.bodyA.position
    var pointB=this.pointB
    stokeWeight(2)
    line(pointA.x,pointA.y,pointB.x,pointB.y)
}
    }
  };