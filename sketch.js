	var monkey, monkey_running;
var bananaImage, rock, obstacleImage;
var FoodGroup, obstacleGroup;
var score;
var ground;
var banana;

function preload() {


  monkey_running = loadAnimation("sprite_0.png", "sprite_1.png", "sprite_2.png", "sprite_3.png", "sprite_4.png", "sprite_5.png", "sprite_6.png", "sprite_7.png", "sprite_8.png");

  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");

  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");

}



function setup() {
  createCanvas(600, 500);
  //gurrrilea 
  monkey = createSprite(90, 400, 10, 10);
  monkey.addAnimation("wpjkdaio", monkey_running);
  monkey.scale = 0.13;
  
  //ground to make sure monkey does not fall into the aybss
  ground = createSprite(300,470, 900, 60);
  ground.shapeColor = rgb(80, 70, 10);
  
  //infintescroller command part 1
  ground.velocityX = -2;
  
  //bananagroup
  foodGroup= new Group();
  //obstacle group
  obstacleGroup= new Group();
  
  //score
  score=0;
}


function draw() {
  background(235);

  //monkey jump howajoiwahoadwiuh hoo hoooooo hoo hoo hoo
  if (keyDown("space") && monkey.y > 390) {
    monkey.velocityY = -13;
  }
  //forcing the monkey to follow the laws of physics
  monkey.velocityY = monkey.velocityY + 0.4;

  //infintie scroller command that you cant even notice working
  if (ground.x < 180) {
    ground.x = ground.width / 2;
  }
  
  //ensuring that the money has somthing to walk on
  monkey.collide(ground);

  score=Math.round(World.frameCount/13);
  
  //creates foods
  makeBanana();
  
  //create ROCK
  makeRock();
  
  
  drawSprites();
 
  fill(0);
  textSize(20);
  textFont("Anton");
  text("survival: "+ score,450,35);
}

//make foodo
function makeBanana() {
  if(World.frameCount%95===0) {
    banana= createSprite(600, 300, 100, 100);
      banana.addImage("aaaa", bananaImage);
        banana.scale=0.1;
      banana.velocityX=-6;
      banana.lifetime=300;
      banana.y=Math.round(random(170,350));
    foodGroup.add(banana);
  }

}
//make ROOCKS  
function makeRock() {
  if(World.frameCount%300===0) {
    rock=createSprite(550,425,10,10);
      rock.addImage("bbbb", obstacleImage);
        rock.scale=0.2;
      rock.velocityX=-6;
      rock.lifetime=145;
    obstacleGroup.add(rock);
    
  }
}