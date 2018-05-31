	var coralineGame = ["tunnel", "spider", "garden", "children", "circus", "wyborn", "dragonfly", "amulet", "giraffe", "mouse", "snowglobe"];
	var currentWord = "";
	var currWrdLtrs = [];
	var numBlanks = 0;
	var answerDisplay = [];
	var wrongLtrs = [];
	var wins = 0;
	var losses = 0;
	var guessesLeft = 9;

	function newGame () {

		currentWord = coralineGame[Math.floor(Math.random() * coralineGame.length)];
			console.log("The current word chosen is: " + currentWord);

		currWrdLtrs = currentWord.split("");
			console.log("The current word's letters are: " + currWrdLtrs);

		numBlanks = currWrdLtrs.length;
			console.log("The number of letters in the current word is: " + numBlanks);

		guessesLeft = 9;
		wrongLtrs = [];
		answerDisplay = [];

			if (guessesLeft == 9) {
				document.getElementById("motherImage").src = "assets/images/Coraline_Mother.png";
				document.getElementById("fatherImage").src = "assets/images/Coraline_Father.png";
				document.getElementById("wybieImage").src = "assets/images/Coraline_Wybie.png";
				document.getElementById("bobinskyImage").src = "assets/images/Coraline_MrB.png";
			}

		for (i = 0; i < numBlanks; i+= 1) {
			answerDisplay.push("_");
			console.log(answerDisplay);
		}

		document.getElementById("theWord").innerHTML = answerDisplay.join(" ");
		document.getElementById("remGuesses").innerHTML = "Number of Guesses Remaining: " + " " + guessesLeft;
		document.getElementById("wins").innerHTML = "Wins: " + " " + wins;
		document.getElementById("losses").innerHTML = "Losses: " + " " + losses;
	}

	function checkLtrs(letter) {

		if (event.keyCode >= 65 && event.keyCode <= 90) {

			var correctLetter = false;

			for ( var i = 0; i < numBlanks; i += 1) {
				if(currentWord[i] == letter) {
					correctLetter = true;
				}
			}

			if(correctLetter) {
				for ( var i = 0; i < numBlanks; i += 1) {
					if(currentWord[i] == letter) {
						answerDisplay[i] = letter;
					}
				}
			}

			else {
				wrongLtrs.push(letter);
				guessesLeft--;
				}

				console.log(answerDisplay);
					
		} else {
			alert("Please select a letter from the Alphabet (from a to z)");
		}
	}

	function roundComplete() {
		console.log("Win count: " + wins +  " | Loss Count: " + losses + " | Guesses Left: " + guessesLeft);

		document.getElementById("remGuesses").innerHTML = "Number of Guesses Remaining: " + " " + guessesLeft;
		document.getElementById("theWord").innerHTML = answerDisplay.join(" ");
		document.getElementById("guessedLetters").innerHTML = "Letters Already Guessed:" + " " + wrongLtrs.join(" ");

		if (currWrdLtrs.toString() == answerDisplay.toString()) {
			wins++;
			alert("CONTRATULATIONS! You guessed '" + currentWord + "' correctly. Try another round?");
			console.log("YOU WIN!");

			document.getElementById("wins").innerHTML = "Wins: " + " " + wins;

			newGame();
			document.getElementById("guessedLetters").innerHTML = "Letters Already Guessed:" + " " + " ";

		} else if (guessesLeft == 0) {
			losses++;
			alert("OH NO! You have 0 guesses left, and all your friends have stitched buttons in their eyes now. The correct word was '" + currentWord + "'. Do you want to try again?");
			console.log("You Lost!");

			document.getElementById("losses").innerHTML = "Losses: " + " " + losses;

			newGame();
			document.getElementById("guessedLetters").innerHTML = "Letters Already Guessed:" + " " + " ";

		}
	}

	newGame();

	document.onkeyup = function(event) {
		var ltrsGuessed = String.fromCharCode(event.keyCode).toLowerCase();
			console.log("You Guessed the letter: " + ltrsGuessed); 

		checkLtrs(ltrsGuessed);
		roundComplete();
		
		if (guessesLeft == 7) {
			document.getElementById("motherImage").src = "assets/images/Mother_Buttons.png";
		}
	
		if (guessesLeft == 5) {
			document.getElementById("fatherImage").src = "assets/images/Father_Buttons.png";
		}

		if (guessesLeft == 3) {
			document.getElementById("wybieImage").src = "assets/images/Wybie_Buttons.png";
		}

		if (guessesLeft == 1) {
			document.getElementById("bobinskyImage").src = "assets/images/MrB_Buttons.png";
		}
	};

