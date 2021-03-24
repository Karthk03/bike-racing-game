class Form2
{
    constructor()
    {
        this.title = createElement('h3');
        this.button1 = createButton("Play again");
        this.button2 = createButton("Go to home page");
    }

    display()
    {
        if(gameState == 3)
        {
            background("formBg")
            bike1.remove();
            //obsticalGroup.removeEach();
            if(bike1.x<5500)
            {
                textSize(20);
                fill("black");

                // defining the title 
                this.title.html("You hit a obstical");

                // putting the title,button1, and button2's postioions
                this.title.position(displayWidth/2,50);

                this.button1.position((displayWidth/2)-100,150);
                this.button2.position((displayWidth/2)+100,150);
                
                this.button1.mousePressed(() =>{
                    // if button1 is pressed gameState updates to 1
                    gameState = 1
                    
                    // and updates database
                    database.ref("/").update({
                        'gameState': 1
                    })
                })

                this.button2.mousePressed(() =>{
                    // if button2 is pressed gameState changes to 2
                    gameState = 0
                    
                    // and database updates
                    database.ref("/").update({
                        'gameState': 0
                    })
                })
            }
            else
            {
                textSize(20);
                fill("black");

                // defining the title 
                this.title.html("You reached the end");

                // putting the title,button1, and button2's postioions
                this.title.position(displayWidth/2,50);

                this.button1.position((displayWidth/2)-100,150);
                this.button2.position((displayWidth/2)+100,150);
                
                this.button1.mousePressed(() =>{
                    // if button1 is pressed gameState updates to 1
                    gameState = 1
                    
                    // and updates database
                    database.ref("/").update({
                        'gameState': 1
                    })
                })

                this.button2.mousePressed(() =>{
                    // if button2 is pressed gameState changes to 2
                    gameState = 0
                    
                    // and database updates
                    database.ref("/").update({
                        'gameState': 0
                    })
                })
            }
        }
        else
        {
            textSize(20);
            fill("black");

            bike1.remove();
            bike2.remove();
            bike3.remove();
            bike4.remove();
            obsticalGroup.removeAll();

            // defining the title 
            this.title.html("You finised in "+player.rank+" place");

            // putting the title,button1, and button2's postioions
            this.title.position(displayWidth/2,50);

            this.button1.hide();
            this.button2.position((displayWidth/2),150);

            this.button2.mousePressed(() =>{
                // if button2 is pressed gameState changes to 2
                gameState = 0
                
                // and database updates
                database.ref("/").update({
                    'gameState': 0
                })
            })
        }
    }

    hide()
    {
        this.title.hide();
        this.button1.hide();
        this.button2.hide();
    }
}