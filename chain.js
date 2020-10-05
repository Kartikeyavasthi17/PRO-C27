class Chain{
constructor(bodya,bodyb){

    var options ={
     bodyA:bodya,
     bodyB:bodyb,
     stiffness:0.04,
     length:10
    }
   this.chain =Matter.Constraint.create(options)
   World.add(world,this.chain);
}

display()
{
var pointA =this.chain.bodyA.position;
var pointB =this.chain.bodyB.position;
line(pointA.x,pointA.y,pointB.x,pointB.y);

}

}
