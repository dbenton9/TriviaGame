//
// variables and objects defined
//================================================================================

// objects
Q1 = {
	question: "What is another name for Gandalf?",
	answerArr: ['A', 'B','C','D'],
	solution: 'A'
};

// variables
var num = 30;
var intervalId;

var audio = new Audio("alarm.m4a");


//
// game features
//================================================================================

// starts trivia
$("#start").on("click", function(){
	run();
	triviaStart();
});

//takes user guess
$(".guess").on("click", function(){
	audio.play();
});


//
// game functions
//================================================================================

// RUN, DECREASE, and STOP functions for countdown timer
function run(){
	intervalId = setInterval(decrease, 1000);
}

function decrease(){
	$("#timer").html("<h2>" + num + "</h2>");
	num--;

	if (num <= 0) {
		stop();
	}
}

function stop(){
	clearInterval(intervalId);
}


// populates fields at start
function triviaStart(){
	$("#question").html("Question 1")
	$("#prompt").html(Q1.question)
	$("#ans0").html(Q1.answerArr[0])
	$("#ans1").html(Q1.answerArr[1])
	$("#ans2").html(Q1.answerArr[2])
	$("#ans3").html(Q1.answerArr[3])
};



// if (Q1.solution === 'B') {
// 	alert("you win");
// }
// else {
// 	$("#answers".html("the correct answer was " + Q1.solution +"."))
// };