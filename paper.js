class Paper{
    constructor(x,y,radius){
        
        var options= {
            isStatic:false,
            restitution:0.8,
            friction:0.6,
            density:1.2
        }
        
        this.body= Bodies.circle(x,y,(radius-32)/2,options)
        this.x=x
        this.y=y
        this.radius=radius;
        this.image= loadImage("paper.png");
        World.add(world,this.body);
  
       

    }

    display(){
        var pos= this.body.position;
        var angle= this.body.angle;
        push();
        translate(pos.x,pos.y)
        rotate(angle)
        imageMode(CENTER);
       // strokeWeight(3);
        //stroke("blue");
        //fill("red"); 
        image(this.image,0,0,this.radius,this.radius)
        pop();
    }

    
}

