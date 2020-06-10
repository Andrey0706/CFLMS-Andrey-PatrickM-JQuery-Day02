$(document).ready(function(){

var members = JSON.parse(simpsons);

console.log(members);

var container = document.getElementById("container");
var upperDiv = document.getElementById("upperOnes");
var lowerDiv = document.getElementById("lowerOnes");

for(let i=0;i<members.length;i++){

	if(i<2){
		upperDiv.innerHTML += `
	<div class="person" id="person${i}">
		<div class="name"><p>${members[i].name}</p></div>
		<img src="${members[i].image}" alt="">
		<div class="age"><p>${members[i].age}</p></div>
		<div class="hometown"><p>${members[i].hometown}</p></div>
	</div>
	`	
	}

	if(i>=2){
		lowerDiv.innerHTML += `
	<div class="person" id="person${i}">
		<div class="name"><p>${members[i].name}</p></div>
		<img src="${members[i].image}" alt="">
		<div class="age"><p>Age: ${members[i].age}</p></div>
		<div class="hometown"><p>Hometown: ${members[i].hometown}</p></div>
	</div>
	`	
	}



}

$(".person").css(
	{
		"background-color" : "purple",
		"color" : "white",
		"font-size" : "2.5vw",
		"text-shadow" : "7px 7px 15px black"
})



var person = document.getElementsByClassName("person");
	console.log(person);

for(let i=0;i<person.length;i++){
person[i].addEventListener("mouseenter", function(){
	highlight(i);
}, false);
person[i].addEventListener("mouseleave", function(){
	deleteClasses();
}, false);
}

function highlight(i){
	//console.log(i);
	var currentElement = i;
	var relation = members[i].relation;

for(let i=0;i<members.length;i++){
	console.log(relation);
	console.log(members[i].relation + "/n");

	if(relation == members[i].relation){
		$("#person" + i).addClass("green");
		$(".green").css("background-color", "green");
		
	} else {
		$("#person" + i).addClass("blue");
		$(".blue").css("background-color", "blue");
		
	}
}
//person[currentElement].removeClass();
}

function deleteClasses(){
	for(i=0;i<members.length;i++){
		$(".person:nth-child(" +i+ ")").removeClass("blue");
		$(".person:nth-child(" +i+ ")").removeClass("green");
		$(".person").css("background-color", "purple");

	}
}
})