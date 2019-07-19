// Select all divs and give them a purple background
$("div").css("backgroundColor", "purple");

// // Select the divs with class "highlight" and make them 200px wide
$("div.highlight").css("width", "200px");

// // Select the div with id "third" and give it a orange border
$("div#third").css("border", "4px solid orange");

// // Bonus: Select the first div only and change its font color to pink
// use css pseduo-selector
$("div:first-of-type").css("color", "pink");
// css first also works, jQuery shortcut, this first is slower
//$("div:first").css("color", "pink");