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
	}
]

// what is not a name for gandalf?
//console.log(myQuestions[0].question);
// elvs
// console.log(myQuestions[0].answerArr);
// console.log(myQuestions[0].solution);

// variables

// timer
var num;
var intervalId;

// counters
var counter = 0;
var correctCounter = 0;
var wrongCounter = 0;
var unanswered = 0;



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
	//$("li").click(function(){
		//console.log(this.id);
		//https://www.w3schools.com/js/tryit.asp?filename=tryjs_button_text
		var x = document.getElementById(this.id).innerHTML;
		var count = counter - 1;
		//console.log("the count is " + count);
		//console.log(myQuestions[count].solution);

		//checking the answer
		if (x === myQuestions[count].solution)
		{
			//alert("correct");
			num = 0;
			correctCounter++;
		}
		else
		{
			//alert("incorrect");
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

	if (counter > 2){
		
		console.log(counter);
		$("#question").html("<h2>Results</h2>");
		$("#prompt").html("");
		$("#ans0").html("You got " + correctCounter + " question(s) right!");
		$("#ans1").html("You got " + wrongCounter + " question(s) wrong!");
		$("#ans2").html("");
		$("#ans3").html("");
		stop();
		
		//use return to cancle the function
		return
	};

	// countdown timer
	run();

	$("#prompt").html(myQuestions[counter].question);
	$("#ans0").html(myQuestions[counter].answerArr.A);
	$("#ans1").html(myQuestions[counter].answerArr.B);
	$("#ans2").html(myQuestions[counter].answerArr.C);
	$("#ans3").html(myQuestions[counter].answerArr.D);

	// counter
	counter++;
	
	// question #
	$("#question").html("Question " + counter);

	console.log("trivia " + counter);

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






// End of JS