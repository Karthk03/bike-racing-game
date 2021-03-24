class Form
{
    constructor()
    {
        // creating the variables
        this.title = createElement('h2');
        this.button1 = createButton("single player");
        this.button2 = createButton("multi player");
    }

    display()
    {
        fill("black");
        if(gameState == 0)
        {
            // changing the background
            background(formBg);
        }
        // defining the title 
        this.title.html("Bike Racing Game");

        // putting the title,button1, and button2's postioions
        this.title.position((displayWidth/2)-150,150);

        this.button1.position(displayWidth/2-200,250);
        this.button2.position(displayWidth/2,250);
        
        this.button1.mousePressed(() =>{
            // if button1 is pressed gameState updates to 1
            gameState = 1
            
            // and updates database
            database.ref("/").update({
                'gameState': 1
            })

            bike1 = createSprite()
            bike1.addImage(bikeIMG1);
            bike1.x = 50
            bike1.scale = 0.5
        })

        this.button2.mousePressed(() =>{
            
            // player count increments
            playerCount++;
            //defining player.index and player.lane
            player.index = playerCount;
            player.lane = playerCount;
            
            database.ref("/").update({
                'playerCount': playerCount
            })

            this.button1.hide();
            this.button2.hide();
            this.title.hide();

            console.log(player.index)

            // updating the databse
            player.update();
        })
    }

    // creating a function to hide the form
    hide()
    {
        this.button1.hide();
        this.button2.hide();
        this.title.hide();
    }
}