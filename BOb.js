class BOb {


constructor(x,y) {
var options ={

    isStatic: false,
    restitution: 1,
    friction: 0,
    density:2,


}

    this.body = bodies.circle(x,y,25,option);
    world.add(world, this.body);

    console.log(this.body);







}


   display(){

   push();
   ellipseMode(RADIUS);
   fill(255,0,255);
   ellipse(this.body.position.x,this.body.position.y,25,25);
   pop();
      



   }





}