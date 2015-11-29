// wait for DOM to load before running JS
console.log("Sanity Check = Braaaaaaiiiiiiins");
$(window).ready( function (event) {
  
  // your code here

//Declaring variables: players' initial positions & character "icons" or text
var p1Location = 0;
var p2Location = 20;
var player1 = '<img src = img/bran.jpg>';
var player2 = '<img src = img/rickon.jpg>';

//Starting positions
$('#0').append(player1);
$('#20').append(player2);

//Movement logic: 'Q' key moves player1; '/' key moves player2
// 
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
	// 'Attempted to include additional IF/ELSE IF in case both keys were pressed simultaneously. ' +
	// 'This didn't work, as only the 2nd of the keypresses would be registered, and the first key ' +
	// 'pressed wouldn't register additional moves'

	// else if((e.which === 81) && (e.which === 191)) {
	// 	$("#" + p1Location).html("");
	// 	p1Location ++;
	// 	$("#" + p1Location).html(player1);
	// 	("#" + p2Location).html("");
	// 	p2Location ++;
	// 	$("#" + p2Location).html(player2);
	// }
});

  //Win logic: when p1's or p2's location reaches the end of their row, winner is declared
  //Cannot figure out how to prevent 2nd player from moving after 1st player has won
$(window).keydown(function (e) {
	if(p1Location === 11) {
		$('.winBox').show();
		$('.winBox').text("Bran survives!");
	} else if (p2Location === 31) {
		$('.winBox').show();
		$('.winBox').text("Rickon lives!");
	}
});

//'Reset button logic: sets starting positions back to initial values , clears board of ' +
//'player icons, resets players character text/icons (if applicable) to starting positions'
$('.btn').on("click", function handleClick() {
	p1Location = 0;
	p2Location = 20;
	$('.box').empty();
	$('#0').append(player1);
	$('#20').append(player2);
	$('.winBox').hide();
});


});	