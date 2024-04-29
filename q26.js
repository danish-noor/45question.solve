//Q26.Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.
// • If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.
// • If the alien’s color isn’t green, print a statement that the player just earned 10 points.
// • Write one version of this program that runs the if block and another that runs the else block.
//<================This is a Version that runs if block:==============>
var alien_color = "green";
if (alien_color == "green") {
    console.log("congratulation! you just earned 5 points for shooting alien!");
}
else {
    console.log("congratulation! you just earned 10 points!");
}
;
//<================This is a Version that runs else block:==============>
var alien_color1 = "yellow";
if (alien_color1 === "green") {
    console.log("congratulation! you just earned 5 points for shooting alien!");
}
else {
    console.log("congratulation! you just earned 10 points!");
}
;
