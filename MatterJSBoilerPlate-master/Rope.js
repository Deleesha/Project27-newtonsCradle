/*class Rope {

    constructor(mybodyA , mybodyB , offsetX ,offsetY,pointC) {

        var options = {
            bodyA : mybodyA,
            bodyB : mybodyB,
            pointC :{x : this.offsetX, y: this.offsetY},
            stiffness :1,
            length:200
        }
        this.offsetX = offsetX;
        this.offsetY = offsetY;
        this.rope = Matter.Constraint.create(options);
        World.add(world,this.rope);


    }

    display(){

        var pointA = this.rope.bodyA.position;
        var pointB = this.rope.bodyB.position;
        
        strokeWeight(4);
        line(pointA.x, pointA.y,pointA.x, pointB.y);    
       
    }

}*/

class Rope{

    constructor(bodyA,pointB){
        var options = {
            bodyA:bodyA,
            pointB:pointB,
            stiffness:1.2,
            length:250
        }

        this.rope= Matter.Constraint.create(options);
        this.pointB=pointB;
        World.add(world,this.rope);
    }

    display(){
        var pointA =this.rope.bodyA.position;
        var pointB= this.pointB;
        push()
        fill("black");
        line(pointA.x,pointA.y, pointB.x,pointB.y);
        pop()
    }
}