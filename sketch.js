const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bg ;
var display

function preload() {
    // create getBackgroundImg( ) here
    getBackgroundImg();
    //bg = loadImage("sunrise1.png");


}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){

    // add condition to check if any background image is there to add
    (backgroundImg)    
    background(bg)
    display();

    Engine.update(engine);

    // write code to display time in correct format here


}

async function getBackgroundImg(){

    // write code to fetch time from API
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata")

    //change the data in JSON format
    var responseJSON = await response.json()
    var datetime=responseJSON.datetime 

    // write code slice the datetime
           // (2021-06-13T19:39:14.384005+05:30)
    var hour = datetime.slice(11,13)
    //console.log(hour)
    
    // add conditions to change the background images from sunrise to sunset
if (hour>=19 && hour<=21){
    bg="sunrise1.png";
    backgroundImg = loadImage(bg);
}

    //load the image in backgroundImg variable here
    
    console.log(backgroundImg);
}
