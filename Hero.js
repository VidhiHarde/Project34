class Hero{
    constructor(x,y,r){
        var options={
            'density':1,
            'frictionAir':1,
            //isStatic:true
        }
        this.x=x;
        this.y=y;
        this.r=r;
        this.image=loadImage("images/Superhero-02.png");
        this.body=Bodies.circle(this.x,this.y,(this.r/2),options);
        World.add(world,this.body);
       
    }
    display(){
        var angle=this.body.angle;
        var pos=this.body.position;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
     
        image(this.image,this.x,this.y,400,300);
        pop();
    }
}