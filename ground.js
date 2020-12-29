class ground{
 constructor(){
 var ground1={isStatic:true}

 
 this.object= Bodies.rectangle(200, 380, 400, 20, ground1)
 World.add(world, this.object)
 }
 display(){
    rect(this.object.position.x, this.object.position.y, 400,20)
}
}