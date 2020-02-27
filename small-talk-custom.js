// JavaScript Document

//Arrays with all word types
var adj = [
"aardvark is the word that I chose because it's long and I can look at it for a good length of time.", "And another thing."
	];
function newAdj(){
  var divs = document.getElementsByClassName("word adjDisp");

  for(let i=0; i < divs.length; i++){
    var randomAdj = Math.floor(Math.random() * (adj.length));
    divs[i].innerHTML = adj[randomAdj];
  }
}


//Function to clear all text
function clearText(){
  var divs = document.getElementsByClassName("word");

  for(let i=0; i < divs.length; i++){
    divs[i].innerHTML = "";
  }
}

//Function to create All new words
function allNew(){
	document.getElementsByClassName('word').innerHTML = newVerb(),newAdj(),newAdv(),newNoun();

}

//Creates a button css :action for mobile devices
document.addEventListener("touchstart", function(){}, true);