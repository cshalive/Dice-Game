//alert("Hello Chandra Dice Game");


function rollDice()
{
    var randomNumber1;
    randomNumber1 = Math.random() * 6; // random() -> 0.0 to 0.9999. restrict to 6
    randomNumber1 = Math.round(randomNumber1); // restrict to max 6
    if (randomNumber1 == 0)
    {
        randomNumber1 = 1; // in Dice, 0 is invalid
    }

   return randomNumber1;
}

function playDice()
{

    var player1Value;
    var player2Value;

    // this code works. csh

    player1Value = rollDice();
    player2Value = rollDice();

    var dice = "dices.png";
    // dice[4] = player1Value; // csh. did not work. check later
    var diceImages = ["./images/dice1.png", "./images/dice2.png", "./images/dice3.png", "./images/dice4.png", "./images/dice5.png", "./images/dice6.png" ]
    var diceDisplay1 = diceImages[player1Value - 1];
    var diceDisplay2 = diceImages[player2Value - 1];


   // alert("Player1 Value: " + player1Value + "Dice1 img = " + diceDisplay1 + " And " + "Player 2 Value: " + player2Value);
    // insert proper dice images
    document.querySelector(".img1").setAttribute("src", diceDisplay1);
    document.querySelector(".img2").setAttribute("src", diceDisplay2);
    if (player1Value == player2Value)
    {
        document.querySelector("h2").textContent = "Game draw"
    }
    else if ( player1Value > player2Value )
    {
        document.querySelector("h2").textContent = "Player 1 Wins!!!"
    }
    else {
        document.querySelector("h2").textContent = "Player 2 Wins!!!"
    }
    

}
