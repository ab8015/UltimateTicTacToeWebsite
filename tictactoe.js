var turnNumber = 1;
var straightLinesToWin;
var tableRepresentation;
var cxt;

// function defined on the spot like this
window.onload = function() {

	straightLinesToWin = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
	// this is why it was coming out to be undefined
	tableRepresentation = new Array();

	for(var i=0; i<9; i++) {
		tableRepresentation[i] = ' ';
	}
}

// == checks just equality, === checks equality and type equality
// say function before every function, dont specify types for vaRABLES
function canvasClicked(canvasNumber) {
	var canvasString = "canvas"+canvasNumber;
	var canvasById = document.getElementById(canvasString);
	var cxt = canvasById.getContext("2d");
	
	if (tableRepresentation[canvasNumber - 1] == " ") {
		if (turnNumber % 2 != 0) {
			cxt.beginPath();
			cxt.moveTo(10,10);
			cxt.lineTo(40,40);
			cxt.moveTo(40,10);
			cxt.lineTo(10,40);
			cxt.stroke();
			cxt.closePath();
			tableRepresentation[canvasNumber - 1] = 'X';
	    } else {
	    	cxt.beginPath();
	    	cxt.arc(25,25,20,0,Math.PI*2,true);
	    	cxt.stroke();
	    	cxt.closePath();
	    	tableRepresentation[canvasNumber - 1] = 'O';
	    }

	    turnNumber++;
	    isGameWonBy(tableRepresentation[canvasNumber-1]);
	   
	    if (turnNumber > 9) {
	    	// it seems to make this window appear first before making the last X
	    	window.alert("It's a draw!");
	    	location.reload(true);
	    }

	} else {
		window.alert("Already Taken!");
	}

function isGameWonBy(squareState) {
	
	for (var i = 0; i < straightLinesToWin.length; i++) {
		if (tableRepresentation[straightLinesToWin[i][0]] === squareState
		  && tableRepresentation[straightLinesToWin[i][1]] === squareState
		  && tableRepresentation[straightLinesToWin[i][2]] === squareState) {
			window.alert(squareState + "WON");
		    location.reload(true);
		}
	}
	
}	
	
}