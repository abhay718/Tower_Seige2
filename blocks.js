class Block{

constructor(x,y){

var options = {

    restitution:1,
   // Visibility:255,
  //  mass:100,
  //  isStatic:true,
    friction:1.5,
    //frictionAir: 0.1,
}


this.body = Bodies.rectangle(x,y,30,40,options);
this.width = 30;
this.height = 40;
this.Visibility = 255;
this.image = loadImage("download.png");

World.add(world,this.body);

}

display(){

    var pos = this.body.position;
    console.log(this.body.speed);
 



 if(this.body.speed >= 5){
    World.remove(world,this.body);
     
    
    this.Visibility = this.Visibility-5;
   // fill(mouseY,mouseX,mouseY)
   
    tint(this.Visibility,this.Visibility-5);
    image(this.image,this.body.position.x,this.body.position.y,this.width+10,40);
   //

 
}
 else{
    

 
    
   

  
push();
     translate(pos.x,pos.y);
    
     rotate(this.body.angle)
 

    // fill(mouseY,mouseX,mouseY);
     imageMode(CENTER);
     image(this.image,0,0,this.width+10,this.height);

pop();
   
}












}




}