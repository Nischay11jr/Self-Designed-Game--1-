var canvas;
var backgroundImg;

function preload() {
//bgImg = loadImage("./images/jungle.png");
getBackgroundImg();

}

function setup() {
  canvas = createCanvas(windowWidth + 300, windowHeight);

}

function draw() {
  if(backgroundImg)
  background(backgroundImg);


  drawSprites()

}

async function getBackgroundImg(){
  var response = await fetch("https://worldtimeapi.org/api/timezone/Asia/kolkata");
  var responseJSON = await response.json();
   
  var datetime = responseJSON.datetime;
  var hour = datetime.slice(11,13);

  if(hour >= 06 && hour <=18){
      bg = "images/jungle.png";
  }
  else{
      bg = "images/nightjungle-1.png";
  }

  backgroundImg = loadImage(bg);
  
}