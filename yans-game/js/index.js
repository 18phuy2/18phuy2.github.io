function game(){
  alert("Welcome to the Desert Dillema");
var name = prompt("What is your name?")
alert("Hello "+name);
alert("Let's play a game.")
alert("Question one.");
var guess = prompt("Guess my name.")
if (guess === "Yan"){
alert("Correct.");
} else {
alert("Incorrect. You have run out of attempts.")
alert("I guess you'll never know my name then.");
}
alert("Question two.");
var fruit = prompt("Do you know which fruit contains the most water?")
switch(fruit){
case"watermelon":{
alert("Correct! This will be important.");
alert("I'm afraid I have been stalling.");
}
break;
case"strawberry":{
alert("Close, but not quite.");
alert("I'm afraid I have been stalling.")
}
break;
default:
alert("Incorrect. You have run out of attempts.")
alert("I'm afraid I have been stalling.");
break;
}
alert("You have been transported to the desert with nothing but a bundle of heavy rocks, a large sheet of plastic, a cup, a shovel, and your own very full bladder.");
alert("Sounds stupid, but you have to figure out how to drink your pee hygienically with the only necessities that you have. Or else you die of dehyration in a couple of hours.");
var dig = prompt("What do you do first? Do you dig a hole in the sand, do you urinate in the cup, or do you drink your urine straight away?")
switch(dig){
case"dig a hole in the sand":{
alert("Correct! Dig a hole in the sand approximately 4 feet by 4 feet.");
}
break;
case"urinate in the cup.":{
alert("That's not what the cup is for. Dig a hole in the sand approximately 4 wide");
}
break;
case"drink urine.":{
alert("Wow, you're very hygenic.")
}
break;
default:
alert("Incorrect. Dig a hole in the sand approximately 4 feet by 4 feet.");
break;
}
var next = prompt("What do you do next? Do you urinate in the hole right away, or do you urinate in the cup?");
switch(next){
case"urinate in the hole":{
alert("Correct! Hopefully the desert you are stranded in is very hot.");
}
break;
case"pee in the hole":{
alert("Correct! Hopefully the desert you are stranded in is very hot.");
}
break;
case"urinate in the cup":{
alert("I told you, that is not what the cup is for. You pee in the hole.");
}
break;
default:
alert("Incorrect...You urinate in the hole.");
}
var after = prompt("What do you do next? Do you place the cup in the hole, do you pee in the cup, or do you place the rocks in the hole?");
switch(after){
case"place the cup in the hole":{
alert("Correct. Congratulations, you have finally used the cup correctly");
}
break;
case"put the cup in the hole":{
alert("Correct.");
}
break;
case"place the rocks in the hole":{
alert("Incorrect, this is not what the rocks are for. You place the cup in the hole");
}
break;
case"put the rocks in the hole":{
alert("Incorrect, this is not what the rocks are for. You place the cup in the hole");
}
break;
default:
alert("Incorrect. you place the cup in the hole.")
}
var quickly = prompt("You must do the next step quickly to prevent all the liquids from evaporating. What do you do next? Do you scatter the rocks inside the hole, or do you place the sheet of plastic over the hole?");
switch(quickly){
case"place the sheet of plastic over the hole":{
alert("Correct, congratulations on using the plastic sheet correctly.");
}
break;
case"scatter the rocks inside the hole":{
alert("Incorrect, that is not what the rocks are for. ");
}
break;
default:
alert("Incorrect. You place the sheet of plastic over the hole.");
}
var rocks = prompt("Now you must figure out the purpose of the rocks. Remember, the surface area of the sheet must be larger than the area of the hole. There are two purposes for the rocks. What is the first one? Is it to be placed on the corners of the sheet to prevent them from being blown away, or will you use the rocks to flatten the sheet into the hole?");
}