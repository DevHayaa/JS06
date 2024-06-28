//1: Write a program that takes a positive integer from user &
// display the following in your browser.
// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number


var userNum = +prompt("Enter a positive integer:")
var roundOff = Math.round(userNum)
var ceil = Math.ceil(userNum)
var floor = Math.floor(userNum)

document.write("Number: " + userNum + "<br>" )
document.write("Round off value: " + roundOff + "<br>" )
document.write("Ceil value: " + ceil + "<br>" )
document.write("Floor value: " + floor+ "<br>" )

// 2. Write a program that takes a negative floating point
// number from user & display the following in your browser.
// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number

var userNum = +prompt("Enter a negative integer:")
var roundOff = Math.round(userNum)
var ceil = Math.ceil(userNum)
var floor = Math.floor(userNum)

document.write("Number: " + userNum + "<br>" )
document.write("Round off value: " + roundOff + "<br>" )
document.write("Ceil value: " + ceil + "<br>" )
document.write("Floor value: " + floor+ "<br>" )


//3: Write a program that displays the absolute value of a
// number.
// E.g. absolute value of -4 is 4 & absolute value of 5 is 5

var absVal = +prompt("Enter a number:")

var absValue = Math.abs(absVal);
document.write("The absolute value of " + absVal + " is " + absValue + "<br>")


// 4:Write a program that simulates a dice using random()
// method of JS Math class. Display the value of dice in your
// browser.:

let diceValue = Math.floor(Math.random() * 6) + 1;

document.write("Ramdom dice value: " + diceValue + "<br>")

// 5. Write a program that simulates a coin toss using random()
// method of JS Math class. Display the value of coin in your
// browser


var player1= prompt("Enter Heads Name:")
var player2= prompt("Enter Tails Name:")
 
var toss = Math.random()*2
var chToss = Math.floor(toss)



if(chToss === 0){
    document.write(player1+ " heads won" + "<br>")
}else{
    document.write(player2+ " tails won" + "<br>")
}



// 6. Write a program that shows a random number between 1
// and 100 in your browser.

var randomNumber = Math.floor(Math.random() * 100) + 1;
document.write("Random Number Between 1 and 100: " + randomNumber + "<br>")


// 8. Write a program that stores a random secret number from
// 1 to 10 in a variable. Ask the user to input a number
// between 1 and 10. If the user input equals the secret
// number, congratulate the user.



var userGuess = +prompt("Guess the secret number:")
var secretNumber = Math.floor(Math.random() * 10) + 1;
    if (userGuess === secretNumber) {
       document.write(userGuess + "Congratulations! you gussed correct number")
    } else {
        document.write(userGuess + " Sorry try again, the secret number was: " + secretNumber);
    }

