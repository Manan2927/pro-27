
class roof {

constructor(x,y,width,height){
 

this.body = Bodies.rectangle(x,y,width,height);
this.width = width;
this.height = height;
world.add(world,this.body);


}

   display(){

    push();
     rectMode(CENTER);
     fill(120,165,120);
     rect(this.body.position.x,this.position.y,this.width,this.height);
    pop();

   }










}