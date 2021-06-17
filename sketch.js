const Engine = Matter.Engine;
const World = Matter.Wolrd;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;

var ground;

function setup() {
    createCanvas(3000, 800);

    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600, 600, 1200, 20);


}


function draw() {
    background("white");
    Engine.update(engine)
    ground.display();
}