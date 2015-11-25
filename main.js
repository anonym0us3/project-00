// wait for DOM to load before running JS
console.log("Sanity Check = Eez Alive");
$(window).ready( function ( event ) {
  
  // your code here
$('.btn').on("click", function handleClick() {
	count = 0;
	$('.box').empty();
});

var dog = '<img src="http://i.imgur.com/tbtS98N.png">';
var cat = '<img src="http://i.imgur.com/17mhzBU.png">';

var count = 0;
$('.box').click(function() {
	if($(this).html() === "") {
		if (count % 2 === 0) {
			$(this).html(dog);
		} else {
			$(this).html(cat);     	
     	}
     	count++;
     	// console.log(count); used for debugging to make sure clicks were countified 
    } else {
    	alert("Negative, Ghost Rider, the pattern is full!");
    }
});

});