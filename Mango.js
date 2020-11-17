class Mango
{
	constructor(x,y,width, height)
	{
		var options={
			isStatic:true,
			restitution:0,
            friction:1,
            }
            
    this.image = loadImage("sprites/mango.png")	
	this.body=Bodies.rectangle(this.x, this.y, this.width, this.height, options)
	this.x = x
	this.y = y
	this.width= width
	this.height = height
	World.add(world, this.body);

	}
	display()
	{
			push()
		//	imageMode(CENTER)
		//	strokeWeight(3);
		//	fill(255,0,255)
		image(this.image,this.x,this.y, this.width, this.height);
		pop()
			
	}

}