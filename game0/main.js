// wait for DOM to load before running JS
console.log("Sanity Check: JS is working!");

// Declaring variables: players' initial positions
var p1Location = 0;
var p2Location = 0;

// Player 1 begins with "even" value; Player 2 on "odd". Subsequent moves add to these values so they don't overlap
var player1 = $(".player").eq(0);
var player2 = $(".player").eq(1);

// Adjusted play area to switch from pixel-based movement to percentage-based
var raceTracks = parseInt($(".col-md-12").css("width"), 10);

// Movement + win logic: 'Z' key moves player1; ']' key moves player2
$(window).on("keypress", function (e) {
  if (event.which === 122) {
    if (player1.css("left")) {
      p1Location += 2.625;
      player1.css("left", p1Location + "%");
      
      if ( parseInt(player1.css("left"), 10) >= (0.84 * raceTracks)) {
        $(".winBox").append("<img src = 'http://i.imgur.com/4BCyuZV.gif'>"); 
        // Image also exists in img/ folder, but wanted to do URLs this time
        $(".winBox").append("Trogdor the Burninator has won");
        // Turning off keypress listener so other player cannot continue to iterate moves
        $(window).off("keypress");
      }
    }
  } else if (event.which === 93) {
    if (player2.css("left")) {
      p2Location += 2.625;
      player2.css("left", p2Location + "%");
      
      if ( parseInt(player2.css("left"), 10) >= (0.84 * raceTracks)) {
        $(".winBox").append("<img src = 'http://i.imgur.com/irBEnt8.jpg'>");
        // Image also exists in img/ folder, but wanted to do URLs this time
        $(".winBox").append("Bacon has survived... if only to be eated another day");
        // Turning off keypress listener so other player cannot continue to iterate moves
        $(window).off("keypress");
    }
  }
}

});

// Reset button refreshes the page, thereby reactivating keypress listener. Couldn't figure out how to reset it
// so that the $(window).on("keypress") function would work without having to refresh the entire page
  $(".btn").click(function () {
  location.reload();

}); 