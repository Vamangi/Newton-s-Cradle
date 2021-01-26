class Bob
{
	constructor(x,y)
	{
		var options={
			isStatic:false,
			restitution:1,
			density:0.8
			
			}
		
		
            this.body=Bodies.circle(x,y,40, options)
            World.add(world, this.body);

	}
	display()
	{
			
            var pos=this.body.position;	
            	

			push()
			translate(pos.x, pos.y);
			
			//strokeWeight(4);
			fill("black")
			ellipseMode(RADIUS);
			ellipse(0,0,40);
			//ellipse(0,0this.r, this.r);
			pop()
			
	}

}