//decalring variables

var gameState = 0, playerCount = 0;
var form, game, player;
var database;
var bikeIMG1, bikeIMG2,bikeIMG3,bikeIMG4,TrackFinal,FormBg
var frameCount = 0;
var obstical = [], obsticalArrPos = -1;
var bike1,bike2,bike3,bike4,bike = [],rand = [];
var obsticalIMG;
var reset, form2;
var allPlayers = [],allPlayers2 = [];
var obsticalGroup;
var rank;

function preload()
{
  // loding images
  bikeIMG1 = loadImage("Images/BikeImg.png");
  bikeIMG2 = loadImage("Images/BikeImg2.png");
  bikeIMG3 = loadImage("Images/BikeImg3.png");
  bikeIMG4 = loadImage("Images/BikeImg4.png");
  TrackFinal = loadImage("Images/Track Final.png");
  formBg = loadImage("Images/Form Bg.jfif");
  obsticalIMG = loadImage("Images/Obstical.png")
}

function setup() 
{

  // creating cannvas
  createCanvas(displayWidth,displayHeight);

  // creating a reset button for creators
  reset = createButton("reset");
  reset.position(50,50);

  database = firebase.database();

  // refrencing the database
  database.ref("gameState").on("value",function(data){
    gameState = data.val()
  })

  database.ref("playerCount").on("value",function(data){
    playerCount = data.val()
  })

  database.ref("rank").on("value",function(data){
    rank = data.val()
  })

  obsticalGroup = new Group();
  
  player = new Player();
  form = new Form();
  form2 = new Form2();
  game = new Game();
}

function draw() 
{

  // reseting the database if 'reset' button is pressed
  reset.mousePressed(()=>{
    database.ref("/").update({
      'playerCount': 0,
      'gameState':0,
      'players':null
  })
  })
  if(gameState == 0)
  {
    // displaing the form
    form.display();
  }
  else
  {
    form.hide();
  }
  
  if(gameState == 1 || gameState == 2)
  {
    // game starts
    game.play();
  }
  
  if(gameState == 3 || gameState == 4)
  {
    form2.display();
  }
  else
  {
    form2.hide();
  }

  if(playerCount<4 && gameState !=1 && gameState!=3 && gameState !=4 && player.index!=0)
  {
      textSize(20);
      fill("black");
      text("please wait for players to join",300,200);
  }

  if(playerCount == 4)
  {
      gameState = 2;

      updateGameState(gameState)
  }

  // incrementing the framecount
  frameCount++;

  drawSprites();
}

function updateGameState(value)
{
  database.ref("/").update({
    'gameState': value
  })
}

function updateRank(value)
{
  database.ref("/").update({
    'rank': value
  })
}

function keyPressed()
{
  // if game is playing
  // if you press up arrow you go up
  // and if you press down you go down
  if(gameState == 1)
  {
    if(keyCode == 40)
    {
      if(player.lane<4)
      {
        player.lane++;
      }
    }
    if(keyCode == 38)
    {
      if(player.lane >1)
      {
        player.lane--;
      }
    }
  }

  if(gameState == 2 && playerCount==4 && player.flag == false)
  {
    if(keyCode == 40)
    {
      if(player.lane<5)
      {
        player.lane++;
      }
    }
    if(keyCode == 38)
    {
      if(player.lane >1)
      {
        player.lane--;
      }
    }
  }
}