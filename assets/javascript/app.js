//
// variables and objects defined
//================================================================================

// questions in array -> object format
myQuestions = [
	{
		question: "What is not a name for Gandalf?",
		answerArr: {
			A: 'A. Mithrandir', 
			B: 'B. Stormcrow',
			C: 'C. Tharkun',
			D: 'D. Diedres'
			},
		solution: 'D. Diedres'
	},
	{
		question: "What are orcs?",
		answerArr: {
			A: 'A. Monstors', 
			B: 'B. Demons',
			C: 'C. Elves',
			D: 'D. Your mother in-law'
			},
		solution: 'C. Elves'
	},
	{
		question: "Where is Mount Doom?",
		answerArr: {
			A: 'A. Mordor', 
			B: 'B. The Shire',
			C: 'C. Gondor',
			D: 'D. Rohan'
			},
		solution: 'A. Mordor'
	},
	{
		question: "Gollum was originally what type of creature?",
		answerArr: {
			A: 'A. Dog', 
			B: 'B. Wizard',
			C: 'C. Dwarf',
			D: 'D. Hobbit'
			},
		solution: 'D. Hobbit'
	},
	{
		question: "Aragorn is part of the Dunadein race and is __ years old?",
		answerArr: {
			A: 'A. 1024', 
			B: 'B. 50',
			C: 'C. 78',
			D: 'D. 224'
			},
		solution: 'C. 78'
	},
	{
		question: "How many Ring Wraiths are there?",
		answerArr: {
			A: 'A. 7', 
			B: 'B. 8',
			C: 'C. 9',
			D: 'D. 10'
			},
		solution: 'C. 9'
	},
]


// timer variables
var num;
var intervalId;

// counter variables
var counter = 0;
var correctCounter = 0;
var wrongCounter = 0;
var unanswered = 0;



var audio = new Audio("alarm.m4a");


//
// game features
//================================================================================

// starts trivia
$("#vanish").on("click", function(){
	triviaStart();
});

// takes user guess
$(".guess").on("click", function(){
	
	// source https://www.w3schools.com/js/tryit.asp?filename=tryjs_button_text
	var x = document.getElementById(this.id).innerHTML;
	var count = counter - 1;
	

	// checking the answer
	if (x === myQuestions[count].solution)
	{
		// if correct
		num = 0;
		correctCounter++;
	}
	else
	{
		// if incorrect
		$("#prompt").html("<h3>Wrong! <br> The correct answer is " + myQuestions[count].solution + ".</h3>");
		num = 2;
		wrongCounter++;
		$("#ans0").html("");
		$("#ans1").html("");
		$("#ans2").html("");
		$("#ans3").html("");
	}
});


//
// game functions
//================================================================================



// triviaStart populates fields at start
function triviaStart(){

	$("#vanish").html("<p></p>");
	// game over and end results after all questions have been cycled through
	if (counter > 5){
		
		var finalScore = (correctCounter/myQuestions.length)*100;
		console.log(finalScore);
		$("#question").html("<h2>Results</h2>");
		$("#prompt").html("");
		$("#ans0").html("You got " + correctCounter + " question(s) right!");
		$("#ans1").html("You got " + wrongCounter + " question(s) wrong!");
		$("#ans2").html(finalScore + "%");
		$("#ans3").html("");
		stop();
		
		// use return to cancel the function, end and reset game
		return setTimeout(function(){
			counter = 0;
			correctCounter = 0;
			wrongCounter = 0;
			$("#vanish").html("<button>Start</button>");
			$("#question").html("");
			$("#prompt").html("");
			$("#ans0").html("");
			$("#ans1").html("");
			$("#ans2").html("");
			$("#ans3").html("");
		}, 5000);
	};

	// countdown timer
	run();

	// used to display questions and answer array
	$("#prompt").html(myQuestions[counter].question);
	$("#ans0").html(myQuestions[counter].answerArr.A);
	$("#ans1").html(myQuestions[counter].answerArr.B);
	$("#ans2").html(myQuestions[counter].answerArr.C);
	$("#ans3").html(myQuestions[counter].answerArr.D);

	// counter
	counter++;
	
	// question #
	$("#question").html("Question " + counter);

};

// setInterval, DECREASE, and STOP functions for countdown timer
function run(){
	num=10;
	intervalId = setInterval(decrease, 1000);
}


function decrease(){
	$("#timer").html("<h2> Time Remaining: " + num + "</h2>");
	num--;
	
	if (num < 0) {
		stop();
		triviaStart();
	};

};

function stop(){
	clearInterval(intervalId);
}



// End of Trivia Game JS