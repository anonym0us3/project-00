// wait for DOM to load before running JS
console.log("Sanity Check = Braaaaaaiiiiiiins");
$(window).ready( function (event) {
  
  // your code here

//Creating playspace for mountain
function draw() {
	var canvas = $('.canvas')[0];
	if (canvas.getContext) {
		var ctx = canvas.getContext('2d');
		ctx.beginPath();
		ctx.moveTo(0,600);
		ctx.lineTo(600,0);
		ctx.lineTo(1200,600);
		ctx.fillStyle = "orange";
		ctx.fill();
	}
}
draw();

//Declaring variables: players' initial positions & character "icons" or text
var p1Location = 0;
var p2Location = 20;
var player1 = "X";
var player2 = "Y";

//Starting positions


//Movement logic: 'Q' key moves player1; '/' key moves player2
$(window).keydown(function (e) {
	if((e.which === 81) && (p1Location < 11)) {
		$("#" + p1Location).html("");
		p1Location ++;
		$("#" + p1Location).html(player1);
	} else if((e.which === 191) && (p2Location < 31)) {
		$("#" + p2Location).html("");
		p2Location ++;
		$("#" + p2Location).html(player2);
	}
});

  //Win logic: when p1's or p2's location reaches the end of their row, winner is declared
  //Cannot figure out how to prevent 2nd player from moving after 1st player has won


//'Reset button logic: sets starting positions back to initial values , clears board of ' +
//'player icons, resets players character text/icons (if applicable) to starting positions'
$('.btn').on("click", function handleClick() {
	p1Location = 0;
	p2Location = 20;
	$('.winBox').hide();
});


});	