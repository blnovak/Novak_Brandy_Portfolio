// javascript object and properties that introduces the game
var intro = {
	title:"Welcome",
	description:"to the Hangman Trivia Game!"
};

// calling and using the javascript object
document.getElementById("intro").innerHTML = intro.title + " " + intro.description;


// self executing function
(function() {
	document.write("<br>" + "This is a very simple trivia guessing game!" + "<br>");
})();


// global variable array declaration that gives the application instructions
var instructions = ["A clue to the trivia puzzle will be provided to you.", "Please enter your answer and the application will let you know if you have solved the puzzle or not."];

// global variable declaration
var x = instructions[0];
var y = instructions[1];

// for loop used to display the game instructions
for (var z = 0; z < 1; z++){

	document.write(x + "<br>" + y);
}


// construction function that details the game functionality
function gameFunction(){

	// local variable declaration that prompts the user for their answer
	var choice = prompt("Would you like to play the game?", "yes or no");

	// switch loop that asks the user if they want to play the game
	switch(choice){
    		case "Yes":
			objectLiteral.playGame();
			break;
		case "yes":
			objectLiteral.playGame();
			break;
		case "No":
			objectLiteral.noPlayGame();
			break;
		case "no":
			objectLiteral.noPlayGame();
			break;
		default:
			document.write("You have made an invalid selection.");
	}
}

// object literal that creates one property for the playGame function and the noPlayGame function
var objectLiteral = {
	playGame: function(){

		document.write("You have chosen to play!");

		// local variable declaration that prompts the user for their answer to the trivia question 
		var answer = prompt("What edible food substance is created by bees?", "Please use lowercase characters");

		// if else loop used to validate the user entered answer
		if (answer !== "honey")
		{
			document.write("<br>" + "I'm sorry, that is not the correct answer." + "<br>" + "You have not solved the Hangman Trivia Puzzle!");
		
			// writing to the console that informs that the puzzle is not solved
			console.log("Puzzle not solved.");
		}
		else
		{
			document.write("<br>" + "That is correct!" + "<br>" + "Congratulations, you have solved the Hangman Trivia Puzzle!");

			// writing to the console that informs that the puzzle has been solved
			console.log ("Puzzle solved.");
		}
	},
	noPlayGame: function(){
		document.write("You have chosen not to play!" + "<br>");

		// local variable declaration
		var x = 0;

		// local variable declaration that uses a ternary operator to validate that the user did not want to play the game
		var result = (x !== 0) ? 'Goodbye!' : 'Come back again!';
		document.write(result);
	}
}