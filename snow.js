class Snow  {
    constructor(x,y){
        var options={
            restitution:0.5,
            friction:0.5,


        }
        this.body=Bodies.circle(x,y,5,options)
        this.radius=50;
        this.image=loadImage('snow4.webp')
        World.add(world,this.body)

    }

    display(){

      ellipseMode(CENTER)
      image(this.image,this.body.position.x,this.body.position.y,this.radius,this.radius,100,100)







    }

}
