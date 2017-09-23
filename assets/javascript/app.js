//
// variables and objects defined
//================================================================================

// objects
myQuestions = [
	{
		question: "What is not a name for Gandalf?",
		answerArr: {
			A: 'A. Mithrandir', 
			B: 'B. Stormcrow',
			C: 'C. Tharkun',
			D: 'D. Diedres'
			},
		solution: 'D'
	},
	{
		question: "What are orcs?",
		answerArr: {
			A: 'A. Monstors', 
			B: 'B. Demons',
			C: 'C. Elves',
			D: 'D. Your mother in-law'
			},
		solution: 'C'
	},
	{
		question: "Where is Mordor?",
		answerArr: {
			A: 'A. Mordor', 
			B: 'B. The Shire',
			C: 'C. Gondor',
			D: 'D. Rohan'
			},
		solution: 'A'
	}
]

// what is not a name for gandalf?
console.log(myQuestions[0].question);
// elvs
console.log(myQuestions[1].answerArr.C);

// variables

// timer
var num;
var intervalId;

//question and guesser counter
var counter = 0;
var correctCounter = 0;
var wrongCounter = 0;



var audio = new Audio("alarm.m4a");


//
// game features
//================================================================================

// starts trivia
$("#start").on("click", function(){
	//run();
	triviaStart();
});

// takes user guess
$(".guess").on("click", function(){
	checkGuess();
});


//
// game functions
//================================================================================

// setInterval, DECREASE, and STOP functions for countdown timer
function run(){
	num=5;
	intervalId = setInterval(decrease, 1000);
}

// triviaStart populates fields at start
function triviaStart(){
	// num = 10;
	// intervalId = setInterval(decrease, 1000);

	$("#prompt").html(myQuestions[counter].question);
	$("#ans0").html(myQuestions[counter].answerArr.A);
	$("#ans1").html(myQuestions[counter].answerArr.B);
	$("#ans2").html(myQuestions[counter].answerArr.C);
	$("#ans3").html(myQuestions[counter].answerArr.D);

	// counter
	counter++;
	// countdown timer
	run();
	// question #
	$("#question").html("Question " + counter);

	// trouble shooting
	//console.log(counter);

	if (counter === 4){
		stop();
		//use return to cancle the function
		//return
	}
};
console.log(myQuestions.length);
function decrease(){
	$("#timer").html("<h2> Time Remaining: " + num + "</h2>");
	num--;
	
	if (num < 0) {
		stop();
		triviaStart();
	}
};

function stop(){
	clearInterval(intervalId);
}

// checking the guess
function checkGuess(){
	$("li").click(function(){
		console.log(this.id);
		//https://www.w3schools.com/js/tryit.asp?filename=tryjs_button_text
		var x = document.getElementById(this.id).innerHTML;
		console.log(x);
	});
	//console.log(myQuestions[counter-1].solution);
	//if (this.innerhtml === )
	// if (userSelection = myQuestions[counter].solution){
	// 	$("#NEWDIV1").html(That is correct);
	// 	correctCounter++;
	// 	triviaStart();
	// }
	// else {
	// 	$(#NEWDIV2).html("That is incorrect. The correct answer was " + myQuestions[counter].solution);
	// 	wrongCounter++;
	// 	triviaStart();
	// };

};




// End of JS