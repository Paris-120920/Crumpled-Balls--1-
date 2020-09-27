class Paper {
    constructor(x,y) {
        var options = {
            isStatic:false,
            restitution: 0.3,
            friction:0.5,
            density:1.2
        }

        this.body = Matter.Bodies.circle(x, y, 5, options);

        World.add(world, this.body);
    }

    display() {
        var pos =this.body.position;
        push();
        fill("green");
        pop();
    };

}