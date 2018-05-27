var Random=Math.floor(Math.Random()*101+19)
$("#score-to-click").on("click", "crystal", function() {
var crystal = $("crystal Image");
var counter = 0;
var numberOptions = [15,10,4,1];


for (var i = 0; i < numberOptions.length; i++)
