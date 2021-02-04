class Dustbin {
    constructor(x,y){
       var options= {
           isStatic:true
       }

        this.body=Bodies.rectangle(x,y,this.width,this.height,options);
       this.x=x;
       this.y=y;
        this.width=200;
        this.height=280;
        this.image=loadImage("dustbingreen.png")
        World.add(world,this.body)
    }
     
    display(){
        var pos= this.body.position;
        var angle= this.body.angle;
        push();
        translate(pos.x,pos.y)
        rotate(angle)
        imageMode(CENTER)
        //fill("white"); 
        image(this.image,0,0,this.width,this.height);
        pop();
    }
};