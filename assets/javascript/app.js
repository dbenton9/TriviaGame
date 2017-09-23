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

//question counter
var counter = 0;

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
// [function run(){
// 	intervalId = setInterval(decrease, 1000);
// }]

// triviaStart populates fields at start
function triviaStart(){
	
	num = 10;
	intervalId = setInterval(decrease, 1000);

	$("#prompt").html(myQuestions[counter].question);
	$("#ans0").html(myQuestions[counter].answerArr.A);
	$("#ans1").html(myQuestions[counter].answerArr.B);
	$("#ans2").html(myQuestions[counter].answerArr.C);
	$("#ans3").html(myQuestions[counter].answerArr.D);
	counter++;
	$("#question").html("Question " + counter);

	if (counter === myQuestions.length){
		stop();
	}
};

function decrease(){
	$("#timer").html("<h2>" + num + "</h2>");
	num--;
	console.log(num);
	if (num < 0) {
		triviaStart();
	}
}

function stop(){
	clearInterval(intervalId);
}

// checking the guess
function checkGuess(){

}






// if (Q1.solution === 'B') {
// 	alert("you win");
// }
// else {
// 	$("#answers".html("the correct answer was " + Q1.solution +"."))
// };