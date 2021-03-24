class Game
{
    constructor()
    {
        this.track = loadImage("Images/Track Final.png");
    }

    play()
    {
        form.hide();

        background("brown")
        imageMode(CENTER);
        image(this.track,displayWidth,displayHeight/2,displayWidth*6,displayHeight)

        if(gameState == 1)
        {
            bike1.y = ((displayHeight/4)*player.lane)-50
            camera.position.x = bike1.x;

            if(bike1.x>=5500)
            {
                gameState = 3;
                updateGameState(gameState);
            }

            if(keyDown("RIGHT_ARROW"))
            {
                bike1.velocityX = 10;
            }
            if(keyWentUp("RIGHT_ARROW"))
            {
                bike1.velocityX = 0;
            }
            
            if(frameCount%100==1)
            {
                rand[0] = Math.round(random(0,3))
                
                for(let i=1; i<=rand[0];i++)
                {
                    if(i==3)
                    {
                        do
                        {
                            rand[i] = Math.round(random(0,4))
                        }while(rand[i]==rand[i-1] || rand[i]==rand[i-2])

                        obsticalArrPos++

                        obstical[obsticalArrPos] = createSprite();
                        obstical[obsticalArrPos].y = ((displayHeight/4)*rand[i])-50;
                        obstical[obsticalArrPos].x = bike1.x+300;
                        obstical[obsticalArrPos].addImage(obsticalIMG);
                        obsticalGroup.add(obstical[obsticalArrPos]);
                    }
                    else if(i==2)
                    {
                        do
                        {
                            rand[i] = Math.round(random(0,4))
                        }while(rand[i]==rand[i-1])

                        obsticalArrPos++

                        obstical[obsticalArrPos] = createSprite();
                        obstical[obsticalArrPos].y = ((displayHeight/4)*rand[i])-50;
                        obstical[obsticalArrPos].x = bike1.x+300;
                        obstical[obsticalArrPos].addImage(obsticalIMG);
                        obsticalGroup.add(obstical[obsticalArrPos]);
                    }
                    else
                    {
                        obsticalArrPos++

                        rand[i] = Math.round(random(0,4))
                        
                        obstical[obsticalArrPos] = createSprite();
                        obstical[obsticalArrPos].y = ((displayHeight/4)*rand[i])-50;
                        obstical[obsticalArrPos].x = bike1.x+300;
                        obstical[obsticalArrPos].addImage(obsticalIMG);
                        obsticalGroup.add(obstical[obsticalArrPos]);
                    }
                }
            }

            if(bike1.collide(obsticalGroup))
            {
                gameState = 3;
                updateGameState(gameState);
            }

            player.update();
        }
        else if(gameState == 2)
        {
            if(playerCount == 4);
            {
                Player.getPlayerInfo();
                var index = 0;

                bike1 = createSprite()
                bike1.addImage(bikeIMG1);

                bike2 = createSprite()
                bike2.addImage(bikeIMG2);

                bike3 = createSprite()
                bike3.addImage(bikeIMG3);

                bike4 = createSprite()
                bike4.addImage(bikeIMG4);
                    
                allPlayers2 = allPlayers

                bike = [bike1,bike2,bike3,bike4];

                for(let i in allPlayers2)
                {
                    if(allPlayers2[i-1]!= null)
                    {
                        if(allPlayers2[i]<allPlayers2[i-1])
                        {
                            allPlayers2[i-1] = allPlayers2[i];
                            allPlayers2[i] = allPlayers[i-1];
                        }
                    }
                }

                if(keyDown("RIGHT_ARROW"))
                {
                    player.distance+=20
                    console.log(player.distace)
                }


                if(frameCount%50==1)
                {
                    rand[0] = Math.round(random(0,3))
                
                    for(let i=1; i<=rand[0];i++)
                    {
                        if(i==3)
                        {
                            do
                            {
                                rand[i] = Math.round(random(0,4))
                            }while(rand[i]==rand[i-1] || rand[i]==rand[i-2])

                            obsticalArrPos++

                            obstical[obsticalArrPos] = createSprite();
                            obstical[obsticalArrPos].y = ((displayHeight/4)*rand[i])-50;
                            obstical[obsticalArrPos].x = player.distance+150;
                            obstical[obsticalArrPos].addImage(obsticalIMG);
                            obsticalGroup.add(obstical[obsticalArrPos]);
                        }
                        else if(i==2)
                        {
                            do
                            {
                                rand[i] = Math.round(random(0,4))
                            }while(rand[i]==rand[i-1])

                            obsticalArrPos++

                            obstical[obsticalArrPos] = createSprite();
                            obstical[obsticalArrPos].y = ((displayHeight/4)*rand[i])-50;
                            obstical[obsticalArrPos].x = player.distance+150;
                            obstical[obsticalArrPos].addImage(obsticalIMG);
                            obsticalGroup.add(obstical[obsticalArrPos]);
                        }
                        else
                        {
                            obsticalArrPos++

                            rand[i] = Math.round(random(0,4))
                            
                            obstical[obsticalArrPos] = createSprite();
                            obstical[obsticalArrPos].y = ((displayHeight/4)*rand[i])-50;
                            obstical[obsticalArrPos].x = player.distance+150;
                            obstical[obsticalArrPos].addImage(obsticalIMG);
                            obsticalGroup.add(obstical[obsticalArrPos]);
                        }
                    }
                }


                var endCond = 0;
                for(let i in allPlayers)
                {
                    index++
                    console.log(bike[index--])
                    bike[index--].x = allPlayers[i].distace;
                    bike[index--].y = ((displayHeight/4)*allPlayers[i].lane)-50;

                    if(allPlayers[i].flag == true)
                    {
                        endCond++;
                    }

                    if(index == player.index)
                    {
                        fill("red");
                        ellipse(allPlayers[index].distace-30,100*allPlayers[index].lane,50,50);

                        camera.position.y = displayWidth/2;
                        camera.position.x = bike[index-1].x;
                    }
                }

                if(player.distace>=7500)
                {
                    if(player.falg == false)
                    {
                        rank++;
                        player.rank = rank;
                    }
                    player.flag = true;
                    textSize(20);
                    text("please wait for other players to finish",displayWidth/2,50);
                }
                if(endCond == 4)
                {
                    gameState = 4;
                    updateGameState(gameState)
                }

                bike1.collide(obsticalGroup);
                bike2.collide(obsticalGroup);
                bike3.collide(obsticalGroup);
                bike4.collide(obsticalGroup);

                player.update();
            }
        }
    }
}