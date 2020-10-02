const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var particles = [];
var plinkos = [];
var divisions = [];
var divisionHeight=300;

function preload() {
   
}

function setup(){
    var canvas = createCanvas(400,800);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(200,790,500,20);

    for(var k=0; k<=width; k=k+80){
        divisions.push(new Divisions(k,height-divisionHeight/2,10,divisionHeight));
    }
    for (var j=40; j<=width; j=j+50){
        plinkos.push(new Plinko(j,75,10));
    }

    for (var j=15; j<=width-10; j=j+50){
        plinkos.push(new Plinko(j,175,10));
    }

    console.log(frameCount)
    }

function draw(){
    background(0);
    Engine.update(engine);
    if(frameCount%60===0){
        particles.push(new Particle(random(width/2-10,width/2+10),10,10))
    }
for(var j=0; j<plinkos.length; j++){
    plinkos[j].display();
}
for(var j=0; j<particles.length; j++){
    particles[j].display();
}
for(var k=0; k<divisions.length; k++){
    divisions[k].display();
}
    ground.display();
    
}

