// wait for DOM to load before running JS
console.log("Sanity Check = Braaaaaaiiiiiiins");
$(window).ready( function ( event ) {
  
  // your code here

var p1Location = 0;
var p2Location = 20;
var player1 = 'X';
var player2 = 'O';

//Starting positions
$('#0').append(player1);
$('#20').append(player2);

//Movement: 'q' key moves player1; '/' key moves player2 
$(window).keydown(function(e) {
	if(e.which === 81) {
		$("#" + p1Location).text("");
		p1Location ++;
		$("#" + p1Location).text(player1);
	} else if(e.which === 191) {
		$("#" + p2Location).text("");
		p2Location ++;
		$("#" + p2Location).text(player2);
	}
	});
//Reset button. Resets starting position values, clears board, resets players character icons to starting positions
$('.btn').on("click", function handleClick() {
	p1Location = 0;
	p2Location = 20;
	$('.box').empty();
	$('#0').append(player1);
	$('#20').append(player2);
});


});	